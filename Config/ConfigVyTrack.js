exports.config = {
    framework : 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities:{ browserName: 'chrome'},

    specs: ['../Specs/VyTrack/Login_spec.js', '../Specs/VyTrack/Spec7.js'],
    onPrepare: function(){ 
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().window().maximize();

        let HTMLReporter = require("protractor-beautiful-reporter");
        jasmine.getEnv().addReporter( 
            new HTMLReporter(  
                {
                    baseDirectory: "Reports/VyTrack_Reports",
                    takeScreenShotsOnlyForFailedSpecs: true
                }
             ).getJasmine2Reporter()
         );
    }
    
}