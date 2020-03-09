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
declare class IotData {
    lambda: import("./lambda");
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
