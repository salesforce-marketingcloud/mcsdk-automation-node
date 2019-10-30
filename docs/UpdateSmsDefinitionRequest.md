# SalesforceMarketingCloud.UpdateSmsDefinitionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the definition. Must be unique. | [optional] 
**content** | [**CreateSmsDefinitionContent**](CreateSmsDefinitionContent.md) |  | [optional] 
**status** | **String** | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. | [optional] 
**description** | **String** | User-provided description of the SMS definition. | [optional] 
**subscriptions** | [**CreateSmsDefinitionSubscriptions**](CreateSmsDefinitionSubscriptions.md) |  | [optional] 


