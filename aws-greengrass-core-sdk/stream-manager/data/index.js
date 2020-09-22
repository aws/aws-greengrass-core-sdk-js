/**
 * (Internal Only) Version information.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class VersionInfo {

    #value = null;
    constructor(value = null) {
        if (!Object.values(VersionInfo.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return VersionInfo[VersionInfo.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(VersionInfo, "options", {
    value: {
        PROTOCOL_VERSION: "1.1.0",
    }
});
Object.defineProperty(VersionInfo, "optionsFlipped", {
    value: {
        "1.1.0": "PROTOCOL_VERSION",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.VersionInfo} PROTOCOL_VERSION
 * @memberOf aws-greengrass-core-sdk.StreamManager.VersionInfo#
 * @readonly
 */
Object.defineProperty(VersionInfo, "PROTOCOL_VERSION", {
    value: new VersionInfo("1.1.0")
});

/**
 * (Internal Only) Request object to connect to the service.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ConnectRequest {
    #__requestId = null;
    #__protocolVersion = null;
    #__otherSupportedProtocolVersions = null;
    #__sdkVersion = null;
    #__authToken = null;

    /**
     * @param requestId {String} 
     * @param protocolVersion {String} 
     * @param otherSupportedProtocolVersions {String[]} 
     * @param sdkVersion {String} 
     * @param authToken {String} 
     */
    constructor(
        requestId = null,
        protocolVersion = null,
        otherSupportedProtocolVersions = null,
        sdkVersion = null,
        authToken = null,
    ) {
        if (requestId !== null && !(typeof requestId === "string")) {
            throw new Error("requestId must be String");
        }

        if (protocolVersion !== null && !(typeof protocolVersion === "string")) {
            throw new Error("protocolVersion must be String");
        }

        if (otherSupportedProtocolVersions !== null && !(otherSupportedProtocolVersions instanceof Array)) {
            throw new Error("otherSupportedProtocolVersions must be Array");
        }
        if (otherSupportedProtocolVersions !== null && !otherSupportedProtocolVersions.every((v) => typeof v === "string")) {
            throw new Error("otherSupportedProtocolVersions array values must be String");
        }

        if (sdkVersion !== null && !(typeof sdkVersion === "string")) {
            throw new Error("sdkVersion must be String");
        }

        if (authToken !== null && !(typeof authToken === "string")) {
            throw new Error("authToken must be String");
        }

        this.#__requestId = requestId;
        this.#__protocolVersion = protocolVersion;
        this.#__otherSupportedProtocolVersions = otherSupportedProtocolVersions;
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
     * @returns {String[]}
     
     */
    get otherSupportedProtocolVersions() {
        return this.#__otherSupportedProtocolVersions;
    }
    /**
     * @param value {String[]} 
     */
    set otherSupportedProtocolVersions(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("otherSupportedProtocolVersions must be Array");
        }
        if (value !== null && !value.every((v) => typeof v === "string")) {
            throw new Error("otherSupportedProtocolVersions array values must be String");
        }

        this.#__otherSupportedProtocolVersions = value;
    }
    /**
     * @param value {String[]} 
     * @returns {aws-greengrass-core-sdk.StreamManager.ConnectRequest}
     */
    withOtherSupportedProtocolVersions(value) {
        this.otherSupportedProtocolVersions = value;
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
        if ("otherSupportedProtocolVersions" in d) {
            ret.otherSupportedProtocolVersions = d["otherSupportedProtocolVersions"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(v) : v);
                return acc;
            }, []);
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
        if (this.otherSupportedProtocolVersions !== null) {
            d["otherSupportedProtocolVersions"] = this.otherSupportedProtocolVersions.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
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
        otherSupportedProtocolVersions: {
            'type': Array,
            'subtype': String
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
        'otherSupportedProtocolVersions': {
            'required': false,
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
   UpdateFailed: Update operation failed.
   UpdateNotAllowed: One or more fields are not allowed to be updated.
   UnknownOperation: Client request is not recognized by the server.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ResponseStatusCode {

    #value = null;
    constructor(value = null) {
        if (!Object.values(ResponseStatusCode.options).includes(value)) {
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
        UpdateFailed: 16,
        UpdateNotAllowed: 17,
        UnknownOperation: 18,
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
        16: "UpdateFailed",
        17: "UpdateNotAllowed",
        18: "UnknownOperation",
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
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UpdateFailed
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UpdateFailed", {
    value: new ResponseStatusCode(16)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UpdateNotAllowed
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UpdateNotAllowed", {
    value: new ResponseStatusCode(17)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ResponseStatusCode} UnknownOperation
 * @memberOf aws-greengrass-core-sdk.StreamManager.ResponseStatusCode#
 * @readonly
 */
Object.defineProperty(ResponseStatusCode, "UnknownOperation", {
    value: new ResponseStatusCode(18)
});

/**
 * Internal Only.
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
 * Internal Only.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Operation {

    #value = null;
    constructor(value = null) {
        if (!Object.values(Operation.options).includes(value)) {
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
        UpdateMessageStream: 15,
        UpdateMessageStreamResponse: 16,
        UnknownOperationError: 17,
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
        15: "UpdateMessageStream",
        16: "UpdateMessageStreamResponse",
        17: "UnknownOperationError",
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
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} UpdateMessageStream
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "UpdateMessageStream", {
    value: new Operation(15)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} UpdateMessageStreamResponse
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "UpdateMessageStreamResponse", {
    value: new Operation(16)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Operation} UnknownOperationError
 * @memberOf aws-greengrass-core-sdk.StreamManager.Operation#
 * @readonly
 */
Object.defineProperty(Operation, "UnknownOperationError", {
    value: new Operation(17)
});

/**
 * Internal Only.
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
 * The type of event, which determines how to interpret the status payload.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class EventType {

    #value = null;
    constructor(value = null) {
        if (!Object.values(EventType.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return EventType[EventType.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(EventType, "options", {
    value: {
        S3Task: 0,
    }
});
Object.defineProperty(EventType, "optionsFlipped", {
    value: {
        0: "S3Task",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.EventType} S3Task
 * @memberOf aws-greengrass-core-sdk.StreamManager.EventType#
 * @readonly
 */
Object.defineProperty(EventType, "S3Task", {
    value: new EventType(0)
});

/**
 * The status of the event.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Status {

    #value = null;
    constructor(value = null) {
        if (!Object.values(Status.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return Status[Status.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(Status, "options", {
    value: {
        Success: 0,
        Failure: 1,
        InProgress: 2,
        Warning: 3,
        Canceled: 4,
    }
});
Object.defineProperty(Status, "optionsFlipped", {
    value: {
        0: "Success",
        1: "Failure",
        2: "InProgress",
        3: "Warning",
        4: "Canceled",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.Status} Success
 * @memberOf aws-greengrass-core-sdk.StreamManager.Status#
 * @readonly
 */
Object.defineProperty(Status, "Success", {
    value: new Status(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Status} Failure
 * @memberOf aws-greengrass-core-sdk.StreamManager.Status#
 * @readonly
 */
Object.defineProperty(Status, "Failure", {
    value: new Status(1)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Status} InProgress
 * @memberOf aws-greengrass-core-sdk.StreamManager.Status#
 * @readonly
 */
Object.defineProperty(Status, "InProgress", {
    value: new Status(2)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Status} Warning
 * @memberOf aws-greengrass-core-sdk.StreamManager.Status#
 * @readonly
 */
Object.defineProperty(Status, "Warning", {
    value: new Status(3)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Status} Canceled
 * @memberOf aws-greengrass-core-sdk.StreamManager.Status#
 * @readonly
 */
Object.defineProperty(Status, "Canceled", {
    value: new Status(4)
});

/**
 * Defines the verbosity of status messages in a status-stream.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class StatusLevel {

    #value = null;
    constructor(value = null) {
        if (!Object.values(StatusLevel.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return StatusLevel[StatusLevel.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(StatusLevel, "options", {
    value: {
        ERROR: 0,
        WARN: 1,
        INFO: 2,
        DEBUG: 3,
        TRACE: 4,
    }
});
Object.defineProperty(StatusLevel, "optionsFlipped", {
    value: {
        0: "ERROR",
        1: "WARN",
        2: "INFO",
        3: "DEBUG",
        4: "TRACE",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.StatusLevel} ERROR
 * @memberOf aws-greengrass-core-sdk.StreamManager.StatusLevel#
 * @readonly
 */
Object.defineProperty(StatusLevel, "ERROR", {
    value: new StatusLevel(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.StatusLevel} WARN
 * @memberOf aws-greengrass-core-sdk.StreamManager.StatusLevel#
 * @readonly
 */
Object.defineProperty(StatusLevel, "WARN", {
    value: new StatusLevel(1)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.StatusLevel} INFO
 * @memberOf aws-greengrass-core-sdk.StreamManager.StatusLevel#
 * @readonly
 */
Object.defineProperty(StatusLevel, "INFO", {
    value: new StatusLevel(2)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.StatusLevel} DEBUG
 * @memberOf aws-greengrass-core-sdk.StreamManager.StatusLevel#
 * @readonly
 */
Object.defineProperty(StatusLevel, "DEBUG", {
    value: new StatusLevel(3)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.StatusLevel} TRACE
 * @memberOf aws-greengrass-core-sdk.StreamManager.StatusLevel#
 * @readonly
 */
Object.defineProperty(StatusLevel, "TRACE", {
    value: new StatusLevel(4)
});

/**
 * S3 Task definition containing all the information necessary to export the data to S3. This will contain the S3 bucket and key as well as the file's URL where the data is stored.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class S3ExportTaskDefinition {
    #__inputUrl = null;
    #__bucket = null;
    #__key = null;
    #__userMetadata = null;

    /**
     * @param inputUrl {String} The URL of the file that contains the data to upload. The file should be local on the disk.
     * @param bucket {String} The name of the S3 bucket that this file should be uploaded to.
     * @param key {String} The key for the S3 object that this file should be uploaded to.
       The string can have placeholder expressions which are resolved at upload time. Valid expressions are strings that are valid Java DateTimeFormatter strings. See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
       Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @param userMetadata {Object} User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix. Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings. Reserved key names start with "$aws-gg-" prefix.
     */
    constructor(
        inputUrl = null,
        bucket = null,
        key = null,
        userMetadata = null,
    ) {
        if (inputUrl !== null && !(typeof inputUrl === "string")) {
            throw new Error("inputUrl must be String");
        }

        if (bucket !== null && !(typeof bucket === "string")) {
            throw new Error("bucket must be String");
        }

        if (key !== null && !(typeof key === "string")) {
            throw new Error("key must be String");
        }

        if (userMetadata !== null && !(userMetadata instanceof Object)) {
            throw new Error("userMetadata must be Object");
        }

        this.#__inputUrl = inputUrl;
        this.#__bucket = bucket;
        this.#__key = key;
        this.#__userMetadata = userMetadata;
    }

    /**
     * The URL of the file that contains the data to upload. The file should be local on the disk.
     * @returns {String}
     
     */
    get inputUrl() {
        return this.#__inputUrl;
    }
    /**
     * @param value {String} The URL of the file that contains the data to upload. The file should be local on the disk.
     */
    set inputUrl(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("inputUrl must be String");
        }

        this.#__inputUrl = value;
    }
    /**
     * @param value {String} The URL of the file that contains the data to upload. The file should be local on the disk.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition}
     */
    withInputUrl(value) {
        this.inputUrl = value;
        return this;
    }

    /**
     * The name of the S3 bucket that this file should be uploaded to.
     * @returns {String}
     
     */
    get bucket() {
        return this.#__bucket;
    }
    /**
     * @param value {String} The name of the S3 bucket that this file should be uploaded to.
     */
    set bucket(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("bucket must be String");
        }

        this.#__bucket = value;
    }
    /**
     * @param value {String} The name of the S3 bucket that this file should be uploaded to.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition}
     */
    withBucket(value) {
        this.bucket = value;
        return this;
    }

    /**
     * The key for the S3 object that this file should be uploaded to.
       The string can have placeholder expressions which are resolved at upload time. Valid expressions are strings that are valid Java DateTimeFormatter strings. See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
       Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @returns {String}

     */
    get key() {
        return this.#__key;
    }
    /**
     * @param value {String} The key for the S3 object that this file should be uploaded to.
       The string can have placeholder expressions which are resolved at upload time. Valid expressions are strings that are valid Java DateTimeFormatter strings. See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
       Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     */
    set key(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("key must be String");
        }

        this.#__key = value;
    }
    /**
     * @param value {String} The key for the S3 object that this file should be uploaded to.
       The string can have placeholder expressions which are resolved at upload time. Valid expressions are strings that are valid Java DateTimeFormatter strings. See https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
       Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition}
     */
    withKey(value) {
        this.key = value;
        return this;
    }

    /**
     * User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix. Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings. Reserved key names start with "$aws-gg-" prefix.
     * @returns {Object}
     
     */
    get userMetadata() {
        return this.#__userMetadata;
    }
    /**
     * @param value {Object} User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix. Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings. Reserved key names start with "$aws-gg-" prefix.
     */
    set userMetadata(value) {
        if (value !== null && !(value instanceof Object)) {
            throw new Error("userMetadata must be Object");
        }

        this.#__userMetadata = value;
    }
    /**
     * @param value {Object} User metadata. For key of a user metadata, callers should not include the internal "x-amz-meta-" prefix. Keys are case insensitive and will appear as lowercase strings on S3, even if they were originally specified with uppercase strings. Reserved key names start with "$aws-gg-" prefix.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition}
     */
    withUserMetadata(value) {
        this.userMetadata = value;
        return this;
    }

    static fromMap(d) {
        const ret = new S3ExportTaskDefinition();
        if ("inputUrl" in d) {
            ret.inputUrl = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["inputUrl"]) : d["inputUrl"];
        }
        if ("bucket" in d) {
            ret.bucket = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["bucket"]) : d["bucket"];
        }
        if ("key" in d) {
            ret.key = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["key"]) : d["key"];
        }
        if ("userMetadata" in d) {
            ret.userMetadata = Object.prototype.hasOwnProperty.call(Object, "fromMap") ? Object.fromMap(d["userMetadata"]) : d["userMetadata"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.inputUrl !== null) {
            d["inputUrl"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.inputUrl), "asMap") ? this.inputUrl.asMap() : this.inputUrl;
        }
        if (this.bucket !== null) {
            d["bucket"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.bucket), "asMap") ? this.bucket.asMap() : this.bucket;
        }
        if (this.key !== null) {
            d["key"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.key), "asMap") ? this.key.asMap() : this.key;
        }
        if (this.userMetadata !== null) {
            d["userMetadata"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.userMetadata), "asMap") ? this.userMetadata.asMap() : this.userMetadata;
        }
        return d;
    }
};

Object.defineProperty(S3ExportTaskDefinition, "typesMap", {
    value: {
        inputUrl: {
            'type': String,
            'subtype': null
        },
        bucket: {
            'type': String,
            'subtype': null
        },
        key: {
            'type': String,
            'subtype': null
        },
        userMetadata: {
            'type': Object,
            'subtype': null
        },
    }
});
Object.defineProperty(S3ExportTaskDefinition, "formatsMap", {
    value: {}
});
Object.defineProperty(S3ExportTaskDefinition, "validationsMap", {
    value: {
        'inputUrl': {
            'required': true,
        },
        'bucket': {
            'required': true,
            'minLength': 3,
            'maxLength': 63,
            'pattern': /(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/,
        },
        'key': {
            'required': true,
            'minLength': 1,
            'maxLength': 1024,
            'pattern': /^([^\\\{ \}%\`\[\]\"\'\>\<\~\#\^\?\|]|!\{[a-zA-Z]+:[a-zA-Z\/]+\})*$/,
        },
        'userMetadata': {
            'required': false,
        },
    }
});

/**
 * Context associated with a status message. Describes which stream, export config, message, the status is associated with.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class StatusContext {
    #__s3ExportTaskDefinition = null;
    #__exportIdentifier = null;
    #__streamName = null;
    #__sequenceNumber = null;

    /**
     * @param s3ExportTaskDefinition {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition} The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @param exportIdentifier {String} The export identifier the status is associated with.
     * @param streamName {String} The name of the stream the status is associated with.
     * @param sequenceNumber {Number} The sequence number of the message the status is associated with.
     */
    constructor(
        s3ExportTaskDefinition = null,
        exportIdentifier = null,
        streamName = null,
        sequenceNumber = null,
    ) {
        if (s3ExportTaskDefinition !== null && !(s3ExportTaskDefinition instanceof S3ExportTaskDefinition)) {
            throw new Error("s3ExportTaskDefinition must be S3ExportTaskDefinition");
        }

        if (exportIdentifier !== null && !(typeof exportIdentifier === "string")) {
            throw new Error("exportIdentifier must be String");
        }

        if (streamName !== null && !(typeof streamName === "string")) {
            throw new Error("streamName must be String");
        }

        if (sequenceNumber !== null && !(typeof sequenceNumber === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        this.#__s3ExportTaskDefinition = s3ExportTaskDefinition;
        this.#__exportIdentifier = exportIdentifier;
        this.#__streamName = streamName;
        this.#__sequenceNumber = sequenceNumber;
    }

    /**
     * The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition}
     
     */
    get s3ExportTaskDefinition() {
        return this.#__s3ExportTaskDefinition;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition} The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     */
    set s3ExportTaskDefinition(value) {
        if (value !== null && !(value instanceof S3ExportTaskDefinition)) {
            throw new Error("s3ExportTaskDefinition must be S3ExportTaskDefinition");
        }

        this.#__s3ExportTaskDefinition = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.S3ExportTaskDefinition} The task definition of an S3 upload task if the status is associated with it, ie, if the eventType = S3Task.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusContext}
     */
    withS3ExportTaskDefinition(value) {
        this.s3ExportTaskDefinition = value;
        return this;
    }

    /**
     * The export identifier the status is associated with.
     * @returns {String}
     
     */
    get exportIdentifier() {
        return this.#__exportIdentifier;
    }
    /**
     * @param value {String} The export identifier the status is associated with.
     */
    set exportIdentifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("exportIdentifier must be String");
        }

        this.#__exportIdentifier = value;
    }
    /**
     * @param value {String} The export identifier the status is associated with.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusContext}
     */
    withExportIdentifier(value) {
        this.exportIdentifier = value;
        return this;
    }

    /**
     * The name of the stream the status is associated with.
     * @returns {String}
     
     */
    get streamName() {
        return this.#__streamName;
    }
    /**
     * @param value {String} The name of the stream the status is associated with.
     */
    set streamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("streamName must be String");
        }

        this.#__streamName = value;
    }
    /**
     * @param value {String} The name of the stream the status is associated with.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusContext}
     */
    withStreamName(value) {
        this.streamName = value;
        return this;
    }

    /**
     * The sequence number of the message the status is associated with.
     * @returns {Number}
     
     */
    get sequenceNumber() {
        return this.#__sequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of the message the status is associated with.
     */
    set sequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("sequenceNumber must be Number");
        }

        this.#__sequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of the message the status is associated with.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusContext}
     */
    withSequenceNumber(value) {
        this.sequenceNumber = value;
        return this;
    }

    static fromMap(d) {
        const ret = new StatusContext();
        if ("s3ExportTaskDefinition" in d) {
            ret.s3ExportTaskDefinition = Object.prototype.hasOwnProperty.call(S3ExportTaskDefinition, "fromMap") ? S3ExportTaskDefinition.fromMap(d["s3ExportTaskDefinition"]) : d["s3ExportTaskDefinition"];
        }
        if ("exportIdentifier" in d) {
            ret.exportIdentifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["exportIdentifier"]) : d["exportIdentifier"];
        }
        if ("streamName" in d) {
            ret.streamName = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["streamName"]) : d["streamName"];
        }
        if ("sequenceNumber" in d) {
            ret.sequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["sequenceNumber"]) : d["sequenceNumber"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.s3ExportTaskDefinition !== null) {
            d["s3ExportTaskDefinition"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.s3ExportTaskDefinition), "asMap") ? this.s3ExportTaskDefinition.asMap() : this.s3ExportTaskDefinition;
        }
        if (this.exportIdentifier !== null) {
            d["exportIdentifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportIdentifier), "asMap") ? this.exportIdentifier.asMap() : this.exportIdentifier;
        }
        if (this.streamName !== null) {
            d["streamName"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.streamName), "asMap") ? this.streamName.asMap() : this.streamName;
        }
        if (this.sequenceNumber !== null) {
            d["sequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.sequenceNumber), "asMap") ? this.sequenceNumber.asMap() : this.sequenceNumber;
        }
        return d;
    }
};

Object.defineProperty(StatusContext, "typesMap", {
    value: {
        s3ExportTaskDefinition: {
            'type': S3ExportTaskDefinition,
            'subtype': null
        },
        exportIdentifier: {
            'type': String,
            'subtype': null
        },
        streamName: {
            'type': String,
            'subtype': null
        },
        sequenceNumber: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(StatusContext, "formatsMap", {
    value: {}
});
Object.defineProperty(StatusContext, "validationsMap", {
    value: {
        's3ExportTaskDefinition': {
            'required': false,
        },
        'exportIdentifier': {
            'required': false,
        },
        'streamName': {
            'required': false,
        },
        'sequenceNumber': {
            'required': false,
        },
    }
});

/**
 * Status object appended to a status-stream.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class StatusMessage {
    #__eventType = null;
    #__statusLevel = null;
    #__status = null;
    #__statusContext = null;
    #__message = null;
    #__timestampEpochMs = null;

    /**
     * @param eventType {aws-greengrass-core-sdk.StreamManager.EventType} 
     * @param statusLevel {aws-greengrass-core-sdk.StreamManager.StatusLevel} 
     * @param status {aws-greengrass-core-sdk.StreamManager.Status} 
     * @param statusContext {aws-greengrass-core-sdk.StreamManager.StatusContext} 
     * @param message {String} String describing the status message.
     * @param timestampEpochMs {Number} The time this status was added to the status-stream (in milliseconds since epoch).
     */
    constructor(
        eventType = null,
        statusLevel = null,
        status = null,
        statusContext = null,
        message = null,
        timestampEpochMs = null,
    ) {
        if (eventType !== null && !(eventType instanceof EventType)) {
            throw new Error("eventType must be EventType");
        }

        if (statusLevel !== null && !(statusLevel instanceof StatusLevel)) {
            throw new Error("statusLevel must be StatusLevel");
        }

        if (status !== null && !(status instanceof Status)) {
            throw new Error("status must be Status");
        }

        if (statusContext !== null && !(statusContext instanceof StatusContext)) {
            throw new Error("statusContext must be StatusContext");
        }

        if (message !== null && !(typeof message === "string")) {
            throw new Error("message must be String");
        }

        if (timestampEpochMs !== null && !(typeof timestampEpochMs === "number")) {
            throw new Error("timestampEpochMs must be Number");
        }

        this.#__eventType = eventType;
        this.#__statusLevel = statusLevel;
        this.#__status = status;
        this.#__statusContext = statusContext;
        this.#__message = message;
        this.#__timestampEpochMs = timestampEpochMs;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.EventType}
     
     */
    get eventType() {
        return this.#__eventType;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.EventType} 
     */
    set eventType(value) {
        if (value !== null && !(value instanceof EventType)) {
            throw new Error("eventType must be EventType");
        }

        this.#__eventType = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.EventType} 
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withEventType(value) {
        this.eventType = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusLevel}
     
     */
    get statusLevel() {
        return this.#__statusLevel;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusLevel} 
     */
    set statusLevel(value) {
        if (value !== null && !(value instanceof StatusLevel)) {
            throw new Error("statusLevel must be StatusLevel");
        }

        this.#__statusLevel = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusLevel} 
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withStatusLevel(value) {
        this.statusLevel = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.Status}
     
     */
    get status() {
        return this.#__status;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Status} 
     */
    set status(value) {
        if (value !== null && !(value instanceof Status)) {
            throw new Error("status must be Status");
        }

        this.#__status = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Status} 
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withStatus(value) {
        this.status = value;
        return this;
    }

    /**
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusContext}
     
     */
    get statusContext() {
        return this.#__statusContext;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusContext} 
     */
    set statusContext(value) {
        if (value !== null && !(value instanceof StatusContext)) {
            throw new Error("statusContext must be StatusContext");
        }

        this.#__statusContext = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusContext} 
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withStatusContext(value) {
        this.statusContext = value;
        return this;
    }

    /**
     * String describing the status message.
     * @returns {String}
     
     */
    get message() {
        return this.#__message;
    }
    /**
     * @param value {String} String describing the status message.
     */
    set message(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("message must be String");
        }

        this.#__message = value;
    }
    /**
     * @param value {String} String describing the status message.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withMessage(value) {
        this.message = value;
        return this;
    }

    /**
     * The time this status was added to the status-stream (in milliseconds since epoch).
     * @returns {Number}
     
     */
    get timestampEpochMs() {
        return this.#__timestampEpochMs;
    }
    /**
     * @param value {Number} The time this status was added to the status-stream (in milliseconds since epoch).
     */
    set timestampEpochMs(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("timestampEpochMs must be Number");
        }

        this.#__timestampEpochMs = value;
    }
    /**
     * @param value {Number} The time this status was added to the status-stream (in milliseconds since epoch).
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusMessage}
     */
    withTimestampEpochMs(value) {
        this.timestampEpochMs = value;
        return this;
    }

    static fromMap(d) {
        const ret = new StatusMessage();
        if ("eventType" in d) {
            ret.eventType = Object.prototype.hasOwnProperty.call(EventType, "fromMap") ? EventType.fromMap(d["eventType"]) : d["eventType"];
        }
        if ("statusLevel" in d) {
            ret.statusLevel = Object.prototype.hasOwnProperty.call(StatusLevel, "fromMap") ? StatusLevel.fromMap(d["statusLevel"]) : d["statusLevel"];
        }
        if ("status" in d) {
            ret.status = Object.prototype.hasOwnProperty.call(Status, "fromMap") ? Status.fromMap(d["status"]) : d["status"];
        }
        if ("statusContext" in d) {
            ret.statusContext = Object.prototype.hasOwnProperty.call(StatusContext, "fromMap") ? StatusContext.fromMap(d["statusContext"]) : d["statusContext"];
        }
        if ("message" in d) {
            ret.message = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["message"]) : d["message"];
        }
        if ("timestampEpochMs" in d) {
            ret.timestampEpochMs = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["timestampEpochMs"]) : d["timestampEpochMs"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.eventType !== null) {
            d["eventType"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.eventType), "asMap") ? this.eventType.asMap() : this.eventType;
        }
        if (this.statusLevel !== null) {
            d["statusLevel"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.statusLevel), "asMap") ? this.statusLevel.asMap() : this.statusLevel;
        }
        if (this.status !== null) {
            d["status"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.status), "asMap") ? this.status.asMap() : this.status;
        }
        if (this.statusContext !== null) {
            d["statusContext"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.statusContext), "asMap") ? this.statusContext.asMap() : this.statusContext;
        }
        if (this.message !== null) {
            d["message"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.message), "asMap") ? this.message.asMap() : this.message;
        }
        if (this.timestampEpochMs !== null) {
            d["timestampEpochMs"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.timestampEpochMs), "asMap") ? this.timestampEpochMs.asMap() : this.timestampEpochMs;
        }
        return d;
    }
};

Object.defineProperty(StatusMessage, "typesMap", {
    value: {
        eventType: {
            'type': EventType,
            'subtype': null
        },
        statusLevel: {
            'type': StatusLevel,
            'subtype': null
        },
        status: {
            'type': Status,
            'subtype': null
        },
        statusContext: {
            'type': StatusContext,
            'subtype': null
        },
        message: {
            'type': String,
            'subtype': null
        },
        timestampEpochMs: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(StatusMessage, "formatsMap", {
    value: {}
});
Object.defineProperty(StatusMessage, "validationsMap", {
    value: {
        'eventType': {
            'required': true,
        },
        'statusLevel': {
            'required': false,
        },
        'status': {
            'required': true,
        },
        'statusContext': {
            'required': false,
        },
        'message': {
            'required': false,
        },
        'timestampEpochMs': {
            'required': false,
        },
    }
});

/**
 * (Internal Only) TraceableRequest that contains only requestId.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class TraceableRequest {
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
     * @returns {aws-greengrass-core-sdk.StreamManager.TraceableRequest}
     */
    withRequestId(value) {
        this.requestId = value;
        return this;
    }

    static fromMap(d) {
        const ret = new TraceableRequest();
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

Object.defineProperty(TraceableRequest, "typesMap", {
    value: {
        requestId: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(TraceableRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(TraceableRequest, "validationsMap", {
    value: {
        'requestId': {
            'required': true,
            'minLength': 1,
            'pattern': /^[\w ,.\-_]*$/,
        },
    }
});

/**
 * (Internal Only) Response for UnknownOperationError.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class UnknownOperationError {
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UnknownOperationError}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UnknownOperationError}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UnknownOperationError}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    static fromMap(d) {
        const ret = new UnknownOperationError();
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

Object.defineProperty(UnknownOperationError, "typesMap", {
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
Object.defineProperty(UnknownOperationError, "formatsMap", {
    value: {}
});
Object.defineProperty(UnknownOperationError, "validationsMap", {
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
 * Stream persistence. If set to File, the file system will be used to persist messages long-term and is resilient to restarts.
   Memory should be used when performance matters more than durability as it only stores the stream in memory and never writes to the disk.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Persistence {

    #value = null;
    constructor(value = null) {
        if (!Object.values(Persistence.options).includes(value)) {
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
 * ExportFormat is used to define how messages are batched and formatted in the export payload.
   RAW_NOT_BATCHED: Each message in a batch will be sent as an individual HTTP POST with the payload as the body (even if batchSize is set).
   JSON_BATCHED: Each batch of messages will be sent as a JSON list of Message objects as the body.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ExportFormat {

    #value = null;
    constructor(value = null) {
        if (!Object.values(ExportFormat.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return ExportFormat[ExportFormat.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(ExportFormat, "options", {
    value: {
        RAW_NOT_BATCHED: 0,
        JSON_BATCHED: 1,
    }
});
Object.defineProperty(ExportFormat, "optionsFlipped", {
    value: {
        0: "RAW_NOT_BATCHED",
        1: "JSON_BATCHED",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.ExportFormat} RAW_NOT_BATCHED
 * @memberOf aws-greengrass-core-sdk.StreamManager.ExportFormat#
 * @readonly
 */
Object.defineProperty(ExportFormat, "RAW_NOT_BATCHED", {
    value: new ExportFormat(0)
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.ExportFormat} JSON_BATCHED
 * @memberOf aws-greengrass-core-sdk.StreamManager.ExportFormat#
 * @readonly
 */
Object.defineProperty(ExportFormat, "JSON_BATCHED", {
    value: new ExportFormat(1)
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
    #__startSequenceNumber = null;
    #__disabled = null;
    #__exportFormat = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param uri {String} URL for HTTP endpoint which should receive the POST requests for export.
     * @param batchSize {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled {Boolean} Enable or disable this export. Default is false.
     * @param exportFormat {aws-greengrass-core-sdk.StreamManager.ExportFormat} Defines how messages are batched and formatted in the export payload.
     */
    constructor(
        identifier = null,
        uri = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
        startSequenceNumber = null,
        disabled = null,
        exportFormat = null,
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

        if (startSequenceNumber !== null && !(typeof startSequenceNumber === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        if (disabled !== null && !(typeof disabled === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        if (exportFormat !== null && !(exportFormat instanceof ExportFormat)) {
            throw new Error("exportFormat must be ExportFormat");
        }

        this.#__identifier = identifier;
        this.#__uri = uri;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
        this.#__startSequenceNumber = startSequenceNumber;
        this.#__disabled = disabled;
        this.#__exportFormat = exportFormat;
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
     * The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 500.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
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
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
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

    /**
     * The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {Number}
     
     */
    get startSequenceNumber() {
        return this.#__startSequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    set startSequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        this.#__startSequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withStartSequenceNumber(value) {
        this.startSequenceNumber = value;
        return this;
    }

    /**
     * Enable or disable this export. Default is false.
     * @returns {Boolean}
     
     */
    get disabled() {
        return this.#__disabled;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     */
    set disabled(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__disabled = value;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withDisabled(value) {
        this.disabled = value;
        return this;
    }

    /**
     * Defines how messages are batched and formatted in the export payload.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportFormat}
     
     */
    get exportFormat() {
        return this.#__exportFormat;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ExportFormat} Defines how messages are batched and formatted in the export payload.
     */
    set exportFormat(value) {
        if (value !== null && !(value instanceof ExportFormat)) {
            throw new Error("exportFormat must be ExportFormat");
        }

        this.#__exportFormat = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.ExportFormat} Defines how messages are batched and formatted in the export payload.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig}
     */
    withExportFormat(value) {
        this.exportFormat = value;
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
        if ("startSequenceNumber" in d) {
            ret.startSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["startSequenceNumber"]) : d["startSequenceNumber"];
        }
        if ("disabled" in d) {
            ret.disabled = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["disabled"]) : d["disabled"];
        }
        if ("exportFormat" in d) {
            ret.exportFormat = Object.prototype.hasOwnProperty.call(ExportFormat, "fromMap") ? ExportFormat.fromMap(d["exportFormat"]) : d["exportFormat"];
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
        if (this.startSequenceNumber !== null) {
            d["startSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.startSequenceNumber), "asMap") ? this.startSequenceNumber.asMap() : this.startSequenceNumber;
        }
        if (this.disabled !== null) {
            d["disabled"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.disabled), "asMap") ? this.disabled.asMap() : this.disabled;
        }
        if (this.exportFormat !== null) {
            d["exportFormat"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportFormat), "asMap") ? this.exportFormat.asMap() : this.exportFormat;
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
        startSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        disabled: {
            'type': Boolean,
            'subtype': null
        },
        exportFormat: {
            'type': ExportFormat,
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
        'startSequenceNumber': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 0,
        },
        'disabled': {
            'required': false,
        },
        'exportFormat': {
            'required': false,
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
    #__startSequenceNumber = null;
    #__disabled = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param iotChannel {String} The name of the IoT Analytics Channel that this exporter should upload to.
     * @param iotMsgIdPrefix {String} A string prefixed to each unique message id. After this prefix, StreamManager may append more data to make the message ID unique.
       This prefix must be less than 32 characters.
     * @param batchSize {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 100.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled {Boolean} Enable or disable this export. Default is false.
     */
    constructor(
        identifier = null,
        iotChannel = null,
        iotMsgIdPrefix = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
        startSequenceNumber = null,
        disabled = null,
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

        if (startSequenceNumber !== null && !(typeof startSequenceNumber === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        if (disabled !== null && !(typeof disabled === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__identifier = identifier;
        this.#__iotChannel = iotChannel;
        this.#__iotMsgIdPrefix = iotMsgIdPrefix;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
        this.#__startSequenceNumber = startSequenceNumber;
        this.#__disabled = disabled;
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
     * The name of the IoT Analytics Channel that this exporter should upload to.
     * @returns {String}
     
     */
    get iotChannel() {
        return this.#__iotChannel;
    }
    /**
     * @param value {String} The name of the IoT Analytics Channel that this exporter should upload to.
     */
    set iotChannel(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("iotChannel must be String");
        }

        this.#__iotChannel = value;
    }
    /**
     * @param value {String} The name of the IoT Analytics Channel that this exporter should upload to.
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
     * The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 100.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 100.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 100.
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
     * @param value {Number} The maximum size of a batch to send to IoT Analytics. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 100.
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

    /**
     * The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {Number}
     
     */
    get startSequenceNumber() {
        return this.#__startSequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    set startSequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        this.#__startSequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withStartSequenceNumber(value) {
        this.startSequenceNumber = value;
        return this;
    }

    /**
     * Enable or disable this export. Default is false.
     * @returns {Boolean}
     
     */
    get disabled() {
        return this.#__disabled;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     */
    set disabled(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__disabled = value;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig}
     */
    withDisabled(value) {
        this.disabled = value;
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
        if ("startSequenceNumber" in d) {
            ret.startSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["startSequenceNumber"]) : d["startSequenceNumber"];
        }
        if ("disabled" in d) {
            ret.disabled = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["disabled"]) : d["disabled"];
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
        if (this.startSequenceNumber !== null) {
            d["startSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.startSequenceNumber), "asMap") ? this.startSequenceNumber.asMap() : this.startSequenceNumber;
        }
        if (this.disabled !== null) {
            d["disabled"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.disabled), "asMap") ? this.disabled.asMap() : this.disabled;
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
        startSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        disabled: {
            'type': Boolean,
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
        'startSequenceNumber': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 0,
        },
        'disabled': {
            'required': false,
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
    #__startSequenceNumber = null;
    #__disabled = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param kinesisStreamName {String} The name of the Kinesis data stream that this exporter should upload to.
     * @param batchSize {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled {Boolean} Enable or disable this export. Default is false.
     */
    constructor(
        identifier = null,
        kinesisStreamName = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
        startSequenceNumber = null,
        disabled = null,
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

        if (startSequenceNumber !== null && !(typeof startSequenceNumber === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        if (disabled !== null && !(typeof disabled === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__identifier = identifier;
        this.#__kinesisStreamName = kinesisStreamName;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
        this.#__startSequenceNumber = startSequenceNumber;
        this.#__disabled = disabled;
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
     * The name of the Kinesis data stream that this exporter should upload to.
     * @returns {String}
     
     */
    get kinesisStreamName() {
        return this.#__kinesisStreamName;
    }
    /**
     * @param value {String} The name of the Kinesis data stream that this exporter should upload to.
     */
    set kinesisStreamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("kinesisStreamName must be String");
        }

        this.#__kinesisStreamName = value;
    }
    /**
     * @param value {String} The name of the Kinesis data stream that this exporter should upload to.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withKinesisStreamName(value) {
        this.kinesisStreamName = value;
        return this;
    }

    /**
     * The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The batch size must be between 1 and 500.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
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
     * @param value {Number} The maximum size of a batch to send to Kinesis. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 500.
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

    /**
     * The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {Number}
     
     */
    get startSequenceNumber() {
        return this.#__startSequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    set startSequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        this.#__startSequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withStartSequenceNumber(value) {
        this.startSequenceNumber = value;
        return this;
    }

    /**
     * Enable or disable this export. Default is false.
     * @returns {Boolean}
     
     */
    get disabled() {
        return this.#__disabled;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     */
    set disabled(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__disabled = value;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig}
     */
    withDisabled(value) {
        this.disabled = value;
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
        if ("startSequenceNumber" in d) {
            ret.startSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["startSequenceNumber"]) : d["startSequenceNumber"];
        }
        if ("disabled" in d) {
            ret.disabled = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["disabled"]) : d["disabled"];
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
        if (this.startSequenceNumber !== null) {
            d["startSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.startSequenceNumber), "asMap") ? this.startSequenceNumber.asMap() : this.startSequenceNumber;
        }
        if (this.disabled !== null) {
            d["disabled"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.disabled), "asMap") ? this.disabled.asMap() : this.disabled;
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
        startSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        disabled: {
            'type': Boolean,
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
        'startSequenceNumber': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 0,
        },
        'disabled': {
            'required': false,
        },
    }
});

/**
 * Configuration object for IotSiteWise data streams export destination. Minimum version requirements: StreamManager server version 1.1 (or AWS IoT Greengrass Core 1.11.0)
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class IoTSiteWiseConfig {
    #__identifier = null;
    #__batchSize = null;
    #__batchIntervalMillis = null;
    #__priority = null;
    #__startSequenceNumber = null;
    #__disabled = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload stream.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param batchSize {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 10.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 10.
     * @param batchIntervalMillis {Number} The time in milliseconds between the earliest un-uploaded message and the current time. If this time is exceeded, messages will be uploaded in the next batch. If unspecified messages will be eligible for upload immediately.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum value is 60000 milliseconds and the maximum is 9223372036854 milliseconds.
     * @param priority {Number} Priority for this upload stream. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param startSequenceNumber {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @param disabled {Boolean} Enable or disable this export. Default is false.
     */
    constructor(
        identifier = null,
        batchSize = null,
        batchIntervalMillis = null,
        priority = null,
        startSequenceNumber = null,
        disabled = null,
    ) {
        if (identifier !== null && !(typeof identifier === "string")) {
            throw new Error("identifier must be String");
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

        if (startSequenceNumber !== null && !(typeof startSequenceNumber === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        if (disabled !== null && !(typeof disabled === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__identifier = identifier;
        this.#__batchSize = batchSize;
        this.#__batchIntervalMillis = batchIntervalMillis;
        this.#__priority = priority;
        this.#__startSequenceNumber = startSequenceNumber;
        this.#__disabled = disabled;
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
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
     */
    withIdentifier(value) {
        this.identifier = value;
        return this;
    }

    /**
     * The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 10.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 10.
     * @returns {Number}

     */
    get batchSize() {
        return this.#__batchSize;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 10.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 10.
     */
    set batchSize(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("batchSize must be Number");
        }

        this.#__batchSize = value;
    }
    /**
     * @param value {Number} The maximum size of a batch to send to the destination. Messages will be queued until the batch size is reached, after which they will then be uploaded. If unspecified the default will be 10.
       If both batchSize and batchIntervalMillis are specified, then messages will be eligible for upload when either condition is met.
       The minimum batch size is 1 and the maximum is 10.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
     */
    withPriority(value) {
        this.priority = value;
        return this;
    }

    /**
     * The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {Number}
     
     */
    get startSequenceNumber() {
        return this.#__startSequenceNumber;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     */
    set startSequenceNumber(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("startSequenceNumber must be Number");
        }

        this.#__startSequenceNumber = value;
    }
    /**
     * @param value {Number} The sequence number of the message to use as the starting message in the export. Default is 0. The sequence number provided should be less than the newest sequence number in the stream, i.e., sequence number of the last messaged appended. To find the newest sequence number, describe the stream and then check the storage status of the returned MessageStreamInfo object.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
     */
    withStartSequenceNumber(value) {
        this.startSequenceNumber = value;
        return this;
    }

    /**
     * Enable or disable this export. Default is false.
     * @returns {Boolean}
     
     */
    get disabled() {
        return this.#__disabled;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     */
    set disabled(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__disabled = value;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig}
     */
    withDisabled(value) {
        this.disabled = value;
        return this;
    }

    static fromMap(d) {
        const ret = new IoTSiteWiseConfig();
        if ("identifier" in d) {
            ret.identifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["identifier"]) : d["identifier"];
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
        if ("startSequenceNumber" in d) {
            ret.startSequenceNumber = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["startSequenceNumber"]) : d["startSequenceNumber"];
        }
        if ("disabled" in d) {
            ret.disabled = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["disabled"]) : d["disabled"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.identifier !== null) {
            d["identifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.identifier), "asMap") ? this.identifier.asMap() : this.identifier;
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
        if (this.startSequenceNumber !== null) {
            d["startSequenceNumber"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.startSequenceNumber), "asMap") ? this.startSequenceNumber.asMap() : this.startSequenceNumber;
        }
        if (this.disabled !== null) {
            d["disabled"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.disabled), "asMap") ? this.disabled.asMap() : this.disabled;
        }
        return d;
    }
};

Object.defineProperty(IoTSiteWiseConfig, "typesMap", {
    value: {
        identifier: {
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
        startSequenceNumber: {
            'type': Number,
            'subtype': null
        },
        disabled: {
            'type': Boolean,
            'subtype': null
        },
    }
});
Object.defineProperty(IoTSiteWiseConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(IoTSiteWiseConfig, "validationsMap", {
    value: {
        'identifier': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'batchSize': {
            'required': false,
            'maximum': 10,
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
        'startSequenceNumber': {
            'required': false,
            'maximum': 9223372036854775807,
            'minimum': 0,
        },
        'disabled': {
            'required': false,
        },
    }
});

/**
 * Configuration for status in a status-stream.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class StatusConfig {
    #__statusLevel = null;
    #__statusStreamName = null;

    /**
     * @param statusLevel {aws-greengrass-core-sdk.StreamManager.StatusLevel} Defines the verbosity of status messages in a status-stream.
     * @param statusStreamName {String} The name of the stream to which status messages are appended.
       The status-stream should be created before associating it with another stream.
     */
    constructor(
        statusLevel = null,
        statusStreamName = null,
    ) {
        if (statusLevel !== null && !(statusLevel instanceof StatusLevel)) {
            throw new Error("statusLevel must be StatusLevel");
        }

        if (statusStreamName !== null && !(typeof statusStreamName === "string")) {
            throw new Error("statusStreamName must be String");
        }

        this.#__statusLevel = statusLevel;
        this.#__statusStreamName = statusStreamName;
    }

    /**
     * Defines the verbosity of status messages in a status-stream.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusLevel}
     
     */
    get statusLevel() {
        return this.#__statusLevel;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusLevel} Defines the verbosity of status messages in a status-stream.
     */
    set statusLevel(value) {
        if (value !== null && !(value instanceof StatusLevel)) {
            throw new Error("statusLevel must be StatusLevel");
        }

        this.#__statusLevel = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusLevel} Defines the verbosity of status messages in a status-stream.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusConfig}
     */
    withStatusLevel(value) {
        this.statusLevel = value;
        return this;
    }

    /**
     * The name of the stream to which status messages are appended.
       The status-stream should be created before associating it with another stream.
     * @returns {String}

     */
    get statusStreamName() {
        return this.#__statusStreamName;
    }
    /**
     * @param value {String} The name of the stream to which status messages are appended.
       The status-stream should be created before associating it with another stream.
     */
    set statusStreamName(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("statusStreamName must be String");
        }

        this.#__statusStreamName = value;
    }
    /**
     * @param value {String} The name of the stream to which status messages are appended.
       The status-stream should be created before associating it with another stream.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusConfig}
     */
    withStatusStreamName(value) {
        this.statusStreamName = value;
        return this;
    }

    static fromMap(d) {
        const ret = new StatusConfig();
        if ("statusLevel" in d) {
            ret.statusLevel = Object.prototype.hasOwnProperty.call(StatusLevel, "fromMap") ? StatusLevel.fromMap(d["statusLevel"]) : d["statusLevel"];
        }
        if ("statusStreamName" in d) {
            ret.statusStreamName = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["statusStreamName"]) : d["statusStreamName"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.statusLevel !== null) {
            d["statusLevel"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.statusLevel), "asMap") ? this.statusLevel.asMap() : this.statusLevel;
        }
        if (this.statusStreamName !== null) {
            d["statusStreamName"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.statusStreamName), "asMap") ? this.statusStreamName.asMap() : this.statusStreamName;
        }
        return d;
    }
};

Object.defineProperty(StatusConfig, "typesMap", {
    value: {
        statusLevel: {
            'type': StatusLevel,
            'subtype': null
        },
        statusStreamName: {
            'type': String,
            'subtype': null
        },
    }
});
Object.defineProperty(StatusConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(StatusConfig, "validationsMap", {
    value: {
        'statusLevel': {
            'required': false,
        },
        'statusStreamName': {
            'required': false,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
    }
});

/**
 * Configuration object for S3 export tasks executor.  Minimum version requirements: StreamManager server version 1.1 (or AWS IoT Greengrass Core 1.11.0)
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class S3ExportTaskExecutorConfig {
    #__identifier = null;
    #__sizeThresholdForMultipartUploadBytes = null;
    #__priority = null;
    #__disabled = null;
    #__statusConfig = null;

    /**
     * @param identifier {String} A unique identifier to identify this individual upload task.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @param sizeThresholdForMultipartUploadBytes {Number} The size threshold in bytes for when to use multipart uploads. Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @param priority {Number} Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @param disabled {Boolean} Enable or disable this export. Default is false.
     * @param statusConfig {aws-greengrass-core-sdk.StreamManager.StatusConfig} Event status configuration that specifies the target status stream and verbosity.
     */
    constructor(
        identifier = null,
        sizeThresholdForMultipartUploadBytes = null,
        priority = null,
        disabled = null,
        statusConfig = null,
    ) {
        if (identifier !== null && !(typeof identifier === "string")) {
            throw new Error("identifier must be String");
        }

        if (sizeThresholdForMultipartUploadBytes !== null && !(typeof sizeThresholdForMultipartUploadBytes === "number")) {
            throw new Error("sizeThresholdForMultipartUploadBytes must be Number");
        }

        if (priority !== null && !(typeof priority === "number")) {
            throw new Error("priority must be Number");
        }

        if (disabled !== null && !(typeof disabled === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        if (statusConfig !== null && !(statusConfig instanceof StatusConfig)) {
            throw new Error("statusConfig must be StatusConfig");
        }

        this.#__identifier = identifier;
        this.#__sizeThresholdForMultipartUploadBytes = sizeThresholdForMultipartUploadBytes;
        this.#__priority = priority;
        this.#__disabled = disabled;
        this.#__statusConfig = statusConfig;
    }

    /**
     * A unique identifier to identify this individual upload task.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {String}

     */
    get identifier() {
        return this.#__identifier;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload task.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     */
    set identifier(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("identifier must be String");
        }

        this.#__identifier = value;
    }
    /**
     * @param value {String} A unique identifier to identify this individual upload task.
       Must be an alphanumeric string including spaces, commas, periods, hyphens, and underscores with length between 1 and 255.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig}
     */
    withIdentifier(value) {
        this.identifier = value;
        return this;
    }

    /**
     * The size threshold in bytes for when to use multipart uploads. Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @returns {Number}
     
     */
    get sizeThresholdForMultipartUploadBytes() {
        return this.#__sizeThresholdForMultipartUploadBytes;
    }
    /**
     * @param value {Number} The size threshold in bytes for when to use multipart uploads. Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     */
    set sizeThresholdForMultipartUploadBytes(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("sizeThresholdForMultipartUploadBytes must be Number");
        }

        this.#__sizeThresholdForMultipartUploadBytes = value;
    }
    /**
     * @param value {Number} The size threshold in bytes for when to use multipart uploads. Uploads over this size will automatically use a multipart upload strategy, while uploads equal or smaller than this threshold will use a single connection to upload the whole object.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig}
     */
    withSizeThresholdForMultipartUploadBytes(value) {
        this.sizeThresholdForMultipartUploadBytes = value;
        return this;
    }

    /**
     * Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {Number}
     
     */
    get priority() {
        return this.#__priority;
    }
    /**
     * @param value {Number} Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     */
    set priority(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("priority must be Number");
        }

        this.#__priority = value;
    }
    /**
     * @param value {Number} Priority for this upload task. Lower values are higher priority. If not specified it will have the lowest priority.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig}
     */
    withPriority(value) {
        this.priority = value;
        return this;
    }

    /**
     * Enable or disable this export. Default is false.
     * @returns {Boolean}
     
     */
    get disabled() {
        return this.#__disabled;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     */
    set disabled(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("disabled must be Boolean");
        }

        this.#__disabled = value;
    }
    /**
     * @param value {Boolean} Enable or disable this export. Default is false.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig}
     */
    withDisabled(value) {
        this.disabled = value;
        return this;
    }

    /**
     * Event status configuration that specifies the target status stream and verbosity.
     * @returns {aws-greengrass-core-sdk.StreamManager.StatusConfig}
     
     */
    get statusConfig() {
        return this.#__statusConfig;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusConfig} Event status configuration that specifies the target status stream and verbosity.
     */
    set statusConfig(value) {
        if (value !== null && !(value instanceof StatusConfig)) {
            throw new Error("statusConfig must be StatusConfig");
        }

        this.#__statusConfig = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.StatusConfig} Event status configuration that specifies the target status stream and verbosity.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig}
     */
    withStatusConfig(value) {
        this.statusConfig = value;
        return this;
    }

    static fromMap(d) {
        const ret = new S3ExportTaskExecutorConfig();
        if ("identifier" in d) {
            ret.identifier = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["identifier"]) : d["identifier"];
        }
        if ("sizeThresholdForMultipartUploadBytes" in d) {
            ret.sizeThresholdForMultipartUploadBytes = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["sizeThresholdForMultipartUploadBytes"]) : d["sizeThresholdForMultipartUploadBytes"];
        }
        if ("priority" in d) {
            ret.priority = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["priority"]) : d["priority"];
        }
        if ("disabled" in d) {
            ret.disabled = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["disabled"]) : d["disabled"];
        }
        if ("statusConfig" in d) {
            ret.statusConfig = Object.prototype.hasOwnProperty.call(StatusConfig, "fromMap") ? StatusConfig.fromMap(d["statusConfig"]) : d["statusConfig"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.identifier !== null) {
            d["identifier"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.identifier), "asMap") ? this.identifier.asMap() : this.identifier;
        }
        if (this.sizeThresholdForMultipartUploadBytes !== null) {
            d["sizeThresholdForMultipartUploadBytes"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.sizeThresholdForMultipartUploadBytes), "asMap") ? this.sizeThresholdForMultipartUploadBytes.asMap() : this.sizeThresholdForMultipartUploadBytes;
        }
        if (this.priority !== null) {
            d["priority"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.priority), "asMap") ? this.priority.asMap() : this.priority;
        }
        if (this.disabled !== null) {
            d["disabled"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.disabled), "asMap") ? this.disabled.asMap() : this.disabled;
        }
        if (this.statusConfig !== null) {
            d["statusConfig"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.statusConfig), "asMap") ? this.statusConfig.asMap() : this.statusConfig;
        }
        return d;
    }
};

Object.defineProperty(S3ExportTaskExecutorConfig, "typesMap", {
    value: {
        identifier: {
            'type': String,
            'subtype': null
        },
        sizeThresholdForMultipartUploadBytes: {
            'type': Number,
            'subtype': null
        },
        priority: {
            'type': Number,
            'subtype': null
        },
        disabled: {
            'type': Boolean,
            'subtype': null
        },
        statusConfig: {
            'type': StatusConfig,
            'subtype': null
        },
    }
});
Object.defineProperty(S3ExportTaskExecutorConfig, "formatsMap", {
    value: {}
});
Object.defineProperty(S3ExportTaskExecutorConfig, "validationsMap", {
    value: {
        'identifier': {
            'required': true,
            'minLength': 1,
            'maxLength': 255,
            'pattern': /^[\w ,.\-_]*$/,
        },
        'sizeThresholdForMultipartUploadBytes': {
            'required': false,
            'minimum': 5242880,
        },
        'priority': {
            'required': false,
            'maximum': 10,
            'minimum': 1,
        },
        'disabled': {
            'required': false,
        },
        'statusConfig': {
            'required': false,
        },
    }
});

/**
 * Defines how and where the stream is uploaded.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class ExportDefinition {
    #__http = null;
    #__iotAnalytics = null;
    #__kinesis = null;
    #__IotSitewise = null;
    #__s3TaskExecutor = null;

    /**
     * @param http {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint.
     * @param iotAnalytics {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics.
     * @param kinesis {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis.
     * @param IotSitewise {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig[]} Defines how the stream is uploaded to IoT SiteWise.
     * @param s3TaskExecutor {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig[]} Defines the list of configs for S3 task executors.
     */
    constructor(
        http = null,
        iotAnalytics = null,
        kinesis = null,
        IotSitewise = null,
        s3TaskExecutor = null,
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

        if (IotSitewise !== null && !(IotSitewise instanceof Array)) {
            throw new Error("IotSitewise must be Array");
        }
        if (IotSitewise !== null && !IotSitewise.every((v) => v instanceof IoTSiteWiseConfig)) {
            throw new Error("IotSitewise array values must be IoTSiteWiseConfig");
        }

        if (s3TaskExecutor !== null && !(s3TaskExecutor instanceof Array)) {
            throw new Error("s3TaskExecutor must be Array");
        }
        if (s3TaskExecutor !== null && !s3TaskExecutor.every((v) => v instanceof S3ExportTaskExecutorConfig)) {
            throw new Error("s3TaskExecutor array values must be S3ExportTaskExecutorConfig");
        }

        this.#__http = http;
        this.#__iotAnalytics = iotAnalytics;
        this.#__kinesis = kinesis;
        this.#__IotSitewise = IotSitewise;
        this.#__s3TaskExecutor = s3TaskExecutor;
    }

    /**
     * Defines how the stream is uploaded to an HTTP endpoint.
     * @returns {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]}
     
     */
    get http() {
        return this.#__http;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint.
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
     * @param value {aws-greengrass-core-sdk.StreamManager.HTTPConfig[]} Defines how the stream is uploaded to an HTTP endpoint.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withHttp(value) {
        this.http = value;
        return this;
    }

    /**
     * Defines how the stream is uploaded to IoT Analytics.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]}
     
     */
    get iotAnalytics() {
        return this.#__iotAnalytics;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics.
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
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTAnalyticsConfig[]} Defines how the stream is uploaded to IoT Analytics.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withIotAnalytics(value) {
        this.iotAnalytics = value;
        return this;
    }

    /**
     * Defines how the stream is uploaded to Kinesis.
     * @returns {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]}
     
     */
    get kinesis() {
        return this.#__kinesis;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis.
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
     * @param value {aws-greengrass-core-sdk.StreamManager.KinesisConfig[]} Defines how the stream is uploaded to Kinesis.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withKinesis(value) {
        this.kinesis = value;
        return this;
    }

    /**
     * Defines how the stream is uploaded to IoT SiteWise.
     * @returns {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig[]}
     
     */
    get IotSitewise() {
        return this.#__IotSitewise;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig[]} Defines how the stream is uploaded to IoT SiteWise.
     */
    set IotSitewise(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("IotSitewise must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof IoTSiteWiseConfig)) {
            throw new Error("IotSitewise array values must be IoTSiteWiseConfig");
        }

        this.#__IotSitewise = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.IoTSiteWiseConfig[]} Defines how the stream is uploaded to IoT SiteWise.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withIotSitewise(value) {
        this.IotSitewise = value;
        return this;
    }

    /**
     * Defines the list of configs for S3 task executors.
     * @returns {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig[]}
     
     */
    get s3TaskExecutor() {
        return this.#__s3TaskExecutor;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig[]} Defines the list of configs for S3 task executors.
     */
    set s3TaskExecutor(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("s3TaskExecutor must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof S3ExportTaskExecutorConfig)) {
            throw new Error("s3TaskExecutor array values must be S3ExportTaskExecutorConfig");
        }

        this.#__s3TaskExecutor = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.S3ExportTaskExecutorConfig[]} Defines the list of configs for S3 task executors.
     * @returns {aws-greengrass-core-sdk.StreamManager.ExportDefinition}
     */
    withS3TaskExecutor(value) {
        this.s3TaskExecutor = value;
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
        if ("IotSitewise" in d) {
            ret.IotSitewise = d["IotSitewise"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(IoTSiteWiseConfig, "fromMap") ? IoTSiteWiseConfig.fromMap(v) : v);
                return acc;
            }, []);
        }
        if ("s3TaskExecutor" in d) {
            ret.s3TaskExecutor = d["s3TaskExecutor"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(S3ExportTaskExecutorConfig, "fromMap") ? S3ExportTaskExecutorConfig.fromMap(v) : v);
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
        if (this.IotSitewise !== null) {
            d["IotSitewise"] = this.IotSitewise.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        if (this.s3TaskExecutor !== null) {
            d["s3TaskExecutor"] = this.s3TaskExecutor.reduce((acc, v) => {
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
        IotSitewise: {
            'type': Array,
            'subtype': IoTSiteWiseConfig
        },
        s3TaskExecutor: {
            'type': Array,
            'subtype': S3ExportTaskExecutorConfig
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
        'IotSitewise': {
            'required': false,
        },
        's3TaskExecutor': {
            'required': false,
        },
    }
});

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
        if (!Object.values(StrategyOnFull.options).includes(value)) {
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
 * Object defining a message stream used in the CreateMessageStream and UpdateMessageStream API.
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
 * (Internal Only) Request object for creating a message stream.
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
 * Internal Only.
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
 * (Internal Only) Request object for updating a message stream.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class UpdateMessageStreamRequest {
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UpdateMessageStreamRequest}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UpdateMessageStreamRequest}
     */
    withDefinition(value) {
        this.definition = value;
        return this;
    }

    static fromMap(d) {
        const ret = new UpdateMessageStreamRequest();
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

Object.defineProperty(UpdateMessageStreamRequest, "typesMap", {
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
Object.defineProperty(UpdateMessageStreamRequest, "formatsMap", {
    value: {}
});
Object.defineProperty(UpdateMessageStreamRequest, "validationsMap", {
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
 * (Internal Only) Response for UpdateMessageStreamRequest.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class UpdateMessageStreamResponse {
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UpdateMessageStreamResponse}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UpdateMessageStreamResponse}
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
     * @returns {aws-greengrass-core-sdk.StreamManager.UpdateMessageStreamResponse}
     */
    withErrorMessage(value) {
        this.errorMessage = value;
        return this;
    }

    static fromMap(d) {
        const ret = new UpdateMessageStreamResponse();
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

Object.defineProperty(UpdateMessageStreamResponse, "typesMap", {
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
Object.defineProperty(UpdateMessageStreamResponse, "formatsMap", {
    value: {}
});
Object.defineProperty(UpdateMessageStreamResponse, "validationsMap", {
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
 * (Internal Only) Request object for deleting a message stream.
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
 * Internal Only.
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
 * (Internal Only) Request object for describing a message stream.
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
 * Message stream information including its definition, storage status and export status.
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
     * @param storageStatus {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
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
     * Stream status including oldest/newest sequence number and total bytes.
     * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus}
     
     */
    get storageStatus() {
        return this.#__storageStatus;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
     */
    set storageStatus(value) {
        if (value !== null && !(value instanceof MessageStreamInfo._storageStatus)) {
            throw new Error("storageStatus must be MessageStreamInfo._storageStatus");
        }

        this.#__storageStatus = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._storageStatus} Stream status including oldest/newest sequence number and total bytes.
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
     * Stream status including oldest/newest sequence number and total bytes.
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
     * Export status including the export identifier and the last exported sequence number for that export task.
     *
     * @class
     * @memberOf aws-greengrass-core-sdk.StreamManager
     */
    class _exportStatuses {
        #__exportConfigIdentifier = null;
        #__lastExportedSequenceNumber = null;
        #__lastExportTime = null;
        #__errorMessage = null;
        #__exportedBytesFromStream = null;
        #__exportedMessagesCount = null;

        /**
         * @param exportConfigIdentifier {String} The unique export identifier.
         * @param lastExportedSequenceNumber {Number} The sequence number of the last message which was successfully exported.
         * @param lastExportTime {Number} The last time an export was attempted. Data is Unix epoch time in milliseconds.
         * @param errorMessage {String} Error message from the last export attempt if it failed.
         * @param exportedBytesFromStream {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
         * @param exportedMessagesCount {Number} Total messages exported/processed.
         */
        constructor(
            exportConfigIdentifier = null,
            lastExportedSequenceNumber = null,
            lastExportTime = null,
            errorMessage = null,
            exportedBytesFromStream = null,
            exportedMessagesCount = null,
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

            if (exportedBytesFromStream !== null && !(typeof exportedBytesFromStream === "number")) {
                throw new Error("exportedBytesFromStream must be Number");
            }

            if (exportedMessagesCount !== null && !(typeof exportedMessagesCount === "number")) {
                throw new Error("exportedMessagesCount must be Number");
            }

            this.#__exportConfigIdentifier = exportConfigIdentifier;
            this.#__lastExportedSequenceNumber = lastExportedSequenceNumber;
            this.#__lastExportTime = lastExportTime;
            this.#__errorMessage = errorMessage;
            this.#__exportedBytesFromStream = exportedBytesFromStream;
            this.#__exportedMessagesCount = exportedMessagesCount;
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

        /**
         * Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
         * @returns {Number}
         
         */
        get exportedBytesFromStream() {
            return this.#__exportedBytesFromStream;
        }
        /**
         * @param value {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
         */
        set exportedBytesFromStream(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("exportedBytesFromStream must be Number");
            }

            this.#__exportedBytesFromStream = value;
        }
        /**
         * @param value {Number} Total bytes exported from the stream for this Export Config. It does not include the failed export attempts or messages which are skipped because of some non-retryable error.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withExportedBytesFromStream(value) {
            this.exportedBytesFromStream = value;
            return this;
        }

        /**
         * Total messages exported/processed.
         * @returns {Number}
         
         */
        get exportedMessagesCount() {
            return this.#__exportedMessagesCount;
        }
        /**
         * @param value {Number} Total messages exported/processed.
         */
        set exportedMessagesCount(value) {
            if (value !== null && !(typeof value === "number")) {
                throw new Error("exportedMessagesCount must be Number");
            }

            this.#__exportedMessagesCount = value;
        }
        /**
         * @param value {Number} Total messages exported/processed.
         * @returns {aws-greengrass-core-sdk.StreamManager.MessageStreamInfo~MessageStreamInfo._exportStatuses}
         */
        withExportedMessagesCount(value) {
            this.exportedMessagesCount = value;
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
            if ("exportedBytesFromStream" in d) {
                ret.exportedBytesFromStream = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["exportedBytesFromStream"]) : d["exportedBytesFromStream"];
            }
            if ("exportedMessagesCount" in d) {
                ret.exportedMessagesCount = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["exportedMessagesCount"]) : d["exportedMessagesCount"];
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
            if (this.exportedBytesFromStream !== null) {
                d["exportedBytesFromStream"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportedBytesFromStream), "asMap") ? this.exportedBytesFromStream.asMap() : this.exportedBytesFromStream;
            }
            if (this.exportedMessagesCount !== null) {
                d["exportedMessagesCount"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.exportedMessagesCount), "asMap") ? this.exportedMessagesCount.asMap() : this.exportedMessagesCount;
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
        exportedBytesFromStream: {
            'type': Number,
            'subtype': null
        },
        exportedMessagesCount: {
            'type': Number,
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
        'exportedBytesFromStream': {
            'required': false,
        },
        'exportedMessagesCount': {
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
 * (Internal Only) Response object for describing a message stream.
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
 * (Internal Only) Request object for appending to a message stream.
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
 * Internal Only.
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
 * Message object containing metadata and the user's payload.
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
 * Internal Only.
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
 * Internal Only.
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
 * Contains a timestamp with optional nanosecond granularity.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class TimeInNanos {
    #__timeInSeconds = null;
    #__offsetInNanos = null;

    /**
     * @param timeInSeconds {Number} The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by offsetInNanos.
     * @param offsetInNanos {Number} The nanosecond offset from timeInSeconds.
     */
    constructor(
        timeInSeconds = null,
        offsetInNanos = null,
    ) {
        if (timeInSeconds !== null && !(typeof timeInSeconds === "number")) {
            throw new Error("timeInSeconds must be Number");
        }

        if (offsetInNanos !== null && !(typeof offsetInNanos === "number")) {
            throw new Error("offsetInNanos must be Number");
        }

        this.#__timeInSeconds = timeInSeconds;
        this.#__offsetInNanos = offsetInNanos;
    }

    /**
     * The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by offsetInNanos.
     * @returns {Number}
     
     */
    get timeInSeconds() {
        return this.#__timeInSeconds;
    }
    /**
     * @param value {Number} The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by offsetInNanos.
     */
    set timeInSeconds(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("timeInSeconds must be Number");
        }

        this.#__timeInSeconds = value;
    }
    /**
     * @param value {Number} The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by offsetInNanos.
     * @returns {aws-greengrass-core-sdk.StreamManager.TimeInNanos}
     */
    withTimeInSeconds(value) {
        this.timeInSeconds = value;
        return this;
    }

    /**
     * The nanosecond offset from timeInSeconds.
     * @returns {Number}
     
     */
    get offsetInNanos() {
        return this.#__offsetInNanos;
    }
    /**
     * @param value {Number} The nanosecond offset from timeInSeconds.
     */
    set offsetInNanos(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("offsetInNanos must be Number");
        }

        this.#__offsetInNanos = value;
    }
    /**
     * @param value {Number} The nanosecond offset from timeInSeconds.
     * @returns {aws-greengrass-core-sdk.StreamManager.TimeInNanos}
     */
    withOffsetInNanos(value) {
        this.offsetInNanos = value;
        return this;
    }

    static fromMap(d) {
        const ret = new TimeInNanos();
        if ("timeInSeconds" in d) {
            ret.timeInSeconds = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["timeInSeconds"]) : d["timeInSeconds"];
        }
        if ("offsetInNanos" in d) {
            ret.offsetInNanos = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["offsetInNanos"]) : d["offsetInNanos"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.timeInSeconds !== null) {
            d["timeInSeconds"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.timeInSeconds), "asMap") ? this.timeInSeconds.asMap() : this.timeInSeconds;
        }
        if (this.offsetInNanos !== null) {
            d["offsetInNanos"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.offsetInNanos), "asMap") ? this.offsetInNanos.asMap() : this.offsetInNanos;
        }
        return d;
    }
};

Object.defineProperty(TimeInNanos, "typesMap", {
    value: {
        timeInSeconds: {
            'type': Number,
            'subtype': null
        },
        offsetInNanos: {
            'type': Number,
            'subtype': null
        },
    }
});
Object.defineProperty(TimeInNanos, "formatsMap", {
    value: {}
});
Object.defineProperty(TimeInNanos, "validationsMap", {
    value: {
        'timeInSeconds': {
            'required': true,
            'maximum': 31556889864403199,
            'minimum': 1,
        },
        'offsetInNanos': {
            'required': false,
            'maximum': 999999999,
            'minimum': 0,
        },
    }
});

/**
 * Contains an asset property value (of a single type only).
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Variant {
    #__stringValue = null;
    #__integerValue = null;
    #__doubleValue = null;
    #__booleanValue = null;

    /**
     * @param stringValue {String} Asset property data of type string (sequence of characters).
     * @param integerValue {Number} Asset property data of type integer (whole number).
     * @param doubleValue {Number} Asset property data of type double (floating point number).
     * @param booleanValue {Boolean} Asset property data of type Boolean (true or false).
     */
    constructor(
        stringValue = null,
        integerValue = null,
        doubleValue = null,
        booleanValue = null,
    ) {
        if (stringValue !== null && !(typeof stringValue === "string")) {
            throw new Error("stringValue must be String");
        }

        if (integerValue !== null && !(typeof integerValue === "number")) {
            throw new Error("integerValue must be Number");
        }

        if (doubleValue !== null && !(typeof doubleValue === "number")) {
            throw new Error("doubleValue must be Number");
        }

        if (booleanValue !== null && !(typeof booleanValue === "boolean")) {
            throw new Error("booleanValue must be Boolean");
        }

        this.#__stringValue = stringValue;
        this.#__integerValue = integerValue;
        this.#__doubleValue = doubleValue;
        this.#__booleanValue = booleanValue;
    }

    /**
     * Asset property data of type string (sequence of characters).
     * @returns {String}
     
     */
    get stringValue() {
        return this.#__stringValue;
    }
    /**
     * @param value {String} Asset property data of type string (sequence of characters).
     */
    set stringValue(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("stringValue must be String");
        }

        this.#__stringValue = value;
    }
    /**
     * @param value {String} Asset property data of type string (sequence of characters).
     * @returns {aws-greengrass-core-sdk.StreamManager.Variant}
     */
    withStringValue(value) {
        this.stringValue = value;
        return this;
    }

    /**
     * Asset property data of type integer (whole number).
     * @returns {Number}
     
     */
    get integerValue() {
        return this.#__integerValue;
    }
    /**
     * @param value {Number} Asset property data of type integer (whole number).
     */
    set integerValue(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("integerValue must be Number");
        }

        this.#__integerValue = value;
    }
    /**
     * @param value {Number} Asset property data of type integer (whole number).
     * @returns {aws-greengrass-core-sdk.StreamManager.Variant}
     */
    withIntegerValue(value) {
        this.integerValue = value;
        return this;
    }

    /**
     * Asset property data of type double (floating point number).
     * @returns {Number}
     
     */
    get doubleValue() {
        return this.#__doubleValue;
    }
    /**
     * @param value {Number} Asset property data of type double (floating point number).
     */
    set doubleValue(value) {
        if (value !== null && !(typeof value === "number")) {
            throw new Error("doubleValue must be Number");
        }

        this.#__doubleValue = value;
    }
    /**
     * @param value {Number} Asset property data of type double (floating point number).
     * @returns {aws-greengrass-core-sdk.StreamManager.Variant}
     */
    withDoubleValue(value) {
        this.doubleValue = value;
        return this;
    }

    /**
     * Asset property data of type Boolean (true or false).
     * @returns {Boolean}
     
     */
    get booleanValue() {
        return this.#__booleanValue;
    }
    /**
     * @param value {Boolean} Asset property data of type Boolean (true or false).
     */
    set booleanValue(value) {
        if (value !== null && !(typeof value === "boolean")) {
            throw new Error("booleanValue must be Boolean");
        }

        this.#__booleanValue = value;
    }
    /**
     * @param value {Boolean} Asset property data of type Boolean (true or false).
     * @returns {aws-greengrass-core-sdk.StreamManager.Variant}
     */
    withBooleanValue(value) {
        this.booleanValue = value;
        return this;
    }

    static fromMap(d) {
        const ret = new Variant();
        if ("stringValue" in d) {
            ret.stringValue = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["stringValue"]) : d["stringValue"];
        }
        if ("integerValue" in d) {
            ret.integerValue = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["integerValue"]) : d["integerValue"];
        }
        if ("doubleValue" in d) {
            ret.doubleValue = Object.prototype.hasOwnProperty.call(Number, "fromMap") ? Number.fromMap(d["doubleValue"]) : d["doubleValue"];
        }
        if ("booleanValue" in d) {
            ret.booleanValue = Object.prototype.hasOwnProperty.call(Boolean, "fromMap") ? Boolean.fromMap(d["booleanValue"]) : d["booleanValue"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.stringValue !== null) {
            d["stringValue"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.stringValue), "asMap") ? this.stringValue.asMap() : this.stringValue;
        }
        if (this.integerValue !== null) {
            d["integerValue"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.integerValue), "asMap") ? this.integerValue.asMap() : this.integerValue;
        }
        if (this.doubleValue !== null) {
            d["doubleValue"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.doubleValue), "asMap") ? this.doubleValue.asMap() : this.doubleValue;
        }
        if (this.booleanValue !== null) {
            d["booleanValue"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.booleanValue), "asMap") ? this.booleanValue.asMap() : this.booleanValue;
        }
        return d;
    }
};

Object.defineProperty(Variant, "typesMap", {
    value: {
        stringValue: {
            'type': String,
            'subtype': null
        },
        integerValue: {
            'type': Number,
            'subtype': null
        },
        doubleValue: {
            'type': Number,
            'subtype': null
        },
        booleanValue: {
            'type': Boolean,
            'subtype': null
        },
    }
});
Object.defineProperty(Variant, "formatsMap", {
    value: {}
});
Object.defineProperty(Variant, "validationsMap", {
    value: {
        'stringValue': {
            'required': false,
            'minLength': 1,
            'maxLength': 1024,
            'pattern': /[^\u0000-\u001F\u007F]+/,
        },
        'integerValue': {
            'required': false,
            'maximum': 2147483647,
            'minimum': 0,
        },
        'doubleValue': {
            'required': false,
        },
        'booleanValue': {
            'required': false,
        },
    }
});

/**
 * 
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class Quality {

    #value = null;
    constructor(value = null) {
        if (!Object.values(Quality.options).includes(value)) {
            throw new Error("Value must be one of the enumerated options");
        }
        this.#value = value;
    }

    static fromMap(d) {
        return Quality[Quality.optionsFlipped[d]];
    }

    asMap() {
        return this.#value;
    }
};
Object.defineProperty(Quality, "options", {
    value: {
        GOOD: "GOOD",
        BAD: "BAD",
        UNCERTAIN: "UNCERTAIN",
    }
});
Object.defineProperty(Quality, "optionsFlipped", {
    value: {
        "GOOD": "GOOD",
        "BAD": "BAD",
        "UNCERTAIN": "UNCERTAIN",
    }
});

/**
 * @member {aws-greengrass-core-sdk.StreamManager.Quality} GOOD
 * @memberOf aws-greengrass-core-sdk.StreamManager.Quality#
 * @readonly
 */
Object.defineProperty(Quality, "GOOD", {
    value: new Quality("GOOD")
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Quality} BAD
 * @memberOf aws-greengrass-core-sdk.StreamManager.Quality#
 * @readonly
 */
Object.defineProperty(Quality, "BAD", {
    value: new Quality("BAD")
});
/**
 * @member {aws-greengrass-core-sdk.StreamManager.Quality} UNCERTAIN
 * @memberOf aws-greengrass-core-sdk.StreamManager.Quality#
 * @readonly
 */
Object.defineProperty(Quality, "UNCERTAIN", {
    value: new Quality("UNCERTAIN")
});

/**
 * Contains asset property value information.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class AssetPropertyValue {
    #__value = null;
    #__timestamp = null;
    #__quality = null;

    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Variant} The value of the asset property.
     * @param timestamp {aws-greengrass-core-sdk.StreamManager.TimeInNanos} The timestamp of the asset property value.
     * @param quality {aws-greengrass-core-sdk.StreamManager.Quality} The quality of the asset property value.
     */
    constructor(
        value = null,
        timestamp = null,
        quality = null,
    ) {
        if (value !== null && !(value instanceof Variant)) {
            throw new Error("value must be Variant");
        }

        if (timestamp !== null && !(timestamp instanceof TimeInNanos)) {
            throw new Error("timestamp must be TimeInNanos");
        }

        if (quality !== null && !(quality instanceof Quality)) {
            throw new Error("quality must be Quality");
        }

        this.#__value = value;
        this.#__timestamp = timestamp;
        this.#__quality = quality;
    }

    /**
     * The value of the asset property.
     * @returns {aws-greengrass-core-sdk.StreamManager.Variant}
     
     */
    get value() {
        return this.#__value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Variant} The value of the asset property.
     */
    set value(value) {
        if (value !== null && !(value instanceof Variant)) {
            throw new Error("value must be Variant");
        }

        this.#__value = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Variant} The value of the asset property.
     * @returns {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue}
     */
    withValue(value) {
        this.value = value;
        return this;
    }

    /**
     * The timestamp of the asset property value.
     * @returns {aws-greengrass-core-sdk.StreamManager.TimeInNanos}
     
     */
    get timestamp() {
        return this.#__timestamp;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.TimeInNanos} The timestamp of the asset property value.
     */
    set timestamp(value) {
        if (value !== null && !(value instanceof TimeInNanos)) {
            throw new Error("timestamp must be TimeInNanos");
        }

        this.#__timestamp = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.TimeInNanos} The timestamp of the asset property value.
     * @returns {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue}
     */
    withTimestamp(value) {
        this.timestamp = value;
        return this;
    }

    /**
     * The quality of the asset property value.
     * @returns {aws-greengrass-core-sdk.StreamManager.Quality}
     
     */
    get quality() {
        return this.#__quality;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Quality} The quality of the asset property value.
     */
    set quality(value) {
        if (value !== null && !(value instanceof Quality)) {
            throw new Error("quality must be Quality");
        }

        this.#__quality = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.Quality} The quality of the asset property value.
     * @returns {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue}
     */
    withQuality(value) {
        this.quality = value;
        return this;
    }

    static fromMap(d) {
        const ret = new AssetPropertyValue();
        if ("value" in d) {
            ret.value = Object.prototype.hasOwnProperty.call(Variant, "fromMap") ? Variant.fromMap(d["value"]) : d["value"];
        }
        if ("timestamp" in d) {
            ret.timestamp = Object.prototype.hasOwnProperty.call(TimeInNanos, "fromMap") ? TimeInNanos.fromMap(d["timestamp"]) : d["timestamp"];
        }
        if ("quality" in d) {
            ret.quality = Object.prototype.hasOwnProperty.call(Quality, "fromMap") ? Quality.fromMap(d["quality"]) : d["quality"];
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.value !== null) {
            d["value"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.value), "asMap") ? this.value.asMap() : this.value;
        }
        if (this.timestamp !== null) {
            d["timestamp"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.timestamp), "asMap") ? this.timestamp.asMap() : this.timestamp;
        }
        if (this.quality !== null) {
            d["quality"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.quality), "asMap") ? this.quality.asMap() : this.quality;
        }
        return d;
    }
};

Object.defineProperty(AssetPropertyValue, "typesMap", {
    value: {
        value: {
            'type': Variant,
            'subtype': null
        },
        timestamp: {
            'type': TimeInNanos,
            'subtype': null
        },
        quality: {
            'type': Quality,
            'subtype': null
        },
    }
});
Object.defineProperty(AssetPropertyValue, "formatsMap", {
    value: {}
});
Object.defineProperty(AssetPropertyValue, "validationsMap", {
    value: {
        'value': {
            'required': true,
        },
        'timestamp': {
            'required': true,
        },
        'quality': {
            'required': false,
        },
    }
});

/**
 * Contains a list of value updates for a IoTSiteWise asset property in the list of asset entries consumed by the BatchPutAssetPropertyValue API. See https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html.
 *
 * @class
 * @memberOf aws-greengrass-core-sdk.StreamManager
 */
class PutAssetPropertyValueEntry {
    #__entryId = null;
    #__assetId = null;
    #__propertyId = null;
    #__propertyAlias = null;
    #__propertyValues = null;

    /**
     * @param entryId {String} The user specified ID for the entry. You can use this ID to identify which entries failed.
     * @param assetId {String} The ID of the asset to update.
     * @param propertyId {String} The ID of the asset property for this entry.
     * @param propertyAlias {String} The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html.
     * @param propertyValues {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue[]} The list of property values to upload. You can specify up to 10 values.
     */
    constructor(
        entryId = null,
        assetId = null,
        propertyId = null,
        propertyAlias = null,
        propertyValues = null,
    ) {
        if (entryId !== null && !(typeof entryId === "string")) {
            throw new Error("entryId must be String");
        }

        if (assetId !== null && !(typeof assetId === "string")) {
            throw new Error("assetId must be String");
        }

        if (propertyId !== null && !(typeof propertyId === "string")) {
            throw new Error("propertyId must be String");
        }

        if (propertyAlias !== null && !(typeof propertyAlias === "string")) {
            throw new Error("propertyAlias must be String");
        }

        if (propertyValues !== null && !(propertyValues instanceof Array)) {
            throw new Error("propertyValues must be Array");
        }
        if (propertyValues !== null && !propertyValues.every((v) => v instanceof AssetPropertyValue)) {
            throw new Error("propertyValues array values must be AssetPropertyValue");
        }

        this.#__entryId = entryId;
        this.#__assetId = assetId;
        this.#__propertyId = propertyId;
        this.#__propertyAlias = propertyAlias;
        this.#__propertyValues = propertyValues;
    }

    /**
     * The user specified ID for the entry. You can use this ID to identify which entries failed.
     * @returns {String}
     
     */
    get entryId() {
        return this.#__entryId;
    }
    /**
     * @param value {String} The user specified ID for the entry. You can use this ID to identify which entries failed.
     */
    set entryId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("entryId must be String");
        }

        this.#__entryId = value;
    }
    /**
     * @param value {String} The user specified ID for the entry. You can use this ID to identify which entries failed.
     * @returns {aws-greengrass-core-sdk.StreamManager.PutAssetPropertyValueEntry}
     */
    withEntryId(value) {
        this.entryId = value;
        return this;
    }

    /**
     * The ID of the asset to update.
     * @returns {String}
     
     */
    get assetId() {
        return this.#__assetId;
    }
    /**
     * @param value {String} The ID of the asset to update.
     */
    set assetId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("assetId must be String");
        }

        this.#__assetId = value;
    }
    /**
     * @param value {String} The ID of the asset to update.
     * @returns {aws-greengrass-core-sdk.StreamManager.PutAssetPropertyValueEntry}
     */
    withAssetId(value) {
        this.assetId = value;
        return this;
    }

    /**
     * The ID of the asset property for this entry.
     * @returns {String}
     
     */
    get propertyId() {
        return this.#__propertyId;
    }
    /**
     * @param value {String} The ID of the asset property for this entry.
     */
    set propertyId(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("propertyId must be String");
        }

        this.#__propertyId = value;
    }
    /**
     * @param value {String} The ID of the asset property for this entry.
     * @returns {aws-greengrass-core-sdk.StreamManager.PutAssetPropertyValueEntry}
     */
    withPropertyId(value) {
        this.propertyId = value;
        return this;
    }

    /**
     * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html.
     * @returns {String}
     
     */
    get propertyAlias() {
        return this.#__propertyAlias;
    }
    /**
     * @param value {String} The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html.
     */
    set propertyAlias(value) {
        if (value !== null && !(typeof value === "string")) {
            throw new Error("propertyAlias must be String");
        }

        this.#__propertyAlias = value;
    }
    /**
     * @param value {String} The property alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). For more information, see https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html.
     * @returns {aws-greengrass-core-sdk.StreamManager.PutAssetPropertyValueEntry}
     */
    withPropertyAlias(value) {
        this.propertyAlias = value;
        return this;
    }

    /**
     * The list of property values to upload. You can specify up to 10 values.
     * @returns {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue[]}
     
     */
    get propertyValues() {
        return this.#__propertyValues;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue[]} The list of property values to upload. You can specify up to 10 values.
     */
    set propertyValues(value) {
        if (value !== null && !(value instanceof Array)) {
            throw new Error("propertyValues must be Array");
        }
        if (value !== null && !value.every((v) => v instanceof AssetPropertyValue)) {
            throw new Error("propertyValues array values must be AssetPropertyValue");
        }

        this.#__propertyValues = value;
    }
    /**
     * @param value {aws-greengrass-core-sdk.StreamManager.AssetPropertyValue[]} The list of property values to upload. You can specify up to 10 values.
     * @returns {aws-greengrass-core-sdk.StreamManager.PutAssetPropertyValueEntry}
     */
    withPropertyValues(value) {
        this.propertyValues = value;
        return this;
    }

    static fromMap(d) {
        const ret = new PutAssetPropertyValueEntry();
        if ("entryId" in d) {
            ret.entryId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["entryId"]) : d["entryId"];
        }
        if ("assetId" in d) {
            ret.assetId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["assetId"]) : d["assetId"];
        }
        if ("propertyId" in d) {
            ret.propertyId = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["propertyId"]) : d["propertyId"];
        }
        if ("propertyAlias" in d) {
            ret.propertyAlias = Object.prototype.hasOwnProperty.call(String, "fromMap") ? String.fromMap(d["propertyAlias"]) : d["propertyAlias"];
        }
        if ("propertyValues" in d) {
            ret.propertyValues = d["propertyValues"].reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(AssetPropertyValue, "fromMap") ? AssetPropertyValue.fromMap(v) : v);
                return acc;
            }, []);
        }
        return ret;
    }

    asMap() {
        const d = {};
        if (this.entryId !== null) {
            d["entryId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.entryId), "asMap") ? this.entryId.asMap() : this.entryId;
        }
        if (this.assetId !== null) {
            d["assetId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.assetId), "asMap") ? this.assetId.asMap() : this.assetId;
        }
        if (this.propertyId !== null) {
            d["propertyId"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.propertyId), "asMap") ? this.propertyId.asMap() : this.propertyId;
        }
        if (this.propertyAlias !== null) {
            d["propertyAlias"] = Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this.propertyAlias), "asMap") ? this.propertyAlias.asMap() : this.propertyAlias;
        }
        if (this.propertyValues !== null) {
            d["propertyValues"] = this.propertyValues.reduce((acc, v) => {
                acc.push(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(v), "asMap") ? v.asMap() : v);
                return acc;
            }, []);
        }
        return d;
    }
};

Object.defineProperty(PutAssetPropertyValueEntry, "typesMap", {
    value: {
        entryId: {
            'type': String,
            'subtype': null
        },
        assetId: {
            'type': String,
            'subtype': null
        },
        propertyId: {
            'type': String,
            'subtype': null
        },
        propertyAlias: {
            'type': String,
            'subtype': null
        },
        propertyValues: {
            'type': Array,
            'subtype': AssetPropertyValue
        },
    }
});
Object.defineProperty(PutAssetPropertyValueEntry, "formatsMap", {
    value: {}
});
Object.defineProperty(PutAssetPropertyValueEntry, "validationsMap", {
    value: {
        'entryId': {
            'required': true,
            'minLength': 1,
            'maxLength': 64,
            'pattern': /^[a-zA-Z0-9_-]+$/,
        },
        'assetId': {
            'required': false,
        },
        'propertyId': {
            'required': false,
        },
        'propertyAlias': {
            'required': false,
            'minLength': 1,
            'maxLength': 2048,
            'pattern': /[^\u0000-\u001F\u007F]+/,
        },
        'propertyValues': {
            'required': true,
            'maxItems': 10,
            'minItems': 1,
        },
    }
});

/**
 * @type {{
VersionInfo: VersionInfo,
ConnectRequest: ConnectRequest,
ResponseStatusCode: ResponseStatusCode,
ConnectResponse: ConnectResponse,
Operation: Operation,
MessageFrame: MessageFrame,
EventType: EventType,
Status: Status,
StatusLevel: StatusLevel,
S3ExportTaskDefinition: S3ExportTaskDefinition,
StatusContext: StatusContext,
StatusMessage: StatusMessage,
TraceableRequest: TraceableRequest,
UnknownOperationError: UnknownOperationError,
Persistence: Persistence,
ExportFormat: ExportFormat,
HTTPConfig: HTTPConfig,
IoTAnalyticsConfig: IoTAnalyticsConfig,
KinesisConfig: KinesisConfig,
IoTSiteWiseConfig: IoTSiteWiseConfig,
StatusConfig: StatusConfig,
S3ExportTaskExecutorConfig: S3ExportTaskExecutorConfig,
ExportDefinition: ExportDefinition,
StrategyOnFull: StrategyOnFull,
MessageStreamDefinition: MessageStreamDefinition,
CreateMessageStreamRequest: CreateMessageStreamRequest,
CreateMessageStreamResponse: CreateMessageStreamResponse,
UpdateMessageStreamRequest: UpdateMessageStreamRequest,
UpdateMessageStreamResponse: UpdateMessageStreamResponse,
DeleteMessageStreamRequest: DeleteMessageStreamRequest,
DeleteMessageStreamResponse: DeleteMessageStreamResponse,
DescribeMessageStreamRequest: DescribeMessageStreamRequest,
MessageStreamInfo: MessageStreamInfo,
DescribeMessageStreamResponse: DescribeMessageStreamResponse,
AppendMessageRequest: AppendMessageRequest,
AppendMessageResponse: AppendMessageResponse,
ReadMessagesOptions: ReadMessagesOptions,
ReadMessagesRequest: ReadMessagesRequest,
Message: Message,
ReadMessagesResponse: ReadMessagesResponse,
ListStreamsRequest: ListStreamsRequest,
ListStreamsResponse: ListStreamsResponse,
TimeInNanos: TimeInNanos,
Variant: Variant,
Quality: Quality,
AssetPropertyValue: AssetPropertyValue,
PutAssetPropertyValueEntry: PutAssetPropertyValueEntry
}}
 */
module.exports = {
    VersionInfo,
    ConnectRequest,
    ResponseStatusCode,
    ConnectResponse,
    Operation,
    MessageFrame,
    EventType,
    Status,
    StatusLevel,
    S3ExportTaskDefinition,
    StatusContext,
    StatusMessage,
    TraceableRequest,
    UnknownOperationError,
    Persistence,
    ExportFormat,
    HTTPConfig,
    IoTAnalyticsConfig,
    KinesisConfig,
    IoTSiteWiseConfig,
    StatusConfig,
    S3ExportTaskExecutorConfig,
    ExportDefinition,
    StrategyOnFull,
    MessageStreamDefinition,
    CreateMessageStreamRequest,
    CreateMessageStreamResponse,
    UpdateMessageStreamRequest,
    UpdateMessageStreamResponse,
    DeleteMessageStreamRequest,
    DeleteMessageStreamResponse,
    DescribeMessageStreamRequest,
    MessageStreamInfo,
    DescribeMessageStreamResponse,
    AppendMessageRequest,
    AppendMessageResponse,
    ReadMessagesOptions,
    ReadMessagesRequest,
    Message,
    ReadMessagesResponse,
    ListStreamsRequest,
    ListStreamsResponse,
    TimeInNanos,
    Variant,
    Quality,
    AssetPropertyValue,
    PutAssetPropertyValueEntry,
};