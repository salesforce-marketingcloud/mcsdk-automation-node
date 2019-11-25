const ClientConfiguration = require('../Auth/ClientConfiguration');
const RuntimeInformationProvider = require('../RuntimeInformationProvider');
const ApiClient = require('../ApiClient');
const AuthService = require('../Auth/AuthService');
const OAuth2ApiClient = require('../OAuth2ApiClient');
const CacheService = require('../Auth/CacheService');

class BaseApi {
    constructor(authBaseUrl, clientId, clientSecret, accountId, scope){
        this.clientConfiguration = new ClientConfiguration(authBaseUrl, clientId, clientSecret, accountId, scope);
        this.runtimeInformationProvider = new RuntimeInformationProvider();
        let apiClient = new ApiClient(this.runtimeInformationProvider);
        let cacheService = new CacheService();

        this.authService = new AuthService(this.clientConfiguration, apiClient, cacheService);
        this.apiClient = new OAuth2ApiClient(this.authService, this.runtimeInformationProvider);
    }
}

module.exports = BaseApi;