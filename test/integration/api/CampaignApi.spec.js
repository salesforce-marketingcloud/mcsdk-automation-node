const ApiSutFactory = require('./ApiSutFactory');

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SalesforceMarketingCloud);
  }
}(this, function(expect, SalesforceMarketingCloud) {
  'use strict';

  let campaignApiInstance;

  before(()=>{
    campaignApiInstance = new ApiSutFactory(SalesforceMarketingCloud.CampaignApi.prototype.constructor).create();
  });

  describe('CampaignApi', function() {
    describe('createCampaign', function() {
      it('should call createCampaign successfully', async ()=> {
        let campaign = createCampaignObject();

        let createCampaignResponse = await campaignApiInstance.createCampaign(campaign);

        expect(createCampaignResponse.name).to.eql(campaign.name);
        expect(createCampaignResponse.description).to.eql(campaign.description);
        expect(createCampaignResponse.campaignCode).to.eql(campaign.campaignCode);
        expect(createCampaignResponse.color).to.eql(campaign.color);
        expect(createCampaignResponse.favorite).to.eql(campaign.favorite);

        await campaignApiInstance.deleteCampaignById(createCampaignResponse.id);
      });
    });
    describe('deleteCampaignById', function() {
      it('should call deleteCampaignById successfully', async ()=> {
        let campaign = createCampaignObject();
        let createCampaignResponse = await campaignApiInstance.createCampaign(campaign);
        let campaignToDeleteId = createCampaignResponse.id;

        await campaignApiInstance.deleteCampaignById(campaignToDeleteId);

        try {
          await campaignApiInstance.getCampaignById(campaignToDeleteId);
        }
        catch (error) {
          expect(error.status).to.eql(400);

          return
        }
        expect().fail('Exception was not thrown');
      });
    });
    describe('getCampaignById', function() {
      it('should call getCampaignById successfully', async ()=> {
        let campaign = createCampaignObject();
        let createCampaignResponse = await campaignApiInstance.createCampaign(campaign);
        let campaignToRetrieveId = createCampaignResponse.id;

        let getCampaignByIdResponse = await campaignApiInstance.getCampaignById(campaignToRetrieveId);

        expect(getCampaignByIdResponse.name).to.eql(campaign.name);
        expect(getCampaignByIdResponse.description).to.eql(campaign.description);
        expect(getCampaignByIdResponse.campaignCode).to.eql(campaign.campaignCode);
        expect(getCampaignByIdResponse.color).to.eql(campaign.color);
        expect(getCampaignByIdResponse.favorite).to.eql(campaign.favorite);

        await campaignApiInstance.deleteCampaignById(createCampaignResponse.id);
      });
    });
  });

  function createCampaignObject() {
    let campaignName = 'Campaign ' + getUUID(10);
    let campaignDescription = 'Campaign from Automated Node.js SDK';
    let campaignCode = 'CampaignCode';
    let campaignColor = "0000ff";
    let favorite = false;

    return new SalesforceMarketingCloud.Campaign(campaignName, campaignDescription, campaignCode, campaignColor, favorite);
  }

  function getUUID(length){
    return Math.random().toString(16).substring(0, length);
  }
}));
