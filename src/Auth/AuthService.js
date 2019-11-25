const RuntimeInformationProvider = require('../RuntimeInformationProvider');

class AuthService{
    constructor(clientConfig, apiClient, cacheService){
        this.clientConfig = clientConfig;
        this.apiClient = apiClient;
        this.cacheService = cacheService;
    }

    async getTokenResponse() {

        let cacheKey = this.getCacheKey();
        let cachedTokenResponse = this.cacheService.get(cacheKey);

        if(!cachedTokenResponse){
            this.apiClient.basePath = this.clientConfig.authBaseUrl;

             let authRequestResponse = await this.apiClient.callApi('v2/token',
                 'POST',
                 {},
                 {},
                 {'User-Agent': new RuntimeInformationProvider().getUserAgentString()},
                 {},
                 this.getTokenRequestPayload(),
                 'oauth2',
                 [],
                 [],
                 Object,
                 'getTokenResponse'
             );

            this.cacheService.addOrUpdate(cacheKey, authRequestResponse.data);

            return authRequestResponse.data;
        }
        else{
            return cachedTokenResponse.tokenResponse;
        }
    }

    getCacheKey(){
        return this.clientConfig.clientId + '-' + this.clientConfig.accountId;
    }

    getTokenRequestPayload(){
        let tokenRequestPayload = {
            'client_id': this.clientConfig.clientId,
            'client_secret': this.clientConfig.clientSecret,
            'grant_type': 'client_credentials',
            'account_id': this.clientConfig.accountId
        };
        if (this.clientConfig.scope) {
            tokenRequestPayload['scope'] = this.clientConfig.scope;
        }
        return tokenRequestPayload;
    }
}

module.exports = AuthService;