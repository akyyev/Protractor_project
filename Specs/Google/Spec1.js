// describe takes two parameters, test group name and function
//
describe( 'Test Group 1', function(){

    beforeAll(function(){
        //codes to execude once before all test cases
        console.log('Test Group 1 started');
    });


    afterAll(function(){
        console.log('Test Group 1 has been completed');
    });

    beforeEach(function(){
        console.log('----before test case----');
    });

    afterEach(function(){
        console.log('----after test case----');
    })


    it('Test Case 1', function(){
        //test steps are here
        console.log('Test case 1 is completed');
    });

    it('Test Case 2', function(){
        console.log('Test case 2 is completed');
    });


    it('Test Case 3', function(){
        console.log('Test case 3 is completed');
    });


});
