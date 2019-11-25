class Authentication {
    constructor(){
        this._accessToken = undefined;
        this._type = "oauth2";
    }

    get accessToken() {
        return this._accessToken;
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    get type() {
        return this._type;
    }
}

module.exports = Authentication;