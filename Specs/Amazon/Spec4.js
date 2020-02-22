var amazonJson = require('../../Resources/Amazon.json');
var testData = require('../../Resources/TestData1.json');
var amazonPage = require('../../Pages/AmazonPage.js');
var actions = browser.actions();

describe('Amazon Test Demo', () => {
    it('open amazon webpage', () => {
        browser.get(amazonJson.URL);
    });

    it('search', () => {
        amazonPage.searchBox.sendKeys(testData.item);
        actions.sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000);
    });

});