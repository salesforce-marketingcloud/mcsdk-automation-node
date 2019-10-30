const EnvironmentConfigProvider = require('../../../src/EnvironmentConfigProvider');
const ClientConfiguration = require('../../../src/Auth/ClientConfiguration');
const ApiClient = require('../../../src/ApiClient');
const RuntimeInformationProvider = require('../../../src/RuntimeInformationProvider');
const AuthService = require('../../../src/Auth/AuthService');
const CacheService = require('../../../src/Auth/CacheService');

const expect = require('expect.js');
const sinon = require('sinon');

let authBaseUrl;
let clientId;
let clientSecret;
let accountId;
let scope;

let environmentConfigProvider;
let clientConfiguration;
let apiClient;
let cacheService;
let authService;

describe('AuthService', function () {

    before(() => {
        environmentConfigProvider = new EnvironmentConfigProvider();

        authBaseUrl = environmentConfigProvider.get('SFMC_AUTH_BASE_URL');
        clientId = environmentConfigProvider.get('SFMC_CLIENT_ID');
        clientSecret = environmentConfigProvider.get('SFMC_CLIENT_SECRET');
        accountId = environmentConfigProvider.get('SFMC_ACCOUNT_ID');
        scope = environmentConfigProvider.get('SFMC_SCOPE', false);

        cacheService = new CacheService();
        apiClient = new ApiClient(new RuntimeInformationProvider());
    });

    afterEach(()=>{
        CacheService.cachedData = {};
    });

    describe('getTokenResponse', function () {
        it('should return token response for valid credentials', async () => {
            clientConfiguration = new ClientConfiguration(authBaseUrl, clientId, clientSecret, accountId, scope);
            authService = new AuthService(clientConfiguration, apiClient, cacheService);

            let tokenResponse = await authService.getTokenResponse();

            expect(tokenResponse.access_token).not.be(undefined);
            expect(tokenResponse.rest_instance_url).not.be(undefined);
            expect(tokenResponse.soap_instance_url).not.be(undefined);
            expect(tokenResponse.token_type).not.be(undefined);
            expect(tokenResponse.expires_in).to.be.greaterThan(0);
        });
    });
    describe('getTokenResponse', function () {
        it('should return Unauthorized error for invalid clientId', async () => {
            let invalidClientConfiguration = new ClientConfiguration(authBaseUrl, 'invalidClientId', clientSecret, accountId, scope);
            authService = new AuthService(invalidClientConfiguration, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e.status).to.eql(401);
            }
        });
    });
    describe('getTokenResponse', function () {
        it('should return Unauthorized error for invalid clientSecret', async () => {
            let invalidClientConfiguration = new ClientConfiguration(authBaseUrl, clientId, 'invalidClientSecret', accountId, scope);
            authService = new AuthService(invalidClientConfiguration, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e.status).to.eql(401);
            }
        });
    });
    describe('getTokenResponse', function () {
        it('should return the same token response object when called multiple times', async () => {
            clientConfiguration = new ClientConfiguration(authBaseUrl, clientId, clientSecret, accountId, scope);
            authService = new AuthService(clientConfiguration, apiClient, cacheService);

            let tokenResponse1 = await authService.getTokenResponse();
            let tokenResponse2 = await authService.getTokenResponse();

            expect(tokenResponse1).to.eql(tokenResponse2);
        });
    });
    describe('getTokenResponse', function () {
        it('should call only one time the ApiClient callApi method when multiple instances are used', async () => {
            clientConfiguration = new ClientConfiguration(authBaseUrl, clientId, clientSecret, accountId, scope);

            let authService1 = new AuthService(clientConfiguration, apiClient, cacheService);
            let authService2 = new AuthService(clientConfiguration, apiClient, cacheService);

            let apiClientSpy = sinon.spy(apiClient, 'callApi');

            await authService1.getTokenResponse();
            await authService2.getTokenResponse();

            expect(apiClientSpy.calledOnce).to.eql(true);
        });
    });
});
