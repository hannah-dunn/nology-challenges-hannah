"use strict";
// There are several ways of describing types in typescript
// Type keyword
class Person {
    //   private firstName: string;
    //   private lastName: string;
    //   private age: number;
    //   constructor(firstName: string, lastName: string, age: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //   }
    // below is shorthand for above
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
    constructor(animalType, name) {
        this.animalType = animalType;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const me = new Person("Alex", "Baulderstone", 35);
const someone = new Person("Bob", "Smith", 45);
const another = new Person("Alice", "Jones", 20);
const myDog = new Pet("Dog", "Fido");
const myCat = new Pet("Cat", "Fluffy");
const greet = (obj) => {
    console.log("Hello " + obj.getName());
};
greet(me);
greet(someone);
greet(another);
greet(myDog);
greet(myCat);
