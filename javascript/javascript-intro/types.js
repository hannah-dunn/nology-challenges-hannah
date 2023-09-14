console.log("Hello");

typeof 15; // Prediction: Number
typeof 5.5; // Prediction: Number
typeof NaN; // Prediction: Null?
typeof "hello"; // Prediction: String
typeof true; // Prediction: Boolean
typeof (1 != 2); // Prediction: Object?
"hamburger" + "s"; // Prediction: String 'hamburgers'
"hamburgers" - "s"; // Prediction: NaN
"1" + "3"; // Prediction: String '13'
"1" - "3"; // Prediction: NaN?
"johnny" + 5; // Prediction: String 'johnny5'
"johnny" - 5; // Prediction: NaN
99 * "luftbaloons"; //  Prediction: NaN?

console.log(typeof 15); //number
console.log(typeof 5.5); //number
console.log(typeof NaN); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof (1 != 2)); //boolean
console.log("hamburger" + "s"); // hamburgers
console.log("hamburger" - "s"); //NaN
console.log("1" + "3"); // 13
console.log("1" - "3"); // NaN but it reads the string and can do the maths
console.log("johnny" + 5); // johnny5
console.log("johnny" - 5); // NaN
console.log(99 * "luftbaloons"); // NaN
