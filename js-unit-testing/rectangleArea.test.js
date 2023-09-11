// dummy test to make sure jest is set up correctly
// test("testing the setup", () => {
//   expect(true).toBe(true);
// });

import { incorrectArgTypeError, rectangleArea } from "./rectangleArea.js";

describe("test cases for a function that calculates the area of a rectangle", () => {
  it("returns the right area for two valid numbers", () => {
    expect(rectangleArea(3, 4)).toBe(12);
    expect(rectangleArea(100, 200)).toBe(20000);
    expect(rectangleArea(1.1, 1.1)).toBe(1.21);
  });

  it("throws an error when incorrect argument type is passed", () => {
    expect(() => {
      rectangleArea("hi", "hi");
    }).toThrow(incorrectArgTypeError);
    // }).toThrow(new Error("Incorrect argument type, args must be numbers"));
    expect(() => {
      rectangleArea("hi", 23);
    }).toThrow(incorrectArgTypeError);
  });

  it("should throw an error when one or more arguments are 0 or negative numbers", () => {
    expect(() => {
      rectangleArea(-78, 0);
    }).toThrow(new Error("Both args must be positive numbers"));
    expect(() => {
      rectangleArea(-78, -98);
    }).toThrow(new Error("Both args must be positive numbers"));
    expect(() => {
      rectangleArea(0, 98);
    }).toThrow(new Error("Both args must be positive numbers"));
    expect(() => {
      rectangleArea(10, -98);
    }).toThrow(new Error("Both args must be positive numbers"));
  });

  it("should throw an error when less than 2 arguments are passed", () => {
    expect(() => {
      rectangleArea();
    }).toThrow(new Error("This function needs two arguments"));
  });
});
