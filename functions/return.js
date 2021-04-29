
let hi = () => {
    //1
    return 'hi';
}
//      2     3
let newName = hi();

console.log(newName);

/*
    1: The keyword that brings our data out of our function
    2: We need a new variable to hold the value of the return.
    3: When called, the function becomes the value of the return.
*/

let z ;
let a ;
let math = (num1, num2) => {
    let total = num1 + num2;
    return total;
}

let sum = math(1,2)
let sum2 = math(5293, 12394)
let sum3 = math(z, a)
console.log(sum);
console.log(sum2);
console.log(sum3);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalculator(price){
    let tip = (price * .2);
    return tip;
}

let thisTip = tipCalculator(20)
console.log(thisTip);

tipCalculator(20) // ? why doesn't this work?

// let check = (bill, tip) =>{
//     let tipAmount = bill * tip;
//     let final = bill + tipAmount;
//     return final;
// }

// let payment = check(20, .2);
// console.log(payment);

function tipCal(price * tipPercent){
    let 
}


