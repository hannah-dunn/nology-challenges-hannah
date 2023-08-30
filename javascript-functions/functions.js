// Challenge: Calculating Moon Orbits
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbits(days) {
  const oneOrbit = 27;
  const orbits = days / oneOrbit;
  return orbits;
}

console.log(moonOrbits(54));

// Challenge: Working with Circles
// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

function circleArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

function circlePerim(radius) {
  const perimeter = 2 * Math.PI * radius;
  return perimeter;
}

//to slimline--
//   function circleArea(radius) {
//   return Math.PI * radius * radius;
//  }

console.log(circleArea(10));
console.log(circlePerim(10));

// Challenge: Years to Days & Seconds

// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

function ageInDays(years) {
  const daysInYear = 365;
  const ageInDays = years * daysInYear;
  return ageInDays;
}

function ageInSeconds(years) {
  const secondsInDay = 24 * 60 * 60;
  const ageInDays = ageInDays(years);
  const ageInSeconds = ageInDays * secondsInDay; //it cant reach age in days
  return ageInSeconds;
}

console.log(ageInDays(32));
console.log(ageInSeconds(32));

// sams version
// const ageInDays = (age) => {
//     return console.log(age * 365);
//   };

//   const ageInSeconds = (age) => {
//     return console.log(age * 365 * 24 * 60 * 60);
//   };

//   ageInDays(32);
//   ageInSeconds(32);

// Challenge: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
//  possibly zero. Return that value.
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

// function remainder(x, y) {
//   const numberRemainder = x % y;
//   return numberRemainder;
// }

function remainder(x, y) {
  return x % y;
}

console.log(remainder(1, 3)); // output is 1!

// Challenge: Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for
// the team and return that value.

function finalPoints(twoPointers, threePointers) {
  const twoPoint = 2;
  const threePoint = 3;
  totalPoints = twoPoint * twoPoint + threePoint * threePoint;
  return totalPoints;
}

console.log(finalPoints(2, 4));

// function calculatePoints(points2, points3) {
//     let twoPointer = points2 * 2;
//     let threePointer = points3 * 3;

//     return twoPointer + threePointer;
//    }

// function finalPoints (twoPoin, three_point){
//     return two_point*2 + three_point*3;
// }

// Challenge: Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessThan100Two(num1, num2) {
  const sum = num1 + num2;
  if (sum > 100) {
    return false;
  } else {
    return true;
  }
}

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
