/* eslint-disable no-restricted-syntax */
/*
 * Copyright (c) 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

const exceptions = require('./exceptions');
const utilInternal = require('./utilInternal');

/**
 * Validate And Serialize an instance of class to Json bytes
 * @param o a instance object
 * @return byte array
 * @exception throws ValidationException
 */
const validateAndSerializeToJsonBytes = (o) => {
    const validation = utilInternal.isInvalid(o);
    if (validation) {
        throw new exceptions.ValidationException(validation);
    }
    return utilInternal.serializeToJsonWithEmptyArrayAsNull(o.asMap());
};


/**
 * Deserialize the json byte array to an instance of class
 * @param bytes a bytes array
 * @param type instance type
 * @return object
 */
const deserializeJsonBytesToObj = (bytes, type) => type.fromMap(JSON.parse(bytes.toString('utf-8')));

module.exports = {
    validateAndSerializeToJsonBytes,
    deserializeJsonBytesToObj,
};
