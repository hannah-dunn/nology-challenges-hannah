"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        return this.firstName;
    }
}
class Pet {
    constructor(animalType, name, noise) {
        this.animalType = animalType;
        this.name = name;
        this.noise = noise;
    }
    getName() {
        return this.name;
    }
    makeNoise() {
        return this.noise.toUpperCase() + "!!!";
    }
}
const me = new Person("Alex", "Baulderstone", 35);
const someone = new Person("Bob", "Smith", 45);
const another = new Person("Alice", "Jones", 20);
const myDog = new Pet("Dog", "Fido", "woof");
const myCat = new Pet("Cat", "Fluffy", "meow");
const greet = (obj) => {
    console.log("Hello " + obj.getName());
};
greet(me);
greet(someone);
greet(another);
greet(myDog);
greet(myCat);
myCat.makeNoise();
