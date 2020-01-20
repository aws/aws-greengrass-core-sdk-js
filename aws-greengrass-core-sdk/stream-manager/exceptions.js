/*
 * Copyright (c) 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

// eslint-disable-next-line max-classes-per-file
class StreamManagerException extends Error {
    constructor(message = '', status = null, requestId = null) {
        super(message);
        this.status = status;
        this.requestId = requestId;
    }
}

class ClientException extends StreamManagerException {}
class ConnectFailedException extends ClientException {}
class InvalidRequestException extends StreamManagerException {}
class MessageStoreReadErrorException extends StreamManagerException {}
class NotEnoughMessagesException extends StreamManagerException {}
class RequestPayloadTooLargeException extends StreamManagerException {}
class ResourceNotFoundException extends StreamManagerException {}
class ResponsePayloadTooLargeException extends StreamManagerException {}
class ServerOutOfMemoryException extends StreamManagerException {}
class ServerTimeoutException extends StreamManagerException {}
class UnauthorizedException extends StreamManagerException {}
class UnknownFailureException extends StreamManagerException {}
class ValidationException extends ClientException {}

module.exports = {
    ClientException,
    ConnectFailedException,
    InvalidRequestException,
    MessageStoreReadErrorException,
    NotEnoughMessagesException,
    RequestPayloadTooLargeException,
    ResourceNotFoundException,
    ResponsePayloadTooLargeException,
    ServerOutOfMemoryException,
    ServerTimeoutException,
    StreamManagerException,
    UnauthorizedException,
    UnknownFailureException,
    ValidationException,
};
