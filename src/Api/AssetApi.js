/**
 * Marketing Cloud REST API
 * Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mc_sdk@salesforce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


const ApiError = require ('../Model/ApiError');
const Asset = require ('../Model/Asset');
const BaseApi = require('./BaseApi');

/**
* Asset service.
* @module Api/AssetApi
* @version 1.0.0
*/
module.exports = class AssetApi extends BaseApi {

    /**
    * Constructs a new AssetApi. 
    * @alias module:Api/AssetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(authBaseUrl, clientId, clientSecret, accountId, scope) {
        super(authBaseUrl, clientId, clientSecret, accountId, scope);
    }



    /**
     * createAsset
     * Creates a new asset.
     * @param {module:Model/Asset} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Asset} and HTTP response
     */
    createAssetWithHttpInfo(caller, body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAsset");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authName = '';
      let contentTypes = [];
      let accepts = [];
      let returnType = Object;

      return this.apiClient.callApi(
        '/asset/v1/content/assets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * createAsset
     * Creates a new asset.
     * @param {module:Model/Asset} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Asset}
     */
    createAsset(body) {
      return this.createAssetWithHttpInfo('createAsset', body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * deleteAssetById
     * Deletes an asset.
     * @param {Number} id The ID of the asset to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAssetByIdWithHttpInfo(caller, id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAssetById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authName = '';
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/asset/v1/content/assets/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * deleteAssetById
     * Deletes an asset.
     * @param {Number} id The ID of the asset to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAssetById(id) {
      return this.deleteAssetByIdWithHttpInfo('deleteAssetById', id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getAssetById
     * Gets an asset by ID.
     * @param {Number} id The ID of the asset
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Asset} and HTTP response
     */
    getAssetByIdWithHttpInfo(caller, id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAssetById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authName = '';
      let contentTypes = [];
      let accepts = [];
      let returnType = Object;

      return this.apiClient.callApi(
        '/asset/v1/content/assets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * getAssetById
     * Gets an asset by ID.
     * @param {Number} id The ID of the asset
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Asset}
     */
    getAssetById(id) {
      return this.getAssetByIdWithHttpInfo('getAssetById', id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * partiallyUpdateAssetById
     * Updates part of an asset.
     * @param {Number} id The ID of the asset to update
     * @param {module:Model/Asset} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Asset} and HTTP response
     */
    partiallyUpdateAssetByIdWithHttpInfo(caller, id, body) {
      let postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling partiallyUpdateAssetById");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partiallyUpdateAssetById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authName = '';
      let contentTypes = [];
      let accepts = [];
      let returnType = Object;

      return this.apiClient.callApi(
        '/asset/v1/content/assets/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * partiallyUpdateAssetById
     * Updates part of an asset.
     * @param {Number} id The ID of the asset to update
     * @param {module:Model/Asset} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Asset}
     */
    partiallyUpdateAssetById(id, body) {
      return this.partiallyUpdateAssetByIdWithHttpInfo('partiallyUpdateAssetById', id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
