export = Lambda;
/**
 * Constructs a service interface object. Each API operation is exposed as a function on service.
 * @class
 * @memberOf aws-greengrass-core-sdk
 */
declare class Lambda {
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
