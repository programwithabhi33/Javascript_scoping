/* IMP -: variables defined with var keyword are function scoped and variables with defined let and const keyword are block scoped variables */

function functionTest(){

    /* Function scoping means any variables defined in the function that are only accessible inside that function  */

    const variableA = 3;
    if(true){
        // This is the block scope
        const variableB = 4;
    }

    // You cannot access variableB variable because it's block scope, if you defined this variable with var keyword then you can access it because any variables are defined with var keyword are function scoped.

    // console.log(variableA,variableB)
}
functionTest();

// Every function is a block but block is not a function