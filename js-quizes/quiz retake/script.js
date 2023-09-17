// 27 points total

// console.log(2 == "2");
// console.log(2 === 2);
// console.log(true || false + true);
// console.log(true || (fales && false + true));

console.log(10 && 123 && -1 && 3);
console.log(true * false && false + true);
console.log(3 && "Calum" && ("" || 26));
console.log((892783 != "89278" + 3) == 0);

// const myArray = [];
// let i = 0;

// while (i++) {
//   if (i < 10) myArray.push(i ** i);
//   else break;
// }
// console.log(myArray);

// i++ shouldnt be by itself, should swap in i < 10 so that the loop will actually stop at some point, not iterate for infinity
//

const myString = "hello";
let newString = "";
for (let i = myString.length; i >= 0; i--) {
  newString += myString[i];
}

console.log(newString);

//it returns underfinedolleh
// but its trying to reverse the string 'hello', but cant access the last character of the string?
//

function myFunction(score) {
  return score > 2 ? alert("Score is greater than 2") : score > 2;
}

//

const stringManipulation = (text, toReplace, toReplaceWith) => {
  return text.replaceAll(toReplace, toReplaceWith);
};

//

//The pop() method of Array instances removes the last element from an array and returns that element.

console.log(plants.pop());

//

// const myFunction = (listOfNumber) => {
//   const myList = [];
//   for (let i = 0; i < listOfNumber.length; i++) {
//     if (!(listOfNumber[i] % 3)) myList.push(listOfNumber[i]);
//   }
//   return myList;
// };

//

const myFunction = (...values) => {
  return [...values].reduce((acc, value) => {
    return (acc += value);
  }, 0);
};

myFunction();
