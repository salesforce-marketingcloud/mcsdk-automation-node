# SalesforceMarketingCloud.CreateSmsDefinitionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitionKey** | **String** | Unique, user-generated key to access the definition object. | 
**name** | **String** | Name of the definition. Must be unique. | 
**content** | [**CreateSmsDefinitionContent**](CreateSmsDefinitionContent.md) |  | 
**status** | **String** | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. | [optional] 
**createdDate** | **Date** | The date the object was created. | [optional] 
**modifiedDate** | **Date** | The date the object was modified. | [optional] 
**description** | **String** | User-provided description of the SMS definition. | [optional] 
**subscriptions** | [**CreateSmsDefinitionSubscriptions**](CreateSmsDefinitionSubscriptions.md) |  | 
**requestId** | **String** | The ID of the request | [optional] 


