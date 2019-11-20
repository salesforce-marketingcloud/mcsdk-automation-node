# SalesforceMarketingCloud.CampaignApi

All URIs are relative to *https://www.exacttargetapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignApi.md#createCampaign) | **POST** /hub/v1/campaigns | createCampaign
[**deleteCampaignById**](CampaignApi.md#deleteCampaignById) | **DELETE** /hub/v1/campaigns/{id} | deleteCampaignById
[**getCampaignById**](CampaignApi.md#getCampaignById) | **GET** /hub/v1/campaigns/{id} | getCampaignById


<a name="createCampaign"></a>
# **createCampaign**
> Campaign createCampaign(body)

createCampaign

Creates a campaign.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.CampaignApi();

let body = new SalesforceMarketingCloud.Campaign(); // Campaign | JSON Parameters

apiInstance.createCampaign(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Campaign**](Campaign.md)| JSON Parameters | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCampaignById"></a>
# **deleteCampaignById**
> deleteCampaignById(id)

deleteCampaignById

Deletes a campaign.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.CampaignApi();

let id = "id_example"; // String | The ID of the campaign to delete

apiInstance.deleteCampaignById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the campaign to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCampaignById"></a>
# **getCampaignById**
> Campaign getCampaignById(id)

getCampaignById

Retrieves a campaign.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.CampaignApi();

let id = "id_example"; // String | Campaign ID

apiInstance.getCampaignById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Campaign ID | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

