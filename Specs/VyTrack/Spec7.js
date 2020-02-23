var actions = browser.actions();
var VyTrackHomePage = require("../../Pages/VyTrackHomePage.js");
// var assert = require('assert');
var vehiclePage = require("../../Pages/VyTrackVehiclesPage.js")

describe('Test group 7', () => {
    it('Move mouse hover to Fleet', () => {
        actions.mouseMove(VyTrackHomePage.Fleet).perform();
        browser.sleep(3000);
        
        VyTrackHomePage.dashboard.getText().then(function(text){
            console.log(text);
        })
        expect(VyTrackHomePage.dashboard.getText()).toEqual('Dashboards');
    });

    it('Click Vehicles', () => {
        VyTrackHomePage.Vehicles.click();
        browser.sleep(3000);
    });

    it('Verify page subtitle is All Cars', () => {
        vehiclePage.subtitle.getText().then(function(subtitle){console.log(subtitle);});
        
        expect(vehiclePage.subtitle.getText()).toBe('All Cars'); 
    });
});