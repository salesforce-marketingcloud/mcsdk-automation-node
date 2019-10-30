const SalesforceMarketingCloud = require('../../src');

class SampleHelper {
    static createEmailAsset() {
        let customerKey = 'EmailAssetCustomerKey' + SampleHelper.getUUID(5);     // it has be unique
        let assetName = 'EmailAssetName' + SampleHelper.getUUID(5);              // it has be unique
        let assetDescription = 'EmailAsset created from automated Node.js SDK';

        const HTML_EMAIL_ASSET_TYPE_ID = 208;
        const ASSET_TYPE_NAME = 'htmlemail';
        let assetType = new SalesforceMarketingCloud.AssetType(HTML_EMAIL_ASSET_TYPE_ID, ASSET_TYPE_NAME);

        let asset = new SalesforceMarketingCloud.Asset(customerKey, assetType, assetName, assetDescription);

        asset.views = {
            'subjectline': {
                'content': 'Email generated from the Node.js SDK'
            },
            "html": {
                "content": "<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <title>Welcome to SFMC Transactional Messaging</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <img src=\"https://image.slidesharecdn.com/scalingdevelopereffortswithsalesforcemarketingcloudpptxv4-180803183610/95/scaling-developer-efforts-with-salesforce-marketing-cloud-31-638.jpg?cb=1533321419\"\n" +
                    "        alt=\"Let's Talk TM image\">\n" +
                    "</body>\n" +
                    "\n" +
                    "</html>"
            },
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