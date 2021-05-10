/* *******
! ARRAY DEESTRUCTURING
***********
-allows us to unpack values from arrays or properties from objects
-similar syntax as array literals BUT is on the LEFT side of the assignment operator
    -this defines what values to unpack
-great for pulling info out of an array/object and assigning that data to it's own variable
*/

//* Syntax
const boardGames = ['Catan', 'Pandemic', 'Roll Player']

// const gameOne = boardgames[0];
// const gameOne = boardgames[1];
// const gameOne = boardgames[2];

const [gameOne, gameTwo, gameThree] = boardGames;

console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);