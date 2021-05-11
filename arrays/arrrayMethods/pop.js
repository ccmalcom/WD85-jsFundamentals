//! the pop method is similar to the shift mothod, except it removes the last element from an array and returns it
//! this method will change the length of the array

const array = [10, 'student', 'cake', -78, 'zebra'];

console.log("Before: ", array);

const lastItem = array.pop();

console.log("After: ", array);

console.log("Popped item: ", lastItem);

