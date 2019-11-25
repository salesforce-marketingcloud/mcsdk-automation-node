class EnvironmentVariableNotSetException extends Error {
    constructor(envVariable) {
        super();
        this.name = 'Salesforce.MarketingCloud.Exceptions.' + this.constructor.name;
        this.message = `Environment variable ${envVariable} is not set`;
    }
}

module.exports = EnvironmentVariableNotSetException;

