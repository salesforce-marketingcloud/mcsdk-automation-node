const Client = require('../../src/Api/Client');
const SampleHelper = require('./SampleHelper');
const SalesforceMarketingCloud = require('../../src');

(async () => {
    // Replace 'CONTACT1_KEY' and 'CONTACT2_KEY' with real subscriber keys
    const CONTACT1_KEY = 'CONTACT1_KEY';
    const CONTACT2_KEY = 'CONTACT2_KEY';

    // Environment variables instantiated client:
    let client = new Client();

    // Get the asset, transactional messaging API instances:
    let assetApi = client.assetApi;
    let transactionalMessagingApi = client.transactionalMessagingApi;

    // Create email send definition:
    let emailDefinitionObject = await SampleHelper.createEmailDefinitionObject(assetApi);
    let createEmailDefinitionResult = await transactionalMessagingApi.createEmailDefinition(emailDefinitionObject);
    console.log('createEmailDefinitionResult: ' + JSON.stringify(createEmailDefinitionResult));

    // Send email to multiple recipients:
    let recipient1 = new SalesforceMarketingCloud.Recipient(CONTACT1_KEY);
    let recipient2 = new SalesforceMarketingCloud.Recipient(CONTACT2_KEY);
    recipient1.messageKey = SampleHelper.getUUID(5);
    recipient2.messageKey = SampleHelper.getUUID(5);
    let recipientsList = [recipient1, recipient2];

    let batchMessageRequestBody = new SalesforceMarketingCloud.SendEmailToMultipleRecipientsRequest(createEmailDefinitionResult.definitionKey, recipientsList);
    let sendEmailToMultipleRecipientsResult = await transactionalMessagingApi.sendEmailToMultipleRecipients(batchMessageRequestBody);
    console.log('sendEmailToMultipleRecipientsResult: ' + JSON.stringify(sendEmailToMultipleRecipientsResult));

    // Get the send status of the two email sends:
    let recipient1_sendStatus = await transactionalMessagingApi.getEmailSendStatusForRecipient(recipient1.messageKey);
    let recipient2_sendStatus = await transactionalMessagingApi.getEmailSendStatusForRecipient(recipient2.messageKey);
    console.log('send status for recipient1: ' + JSON.stringify(recipient1_sendStatus));
    console.log('send status for recipient2: ' + JSON.stringify(recipient2_sendStatus));
})();