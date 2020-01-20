/* eslint-disable no-restricted-syntax */
/*
 * Copyright (c) 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

const smData = require('aws-greengrass-core-sdk/stream-manager/data');
const exceptions = require('./exceptions');

// eslint-disable-next-line no-bitwise
const MAX_PACKET_SIZE = 1 << 30;
const LENGTH_FIELD_SIZE_BYTES = 4;
const OP_FIELD_SIZE_BYTES = 1;
const HEADER_SIZE_BYTES = LENGTH_FIELD_SIZE_BYTES + OP_FIELD_SIZE_BYTES;

const intToBuffer = (i, length = 4) => {
    const buf = Buffer.alloc(length);
    if (length === 4) {
        buf.writeInt32BE(i, 0);
    } else if (length === 1) {
        buf.writeInt8(i, 0);
    } else {
        throw new Error('Illegal value specified for intToBuffer length. Must be 1 or 4.');
    }
    return buf;
};

const intFromBuffer = (b) => {
    if (b.length >= 4) {
        return b.readInt32BE(0);
    } else {
        return b.readInt8(0);
    }
};

const encodeFrame = (frame) => {
    if (frame.payload.length + 1 > MAX_PACKET_SIZE) {
        throw new exceptions.RequestPayloadTooLargeException();
    }

    const buf = Buffer.alloc(HEADER_SIZE_BYTES);
    buf.writeInt32BE(frame.payload.length + 1, 0);
    buf.writeInt8(frame.operation.asMap(), LENGTH_FIELD_SIZE_BYTES);
    return { header: buf, payload: frame.payload };
};

/**
 * From https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @ignore
 * @returns {string}
 */
const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = Math.random() * 16 | 0;
    const
        // eslint-disable-next-line no-bitwise,no-mixed-operators
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

const isInvalid = (o) => {
    if (o === null || typeof o === 'undefined') {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(o).constructor, 'validationsMap')) {
        return false;
    }

    for (const [propName, validations] of Object.entries(Object.getPrototypeOf(o).constructor.validationsMap)) {
        if (!(propName in o)) {
            return `Object is malformed, missing property: ${propName}`;
        }

        // Validate all properties on arrays
        if (o[propName] instanceof Array) {
            for (const [i, v] of o[propName].entries()) {
                const result = isInvalid(v);
                if (result) {
                    return `Property ${propName}[${i}] is invalid because ${result}`;
                }
            }
        }

        // Validate the property
        if ('required' in validations && validations.required && o[propName] === null) {
            return `Property ${propName} is required, but was null`;
        }
        if (
            'minLength' in validations
            && o[propName] !== null
            && o[propName].length < validations.minLength
        ) {
            return `Property ${propName} must have a minimum length of ${validations.minLength}, but found length of ${o[propName].length}`;
        }
        if (
            'maxLength' in validations
            && o[propName] !== null
            && o[propName].length > validations.maxLength
        ) {
            return `Property ${propName} must have a maximum length of ${validations.maxLength}, but found length of ${o[propName].length}`;
        }
        if (
            'minItems' in validations
            && o[propName] !== null
            && o[propName].length < validations.minItems
        ) {
            return `Property ${propName} must have at least ${validations.minItems} items, but found ${o[propName].length}`;
        }
        if (
            'maxItems' in validations
            && o[propName] !== null
            && o[propName].length > validations.maxItems
        ) {
            return `Property ${propName} must have at most ${validations.maxItems} items, but found ${o[propName].length}`;
        }
        if (
            'maximum' in validations
            && o[propName] !== null
            && o[propName] > validations.maximum
        ) {
            return `Property ${propName} must be at most ${validations.maximum}`;
        }
        if (
            'minimum' in validations
            && o[propName] !== null
            && o[propName] < validations.minimum
        ) {
            return `Property ${propName} must be at least ${validations.minimum}`;
        }
        if (
            'pattern' in validations
            && o[propName] !== null
            && o[propName].match(validations.pattern) === null
        ) {
            return `Property ${propName} must match regex ${validations.pattern}`;
        }
    }

    // Recurse down to check validity of objects within objects
    for (const propName of Object.keys(Object.getPrototypeOf(o).constructor.validationsMap)) {
        const result = isInvalid(o[propName]);
        if (result) {
            return `Property ${propName} is invalid because ${result}`;
        }
    }

    return false;
};

const throwOnErrorResponse = (response) => {
    // eslint-disable-next-line no-empty
    if (response.status === smData.ResponseStatusCode.Success) {

    } else if (response.status === smData.ResponseStatusCode.InvalidRequest) {
        throw new exceptions.InvalidRequestException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.RequestPayloadTooLarge) {
        throw new exceptions.RequestPayloadTooLargeException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.ResourceNotFound) {
        throw new exceptions.ResourceNotFoundException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.ResponsePayloadTooLarge) {
        throw new exceptions.ResponsePayloadTooLargeException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.ServerTimeout) {
        throw new exceptions.ServerTimeoutException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.Unauthorized) {
        throw new exceptions.UnauthorizedException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.UnknownFailure) {
        throw new exceptions.UnknownFailureException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.NotEnoughMessages) {
        throw new exceptions.NotEnoughMessagesException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.MessageStoreReadError) {
        throw new exceptions.MessageStoreReadErrorException(response.errorMessage, response.status, response.requestId);
    } else if (response.status === smData.ResponseStatusCode.OutOfMemoryError) {
        throw new exceptions.ServerOutOfMemoryException(response.errorMessage, response.status, response.requestId);
    } else {
        throw new exceptions.StreamManagerException(
            'Client is not able to understand this server response status code', 'Unrecognized', response.requestId,
        );
    }
};

module.exports = {
    intToBuffer,
    intFromBuffer,
    encodeFrame,
    uuidv4,
    isInvalid,
    throwOnErrorResponse,
    MAX_PACKET_SIZE,
};
