# SalesforceMarketingCloud.CreateEmailDefinitionSubscriptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | **String** | Marketing Cloud external key of the list or all subscribers. Contains the subscriber keys and profile attributes. | 
**dataExtension** | **String** | Marketing Cloud external key of the triggered send data extension. Each request inserts as a new row in the data extension. | [optional] 
**autoAddSubscriber** | **Boolean** | Adds the recipient’s email address and contact key as a subscriber key to subscriptions.list. Default is true. | [optional] [default to true]
**updateSubscriber** | **Boolean** | Updates the recipient’s contact key as a subscriber key with the provided email address and profile attributes to subscriptions.list. Default is true. | [optional] 


