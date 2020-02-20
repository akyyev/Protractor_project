var testData = require('../Resources/TestData1.json');
var amazonPage = require('../Pages/AmazonPage.js');
var actions = browser.actions();

describe('Test group 5', () => {
    it('search', () => {
        amazonPage.searchBox.sendKeys(testData.item);
        actions.sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000);
    });
});