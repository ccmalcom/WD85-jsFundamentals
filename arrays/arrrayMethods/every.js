//! the every method checks the array for a condition and then returns true/false like the some method

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];

const isExpensive = foods.every((food) =>{
    return food.price <= 1000
})

console.log(isExpensive);
