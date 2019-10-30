class BaseApiException extends Error {
    constructor(exceptionMessage, statusCode) {
        super();
        this.message = exceptionMessage;
        this.status = statusCode;
    }
}

module.exports = BaseApiException;

