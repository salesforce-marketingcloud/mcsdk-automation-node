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
* The EmailDefinitionOptions model module.
* @module Model/EmailDefinitionOptions
* @version 1.1.0
*/
module.exports = class EmailDefinitionOptions{
    /**
    * Constructs a new <code>EmailDefinitionOptions</code>.
    * @alias module:Model/EmailDefinitionOptions
    * @class
    */

    constructor() {
        
        
    }

    /**
    * Constructs a <code>EmailDefinitionOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/EmailDefinitionOptions} obj Optional instance to populate.
    * @return {module:Model/EmailDefinitionOptions} The populated <code>EmailDefinitionOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailDefinitionOptions();

            
            
            

            if (data.hasOwnProperty('trackLinks')) {
                obj['trackLinks'] = ApiClient.convertToType(data['trackLinks'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Wraps links for tracking and reporting. Default is true.
    * @member {Boolean} trackLinks
    */
    trackLinks = undefined;








}


