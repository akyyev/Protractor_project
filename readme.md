Protractor: It's an end to end test framework for AngularJS applications
            All test will be executed on 1 open and close of browser.

Documentation: https://www.protractortest.org/#/api

    Protractor has 9 extra locators(Total 17):
        1. buttonText
        2. partialButtonText
        3. cssContainingText
        4. model
        5. binding
        6. exactBinding
        7. repeater
        8. exactRepeater
        9. deepCss
        10-17. Also we can use selenium locators.

    Jasmine: It's BDD framework

    To import components in Jasmine
        1. Config : Runs the step definitions
                            framework           : define the framework name
                            seleniumAddress     : remote web service
                            directConnect
                            specs               : defines where the test cases are
                            capabilities        : allows us to use different browsers
                            multiCapabilities   : multi-browsers
                            suites              : creating test suites
                            onPrepare           :
                                                    implicit wait
                                                    waitForAngularEnabledwait: false
                                                    reports: HTML (protractor beautiful reports)

        2. Specs : It's like Step definitions
                describe: Test Group ()
                it: Test Case

    To run Protractor use command below:
        1. First go to Config directory
        2. protractor fileName.js

---------------------------------------
    Annotations:
        beforeAll(function(){codes}) : runs before all test cases (similar to @BeforeClass)
        afterAll(function(){codes}): runs after all test cases in the group finished (similar to @AfterClass)
        beforeEach(function(){codes}): runs before each test case (@BeforeMethod)
        afterEach(function(){codes}): runs after each test case (@AfterMethod)
---------------------------------------

    Shorcuts: 
        desc -> to create test group
        it -> to create test case

----------------Browser-----------------------

    browser: global object (same with webdriver)
        browser.get(URL);
        browser.sleep();
        //since Jasmine is desined for testing Angular applications 
        //so when testing applications created without Angular will make your test fail.
        //to fix "Error while running testForAngular: script timeout"
        browser.waitForAngularEnabled(false)

---------------HTML Report------------------------

    To generate HTML reports:
        1. Install protractor beautiful reporter
            For_mac: sudo npm install protractor-beautiful-reporter --save-dev
        2. add this code snippet to onPrepare on Config


            let HTMLReporter = require("protractor-beautiful-reporter");
            jasmine.getEnv().addReporter( 
                new HTMLReporter(  
                    {
                        baseDirectory: "Reports/Amazon_Reports",
                        takeScreenShotsOnlyForFailedSpecs: true
                    }
                ).getJasmine2Reporter()
            );


------------------Pop ups-----------------------------

    To handle pop-ups:
        var alter = browser.switchTo().alert();
        alert.dismiss();
            or
        alert.accept();
        alert.getText();

------------------Multi-windows------------------------

        browser.getWindowHandles();
        browser.switchTo().window();
        browser.switchTo().defaultContent();

------------------Frames ------------------------------

        browser.switchTo().frame();
        browser.switchToParentFrame();

------------------Explicit wait------------------------

        var explicitWait = protractor.ExpectedConditions;
            browser.wait(explicitWait.Condition, 10);




