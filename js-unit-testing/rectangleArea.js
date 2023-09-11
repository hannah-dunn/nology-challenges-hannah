export const rectangleArea = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return Math.round(a * b * 100) / 100;
  } else {
    throw new Error("Incorrect argument type, args must be numbers");
  }
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
