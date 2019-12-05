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
const Recipient = require ('./Recipient');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The SendEmailToSingleRecipientRequest model module.
* @module Model/SendEmailToSingleRecipientRequest
* @version 1.1.0
*/
module.exports = class SendEmailToSingleRecipientRequest{
    /**
    * Constructs a new <code>SendEmailToSingleRecipientRequest</code>.
    * @alias module:Model/SendEmailToSingleRecipientRequest
    * @class
    * @param definitionKey {String} Unique identifier of the definition.
    * @param recipient {module:Model/Recipient} 
    */

    constructor(definitionKey, recipient) {
        
        // verify the required parameter 'definitionKey' is set
        if(definitionKey === undefined || definitionKey === null){
            throw new InvalidModelException('"definitionKey" is a required property for SendEmailToSingleRecipientRequest and cannot be undefined or null');
        }
        this['definitionKey'] = definitionKey;
        
        // verify the required parameter 'recipient' is set
        if(recipient === undefined || recipient === null){
            throw new InvalidModelException('"recipient" is a required property for SendEmailToSingleRecipientRequest and cannot be undefined or null');
        }
        this['recipient'] = recipient;
        
    }

    /**
    * Constructs a <code>SendEmailToSingleRecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/SendEmailToSingleRecipientRequest} obj Optional instance to populate.
    * @return {module:Model/SendEmailToSingleRecipientRequest} The populated <code>SendEmailToSingleRecipientRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendEmailToSingleRecipientRequest();

            
            
            

            if (data.hasOwnProperty('definitionKey')) {
                obj['definitionKey'] = ApiClient.convertToType(data['definitionKey'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = Recipient.constructFromObject(data['recipient']);
            }
        }
        return obj;
    }

    /**
    * Unique identifier of the definition.
    * @member {String} definitionKey
    */
    definitionKey = undefined;
    /**
    * @member {module:Model/Recipient} recipient
    */
    recipient = undefined;








}


