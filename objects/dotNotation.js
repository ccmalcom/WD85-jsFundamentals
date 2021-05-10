let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
// console.log(netflix.name);
// console.log(netflix.id);
// console.log(netflix.season1.seasonInfo);
// console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);

/*
    Using the Netflix object, write a for loop that outputs each episode name within season 1.
    *consider how we can access that array and what we need to check
*/

// for(let i=0; i<6; i++){
//     console.log(netflix.season1.seasonInfo.episodeInfo[i].episodeName);
// }

for(let i=0; i<netflix.season1.seasonInfo.episodeInfo.length; i++){
    console.log(netflix.season1.seasonInfo.episodeInfo[i].episodeName);
}

//the above example is better for very long arrays, where you don't know the value
let spacejam={
    toonSquad:{
        bunny: 'Bugs Bunny',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars:{
        0:'Bupkus',
        1:'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers:{
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(spacejam.toonSquad.bunny);
console.log(spacejam.nbaPlayers.charlotteHornets1);