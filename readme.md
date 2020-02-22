![Protractor_jasmine](jasmine_protractor.jpg?raw=true "Protractor")

Protractor
-------------------------------
    It's an end to end test framework for AngularJS applications
    All test are executed on 'one' start and close of a browser.

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

Prerequisites
---------------------
    Protractor is a Node.js program. To run, you will need to have Node.js installed. 
    You will download Protractor package using npm, which comes with Node.js. 
    Check the version of Node.js you have by running node --version. It should be greater than v0.10.0.
    By default, Protractor uses the Jasmine test framework for its testing interface. 
    This tutorial assumes some familiarity with Jasmine, and we will use version 2.3.
    This tutorial will set up a test using a local standalone Selenium Server to control browsers. 
    You will need to have theJava Development Kit (JDK) installed to run the standalone Selenium Server. 
    Check this by running java -version from the command line.

Getting Started
---------------------------------------

    Install protractor:
        npm install -g protractor
        mac:sudo npm install -g protractor
        to check: protractor --version
        update npm:
            windows     : npm-window-update --npm-version latest
            Mac         : sudo npm install -g npm@latest
        
        Install webdriver manager       : webdriver-manager update
        start webdriver manager         : webdriver-manager start
        to check webdriver status       : webdriver-manager status
        
        To install protractor-beautifl-reporter:
            windows     :npm install protractor-beautiful-reporter --save-dev
            Mac         :sudo npm install protractor-beautiful-reporter --save-dev

---------------------------------------

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

Annotations
---------------------------------------
        beforeAll(function(){codes}) : runs before all test cases (similar to @BeforeClass)
        afterAll(function(){codes}): runs after all test cases in the group finished (similar to @AfterClass)
        beforeEach(function(){codes}): runs before each test case (@BeforeMethod)
        afterEach(function(){codes}): runs after each test case (@AfterMethod)

Shorcuts
---------------------------------------

        desc -> to create test group
        it -> to create test case

Browser
---------------------------------------

    browser: global object (same with webdriver)
        browser.get(URL);
        browser.sleep();
        //since Jasmine is desined for testing Angular applications 
        //so when testing applications created without Angular will make your test fail.
        //to fix "Error while running testForAngular: script timeout"
        browser.waitForAngularEnabled(false)

HTML Report
---------------------------------------

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

Pop ups
-----------------------------------------------

    To handle pop-ups:
        var alter = browser.switchTo().alert();
        alert.dismiss();
            or
        alert.accept();
        alert.getText();

Multi-windows
------------------------------------------

        browser.getWindowHandles();
        browser.switchTo().window();
        browser.switchTo().defaultContent();

Frames
------------------------------------------------

        browser.switchTo().frame();
        browser.switchToParentFrame();

Explicit wait
------------------------------------------

        var explicitWait = protractor.ExpectedConditions;
            browser.wait(explicitWait.Condition, 10);




