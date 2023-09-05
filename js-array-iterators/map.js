// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log({ numbers, doubledNumbers });

const testScores = [33, 22, 45, 39];
const passingScores = testScores
  .map((score) => score + 1)
  .filter((score) => score >= 23);
console.log({ testScores, passingScores });
