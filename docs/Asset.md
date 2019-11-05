# SalesforceMarketingCloud.Asset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of the asset | [optional] 
**customerKey** | **String** | Reference to customer&#39;s private ID/name for the asset | 
**contentType** | **String** | The type that the content attribute will be in | [optional] 
**data** | **Object** | Property bag containing the asset data | [optional] 
**assetType** | [**AssetType**](AssetType.md) |  | 
**version** | **Number** | The version of the asset | [optional] 
**locked** | **Boolean** | Specifies if the asset can be modified or not | [optional] 
**fileProperties** | **Object** | Stores the different properties that this asset refers to if it is a file type | [optional] 
**name** | **String** | Name of the asset, set by the client | 
**description** | **String** | Description of the asset, set by the client | 
**category** | **Object** | ID of the category the asset belongs to | [optional] 
**tags** | **[String]** | List of tags associated with the asset | [optional] 
**content** | **String** | The actual content of the asset | [optional] 
**design** | **String** | Fallback for display when neither content nor supercontent are provided | [optional] 
**superContent** | **String** | Content that supersedes content in terms of display | [optional] 
**customFields** | **Object** | Custom fields within an asset | [optional] 
**views** | **Object** | Views within an asset | [optional] 
**blocks** | **Object** | Blocks within the asset | [optional] 
**minBlocks** | **Number** | Minimum number of blocks within an asset | [optional] 
**maxBlocks** | **Number** | Maximum number of blocks within an asset | [optional] 
**channels** | **Object** | List of channels that are allowed to use this asset | [optional] 
**allowedBlocks** | **[String]** | List of blocks that are allowed in the asset | [optional] 
**slots** | **Object** | Slots within the asset | [optional] 
**businessUnitAvailability** | **Object** | A dictionary of member IDs that have been granted access to the asset | [optional] 
**sharingProperties** | [**SharingProperties**](SharingProperties.md) |  | [optional] 
**template** | **Object** | Template the asset follows | [optional] 
**file** | **String** | Base64-encoded string of a file associated with an asset | [optional] 
**generateFrom** | **String** | Tells the sending compiler what view to use for generating this view&#39;s content | [optional] 


