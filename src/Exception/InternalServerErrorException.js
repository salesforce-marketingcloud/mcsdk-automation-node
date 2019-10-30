const BaseApiException = require('./BaseApiException');

class InternalServerErrorException extends BaseApiException {
    constructor(exceptionMessage, statusCode) {
        super(exceptionMessage, statusCode);
        this.name = 'Salesforce.MarketingCloud.Exceptions.' + this.constructor.name;
    }
}

module.exports = InternalServerErrorException;

