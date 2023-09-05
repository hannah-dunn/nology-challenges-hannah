// Write your own implementations for:
// reduce

function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

// const numbers = [1, 2, 3, 4, 5];

// Example 1: Summing all numbers in the array
const sum = customReduce(
  numbers,
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// join

function customJoin(arr, separator) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

    if (i < arr.length - 1) {
      result += separator;
    }
  }

  return result;
}

const colors = ["red", "green", "blue"];

// Example 1: Joining array elements with a comma separator
const commaSeparated = customJoin(colors, ",");
console.log(commaSeparated); // Output: "red,green,blue"

// Example 2: Joining array elements with a space separator
const spaceSeparated = customJoin(colors, " ");
console.log(spaceSeparated); // Output: "red green blue"

// reverse

function customReverse(arr) {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// const numbers = [1, 2, 3, 4, 5];

// Reverse the array
const reversedNumbers = customReverse(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

//
//
// findIndex

function customFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return -1;
}

const numbers = [1, 2, 3, 4, 5];

// Example 1: Finding the index of the first even number
const evenIndex = customFindIndex(numbers, (num) => num % 2 === 0);
console.log(evenIndex); // Output: 1 (index of the first even number)

// Example 2: Finding the index of a number greater than 10 (not found)
const greaterThanTenIndex = customFindIndex(numbers, (num) => num > 10);
console.log(greaterThanTenIndex); // Output: -1 (not found)
