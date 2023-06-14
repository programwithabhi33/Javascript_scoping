// A is the global scope variable 
const a = 3;

function test(){
    /* B scope is just to test functiona so it means it only accessible only in the test function itself */
    const b = 4;
    console.log(a,b)
}

test();

// This line give you reference error because the variable is not defined in the global scope 
// console.log(a,b)