class CacheService {
    static cachedData = {};

    get(cacheKey) {
        if (CacheService.cachedData.hasOwnProperty(cacheKey) && this.isCachedValueValid(cacheKey)) {
            return CacheService.cachedData[cacheKey];
        }
        return null;
    }

    addOrUpdate(cacheKey, value) {
        let invalidCacheWindowInSeconds = 30;
        let expirationTime = new Date().getTime() + (value.expires_in - invalidCacheWindowInSeconds) * 1000;

        CacheService.cachedData[cacheKey] = {
            expirationTime: expirationTime,
            tokenResponse: value
        }
    }

    isCachedValueValid(cacheKey) {
        return new Date().getTime() < CacheService.cachedData[cacheKey].expirationTime;
    }
}

module.exports = CacheService;