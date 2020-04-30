/*
 * Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */
const { Buffer } = require('buffer');

const GreengrassCommon = require('aws-greengrass-common-js');
const Lambda = require('./lambda');
const Util = require('./util');

const KEY_SECRET_ID = 'SecretId';
const KEY_VERSION_ID = 'VersionId';
const KEY_VERSION_STAGE = 'VersionStage';
const KEY_SECRET_ARN = 'ARN';
const KEY_SECRET_NAME = 'Name';
const KEY_CREATED_DATE = 'CreatedDate';

const { envVars } = GreengrassCommon;
const { SECRETS_MANAGER_FUNCTION_ARN } = envVars;

/**
 * Constructs a service interface object. Each API operation is exposed as a function on service.
 * @class
 * @memberOf aws-greengrass-core-sdk
 */
class SecretsManager {
    /**
     * Constructs a service object. This object has one method for each API operation.
     *
     * @example <caption>Constructing a SecretsManager object</caption>
     * var secretsmanager = new GG.SecretsManager();
     */
    constructor() {
        this.lambda = new Lambda();
    }

    /**
     * Called when a response from the service is returned.
     *
     * @callback secretsManagerCallback
     * @param err {Error} The error object returned from the request. Set to <tt>null</tt> if the request is successful.
     * @param data {String} The json-serialized data returned from the request. Set to <tt>null</tt> if a request error occurs. This string can be parsed to get the Object with the following info:
     * data.ARN {String} The ARN of the secret.
     * data.Name {String} The friendly name of the secret.
     * data.VersionId {String} The unique identifier of this version of the secret.
     * data.SecretBinary {Buffer|TypedArray|Blob|String} The decrypted part of the protected secret information that was originally provided as binary data in the form of a byte array.
     * The response parameter represents the binary data as a base64-encoded string.
     * data.SecretString {String} The decrypted part of the protected secret information that was originally provided as a string.
     * data.VersionStages {String[]} Specifies the secret version that you want to retrieve by the staging label attached to the version.
     * <br/>Staging labels are used to keep track of different versions during the rotation process.
     */

    /**
     * Retrieves a specific local secret value.
     *
     * @param params {Object}
     * @param params.SecretId {String} Specifies the secret containing the version that you want to retrieve. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.
     * @param params.VersionStage {String} Specifies the secret version that you want to retrieve by the staging label attached to the version.
     * <br/>Staging labels are used to keep track of different versions during the rotation process.
     * @param callback {secretsManagerCallback} The callback.
     *
     * @example <caption>Retrieving a local secret value</caption>
     * // This operation retrieves a local secret value
     *
     * var params = {
     *   SecretId: "STRING_VALUE",
     *   VersionStage: "STRING_VALUE"
     * };
     * secretsmanager.getSecretValue(params, function(err, data) {
     *   if (err) console.log(err, err.stack); // an error occurred
     *   else     console.log(data);           // successful response
     * });
     */
    getSecretValue(params, callback) {
        const secretId = Util.getParameter(params, KEY_SECRET_ID);
        const versionId = Util.getParameter(params, KEY_VERSION_ID);
        const versionStage = Util.getParameter(params, KEY_VERSION_STAGE);

        if (secretId === undefined) {
            callback(new Error(`"${KEY_SECRET_ID}" is a required parameter`), null);
            return;
        }
        // TODO: Remove this once we support query by VersionId
        if (versionId !== undefined) {
            callback(new Error('Query by VersionId is not yet supported'), null);
            return;
        }
        if (versionId !== undefined && versionStage !== undefined) {
            callback(new Error('VersionId and VersionStage cannot both be specified at the same time'), null);
            return;
        }

        const getSecretValueRequestBytes = SecretsManager._generateGetSecretValueRequestBytes(secretId, versionId, versionStage);

        const invokeParams = {
            FunctionName: SECRETS_MANAGER_FUNCTION_ARN,
            Payload: getSecretValueRequestBytes,
        };

        console.log(`Getting secret value from secrets manager: ${getSecretValueRequestBytes}`);

        this.lambda.invoke(invokeParams, (err, data) => {
            if (err) {
                callback(err, null); // an error occurred
            } else if (SecretsManager._is200Response(data.Payload)) {
                callback(null, data.Payload); // successful response
            } else {
                callback(new Error(JSON.stringify(data.Payload)), null); // error response
            }
        });
    }

    static _generateGetSecretValueRequestBytes(secretId, versionId, versionStage) {
        const request = {
            SecretId: secretId,
        };

        if (versionStage !== undefined) {
            request.VersionStage = versionStage;
        }

        if (versionId !== undefined) {
            request.VersionId = versionId;
        }

        return Buffer.from(JSON.stringify(request));
    }

    static _is200Response(payload) {
        const hasSecretArn = this._stringContains(payload, KEY_SECRET_ARN);
        const hasSecretName = this._stringContains(payload, KEY_SECRET_NAME);
        const hasVersionId = this._stringContains(payload, KEY_VERSION_ID);
        const hasCreatedDate = this._stringContains(payload, KEY_CREATED_DATE);

        return hasSecretArn && hasSecretName && hasVersionId && hasCreatedDate;
    }

    static _stringContains(src, target) {
        return src.indexOf(target) > -1;
    }
}

module.exports = SecretsManager;
