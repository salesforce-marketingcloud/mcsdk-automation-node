const Client = require('../../src/Api/Client');
const TestHelper = require('../TestHelper');

(function (root, factory) {
    factory(require('expect.js'), require('../../src'));
}(this, function (expect, SalesforceMarketingCloud) {
    'use strict';

    describe('Client', function () {

        let client;
        let configMock;

        before(() => {
            configMock = TestHelper.createConfigProvider();
            client = new Client();
        });

        describe('assetApi getter', function () {
            it('should return a AssetApi instance', () => {
                let assetApi = client.assetApi;

                expect(assetApi).to.be.a(SalesforceMarketingCloud.AssetApi);
            });
            it('should return the same AssetApi instance ', () => {
                let assetApi1 = client.assetApi;
                let assetApi2 = client.assetApi;

                expect(assetApi1).to.be(assetApi2);
            });
        });
        describe('campaignApi getter', function () {
            it('should return a CampaignApi instance', () => {
                let campaignApi = client.campaignApi;

                expect(campaignApi).to.be.a(SalesforceMarketingCloud.CampaignApi);
            });
            it('should return the same CampaignApi instance', function () {
                let campaignApi1 = client.campaignApi;
                let campaignApi2 = client.campaignApi;

                expect(campaignApi1).to.be(campaignApi2);
            });
        });
        describe('transactionalMessagingApi getter', function () {
            it('should return a TransactionalMessagingApi instance', () => {
                let transactionalMessagingApi = client.transactionalMessagingApi;

                expect(transactionalMessagingApi).to.be.a(SalesforceMarketingCloud.TransactionalMessagingApi);
            });
            it('should return the same TransactionalMessagingApi instance', function () {
                let transactionalMessagingApi1 = client.transactionalMessagingApi;
                let transactionalMessagingApi2 = client.transactionalMessagingApi;

                expect(transactionalMessagingApi1).to.be(transactionalMessagingApi2);
            });
        });
        describe('constructor', function () {
            it('should set the config parameters from env. variables when called with no passed in parameter', function () {
                let configBackup = getEnvVariables();
                setEnvVariables(configMock);

                client = new Client();

                expect(client.getAuthBaseUrl()).to.eql(configMock.authBaseUrl);
                expect(client.getClientId()).to.eql(configMock.clientId);
                expect(client.getClientSecret()).to.eql(configMock.clientSecret);
                expect(client.getAccountId()).to.eql(configMock.accountId);
                expect(client.getScope()).to.eql(configMock.scope);

                setEnvVariables(configBackup);
            });
            it('should set the config parameters from the passed in parameter when used', function () {
                client = new Client(configMock);

                expect(client.getAuthBaseUrl()).to.eql(configMock.authBaseUrl);
                expect(client.getClientId()).to.eql(configMock.clientId);
                expect(client.getClientSecret()).to.eql(configMock.clientSecret);
                expect(client.getAccountId()).to.eql(configMock.accountId);
                expect(client.getScope()).to.eql(configMock.scope);
            });
        })
    });

    function setEnvVariables(config) {
        process.env.SFMC_AUTH_BASE_URL = config.authBaseUrl;
        process.env.SFMC_CLIENT_ID = config.clientId;
        process.env.SFMC_CLIENT_SECRET = config.clientSecret;
        process.env.SFMC_ACCOUNT_ID = config.accountId;
        process.env.SFMC_SCOPE = config.scope;
    }

    function getEnvVariables() {
        return{
            authBaseUrl: process.env.SFMC_AUTH_BASE_URL,
            clientId: process.env.SFMC_CLIENT_ID,
            clientSecret: process.env.SFMC_CLIENT_SECRET,
            accountId: process.env.SFMC_ACCOUNT_ID,
            scope: process.env.SFMC_SCOPE
        }
    }
}));
