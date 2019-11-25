const Client = require('../../src/Api/Client');
const SampleHelper = require('./SampleHelper');
const SalesforceMarketingCloud = require('../../src');

(async () => {
    // Replace 'CONTACT_KEY' with a real subscriber key
    const CONTACT_KEY = 'CONTACT_KEY';

    // Replace the values in the following object with your Marketing Cloud account credentials
    const CONFIGURATION_OBJECT = {
        authBaseUrl: 'YOUR AUTH BASE URL',
        clientId: 'YOUR CLIENT ID',
        clientSecret: 'YOUR CLIENT SECRET',
        accountId: 'YOUR ACCOUNT ID'
    };

    // Configuration object instantiated client:
    let client = new Client(CONFIGURATION_OBJECT);

    // Get the the asset, transactional messaging API instances:
    let assetApi = client.assetApi;
    let transactionalMessagingApi = client.transactionalMessagingApi;

    // Create email send definition:
    let emailDefinitionObject = await SampleHelper.createEmailDefinitionObject(assetApi);
    let createEmailDefinitionResult = await transactionalMessagingApi.createEmailDefinition(emailDefinitionObject);
    console.log('createEmailDefinitionResult: ' + JSON.stringify(createEmailDefinitionResult));

    // Get email send definition:
    let getEmailDefinitionsResult = await transactionalMessagingApi.getEmailDefinition(createEmailDefinitionResult.definitionKey);
    console.log('getEmailDefinitionsResult: ' + JSON.stringify(getEmailDefinitionsResult));

    // Update email send definition:
    let updatedDefinitionDescription = new SalesforceMarketingCloud.UpdateEmailDefinitionRequest();
    updatedDefinitionDescription.description = 'Updated email definition description';

    let partiallyUpdateEmailDefinitionResult = await transactionalMessagingApi.partiallyUpdateEmailDefinition(createEmailDefinitionResult.definitionKey, updatedDefinitionDescription);
    console.log('partiallyUpdateEmailDefinitionResult: ' + JSON.stringify(partiallyUpdateEmailDefinitionResult));

    // Get email send definition:
    getEmailDefinitionsResult = await transactionalMessagingApi.getEmailDefinition(createEmailDefinitionResult.definitionKey);
    console.log('getEmailDefinitionsResult: ' + JSON.stringify(getEmailDefinitionsResult));

    // Send email to single recipient:
    let recipient = new SalesforceMarketingCloud.Recipient(CONTACT_KEY);

    let messageKey = SampleHelper.getUUID(5);
    let messageRequestBody = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(createEmailDefinitionResult.definitionKey, recipient);
    let sendEmailToSingleRecipientResult = await transactionalMessagingApi.sendEmailToSingleRecipient(messageKey, messageRequestBody);
    console.log('sendEmailToSingleRecipientResult: ' + JSON.stringify(sendEmailToSingleRecipientResult));

    // Get the send status of the email send:
    let recipientSendStatus = await transactionalMessagingApi.getEmailSendStatusForRecipient(messageKey);
    console.log('recipientSendStatus: ' + JSON.stringify(recipientSendStatus));
})();