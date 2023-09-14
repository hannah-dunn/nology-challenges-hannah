// Challenge: Generating Unique Random Numbers
// MVP
// Using a while loop generate a list of 10 random unique numbers
// Each number must be between 0 and 15
// Tips
// You may need to google how to generate, you can use the Math.random() API

let i = 0;
while (++i <= 10) {
  console.log(Math.floor(Math.random() * (16 - 0) + 0));
}

//robbies code
let numbers = [];
while (numbers.length < 10) {
  const newNum = +(Math.random() * 14 + 1).toFixed(2);
  if (numbers.includes(newNum)) {
    continue;
  }
  numbers.push(newNum);
}
console.log("10 unique numbers", numbers);

//((Math.random() * (15 - 0) + 0).toFixed(2));
// (Math.round(Math.random() * (15 - 0) + 0))

// Challenge: generateNumbers function
// MVP
// Create a function that returns a list of random whole numbers given a range
// Create a function called generateNumbers
// This function should take in 2 numbers
// n being the number of numbers to be generated
// r being the max range
// E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
// Function should return n numbers in range 0 <= n < r
// Bonus
// Add an argument to your function called isUnique
// If this is set to true, there should be no duplicate numbers in the output

// const n = 10;
// const r = 20;

// function generateNumbers(n, r) {
//   const randomNum = [];
//   let count = 0;

//   while (count < n) {
//     const randomNum = Math.floor(Math.random() * r);
//     randomNum.push(randomNum);
//     count++;
//   }
//   return randomNum;
// }

// const generatedNumbers = generateNumbers(n, r);
// console.log(generatedNumbers);

function generateNumbers(n, r) {
  let count = 0;

  while (count < n) {
    const randomNumber = Math.floor(Math.random() * r);
    console.log(randomNumber);
    count++;
  }
}

const n = 10; // Number of numbers to generate
const r = 20; // Max range
generateNumbers(n, r);

//meshaks code
// function generateRandomInt(max) {
//     max = Math.floor(max);
//     return Math.floor(Math.random() * max);
//   }
//   console.log(generateRandomNumbers1(10));

//   function generateRandomNumbers2(n, r, isUnique) {
//     let i = 0;
//     let numArr = [];

//     while (i < n) {
//       const num = generateRandomInt(r);

//       if (isUnique && numArr.includes(num)) {
//         continue;
//       }

//       numArr.push(num);
//       i++;
//     }

//     return numArr;
//   }
