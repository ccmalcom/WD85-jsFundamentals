//! the map method allows you to take one array and convert it into a new array that is populated with the results of the function passed through

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];

const foodNames = foods.map((item)=>{
    return item.name
});

console.log(foodNames);