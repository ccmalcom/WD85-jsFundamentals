/*
!for of loops
-iterate over the values of an iterable object(strings and arrays incl)
-iterable means to be able to parse through with numbers
-works on arrays
*/

//soes not work because the properties are not iterable but enumerable
let student ={
    name: 'Jake from State Farm',
    awesome: true,
    degree: 'insurance sales',
    age: 98
};

// for(item of student){
//     console.log(item);
// }

let soupArray = ['potato','broccoli','carrot', 'chicken noodle','chili'];

for(soup of soupArray){
    console.log(soup);
}