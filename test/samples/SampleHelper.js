const Asset = require('../../src/Model/Asset');
const AssetType = require('../../src/Model/AssetType');
const SalesforceMarketingCloud = require('../../src');

class SampleHelper {
    static createEmailAsset() {
        let customerKey = 'EmailAssetCustomerKey' + SampleHelper.getUUID(5);     // it has be unique
        let assetName = 'EmailAssetName' + SampleHelper.getUUID(5);              // it has be unique
        let assetDescription = 'EmailAsset created from automated Node.js SDK';

        const HTML_EMAIL_ASSET_TYPE_ID = 208;
        const ASSET_TYPE_NAME = 'htmlemail';
        let assetType = new AssetType(HTML_EMAIL_ASSET_TYPE_ID, ASSET_TYPE_NAME);

        let asset = new Asset(customerKey, assetType, assetName, assetDescription);

        /* An email asset has to have at least these minimal
        properties set in order for the send definition to become active*/

        asset.views = {
            'subjectline': {
                'content': 'New TS Subject Line'
            }
        };
        return asset;
    }

    static async createEmailDefinitionObject(assetApi) {
        /* Replace 'SUBSCRIBERS-LIST-KEY' with the key of
        one of your subscribers lists or use 'All Subscribers'*/
        const SUBSCRIBERS_LIST_KEY = 'SUBSCRIBERS_LIST_KEY';

        let asset = SampleHelper.createEmailAsset();
        let createAssetResponse = await assetApi.createAsset(asset);
        let customerKey = createAssetResponse.customerKey;
        let emailDefinitionName = 'EmailDefinitionName' + SampleHelper.getUUID(5);      // it has be unique
        let emailDefinitionKey = 'EmailDefinitionKey' + SampleHelper.getUUID(5);        // it has be unique
        let emailDefinitionContent = new SalesforceMarketingCloud.CreateEmailDefinitionContent(customerKey);
        let emailDefinitionSubscriptions = new SalesforceMarketingCloud.CreateEmailDefinitionSubscriptions(SUBSCRIBERS_LIST_KEY);

        return new SalesforceMarketingCloud.CreateEmailDefinitionRequest(emailDefinitionName, emailDefinitionKey, emailDefinitionContent, emailDefinitionSubscriptions);
    }

    static getUUID(length) {
        return Math.random().toString(16).substring(0, length);
    }
}

module.exports = SampleHelper;