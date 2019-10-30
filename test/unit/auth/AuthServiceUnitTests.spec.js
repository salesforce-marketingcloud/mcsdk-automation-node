const CacheService = require('../../../src/Auth/CacheService');
const TestHelper = require('../../TestHelper');
const ApiClient = require('../../../src/ApiClient');
const AuthService = require('../../../src/Auth/AuthService');

const expect = require('expect.js');
const sinon = require('sinon');

const date = new Date(2000, 1, 1).getTime();

let cacheService;
let clientConfiguration;
let tokenResponseData;
let apiClientStub;
let clock;

describe('AuthService', function () {
    before(() => {
        clientConfiguration = TestHelper.createClientConfiguration();
        tokenResponseData = TestHelper.createTokenResponseData();
        cacheService = new CacheService();
    });

    beforeEach(() => {
        apiClientStub = sinon.createStubInstance(ApiClient, {
            callApi: tokenResponseData
        });
        clock = sinon.useFakeTimers(date);
    });

    afterEach(() => {
        CacheService.cachedData = {};
        apiClientStub.callApi.restore();
        clock.restore();
    });

    describe('getTokenResponse', function () {
        it('should execute the callApi method when there is no cached value for a cache key', async () => {
            let authService = new AuthService(clientConfiguration, apiClientStub, cacheService);

            await authService.getTokenResponse();

            expect(apiClientStub.callApi.calledOnce).to.eql(true);
        });
        it('should execute the callApi method when the cached value for a cache key is expired', async () => {
            let authService = new AuthService(clientConfiguration, apiClientStub, cacheService);

            await authService.getTokenResponse();
            let invalidCacheWindowInSeconds = 30;
            let validCacheWindowInMs = (tokenResponseData.expires_in - invalidCacheWindowInSeconds) * 1000;
            // making the cached data corresponding to cacheKey to have the expirationTime equal to the current time, thus invalid
            clock.tick(validCacheWindowInMs);
            await authService.getTokenResponse();

            expect(apiClientStub.callApi.calledTwice).to.eql(true);
        });
        it('should execute exactly one time the callApi method when multiple instances are used', async () => {
            let authService1 = new AuthService(clientConfiguration, apiClientStub, cacheService);
            let authService2 = new AuthService(clientConfiguration, apiClientStub, cacheService);

            await authService1.getTokenResponse();
            await authService2.getTokenResponse();

            expect(apiClientStub.callApi.calledOnce).to.eql(true);
        })
    });
});
