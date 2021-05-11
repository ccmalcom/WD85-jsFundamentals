//! the slice mthod will return a copy of the specified portion of the
//! the portion is specified by the index given in the parameters

const array = [10, 'student', 'cake', -78, 'zebra', 900, 'string'];

console.log(array.slice(0, 4));
console.log(array.slice(1, 4));
console.log(array.slice(1, 3));
console.log(array.slice(1, -1));

//? if the scond parameter is not specified, the method will target the rest of the array after the specified index

console.log(array.slice(2));