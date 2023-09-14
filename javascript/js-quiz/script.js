let myValue = 30;
for (let i = 5; i < 9; i++) {
  myValue += 2;
}

console.log(myValue);

console.log(7 == "7");

if (8 && 7 === "7") {
  console.log("bacon");
} else if (7 === "7" || 8) {
  console.log("lettuce");
} else {
  console.log("tomato");
}

("ba" + +"a" + "a").toLowerCase();
console.log(("ba" + +"a" + "a").toLowerCase());

const arr = new Array(2).fill(null);
console.log(`Aspi${arr.pop() ?? "ra"}tions`);

const person = { name: "Allen" };
console.log(`${("" + person.age).slice(4, 6)}nance`);

// const source = [1, 2, 3, 4, 50];
// const destination = [];

// for (let i = 0; i < source.length; ++i){
//     destination.push(source[i] + 1);
// }
// console.log(destination)
//it was .map

const source = [1, 2, 3, 4, 50];
const destination = [];

for (let i = 0; i < source.length; ++i) {
  if (source[i] % 3 === 0) {
    destination.push(source[i]);
  }
}
console.log(destination);

for (let i = 0; i < 10; ++i) {
  let str = "";
  str += i;
}
console.log(str);
