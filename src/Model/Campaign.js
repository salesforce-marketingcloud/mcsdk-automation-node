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
* The Campaign model module.
* @module Model/Campaign
* @version 1.1.0
*/
module.exports = class Campaign{
    /**
    * Constructs a new <code>Campaign</code>.
    * @alias module:Model/Campaign
    * @class
    * @param name {String} Name of the campaign with a maximum length of 128 characters
    * @param description {String} Description of the campaign with a maximum length of 512 characters
    * @param campaignCode {String} Unique identifier for the campaign with a maximum length of 36 characters
    * @param color {String} Hex color value
    * @param favorite {Boolean} Determines if the campaign will be flagged as a favorite
    */

    constructor(name, description, campaignCode, color, favorite) {
        
        // verify the required parameter 'name' is set
        if(name === undefined || name === null){
            throw new InvalidModelException('"name" is a required property for Campaign and cannot be undefined or null');
        }
        if (name.length > 128) {
            throw new InvalidModelException('invalid length for "name". It must be smaller than or equal to 128.');
        } 
        this['name'] = name;
        
        // verify the required parameter 'description' is set
        if(description === undefined || description === null){
            throw new InvalidModelException('"description" is a required property for Campaign and cannot be undefined or null');
        }
        if (description.length > 512) {
            throw new InvalidModelException('invalid length for "description". It must be smaller than or equal to 512.');
        } 
        this['description'] = description;
        
        // verify the required parameter 'campaignCode' is set
        if(campaignCode === undefined || campaignCode === null){
            throw new InvalidModelException('"campaignCode" is a required property for Campaign and cannot be undefined or null');
        }
        if (campaignCode.length > 36) {
            throw new InvalidModelException('invalid length for "campaignCode". It must be smaller than or equal to 36.');
        } 
        this['campaignCode'] = campaignCode;
        
        // verify the required parameter 'color' is set
        if(color === undefined || color === null){
            throw new InvalidModelException('"color" is a required property for Campaign and cannot be undefined or null');
        }
        this['color'] = color;
        
        // verify the required parameter 'favorite' is set
        if(favorite === undefined || favorite === null){
            throw new InvalidModelException('"favorite" is a required property for Campaign and cannot be undefined or null');
        }
        this['favorite'] = favorite;
        
        
        
        
    }

    /**
    * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/Campaign} obj Optional instance to populate.
    * @return {module:Model/Campaign} The populated <code>Campaign</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('campaignCode')) {
                obj['campaignCode'] = ApiClient.convertToType(data['campaignCode'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Name of the campaign with a maximum length of 128 characters
    * @member {String} name
    */
    name = undefined;
    /**
    * Description of the campaign with a maximum length of 512 characters
    * @member {String} description
    */
    description = undefined;
    /**
    * Unique identifier for the campaign with a maximum length of 36 characters
    * @member {String} campaignCode
    */
    campaignCode = undefined;
    /**
    * Hex color value
    * @member {String} color
    */
    color = undefined;
    /**
    * Determines if the campaign will be flagged as a favorite
    * @member {Boolean} favorite
    */
    favorite = undefined;
    /**
    * The id of the campaign
    * @member {String} id
    */
    id = undefined;
    /**
    * The date the object was created.
    * @member {Date} createdDate
    */
    createdDate = undefined;
    /**
    * The date the object was modified.
    * @member {Date} modifiedDate
    */
    modifiedDate = undefined;








}


