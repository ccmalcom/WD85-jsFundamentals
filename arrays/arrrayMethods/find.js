//! the find method allows you to find a single object in an array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];

const foundFood = foods.find((food)=>{
    return food.name === 'mint'
})

console.log(foundFood);

//? will only return the first instance of the condition