//! the filter method allows us to go through an array and return oor filter out parameters that meet (or don't meet) a specific condition

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];

const filterPrice = foods.filter((food)=>{
    return food.price <= 100;
})

console.log(filterPrice);

const filterNames = foods.filter((food)=>{
    return food.name.startsWith('b')
})

console.log(filterNames);