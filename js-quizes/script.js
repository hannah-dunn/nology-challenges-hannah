const okBtn = document.querySelector("button--important");
// 2
//

//3
// appending elements to existing elements??
// template literals??

//
// 4
const user = "remi";
const userSessionRecentHistory = ["home", "settings", "home", "about"];

const combine = (username, history) => {
  return {
    username,
    history,
  };
};

const userHistory = combine(user, userSessionRecentHistory);
console.log(userHistory);
//console logs object
// {username: 'remi', history: array(4)}
// pure = combine doesnt modify the arguments of username and history,
// user and userSessionRecentHistory are consts

//

// 5
const myFunction = (arr) => {
  return arr.reduce((acc, value) => {
    return value ? ++acc : acc;
  }, 0);
};

console.log(myFunction([1, 0, 0]));

// this function uses the reduce method to interate through the array
// and will calculate how many values are truthy
// Is the value ? truthy if so add it to the count otherwise skip it.

//

// 6
// this function could use the reduce iterator or map? is takes an
// array and starting at the 1st value in the array [0] and adds one until its gone through the whole array

// 7

const coach = {};
coach.name = "remi";
coach.age = 23;
coach.name = "calum";
coach.age += 7;

console.log(coach);

// {name: 'calum', age: 30}

// 8
//

const input = {
  cat: "fish",
  dog: "beef",
  mouse: "cheese",
};
const output = Object.entries(input)
  // we can destructure the params
  //   .toReversed()
  .map(([key, value]) => `${value}: ${key}`)
  .join("\n");

console.log(output);

// 9
//

const pets = {
  cat: "fish",
  dog: "beef",
  mouse: "cheese",
};

// const caps = (pets) =>
//   Object.keys(pets).reduce((acc, k) => {
//     acc[k.toUpperCase()] = pets[k];
//     return acc;
//   }, {});

// console.log(caps);

const caps = Object.keys(pets);
console.log(caps);

// .toUpperCase just the keys in the object?

// 10
// const getBreeds = async () => {
//   const response = await fetch(`https://catfact.ninja/breeds`);
//   return await response.json();
// };

// returns a promise
//Returns a promise! resolves the result of parsing the body as JSON?

const getBreeds = async () => {
  const responses = [];
  for (let i = 1; i < 4; ++i) {
    const response = await fetch(
      `https://catfact.ninja/breeds?limit=10&page=${i}`
    );
    responses.push(await response.json());
  }
  return responses;
};

getBreeds().then((data) => {
  console.log(data);
});

//11

// Its not efficient because it takes actual time to load with how much
// information is being fetched from the API. Something to help would
// probably be limiting the results per page to less than the 10, but
// there are 98 breeds so 10 a page makes sense to get through the pages
// faster. To fix it would it help to add promises so it can run at the
// same time/parallel to each other in the fetching?

//12

//This function is hard to test because its going to hit an infinite
// loop and it throws no errors to stop it. It would help to refactor the
// function to include errors amongst the drawCards, or to overhaul it
// entirely and change it to shuffle rather than Math.random forever.

// 25 points total
// 18 maybe????
