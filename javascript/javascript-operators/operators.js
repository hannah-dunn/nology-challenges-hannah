2 == "2"; // true, == only compares values
2 === 2; // true, === compares values and type
2 === "2"; // false? could be weird with js reading the number in the string
"2" + 3 == 23; // true if the console reads the 3 as a string
"2" + 3 === 5; // false because the types arent the same
10 % 3; // 1, modulus, division remainder
10 % 3 === 1; // true? but maybe needs brackets to do the maths in order?
(100 % 7) % 5; //
(100 % 7) % 5 !== 0; // !== means doesn't equal of value AND type
(100 % 7) % 9 == 2; //
!(10 % 2); // ! is not,
!!!!((10 % 7) % 3); //
10 % 3 === -1 % 2; // 1 === -0.5 means returns false
(892783 != "89278" + 3) == 0; // true
true && false; // false, && AND has to be true true to ever get true back
false || true; // true, || OR is true unless both false
true || false; // true
true || false; // true
true || false + true; // true? doesnt matter about +, still not false false
true * false && false + true; // false? not true true - what how is this zero??
10 && 123 && -1 && 3; //
10 && 123 && 0 && 3; //
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //
3 && "Calum" && ("" || 26); //
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //
//
//
//
//
//Answers from console
console.log(2 == "2"); //true
console.log(2 === 2); //true
console.log(2 === "2"); //false
console.log("2" + 3 == 23); //true
console.log("2" + 3 === 5); //false
console.log(10 % 3); //1
console.log(10 % 3 === 1); //true
console.log((100 % 7) % 5); //2
console.log((100 % 7) % 5 !== 0); //true
console.log((100 % 7) % 9 == 2); //true
console.log(!(10 % 2)); //true
console.log(!!!!((10 % 7) % 3)); //false
console.log(10 % 3 === -1 % 2); //false
console.log((892783 != "89278" + 3) == 0); //true
console.log(true && false); //false
console.log(false || true); //true
console.log(true || false); //true
console.log(true || false); //true
console.log(true || false + true); //true
console.log(true * false && false + true); //0
console.log(10 && 123 && -1 && 3); //3
console.log(10 && 123 && 0 && 3); //0
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1); //0
console.log(3 && "Calum" && ("" || 26)); //26
console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog"))); //CatDog
