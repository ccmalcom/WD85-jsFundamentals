/*
! Why do we use Classes?

? Object oriented programming (OOP)

    -Intoduced in ES5
        -new way to write JS previous existing prototype-based inheritance
        -A way of creating an object (acts like a blueprint) to create other objects
    -Classes are the closest thing in vanilla JS to OOP

? Blueprint
    -creating objects that share methods and properties
    -used to create new objects or instances of that class.
        -each object can have different values for the properties they hold

? Body of a class
    -denoted between {}
        -just like regular functions
    -where methods and/or constructor is defined

    *Constructor
        -special method for creating and initializing an object created with a class
        -can only be ONE method with the name of constructor in a class
        -can use the keyword "super" to access and call functions (or methods) on an objects parent
    
    - can be written using two different syntaxes:
        -declaration
        -expression
        ! class declarations are NOT hoisted
*/

//Class Declaration

// class Automobbile{
    //methods go in here
// }

//Class expression
//can be unnamed or named

//unnamed
let Vehicle = class{
    //methods go here
}

//named
// let Vehicle = class vehicleTwo{
    //methods
// }

//! A class needs to be declared before accessing it

//! methods
/*
    - are functions that are stored as object properties
    - allows us to perform actions inside of classes and then access those actions via dotnotation

    Two distinct methods:
        - constructor
        - prototype
*/

//! constructor
//"new" keyword introduced
//* can only be ONE

class Cookie{   //1

    constructor(type, icing, shape){    //2
        //3
        this.type = type;
        this.icing = icing;
        this.shape = shape
    }

    //methods go here
}

/* 
    1: we have a class named cookie
    2: The constructor method takes in 3 parameters (type, icing, shape)
        -is invoked when we call upon this class so arguments need to pass through it
    3: We take the parameters and assign them as values to properties inside of THIS specific object being created
        -left ot the assignment operatior (=): we assign keys
        -right of the assignment operator (=): we use parameters
*/

let chocolateChip = new Cookie('chocolate chip', false, 'circle')
/*
    -We use the 'new' keyword to create a new instance of the Cookie Class
    -We pass our arguments within the ().
    -We store this new cookie within the variable chocolateChip
*/

console.log(chocolateChip);
console.log(chocolateChip.type);

//! Prototype Methods
/*
    -methods are just functions that are stored as object properties
    -introduced in ES5
        -shorter sybtax for method definitions
        -can be called (invoked) once a new instance of a class has been created
*/

//Method Definition - Old syntax
// class Automobile {
//     start: function(){
//         //do something
//     }

//     stop: function(){
//         //do something else
//     }
// }

// class Automobile {
//     start(){
//         //do something
//         console.log('Starting the Car');
//         for(let i=0; i<5; i++){
//             console.log(`The number is: ${i}`);
//         }
//     }

//     stop(){
//         //do something else
//     }
// }

// let newCar = new Automobile();
// newCar.start();

/*
Bronze
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names.
Silver
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.
Gold
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.
*/

class Automobile {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    start(){
        //do something
        console.log(`${this.make} ${this.model} Engine has started`);
    }

    stop(){
        //do something else
        console.log(this.make, this.model, 'Engine has stopped');
        //both work, string interpolation is probably better in general
    }
}

let myCar = new Automobile('Nissan', 'Altima')
myCar.start();
myCar.stop();

//! Extends
/*
    -extends keyword is used in class declarations or class expressions to create a new class as a child of another class.
        -each new class that extends froma a parent class not only inherits the properties and methods from the parent class, but also can have its own properties and methods.
    -referred to as subclasses
*/

//Parent
class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats their food`);
    }
}

//subclass
//    1     2       3
class Dog extends Animal{
        //4
    constructor(name, breed){
        //5
        super(name);
        this.type = breed;
    }
    //6
    play(){
        console.log(`${this.name} fetches the ball!`);
    }
}

class AgeDog extends Dog{
    constructor(name, breed, age){
        super(name, breed);
        this.age = age;
    }

    test(){
        console.log(`${this.name} is a ${this.type} that is ${this.age} old.`);
    }
}

let puppy = new AgeDog('Fido', 'mutt',1)
puppy.play();
puppy.eat();
puppy.test()
/*
    1. We name the subclass (Dog)
    2. use the extend keyword to establish inheritance from the parent class (Animal)
    3. Name the parent class that we want access to.
    4. constructor method is called and two parameters are passed in.
    5. call the super(), a mthod, in the constructor
        - calls the parents constructor method and allows theis subclass to gain access to the parent's properties and methods.
        - super() method MUST be called in the constructor method in order for us to access "this" keyword.
    6. Created a method that is only accessible in the subclass and not the parent class.
*/

let Deohgee = new Dog('Dehogee', 'mutt')
Deohgee.eat();