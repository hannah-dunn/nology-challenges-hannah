"use strict";
let myName = "Alex";
console.log("Hello " + myName);
const add = (a, b) => {
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
const result = add(10, 5);
console.log(result);
const names = ["Alice", "Bob", "Charlie"];
const numbers = [1, 2, 3, 4];
const combineArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const combined = combineArrays([1, 2, 3], [4, 5, 6]);
