var VyTrackJson = require("../../Resources/VyTrack.json");  // jSon
var VyTrackLogInPage = require("../../Pages/VyTrackLoginPage.js"); // log in page elements

describe('Test group 6', () => {
    
    it('Go to VyTrack website', () => {
        browser.get(VyTrackJson.URL);
    });

    it('Enter login credentials', () => {
        VyTrackLogInPage.UserName.sendKeys(VyTrackJson.UserName);
        VyTrackLogInPage.PassWord.sendKeys(VyTrackJson.PassWord);
    });

    it('Click login button', () => {
        VyTrackLogInPage.LogInButton.click();
        browser.sleep(3000);
    });


    
});