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
const EmailDefinitionContent = require ('./EmailDefinitionContent');
const EmailDefinitionOptions = require ('./EmailDefinitionOptions');
const EmailDefinitionSubscriptions = require ('./EmailDefinitionSubscriptions');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The UpdateEmailDefinitionRequest model module.
* @module Model/UpdateEmailDefinitionRequest
* @version 1.1.0
*/
module.exports = class UpdateEmailDefinitionRequest{
    /**
    * Constructs a new <code>UpdateEmailDefinitionRequest</code>.
    * @alias module:Model/UpdateEmailDefinitionRequest
    * @class
    */

    constructor() {
        
        
        
        
        
        
        
        
    }

    /**
    * Constructs a <code>UpdateEmailDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/UpdateEmailDefinitionRequest} obj Optional instance to populate.
    * @return {module:Model/UpdateEmailDefinitionRequest} The populated <code>UpdateEmailDefinitionRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEmailDefinitionRequest();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = EmailDefinitionContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('classification')) {
                obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = EmailDefinitionSubscriptions.constructFromObject(data['subscriptions']);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = EmailDefinitionOptions.constructFromObject(data['options']);
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
    * @member {module:Model/EmailDefinitionContent} content
    */
    content = undefined;
    /**
    * Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days.
    * @member {String} status
    */
    status = undefined;
    /**
    * User-provided description of the email definition.
    * @member {String} description
    */
    description = undefined;
    /**
    * Marketing Cloud external key of a sending classification defined in Email Studio Administration. Only transactional classifications are permitted. Default is default transactional.
    * @member {String} classification
    */
    classification = undefined;
    /**
    * @member {module:Model/EmailDefinitionSubscriptions} subscriptions
    */
    subscriptions = undefined;
    /**
    * @member {module:Model/EmailDefinitionOptions} options
    */
    options = undefined;








}


