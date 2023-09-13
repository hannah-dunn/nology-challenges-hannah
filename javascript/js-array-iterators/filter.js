// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log({ numbers, doubledNumbers });

const testScores = [33, 22, 45, 39];
const passingScores = testScores
  .map((score) => score + 1)
  .filter((score) => score >= 23);
console.log({ testScores, passingScores });

//initial attempt
// const myFilter = (arr, cb) => {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newValue = cb(arr[i]);
//     newArr.??(newValue);
//   }
//   return newArr;
// };

//help from robot
// function customFilter(arr, callback) {
//     const filteredArray = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         filteredArray.push(arr[i]);
//       }
//     }

//     return filteredArray;
//   }

//alexs solution
const myFilter = (arr, func) => {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const shouldKeep = func(element);
    if (shouldKeep) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

console.log(myFilter(testScores, (score) => score < 40));
