# SalesforceMarketingCloud.GetDefinitionSendStatusForRecipientResponseInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageKey** | **String** | Unique identifier used to track message status. | [optional] 
**contactKey** | **String** | Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address. | [optional] 
**to** | **String** | Channel address of the recipient. For email, it’s the recipient&#39;s email address. | [optional] 
**statusCode** | **Number** | The specific status code | [optional] 
**statusMessage** | **String** | The specific status message | [optional] 


