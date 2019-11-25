const ApiSutFactory = require('./ApiSutFactory');
const EnvironmentConfigProvider = require('../../../src/EnvironmentConfigProvider');

(function(root, factory) {
  factory(require('expect.js'), require('../../../src'));
}(this, function(expect, SalesforceMarketingCloud) {
  'use strict';

  const JOHN_DOE_GMAIL_COM = "johnDoe@gmail.com";
  const JOHANNA_DOE_YAHOO_COM = "johannaDoe@yahoo.com";
  const HTML_EMAIL_ASSET_TYPE_ID = 208;

  let assetApiInstance;
  let transactionalMessagingApiInstance;
  let environmentConfigProvider;

  before(()=>{
    transactionalMessagingApiInstance = new ApiSutFactory(SalesforceMarketingCloud.TransactionalMessagingApi.prototype.constructor).create();
    assetApiInstance = new ApiSutFactory(SalesforceMarketingCloud.AssetApi.prototype.constructor).create();
    environmentConfigProvider = new EnvironmentConfigProvider();
  });

  describe('TransactionalMessagingApi', function() {
    describe('createEmailDefinition', function() {
      it('should call createEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);

        expect(createEmailDefinitionResult.name).to.eql(emailDefinition.name);
        expect(createEmailDefinitionResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(createEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('createSmsDefinition', function() {
      it('should call createSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();

        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);

        expect(createSmsDefinitionResult.definitionKey).to.eql(smsDefinition.definitionKey);
        expect(createSmsDefinitionResult.name).to.eql(smsDefinition.name);
        expect(createSmsDefinitionResult.subscriptions.shortCode).to.eql(smsDefinition.subscriptions.shortCode);
        expect(createSmsDefinitionResult.subscriptions.countryCode).to.eql(smsDefinition.subscriptions.countryCode);
        expect(createSmsDefinitionResult.content).to.eql(smsDefinition.content);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('deleteEmailDefinition', function() {
      it('should call deleteEmailDefinition successfully when definitionKey is valid', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);

        let deleteEmailDefinitionResult = await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(deleteEmailDefinitionResult.requestId).not.be(undefined);
        expect(deleteEmailDefinitionResult.deletedDefinitionKey).not.be(undefined);
        expect(deleteEmailDefinitionResult.message).to.eql("Success");
      });
    });
    describe('deleteEmailDefinition', function() {
      it('should not call deleteEmailDefinition successfully when definitionKey is invalid', async ()=> {
        let emailDefinitionToDeleteKey = 'NonExistingEmailDefinitionKey';

        try{
          await transactionalMessagingApiInstance.deleteEmailDefinition(emailDefinitionToDeleteKey);
        }
        catch (error) {
          expect(error.status).to.eql(404);
        }
      });
    });
    describe('deleteQueuedMessagesForEmailDefinition', function() {
      it('should call deleteQueuedMessagesForEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        emailDefinition.status = 'inactive';
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);

        let deleteQueuedMessagesForEmailDefinitionResult = await transactionalMessagingApiInstance.deleteQueuedMessagesForEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(deleteQueuedMessagesForEmailDefinitionResult.requestId).not.be(undefined);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('deleteQueuedMessagesForSmsDefinition', function() {
      it('should call deleteQueuedMessagesForSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        smsDefinition.status = 'inactive';
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);

        let deleteQueuedMessagesForSmsDefinitionResult = await transactionalMessagingApiInstance.deleteQueuedMessagesForSmsDefinition(createSmsDefinitionResult.definitionKey);

        expect(deleteQueuedMessagesForSmsDefinitionResult.requestId).not.be(undefined);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('deleteSmsDefinition', function() {
      it('should call deleteSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);

        let deleteSmsDefinitionResult = await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);

        expect(deleteSmsDefinitionResult.requestId).not.be(undefined);
        expect(deleteSmsDefinitionResult.deletedDefinitionKey).not.be(undefined);
        expect(deleteSmsDefinitionResult.message).to.eql("Success");
      });
    });
    describe('deleteSmsDefinition', function() {
      it('should not call deleteSmsDefinition successfully when definitionKey is invalid', async ()=> {
        let smsDefinitionToDeleteKey = 'NonExistingSmsDefinitionKey';

        try{
          await transactionalMessagingApiInstance.deleteSmsDefinition(smsDefinitionToDeleteKey);
        }
        catch (error) {
          expect(error.status).to.eql(404);
        }
      });
    });
    describe('getEmailDefinition', function() {
      it('should call getEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);

        let getEmailDefinitionsResult = await transactionalMessagingApiInstance.getEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(getEmailDefinitionsResult.name).to.eql(emailDefinition.name);
        expect(getEmailDefinitionsResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(getEmailDefinitionsResult.content.customerKey).to.eql(emailDefinition.content.customerKey);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('getEmailDefinitions', function() {
      it('should call getEmailDefinitions successfully', async ()=> {
        let opts = {
          'status': undefined,
          'orderBy': undefined,
          'pageSize': undefined,
          'page': undefined
        };

        let getEmailDefinitionsResult = await transactionalMessagingApiInstance.getEmailDefinitions(opts);

        expect(getEmailDefinitionsResult.requestId).not.be(undefined);
        expect(getEmailDefinitionsResult.definitions).not.be(undefined);
        expect(getEmailDefinitionsResult.count).not.be(undefined);
        expect(getEmailDefinitionsResult.page).not.be(undefined);
        expect(getEmailDefinitionsResult.pageSize).not.be(undefined);
      });
    });
    describe('getEmailSendStatusForRecipient', function() {
      it('should call getEmailSendStatusForRecipient successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);
        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(createEmailDefinitionResult.definitionKey, recipient);
        let messageKey = getUUID();
        await transactionalMessagingApiInstance.sendEmailToSingleRecipient(messageKey, messageRequestBody);

        let getEmailSendStatusForRecipientResult = await transactionalMessagingApiInstance.getEmailSendStatusForRecipient(messageKey);

        let eventCategoryTypes = ['TransactionalSendEvents.EmailSent', 'TransactionalSendEvents.EmailQueued', 'TransactionalSendEvents.EmailNotSent'];

        expect(getEmailSendStatusForRecipientResult.requestId).not.be(undefined);
        expect(getEmailSendStatusForRecipientResult.timestamp).not.be(undefined);
        expect(eventCategoryTypes).to.contain(getEmailSendStatusForRecipientResult.eventCategoryType);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('getEmailsNotSentToRecipients', function() {
      it('should call getEmailsNotSentToRecipients successfully', async ()=> {
        let opts = {
          'pageSize':undefined,
          'lastEventId':undefined
        };

        let getEmailsNotSentToRecipientsResponse = await transactionalMessagingApiInstance.getEmailsNotSentToRecipients('notSent', opts);

        expect(getEmailsNotSentToRecipientsResponse.requestId).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.lastEventID).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.messages).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.count).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.pageSize).not.be(undefined);
      });
    });
    describe('getQueueMetricsForEmailDefinition', function() {
      it('should call getQueueMetricsForEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);

        let getQueueMetricsForEmailDefinitionResult = await transactionalMessagingApiInstance.getQueueMetricsForEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(getQueueMetricsForEmailDefinitionResult.requestId);
        expect(getQueueMetricsForEmailDefinitionResult.count);
        expect(getQueueMetricsForEmailDefinitionResult.ageSeconds);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('getQueueMetricsForSmsDefinition', function() {
      it('should call getQueueMetricsForSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);

        let getQueueMetricsForSmsDefinitionResult = await transactionalMessagingApiInstance.getQueueMetricsForSmsDefinition(createSmsDefinitionResult.definitionKey);

        expect(getQueueMetricsForSmsDefinitionResult.requestId);
        expect(getQueueMetricsForSmsDefinitionResult.count);
        expect(getQueueMetricsForSmsDefinitionResult.ageSeconds);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('getSMSsNotSentToRecipients', function() {
      it('should call getSMSsNotSentToRecipients successfully', async ()=> {
        let opts = {
          'pageSize':undefined,
          'lastEventId':undefined
        };

        let getSMSsNotSentToRecipientsResponse = await transactionalMessagingApiInstance.getSMSsNotSentToRecipients('notSent', opts);

        expect(getSMSsNotSentToRecipientsResponse.requestId).not.be(undefined);
        expect(getSMSsNotSentToRecipientsResponse.lastEventID).not.be(undefined);
        expect(getSMSsNotSentToRecipientsResponse.messages).not.be(undefined);
        expect(getSMSsNotSentToRecipientsResponse.count).not.be(undefined);
        expect(getSMSsNotSentToRecipientsResponse.pageSize).not.be(undefined);
      });
    });
    describe('getSmsDefinition', function() {
      it('should call getSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);

        let getSmsDefinitionResult = await transactionalMessagingApiInstance.getSmsDefinition(createSmsDefinitionResult.definitionKey);

        expect(getSmsDefinitionResult.definitionKey).to.eql(smsDefinition.definitionKey);
        expect(getSmsDefinitionResult.name).to.eql(smsDefinition.name);
        expect(getSmsDefinitionResult.subscriptions.shortCode).to.eql(smsDefinition.subscriptions.shortCode);
        expect(getSmsDefinitionResult.subscriptions.countryCode).to.eql(smsDefinition.subscriptions.countryCode);
        expect(getSmsDefinitionResult.content).to.eql(smsDefinition.content);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('getSmsDefinitions', function() {
      it('should call getSmsDefinitions successfully', async ()=> {
        let opts = {
          'status':undefined,
          'orderBy':undefined,
          'pageSize':undefined,
          'page':undefined
        };

        let getSmsDefinitionsResult = await transactionalMessagingApiInstance.getSmsDefinitions(opts);

        expect(getSmsDefinitionsResult.requestId).not.be(undefined);
        expect(getSmsDefinitionsResult.definitions).not.be(undefined);
        expect(getSmsDefinitionsResult.count).not.be(undefined);
        expect(getSmsDefinitionsResult.page).not.be(undefined);
        expect(getSmsDefinitionsResult.pageSize).not.be(undefined);
      });
    });
    describe('getSmsSendStatusForRecipient', function() {
      it('should call getSmsSendStatusForRecipient successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);
        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendSmsToSingleRecipientRequest(createSmsDefinitionResult.definitionKey, recipient);
        let messageKey = getUUID();
        await transactionalMessagingApiInstance.sendSmsToSingleRecipient(messageKey, messageRequestBody);

        let getSmsSendStatusForRecipientResult = await transactionalMessagingApiInstance.getSmsSendStatusForRecipient(messageKey);

        let eventCategoryTypes = ['TransactionalSendEvents.SMSSent', 'TransactionalSendEvents.SMSQueued', 'TransactionalSendEvents.SMSNotSent'];

        expect(getSmsSendStatusForRecipientResult.requestId).not.be(undefined);
        expect(getSmsSendStatusForRecipientResult.timestamp).not.be(undefined);
        expect(eventCategoryTypes).to.contain(getSmsSendStatusForRecipientResult.eventCategoryType);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('partiallyUpdateEmailDefinition', function() {
      it('should call partiallyUpdateEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);
        let updatedDefinitionDescription = new SalesforceMarketingCloud.UpdateEmailDefinitionRequest();
        updatedDefinitionDescription.description = 'Updated email definition description';

        let partiallyUpdateEmailDefinitionResult = await transactionalMessagingApiInstance.partiallyUpdateEmailDefinition(createEmailDefinitionResult.definitionKey, updatedDefinitionDescription);

        expect(partiallyUpdateEmailDefinitionResult.description).to.eql(updatedDefinitionDescription.description);

        expect(partiallyUpdateEmailDefinitionResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(partiallyUpdateEmailDefinitionResult.name).to.eql(emailDefinition.name);
        expect(partiallyUpdateEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);
        expect(partiallyUpdateEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('partiallyUpdateSmsDefinition', function() {
      it('should call partiallyUpdateSmsDefinition successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);
        let updatedDefinitionDescription = new SalesforceMarketingCloud.UpdateSmsDefinitionRequest();
        updatedDefinitionDescription.description = 'Updated SMS definition description';

        let partiallyUpdateSmsDefinitionResult = await transactionalMessagingApiInstance.partiallyUpdateSmsDefinition(createSmsDefinitionResult.definitionKey, updatedDefinitionDescription);

        expect(partiallyUpdateSmsDefinitionResult.description).to.eql(updatedDefinitionDescription.description);

        expect(partiallyUpdateSmsDefinitionResult.definitionKey).to.eql(smsDefinition.definitionKey);
        expect(partiallyUpdateSmsDefinitionResult.name).to.eql(smsDefinition.name);
        expect(partiallyUpdateSmsDefinitionResult.content.customerKey).to.eql(smsDefinition.content.customerKey);
        expect(partiallyUpdateSmsDefinitionResult.content.customerKey).to.eql(smsDefinition.content.customerKey);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('sendEmailToMultipleRecipients', function() {
     it('should call sendEmailToMultipleRecipients successfully', async ()=> {
          let emailDefinition = await createEmailDefinitionObject();
          let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);
          let recipient1 = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
          let recipient2 = new SalesforceMarketingCloud.Recipient(JOHANNA_DOE_YAHOO_COM);
          let recipientsList = [recipient1, recipient2];
          let batchMessageRequestBody = new SalesforceMarketingCloud.SendEmailToMultipleRecipientsRequest(createEmailDefinitionResult.definitionKey, recipientsList);

          let sendEmailToMultipleRecipientsResult = await transactionalMessagingApiInstance.sendEmailToMultipleRecipients(batchMessageRequestBody);

          expect(sendEmailToMultipleRecipientsResult.requestId).not.be(undefined);
          expect(sendEmailToMultipleRecipientsResult.errorcode).not.be(undefined);
          expect(sendEmailToMultipleRecipientsResult.responses).not.be(undefined);

          await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('sendEmailToSingleRecipient', function() {
      it('should call sendEmailToSingleRecipient successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(emailDefinition);
        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(createEmailDefinitionResult.definitionKey, recipient);
        let messageKey = getUUID();

        let sendEmailToSingleRecipientResult = await transactionalMessagingApiInstance.sendEmailToSingleRecipient(messageKey, messageRequestBody);

        expect(sendEmailToSingleRecipientResult.requestId).not.be(undefined);
        expect(sendEmailToSingleRecipientResult.errorcode).not.be(undefined);
        expect(sendEmailToSingleRecipientResult.responses).not.be(undefined);

        await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);
      });
    });
    describe('sendSmsToMultipleRecipients', function() {
      it('should call sendSmsToMultipleRecipients successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);
        let recipient1 = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let recipient2 = new SalesforceMarketingCloud.Recipient(JOHANNA_DOE_YAHOO_COM);
        let recipientsList = [recipient1, recipient2];
        let batchMessageRequestBody = new SalesforceMarketingCloud.SendSmsToMultipleRecipientsRequest(createSmsDefinitionResult.definitionKey, recipientsList);

        let sendSmsToMultipleRecipientsResult = await transactionalMessagingApiInstance.sendSmsToMultipleRecipients(batchMessageRequestBody);

        expect(sendSmsToMultipleRecipientsResult.requestId).not.be(undefined);
        expect(sendSmsToMultipleRecipientsResult.errorcode).not.be(undefined);
        expect(sendSmsToMultipleRecipientsResult.responses).not.be(undefined);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
    describe('sendSmsToSingleRecipient', function() {
      it('should call sendSmsToSingleRecipient successfully', async ()=> {
        let smsDefinition = createSmsDefinitionObject();
        let createSmsDefinitionResult = await transactionalMessagingApiInstance.createSmsDefinition(smsDefinition);
        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendSmsToSingleRecipientRequest(createSmsDefinitionResult.definitionKey, recipient);
        let messageKey = getUUID();

        let sendSmsToSingleRecipientResult = await transactionalMessagingApiInstance.sendSmsToSingleRecipient(messageKey, messageRequestBody);

        expect(sendSmsToSingleRecipientResult.requestId).not.be(undefined);
        expect(sendSmsToSingleRecipientResult.errorcode).not.be(undefined);
        expect(sendSmsToSingleRecipientResult.responses).not.be(undefined);

        await transactionalMessagingApiInstance.deleteSmsDefinition(createSmsDefinitionResult.definitionKey);
      });
    });
  });

  function createSmsDefinitionObject() {
      let shortCode = environmentConfigProvider.get('SFMC_SHORT_CODE');
      let countryCode = environmentConfigProvider.get('SFMC_COUNTRY_CODE');
      let keyword = environmentConfigProvider.get('SFMC_KEYWORD');
      let smsDefinitionSubscriptions = new SalesforceMarketingCloud.SmsDefinitionSubscriptions(shortCode, countryCode);
      smsDefinitionSubscriptions.keyword = keyword;

      let smsDefinitionContent = new SalesforceMarketingCloud.SmsDefinitionContent('SMS definition message content');

      let smsDefinitionKey = getUUID(10);
      let smsDefinitionName = 'SMSdefinition ' + getUUID(10);

      return new SalesforceMarketingCloud.SmsDefinition(smsDefinitionKey, smsDefinitionName, smsDefinitionContent, smsDefinitionSubscriptions);
    }

  async function createEmailDefinitionObject() {
    let asset = createAssetObject();

    let createAssetResponse = await assetApiInstance.createAsset(asset);
    let customerKey = createAssetResponse.customerKey;

    let emailDefinitionName = 'EmailDefinition ' + getUUID(10);
    let emailDefinitionKey= 'EmailDefinition ' + getUUID(10);
    let emailDefinitionContent = new SalesforceMarketingCloud.EmailDefinitionContent(customerKey);
    let emailDefinitionSubscriptions = new SalesforceMarketingCloud.EmailDefinitionSubscriptions("All Subscribers");

    return new SalesforceMarketingCloud.EmailDefinition(emailDefinitionName, emailDefinitionKey, emailDefinitionContent, emailDefinitionSubscriptions);
  }

  function createAssetObject() {
    let customerKey = getUUID(10);
    let assetType = new SalesforceMarketingCloud.AssetType(HTML_EMAIL_ASSET_TYPE_ID, 'htmlemail');
    let assetName = 'Asset ' + getUUID(10);
    let assetDescription = 'Asset from Automated Node.js SDK';
    let asset = new SalesforceMarketingCloud.Asset(customerKey, assetType, assetName, assetDescription);

    asset.views = {
      'subjectline':{
        'content':'New TS Subject Line'
      }
    };

    return asset;
  }

  function getUUID(length){

    return Math.random().toString(16).substring(0, length);
  }
}));
