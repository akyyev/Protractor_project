var amazonJson = require('../Resources/Amazon.json');

describe('Test group 4', () => {
    it('open amazon webpage', () => {
        browser.get(amazonJson.URL);
    });
});