var actions = browser.actions();
var VyTrackHomePage = require("../Pages/VyTrackHomePage.js");


describe('Test group 7', () => {
    it('Move mouse hover to Fleet', () => {
        actions.mouseMove(VyTrackHomePage.Fleet).perform();
        browser.sleep(3000);
    });

    it('Click Vehicles', () => {
        VyTrackHomePage.Vehicles.click();
        browser.sleep(3000);
    });
});