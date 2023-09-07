// Count occurances
// Write a function that will count how many times an element occurs in an array
// It should take two arguments. An array, and the thing we want to count
// examples
// countOccurances([1,2,1,3,4,1,1,2,4], 1) SHOULD RETURN 4
// countOccurances([1,2,1,3,4,1,1,2,4], 2 ) SHOULD RETURN 2
// countOccurances([1,2,1,3,4,1,1,2,4], 3) SHOULD RETURN 1
// countOccurances(["Alex", "Remi", "calum", "Alex"], "Alex") SHOULD RETURN 2

// function countOccurances(arr, element) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       count++;
//     }
//   }

//   return count;
// }

function countOccurances(arr, element) {
    let count = {
        key1: arr,
        key2: element,
    }
    
  }

console.log(countOccurances([1, 2, 1, 3, 4, 1, 1, 2, 4], 1));
