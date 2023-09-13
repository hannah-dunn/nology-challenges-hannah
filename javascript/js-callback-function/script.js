// Challenge: Altering a sentence
// * Write a function which takes in a callback, to alter every word in a sentence
// * Write three more functions that can be used as callbacks (they should work on an individual word)
// * The first one should capitalise the word. e.g hello => Hello
// * The second one should reverse the word. e.g hello => olleh
// * The third is your choice
// * Use all three in your original function to alter some example sentences

// const str = (str) => "hannah";
const firstCap = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
const reverse = (word) => {
  return word.split("").reverse().join("");
};
const capitalise = (word) => word.toUpperCase();

const fullEdit = (sentence, callback) => {
  let newWords = [];
  const wordArr = sentence.split(" ");
  for (const word of wordArr) {
    const alteredWord = callback(word);
    newWords.push(alteredWord);
  }
  return newWords.join(" ");
};

console.log(fullEdit("hello there friend", capitalise));
console.log(fullEdit("hello there friend", reverse));
console.log(fullEdit("hello there friend", firstCap));
