//! the spread operator expands the contents of an array and takes it out of it's array structure
//! indicated by 3 dots (...array)

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];

console.log(...foods);

const months = [
    'Jan',   'Feb',
    'March', 'April',
    'May',   'June',
    'July',  'Aug'
  ]
  
console.log(...months);

let newArray = [...foods, ...months]

console.log(newArray);