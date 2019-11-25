const EnvironmentVariableNotSetException = require('./Exception/EnvironmentVariableNotSetException');

class EnvironmentConfigProvider {
    get(envVariable, isMandatory = true) {
        let envVariableValue = process.env[envVariable];

        if (envVariableValue) {
            return envVariableValue;
        }
        if (isMandatory) {
            throw new EnvironmentVariableNotSetException(envVariable);
        }
        return null;
    }
}

module.exports = EnvironmentConfigProvider;