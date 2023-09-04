// // Challenge: Sum of n
// // MVP:
// // Create a function with a for loop that will add all the numbers up to n
// // You should create a variable to set the upper limit of your loop
// // Your loop should increment by 1 on each iteration
// // Your loop should print the final result
// // sum(10) => 55
// // Bonus:
// // Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    return (total += i);
  }
}
console.log(sum(10));

// function sum(n) {
//   let numbersAdded = 0;
//   for (let i = 1; i <= n; ++i) {
//    numbersAdded += i;
//   }
//   console.log(numbersAdded);
//  }

//  sum(10);

//  function add(n) {
//   const numbersAdded = (n * (n + 1)) / 2;
//   console.log(numbersAdded);
//  }

//  add(10);

// Challenge: Write a shopping list
// MVP:
// Create a function with a for loop that will add numbers to your shopping list
// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console
// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream

function createShoppingList(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}. ${items[i]}`);
  }
}

const shoppingItems = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];
createShoppingList(shoppingItems);

// const myShopping = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

// for (let i = 0; i < myShopping.length; i++) {
// 	myShopping[i] = (i + 1) + ". " + myShopping[i] ;
// }

// console.log(myShopping);


// Challenge: Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

const str = "Loops are hard";
let secondStr = "";

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 1) {
    secondStr += str[i - 1].toUpperCase();
  } else {
    secondStr += str[i];
  }
}

console.log(secondStr);

// const myStr = "hello";
// let newStr = "";
// for (i = 0; i < myStr.length; i++) {
//   if (i % 2 != 0) {
//     newStr += myStr[i].toUpperCase();
//   } else {
//     newStr += String.fromCharCode(myStr[i].charCodeAt() + 1);
//   }
// }
// console.log(newStr);

// Challenge: Removing Vowels
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r
// E.g: calum => calum, rachel => rchel, martyna => martyn

const firstStr = "I hate loops";
let newStr = "";

for (let i = 0; i < firstStr.length; i++) {
  console.log(firstStr.replace(/[aeiou]/gi, ""));
}


// let str3 = "Sydney";

// let newString = "";

// for (let i = 0; i < str3.length; i++) {
//   let char = str3[i];
//   if (!"aeiouAEIOU".includes(char)) {
//     newString += char;
//   }
// }

// console.log(newString);

// //Bonus

// let str4 = "rachel";

// let newString2 = "";

// for (let i = 0; i < str4.length; i++) {
//   let char = str4[i];
//   if ("aeiouAEIOU".includes(char)) {
//     if (i + 1 < str4.length && "lmrLMR".includes(str4[i + 1])) {
//       newString2 += char;
//     }
//   } else {
//     newString2 += char;
//   }
// }

// console.log(newString2);