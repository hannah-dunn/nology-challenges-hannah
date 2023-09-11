// dummy test to make sure jest is set up correctly
// test("testing the setup", () => {
//   expect(true).toBe(true);
// });

import { rectangleArea } from "./rectangleArea.js";

describe("test cases for a function that calculates the area of a rectangle", () => {
  it("returns the right area for two valid numbers", () => {
    expect(rectangleArea(3, 4)).toBe(12);
    expect(rectangleArea(100, 200)).toBe(20000);
    expect(rectangleArea(1.1, 1.1)).toBe(1.21);
  });

  it("throws an error when incorrect argument type is passed", () => {
    expect(() => {
      rectangleArea("hi", "hi");
    }).toThrow(new Error("Some error"));
  });
});
