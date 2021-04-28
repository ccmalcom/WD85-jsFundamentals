/*
    Switch statements execute a block of code depending on different cases.

    -often used together with a "break" or a "default" keyword (both optional)
        -break: breaks out of the switch block
        -default: (if none of these are true) specifies some code to run if there is no case match.
        -Both are optional but highly reccomended
*/

let officeCharacter = 'Dwight';

switch(officeCharacter){
    case 'Michael':
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(officeCharacter);
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/