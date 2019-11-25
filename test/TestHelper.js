const ClientConfiguration = require('../src/Auth/ClientConfiguration');

class TestHelper {
    static createTokenResponseData() {
        return {
            data: {
                access_token: 'access_token',
                expires_in: 1080,
                rest_instance_url: 'rest_instance_url',
                soap_instance_url: 'soap_instance_url',
                scope: 'scope',
                token_type: 'Bearer'
            }
        }
    }
    static createClientConfiguration() {
        return new ClientConfiguration(
            'https://auth.com',
            'clientId',
            'clientSecret',
            123456,
            'scope'
        )
    }
    static createRequestResponse(statusCode) {
        return {
            status: statusCode,
            response: {
                body: 'errorResponseBody'
            }
        }
    }
    static createServerUnreachableError(){
        return {
            code: 'ENOTFOUND',
            errno: 'ENOTFOUND',
            syscall: 'getaddrinfo',
            hostname: 'host'
        }
    }
    static createConfigProvider(){
        return {
            authBaseUrl: 'authBaseUrl',
            clientId: 'clientId',
            clientSecret: 'clientSecret',
            accountId: 'accountId',
            scope: 'scope',
        }
    }
}

module.exports = TestHelper;