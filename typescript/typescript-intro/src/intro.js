"use strict";
// Java example
// String myName = "Alex"
// Variable typing
let myName = "Alex";
// Type 'number' is not assignable to type 'string'
// myName = 12;
// Type 'boolean' is not assignable to type 'string'
// myName = false;
// TypeScript has inferred that myName is a string type
console.log("Hello " + myName);
// can't run typescript just in a browser/html or thru node.js
// tsc intro.ts makes intro.js but can't do anything with it so far
// Function param and return typing
// Java example
// int add(int a, int b){
//     return a + b
// }
const add = (a, b) => {
    return a + b;
};
// without the third 'number' parameter, typescript will infer its a number
// but we can make it certain
function subtract(a, b) {
    return a - b;
}
const result = add(10, 5);
console.log(result);
// Array typing
const names = ["Alice", "Bob", "Charlie"];
// can't add this number to my string array
// names.push(10)
const numbers = [1, 2, 3, 4];
// can't push string to number array;
// numbers.push("h");
// Just like java typescript also allows for generic type parameters
// but it all has to be the same type to work, obviously
// function combineArrays<T> (arr1; T[], arr2: T[]) {}
const combineArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
// i can say what type I want here in the <>
const combined = combineArrays([1, 2, 3], [4, 5, 6]);
// Duck typing lol
// If it looks like a duck and sounds like a duck it must be a duck
// Structural typing - it's got that field it must be that type
