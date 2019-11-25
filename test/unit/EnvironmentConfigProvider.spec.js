const expect = require('expect.js');
const EnvironmentConfigProvider = require('../../src/EnvironmentConfigProvider');
const EnvironmentVariableNotSetException = require('../../src/Exception/EnvironmentVariableNotSetException');

describe('EnvironmentConfigProvider', function () {

    let environmentConfigProvider;

    before(() => {
        environmentConfigProvider = new EnvironmentConfigProvider();
    });

    describe('get', function () {
        it('should return a environment variable if set', function () {
            let authBaseUrlEnvVariableBackup = process.env.SFMC_AUTH_BASE_URL;
            process.env.SFMC_AUTH_BASE_URL = 'authBaseUrl';

            let authBaseUrlEnvVariable = environmentConfigProvider.get('SFMC_AUTH_BASE_URL');

            expect(authBaseUrlEnvVariable).to.eql('authBaseUrl');

            process.env.SFMC_AUTH_BASE_URL = authBaseUrlEnvVariableBackup;
        });
        it('should throw a EnvironmentVariableNotSetException for an unset, mandatory variable', function () {
            try {
                environmentConfigProvider.get('notExistingEnvironmentVariable');
            } catch (e) {
                expect(e).to.be.an(EnvironmentVariableNotSetException);
                expect(e.message).to.eql('Environment variable notExistingEnvironmentVariable is not set');

                return
            }
            expect().fail('Exception was not thrown');
        });
        it('should return null for an unset, not mandatory variable', function () {
            let authBaseUrlEnvVariable = environmentConfigProvider.get('notExistingEnvironmentVariable', false);

            expect(authBaseUrlEnvVariable).to.eql(null);
        });
    })
});