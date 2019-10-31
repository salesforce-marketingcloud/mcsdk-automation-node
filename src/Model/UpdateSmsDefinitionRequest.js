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
const CreateSmsDefinitionContent = require ('./CreateSmsDefinitionContent');
const CreateSmsDefinitionSubscriptions = require ('./CreateSmsDefinitionSubscriptions');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The UpdateSmsDefinitionRequest model module.
* @module Model/UpdateSmsDefinitionRequest
* @version 1.0.0
*/
module.exports = class UpdateSmsDefinitionRequest{
    /**
    * Constructs a new <code>UpdateSmsDefinitionRequest</code>.
    * @alias module:Model/UpdateSmsDefinitionRequest
    * @class
    */

    constructor() {
        
        
        
        
        
        
    }

    /**
    * Constructs a <code>UpdateSmsDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/UpdateSmsDefinitionRequest} obj Optional instance to populate.
    * @return {module:Model/UpdateSmsDefinitionRequest} The populated <code>UpdateSmsDefinitionRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSmsDefinitionRequest();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = CreateSmsDefinitionContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = CreateSmsDefinitionSubscriptions.constructFromObject(data['subscriptions']);
            }
        }
        return obj;
    }

    /**
    * Name of the definition. Must be unique.
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:Model/CreateSmsDefinitionContent} content
    */
    content = undefined;
    /**
    * Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days.
    * @member {String} status
    */
    status = undefined;
    /**
    * User-provided description of the SMS definition.
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:Model/CreateSmsDefinitionSubscriptions} subscriptions
    */
    subscriptions = undefined;








}


