# SalesforceMarketingCloud.Recipient

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactKey** | **String** | Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address. | 
**to** | **String** | Channel address of the recipient. For email, it’s the recipient&#39;s email address. For SMS, it’s the recipient&#39;s E.164-based mobile number. | [optional] 
**messageKey** | **String** | Unique identifier used to track message status. Can be automatically created when you create a message or provided as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. | [optional] 
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 


