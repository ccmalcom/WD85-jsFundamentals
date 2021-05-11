//! the sort method sorts the items in an array. The sort order can either be alphabetic or numeric, ascending or descending
//? by default, sort() orders the values as strings in alphabetical and ascending order
//*can take in a compare function

const shoppingList = ['celery', 'limes', 'grenadine', 'oranges'];

console.log(shoppingList.sort());

const costs = [3,2,12,1000];

console.log(costs.sort((a,b) => b - a));
//descending order
console.log(costs.sort((a,b) => a - b));
//ascending orders