/**
 * StrategyOnFull is used in the MessageStreamDefinition when creating a stream.
   It defines the behavior when the stream has reached the maximum size.
   RejectNewData: any append message request after the stream is full will be rejected with an exception.
   OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class StrategyOnFull {

    #value = null;
    constructor(value = null) {
        if (!(value in Object.values(StrategyOnFull.options))) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return StrategyOnFull[StrategyOnFull.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(StrategyOnFull, "options", {
    value: {
        RejectNewData: 0,
        OverwriteOldestData: 1,
    }
});
Object.defineProperty(StrategyOnFull, "optionsFlipped", {
    value: {
        0: "RejectNewData",
        1: "OverwriteOldestData",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.StrategyOnFull} RejectNewData
 * @memberOf aws-greengrass-core-sdk.StreamManager.StrategyOnFull#
 * @readonly
 */
Object.defineProperty(StrategyOnFull, "RejectNewData", {
    value: new StrategyOnFull(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.StrategyOnFull} OverwriteOldestData
 * @memberOf aws-greengrass-core-sdk.StreamManager.StrategyOnFull#
 * @readonly
 */
Object.defineProperty(StrategyOnFull, "OverwriteOldestData", {
    value: new StrategyOnFull(1)
});

/**
 * Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
   Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Persistence {

    #value = null;
    constructor(value = null) {
        if (!(value in Object.values(Persistence.options))) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return Persistence[Persistence.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(Persistence, "options", {
    value: {
        File: 0,
        Memory: 1,
    }
});
Object.defineProperty(Persistence, "optionsFlipped", {
    value: {
        0: "File",
        1: "Memory",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.Persistence} File
 * @memberOf aws-greengrass-core-sdk.StreamManager.Persistence#
 * @readonly
 */
Object.defineProperty(Persistence, "File", {
    value: new Persistence(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Persistence} Memory
 * @memberOf aws-greengrass-core-sdk.StreamManager.Persistence#
 * @readonly
 */
Object.defineProperty(Persistence, "Memory", {
    value: new Persistence(1)
});

/**
 * (Internal Only) Request object to connect to the service
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ConnectRequest {
    #__requestId = null;
    #__protocolVersion = null;
    #__sdkVersion = null;
    #__authToken = null;

    /**
     * @param requestId {String} 
     * @param protocolVersion {String} 
     * @param sdkVersion {String} 
     * @param authToken {String} 
     */
    constructor(
        requestId = null,
        protocolVersion = null,
        sdkVersion = null,
        authToken = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (protocolVersion !== null && !(typeof protocolVersion === "string")) {
            throw new Error("protocolVersion must be String");
        }

        if (sdkVersion !== null && !(typeof sdkVersion === "string")) {
            throw new Error("sdkVersion must be String");
        }

        if (authToken !== null && !(typeof authToken === "string")) {
            throw new Error("authToken must be String");
        }

        this.#__requestId = requestId;
        this.#__protocolVersion = protocolVersion;
        this.#__sdkVersion = sdkVersion;
        this.#__authToken = authToken;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get protocolVersion() {
        return this.#__protocolVersion;
    }
    /**
     * @param value {String} 
     */
    set protocolVersion(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("protocolVersion must be String");
        }

        this.#__protocolVersion = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectRequest}
     */
    withProtocolVersion(value) {
        this.protocolVersion = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get sdkVersion() {
        return this.#__sdkVersion;
    }
    /**
     * @param value {String} 
     */
    set sdkVersion(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("sdkVersion must be String");
        }

        this.#__sdkVersion = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectRequest}
     */
    withSdkVersion(value) {
        this.sdkVersion = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get authToken() {
        return this.#__authToken;
    }
    /**
     * @param value {String} 
     */
    set authToken(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("authToken must be String");
        }

        this.#__authToken = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectRequest}
     */
    withAuthToken(value) {
        this.authToken = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ConnectRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("protocolVersion" in d) {
            ret.protocolVersion = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["protocolVersion"]) : d["protocolVersion"];
        }
        if ("sdkVersion" in d) {
            ret.sdkVersion = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["sdkVersion"]) : d["sdkVersion"];
        }
        if ("authToken" in d) {
            ret.authToken = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["authToken"]) : d["authToken"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.protocolVersion !== null) {
            d["protocolVersion"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.protocolVersion), "asMap") ? this.protocolVersion.asMap() : this.protocolVersion;
        }
        if (this.sdkVersion !== null) {
            d["sdkVersion"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.sdkVersion), "asMap") ? this.sdkVersion.asMap() : this.sdkVersion;
        }
        if (this.authToken !== null) {
            d["authToken"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.authToken), "asMap") ? this.authToken.asMap() : this.authToken;
        }
        return d;
    }
};

Object.defineProperty(ConnectRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        protocolVersion: {
            'type': String,
            'subtype': null
        },
        sdkVersion: {
            'type': String,
            'subtype': null
        },
        authToken: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(ConnectRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(ConnectRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'protocolVersion': {
            'required': true,
        },
        'sdkVersion': {
            'required': false,
        },
        'authToken': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) Enum defining possible response status codes from StreamManager server.
   Success: Request succeeded.
   UnknownFailure: Encountered unknown StreamManager server failure.
   Unauthorized: Client is not authorized to perform this request.
   InvalidRequest: Client request is invalid.
   RequestPayloadTooLarge: Request payload is too large.
   ResourceNotFound: The requested resource does not exist.
   ServerTimeout: Server took too long and timed out.
   ResponsePayloadTooLarge: Server response exceeded the max allowed response payload size by the protocol.
   UnsupportedConnectVersion: Server does not support the Connect version presented by the Client.
   UnexpectedOperation: Operation presented was not expected by the Server.
   UnsupportedProtocolVersion: Protocol version presented by the Client is not compatible with the Server.
   InvalidProtocolVersion: Protocol version presented by the Client is not valid.
   FailedToConnect: Client failed to connect to the Server.
   NotEnoughMessages: There is not enough messages to return.
   MessageStoreReadError: Read messages encountered an error.
   OutOfMemoryError: Server ran out of memory.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ResponseStatusCode {

    #value = null;
    constructor(value = null) {
        if (!(value in Object.values(ResponseStatusCode.options))) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return ResponseStatusCode[ResponseStatusCode.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(ResponseStatusCode, "options", {
    value: {
        Success: 0,
        UnknownFailure: 1,
        Unauthorized: 2,
        InvalidRequest: 3,
        RequestPayloadTooLarge: 4,
        ResourceNotFound: 5,
        ServerTimeout: 6,
        ResponsePayloadTooLarge: 7,
        UnsupportedConnectVersion: 8,
        UnexpectedOperation: 9,
        UnsupportedProtocolVersion: 10,
        InvalidProtocolVersion: 11,
        FailedToConnect: 12,
        NotEnoughMessages: 13,
        MessageStoreReadError: 14,
        OutOfMemoryError: 15,
    }
});
Object.defineProperty(ResponseStatusCode, "optionsFlipped", {
    value: {
        0: "Success",
        1: "UnknownFailure",
        2: "Unauthorized",
        3: "InvalidRequest",
        4: "RequestPayloadTooLarge",
        5: "ResourceNotFound",
        6: "ServerTimeout",
        7: "ResponsePayloadTooLarge",
        8: "UnsupportedConnectVersion",
        9: "UnexpectedOperation",
        10: "UnsupportedProtocolVersion",
        11: "InvalidProtocolVersion",
        12: "FailedToConnect",
        13: "NotEnoughMessages",
        14: "MessageStoreReadError",
        15: "OutOfMemoryError",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} Success
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "Success", {
    value: new ResponseStatusCode(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UnknownFailure
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UnknownFailure", {
    value: new ResponseStatusCode(1)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} Unauthorized
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "Unauthorized", {
    value: new ResponseStatusCode(2)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} InvalidRequest
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "InvalidRequest", {
    value: new ResponseStatusCode(3)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} RequestPayloadTooLarge
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "RequestPayloadTooLarge", {
    value: new ResponseStatusCode(4)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} ResourceNotFound
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "ResourceNotFound", {
    value: new ResponseStatusCode(5)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} ServerTimeout
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "ServerTimeout", {
    value: new ResponseStatusCode(6)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} ResponsePayloadTooLarge
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "ResponsePayloadTooLarge", {
    value: new ResponseStatusCode(7)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UnsupportedConnectVersion
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UnsupportedConnectVersion", {
    value: new ResponseStatusCode(8)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UnexpectedOperation
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UnexpectedOperation", {
    value: new ResponseStatusCode(9)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UnsupportedProtocolVersion
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UnsupportedProtocolVersion", {
    value: new ResponseStatusCode(10)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} InvalidProtocolVersion
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "InvalidProtocolVersion", {
    value: new ResponseStatusCode(11)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} FailedToConnect
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "FailedToConnect", {
    value: new ResponseStatusCode(12)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} NotEnoughMessages
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "NotEnoughMessages", {
    value: new ResponseStatusCode(13)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} MessageStoreReadError
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "MessageStoreReadError", {
    value: new ResponseStatusCode(14)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} OutOfMemoryError
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "OutOfMemoryError", {
    value: new ResponseStatusCode(15)
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ConnectResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;
    #__protocolVersion = null;
    #__supportedProtocolVersions = null;
    #__serverVersion = null;
    #__clientIdentifier = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     * @param protocolVersion {String} 
     * @param supportedProtocolVersions {String[]} 
     * @param serverVersion {String} 
     * @param clientIdentifier {String} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
        protocolVersion = null,
        supportedProtocolVersions = null,
        serverVersion = null,
        clientIdentifier = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        if (protocolVersion !== null && !(typeof protocolVersion === "string")) {
            throw new Error("protocolVersion must be String");
        }

        if (supportedProtocolVersions !== null && !(supportedProtocolVersions instanceof Array)) {
            throw new Error("supportedProtocolVersions must be Array");
        }
        if (supportedProtocolVersions !== null && !supportedProtocolVersions.every((v) => typeof v === "string")) {
            throw new Error("supportedProtocolVersions array values must be String");
        }

        if (serverVersion !== null && !(typeof serverVersion === "string")) {
            throw new Error("serverVersion must be String");
        }

        if (clientIdentifier !== null && !(typeof clientIdentifier === "string")) {
            throw new Error("clientIdentifier must be String");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
        this.#__protocolVersion = protocolVersion;
        this.#__supportedProtocolVersions = supportedProtocolVersions;
        this.#__serverVersion = serverVersion;
        this.#__clientIdentifier = clientIdentifier;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get protocolVersion() {
        return this.#__protocolVersion;
    }
    /**
     * @param value {String} 
     */
    set protocolVersion(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("protocolVersion must be String");
        }

        this.#__protocolVersion = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withProtocolVersion(value) {
        this.protocolVersion = value;
        return this;
    }

    /**
     * @returns {String[]}
     
     */
    get supportedProtocolVersions() {
        return this.#__supportedProtocolVersions;
    }
    /**
     * @param value {String[]} 
     */
    set supportedProtocolVersions(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("supportedProtocolVersions must be Array");
        }
        if (value !== null && !value.every((v) => typeof v === "string")) {
            throw new Error("supportedProtocolVersions array values must be String");
        }

        this.#__supportedProtocolVersions = value;
    }
    /**
     * @param value {String[]} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withSupportedProtocolVersions(value) {
        this.supportedProtocolVersions = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get serverVersion() {
        return this.#__serverVersion;
    }
    /**
     * @param value {String} 
     */
    set serverVersion(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("serverVersion must be String");
        }

        this.#__serverVersion = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withServerVersion(value) {
        this.serverVersion = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get clientIdentifier() {
        return this.#__clientIdentifier;
    }
    /**
     * @param value {String} 
     */
    set clientIdentifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("clientIdentifier must be String");
        }

        this.#__clientIdentifier = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectResponse}
     */
    withClientIdentifier(value) {
        this.clientIdentifier = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ConnectResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        if ("protocolVersion" in d) {
            ret.protocolVersion = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["protocolVersion"]) : d["protocolVersion"];
        }
        if ("supportedProtocolVersions" in d) {
            ret.supportedProtocolVersions = d["supportedProtocolVersions"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(v) : v);
                return acc;
            }, []);
        }
        if ("serverVersion" in d) {
            ret.serverVersion = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["serverVersion"]) : d["serverVersion"];
        }
        if ("clientIdentifier" in d) {
            ret.clientIdentifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["clientIdentifier"]) : d["clientIdentifier"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        if (this.protocolVersion !== null) {
            d["protocolVersion"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.protocolVersion), "asMap") ? this.protocolVersion.asMap() : this.protocolVersion;
        }
        if (this.supportedProtocolVersions !== null) {
            d["supportedProtocolVersions"] = this.supportedProtocolVersions.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        if (this.serverVersion !== null) {
            d["serverVersion"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.serverVersion), "asMap") ? this.serverVersion.asMap() : this.serverVersion;
        }
        if (this.clientIdentifier !== null) {
            d["clientIdentifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.clientIdentifier), "asMap") ? this.clientIdentifier.asMap() : this.clientIdentifier;
        }
        return d;
    }
};

Object.defineProperty(ConnectResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
        protocolVersion: {
            'type': String,
            'subtype': null
        },
        supportedProtocolVersions: {
            'type': Array,
            'subtype': String
        },
        serverVersion: {
            'type': String,
            'subtype': null
        },
        clientIdentifier: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(ConnectResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(ConnectResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': false,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
        'protocolVersion': {
            'required': false,
        },
        'supportedProtocolVersions': {
            'required': false,
        },
        'serverVersion': {
            'required': false,
        },
        'clientIdentifier': {
            'required': false,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Operation {

    #value = null;
    constructor(value = null) {
        if (!(value in Object.values(Operation.options))) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return Operation[Operation.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(Operation, "options", {
    value: {
        Unknown: 0,
        Connect: 1,
        CreateMessageStream: 2,
        DeleteMessageStream: 3,
        AppendMessage: 4,
        ReadMessages: 5,
        ConnectResponse: 6,
        CreateMessageStreamResponse: 7,
        DeleteMessageStreamResponse: 8,
        AppendMessageResponse: 9,
        ReadMessagesResponse: 10,
        ListStreams: 11,
        ListStreamsResponse: 12,
        DescribeMessageStream: 13,
        DescribeMessageStreamResponse: 14,
    }
});
Object.defineProperty(Operation, "optionsFlipped", {
    value: {
        0: "Unknown",
        1: "Connect",
        2: "CreateMessageStream",
        3: "DeleteMessageStream",
        4: "AppendMessage",
        5: "ReadMessages",
        6: "ConnectResponse",
        7: "CreateMessageStreamResponse",
        8: "DeleteMessageStreamResponse",
        9: "AppendMessageResponse",
        10: "ReadMessagesResponse",
        11: "ListStreams",
        12: "ListStreamsResponse",
        13: "DescribeMessageStream",
        14: "DescribeMessageStreamResponse",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} Unknown
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "Unknown", {
    value: new Operation(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} Connect
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "Connect", {
    value: new Operation(1)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} CreateMessageStream
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "CreateMessageStream", {
    value: new Operation(2)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} DeleteMessageStream
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "DeleteMessageStream", {
    value: new Operation(3)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} AppendMessage
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "AppendMessage", {
    value: new Operation(4)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} ReadMessages
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "ReadMessages", {
    value: new Operation(5)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} ConnectResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "ConnectResponse", {
    value: new Operation(6)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} CreateMessageStreamResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "CreateMessageStreamResponse", {
    value: new Operation(7)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} DeleteMessageStreamResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "DeleteMessageStreamResponse", {
    value: new Operation(8)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} AppendMessageResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "AppendMessageResponse", {
    value: new Operation(9)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} ReadMessagesResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "ReadMessagesResponse", {
    value: new Operation(10)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} ListStreams
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "ListStreams", {
    value: new Operation(11)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} ListStreamsResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "ListStreamsResponse", {
    value: new Operation(12)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} DescribeMessageStream
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "DescribeMessageStream", {
    value: new Operation(13)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} DescribeMessageStreamResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "DescribeMessageStreamResponse", {
    value: new Operation(14)
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class MessageFrame {
    #__operation = null;
    #__payload = null;

    /**
     * @param operation {aws-greengrass-core-sdk.StreamManager.Operation} 
     * @param payload {Buffer} 
     */
    constructor(
        operation = null,
        payload = null,
    ) {
        if (operation !== null && !(operation instanceof Operation)) {
            throw new Error("operation must be Operation");
        }

        if (payload !== null && !(payload instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__operation = operation;
        this.#__payload = payload;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.Operation}
     
     */
    get operation() {
        return this.#__operation;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Operation} 
     */
    set operation(value) {
        if (value !== null && !(value instanceof Operation)) {
            throw new Error("operation must be Operation");
        }

        this.#__operation = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Operation} 
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageFrame}
     */
    withOperation(value) {
        this.operation = value;
        return this;
    }

    /**
     * @returns {Buffer}
     
     */
    get payload() {
        return this.#__payload;
    }
    /**
     * @param value {Buffer} 
     */
    set payload(value) {
        if (value !== null && !(value instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__payload = value;
    }
    /**
     * @param value {Buffer} 
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageFrame}
     */
    withPayload(value) {
        this.payload = value;
        return this;
    }

    static fromMap(d) {
        const ret = new MessageFrame();
        if ("operation" in d) {
            ret.operation = Object.prototype.hasOwnProperty.call(Operation, "fromMap") ? Operation.fromMap(d["operation"]) : d["operation"];
        }
        if ("payload" in d) {
            ret.payload = Object.prototype.hasOwnProperty.call(Buffer, "fromMap") ? Buffer.fromMap(d["payload"]) : d["payload"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.operation !== null) {
            d["operation"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.operation), "asMap") ? this.operation.asMap() : this.operation;
        }
        if (this.payload !== null) {
            d["payload"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.payload), "asMap") ? this.payload.asMap() : this.payload;
        }
        return d;
    }
};

Object.defineProperty(MessageFrame, "typesMap", {
    value: {
        operation: {
            'type': Operation,
            'subtype': null
        },
        payload: {
            'type': Buffer,
            'subtype': null
        },
    }
});
Object.defineProperty(MessageFrame, "formatsMap", {
    value: {}
});
Object.defineProperty(MessageFrame, "validationsMap", {
    value: {
        'operation': {
            'required': true,
        },
        'payload': {
            'required': true,
        },
    }
});

/**
 * This export destination is not supported! The interface may change at any time without notice and should not be relied on for any production use.
   There are no guarantees around its correctness.
   This configures an HTTP endpoint which sends a POST request to the provided URI. Each request contains a single message in the body of the request.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class HTTPConfig {
    #__identifier = null;
    #__uri = null;
    #__batchSize = null;
    #__batchIntervalMillis = null;
    #__priority = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param uri {String} URL for HTTP endpoint which should receive the POST requests for export.
     * @param batchSize {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    constructor(
        identifier = null,
        uri = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
    ) {
        if (identifier !== null && !(typeof identifier === "string")) {
            throw new Error("identifier must be String");
        }

        if (uri !== null && !(typeof uri === "string")) {
            throw new Error("uri must be String");
        }

        if (batchSize !== null && !(typeof batchSize === "number")) {
            throw new Error("batchSize must be Number");
        }

        if (batchIntervalMillis !== null && !(typeof batchIntervalMillis === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        if (priority !== null && !(typeof priority === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__identifier = identifier;
        this.#__uri = uri;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
    }

    /**
     * A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {String}

     */
    get identifier() {
        return this.#__identifier;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("identifier must be String");
        }

        this.#__identifier = value;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withIdentifier(value) {
        this.identifier = value;
        return this;
    }

    /**
     * URL for HTTP endpoint which should receive the POST requests for export.
     * @returns {String}
     
     */
    get uri() {
        return this.#__uri;
    }
    /**
     * @param value {String} URL for HTTP endpoint which should receive the POST requests for export.
     */
    set uri(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("uri must be String");
        }

        this.#__uri = value;
    }
    /**
     * @param value {String} URL for HTTP endpoint which should receive the POST requests for export.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withUri(value) {
        this.uri = value;
        return this;
    }

    /**
     * The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     */
    set batchSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchSize must be Number");
        }

        this.#__batchSize = value;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withBatchSize(value) {
        this.batchSize = value;
        return this;
    }

    /**
     * The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {Number}

     */
    get batchIntervalMillis() {
        return this.#__batchIntervalMillis;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set batchIntervalMillis(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        this.#__batchIntervalMillis = value;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withBatchIntervalMillis(value) {
        this.batchIntervalMillis = value;
        return this;
    }

    /**
     * Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {Number}
     
     */
    get priority() {
        return this.#__priority;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__priority = value;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withPriority(value) {
        this.priority = value;
        return this;
    }

    static fromMap(d) {
        const ret = new HTTPConfig();
        if ("identifier" in d) {
            ret.identifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["identifier"]) : d["identifier"];
        }
        if ("uri" in d) {
            ret.uri = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["uri"]) : d["uri"];
        }
        if ("batchSize" in d) {
            ret.batchSize = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchSize"]) : d["batchSize"];
        }
        if ("batchIntervalMillis" in d) {
            ret.batchIntervalMillis = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchIntervalMillis"]) : d["batchIntervalMillis"];
        }
        if ("priority" in d) {
            ret.priority = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["priority"]) : d["priority"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.identifier !== null) {
            d["identifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.identifier), "asMap") ? this.identifier.asMap() : this.identifier;
        }
        if (this.uri !== null) {
            d["uri"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.uri), "asMap") ? this.uri.asMap() : this.uri;
        }
        if (this.batchSize !== null) {
            d["batchSize"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchSize), "asMap") ? this.batchSize.asMap() : this.batchSize;
        }
        if (this.batchIntervalMillis !== null) {
            d["batchIntervalMillis"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchIntervalMillis), "asMap") ? this.batchIntervalMillis.asMap() : this.batchIntervalMillis;
        }
        if (this.priority !== null) {
            d["priority"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.priority), "asMap") ? this.priority.asMap() : this.priority;
        }
        return d;
    }
};

Object.defineProperty(HTTPConfig, "typesMap", {
    value: {
        identifier: {
            'type': String,
            'subtype': null
        },
        uri: {
            'type': String,
            'subtype': null
        },
        batchSize: {
            'type': Number,
            'subtype': null
        },
        batchIntervalMillis: {
            'type': Number,
            'subtype': null
        },
        priority: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(HTTPConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(HTTPConfig, "validationsMap", {
    value: {
        'identifier': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'uri': {
            'required': true,
            'minLength': 1,
        },
        'batchSize': {
            'required': false,
            'maximum': 500,
            'minimum': 1,
        },
        'batchIntervalMillis': {
            'required': false,
            'maximum': 9223372036854,
            'minimum': 60000,
        },
        'priority': {
            'required': false,
            'maximum': 10,
            'minimum': 1,
        },
    }
});

/**
 * Configuration object for IoT Analytics export destination.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class IoTAnalyticsConfig {
    #__identifier = null;
    #__iotChannel = null;
    #__iotMsgIdPrefix = null;
    #__batchSize = null;
    #__batchIntervalMillis = null;
    #__priority = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param iotChannel {String} The name of the IoT Analytics Channel that this exporter should upload to
     * @param iotMsgIdPrefix {String} A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
       This prefix must be less than 32 characters.
     * @param batchSize {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    constructor(
        identifier = null,
        iotChannel = null,
        iotMsgIdPrefix = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
    ) {
        if (identifier !== null && !(typeof identifier === "string")) {
            throw new Error("identifier must be String");
        }

        if (iotChannel !== null && !(typeof iotChannel === "string")) {
            throw new Error("iotChannel must be String");
        }

        if (iotMsgIdPrefix !== null && !(typeof iotMsgIdPrefix === "string")) {
            throw new Error("iotMsgIdPrefix must be String");
        }

        if (batchSize !== null && !(typeof batchSize === "number")) {
            throw new Error("batchSize must be Number");
        }

        if (batchIntervalMillis !== null && !(typeof batchIntervalMillis === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        if (priority !== null && !(typeof priority === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__identifier = identifier;
        this.#__iotChannel = iotChannel;
        this.#__iotMsgIdPrefix = iotMsgIdPrefix;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
    }

    /**
     * A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {String}

     */
    get identifier() {
        return this.#__identifier;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("identifier must be String");
        }

        this.#__identifier = value;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withIdentifier(value) {
        this.identifier = value;
        return this;
    }

    /**
     * The name of the IoT Analytics Channel that this exporter should upload to
     * @returns {String}
     
     */
    get iotChannel() {
        return this.#__iotChannel;
    }
    /**
     * @param value {String} The name of the IoT Analytics Channel that this exporter should upload to
     */
    set iotChannel(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("iotChannel must be String");
        }

        this.#__iotChannel = value;
    }
    /**
     * @param value {String} The name of the IoT Analytics Channel that this exporter should upload to
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withIotChannel(value) {
        this.iotChannel = value;
        return this;
    }

    /**
     * A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
       This prefix must be less than 32 characters.
     * @returns {String}

     */
    get iotMsgIdPrefix() {
        return this.#__iotMsgIdPrefix;
    }
    /**
     * @param value {String} A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
       This prefix must be less than 32 characters.
     */
    set iotMsgIdPrefix(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("iotMsgIdPrefix must be String");
        }

        this.#__iotMsgIdPrefix = value;
    }
    /**
     * @param value {String} A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
       This prefix must be less than 32 characters.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withIotMsgIdPrefix(value) {
        this.iotMsgIdPrefix = value;
        return this;
    }

    /**
     * The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     */
    set batchSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchSize must be Number");
        }

        this.#__batchSize = value;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withBatchSize(value) {
        this.batchSize = value;
        return this;
    }

    /**
     * The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {Number}

     */
    get batchIntervalMillis() {
        return this.#__batchIntervalMillis;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set batchIntervalMillis(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        this.#__batchIntervalMillis = value;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withBatchIntervalMillis(value) {
        this.batchIntervalMillis = value;
        return this;
    }

    /**
     * Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {Number}
     
     */
    get priority() {
        return this.#__priority;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__priority = value;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withPriority(value) {
        this.priority = value;
        return this;
    }

    static fromMap(d) {
        const ret = new IoTAnalyticsConfig();
        if ("identifier" in d) {
            ret.identifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["identifier"]) : d["identifier"];
        }
        if ("iotChannel" in d) {
            ret.iotChannel = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["iotChannel"]) : d["iotChannel"];
        }
        if ("iotMsgIdPrefix" in d) {
            ret.iotMsgIdPrefix = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["iotMsgIdPrefix"]) : d["iotMsgIdPrefix"];
        }
        if ("batchSize" in d) {
            ret.batchSize = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchSize"]) : d["batchSize"];
        }
        if ("batchIntervalMillis" in d) {
            ret.batchIntervalMillis = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchIntervalMillis"]) : d["batchIntervalMillis"];
        }
        if ("priority" in d) {
            ret.priority = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["priority"]) : d["priority"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.identifier !== null) {
            d["identifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.identifier), "asMap") ? this.identifier.asMap() : this.identifier;
        }
        if (this.iotChannel !== null) {
            d["iotChannel"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.iotChannel), "asMap") ? this.iotChannel.asMap() : this.iotChannel;
        }
        if (this.iotMsgIdPrefix !== null) {
            d["iotMsgIdPrefix"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.iotMsgIdPrefix), "asMap") ? this.iotMsgIdPrefix.asMap() : this.iotMsgIdPrefix;
        }
        if (this.batchSize !== null) {
            d["batchSize"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchSize), "asMap") ? this.batchSize.asMap() : this.batchSize;
        }
        if (this.batchIntervalMillis !== null) {
            d["batchIntervalMillis"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchIntervalMillis), "asMap") ? this.batchIntervalMillis.asMap() : this.batchIntervalMillis;
        }
        if (this.priority !== null) {
            d["priority"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.priority), "asMap") ? this.priority.asMap() : this.priority;
        }
        return d;
    }
};

Object.defineProperty(IoTAnalyticsConfig, "typesMap", {
    value: {
        identifier: {
            'type': String,
            'subtype': null
        },
        iotChannel: {
            'type': String,
            'subtype': null
        },
        iotMsgIdPrefix: {
            'type': String,
            'subtype': null
        },
        batchSize: {
            'type': Number,
            'subtype': null
        },
        batchIntervalMillis: {
            'type': Number,
            'subtype': null
        },
        priority: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(IoTAnalyticsConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(IoTAnalyticsConfig, "validationsMap", {
    value: {
        'identifier': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'iotChannel': {
            'required': true,
            'minLength': 1,
        },
        'iotMsgIdPrefix': {
            'required': false,
            'maxLength': 32,
        },
        'batchSize': {
            'required': false,
            'maximum': 100,
            'minimum': 1,
        },
        'batchIntervalMillis': {
            'required': false,
            'maximum': 9223372036854,
            'minimum': 60000,
        },
        'priority': {
            'required': false,
            'maximum': 10,
            'minimum': 1,
        },
    }
});

/**
 * Configuration object for Kinesis data streams export destination.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class KinesisConfig {
    #__identifier = null;
    #__kinesisStreamName = null;
    #__batchSize = null;
    #__batchIntervalMillis = null;
    #__priority = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param kinesisStreamName {String} The name of the Kinesis data stream that this exporter should upload to
     * @param batchSize {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    constructor(
        identifier = null,
        kinesisStreamName = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
    ) {
        if (identifier !== null && !(typeof identifier === "string")) {
            throw new Error("identifier must be String");
        }

        if (kinesisStreamName !== null && !(typeof kinesisStreamName === "string")) {
            throw new Error("kinesisStreamName must be String");
        }

        if (batchSize !== null && !(typeof batchSize === "number")) {
            throw new Error("batchSize must be Number");
        }

        if (batchIntervalMillis !== null && !(typeof batchIntervalMillis === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        if (priority !== null && !(typeof priority === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__identifier = identifier;
        this.#__kinesisStreamName = kinesisStreamName;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
    }

    /**
     * A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {String}

     */
    get identifier() {
        return this.#__identifier;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("identifier must be String");
        }

        this.#__identifier = value;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withIdentifier(value) {
        this.identifier = value;
        return this;
    }

    /**
     * The name of the Kinesis data stream that this exporter should upload to
     * @returns {String}
     
     */
    get kinesisStreamName() {
        return this.#__kinesisStreamName;
    }
    /**
     * @param value {String} The name of the Kinesis data stream that this exporter should upload to
     */
    set kinesisStreamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("kinesisStreamName must be String");
        }

        this.#__kinesisStreamName = value;
    }
    /**
     * @param value {String} The name of the Kinesis data stream that this exporter should upload to
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withKinesisStreamName(value) {
        this.kinesisStreamName = value;
        return this;
    }

    /**
     * The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     */
    set batchSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchSize must be Number");
        }

        this.#__batchSize = value;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 1.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withBatchSize(value) {
        this.batchSize = value;
        return this;
    }

    /**
     * The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {Number}

     */
    get batchIntervalMillis() {
        return this.#__batchIntervalMillis;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set batchIntervalMillis(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchIntervalMillis must be Number");
        }

        this.#__batchIntervalMillis = value;
    }
    /**
     * @param value {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withBatchIntervalMillis(value) {
        this.batchIntervalMillis = value;
        return this;
    }

    /**
     * Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {Number}
     
     */
    get priority() {
        return this.#__priority;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__priority = value;
    }
    /**
     * @param value {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withPriority(value) {
        this.priority = value;
        return this;
    }

    static fromMap(d) {
        const ret = new KinesisConfig();
        if ("identifier" in d) {
            ret.identifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["identifier"]) : d["identifier"];
        }
        if ("kinesisStreamName" in d) {
            ret.kinesisStreamName = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["kinesisStreamName"]) : d["kinesisStreamName"];
        }
        if ("batchSize" in d) {
            ret.batchSize = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchSize"]) : d["batchSize"];
        }
        if ("batchIntervalMillis" in d) {
            ret.batchIntervalMillis = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["batchIntervalMillis"]) : d["batchIntervalMillis"];
        }
        if ("priority" in d) {
            ret.priority = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["priority"]) : d["priority"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.identifier !== null) {
            d["identifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.identifier), "asMap") ? this.identifier.asMap() : this.identifier;
        }
        if (this.kinesisStreamName !== null) {
            d["kinesisStreamName"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.kinesisStreamName), "asMap") ? this.kinesisStreamName.asMap() : this.kinesisStreamName;
        }
        if (this.batchSize !== null) {
            d["batchSize"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchSize), "asMap") ? this.batchSize.asMap() : this.batchSize;
        }
        if (this.batchIntervalMillis !== null) {
            d["batchIntervalMillis"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.batchIntervalMillis), "asMap") ? this.batchIntervalMillis.asMap() : this.batchIntervalMillis;
        }
        if (this.priority !== null) {
            d["priority"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.priority), "asMap") ? this.priority.asMap() : this.priority;
        }
        return d;
    }
};

Object.defineProperty(KinesisConfig, "typesMap", {
    value: {
        identifier: {
            'type': String,
            'subtype': null
        },
        kinesisStreamName: {
            'type': String,
            'subtype': null
        },
        batchSize: {
            'type': Number,
            'subtype': null
        },
        batchIntervalMillis: {
            'type': Number,
            'subtype': null
        },
        priority: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(KinesisConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(KinesisConfig, "validationsMap", {
    value: {
        'identifier': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'kinesisStreamName': {
            'required': true,
            'minLength': 1,
        },
        'batchSize': {
            'required': false,
            'maximum': 500,
            'minimum': 1,
        },
        'batchIntervalMillis': {
            'required': false,
            'maximum': 9223372036854,
            'minimum': 60000,
        },
        'priority': {
            'required': false,
            'maximum': 10,
            'minimum': 1,
        },
    }
});

/**
 * Defines how and where the stream is uploaded
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ExportDefinition {
    #__http = null;
    #__iotAnalytics = null;
    #__kinesis = null;

    /**
     * @param http {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint
     * @param iotAnalytics {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics
     * @param kinesis {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis
     */
    constructor(
        http = null,
        iotAnalytics = null,
        kinesis = null,
    ) {
        if (http !== null && !(http instanceof Array)) {
            throw new Error("http must be Array");
        }
        if (http !== null && !http.every((v) => v instanceof HTTPConfig)) {
            throw new Error("http array values must be HTTPConfig");
        }

        if (iotAnalytics !== null && !(iotAnalytics instanceof Array)) {
            throw new Error("iotAnalytics must be Array");
        }
        if (iotAnalytics !== null && !iotAnalytics.every((v) => v instanceof IoTAnalyticsConfig)) {
            throw new Error("iotAnalytics array values must be IoTAnalyticsConfig");
        }

        if (kinesis !== null && !(kinesis instanceof Array)) {
            throw new Error("kinesis must be Array");
        }
        if (kinesis !== null && !kinesis.every((v) => v instanceof KinesisConfig)) {
            throw new Error("kinesis array values must be KinesisConfig");
        }

        this.#__http = http;
        this.#__iotAnalytics = iotAnalytics;
        this.#__kinesis = kinesis;
    }

    /**
     * Defines how the stream is uploaded to an HTTP endpoint
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]}
     
     */
    get http() {
        return this.#__http;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint
     */
    set http(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("http must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof HTTPConfig)) {
            throw new Error("http array values must be HTTPConfig");
        }

        this.#__http = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withHttp(value) {
        this.http = value;
        return this;
    }

    /**
     * Defines how the stream is uploaded to IoT Analytics
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]}
     
     */
    get iotAnalytics() {
        return this.#__iotAnalytics;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics
     */
    set iotAnalytics(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("iotAnalytics must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof IoTAnalyticsConfig)) {
            throw new Error("iotAnalytics array values must be IoTAnalyticsConfig");
        }

        this.#__iotAnalytics = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withIotAnalytics(value) {
        this.iotAnalytics = value;
        return this;
    }

    /**
     * Defines how the stream is uploaded to Kinesis
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]}
     
     */
    get kinesis() {
        return this.#__kinesis;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis
     */
    set kinesis(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("kinesis must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof KinesisConfig)) {
            throw new Error("kinesis array values must be KinesisConfig");
        }

        this.#__kinesis = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withKinesis(value) {
        this.kinesis = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ExportDefinition();
        if ("http" in d) {
            ret.http = d["http"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(HTTPConfig, "fromMap") ? HTTPConfig.fromMap(v) : v);
                return acc;
            }, []);
        }
        if ("iotAnalytics" in d) {
            ret.iotAnalytics = d["iotAnalytics"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(IoTAnalyticsConfig, "fromMap") ? IoTAnalyticsConfig.fromMap(v) : v);
                return acc;
            }, []);
        }
        if ("kinesis" in d) {
            ret.kinesis = d["kinesis"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(KinesisConfig, "fromMap") ? KinesisConfig.fromMap(v) : v);
                return acc;
            }, []);
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.http !== null) {
            d["http"] = this.http.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        if (this.iotAnalytics !== null) {
            d["iotAnalytics"] = this.iotAnalytics.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        if (this.kinesis !== null) {
            d["kinesis"] = this.kinesis.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        return d;
    }
};

Object.defineProperty(ExportDefinition, "typesMap", {
    value: {
        http: {
            'type': Array,
            'subtype': HTTPConfig
        },
        iotAnalytics: {
            'type': Array,
            'subtype': IoTAnalyticsConfig
        },
        kinesis: {
            'type': Array,
            'subtype': KinesisConfig
        },
    }
});
Object.defineProperty(ExportDefinition, "formatsMap", {
    value: {}
});
Object.defineProperty(ExportDefinition, "validationsMap", {
    value: {
        'http': {
            'required': false,
        },
        'iotAnalytics': {
            'required': false,
        },
        'kinesis': {
            'required': false,
        },
    }
});

/**
 * Object defining a message stream used in the CreateMessageStream API.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class MessageStreamDefinition {
    #__name = null;
    #__maxSize = null;
    #__streamSegmentSize = null;
    #__timeToLiveMillis = null;
    #__strategyOnFull = null;
    #__persistence = null;
    #__flushOnWrite = null;
    #__exportDefinition = null;

    /**
     * @param name {String} The unique name of the stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param maxSize {Number} The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @param streamSegmentSize {Number} The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
       Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @param timeToLiveMillis {Number} Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param strategyOnFull {aws-greengrass-core-sdk.StreamManager.StrategyOnFull} What to do when the maximum size of the stream is reached.
       RejectNewData: any append message request after the stream is full will be rejected with an exception.
       OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @param persistence {aws-greengrass-core-sdk.StreamManager.Persistence} Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
       Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @param flushOnWrite {Boolean} This only applies when Persistence is set to File mode.
       Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @param exportDefinition {aws-greengrass-core-sdk.StreamManager.ExportDefinition} Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     */
    constructor(
        name = null,
        maxSize = 268435456,
        streamSegmentSize = 16777216,
        timeToLiveMillis = null,
        strategyOnFull = null,
        persistence = null,
        flushOnWrite = null,
        exportDefinition = null,
    ) {
        if (name !== null && !(typeof name === "string")) {
            throw new Error("name must be String");
        }

        if (maxSize !== null && !(typeof maxSize === "number")) {
            throw new Error("maxSize must be Number");
        }

        if (streamSegmentSize !== null && !(typeof streamSegmentSize === "number")) {
            throw new Error("streamSegmentSize must be Number");
        }

        if (timeToLiveMillis !== null && !(typeof timeToLiveMillis === "number")) {
            throw new Error("timeToLiveMillis must be Number");
        }

        if (strategyOnFull !== null && !(strategyOnFull instanceof StrategyOnFull)) {
            throw new Error("strategyOnFull must be StrategyOnFull");
        }

        if (persistence !== null && !(persistence instanceof Persistence)) {
            throw new Error("persistence must be Persistence");
        }

        if (flushOnWrite !== null && !(typeof flushOnWrite === "boolean")) {
            throw new Error("flushOnWrite must be Boolean");
        }

        if (exportDefinition !== null && !(exportDefinition instanceof ExportDefinition)) {
            throw new Error("exportDefinition must be ExportDefinition");
        }

        this.#__name = name;
        this.#__maxSize = maxSize;
        this.#__streamSegmentSize = streamSegmentSize;
        this.#__timeToLiveMillis = timeToLiveMillis;
        this.#__strategyOnFull = strategyOnFull;
        this.#__persistence = persistence;
        this.#__flushOnWrite = flushOnWrite;
        this.#__exportDefinition = exportDefinition;
    }

    /**
     * The unique name of the stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {String}

     */
    get name() {
        return this.#__name;
    }
    /**
     * @param value {String} The unique name of the stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set name(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("name must be String");
        }

        this.#__name = value;
    }
    /**
     * @param value {String} The unique name of the stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withName(value) {
        this.name = value;
        return this;
    }

    /**
     * The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @returns {Number}
     
     */
    get maxSize() {
        return this.#__maxSize;
    }
    /**
     * @param value {Number} The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     */
    set maxSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("maxSize must be Number");
        }

        this.#__maxSize = value;
    }
    /**
     * @param value {Number} The maximum size in bytes for the entire stream. Set to 256MB by default with a minimum of 1KB and a maximum of 8192PB.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withMaxSize(value) {
        this.maxSize = value;
        return this;
    }

    /**
     * The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
       Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @returns {Number}

     */
    get streamSegmentSize() {
        return this.#__streamSegmentSize;
    }
    /**
     * @param value {Number} The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
       Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     */
    set streamSegmentSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("streamSegmentSize must be Number");
        }

        this.#__streamSegmentSize = value;
    }
    /**
     * @param value {Number} The size of each segment of the stream. Set to 16MB by default with a minimum of 1KB and a maximum of 2GB.
       Data is only deleted segment by segment, so the segment size is the smallest amount of data which can be deleted.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withStreamSegmentSize(value) {
        this.streamSegmentSize = value;
        return this;
    }

    /**
     * Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {Number}

     */
    get timeToLiveMillis() {
        return this.#__timeToLiveMillis;
    }
    /**
     * @param value {Number} Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     */
    set timeToLiveMillis(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("timeToLiveMillis must be Number");
        }

        this.#__timeToLiveMillis = value;
    }
    /**
     * @param value {Number} Time to live for each message in milliseconds. Data may be deleted at any time after the TTL expires; deletion is not guaranteed to occur immediately when the TTL expires.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withTimeToLiveMillis(value) {
        this.timeToLiveMillis = value;
        return this;
    }

    /**
     * What to do when the maximum size of the stream is reached.
       RejectNewData: any append message request after the stream is full will be rejected with an exception.
       OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @returns {aws-greengrass-core-sdk.StreamManager.StrategyOnFull}

     */
    get strategyOnFull() {
        return this.#__strategyOnFull;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StrategyOnFull} What to do when the maximum size of the stream is reached.
       RejectNewData: any append message request after the stream is full will be rejected with an exception.
       OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     */
    set strategyOnFull(value) {
        if (value !== null && !(value instanceof StrategyOnFull)) {
            throw new Error("strategyOnFull must be StrategyOnFull");
        }

        this.#__strategyOnFull = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StrategyOnFull} What to do when the maximum size of the stream is reached.
       RejectNewData: any append message request after the stream is full will be rejected with an exception.
       OverwriteOldestData: the oldest stream segments will be deleted until there is room for the new message.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withStrategyOnFull(value) {
        this.strategyOnFull = value;
        return this;
    }

    /**
     * Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
       Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @returns {aws-greengrass-core-sdk.StreamManager.Persistence}

     */
    get persistence() {
        return this.#__persistence;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Persistence} Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
       Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     */
    set persistence(value) {
        if (value !== null && !(value instanceof Persistence)) {
            throw new Error("persistence must be Persistence");
        }

        this.#__persistence = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Persistence} Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
       Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withPersistence(value) {
        this.persistence = value;
        return this;
    }

    /**
     * This only applies when Persistence is set to File mode.
       Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @returns {Boolean}

     */
    get flushOnWrite() {
        return this.#__flushOnWrite;
    }
    /**
     * @param value {Boolean} This only applies when Persistence is set to File mode.
       Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     */
    set flushOnWrite(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("flushOnWrite must be Boolean");
        }

        this.#__flushOnWrite = value;
    }
    /**
     * @param value {Boolean} This only applies when Persistence is set to File mode.
       Waits for the filesystem to complete the write for every message. This is safer, but slower. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withFlushOnWrite(value) {
        this.flushOnWrite = value;
        return this;
    }

    /**
     * Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     
     */
    get exportDefinition() {
        return this.#__exportDefinition;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ExportDefinition} Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     */
    set exportDefinition(value) {
        if (value !== null && !(value instanceof ExportDefinition)) {
            throw new Error("exportDefinition must be ExportDefinition");
        }

        this.#__exportDefinition = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ExportDefinition} Defines how and where the stream is uploaded. See the definition of the ExportDefinition object for more detail.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     */
    withExportDefinition(value) {
        this.exportDefinition = value;
        return this;
    }

    static fromMap(d) {
        const ret = new MessageStreamDefinition();
        if ("name" in d) {
            ret.name = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["name"]) : d["name"];
        }
        if ("maxSize" in d) {
            ret.maxSize = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["maxSize"]) : d["maxSize"];
        }
        if ("streamSegmentSize" in d) {
            ret.streamSegmentSize = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["streamSegmentSize"]) : d["streamSegmentSize"];
        }
        if ("timeToLiveMillis" in d) {
            ret.timeToLiveMillis = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["timeToLiveMillis"]) : d["timeToLiveMillis"];
        }
        if ("strategyOnFull" in d) {
            ret.strategyOnFull = Object.prototype.hasOwnProperty.call(StrategyOnFull, "fromMap") ? StrategyOnFull.fromMap(d["strategyOnFull"]) : d["strategyOnFull"];
        }
        if ("persistence" in d) {
            ret.persistence = Object.prototype.hasOwnProperty.call(Persistence, "fromMap") ? Persistence.fromMap(d["persistence"]) : d["persistence"];
        }
        if ("flushOnWrite" in d) {
            ret.flushOnWrite = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["flushOnWrite"]) : d["flushOnWrite"];
        }
        if ("exportDefinition" in d) {
            ret.exportDefinition = Object.prototype.hasOwnProperty.call(ExportDefinition, "fromMap") ? ExportDefinition.fromMap(d["exportDefinition"]) : d["exportDefinition"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.name !== null) {
            d["name"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.name), "asMap") ? this.name.asMap() : this.name;
        }
        if (this.maxSize !== null) {
            d["maxSize"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.maxSize), "asMap") ? this.maxSize.asMap() : this.maxSize;
        }
        if (this.streamSegmentSize !== null) {
            d["streamSegmentSize"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.streamSegmentSize), "asMap") ? this.streamSegmentSize.asMap() : this.streamSegmentSize;
        }
        if (this.timeToLiveMillis !== null) {
            d["timeToLiveMillis"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.timeToLiveMillis), "asMap") ? this.timeToLiveMillis.asMap() : this.timeToLiveMillis;
        }
        if (this.strategyOnFull !== null) {
            d["strategyOnFull"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.strategyOnFull), "asMap") ? this.strategyOnFull.asMap() : this.strategyOnFull;
        }
        if (this.persistence !== null) {
            d["persistence"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.persistence), "asMap") ? this.persistence.asMap() : this.persistence;
        }
        if (this.flushOnWrite !== null) {
            d["flushOnWrite"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.flushOnWrite), "asMap") ? this.flushOnWrite.asMap() : this.flushOnWrite;
        }
        if (this.exportDefinition !== null) {
            d["exportDefinition"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportDefinition), "asMap") ? this.exportDefinition.asMap() : this.exportDefinition;
        }
        return d;
    }
};

Object.defineProperty(MessageStreamDefinition, "typesMap", {
    value: {
        name: {
            'type': String,
            'subtype': null
        },
        maxSize: {
            'type': Number,
            'subtype': null
        },
        streamSegmentSize: {
            'type': Number,
            'subtype': null
        },
        timeToLiveMillis: {
            'type': Number,
            'subtype': null
        },
        strategyOnFull: {
            'type': StrategyOnFull,
            'subtype': null
        },
        persistence: {
            'type': Persistence,
            'subtype': null
        },
        flushOnWrite: {
            'type': Boolean,
            'subtype': null
        },
        exportDefinition: {
            'type': ExportDefinition,
            'subtype': null
        },
    }
});
Object.defineProperty(MessageStreamDefinition, "formatsMap", {
    value: {}
});
Object.defineProperty(MessageStreamDefinition, "validationsMap", {
    value: {
        'name': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'maxSize': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 1024,
        },
        'streamSegmentSize': {
            'required': false,
            'maximum': 2147483647,
            'minimum': 1024,
        },
        'timeToLiveMillis': {
            'required': false,
            'maximum': 9223372036854,
            'minimum': 60000,
        },
        'strategyOnFull': {
            'required': true,
        },
        'persistence': {
            'required': false,
        },
        'flushOnWrite': {
            'required': false,
        },
        'exportDefinition': {
            'required': false,
        },
    }
});

/**
 * Message stream information including its definition, storage status and export status
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class MessageStreamInfo {
    #__definition = null;
    #__storageStatus = null;
    #__exportStatuses = null;

    /**
     * @param definition {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     * @param storageStatus {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes
     * @param exportStatuses {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]} 
     */
    constructor(
        definition = null,
        storageStatus = null,
        exportStatuses = null,
    ) {
        if (definition !== null && !(definition instanceof MessageStreamDefinition)) {
            throw new Error("definition must be MessageStreamDefinition");
        }

        if (storageStatus !== null && !(storageStatus instanceof MessageStreamInfo._storageStatus)) {
            throw new Error("storageStatus must be MessageStreamInfo._storageStatus");
        }

        if (exportStatuses !== null && !(exportStatuses instanceof Array)) {
            throw new Error("exportStatuses must be Array");
        }
        if (exportStatuses !== null && !exportStatuses.every((v) => v instanceof MessageStreamInfo._exportStatuses)) {
            throw new Error("exportStatuses array values must be MessageStreamInfo._exportStatuses");
        }

        this.#__definition = definition;
        this.#__storageStatus = storageStatus;
        this.#__exportStatuses = exportStatuses;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     
     */
    get definition() {
        return this.#__definition;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     */
    set definition(value) {
        if (value !== null && !(value instanceof MessageStreamDefinition)) {
            throw new Error("definition must be MessageStreamDefinition");
        }

        this.#__definition = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
     */
    withDefinition(value) {
        this.definition = value;
        return this;
    }

    /**
     * Stream status including oldest/newest sequence number and total bytes
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
     
     */
    get storageStatus() {
        return this.#__storageStatus;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes
     */
    set storageStatus(value) {
        if (value !== null && !(value instanceof MessageStreamInfo._storageStatus)) {
            throw new Error("storageStatus must be MessageStreamInfo._storageStatus");
        }

        this.#__storageStatus = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
     */
    withStorageStatus(value) {
        this.storageStatus = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]}
     
     */
    get exportStatuses() {
        return this.#__exportStatuses;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]} 
     */
    set exportStatuses(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("exportStatuses must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof MessageStreamInfo._exportStatuses)) {
            throw new Error("exportStatuses array values must be MessageStreamInfo._exportStatuses");
        }

        this.#__exportStatuses = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses[]} 
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
     */
    withExportStatuses(value) {
        this.exportStatuses = value;
        return this;
    }

    static fromMap(d) {
        const ret = new MessageStreamInfo();
        if ("definition" in d) {
            ret.definition = Object.prototype.hasOwnProperty.call(MessageStreamDefinition, "fromMap") ? MessageStreamDefinition.fromMap(d["definition"]) : d["definition"];
        }
        if ("storageStatus" in d) {
            ret.storageStatus = Object.prototype.hasOwnProperty.call(MessageStreamInfo._storageStatus, "fromMap") ? MessageStreamInfo._storageStatus.fromMap(d["storageStatus"]) : d["storageStatus"];
        }
        if ("exportStatuses" in d) {
            ret.exportStatuses = d["exportStatuses"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(MessageStreamInfo._exportStatuses, "fromMap") ? MessageStreamInfo._exportStatuses.fromMap(v) : v);
                return acc;
            }, []);
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.definition !== null) {
            d["definition"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.definition), "asMap") ? this.definition.asMap() : this.definition;
        }
        if (this.storageStatus !== null) {
            d["storageStatus"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.storageStatus), "asMap") ? this.storageStatus.asMap() : this.storageStatus;
        }
        if (this.exportStatuses !== null) {
            d["exportStatuses"] = this.exportStatuses.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        return d;
    }
};

MessageStreamInfo._storageStatus =
    /**
     * Stream status including oldest/newest sequence number and total bytes
     *
     * @class
     * @memberOf aws-greengrass-core-sdk.StreamManager
     */
    class _storageStatus {
        #__oldestSequenceNumber = null;
        #__newestSequenceNumber = null;
        #__totalBytes = null;

        /**
         * @param oldestSequenceNumber {Number} The sequence number of the first message which is still accessible in the stream.
         * @param newestSequenceNumber {Number} The sequence number of the last appended message.
         * @param totalBytes {Number} The current total size of the stream in bytes.
         */
        constructor(
            oldestSequenceNumber = null,
            newestSequenceNumber = null,
            totalBytes = null,
        ) {
            if (oldestSequenceNumber !== null && !(typeof oldestSequenceNumber === "number")) {
                throw new Error("oldestSequenceNumber must be Number");
            }

            if (newestSequenceNumber !== null && !(typeof newestSequenceNumber === "number")) {
                throw new Error("newestSequenceNumber must be Number");
            }

            if (totalBytes !== null && !(typeof totalBytes === "number")) {
                throw new Error("totalBytes must be Number");
            }

            this.#__oldestSequenceNumber = oldestSequenceNumber;
            this.#__newestSequenceNumber = newestSequenceNumber;
            this.#__totalBytes = totalBytes;
        }

        /**
         * The sequence number of the first message which is still accessible in the stream.
         * @returns {Number}
         
         */
        get oldestSequenceNumber() {
            return this.#__oldestSequenceNumber;
        }
        /**
         * @param value {Number} The sequence number of the first message which is still accessible in the stream.
         */
        set oldestSequenceNumber(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("oldestSequenceNumber must be Number");
            }

            this.#__oldestSequenceNumber = value;
        }
        /**
         * @param value {Number} The sequence number of the first message which is still accessible in the stream.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
         */
        withOldestSequenceNumber(value) {
            this.oldestSequenceNumber = value;
            return this;
        }

        /**
         * The sequence number of the last appended message.
         * @returns {Number}
         
         */
        get newestSequenceNumber() {
            return this.#__newestSequenceNumber;
        }
        /**
         * @param value {Number} The sequence number of the last appended message.
         */
        set newestSequenceNumber(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("newestSequenceNumber must be Number");
            }

            this.#__newestSequenceNumber = value;
        }
        /**
         * @param value {Number} The sequence number of the last appended message.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
         */
        withNewestSequenceNumber(value) {
            this.newestSequenceNumber = value;
            return this;
        }

        /**
         * The current total size of the stream in bytes.
         * @returns {Number}
         
         */
        get totalBytes() {
            return this.#__totalBytes;
        }
        /**
         * @param value {Number} The current total size of the stream in bytes.
         */
        set totalBytes(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("totalBytes must be Number");
            }

            this.#__totalBytes = value;
        }
        /**
         * @param value {Number} The current total size of the stream in bytes.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
         */
        withTotalBytes(value) {
            this.totalBytes = value;
            return this;
        }

        static fromMap(d) {
            const ret = new MessageStreamInfo._storageStatus();
            if ("oldestSequenceNumber" in d) {
                ret.oldestSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["oldestSequenceNumber"]) : d["oldestSequenceNumber"];
            }
            if ("newestSequenceNumber" in d) {
                ret.newestSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["newestSequenceNumber"]) : d["newestSequenceNumber"];
            }
            if ("totalBytes" in d) {
                ret.totalBytes = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["totalBytes"]) : d["totalBytes"];
            }
            return ret;
        }

        asMap() {
            const d = {};
            if (this.oldestSequenceNumber !== null) {
                d["oldestSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.oldestSequenceNumber), "asMap") ? this.oldestSequenceNumber.asMap() : this.oldestSequenceNumber;
            }
            if (this.newestSequenceNumber !== null) {
                d["newestSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.newestSequenceNumber), "asMap") ? this.newestSequenceNumber.asMap() : this.newestSequenceNumber;
            }
            if (this.totalBytes !== null) {
                d["totalBytes"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.totalBytes), "asMap") ? this.totalBytes.asMap() : this.totalBytes;
            }
            return d;
        }
    };

Object.defineProperty(MessageStreamInfo._storageStatus, "typesMap", {
    value: {
        oldestSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        newestSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        totalBytes: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(MessageStreamInfo._storageStatus, "formatsMap", {
    value: {}
});
Object.defineProperty(MessageStreamInfo._storageStatus, "validationsMap", {
    value: {
        'oldestSequenceNumber': {
            'required': false,
        },
        'newestSequenceNumber': {
            'required': false,
        },
        'totalBytes': {
            'required': false,
        },
    }
});

MessageStreamInfo._exportStatuses =
    /**
     * Export status including the export identifier and the last exported sequence number for that export task
     *
     * @class
     * @memberOf aws-greengrass-core-sdk.StreamManager
     */
    class _exportStatuses {
        #__exportConfigIdentifier = null;
        #__lastExportedSequenceNumber = null;
        #__lastExportTime = null;
        #__errorMessage = null;

        /**
         * @param exportConfigIdentifier {String} The unique export identifier.
         * @param lastExportedSequenceNumber {Number} The sequence number of the last message which was successfully exported.
         * @param lastExportTime {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
         * @param errorMessage {String} Error message from the last export attempt if it failed.
         */
        constructor(
            exportConfigIdentifier = null,
            lastExportedSequenceNumber = null,
            lastExportTime = null,
            errorMessage = null,
        ) {
            if (exportConfigIdentifier !== null && !(typeof exportConfigIdentifier === "string")) {
                throw new Error("exportConfigIdentifier must be String");
            }

            if (lastExportedSequenceNumber !== null && !(typeof lastExportedSequenceNumber === "number")) {
                throw new Error("lastExportedSequenceNumber must be Number");
            }

            if (lastExportTime !== null && !(typeof lastExportTime === "number")) {
                throw new Error("lastExportTime must be Number");
            }

            if (errorMessage !== null && !(typeof errorMessage === "string")) {
                throw new Error("errorMessage must be String");
            }

            this.#__exportConfigIdentifier = exportConfigIdentifier;
            this.#__lastExportedSequenceNumber = lastExportedSequenceNumber;
            this.#__lastExportTime = lastExportTime;
            this.#__errorMessage = errorMessage;
        }

        /**
         * The unique export identifier.
         * @returns {String}
         
         */
        get exportConfigIdentifier() {
            return this.#__exportConfigIdentifier;
        }
        /**
         * @param value {String} The unique export identifier.
         */
        set exportConfigIdentifier(value) {
            if (value !== null && !(typeof value === "string")) {
                throw new Error("exportConfigIdentifier must be String");
            }

            this.#__exportConfigIdentifier = value;
        }
        /**
         * @param value {String} The unique export identifier.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withExportConfigIdentifier(value) {
            this.exportConfigIdentifier = value;
            return this;
        }

        /**
         * The sequence number of the last message which was successfully exported.
         * @returns {Number}
         
         */
        get lastExportedSequenceNumber() {
            return this.#__lastExportedSequenceNumber;
        }
        /**
         * @param value {Number} The sequence number of the last message which was successfully exported.
         */
        set lastExportedSequenceNumber(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("lastExportedSequenceNumber must be Number");
            }

            this.#__lastExportedSequenceNumber = value;
        }
        /**
         * @param value {Number} The sequence number of the last message which was successfully exported.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withLastExportedSequenceNumber(value) {
            this.lastExportedSequenceNumber = value;
            return this;
        }

        /**
         * The last time an export was attempted. Data is Unix epoch time in milliseconds.
         * @returns {Number}
         
         */
        get lastExportTime() {
            return this.#__lastExportTime;
        }
        /**
         * @param value {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
         */
        set lastExportTime(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("lastExportTime must be Number");
            }

            this.#__lastExportTime = value;
        }
        /**
         * @param value {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withLastExportTime(value) {
            this.lastExportTime = value;
            return this;
        }

        /**
         * Error message from the last export attempt if it failed.
         * @returns {String}
         
         */
        get errorMessage() {
            return this.#__errorMessage;
        }
        /**
         * @param value {String} Error message from the last export attempt if it failed.
         */
        set errorMessage(value) {
            if (value !== null && !(typeof value === "string")) {
                throw new Error("errorMessage must be String");
            }

            this.#__errorMessage = value;
        }
        /**
         * @param value {String} Error message from the last export attempt if it failed.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withErrorMessage(value) {
            this.errorMessage = value;
            return this;
        }

        static fromMap(d) {
            const ret = new MessageStreamInfo._exportStatuses();
            if ("exportConfigIdentifier" in d) {
                ret.exportConfigIdentifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["exportConfigIdentifier"]) : d["exportConfigIdentifier"];
            }
            if ("lastExportedSequenceNumber" in d) {
                ret.lastExportedSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["lastExportedSequenceNumber"]) : d["lastExportedSequenceNumber"];
            }
            if ("lastExportTime" in d) {
                ret.lastExportTime = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["lastExportTime"]) : d["lastExportTime"];
            }
            if ("errorMessage" in d) {
                ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
            }
            return ret;
        }

        asMap() {
            const d = {};
            if (this.exportConfigIdentifier !== null) {
                d["exportConfigIdentifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportConfigIdentifier), "asMap") ? this.exportConfigIdentifier.asMap() : this.exportConfigIdentifier;
            }
            if (this.lastExportedSequenceNumber !== null) {
                d["lastExportedSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.lastExportedSequenceNumber), "asMap") ? this.lastExportedSequenceNumber.asMap() : this.lastExportedSequenceNumber;
            }
            if (this.lastExportTime !== null) {
                d["lastExportTime"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.lastExportTime), "asMap") ? this.lastExportTime.asMap() : this.lastExportTime;
            }
            if (this.errorMessage !== null) {
                d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
            }
            return d;
        }
    };

Object.defineProperty(MessageStreamInfo._exportStatuses, "typesMap", {
    value: {
        exportConfigIdentifier: {
            'type': String,
            'subtype': null
        },
        lastExportedSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        lastExportTime: {
            'type': Number,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(MessageStreamInfo._exportStatuses, "formatsMap", {
    value: {}
});
Object.defineProperty(MessageStreamInfo._exportStatuses, "validationsMap", {
    value: {
        'exportConfigIdentifier': {
            'required': false,
        },
        'lastExportedSequenceNumber': {
            'required': true,
        },
        'lastExportTime': {
            'required': false,
        },
        'errorMessage': {
            'required': false,
        },
    }
});

Object.defineProperty(MessageStreamInfo, "typesMap", {
    value: {
        definition: {
            'type': MessageStreamDefinition,
            'subtype': null
        },
        storageStatus: {
            'type': MessageStreamInfo._storageStatus,
            'subtype': null
        },
        exportStatuses: {
            'type': Array,
            'subtype': MessageStreamInfo._exportStatuses
        },
    }
});
Object.defineProperty(MessageStreamInfo, "formatsMap", {
    value: {}
});
Object.defineProperty(MessageStreamInfo, "validationsMap", {
    value: {
        'definition': {
            'required': true,
        },
        'storageStatus': {
            'required': true,
        },
        'exportStatuses': {
            'required': false,
        },
    }
});

/**
 * Message object containing metadata and the user's payload
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Message {
    #__streamName = null;
    #__sequenceNumber = null;
    #__ingestTime = null;
    #__payload = null;

    /**
     * @param streamName {String} The name of the stream which this message is in.
     * @param sequenceNumber {Number} The sequence number of this message within the stream.
     * @param ingestTime {Number} The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     * @param payload {Buffer} The binary message data.
     */
    constructor(
        streamName = null,
        sequenceNumber = null,
        ingestTime = null,
        payload = null,
    ) {
        if (streamName !== null && !(typeof streamName === "string")) {
            throw new Error("streamName must be String");
        }

        if (sequenceNumber !== null && !(typeof sequenceNumber === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        if (ingestTime !== null && !(typeof ingestTime === "number")) {
            throw new Error("ingestTime must be Number");
        }

        if (payload !== null && !(payload instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__streamName = streamName;
        this.#__sequenceNumber = sequenceNumber;
        this.#__ingestTime = ingestTime;
        this.#__payload = payload;
    }

    /**
     * The name of the stream which this message is in.
     * @returns {String}
     
     */
    get streamName() {
        return this.#__streamName;
    }
    /**
     * @param value {String} The name of the stream which this message is in.
     */
    set streamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("streamName must be String");
        }

        this.#__streamName = value;
    }
    /**
     * @param value {String} The name of the stream which this message is in.
     * @returns {aws-greengrass-core-sdk.StreamManager.Message}
     */
    withStreamName(value) {
        this.streamName = value;
        return this;
    }

    /**
     * The sequence number of this message within the stream.
     * @returns {Number}
     
     */
    get sequenceNumber() {
        return this.#__sequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of this message within the stream.
     */
    set sequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        this.#__sequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of this message within the stream.
     * @returns {aws-greengrass-core-sdk.StreamManager.Message}
     */
    withSequenceNumber(value) {
        this.sequenceNumber = value;
        return this;
    }

    /**
     * The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     * @returns {Number}
     
     */
    get ingestTime() {
        return this.#__ingestTime;
    }
    /**
     * @param value {Number} The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     */
    set ingestTime(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("ingestTime must be Number");
        }

        this.#__ingestTime = value;
    }
    /**
     * @param value {Number} The time that the message was ingested to Stream Manager. Data is Unix epoch time in milliseconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.Message}
     */
    withIngestTime(value) {
        this.ingestTime = value;
        return this;
    }

    /**
     * The binary message data.
     * @returns {Buffer}
     
     */
    get payload() {
        return this.#__payload;
    }
    /**
     * @param value {Buffer} The binary message data.
     */
    set payload(value) {
        if (value !== null && !(value instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__payload = value;
    }
    /**
     * @param value {Buffer} The binary message data.
     * @returns {aws-greengrass-core-sdk.StreamManager.Message}
     */
    withPayload(value) {
        this.payload = value;
        return this;
    }

    static fromMap(d) {
        const ret = new Message();
        if ("streamName" in d) {
            ret.streamName = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["streamName"]) : d["streamName"];
        }
        if ("sequenceNumber" in d) {
            ret.sequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["sequenceNumber"]) : d["sequenceNumber"];
        }
        if ("ingestTime" in d) {
            ret.ingestTime = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["ingestTime"]) : d["ingestTime"];
        }
        if ("payload" in d) {
            ret.payload = Object.prototype.hasOwnProperty.call(Buffer, "fromMap") ? Buffer.fromMap(d["payload"]) : d["payload"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.streamName !== null) {
            d["streamName"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.streamName), "asMap") ? this.streamName.asMap() : this.streamName;
        }
        if (this.sequenceNumber !== null) {
            d["sequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.sequenceNumber), "asMap") ? this.sequenceNumber.asMap() : this.sequenceNumber;
        }
        if (this.ingestTime !== null) {
            d["ingestTime"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.ingestTime), "asMap") ? this.ingestTime.asMap() : this.ingestTime;
        }
        if (this.payload !== null) {
            d["payload"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.payload), "asMap") ? this.payload.asMap() : this.payload;
        }
        return d;
    }
};

Object.defineProperty(Message, "typesMap", {
    value: {
        streamName: {
            'type': String,
            'subtype': null
        },
        sequenceNumber: {
            'type': Number,
            'subtype': null
        },
        ingestTime: {
            'type': Number,
            'subtype': null
        },
        payload: {
            'type': Buffer,
            'subtype': null
        },
    }
});
Object.defineProperty(Message, "formatsMap", {
    value: {}
});
Object.defineProperty(Message, "validationsMap", {
    value: {
        'streamName': {
            'required': true,
        },
        'sequenceNumber': {
            'required': false,
        },
        'ingestTime': {
            'required': false,
        },
        'payload': {
            'required': true,
        },
    }
});

/**
 * Options for the ReadMessages API. All fields are optional.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ReadMessagesOptions {
    #__desiredStartSequenceNumber = null;
    #__minMessageCount = null;
    #__maxMessageCount = null;
    #__readTimeoutMillis = null;

    /**
     * @param desiredStartSequenceNumber {Number} The desired beginning sequence number to start reading from. If the desired sequence number is less than the current minimum of the stream, then it will instead start reading from the current minimum.
     * @param minMessageCount {Number} The minimum number of messages that will be returned. If not enough messages are available for reading, then NotEnoughMessages exception will be thrown.
       The minimum values is 1 and the maximum value is 2147483647.
     * @param maxMessageCount {Number} The maximum number of messages that will be returned.
       The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @param readTimeoutMillis {Number} The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
       If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
       If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream, waiting until the minimum number of messages is reached.
       The maximum value is the value of the client timeout.
     */
    constructor(
        desiredStartSequenceNumber = null,
        minMessageCount = 1,
        maxMessageCount = null,
        readTimeoutMillis = 0,
    ) {
        if (desiredStartSequenceNumber !== null && !(typeof desiredStartSequenceNumber === "number")) {
            throw new Error("desiredStartSequenceNumber must be Number");
        }

        if (minMessageCount !== null && !(typeof minMessageCount === "number")) {
            throw new Error("minMessageCount must be Number");
        }

        if (maxMessageCount !== null && !(typeof maxMessageCount === "number")) {
            throw new Error("maxMessageCount must be Number");
        }

        if (readTimeoutMillis !== null && !(typeof readTimeoutMillis === "number")) {
            throw new Error("readTimeoutMillis must be Number");
        }

        this.#__desiredStartSequenceNumber = desiredStartSequenceNumber;
        this.#__minMessageCount = minMessageCount;
        this.#__maxMessageCount = maxMessageCount;
        this.#__readTimeoutMillis = readTimeoutMillis;
    }

    /**
     * The desired beginning sequence number to start reading from. If the desired sequence number is less than the current minimum of the stream, then it will instead start reading from the current minimum.
     * @returns {Number}
     
     */
    get desiredStartSequenceNumber() {
        return this.#__desiredStartSequenceNumber;
    }
    /**
     * @param value {Number} The desired beginning sequence number to start reading from. If the desired sequence number is less than the current minimum of the stream, then it will instead start reading from the current minimum.
     */
    set desiredStartSequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("desiredStartSequenceNumber must be Number");
        }

        this.#__desiredStartSequenceNumber = value;
    }
    /**
     * @param value {Number} The desired beginning sequence number to start reading from. If the desired sequence number is less than the current minimum of the stream, then it will instead start reading from the current minimum.
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}
     */
    withDesiredStartSequenceNumber(value) {
        this.desiredStartSequenceNumber = value;
        return this;
    }

    /**
     * The minimum number of messages that will be returned. If not enough messages are available for reading, then NotEnoughMessages exception will be thrown.
       The minimum values is 1 and the maximum value is 2147483647.
     * @returns {Number}

     */
    get minMessageCount() {
        return this.#__minMessageCount;
    }
    /**
     * @param value {Number} The minimum number of messages that will be returned. If not enough messages are available for reading, then NotEnoughMessages exception will be thrown.
       The minimum values is 1 and the maximum value is 2147483647.
     */
    set minMessageCount(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("minMessageCount must be Number");
        }

        this.#__minMessageCount = value;
    }
    /**
     * @param value {Number} The minimum number of messages that will be returned. If not enough messages are available for reading, then NotEnoughMessages exception will be thrown.
       The minimum values is 1 and the maximum value is 2147483647.
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}
     */
    withMinMessageCount(value) {
        this.minMessageCount = value;
        return this;
    }

    /**
     * The maximum number of messages that will be returned.
       The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @returns {Number}

     */
    get maxMessageCount() {
        return this.#__maxMessageCount;
    }
    /**
     * @param value {Number} The maximum number of messages that will be returned.
       The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     */
    set maxMessageCount(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("maxMessageCount must be Number");
        }

        this.#__maxMessageCount = value;
    }
    /**
     * @param value {Number} The maximum number of messages that will be returned.
       The minimum values is the value of the minimum message count and the maximum value is 2147483647.
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}
     */
    withMaxMessageCount(value) {
        this.maxMessageCount = value;
        return this;
    }

    /**
     * The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
       If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
       If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream, waiting until the minimum number of messages is reached.
       The maximum value is the value of the client timeout.
     * @returns {Number}

     */
    get readTimeoutMillis() {
        return this.#__readTimeoutMillis;
    }
    /**
     * @param value {Number} The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
       If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
       If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream, waiting until the minimum number of messages is reached.
       The maximum value is the value of the client timeout.
     */
    set readTimeoutMillis(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("readTimeoutMillis must be Number");
        }

        this.#__readTimeoutMillis = value;
    }
    /**
     * @param value {Number} The time to wait for messages in milliseconds. Default is 0, meaning that the server will not wait for messages.
       If it can fulfill the minimum messages it will return them, but otherwise NotEnoughMessages exception will be thrown.
       If the timeout is greater than zero, then the server will wait up to that time for more messages to be appended to the stream, waiting until the minimum number of messages is reached.
       The maximum value is the value of the client timeout.
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}
     */
    withReadTimeoutMillis(value) {
        this.readTimeoutMillis = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ReadMessagesOptions();
        if ("desiredStartSequenceNumber" in d) {
            ret.desiredStartSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["desiredStartSequenceNumber"]) : d["desiredStartSequenceNumber"];
        }
        if ("minMessageCount" in d) {
            ret.minMessageCount = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["minMessageCount"]) : d["minMessageCount"];
        }
        if ("maxMessageCount" in d) {
            ret.maxMessageCount = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["maxMessageCount"]) : d["maxMessageCount"];
        }
        if ("readTimeoutMillis" in d) {
            ret.readTimeoutMillis = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["readTimeoutMillis"]) : d["readTimeoutMillis"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.desiredStartSequenceNumber !== null) {
            d["desiredStartSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.desiredStartSequenceNumber), "asMap") ? this.desiredStartSequenceNumber.asMap() : this.desiredStartSequenceNumber;
        }
        if (this.minMessageCount !== null) {
            d["minMessageCount"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.minMessageCount), "asMap") ? this.minMessageCount.asMap() : this.minMessageCount;
        }
        if (this.maxMessageCount !== null) {
            d["maxMessageCount"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.maxMessageCount), "asMap") ? this.maxMessageCount.asMap() : this.maxMessageCount;
        }
        if (this.readTimeoutMillis !== null) {
            d["readTimeoutMillis"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.readTimeoutMillis), "asMap") ? this.readTimeoutMillis.asMap() : this.readTimeoutMillis;
        }
        return d;
    }
};

Object.defineProperty(ReadMessagesOptions, "typesMap", {
    value: {
        desiredStartSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        minMessageCount: {
            'type': Number,
            'subtype': null
        },
        maxMessageCount: {
            'type': Number,
            'subtype': null
        },
        readTimeoutMillis: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(ReadMessagesOptions, "formatsMap", {
    value: {}
});
Object.defineProperty(ReadMessagesOptions, "validationsMap", {
    value: {
        'desiredStartSequenceNumber': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 0,
        },
        'minMessageCount': {
            'required': false,
            'maximum': 2147483647,
            'minimum': 1,
        },
        'maxMessageCount': {
            'required': false,
            'maximum': 2147483647,
            'minimum': 1,
        },
        'readTimeoutMillis': {
            'required': false,
            'maximum': 9223372036854,
            'minimum': 0,
        },
    }
});

/**
 * (Internal Only) Request object for creating a message stream
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class CreateMessageStreamRequest {
    #__requestId = null;
    #__definition = null;

    /**
     * @param requestId {String} 
     * @param definition {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     */
    constructor(
        requestId = null,
        definition = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (definition !== null && !(definition instanceof MessageStreamDefinition)) {
            throw new Error("definition must be MessageStreamDefinition");
        }

        this.#__requestId = requestId;
        this.#__definition = definition;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.CreateMessageStreamRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition}
     
     */
    get definition() {
        return this.#__definition;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     */
    set definition(value) {
        if (value !== null && !(value instanceof MessageStreamDefinition)) {
            throw new Error("definition must be MessageStreamDefinition");
        }

        this.#__definition = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamDefinition} 
     * @returns {aws-greengrass-core-sdk.StreamManager.CreateMessageStreamRequest}
     */
    withDefinition(value) {
        this.definition = value;
        return this;
    }

    static fromMap(d) {
        const ret = new CreateMessageStreamRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("definition" in d) {
            ret.definition = Object.prototype.hasOwnProperty.call(MessageStreamDefinition, "fromMap") ? MessageStreamDefinition.fromMap(d["definition"]) : d["definition"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.definition !== null) {
            d["definition"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.definition), "asMap") ? this.definition.asMap() : this.definition;
        }
        return d;
    }
};

Object.defineProperty(CreateMessageStreamRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        definition: {
            'type': MessageStreamDefinition,
            'subtype': null
        },
    }
});
Object.defineProperty(CreateMessageStreamRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(CreateMessageStreamRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'definition': {
            'required': true,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class CreateMessageStreamResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.CreateMessageStreamResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.CreateMessageStreamResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.CreateMessageStreamResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    static fromMap(d) {
        const ret = new CreateMessageStreamResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        return d;
    }
};

Object.defineProperty(CreateMessageStreamResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(CreateMessageStreamResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(CreateMessageStreamResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) Request object for deleting a message stream
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class DeleteMessageStreamRequest {
    #__requestId = null;
    #__name = null;

    /**
     * @param requestId {String} 
     * @param name {String} 
     */
    constructor(
        requestId = null,
        name = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (name !== null && !(typeof name === "string")) {
            throw new Error("name must be String");
        }

        this.#__requestId = requestId;
        this.#__name = name;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DeleteMessageStreamRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get name() {
        return this.#__name;
    }
    /**
     * @param value {String} 
     */
    set name(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("name must be String");
        }

        this.#__name = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DeleteMessageStreamRequest}
     */
    withName(value) {
        this.name = value;
        return this;
    }

    static fromMap(d) {
        const ret = new DeleteMessageStreamRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("name" in d) {
            ret.name = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["name"]) : d["name"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.name !== null) {
            d["name"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.name), "asMap") ? this.name.asMap() : this.name;
        }
        return d;
    }
};

Object.defineProperty(DeleteMessageStreamRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        name: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(DeleteMessageStreamRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(DeleteMessageStreamRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'name': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class DeleteMessageStreamResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DeleteMessageStreamResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DeleteMessageStreamResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DeleteMessageStreamResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    static fromMap(d) {
        const ret = new DeleteMessageStreamResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        return d;
    }
};

Object.defineProperty(DeleteMessageStreamResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(DeleteMessageStreamResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(DeleteMessageStreamResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) Request object for describing a message stream
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class DescribeMessageStreamRequest {
    #__requestId = null;
    #__name = null;

    /**
     * @param requestId {String} 
     * @param name {String} 
     */
    constructor(
        requestId = null,
        name = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (name !== null && !(typeof name === "string")) {
            throw new Error("name must be String");
        }

        this.#__requestId = requestId;
        this.#__name = name;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get name() {
        return this.#__name;
    }
    /**
     * @param value {String} 
     */
    set name(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("name must be String");
        }

        this.#__name = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamRequest}
     */
    withName(value) {
        this.name = value;
        return this;
    }

    static fromMap(d) {
        const ret = new DescribeMessageStreamRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("name" in d) {
            ret.name = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["name"]) : d["name"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.name !== null) {
            d["name"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.name), "asMap") ? this.name.asMap() : this.name;
        }
        return d;
    }
};

Object.defineProperty(DescribeMessageStreamRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        name: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(DescribeMessageStreamRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(DescribeMessageStreamRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'name': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
    }
});

/**
 * (Internal Only) Response object for describing a message stream
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class DescribeMessageStreamResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;
    #__messageStreamInfo = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     * @param messageStreamInfo {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
        messageStreamInfo = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        if (messageStreamInfo !== null && !(messageStreamInfo instanceof MessageStreamInfo)) {
            throw new Error("messageStreamInfo must be MessageStreamInfo");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
        this.#__messageStreamInfo = messageStreamInfo;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo}
     
     */
    get messageStreamInfo() {
        return this.#__messageStreamInfo;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo} 
     */
    set messageStreamInfo(value) {
        if (value !== null && !(value instanceof MessageStreamInfo)) {
            throw new Error("messageStreamInfo must be MessageStreamInfo");
        }

        this.#__messageStreamInfo = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo} 
     * @returns {aws-greengrass-core-sdk.StreamManager.DescribeMessageStreamResponse}
     */
    withMessageStreamInfo(value) {
        this.messageStreamInfo = value;
        return this;
    }

    static fromMap(d) {
        const ret = new DescribeMessageStreamResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        if ("messageStreamInfo" in d) {
            ret.messageStreamInfo = Object.prototype.hasOwnProperty.call(MessageStreamInfo, "fromMap") ? MessageStreamInfo.fromMap(d["messageStreamInfo"]) : d["messageStreamInfo"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        if (this.messageStreamInfo !== null) {
            d["messageStreamInfo"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.messageStreamInfo), "asMap") ? this.messageStreamInfo.asMap() : this.messageStreamInfo;
        }
        return d;
    }
};

Object.defineProperty(DescribeMessageStreamResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
        messageStreamInfo: {
            'type': MessageStreamInfo,
            'subtype': null
        },
    }
});
Object.defineProperty(DescribeMessageStreamResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(DescribeMessageStreamResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
        'messageStreamInfo': {
            'required': false,
        },
    }
});

/**
 * (Intenral Only) Request object for appending to a message stream
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class AppendMessageRequest {
    #__requestId = null;
    #__name = null;
    #__payload = null;

    /**
     * @param requestId {String} 
     * @param name {String} 
     * @param payload {Buffer} 
     */
    constructor(
        requestId = null,
        name = null,
        payload = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (name !== null && !(typeof name === "string")) {
            throw new Error("name must be String");
        }

        if (payload !== null && !(payload instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__requestId = requestId;
        this.#__name = name;
        this.#__payload = payload;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get name() {
        return this.#__name;
    }
    /**
     * @param value {String} 
     */
    set name(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("name must be String");
        }

        this.#__name = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageRequest}
     */
    withName(value) {
        this.name = value;
        return this;
    }

    /**
     * @returns {Buffer}
     
     */
    get payload() {
        return this.#__payload;
    }
    /**
     * @param value {Buffer} 
     */
    set payload(value) {
        if (value !== null && !(value instanceof Buffer)) {
            throw new Error("payload must be Buffer");
        }

        this.#__payload = value;
    }
    /**
     * @param value {Buffer} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageRequest}
     */
    withPayload(value) {
        this.payload = value;
        return this;
    }

    static fromMap(d) {
        const ret = new AppendMessageRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("name" in d) {
            ret.name = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["name"]) : d["name"];
        }
        if ("payload" in d) {
            ret.payload = Object.prototype.hasOwnProperty.call(Buffer, "fromMap") ? Buffer.fromMap(d["payload"]) : d["payload"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.name !== null) {
            d["name"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.name), "asMap") ? this.name.asMap() : this.name;
        }
        if (this.payload !== null) {
            d["payload"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.payload), "asMap") ? this.payload.asMap() : this.payload;
        }
        return d;
    }
};

Object.defineProperty(AppendMessageRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        name: {
            'type': String,
            'subtype': null
        },
        payload: {
            'type': Buffer,
            'subtype': null
        },
    }
});
Object.defineProperty(AppendMessageRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(AppendMessageRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'name': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'payload': {
            'required': true,
            'minLength': 1,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class AppendMessageResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;
    #__sequenceNumber = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     * @param sequenceNumber {Number} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
        sequenceNumber = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        if (sequenceNumber !== null && !(typeof sequenceNumber === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
        this.#__sequenceNumber = sequenceNumber;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    /**
     * @returns {Number}
     
     */
    get sequenceNumber() {
        return this.#__sequenceNumber;
    }
    /**
     * @param value {Number} 
     */
    set sequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        this.#__sequenceNumber = value;
    }
    /**
     * @param value {Number} 
     * @returns {aws-greengrass-core-sdk.StreamManager.AppendMessageResponse}
     */
    withSequenceNumber(value) {
        this.sequenceNumber = value;
        return this;
    }

    static fromMap(d) {
        const ret = new AppendMessageResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        if ("sequenceNumber" in d) {
            ret.sequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["sequenceNumber"]) : d["sequenceNumber"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        if (this.sequenceNumber !== null) {
            d["sequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.sequenceNumber), "asMap") ? this.sequenceNumber.asMap() : this.sequenceNumber;
        }
        return d;
    }
};

Object.defineProperty(AppendMessageResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
        sequenceNumber: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(AppendMessageResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(AppendMessageResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
        'sequenceNumber': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) Request object for reading from a message stream. readMessagesOptions is optional.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ReadMessagesRequest {
    #__requestId = null;
    #__streamName = null;
    #__readMessagesOptions = null;

    /**
     * @param requestId {String} 
     * @param streamName {String} 
     * @param readMessagesOptions {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions} 
     */
    constructor(
        requestId = null,
        streamName = null,
        readMessagesOptions = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (streamName !== null && !(typeof streamName === "string")) {
            throw new Error("streamName must be String");
        }

        if (readMessagesOptions !== null && !(readMessagesOptions instanceof ReadMessagesOptions)) {
            throw new Error("readMessagesOptions must be ReadMessagesOptions");
        }

        this.#__requestId = requestId;
        this.#__streamName = streamName;
        this.#__readMessagesOptions = readMessagesOptions;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get streamName() {
        return this.#__streamName;
    }
    /**
     * @param value {String} 
     */
    set streamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("streamName must be String");
        }

        this.#__streamName = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesRequest}
     */
    withStreamName(value) {
        this.streamName = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions}
     
     */
    get readMessagesOptions() {
        return this.#__readMessagesOptions;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions} 
     */
    set readMessagesOptions(value) {
        if (value !== null && !(value instanceof ReadMessagesOptions)) {
            throw new Error("readMessagesOptions must be ReadMessagesOptions");
        }

        this.#__readMessagesOptions = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ReadMessagesOptions} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesRequest}
     */
    withReadMessagesOptions(value) {
        this.readMessagesOptions = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ReadMessagesRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("streamName" in d) {
            ret.streamName = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["streamName"]) : d["streamName"];
        }
        if ("readMessagesOptions" in d) {
            ret.readMessagesOptions = Object.prototype.hasOwnProperty.call(ReadMessagesOptions, "fromMap") ? ReadMessagesOptions.fromMap(d["readMessagesOptions"]) : d["readMessagesOptions"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.streamName !== null) {
            d["streamName"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.streamName), "asMap") ? this.streamName.asMap() : this.streamName;
        }
        if (this.readMessagesOptions !== null) {
            d["readMessagesOptions"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.readMessagesOptions), "asMap") ? this.readMessagesOptions.asMap() : this.readMessagesOptions;
        }
        return d;
    }
};

Object.defineProperty(ReadMessagesRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        streamName: {
            'type': String,
            'subtype': null
        },
        readMessagesOptions: {
            'type': ReadMessagesOptions,
            'subtype': null
        },
    }
});
Object.defineProperty(ReadMessagesRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(ReadMessagesRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'streamName': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'readMessagesOptions': {
            'required': false,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ReadMessagesResponse {
    #__requestId = null;
    #__messages = null;
    #__status = null;
    #__errorMessage = null;

    /**
     * @param requestId {String} 
     * @param messages {aws-greengrass-core-sdk.StreamManager.Message[]} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     */
    constructor(
        requestId = null,
        messages = null,
        status = null,
        errorMessage = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (messages !== null && !(messages instanceof Array)) {
            throw new Error("messages must be Array");
        }
        if (messages !== null && !messages.every((v) => v instanceof Message)) {
            throw new Error("messages array values must be Message");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__requestId = requestId;
        this.#__messages = messages;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.Message[]}
     
     */
    get messages() {
        return this.#__messages;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Message[]} 
     */
    set messages(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("messages must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof Message)) {
            throw new Error("messages array values must be Message");
        }

        this.#__messages = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Message[]} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesResponse}
     */
    withMessages(value) {
        this.messages = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ReadMessagesResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ReadMessagesResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("messages" in d) {
            ret.messages = d["messages"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Message, "fromMap") ? Message.fromMap(v) : v);
                return acc;
            }, []);
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.messages !== null) {
            d["messages"] = this.messages.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        return d;
    }
};

Object.defineProperty(ReadMessagesResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        messages: {
            'type': Array,
            'subtype': Message
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(ReadMessagesResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(ReadMessagesResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': false,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'messages': {
            'required': false,
        },
        'status': {
            'required': false,
        },
        'errorMessage': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) Request object to list all available streams. There are no options.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ListStreamsRequest {
    #__requestId = null;

    /**
     * @param requestId {String} 
     */
    constructor(
        requestId = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = requestId;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ListStreamsRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ListStreamsRequest();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        return d;
    }
};

Object.defineProperty(ListStreamsRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(ListStreamsRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(ListStreamsRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
    }
});

/**
 * Internal Only
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ListStreamsResponse {
    #__requestId = null;
    #__status = null;
    #__errorMessage = null;
    #__streams = null;

    /**
     * @param requestId {String} 
     * @param status {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @param errorMessage {String} 
     * @param streams {String[]} 
     */
    constructor(
        requestId = null,
        status = null,
        errorMessage = null,
        streams = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (status !== null && !(status instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        if (errorMessage !== null && !(typeof errorMessage === "string")) {
            throw new Error("errorMessage must be String");
        }

        if (streams !== null && !(streams instanceof Array)) {
            throw new Error("streams must be Array");
        }
        if (streams !== null && !streams.every((v) => typeof v === "string")) {
            throw new Error("streams array values must be String");
        }

        this.#__requestId = requestId;
        this.#__status = status;
        this.#__errorMessage = errorMessage;
        this.#__streams = streams;
    }

    /**
     * @returns {String}
     
     */
    get requestId() {
        return this.#__requestId;
    }
    /**
     * @param value {String} 
     */
    set requestId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("requestId must be String");
        }

        this.#__requestId = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ListStreamsResponse}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     */
    set status(value) {
        if (value !== null && !(value instanceof ResponseStatusCode)) {
            throw new Error("status must be ResponseStatusCode");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ListStreamsResponse}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {String}
     
     */
    get errorMessage() {
        return this.#__errorMessage;
    }
    /**
     * @param value {String} 
     */
    set errorMessage(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("errorMessage must be String");
        }

        this.#__errorMessage = value;
    }
    /**
     * @param value {String} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ListStreamsResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    /**
     * @returns {String[]}
     
     */
    get streams() {
        return this.#__streams;
    }
    /**
     * @param value {String[]} 
     */
    set streams(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("streams must be Array");
        }
        if (value !== null && !value.every((v) => typeof v === "string")) {
            throw new Error("streams array values must be String");
        }

        this.#__streams = value;
    }
    /**
     * @param value {String[]} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ListStreamsResponse}
     */
    withStreams(value) {
        this.streams = value;
        return this;
    }

    static fromMap(d) {
        const ret = new ListStreamsResponse();
        if ("requestId" in d) {
            ret.requestId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["requestId"]) : d["requestId"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(ResponseStatusCode, "fromMap") ? ResponseStatusCode.fromMap(d["status"]) : d["status"];
        }
        if ("errorMessage" in d) {
            ret.errorMessage = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["errorMessage"]) : d["errorMessage"];
        }
        if ("streams" in d) {
            ret.streams = d["streams"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(v) : v);
                return acc;
            }, []);
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.requestId !== null) {
            d["requestId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.requestId), "asMap") ? this.requestId.asMap() : this.requestId;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.errorMessage !== null) {
            d["errorMessage"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.errorMessage), "asMap") ? this.errorMessage.asMap() : this.errorMessage;
        }
        if (this.streams !== null) {
            d["streams"] = this.streams.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        return d;
    }
};

Object.defineProperty(ListStreamsResponse, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
        status: {
            'type': ResponseStatusCode,
            'subtype': null
        },
        errorMessage: {
            'type': String,
            'subtype': null
        },
        streams: {
            'type': Array,
            'subtype': String
        },
    }
});
Object.defineProperty(ListStreamsResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(ListStreamsResponse, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'status': {
            'required': true,
        },
        'errorMessage': {
            'required': false,
        },
        'streams': {
            'required': false,
        },
    }
});

/**
 * @type {{
StrategyOnFull: StrategyOnFull,
Persistence: Persistence,
ConnectRequest: ConnectRequest,
ResponseStatusCode: ResponseStatusCode,
ConnectResponse: ConnectResponse,
Operation: Operation,
MessageFrame: MessageFrame,
HTTPConfig: HTTPConfig,
IoTAnalyticsConfig: IoTAnalyticsConfig,
KinesisConfig: KinesisConfig,
ExportDefinition: ExportDefinition,
MessageStreamDefinition: MessageStreamDefinition,
MessageStreamInfo: MessageStreamInfo,
Message: Message,
ReadMessagesOptions: ReadMessagesOptions,
CreateMessageStreamRequest: CreateMessageStreamRequest,
CreateMessageStreamResponse: CreateMessageStreamResponse,
DeleteMessageStreamRequest: DeleteMessageStreamRequest,
DeleteMessageStreamResponse: DeleteMessageStreamResponse,
DescribeMessageStreamRequest: DescribeMessageStreamRequest,
DescribeMessageStreamResponse: DescribeMessageStreamResponse,
AppendMessageRequest: AppendMessageRequest,
AppendMessageResponse: AppendMessageResponse,
ReadMessagesRequest: ReadMessagesRequest,
ReadMessagesResponse: ReadMessagesResponse,
ListStreamsRequest: ListStreamsRequest,
ListStreamsResponse: ListStreamsResponse
}}
 */
module.exports = {
    StrategyOnFull,
    Persistence,
    ConnectRequest,
    ResponseStatusCode,
    ConnectResponse,
    Operation,
    MessageFrame,
    HTTPConfig,
    IoTAnalyticsConfig,
    KinesisConfig,
    ExportDefinition,
    MessageStreamDefinition,
    MessageStreamInfo,
    Message,
    ReadMessagesOptions,
    CreateMessageStreamRequest,
    CreateMessageStreamResponse,
    DeleteMessageStreamRequest,
    DeleteMessageStreamResponse,
    DescribeMessageStreamRequest,
    DescribeMessageStreamResponse,
    AppendMessageRequest,
    AppendMessageResponse,
    ReadMessagesRequest,
    ReadMessagesResponse,
    ListStreamsRequest,
    ListStreamsResponse,
};