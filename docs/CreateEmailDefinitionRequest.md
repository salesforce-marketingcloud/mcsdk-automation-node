# SalesforceMarketingCloud.CreateEmailDefinitionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | The ID of the request | [optional] 
**name** | **String** | Name of the definition. Must be unique. | 
**definitionKey** | **String** | Unique, user-generated key to access the definition object. | 
**definitionId** | **String** | Definition Id | [optional] 
**description** | **String** | User-provided description of the email definition. | [optional] 
**classification** | **String** | Marketing Cloud external key of a sending classification defined in Email Studio Administration. Only transactional classifications are permitted. Default is default transactional. | [optional] 
**status** | **String** | Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days. | [optional] 
**createdDate** | **Date** | The date the object was created. | [optional] 
**modifiedDate** | **Date** | The date the object was modified. | [optional] 
**content** | [**CreateEmailDefinitionContent**](CreateEmailDefinitionContent.md) |  | 
**subscriptions** | [**CreateEmailDefinitionSubscriptions**](CreateEmailDefinitionSubscriptions.md) |  | 
**options** | [**CreateEmailDefinitionOptionsRequest**](CreateEmailDefinitionOptionsRequest.md) |  | [optional] 


