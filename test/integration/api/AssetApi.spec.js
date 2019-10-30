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

  const HTML_EMAIL_ASSET_TYPE_ID = 196;

  let assetApiInstance;

  before(()=>{
    assetApiInstance = new ApiSutFactory(SalesforceMarketingCloud.AssetApi.prototype.constructor).create();
  });

  describe('AssetApi', function() {
    describe('createAsset', function() {
      it('should call createAsset successfully', async ()=>{
        let asset = createAssetObject();

        let createAssetResponse = await assetApiInstance.createAsset(asset);

        expect(createAssetResponse.customerKey).to.eql(asset.customerKey);
        expect(createAssetResponse.name).to.eql(asset.name);
        expect(createAssetResponse.description).to.eql(asset.description);
        expect(createAssetResponse.assetType.id).to.eql(asset.assetType.id);
        expect(createAssetResponse.assetType.name).to.eql(asset.assetType.name);

        await assetApiInstance.deleteAssetById(createAssetResponse.id);
      });
    });
    describe('deleteAssetById', function() {
      it('should call deleteAssetById successfully', async ()=>{
        let asset = createAssetObject();
        let createAssetResponse = await assetApiInstance.createAsset(asset);
        let assetToDeleteId = createAssetResponse.id;

        await assetApiInstance.deleteAssetById(assetToDeleteId);

        try{
          await assetApiInstance.getAssetById(assetToDeleteId);
        }
        catch(error) {
          expect(error.status).to.eql(404);

          return
        }
        expect().fail('Exception was not thrown');
      });
    });
    describe('getAssetById', function() {
      it('should call getAssetById successfully', async ()=> {
        let asset = createAssetObject();
        let createAssetResponse = await assetApiInstance.createAsset(asset);
        let assetToRetrieveId = createAssetResponse.id;

        let getAssetByIdResponse = await assetApiInstance.getAssetById(assetToRetrieveId);

        expect(getAssetByIdResponse.customerKey).to.eql(asset.customerKey);
        expect(getAssetByIdResponse.name).to.eql(asset.name);
        expect(getAssetByIdResponse.description).to.eql(asset.description);
        expect(getAssetByIdResponse.assetType.id).to.eql(asset.assetType.id);
        expect(getAssetByIdResponse.assetType.name).to.eql(asset.assetType.name);

        await assetApiInstance.deleteAssetById(createAssetResponse.id);
      });
    });
    describe('partiallyUpdateAssetById', function() {
      it('should call partiallyUpdateAssetById successfully', async ()=> {
        let asset = createAssetObject();
        let createAssetResponse = await assetApiInstance.createAsset(asset);
        let assetToPartiallyUpdateId = createAssetResponse.id;
        createAssetResponse.description = 'Updated asset description';

        let partiallyUpdateAssetResult = await assetApiInstance.partiallyUpdateAssetById(assetToPartiallyUpdateId, createAssetResponse);

        expect(partiallyUpdateAssetResult.description).to.eql(createAssetResponse.description);

        expect(partiallyUpdateAssetResult.customerKey).to.eql(asset.customerKey);
        expect(partiallyUpdateAssetResult.name).to.eql(asset.name);
        expect(partiallyUpdateAssetResult.assetType.id).to.eql(asset.assetType.id);
        expect(partiallyUpdateAssetResult.assetType.name).to.eql(asset.assetType.name);

        await assetApiInstance.deleteAssetById(createAssetResponse.id);
      });
    });
  });

  function createAssetObject() {
    let assetType = new SalesforceMarketingCloud.AssetType(HTML_EMAIL_ASSET_TYPE_ID, 'textblock');

    let customerKey = getUUID(10);
    let assetName = 'Asset ' + getUUID(10);
    let assetDescription = 'Asset from Automated Node.js SDK';

    return new SalesforceMarketingCloud.Asset(customerKey, assetType, assetName, assetDescription);
  }

  function getUUID(length){
    return Math.random().toString(16).substring(0, length);
  }
}));


