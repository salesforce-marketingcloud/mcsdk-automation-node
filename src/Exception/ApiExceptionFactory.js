const BadRequestException = require('./BadRequestException');
const AuthenticationFailureException = require('./AuthenticationFailureException');
const UnauthorizedAccessException = require('./UnauthorizedAccessException');
const ResourceNotFoundException = require('./ResourceNotFoundException');
const InternalServerErrorException = require('./InternalServerErrorException');
const BadGatewayException = require('./BadGatewayException');
const ServiceUnavailableException = require('./ServiceUnavailableException');
const GatewayTimeoutException = require('./GatewayTimeoutException');
const ServerUnreachableException = require('./ServerUnreachableException');
const ApiException = require('./ApiException');

class ApiExceptionFactory {
    static createCustomException(caller, error) {
        let statusCode = error.status;
        let exceptionMessage;

        if (statusCode >= 400) {

            exceptionMessage = `Error calling ${caller}: ${JSON.stringify(error.response.body)}`;

            switch (statusCode) {
                case 400:
                    return new BadRequestException(exceptionMessage, statusCode);
                case 401:
                    return new AuthenticationFailureException(exceptionMessage, statusCode);
                case 403:
                    return new UnauthorizedAccessException(exceptionMessage, statusCode);
                case 404:
                    return new ResourceNotFoundException(exceptionMessage, statusCode);
                case 500:
                    return new InternalServerErrorException(exceptionMessage, statusCode);
                case 502:
                    return new BadGatewayException(exceptionMessage, statusCode);
                case 503:
                    return new ServiceUnavailableException(exceptionMessage, statusCode);
                case 504:
                    return new GatewayTimeoutException(exceptionMessage, statusCode);
                default:
                    return new ApiException(exceptionMessage, statusCode);
            }
        }
        if(statusCode === undefined){
            exceptionMessage = `Error calling ${caller}: ${JSON.stringify(error)}`;

            return new ServerUnreachableException(exceptionMessage);
        }
    }
}

module.exports = ApiExceptionFactory;