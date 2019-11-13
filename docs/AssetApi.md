# SalesforceMarketingCloud.AssetApi

All URIs are relative to *https://www.exacttargetapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAsset**](AssetApi.md#createAsset) | **POST** /asset/v1/content/assets | createAsset
[**deleteAssetById**](AssetApi.md#deleteAssetById) | **DELETE** /asset/v1/content/assets/{id} | deleteAssetById
[**getAssetById**](AssetApi.md#getAssetById) | **GET** /asset/v1/content/assets/{id} | getAssetById
[**partiallyUpdateAssetById**](AssetApi.md#partiallyUpdateAssetById) | **PATCH** /asset/v1/content/assets/{id} | partiallyUpdateAssetById


<a name="createAsset"></a>
# **createAsset**
> Asset createAsset(body)

createAsset

Creates a new asset.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.AssetApi();

let body = new SalesforceMarketingCloud.Asset(); // Asset | JSON Parameters

apiInstance.createAsset(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Asset**](Asset.md)| JSON Parameters | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAssetById"></a>
# **deleteAssetById**
> deleteAssetById(id)

deleteAssetById

Deletes an asset.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.AssetApi();

let id = 8.14; // Number | The ID of the asset to delete

apiInstance.deleteAssetById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the asset to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAssetById"></a>
# **getAssetById**
> Asset getAssetById(id)

getAssetById

Gets an asset by ID.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.AssetApi();

let id = 8.14; // Number | The ID of the asset

apiInstance.getAssetById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the asset | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partiallyUpdateAssetById"></a>
# **partiallyUpdateAssetById**
> Asset partiallyUpdateAssetById(id, body)

partiallyUpdateAssetById

Updates part of an asset.

### Example
```javascript
const SalesforceMarketingCloud = require ('SalesforceMarketingCloud');

let apiInstance = new SalesforceMarketingCloud.AssetApi();

let id = 8.14; // Number | The ID of the asset to update

let body = new SalesforceMarketingCloud.Asset(); // Asset | JSON Parameters

apiInstance.partiallyUpdateAssetById(id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the asset to update | 
 **body** | [**Asset**](Asset.md)| JSON Parameters | 

### Return type

[**Asset**](Asset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

