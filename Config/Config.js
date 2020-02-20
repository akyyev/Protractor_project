//it's like cuces runner
//it's jasmine environment
exports.config = {
    framework : 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    //to specify browser name
    capabilities:{ browserName: 'chrome'},

    //to run test cases on different browsers
    // multiCapabilities:[
    //     {browserName: 'chrome'},
    //     {browserName: 'firefox'}
    // ],

    //Suite: bunch of collections of tests...
    // suites:{
    //     smoke: '../Specs/Spec2.js',
    //     reg: '../Specs/Spec3.js' //for google
    // },

    specs: ['../Specs/Spec1.js', '../Specs/Spec2.js', '../Specs/Spec3.js'],
    onPrepare: function(){ //runs before each test cases
        //disabling for angular is good to put here
        browser.waitForAngularEnabled(false);
        //implicit wait for 10 secs
        browser.manage().timeouts().implicitlyWait(10000);
        //maximizing windows
        browser.manage().window().maximize();


        let HTMLReporter = require("protractor-beautiful-reporter");
        jasmine.getEnv().addReporter( 
            new HTMLReporter(  
                {
                    baseDirectory: "Reports",
                    takeScreenShotsOnlyForFailedSpecs: true
                }
             ).getJasmine2Reporter()
         );
    }
}