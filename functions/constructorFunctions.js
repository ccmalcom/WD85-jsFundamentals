//Option 1

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true,
}

let person2 ={
    name: 'Jeremy',
    age: 15,
    canVote: false,
}

let person3 ={
    name: 'Tyler',
    age: 38,
    canVote: true
}

//  1      2            3
function Person(n, a, ){
//  4      5    6
    this.name = n;
    this.age = a;
    this.canVote = (a >=18);

}
console.log(typeof Person);
//              7   8
let person4 = new Person('Chase', 23,);

console.log(person4);

/*
    1: function keyword
    2: function name (name should be capitalized in constructor functions)
    3: the parameters. These will be the VALUES of the object once this function is in use.
    4: The 'this' keyword. 'this' gives us the ability to refer back to whatever called or activates it. In this case, 'this' refers to 'Person'
    5: This will be a key of the new object we will creat. This is NOT referring to the parameter.
    6: This is referring to a parameter that we pass (to) our constructor function
    7 & 8: The 'new' keyword is calling our Person function, creatinga  new person with the values that we pass in as arguments, and storing that person in a variable
*/

