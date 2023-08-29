// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference

//Andys help

let parent1EyeColor = "blue";
let parent2EyeColor = "brown";

let eyeColorProbabilities = {
  blue: {
    blue: 99.0,
    brown: 0.0,
    green: 1.0,
  },
  brown: {
    blue: 6.25,
    brown: 75.0,
    green: 18.75,
  },
  green: {
    blue: 25.0,
    brown: 1.0,
    green: 75.0,
  },
};

console.log(`Your eye colors are ${parent1EyeColor} and ${parent2EyeColor},`);
console.log(`the chances of your child having:`);
const childProbabilities = eyeColorProbabilities[parent1EyeColor];
for (const childColor in childProbabilities) {
  console.log(`${childColor} is ${childProbabilities[childColor]}%`);
}
