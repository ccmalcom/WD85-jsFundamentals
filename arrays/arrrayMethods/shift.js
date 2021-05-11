//! the shift method removes the first element of the array and returns it
//! this method changes the length of the array

const array = [10, 'student', 'cake', -78, 'zebra'];

console.log('Before: ', array);

const firstItem = array.shift();

console.log("After: ", array);

console.log(firstItem);