# SalesforceMarketingCloud.TransactionalMessagingApi

All URIs are relative to *https://www.exacttargetapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailDefinition**](TransactionalMessagingApi.md#createEmailDefinition) | **POST** /messaging/v1/email/definitions/ | createEmailDefinition
[**createSmsDefinition**](TransactionalMessagingApi.md#createSmsDefinition) | **POST** /messaging/v1/sms/definitions | createSmsDefinition
[**deleteEmailDefinition**](TransactionalMessagingApi.md#deleteEmailDefinition) | **DELETE** /messaging/v1/email/definitions/{definitionKey} | deleteEmailDefinition
[**deleteQueuedMessagesForEmailDefinition**](TransactionalMessagingApi.md#deleteQueuedMessagesForEmailDefinition) | **DELETE** /messaging/v1/email/definitions/{definitionKey}/queue | deleteQueuedMessagesForEmailDefinition
[**deleteQueuedMessagesForSmsDefinition**](TransactionalMessagingApi.md#deleteQueuedMessagesForSmsDefinition) | **DELETE** /messaging/v1/sms/definitions/{definitionKey}/queue | deleteQueuedMessagesForSmsDefinition
[**deleteSmsDefinition**](TransactionalMessagingApi.md#deleteSmsDefinition) | **DELETE** /messaging/v1/sms/definitions/{definitionKey} | deleteSmsDefinition
[**getEmailDefinition**](TransactionalMessagingApi.md#getEmailDefinition) | **GET** /messaging/v1/email/definitions/{definitionKey} | getEmailDefinition
[**getEmailDefinitions**](TransactionalMessagingApi.md#getEmailDefinitions) | **GET** /messaging/v1/email/definitions/ | getEmailDefinitions
[**getEmailSendStatusForRecipient**](TransactionalMessagingApi.md#getEmailSendStatusForRecipient) | **GET** /messaging/v1/email/messages/{messageKey} | getEmailSendStatusForRecipient
[**getEmailsNotSentToRecipients**](TransactionalMessagingApi.md#getEmailsNotSentToRecipients) | **GET** /messaging/v1/email/messages/ | getEmailsNotSentToRecipients
[**getQueueMetricsForEmailDefinition**](TransactionalMessagingApi.md#getQueueMetricsForEmailDefinition) | **GET** /messaging/v1/email/definitions/{definitionKey}/queue | getQueueMetricsForEmailDefinition
[**getQueueMetricsForSmsDefinition**](TransactionalMessagingApi.md#getQueueMetricsForSmsDefinition) | **GET** /messaging/v1/sms/definitions/{definitionKey}/queue | getQueueMetricsForSmsDefinition
[**getSMSsNotSentToRecipients**](TransactionalMessagingApi.md#getSMSsNotSentToRecipients) | **GET** /messaging/v1/sms/messages/ | getSMSsNotSentToRecipients
[**getSmsDefinition**](TransactionalMessagingApi.md#getSmsDefinition) | **GET** /messaging/v1/sms/definitions/{definitionKey} | getSmsDefinition
[**getSmsDefinitions**](TransactionalMessagingApi.md#getSmsDefinitions) | **GET** /messaging/v1/sms/definitions | getSmsDefinitions
[**getSmsSendStatusForRecipient**](TransactionalMessagingApi.md#getSmsSendStatusForRecipient) | **GET** /messaging/v1/sms/messages/{messageKey} | getSmsSendStatusForRecipient
[**partiallyUpdateEmailDefinition**](TransactionalMessagingApi.md#partiallyUpdateEmailDefinition) | **PATCH** /messaging/v1/email/definitions/{definitionKey} | partiallyUpdateEmailDefinition
[**partiallyUpdateSmsDefinition**](TransactionalMessagingApi.md#partiallyUpdateSmsDefinition) | **PATCH** /messaging/v1/sms/definitions/{definitionKey} | partiallyUpdateSmsDefinition
[**sendEmailToMultipleRecipients**](TransactionalMessagingApi.md#sendEmailToMultipleRecipients) | **POST** /messaging/v1/email/messages/ | sendEmailToMultipleRecipients
[**sendEmailToSingleRecipient**](TransactionalMessagingApi.md#sendEmailToSingleRecipient) | **POST** /messaging/v1/email/messages/{messageKey} | sendEmailToSingleRecipient
[**sendSmsToMultipleRecipients**](TransactionalMessagingApi.md#sendSmsToMultipleRecipients) | **POST** /messaging/v1/sms/messages/ | sendSmsToMultipleRecipients
[**sendSmsToSingleRecipient**](TransactionalMessagingApi.md#sendSmsToSingleRecipient) | **POST** /messaging/v1/sms/messages/{messageKey} | sendSmsToSingleRecipient


<a name="createEmailDefinition"></a>
# **createEmailDefinition**
> CreateEmailDefinitionRequest createEmailDefinition(body)

createEmailDefinition

Creates the definition for an email.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let body = new SalesforceMarketingCloud.CreateEmailDefinitionRequest(); // CreateEmailDefinitionRequest | JSON Parameters

apiInstance.createEmailDefinition(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateEmailDefinitionRequest**](CreateEmailDefinitionRequest.md)| JSON Parameters | 

### Return type

[**CreateEmailDefinitionRequest**](CreateEmailDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createSmsDefinition"></a>
# **createSmsDefinition**
> CreateSmsDefinitionRequest createSmsDefinition(body)

createSmsDefinition

Creates the definition for an SMS.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let body = new SalesforceMarketingCloud.CreateSmsDefinitionRequest(); // CreateSmsDefinitionRequest | JSON Parameters

apiInstance.createSmsDefinition(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSmsDefinitionRequest**](CreateSmsDefinitionRequest.md)| JSON Parameters | 

### Return type

[**CreateSmsDefinitionRequest**](CreateSmsDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteEmailDefinition"></a>
# **deleteEmailDefinition**
> DeleteSendDefinitionResponse deleteEmailDefinition(definitionKey)

deleteEmailDefinition

Deletes an email definition. You can&#39;t restore a deleted definition. The deleted definition is archived, and a delete location of the definition key is provided in the response for reference. You can reuse a deleted definition key because the information associated with it is copied to a new unique identifier.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition to delete

apiInstance.deleteEmailDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition to delete | 

### Return type

[**DeleteSendDefinitionResponse**](DeleteSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteQueuedMessagesForEmailDefinition"></a>
# **deleteQueuedMessagesForEmailDefinition**
> DeleteQueuedMessagesForSendDefinitionResponse deleteQueuedMessagesForEmailDefinition(definitionKey)

deleteQueuedMessagesForEmailDefinition

Deletes the queue for an email definition. The email definition must be in inactive status.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the email definition

apiInstance.deleteQueuedMessagesForEmailDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the email definition | 

### Return type

[**DeleteQueuedMessagesForSendDefinitionResponse**](DeleteQueuedMessagesForSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteQueuedMessagesForSmsDefinition"></a>
# **deleteQueuedMessagesForSmsDefinition**
> DeleteQueuedMessagesForSendDefinitionResponse deleteQueuedMessagesForSmsDefinition(definitionKey)

deleteQueuedMessagesForSmsDefinition

Deletes the queue for a SMS definition. The SMS definition must be in inactive status.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the SMS definition

apiInstance.deleteQueuedMessagesForSmsDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the SMS definition | 

### Return type

[**DeleteQueuedMessagesForSendDefinitionResponse**](DeleteQueuedMessagesForSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSmsDefinition"></a>
# **deleteSmsDefinition**
> DeleteSendDefinitionResponse deleteSmsDefinition(definitionKey)

deleteSmsDefinition

Deletes an sms definition. You can&#39;t restore a deleted definition. The deleted definition is archived, and a delete location of the definition key is provided in the response for reference. You can reuse a deleted definition key because the information associated with it is copied to a new unique identifier.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition to delete

apiInstance.deleteSmsDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition to delete | 

### Return type

[**DeleteSendDefinitionResponse**](DeleteSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEmailDefinition"></a>
# **getEmailDefinition**
> CreateEmailDefinitionRequest getEmailDefinition(definitionKey)

getEmailDefinition

Gets email definition configuration details for a definition key.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition to get

apiInstance.getEmailDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition to get | 

### Return type

[**CreateEmailDefinitionRequest**](CreateEmailDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEmailDefinitions"></a>
# **getEmailDefinitions**
> GetEmailDefinitionsResponse getEmailDefinitions(opts)

getEmailDefinitions

Gets a list of email definitions.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let opts = { 
  'status': "status_example", // String | Filter by status type. Accepted values are active, inactive, or deleted. Valid operations are eq and neq.
  'pageSize': 8.14, // Number | Number of definitions, which are array elements, to return per paged response.
  'page': 8.14, // Number | Page number to return.
  'orderBy': "orderBy_example" // String | Sort by a dimension. You can sort by only one dimension. Accepted values are definitionKey, name, createdDate, modifiedDate, and status.
};
apiInstance.getEmailDefinitions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Filter by status type. Accepted values are active, inactive, or deleted. Valid operations are eq and neq. | [optional] 
 **pageSize** | **Number**| Number of definitions, which are array elements, to return per paged response. | [optional] 
 **page** | **Number**| Page number to return. | [optional] 
 **orderBy** | **String**| Sort by a dimension. You can sort by only one dimension. Accepted values are definitionKey, name, createdDate, modifiedDate, and status. | [optional] 

### Return type

[**GetEmailDefinitionsResponse**](GetEmailDefinitionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEmailSendStatusForRecipient"></a>
# **getEmailSendStatusForRecipient**
> GetDefinitionSendStatusForRecipientResponse getEmailSendStatusForRecipient(messageKey)

getEmailSendStatusForRecipient

Gets the send status for a message. Because this route is rate-limited, use it for infrequent verification of a messageKey. To collect send status at scale, subscribe to transactional send events using the Event Notification Service.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let messageKey = "messageKey_example"; // String | Unique identifier to track message send status. You must provide it in singleton requests using the recipient attribute. To provide it in batch requests, use the recipients array attribute. If you don’t provide the message key for recipients, it’s generated in the response.

apiInstance.getEmailSendStatusForRecipient(messageKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageKey** | **String**| Unique identifier to track message send status. You must provide it in singleton requests using the recipient attribute. To provide it in batch requests, use the recipients array attribute. If you don’t provide the message key for recipients, it’s generated in the response. | 

### Return type

[**GetDefinitionSendStatusForRecipientResponse**](GetDefinitionSendStatusForRecipientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEmailsNotSentToRecipients"></a>
# **getEmailsNotSentToRecipients**
> GetDefinitionsNotSentToRecipientsResponse getEmailsNotSentToRecipients(type, opts)

getEmailsNotSentToRecipients

Gets a paginated list of messages that were not sent, ordered from oldest to newest.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let type = "type_example"; // String | Only notSent is supported.

let opts = { 
  'pageSize': 56, // Number | Number of messageKeys (array elements) to return per response page.
  'lastEventId': 56 // Number | Event ID from which you want the response to start. To obtain the initial event ID, submit a request without a lastEventId. The events in the response are listed top to bottom from oldest to newest.
};
apiInstance.getEmailsNotSentToRecipients(type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Only notSent is supported. | 
 **pageSize** | **Number**| Number of messageKeys (array elements) to return per response page. | [optional] 
 **lastEventId** | **Number**| Event ID from which you want the response to start. To obtain the initial event ID, submit a request without a lastEventId. The events in the response are listed top to bottom from oldest to newest. | [optional] 

### Return type

[**GetDefinitionsNotSentToRecipientsResponse**](GetDefinitionsNotSentToRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getQueueMetricsForEmailDefinition"></a>
# **getQueueMetricsForEmailDefinition**
> GetQueueMetricsForSendDefinitionResponse getQueueMetricsForEmailDefinition(definitionKey)

getQueueMetricsForEmailDefinition

Gets metrics for the messages of an email definition. Applies to messages that are accepted but not yet processed.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the email definition

apiInstance.getQueueMetricsForEmailDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the email definition | 

### Return type

[**GetQueueMetricsForSendDefinitionResponse**](GetQueueMetricsForSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getQueueMetricsForSmsDefinition"></a>
# **getQueueMetricsForSmsDefinition**
> GetQueueMetricsForSendDefinitionResponse getQueueMetricsForSmsDefinition(definitionKey)

getQueueMetricsForSmsDefinition

Gets metrics for the messages of a SMS definition. Applies to messages that are accepted but not yet processed.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the SMS definition

apiInstance.getQueueMetricsForSmsDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the SMS definition | 

### Return type

[**GetQueueMetricsForSendDefinitionResponse**](GetQueueMetricsForSendDefinitionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSMSsNotSentToRecipients"></a>
# **getSMSsNotSentToRecipients**
> GetDefinitionsNotSentToRecipientsResponse getSMSsNotSentToRecipients(type, opts)

getSMSsNotSentToRecipients

Gets a paginated list of messages that were not sent, ordered from oldest to newest.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let type = "type_example"; // String | Only notSent is supported.

let opts = { 
  'pageSize': 56, // Number | Number of messageKeys (array elements) to return per response page.
  'lastEventId': 56 // Number | Event ID from which you want the response to start. To obtain the initial event ID, submit a request without a lastEventId. The events in the response are listed top to bottom from oldest to newest.
};
apiInstance.getSMSsNotSentToRecipients(type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Only notSent is supported. | 
 **pageSize** | **Number**| Number of messageKeys (array elements) to return per response page. | [optional] 
 **lastEventId** | **Number**| Event ID from which you want the response to start. To obtain the initial event ID, submit a request without a lastEventId. The events in the response are listed top to bottom from oldest to newest. | [optional] 

### Return type

[**GetDefinitionsNotSentToRecipientsResponse**](GetDefinitionsNotSentToRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSmsDefinition"></a>
# **getSmsDefinition**
> CreateSmsDefinitionRequest getSmsDefinition(definitionKey)

getSmsDefinition

Gets SMS definition configuration details for a definition key.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition to get

apiInstance.getSmsDefinition(definitionKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition to get | 

### Return type

[**CreateSmsDefinitionRequest**](CreateSmsDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSmsDefinitions"></a>
# **getSmsDefinitions**
> GetSmsDefinitionsResponse getSmsDefinitions(opts)

getSmsDefinitions

Gets a list of SMS definitions.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let opts = { 
  'status': "status_example", // String | Filter by status type. Accepted values are active, inactive, or deleted. Valid operations are eq and neq.
  'pageSize': 8.14, // Number | Number of definitions, which are array elements, to return per paged response.
  'page': 8.14, // Number | Page number to return.
  'orderBy': "orderBy_example" // String | Sort by a dimension. You can sort by only one dimension. Accepted values are definitionKey, name, createdDate, modifiedDate, and status.
};
apiInstance.getSmsDefinitions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Filter by status type. Accepted values are active, inactive, or deleted. Valid operations are eq and neq. | [optional] 
 **pageSize** | **Number**| Number of definitions, which are array elements, to return per paged response. | [optional] 
 **page** | **Number**| Page number to return. | [optional] 
 **orderBy** | **String**| Sort by a dimension. You can sort by only one dimension. Accepted values are definitionKey, name, createdDate, modifiedDate, and status. | [optional] 

### Return type

[**GetSmsDefinitionsResponse**](GetSmsDefinitionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSmsSendStatusForRecipient"></a>
# **getSmsSendStatusForRecipient**
> GetDefinitionSendStatusForRecipientResponse getSmsSendStatusForRecipient(messageKey)

getSmsSendStatusForRecipient

Gets the send status for a message. Because this route is rate-limited, use it for infrequent verification of a messageKey. To collect send status at scale, subscribe to transactional send events using the Event Notification Service.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let messageKey = "messageKey_example"; // String | Unique identifier to track message send status. You must provide it in singleton requests using the recipient attribute. To provide message key in batch requests, use the recipients array attribute. If you don’t provide the message key for recipients, it’s generated in the response.

apiInstance.getSmsSendStatusForRecipient(messageKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageKey** | **String**| Unique identifier to track message send status. You must provide it in singleton requests using the recipient attribute. To provide message key in batch requests, use the recipients array attribute. If you don’t provide the message key for recipients, it’s generated in the response. | 

### Return type

[**GetDefinitionSendStatusForRecipientResponse**](GetDefinitionSendStatusForRecipientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partiallyUpdateEmailDefinition"></a>
# **partiallyUpdateEmailDefinition**
> CreateEmailDefinitionRequest partiallyUpdateEmailDefinition(definitionKey, body)

partiallyUpdateEmailDefinition

Updates a specific email definition.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition.

let body = new SalesforceMarketingCloud.UpdateEmailDefinitionRequest(); // UpdateEmailDefinitionRequest | JSON Parameters

apiInstance.partiallyUpdateEmailDefinition(definitionKey, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition. | 
 **body** | [**UpdateEmailDefinitionRequest**](UpdateEmailDefinitionRequest.md)| JSON Parameters | 

### Return type

[**CreateEmailDefinitionRequest**](CreateEmailDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partiallyUpdateSmsDefinition"></a>
# **partiallyUpdateSmsDefinition**
> CreateSmsDefinitionRequest partiallyUpdateSmsDefinition(definitionKey, body)

partiallyUpdateSmsDefinition

Updates a specific SMS definition.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let definitionKey = "definitionKey_example"; // String | Unique identifier of the definition.

let body = new SalesforceMarketingCloud.UpdateSmsDefinitionRequest(); // UpdateSmsDefinitionRequest | JSON Parameters

apiInstance.partiallyUpdateSmsDefinition(definitionKey, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionKey** | **String**| Unique identifier of the definition. | 
 **body** | [**UpdateSmsDefinitionRequest**](UpdateSmsDefinitionRequest.md)| JSON Parameters | 

### Return type

[**CreateSmsDefinitionRequest**](CreateSmsDefinitionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendEmailToMultipleRecipients"></a>
# **sendEmailToMultipleRecipients**
> SendDefinitionToMultipleRecipientsResponse sendEmailToMultipleRecipients(body)

sendEmailToMultipleRecipients

Sends a message to multiple recipients using an email definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let body = new SalesforceMarketingCloud.SendEmailToMultipleRecipientsRequest(); // SendEmailToMultipleRecipientsRequest | JSON Parameters

apiInstance.sendEmailToMultipleRecipients(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendEmailToMultipleRecipientsRequest**](SendEmailToMultipleRecipientsRequest.md)| JSON Parameters | 

### Return type

[**SendDefinitionToMultipleRecipientsResponse**](SendDefinitionToMultipleRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendEmailToSingleRecipient"></a>
# **sendEmailToSingleRecipient**
> SendDefinitionToSingleRecipientResponse sendEmailToSingleRecipient(messageKey, body)

sendEmailToSingleRecipient

Sends a message to a single recipient via an email definition using a messageKey path parameter.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let messageKey = "messageKey_example"; // String | Unique identifier used to track message status. Can be automatically created when you create a message or provided as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected.

let body = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(); // SendEmailToSingleRecipientRequest | JSON Parameters

apiInstance.sendEmailToSingleRecipient(messageKey, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageKey** | **String**| Unique identifier used to track message status. Can be automatically created when you create a message or provided as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. | 
 **body** | [**SendEmailToSingleRecipientRequest**](SendEmailToSingleRecipientRequest.md)| JSON Parameters | 

### Return type

[**SendDefinitionToSingleRecipientResponse**](SendDefinitionToSingleRecipientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendSmsToMultipleRecipients"></a>
# **sendSmsToMultipleRecipients**
> SendDefinitionToMultipleRecipientsResponse sendSmsToMultipleRecipients(body)

sendSmsToMultipleRecipients

Sends a message to multiple recipients using an email definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let body = new SalesforceMarketingCloud.SendSmsToMultipleRecipientsRequest(); // SendSmsToMultipleRecipientsRequest | JSON Parameters

apiInstance.sendSmsToMultipleRecipients(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SendSmsToMultipleRecipientsRequest**](SendSmsToMultipleRecipientsRequest.md)| JSON Parameters | 

### Return type

[**SendDefinitionToMultipleRecipientsResponse**](SendDefinitionToMultipleRecipientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="sendSmsToSingleRecipient"></a>
# **sendSmsToSingleRecipient**
> SendDefinitionToSingleRecipientResponse sendSmsToSingleRecipient(messageKey, body)

sendSmsToSingleRecipient

Sends a message to a single recipient via a SMS definition using a messageKey path parameter.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.TransactionalMessagingApi();

let messageKey = "messageKey_example"; // String | Unique identifier of the definition used to track message status. The messageKey can be created automatically when you create a message, or you can provide it as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected.

let body = new SalesforceMarketingCloud.SendSmsToSingleRecipientRequest(); // SendSmsToSingleRecipientRequest | JSON Parameters

apiInstance.sendSmsToSingleRecipient(messageKey, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageKey** | **String**| Unique identifier of the definition used to track message status. The messageKey can be created automatically when you create a message, or you can provide it as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. | 
 **body** | [**SendSmsToSingleRecipientRequest**](SendSmsToSingleRecipientRequest.md)| JSON Parameters | 

### Return type

[**SendDefinitionToSingleRecipientResponse**](SendDefinitionToSingleRecipientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

