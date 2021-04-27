//string properties
// properties associated with a datatype
// strings have only one property and that is the length property

let myName = 'Chase';
console.log(myName.length);

//string methods
//methods are tools that can help us manipulate our data
//.method() .property
//methods are functions associated with datatypes

console.log(myName.toUpperCase());

let home = 'My Home is Indiana'
console.log(home.includes('indy'));
//.includes() will check if a certain string is included in another string

let sent = 'This sentence will be split into individual pieces';
console.log(sent.split('  ', 2))