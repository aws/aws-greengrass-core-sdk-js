declare module "stream-manager/exceptions" {
    export class ClientException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ConnectFailedException extends ClientException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class InvalidRequestException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class MessageStoreReadErrorException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class NotEnoughMessagesException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class RequestPayloadTooLargeException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ResourceNotFoundException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ResponsePayloadTooLargeException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ServerOutOfMemoryException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ServerTimeoutException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class StreamManagerException extends Error {
        constructor(message?: string, status?: any, requestId?: any);
        status: any;
        requestId: any;
    }
    export class UnauthorizedException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class UnknownFailureException extends StreamManagerException {
        constructor(message?: string, status?: any, requestId?: any);
    }
    export class ValidationException extends ClientException {
        constructor(message?: string, status?: any, requestId?: any);
    }
}
declare module "stream-manager/util" {
    export function intToBuffer(i: any, length?: number): Buffer;
    export function intFromBuffer(b: any): any;
    export function encodeFrame(frame: any): {
        header: Buffer;
        payload: any;
    };
    export function uuidv4(): string;
    export function isInvalid(o: any): any;
    export function throwOnErrorResponse(response: any): void;
    export const MAX_PACKET_SIZE: number;
}
declare module "stream-manager/client" {
    const _exports: any;
    export = _exports;
}
declare module "stream-manager/index" {
    const _exports: any;
    export = _exports;
}
declare module "util" {
    export function getParameter(params: any, desiredParam: any): any;
    export function isValidJSON(str: any): boolean;
    export function isValidContext(context: any): boolean;
    export function isValidQualifier(qualifier: any): boolean;
}
declare module "lambda" {
    export = Lambda;
    /**
     * Constructs a service interface object. Each API operation is exposed as a function on service.
     * @class
     * @memberOf aws-greengrass-core-sdk
     */
    class Lambda {
        ipc: any;
        /**
         * Called when a response from the service is returned.
         *
         * @callback lambdaCallback
         * @param err {Error} The error object returned from the request. Set to <tt>null</tt> if the request is successful.
         * @param data {Object} The de-serialized data returned from the request. Set to <tt>null</tt> if a request error occurs.
         * @param data.StatusCode {Integer} The HTTP status code will be in the 200 range for successful request. For the <tt>RequestResponse</tt> invocation type this status code will be 200.
         * For the <tt>Event</tt> invocation type this status code will be 202.
         * @param data.FunctionError {String} Indicates whether an error occurred while executing the Lambda function. If an error occurred this field will have one of two values; <tt>Handled</tt> or <tt>Unhandled</tt>.
         * <tt>Handled</tt> errors are errors that are reported by the function while the Unhandled errors are those detected and reported by AWS Lambda.
         * <tt>Unhandled</tt> errors include out of memory errors and function timeouts. For information about how to report an <tt>Handled</tt> error,
         * see <a href="http://docs.aws.amazon.com/lambda/latest/dg/programming-model.html">Programming Model</a>.
         * @param data.Payload {Buffer|TypedArray|Blob|String} It is the result returned by the Lambda function. This is present only if the invocation type is <tt>RequestResponse</tt>.
         * <br/>In the event of a function error this field contains a message describing the error. For the <tt>Handled</tt> errors the Lambda function will report this message. For <tt>Unhandled</tt> errors AWS Lambda reports the message.
         */
        /**
         * Invokes a specific Lambda function.<br/>
         * In Greengrass, version of the Lambda which you would like to invoke needs to be provided.
         *
         * @param params {Object}
         * @param params.FunctionName {String} The Lambda function name. You can specify Amazon Resource Name (ARN) of the function (for example, <tt>arn:aws:lambda:us-west-2:account-id:function:ThumbNail</tt>).
         * @param params.InvocationType {String?} By default, the <tt>Invoke</tt> API assumes <tt>RequestResponse</tt> invocation type.
         * You can optionally request asynchronous execution by specifying <tt>Event</tt> as the <tt>InvocationType</tt>. Possible values include:
         * <ul><li>"Event"</li><li>"RequestResponse"</li></ul>
         * @param params.ClientContext {String?} Using the <tt>ClientContext</tt> you can pass client-specific information to the Lambda function you are invoking.
         * You can then process the client information in your Lambda function as you choose through the context variable.
         * For an example of a <tt>ClientContext</tt> JSON, see the main page or an example folder for an example.
         * <br/>The <tt>ClientContext</tt> JSON must be base64-encoded.
         * @param params.Payload {Buffer|TypedArray|Blob|String} Payload that you want to provide to your Lambda function as input.
         * @param params.Qualifier {String?} You can use this optional parameter to specify a Lambda function version if it was not included in the FunctionName field.
         * If you specify a function version, the API uses the qualified function ARN to invoke a specific Lambda function.
         * <br/>If you don't provide this parameter, then the API uses the FunctionName field only. If it does not have a version number of the target lambda, the call will fail.
         * @param callback {lambdaCallback} The callback.
         *
         * @example <caption>To invoke a Lambda function</caption>
         * //This operation invokes a Lambda function
         *
         * var params = {
         *   ClientContext: "MyApp",
         *   FunctionName: "MyFunction",
         *   InvocationType: "Event",
         *   Payload: <json | binary>,
         *   Qualifier: "1"
         * };
         * lambda.invoke(params, function(err, data) {
         *   if (err) console.log(err, err.stack); // an error occurred
         *   else     console.log(data);           // successful response
         * });
         *
         * @example <caption>Calling the invoke operation</caption>
         * var params = {
         *   FunctionName: 'STRING_VALUE', // required
         *   ClientContext: 'STRING_VALUE',
         *   InvocationType: Event | RequestResponse,
         *   Payload: <json | binary>,
         *   Qualifier: 'STRING_VALUE'
         * };
         * lambda.invoke(params, function(err, data) {
         *   if (err) console.log(err, err.stack); // an error occurred
         *   else     console.log(data);           // successful response
         * });
         */
        invoke(params: {
            FunctionName: string;
            InvocationType: string;
            ClientContext: string;
            Payload: any;
            Qualifier: string;
        }, callback: (err: Error, data: any, StatusCode: any, FunctionError: string, Payload: any) => any): void;
    }
}
declare module "iotdata" {
    export = IotData;
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
        lambda: import("lambda");
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
        getThingShadow(params: {
            thingName: string;
        }, callback: (err: Error, data: any, payload: any) => any): void;
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
        updateThingShadow(params: {
            thingName: string;
            payload: string;
        }, callback: (err: Error, data: any, payload: any) => any): void;
        /**
         * Call shadow lambda to delete the shadow state.
         *
         * @param params {Object}
         * @param params.thingName {String} The name of the thing whose shadow should be deleted.
         * @param callback {iotDataCallback} The callback.
         */
        deleteThingShadow(params: {
            thingName: string;
        }, callback: (err: Error, data: any, payload: any) => any): void;
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
        publish(params: {
            topic: string;
            payload: any;
            queueFullPolicy: "BestEffort" | "AllOrError";
        }, callback: (err: Error, data: any, payload: any) => any): void;
        _shadowOperation(operation: any, thingName: any, payload: any, callback: any): void;
    }
}
declare module "secretsmanager" {
    export = SecretsManager;
    /**
     * Constructs a service interface object. Each API operation is exposed as a function on service.
     * @class
     * @memberOf aws-greengrass-core-sdk
     */
    class SecretsManager {
        static _generateGetSecretValueRequestBytes(secretId: any, versionId: any, versionStage: any): any;
        static _is200Response(payload: any): boolean;
        static _stringContains(src: any, target: any): boolean;
        lambda: import("lambda");
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
}
declare module "index" {
    export var GreengrassInterfaceVersion: string;
    export var Lambda: typeof import("lambda");
    export var IotData: typeof import("iotdata");
    export var SecretsManager: typeof import("secretsmanager");
    export var StreamManager: any;
}
