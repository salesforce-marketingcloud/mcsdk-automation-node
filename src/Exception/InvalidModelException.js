class InvalidModelException extends Error {
    constructor(exceptionMessage) {
        super();
        this.message = exceptionMessage;
    }
}

module.exports = InvalidModelException;

