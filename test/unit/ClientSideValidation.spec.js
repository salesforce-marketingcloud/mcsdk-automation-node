const Campaign = require('../../src/Model/Campaign');
const InvalidModelException = require('../../src/Exception/InvalidModelException');

const expect = require('expect.js');

describe('Campaign', function () {
    describe('constructor', function () {

        let properties;
        const exceptionReasons = [undefined, null];
        const requiredProperties = ['name', 'description', 'campaignCode', 'color', 'favorite'];

        beforeEach(() => {
            properties = {
                name: 'validName',
                description: 'validDescription',
                campaignCode: 'validCampaignCode',
                color: '0000ff', // valid color value
                favorite: true // valid favorite value
            };
        });

        exceptionReasons.forEach((exceptionReason) => {
            requiredProperties.forEach((requiredProperty) => {
                it(`should return InvalidModelException for ${exceptionReason} ${requiredProperty}`, function () {

                    properties[requiredProperty] = exceptionReason;

                    try {
                        new Campaign(properties.name, properties.description, properties.campaignCode, properties.color, properties.favorite);
                    } catch (e) {
                        expect(e).to.be.an(InvalidModelException);
                        expect(e.message).to.eql(`"${requiredProperty}" is a required property for Campaign and cannot be undefined or null`);

                        return
                    }
                    expect().fail('Exception was not thrown');
                })
            })
        });
        it('should return InvalidModelException for Campaign name longer than 128 characters', function () {
            let invalidCampaignName = '#'.repeat(129);

            try {
                new Campaign(invalidCampaignName, properties.description, properties.campaignCode, properties.color, properties.favorite);
            } catch (e) {
                expect(e).to.be.an(InvalidModelException);
                expect(e.message).to.eql('invalid length for "name". It must be smaller than or equal to 128.');

                return
            }
            expect().fail('Exception was not thrown');
        });
        it('should return InvalidModelException for Campaign description longer than 512 characters', function () {
            let invalidCampaignDescription = '#'.repeat(513);

            try {
                new Campaign(properties.name, invalidCampaignDescription, properties.campaignCode, properties.color, properties.favorite);
            } catch (e) {
                expect(e).to.be.an(InvalidModelException);
                expect(e.message).to.eql('invalid length for "description". It must be smaller than or equal to 512.');

                return
            }
            expect().fail('Exception was not thrown');
        });
        it('should return InvalidModelException for Campaign campaignCode longer than 36 characters', function () {
            let invalidCampaignCampaignCode = '#'.repeat(37);

            try {
                new Campaign(properties.name, properties.description, invalidCampaignCampaignCode, properties.color, properties.favorite);
            } catch (e) {
                expect(e).to.be.an(InvalidModelException);
                expect(e.message).to.eql('invalid length for "campaignCode". It must be smaller than or equal to 36.');

                return
            }
            expect().fail('Exception was not thrown');
        });
    });
});