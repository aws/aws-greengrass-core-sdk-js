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
