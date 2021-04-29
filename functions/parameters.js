//          1
function hi(userName){
    console.log(`Hi, ${userName}.`);
} //                    2

//  3
hi('ratbit');

/*
    1: the parameter(s) that the function is accepting or holding.
    2: using string interpolation, we can refer to the parameter given to the funciton
    3: this is where we define what the parameter's value will be
*/

hi('adam')

let myUser = 'Brittany';
hi(myUser);

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function hello(first, last){
    // let myName = first + ' ' + last;
    // console.log(`Hello, my name is ${myName}.`); (this works too)
    // console.log(myName);
    console.log(`Hello, my name is ${first} ${last}`);

}

hello('Chase', 'Malcom')