/*

    let hi = () => {
            console.log('hi);
    }

    1: We need to set the fat arrow function to a variable.
    2: We use the 'fat arrow' to signify that it's a function

    - arrow functions (fat arrow functions) introduced in ES6
        - a more consise way to write function expressions *not declarations
        - arrow function do NOT get hoisted
    - 2 types of arrow functions:
        - consise body
        - block body

*/

//! Consise Body
let hi = () => console.log('hi');
// concise body arrow functions return by default.
// hi();

//! Block Body
let hey = () =>{
    console.log('hi');
}

//block body arrow functions must have a return in the body of the function (between the {})

let apples = x => console.log(`There are ${x} apples.`);
apples(10);

let bananas = x =>{
    console.log(`There are ${x} bananas.`);
}
bananas('rotten')

// if no or multi parameters are needed - use ()
// do not need () if we are only passing 1 parameter