var actions = browser.actions();
var VyTrackHomePage = require("../Pages/VyTrackHomePage.js");
var assert = require('assert');

describe('Test group 7', () => {
    it('Move mouse hover to Fleet', () => {
        actions.mouseMove(VyTrackHomePage.Fleet).perform();
        browser.sleep(3000);
        var dashboardsText = VyTrackHomePage.dashboard.getText().then(function(text){
            console.log(text);
        })
        assert(dashboardsText, 'Dashboards', 'Actual text did not match expected text');
    });

    it('Click Vehicles', () => {
        VyTrackHomePage.Vehicles.click();
        browser.sleep(3000);
    });
});

