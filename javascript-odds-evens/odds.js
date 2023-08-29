// Check if a number is odd or even
// Create variable n
// Write an if / else block
// If the number passed in is even return a string "n is even"
// If the number is odd return a string "n is odd"
// BONUS: make sure that n is a number, if it’s anything other than a number, return the string “Invalid n”

let n = 5;
// n = 4;

if (n % 2 == 0) {
  console.log("n is even");
} else {
  console.log("n is odd");
}

let m = 2;

if (typeof m === "number") {
  if (m % 2 === 0) console.log("m is even");
  else console.log("m is odd");
} else console.log("Invalid m");

// else {
//     console.log("Invalid n")
// }
