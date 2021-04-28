/*
! for in loops
-great for iteration over values in an object
-properties in objects are what's called enumberable
-enumerable just means countable
-works on objects
*/

let student ={
    name: 'Jake from State Farm',
    awesome: true,
    degree: 'insurance sales',
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
}