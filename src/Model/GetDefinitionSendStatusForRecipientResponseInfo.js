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





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The GetDefinitionSendStatusForRecipientResponseInfo model module.
* @module Model/GetDefinitionSendStatusForRecipientResponseInfo
* @version 1.0.0
*/
module.exports = class GetDefinitionSendStatusForRecipientResponseInfo{
    /**
    * Constructs a new <code>GetDefinitionSendStatusForRecipientResponseInfo</code>.
    * @alias module:Model/GetDefinitionSendStatusForRecipientResponseInfo
    * @class
    */

    constructor() {
        
        
        
        
        
        
    }

    /**
    * Constructs a <code>GetDefinitionSendStatusForRecipientResponseInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/GetDefinitionSendStatusForRecipientResponseInfo} obj Optional instance to populate.
    * @return {module:Model/GetDefinitionSendStatusForRecipientResponseInfo} The populated <code>GetDefinitionSendStatusForRecipientResponseInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDefinitionSendStatusForRecipientResponseInfo();

            
            
            

            if (data.hasOwnProperty('messageKey')) {
                obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
            }
            if (data.hasOwnProperty('contactKey')) {
                obj['contactKey'] = ApiClient.convertToType(data['contactKey'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('statusMessage')) {
                obj['statusMessage'] = ApiClient.convertToType(data['statusMessage'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique identifier used to track message status.
    * @member {String} messageKey
    */
    messageKey = undefined;
    /**
    * Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address.
    * @member {String} contactKey
    */
    contactKey = undefined;
    /**
    * Channel address of the recipient. For email, it’s the recipient's email address.
    * @member {String} to
    */
    to = undefined;
    /**
    * The specific status code
    * @member {Number} statusCode
    */
    statusCode = undefined;
    /**
    * The specific status message
    * @member {String} statusMessage
    */
    statusMessage = undefined;








}


