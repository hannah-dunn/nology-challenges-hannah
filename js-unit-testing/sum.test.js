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

// martynas solution
// import { sum, invalidArgsError, noArgsError } from "./sum.js";

// describe("sum tests", () => {
//     it("Should throw an error if one or more parameters are not a number", () => {
//         expect(() => {
//             sum(1, "test");
//         }).toThrow(invalidArgsError);

//         expect(() => {
//             sum("4242", true);
//         }).toThrow(invalidArgsError);

//         expect(() => {
//             sum(1, "test", 2, 3, 4, 5, 6, 7, {});
//         }).toThrow(invalidArgsError);
//     });

//     it("Should throw an error if no parameters are passed", () => {
//         expect(() => {
//             sum();
//         }).toThrow(noArgsError);
//     });

//     it("Should sum up any number of inputs (inputs >= 1)", () => {
//         expect(sum(1, 2)).toBe(3);
//         expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
//         expect(sum(100)).toBe(100);
//     });
// });
