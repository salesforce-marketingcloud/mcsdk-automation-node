const EnvironmentConfigProvider = require('../../../src/EnvironmentConfigProvider');

class ApiSutFactory{
    constructor(type){
        this._type = type;
    }
    create(){
        let environmentConfigProvider = new EnvironmentConfigProvider();

        let authBaseUrl = environmentConfigProvider.get('SFMC_AUTH_BASE_URL');
        let clientId = environmentConfigProvider.get('SFMC_CLIENT_ID');
        let clientSecret = environmentConfigProvider.get('SFMC_CLIENT_SECRET');
        let accountId = environmentConfigProvider.get('SFMC_ACCOUNT_ID');
        let scope = environmentConfigProvider.get('SFMC_SCOPE', false);

        return new this._type(authBaseUrl, clientId, clientSecret, accountId, scope);
    }
}

module.exports = ApiSutFactory;