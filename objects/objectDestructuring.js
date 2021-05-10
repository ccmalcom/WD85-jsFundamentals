//see array destructuring

const game ={
    title: 'Fallout 76',
    developer: 'Bethesda',
    platforms: ['PC', 'PS4', 'Xbox One']
}

const {title, platforms} = game;

console.log(title, platforms);