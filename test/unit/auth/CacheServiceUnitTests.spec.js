const CacheService = require('../../../src/Auth/CacheService');
const TestHelper = require('../../TestHelper');

const expect = require('expect.js');
const sinon = require('sinon');

describe('CacheService', function () {
    const cacheKey = 'cacheKey';
    const date = new Date(2000, 1, 1).getTime();

    let cacheService;
    let clock;
    let tokenResponseData;

    before(() => {
        cacheService = new CacheService();
        tokenResponseData = TestHelper.createTokenResponseData();
    });

    beforeEach(() => {
        clock = sinon.useFakeTimers(date);
    });

    afterEach(() => {
        CacheService.cachedData = {};
        clock.restore();
    });

    describe('get', function () {
        it('should return null when passed parameter is not a key in the cache', function () {
            expect(cacheService.get(cacheKey)).to.eql(null);
        });
        it('should return the cached value when the passed parameter is a cache key and the corresponding cache not expired', function () {
            cacheService.addOrUpdate(cacheKey, tokenResponseData.data);

            let cachedTokenResponseData = cacheService.get(cacheKey);

            expect(cachedTokenResponseData.tokenResponse.access_token).to.eql('access_token');
            expect(cachedTokenResponseData.tokenResponse.expires_in).to.be.greaterThan(0);
            expect(cachedTokenResponseData.tokenResponse.rest_instance_url).to.eql('rest_instance_url');
            expect(cachedTokenResponseData.tokenResponse.soap_instance_url).to.eql('soap_instance_url');
            expect(cachedTokenResponseData.tokenResponse.scope).to.eql('scope');
            expect(cachedTokenResponseData.tokenResponse.token_type).to.eql('Bearer');
        });
        it('should return null when the passed parameter is a cache key and the corresponding cache is expired', function () {
            cacheService.addOrUpdate(cacheKey, tokenResponseData);
            let invalidCacheWindowInSeconds = 30;
            let validCacheWindowInMs = (tokenResponseData.expires_in - invalidCacheWindowInSeconds) * 1000;
            // making the cached data corresponding to cacheKey to have the expirationTime equal to the current time, thus invalid
            clock.tick(validCacheWindowInMs);

            let cachedTokenResponseData = cacheService.get(cacheKey);

            expect(cachedTokenResponseData).to.eql(null);
        });
    });
    describe('addOrUpdate', function () {
        it('should overwrite cached value when called two times for the same key', function () {
            cacheService.addOrUpdate(cacheKey, tokenResponseData.data);
            let firstCachedTokenResponseData = cacheService.get(cacheKey);
            cacheService.addOrUpdate(cacheKey, tokenResponseData.data);
            let secondCachedTokenResponseData = cacheService.get(cacheKey);

            expect(secondCachedTokenResponseData).not.to.equal(firstCachedTokenResponseData);
        });
    });
});