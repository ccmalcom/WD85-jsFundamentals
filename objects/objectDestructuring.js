//see array destructuring

// const game ={
//     title: 'Fallout 76',
//     developer: 'Bethesda',
//     platforms: ['PC', 'PS4', 'Xbox One']
// }

// const {title, platforms} = game;

// console.log(title, platforms);

const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];

const [{title: gameOne, developer: devOne}, , {title: gameThree}] = games;
console.log(gameOne, devOne, gameThree);

for ({title, developer} of games){
    console.log(`${title} is developed by ${developer}`);
}