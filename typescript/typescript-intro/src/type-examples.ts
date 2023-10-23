// There are several ways of describing types in typescript
// Type keyword

// this is a Type
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// We can also use interfaces. Unlike in Java Interfaces can have properties

// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const me = {
//   firstName: "Alex",
//   lastName: "Baulderstone",
//   age: 35,
//   location: "Melbourne",
// };

// const someone = {
//   firstName: "Bob",
//   lastName: "Smith",
//   age: 45,
//   location: "Sydney",
// };

// const another = {
//   firstName: "Alice",
//   lastName: "Jones",
//   age: 20,
//   location: "Adelaide",
//   getName() {
//     return this.firstName;
//   },
// };

// // function
// const greet = (person: Person) => {
//     console.log("Hello " + person.firstName);
//   };

// greet(me);
// greet(someone);
// greet(another);

// class Person {
//   public firstName: string;
//   constructor(firstName: string) {
//     this.firstName = firstName;
//   }
// }

interface Greetable {
  getName(): string;
}

class Person implements Greetable {
  //   private firstName: string;
  //   private lastName: string;
  //   private age: number;
  //   constructor(firstName: string, lastName: string, age: number) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.age = age;
  //   }

  // below is shorthand for above

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}

  getName() {
    return this.firstName;
  }
}

class Pet implements Greetable {
  constructor(
    public animalType: string,
    public name: string,
    private noise: string
  ) {}

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

const greet = (obj: Greetable) => {
  console.log("Hello " + obj.getName());
};

greet(me);
greet(someone);
greet(another);
greet(myDog);
greet(myCat);
myCat.makeNoise();
