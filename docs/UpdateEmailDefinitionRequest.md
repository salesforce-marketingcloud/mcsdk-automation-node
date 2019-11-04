# SalesforceMarketingCloud.UpdateEmailDefinitionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the definition. Must be unique. | [optional] 
**content** | [**CreateEmailDefinitionContent**](CreateEmailDefinitionContent.md) |  | [optional] 
**status** | **String** | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. | [optional] 
**description** | **String** | User-provided description of the email definition. | [optional] 
**classification** | **String** | Marketing Cloud external key of a sending classification defined in Email Studio Administration. Only transactional classifications are permitted. Default is default transactional. | [optional] 
**subscriptions** | [**CreateEmailDefinitionSubscriptions**](CreateEmailDefinitionSubscriptions.md) |  | [optional] 
**options** | [**CreateEmailDefinitionOptionsRequest**](CreateEmailDefinitionOptionsRequest.md) |  | [optional] 


