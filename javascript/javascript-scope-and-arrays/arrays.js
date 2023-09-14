// Challenge: Listing Hobbies
// MVP
// Create an array with 3 of your hobbies
// Print in the console the first hobby in the array
// Remove that first hobby from the array and store that hobby in a variable
// Store the length of the array in a variable
// Add another hobby at the end of the array
// Print that last hobby in the console
// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. “My hobbies are: hobby1, hobby2, hobby2”)

const hobby1 = "reading";
const hobby2 = "painting";
const hobby3 = "sleeping";

const hobbiesArray = [hobby1, hobby2, hobby3];
const firstHobby = hobbiesArray[0];
console.log(hobby1);

hobbiesArray.shift();
console.log(hobbiesArray);
console.log(hobbiesArray.length);

hobbiesArray.push("swimming");
console.log(hobbiesArray);
console.log(hobbiesArray[2]);
console.log(
  "My hobbies are: " +
    hobbiesArray[0] +
    ", " +
    hobbiesArray[1] +
    ", " +
    hobbiesArray[2]
);

// Challenge: Grocery Lists
// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

const grocery1 = "apple";
const grocery2 = "pear";
const grocery3 = "papaya";
const grocery4 = "mango";
const grocery5 = "meat";

const shoppingList = [grocery1, grocery2, grocery3, grocery4, grocery5];
console.log(shoppingList.join("|"));
