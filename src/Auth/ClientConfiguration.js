class ClientConfiguration{
    constructor(authBaseUrl, clientId, clientSecret, accountId, scope){
        this._authBaseUrl = authBaseUrl;
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._accountId = accountId;
        this._scope = scope;
    }
    get authBaseUrl() {
        return this._authBaseUrl;
    }

    get clientId() {
        return this._clientId;
    }

    get clientSecret() {
        return this._clientSecret;
    }

    get accountId() {
        return this._accountId;
    }

    get scope() {
        return this._scope;
    }
}

module.exports = ClientConfiguration;