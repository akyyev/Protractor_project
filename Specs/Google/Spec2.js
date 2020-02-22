var googleJson = require('../../Resources/GoogleJson.json');

describe('Test group 2', () => {
    

    it('Go to Google Website', () => {
        //browser.waitForAngularEnabled(false); //since I've added this step to Config.js no need for it.
        //browser.get('https://www.google.com');
        browser.get(googleJson.URL);
        browser.sleep(2000); //for demo purpose
    });

});