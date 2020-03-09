export = SecretsManager;
/**
 * Constructs a service interface object. Each API operation is exposed as a function on service.
 * @class
 * @memberOf aws-greengrass-core-sdk
 */
declare class SecretsManager {
    static _generateGetSecretValueRequestBytes(secretId: any, versionId: any, versionStage: any): any;
    static _is200Response(payload: any): boolean;
    static _stringContains(src: any, target: any): boolean;
    lambda: import("./lambda");
    /**
     * Called when a response from the service is returned.
     *
     * @callback secretsManagerCallback
     * @param err {Error} The error object returned from the request. Set to <tt>null</tt> if the request is successful.
     * @param data {Object} The de-serialized data returned from the request. Set to <tt>null</tt> if a request error occurs.
     * @param data.ARN {String} The ARN of the secret.
     * @param data.Name {String} The friendly name of the secret.
     * @param data.VersionId {String} The unique identifier of this version of the secret.
     * @param data.SecretBinary {Buffer|TypedArray|Blob|String} The decrypted part of the protected secret information that was originally provided as binary data in the form of a byte array.
     * The response parameter represents the binary data as a base64-encoded string.
     * @param data.SecretString {String} The decrypted part of the protected secret information that was originally provided as a string.
     * @param data.VersionStages {String[]} Specifies the secret version that you want to retrieve by the staging label attached to the version.
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
    getSecretValue(params: {
        SecretId: string;
        VersionStage: string;
    }, callback: (err: Error, data: any, ARN: string, Name: string, VersionId: string, SecretBinary: any, SecretString: string, VersionStages: string[]) => any): void;
}
