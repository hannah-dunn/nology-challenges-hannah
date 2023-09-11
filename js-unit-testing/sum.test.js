import { sum, incorrectArgTypeError } from "./sum.js";

describe("test cases for a function that calculates the sum of numbers", () => {
  it("returns the sum of numbers ", () => {
    expect(sum(2)).toBe(2);
    expect(sum(2, 3, 4, 5)).toBe(14);
    expect(sum(10, 11, 11, 11, 11)).toBe(54);
  });

  it("throws an error when there are no parameters", () => {
    expect(() => {
      sum();
    }).toThrow(new Error("This function needs arguments"));
  });

  it("throws an error if all parameters arent numbers", () => {
    expect(() => {
      sum(2, "apple", true);
    }).toThrow(incorrectArgTypeError);
    expect(() => {
      sum("apple", "hi");
    }).toThrow(incorrectArgTypeError);
  });
});
