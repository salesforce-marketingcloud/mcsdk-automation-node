/**
 * Marketing Cloud REST API
 * Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: mc_sdk@salesforce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


const ApiClient = require ('../ApiClient');
const GetDefinitionSendStatusForRecipientResponseInfo = require ('./GetDefinitionSendStatusForRecipientResponseInfo');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The GetDefinitionSendStatusForRecipientResponse model module.
* @module Model/GetDefinitionSendStatusForRecipientResponse
* @version 1.0.0
*/
module.exports = class GetDefinitionSendStatusForRecipientResponse{
    /**
    * Constructs a new <code>GetDefinitionSendStatusForRecipientResponse</code>.
    * @alias module:Model/GetDefinitionSendStatusForRecipientResponse
    * @class
    */

    constructor() {
        
        
        
        
        
        
    }

    /**
    * Constructs a <code>GetDefinitionSendStatusForRecipientResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/GetDefinitionSendStatusForRecipientResponse} obj Optional instance to populate.
    * @return {module:Model/GetDefinitionSendStatusForRecipientResponse} The populated <code>GetDefinitionSendStatusForRecipientResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDefinitionSendStatusForRecipientResponse();

            
            
            

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('eventCategoryType')) {
                obj['eventCategoryType'] = ApiClient.convertToType(data['eventCategoryType'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('compositeId')) {
                obj['compositeId'] = ApiClient.convertToType(data['compositeId'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = GetDefinitionSendStatusForRecipientResponseInfo.constructFromObject(data['info']);
            }
        }
        return obj;
    }

    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;
    /**
    * The status of the message
    * @member {String} eventCategoryType
    */
    eventCategoryType = undefined;
    /**
    * The date the ...
    * @member {Date} timestamp
    */
    timestamp = undefined;
    /**
    * The Id of ...
    * @member {String} compositeId
    */
    compositeId = undefined;
    /**
    * @member {module:Model/GetDefinitionSendStatusForRecipientResponseInfo} info
    */
    info = undefined;








}


