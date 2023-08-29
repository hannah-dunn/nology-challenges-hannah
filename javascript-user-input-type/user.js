// Console log the user’s input depending on the data type
// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say “invalid input”

let userInput = 5;

if (typeof userInput === "number") {
  console.log(userInput * userInput);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("invalid input");
}

// userInput * userInput
// isNaN(userInput)
