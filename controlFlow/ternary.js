//shortcut for writing if/else and else/if statements

let num = 'Chase';

if (num > 0){
    console.log('Yes');
} else{
    console.log('No');
}

// IF    if true          else    if false
num > 0 ? console.log('Yes') : console.log('No');

num > 10 ? console.log('It is larger than 10') : 
num < 5 ? console.log('It is smaller than 5') : 
num < 10 ? console.log('It is less than 10') : 
console.log(`${num} is NaN`);

//num + "is NaN"