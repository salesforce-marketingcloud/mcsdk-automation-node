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
const Campaign = require ('../Model/Campaign');
const BaseApi = require('./BaseApi');

/**
* Campaign service.
* @module Api/CampaignApi
* @version 1.0.0
*/
module.exports = class CampaignApi extends BaseApi {

    /**
    * Constructs a new CampaignApi. 
    * @alias module:Api/CampaignApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(authBaseUrl, clientId, clientSecret, accountId, scope) {
        super(authBaseUrl, clientId, clientSecret, accountId, scope);
    }



    /**
     * createCampaign
     * Creates a campaign.
     * @param {module:Model/Campaign} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Campaign} and HTTP response
     */
    createCampaignWithHttpInfo(caller, body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCampaign");
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
        '/hub/v1/campaigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * createCampaign
     * Creates a campaign.
     * @param {module:Model/Campaign} body JSON Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Campaign}
     */
    createCampaign(body) {
      return this.createCampaignWithHttpInfo('createCampaign', body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * deleteCampaignById
     * Deletes a campaign.
     * @param {String} id The ID of the campaign to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCampaignByIdWithHttpInfo(caller, id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCampaignById");
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
        '/hub/v1/campaigns/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * deleteCampaignById
     * Deletes a campaign.
     * @param {String} id The ID of the campaign to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCampaignById(id) {
      return this.deleteCampaignByIdWithHttpInfo('deleteCampaignById', id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getCampaignById
     * Retrieves a campaign.
     * @param {String} id Campaign ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Campaign} and HTTP response
     */
    getCampaignByIdWithHttpInfo(caller, id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCampaignById");
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
        '/hub/v1/campaigns/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authName, contentTypes, accepts, returnType, caller
      );
    }

    /**
     * getCampaignById
     * Retrieves a campaign.
     * @param {String} id Campaign ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Campaign}
     */
    getCampaignById(id) {
      return this.getCampaignByIdWithHttpInfo('getCampaignById', id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
