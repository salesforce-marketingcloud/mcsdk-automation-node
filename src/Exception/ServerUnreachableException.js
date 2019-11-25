class ServerUnreachableException extends Error {
    constructor(exceptionMessage) {
        super();
        this.name = 'Salesforce.MarketingCloud.Exceptions.' + this.constructor.name;
        this.message = exceptionMessage;
    }
}

module.exports = ServerUnreachableException;

