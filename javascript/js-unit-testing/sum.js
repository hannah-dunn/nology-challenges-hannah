// a function that calculates the sum of numbers
// returns the sum of numbers
// it should work for different amount of arguments - 1 or more

//no parameters sum() -> throw an error
// all parameters must be numbers -> if not throw an error sum(2, "apple", true)

// sum(2)
// sum(2, 3, 4, 5)
// sum(10, 11, 11, 11, 11)

export const incorrectArgTypeError = new Error("Parameters must be numbers");

export const sum = (numbers) => {
  if (numbers === undefined) {
    throw new Error("This function needs arguments");
  }

  if (typeof numbers !== "number") {
    throw incorrectArgTypeError;
  }

  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    return (totalSum += numbers[i]);
  }
};

console.log(sum(2, 3, 4, 5));

// martynas solution
// export const noArgsError = new Error("At least one argument must be passed");
// export const invalidArgsError = new Error("All arguments must be numbers");
// export const sum = (...numbers) => {
//     // this is an array
//     console.log(numbers);

//     if (numbers.length === 0) {
//         throw noArgsError;
//     }

//     if (numbers.filter((num) => typeof num !== "number").length > 0) {
//         throw invalidArgsError;
//     }

//     return numbers.reduce((acc, curr) => (acc += curr));
// };
