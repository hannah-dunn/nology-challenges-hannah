// fetch('https://randomuser.me/api')
//   .then((response) => response.json()) // this reads the json and turns it into a JavaScript Object
//   .then((data) => console.log(data));

const getRandomUser = async () => {
  // wait for the response
  const response = await fetch("https://randomuser.me/api");
  // turn response into data
  if (!response.ok) {
    throw new Error("Ooops");
  }
  const data = await response.json();
  return data.results[0];
};

const addNameToDom = (name) => {
  const h2 = document.querySelector("h2");
  h2.textContent = name;
};

// getRandomUser().then((user) => console.log(user));

document.querySelector("button").addEventListener("click", async () => {
  const user = await getRandomUser();
  const { first, last } = user.name;
  addNameToDom(`${first} ${last}`);
});

//
//
// my attempt
const addEmailToDom = (email) => {
  const h3 = document.querySelector("h3");
  h3.textContent = email;
};

document.getElementById("emailBtn").addEventListener("click", async () => {
  const user = await getRandomUser();
  const { emailName } = user.email;
  addEmailToDom(`${emailName}`);
});
