'use strict';

/* eslint-disable no-restricted-syntax */
/*
 * Copyright (c) 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

const cbor = require('cbor');
const net = require('net');
const smData = require('aws-greengrass-core-sdk/stream-manager/data');
const exceptions = require('./exceptions');
const util = require('./util');

// Consts
const PROTOCOL_VERSION = '1.0.0';
const SDK_VERSION = '1.0.0';
const CONNECT_VERSION = 1;

const removeFromArray = (arr, f) => {
    arr.indexOf(f) !== -1 && arr.splice(arr.indexOf(f), 1);
};

/**
 * Stream manager client
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 *
 * @example <caption>StreamManager Usage</caption>
 * const { StreamManagerClient } = require('aws-greengrass-core-sdk/stream-manager');
 * const client = new StreamManagerClient();
 * c.onConnected(async () => {
 *     // Do work with the client (c) here.
 * });
 */
class StreamManagerClient {
    #closed = false;

    /**
     * @type {module:net.Socket}
     */
    #socket = null;

    #authToken = null;

    #connected = false;

    /**
     * @typedef Logger
     * @type {Object}
     * @property {function(...*)} error
     * @property {function(...*)} info
     * @property {function(...*)} debug
     */

    /**
     * @type {?Logger}
     */
    #logger = null;

    #requestMap = {};

    connectCallbacks = [];

    errorCallbacks = [];

    #defaultParams = {
        port: null,
        host: '127.0.0.1',
        onConnectCb: null,
        onErrorCb: null,
        logger: {
            error: console.error,
            debug: console.debug,
            info: console.info,
        },
    };

    /**
     * Constructs a new Stream Manager client. Once connected, <tt>onConnectCb</tt> will be called and
     * the client can then be used.
     *
     * @param {Object?} opts All these options are optional.
     * @param {Number} opts.port
     * @param {String} opts.host
     * @param {Function?} opts.onConnectCb Optional callback to be called once the client has connected.
     * @param {Function(Error)?} opts.onErrorCb Optional, but highly suggested callback to be called when a connection error occurs.
     * @param {Logger?} opts.logger
     */
    constructor(opts) {
        let {
            // eslint-disable-next-line prefer-const
            port, host, onConnectCb, onErrorCb, logger,
        } = {
            // Apply defaults
            ...this.#defaultParams,
            // Then possibly override them with what the user set
            ...opts,
        };

        if (port === null) {
            port = parseInt(process.env.STREAM_MANAGER_SERVER_PORT || 8088, 10);
        }
        this.#logger = logger;
        this.port = port;
        this.host = host;
        this.#authToken = process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN || null;

        if (typeof onConnectCb === 'function') {
            this.onConnected(onConnectCb);
        }
        if (typeof onErrorCb === 'function') {
            this.onError(onErrorCb);
        }

        this.__connect();
    }

    async __connect() {
        try {
            await new Promise((resolve, reject) => {
                if (this.#closed) {
                    return reject(new exceptions.StreamManagerException('Client is closed and cannot be reopened'));
                }
                if (this.#connected) {
                    return resolve();
                }

                const newSock = net.createConnection({
                    port: this.port,
                    host: this.host,
                    // Set high water mark so that we can read 1 full packet (1GB) at a time instead of needing to
                    // try to read multiple times and combine the results. The HWM adjusts how much the socket will
                    // buffer when reading.
                    readableHighWaterMark: util.MAX_PACKET_SIZE,
                }, async () => {
                    try {
                        // Connection started
                        this.#logger.debug(`Opening connection to ${this.host}:${this.port}`);
                        this.#connected = false;

                        const request = new smData.ConnectRequest()
                            .withProtocolVersion(PROTOCOL_VERSION)
                            .withSdkVersion(SDK_VERSION)
                            .withAuthToken(this.#authToken)
                            .withRequestId(util.uuidv4());

                        // Write the connect version
                        newSock.write(util.intToBuffer(CONNECT_VERSION, 1));

                        // Write request to socket
                        const frame = new smData.MessageFrame(smData.Operation.Connect, cbor.encode(request.asMap()));
                        const byteFrame = util.encodeFrame(frame);
                        newSock.write(byteFrame.header);
                        newSock.write(byteFrame.payload);

                        await this.__read(newSock);
                        // Only now that we're connected should we set/replace the socket
                        this.#socket = newSock;
                        resolve();
                    } catch (errors) {
                        reject(errors);
                    }
                });

                newSock.on('error', (e) => {
                    this.#logger.error(e);
                    this.errorCallbacks.forEach((f) => f(e));
                    newSock.end();

                    if (!this.#connected) {
                        reject(e);
                    }
                });

                newSock.on('end', () => {
                    this.#logger.info('Socket is ending');
                });

                newSock.on('close', () => {
                    newSock.destroy();
                    this.#connected = false;
                });
            });

            // Set us to be in connected mode
            this.#connected = true;
            this.#logger.info('Successfully connected');
            this.connectCallbacks.forEach((f) => {
                try {
                    f();
                } finally {
                    // After calling the connect callback remove it so we don't call it multiple times.
                    // A client should only connect once.
                    removeFromArray(this.connectCallbacks, f);
                }
            });
        } catch (e) {
            this.#logger.error(e);
            this.errorCallbacks.forEach((f) => f(e));
            throw e;
        }
    }

    __readSocket(n, socket, resolve = null, reject = null) {
        if (resolve && reject) {
            if (this.#closed) {
                reject();
            }

            const r = socket.read(n);
            if (r === null) {
                socket.once('readable', () => {
                    this.__readSocket(n, socket, resolve, reject);
                });
                return;
            }
            resolve(r);
            return;
        }

        return new Promise((res, rej) => {
            if (this.#closed) {
                rej();
            }
            this.__readSocket(n, socket, res, rej);
        });
    }

    async __read(socket = this.#socket) {
        if (this.#connected) {
            const frame = await this.__readMessageFrame(socket);
            this.__handleReadResponse(cbor.decodeFirstSync(frame.payload), frame);
        } else {
            // Read connect version
            const connectResponseVersion = util.intFromBuffer(await this.__readSocket(1, socket));
            if (connectResponseVersion !== CONNECT_VERSION) {
                this.#logger.error('Unexpected response from the server, Connect version:', connectResponseVersion);
                throw new exceptions.ConnectFailedException('Failed to establish connection with the server');
            }

            // Read connect response
            let response = await this.__readMessageFrame(socket);

            if (response.operation === smData.Operation.ConnectResponse) {
                const payload = cbor.decodeFirstSync(response.payload);
                response = smData.ConnectResponse.fromMap(payload);
                this.#logger.debug('Received ConnectResponse from server:', response);
            } else {
                this.#logger.error('Received data with unexpected operation', response.operation);
                throw new exceptions.ConnectFailedException('Failed to establish connection with the server');
            }

            if (response.status !== smData.ResponseStatusCode.Success) {
                this.#logger.error('Received ConnectResponse with unexpected status', response.status);
                throw new exceptions.ConnectFailedException('Failed to establish connection with the server');
            }
        }

        // Put ourselves back in the event loop to handle the next messages
        setImmediate(async () => {
            try {
                await this.__read();
            } catch (e) {
                // Only bubble up the errors when we're actually connected and not closed
                if (this.#connected && !this.#closed) {
                    this.errorCallbacks.forEach((f) => f(e));
                }
            }
        });
    }

    async __readMessageFrame(socket) {
        const length = util.intFromBuffer(await this.__readSocket(4, socket));
        const operation = util.intFromBuffer(await this.__readSocket(1, socket));

        let op = smData.Operation.fromMap(operation);
        if (typeof op === 'undefined') {
            this.#logger.error('Found unknown operation', operation);
            op = smData.Operation.Unknown;
        }

        return new smData.MessageFrame(op, await this.__readSocket(length - 1, socket));
    }

    __handleReadResponse(data, frame) {
        if (frame.operation === smData.Operation.ReadMessagesResponse) {
            const response = smData.ReadMessagesResponse.fromMap(data);
            this.#logger.debug('Received ReadMessagesResponse from server');
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.CreateMessageStreamResponse) {
            const response = smData.CreateMessageStreamResponse.fromMap(data);
            this.#logger.debug('Received CreateMessageStreamResponse from server', frame);
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.DeleteMessageStreamResponse) {
            const response = smData.DeleteMessageStreamResponse.fromMap(data);
            this.#logger.debug('Received DeleteMessageStreamResponse from server', frame);
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.AppendMessageResponse) {
            const response = smData.AppendMessageResponse.fromMap(data);
            this.#logger.debug('Received AppendMessageResponse from server', frame);
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.ListStreamsResponse) {
            const response = smData.ListStreamsResponse.fromMap(data);
            this.#logger.debug('Received ListStreamsResponse from server', frame);
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.DescribeMessageStreamResponse) {
            const response = smData.DescribeMessageStreamResponse.fromMap(data);
            this.#logger.debug('Received DescribeMessageStreamResponse from server', frame);
            this.#requestMap[response.requestId](response);
        } else if (frame.operation === smData.Operation.Unknown) {
            this.#logger.error('Received response with unknown operation from server', frame);
            try {
                const { requestId } = cbor.decodeFirstSync(frame.payload);
                this.#requestMap[requestId](frame);
            } catch {
                // We tried our best to figure out the request id, but it failed.
                // We already logged the unknown smData.Operation, so there's nothing
                // else we can do at this point
            }
        } else {
            this.#logger.error('Received data with unhandled operation', frame.operation);
        }
    }

    async _sendAndReceive(operation, data) {
        if (this.#closed) {
            throw new exceptions.StreamManagerException('Client is closed and cannot be reopened');
        }

        if (data.requestId === null) {
            // eslint-disable-next-line no-param-reassign
            data.requestId = util.uuidv4();
        }

        const validation = util.isInvalid(data);
        if (validation) {
            throw new exceptions.ValidationException(validation);
        }

        // If we're not connected, immediately try to reconnect
        if (!this.#connected) {
            await this.__connect();
        }

        const promise = new Promise(((resolve, reject) => {
            this.#requestMap[data.requestId] = (result) => {
                // Drop async queue from request map
                delete this.#requestMap[data.requestId];
                if (result instanceof smData.MessageFrame && result.operation === smData.Operation.Unknown) {
                    reject(new exceptions.ClientException('Received response with unknown operation from server'));
                }

                resolve(result);
            };
        }));

        // Write request to socket
        const frame = new smData.MessageFrame(operation, cbor.encode(data.asMap()));
        const byteFrame = util.encodeFrame(frame);
        this.#socket.write(byteFrame.header);
        this.#socket.write(byteFrame.payload);

        return promise;
    }

    static __validateReadMessagesOptions(options) {
        if (options !== null) {
            if (!(options instanceof smData.ReadMessagesOptions)) {
                throw new exceptions.ValidationException('options argument to read_messages must be a ReadMessageOptions object');
            }
            const validation = util.isInvalid(options);
            if (validation) {
                throw new exceptions.ValidationException(validation);
            }

            if (
                options.minMessageCount !== null
                && options.maxMessageCount !== null
                && options.minMessageCount > options.maxMessageCount
            ) {
                throw new exceptions.ValidationException('minMessageCount must be less than or equal to maxMessageCount');
            }
        }
    }

    /**
     * Append a message into the specified message stream. Returns the sequence number of the message
     * if it was successfully appended.
     *
     * @param streamName {string} The name of the stream to append to.
     * @param data {Buffer} Buffer containing the data to be written.
     * @returns {Promise<Number>}
     */
    async appendMessage(streamName, data) {
        const request = new smData.AppendMessageRequest().withName(streamName).withPayload(data);
        const result = await this._sendAndReceive(smData.Operation.AppendMessage, request);
        util.throwOnErrorResponse(result);
        return result.sequenceNumber;
    }

    /**
     * Create a message stream with a given definition.
     *
     * @param definition {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     * @returns {Promise<void>}
     */
    async createMessageStream(definition) {
        if (!(definition instanceof smData.MessageStreamDefinition)) {
            throw new exceptions.ValidationException('definition argument to create_stream must be a MessageStreamDefinition object');
        }
        const request = new smData.CreateMessageStreamRequest().withDefinition(definition);
        const result = await this._sendAndReceive(smData.Operation.CreateMessageStream, request);
        util.throwOnErrorResponse(result);
    }

    /**
     * Deletes a message stream based on its name. Nothing is returned if the request succeeds.
     * An error will be thrown if the request fails.
     *
     * @param streamName {string} The name of the stream to be deleted.
     * @returns {Promise<void>}
     */
    async deleteMessageStream(streamName) {
        const request = new smData.DeleteMessageStreamRequest().withName(streamName);
        const result = await this._sendAndReceive(smData.Operation.DeleteMessageStream, request);
        util.throwOnErrorResponse(result);
    }

    /**
     * Read message(s) from a chosen stream with options. If no options are specified it will try to read
     * 1 message from the stream.
     *
     * @param streamName {string} The name of the stream to read from.
     * @param options {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions?} Options used when reading from the stream of type {@linkcode aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}.
     *     Defaults are:
     * <ul>
     *     <li>desiredStartSequenceNumber: 0</li>
     *     <li>minMessageCount: 1</li>
     *     <li>maxMessageCount: 1</li>
     *     <li>readTimeoutMillis: 0 <pre>// Where 0 here represents that the server will immediately return the messages
     * // or an exception if there were not enough messages available.</pre></li>
     * </ul>
     * <p>
     *     If desiredStartSequenceNumber is specified in the options and is less
     *     than the current beginning of the stream, returned messages will start
     *     at the beginning of the stream and not necessarily the desiredStartSequenceNumber.
     * </p>
     * @returns {Promise<aws-greengrass-core-sdk.StreamManager.Message[]>} List of one or more messages.
     */
    async readMessages(streamName, options = null) {
        StreamManagerClient.__validateReadMessagesOptions(options);
        const request = new smData.ReadMessagesRequest().withStreamName(streamName).withReadMessagesOptions(options);
        const result = await this._sendAndReceive(smData.Operation.ReadMessages, request);
        util.throwOnErrorResponse(result);
        return result.messages;
    }

    /**
     * List the streams in StreamManager. Returns a list of their names.
     *
     * @returns {Promise<String[]>}
     */
    async listStreams() {
        const request = new smData.ListStreamsRequest();
        const result = await this._sendAndReceive(smData.Operation.ListStreams, request);
        util.throwOnErrorResponse(result);
        return result.streams;
    }

    /**
     * Describe a message stream to get metadata including the stream's definition,
     * size, and exporter statuses.
     *
     * @param streamName {string} The name of the stream to describe
     * @returns {Promise<aws-greengrass-core-sdk.StreamManager.MessageStreamInfo>}
     */
    async describeMessageStream(streamName) {
        const request = new smData.DescribeMessageStreamRequest().withName(streamName);
        const result = await this._sendAndReceive(smData.Operation.DescribeMessageStream, request);
        util.throwOnErrorResponse(result);
        return result.messageStreamInfo;
    }

    /**
     * Add a callback for when the client connects.
     * @param f {function}
     */
    onConnected(f) {
        if (this.#connected) {
            f();
        } else {
            this.connectCallbacks.push(f);
        }
    }

    /**
     * Add a callback for when an error occurs.
     * @param f {function}
     */
    onError(f) {
        this.errorCallbacks.push(f);
    }

    /**
     * Close the connection
     */
    close() {
        if (this.#socket) {
            this.#socket.end();
        }
        this.#closed = true;
    }
}

module.exports = {
    ...smData,
    StreamManagerClient: StreamManagerClient,
    ...exceptions,
};
