/*
 * Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/** @type {Buffer} */
const { Buffer } = require('buffer');

const GreengrassCommon = require('aws-greengrass-common-js');
const Lambda = require('./lambda');
const Util = require('./util');

const { envVars } = GreengrassCommon;
const { MY_FUNCTION_ARN } = envVars;
const { SHADOW_FUNCTION_ARN } = envVars;
const { ROUTER_FUNCTION_ARN } = envVars;

/**
 * Constructs a service interface object. Each API operation is exposed as a function on service.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk
 *
 * @example <caption>Sending a Request Using IotData</caption>
 * var iotdata = new GG.IotData();
 * iotdata.getThingShadow(params, function (err, data) {
 *   if (err) console.log(err, err.stack); // an error occurred
 *   else     console.log(data);           // successful response
 * });
 */
class IotData {
    /**
     * Constructs a service object. This object has one method for each API operation.
     *
     * @example <caption>Constructing a IotData object</caption>
     * var iotdata = new GG.IotData();
     */
    constructor() {
        this.lambda = new Lambda();
    }

    /**
     * Called when a response from the service is returned.
     *
     * @callback iotDataCallback
     * @param err {Error} The error object returned from the request. Set to <tt>null</tt> if the request is successful.
     * @param data {Object} The de-serialized data returned from the request. Set to <tt>null</tt> if a request error occurs.
     * @param data.payload {Buffer|TypedArray|Blob|String} The state information in JSON format
     */
    /**
     * Gets the thing shadow for the specified thing.
     *
     * @param params {Object}
     * @param params.thingName {String} The name of the thing.
     * @param callback {iotDataCallback} The callback.
     *
     * @example <caption>Calling the getThingShadow operation</caption>
     * var params = {
     *   thingName: 'STRING_VALUE' // required
     * };
     * iotdata.getThingShadow(params, function(err, data) {
     *   if (err) console.log(err, err.stack); // an error occurred
     *   else     console.log(data);           // successful response
     * });
     */
    getThingShadow(params, callback) {
        const thingName = Util.getParameter(params, 'thingName');
        if (thingName === undefined) {
            callback(new Error('"thingName" is a required parameter.'), null);
            return;
        }

        const payload = '';
        this._shadowOperation('get', thingName, payload, callback);
    }

    /**
     * Updates the thing shadow for the specified thing.
     *
     * @param params {Object}
     * @param params.thingName {String} The name of the thing.
     * @param params.payload {String} The state information as a JSON string.
     * @param callback {iotDataCallback} The callback.
     *
     * @example <caption>Calling the updateThingShadow operation</caption>
     * var params = {
     *   payload: 'Proper JSON data', // required
     *   thingName: 'STRING_VALUE' // required
     * };
     * iotdata.updateThingShadow(params, function(err, data) {
     *   if (err) console.log(err, err.stack); // an error occurred
     *   else     console.log(data);           // successful response
     * });
     */
    updateThingShadow(params, callback) {
        const thingName = Util.getParameter(params, 'thingName');
        if (thingName === undefined) {
            callback(new Error('"thingName" is a required parameter.'), null);
            return;
        }

        const payload = Util.getParameter(params, 'payload');
        if (payload === undefined) {
            callback(new Error('"payload" is a required parameter.'), null);
            return;
        }

        this._shadowOperation('update', thingName, payload, callback);
    }

    /**
     * Call shadow lambda to delete the shadow state.
     *
     * @param params {Object}
     * @param params.thingName {String} The name of the thing whose shadow should be deleted.
     * @param callback {iotDataCallback} The callback.
     */
    deleteThingShadow(params, callback) {
        const thingName = Util.getParameter(params, 'thingName');
        if (thingName === undefined) {
            callback(new Error('"thingName" is a required parameter.'), null);
            return;
        }

        const payload = '';
        this._shadowOperation('delete', thingName, payload, callback);
    }

    /**
     * Publishes a message within Greengrass.
     *
     * @param params {Object}
     * @param params.topic {String} The name of the MQTT topic.
     * @param params.payload {Buffer|TypedArray|Blob|String} The payload to be sent.
     * @param params.queueFullPolicy {'AllOrError'|'BestEffort'} Specify whether to enforce message delivery to all destinations. Options are 'AllOrError' and 'BestEffort'. Defaults to 'BestEffort' when omitted.
     * @param callback {iotDataCallback} The callback.
     *
     * @example <caption>Calling the publish operation</caption>
     * var params = {
     *   topic: 'STRING_VALUE', // required
     *   payload: new Buffer('...') || 'STRING_VALUE',
     *   queueFullPolicy: 'AllOrError' || 'BestEffort'
     * };
     * iotdata.publish(params, function(err, data) {
     *   if (err) console.log(err, err.stack); // an error occurred
     *   else     console.log(data);           // successful response
     * });
     */
    publish(params, callback) {
        const topic = Util.getParameter(params, 'topic');
        if (topic === undefined) {
            callback(new Error('"topic" is a required parameter'), null);
            return;
        }

        const payload = Util.getParameter(params, 'payload');
        if (payload === undefined) {
            callback(new Error('"payload" is a required parameter'), null);
            return;
        }

        // this is an optional parameter
        const queueFullPolicy = Util.getParameter(params, 'queueFullPolicy');

        const context = {
            custom: {
                source: MY_FUNCTION_ARN,
                subject: topic,
                queueFullPolicy: '',
            },
        };

        switch (queueFullPolicy) {
            case 'BestEffort':
            case 'AllOrError':
                context.custom.queueFullPolicy = queueFullPolicy;
                break;
            case '':
            case undefined:
            case null:
                break;
            default:
                callback(new Error(`queueFullPolicy "${queueFullPolicy}" is not supported`), null);
                break;
        }

        const buff = Buffer.from(JSON.stringify(context));
        const clientContext = buff.toString('base64');

        const invokeParams = {
            FunctionName: ROUTER_FUNCTION_ARN,
            InvocationType: 'Event',
            ClientContext: clientContext,
            Payload: payload,
        };

        console.log(`Publishing message on topic "${topic}" with Payload "${payload}"`);

        this.lambda.invoke(invokeParams, (err, data) => {
            if (err) {
                callback(err, null); // an error occurred
            } else {
                callback(null, data); // successful response
            }
        });
    }

    _shadowOperation(operation, thingName, payload, callback) {
        const topic = `$aws/things/${thingName}/shadow/${operation}`;
        const context = {
            custom: {
                subject: topic,
            },
        };

        const clientContext = Buffer.from(JSON.stringify(context)).toString('base64');
        const invokeParams = {
            FunctionName: SHADOW_FUNCTION_ARN,
            ClientContext: clientContext,
            Payload: payload,
        };

        console.log(`Calling shadow service on topic "${topic}" with payload "${payload}"`);
        this.lambda.invoke(invokeParams, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
}

module.exports = IotData;
