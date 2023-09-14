export const incorrectArgTypeError = new Error(
  "Incorrect argument type, args must be numbers"
);

export const rectangleArea = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error("This function needs two arguments");
  }

  if (typeof a !== "number" && typeof b !== "number") {
    throw incorrectArgTypeError;
    // throw new Error("Incorrect argument type, args must be numbers");
  }

  if (a <= 0 || b <= 0) {
    throw new Error("Both args must be positive numbers");
  }

  return Math.round(a * b * 100) / 100;
};

console.log(rectangleArea(2, 2));

try {
  rectangleArea("hello", "hi");
} catch (e) {
  // handle the error here
  // for example display error message to the user
  console.log(e.message);
}

console.log("after the error");
