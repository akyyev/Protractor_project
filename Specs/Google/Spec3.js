var actions = browser.actions();
var googlePage = require('../../Pages/GooglePage.js');
var testData = require('../../Resources/TestData1.json');

describe('Test group 3', () => {
    
    it('Search apple on google website', () => {
        //var searchBox = element(by.xpath("//input[@name='q']"));
        //searchBox.sendKeys('apple');
        googlePage.searchBox.sendKeys(testData.item);
        actions.sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
    });

}); 