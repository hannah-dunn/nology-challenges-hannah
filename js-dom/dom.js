// getElementById
const mainHeadingById = document.getElementById("mainHeading");
console.log(mainHeadingById);
// querySelector - returns the first instance of something
const mainHeadingByQuery = document.querySelector("#mainHeading");
console.log(mainHeadingByQuery);

// even if there are multiple elements that match the query we get the first one appearing in the document
const subHeading = document.querySelector(".sub-heading");
console.log(subHeading);

// if we want all the elements that match our query we use querySelectorAll
const subHeadings = document.querySelectorAll(".sub-heading");
console.log(subHeadings);

// if we use getElementsByClassName we get a HTML collection
const subHeadingsByClassName = document.getElementsByClassName("sub-heading");
console.log(subHeadingsByClassName);

// beware of the differences between nodelist and collection
//https://www.w3schools.com/js/js_htmldom_nodelist.asp

const firstArticle = document.querySelector("article");
console.log(firstArticle);
const allArticles = document.querySelectorAll("article");
console.log(allArticles);

// Maniuplating the DOM

// change inline styling of an element

mainHeadingByQuery.style.color = "green";
subHeading.style.color = "red";

// we can also use the dom to add and remove classes
document.querySelector("p").classList.add("underlined");
subHeading.classList.remove("sub-heading");

// we can change the text content of elements

mainHeadingById.textContent = "Changed";

// JavaScript was made for user interactivity
// It allows us to create dynamic content
// we use event listeners to set up interactions and dynamic behaviour

// grab the button, and save to a variable
const button = document.querySelector("button");
// add event listener
button.addEventListener("click", (event) => {
  console.log(event);
  // hide the paragraph that is long
  const para = document.querySelector("#longPara");

  // OLD WAY
  // if (para.classList.contains('hidden')) {
  //   para.classList.remove('hidden');
  // } else {
  //   para.classList.add('hidden');
  // }

  para.classList.toggle("hidden");
  if (para.classList.contains("hidden")) {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
});

// event listeners can be predefined/passed in by name

const alertIfClicked = (e) => {
  alert(`You clicked ${e.target.id}`);
};

mainHeadingById.addEventListener("click", alertIfClicked);

// we can add event listeners in bulk
subHeadings.forEach((subHeading) => {
  subHeading.addEventListener("click", alertIfClicked);
});
