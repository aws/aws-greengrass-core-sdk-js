/*
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */
exports.GreengrassInterfaceVersion = '1.5';

/**
 * @namespace aws-greengrass-core-sdk
 */

const fail = (name, error) => {
    console.error(`Unable to load aws-greengrass-core-sdk.${name} due to: `, error);
};

try {
    exports.Lambda = require('./lambda');
} catch (e) {
    fail('Lambda', e);
}
try {
    exports.IotData = require('./iotdata');
} catch (e) {
    fail('IotData', e);
}
try {
    exports.SecretsManager = require('./secretsmanager');
} catch (e) {
    fail('SecretsManager', e);
}
try {
    exports.StreamManager = require('./stream-manager');
} catch (e) {
    fail('StreamManager', e);
}
