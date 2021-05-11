//! the reduce method executes a function for each specified value in an array and returns a single value

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 5},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25}
];
                            //1
const total = foods.reduce((currentTotal, item)=>{
    console.log(currentTotal);
    //2
    return item.price + currentTotal;
    //3
}, 0);

console.log(total);

/* 
1: this method takes in two parameters
    -the first being the sum of the numbers at each iteration
    -the second will be what item we are iteration over(can be named anything)

2: we look at the price of the food item, then add it to the current total
    -then we repeat it over and over again for each item in the array

3: the 0 at the end specifies what value we are going to start at.
    -so if we put 200, the total would come out to 1040

*/

