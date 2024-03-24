/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const newName = "Olivia Smart";


/* Step 3 - Element Variables */
/* Step 4 - Adding Content */
const nameElement = document.querySelector("#name");
nameElement.textContent = newName;
const year = new Date().getFullYear();
const yearElement = document.querySelector("#year");
yearElement.textContent = year;
const picture = "images/me.jpeg";
const pictureElement = document.querySelector("#picture");
pictureElement.setAttribute("src", picture);






/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Hamburgers", "Steak", "French Fries"];
const foodElement = document.querySelector("#food");
foodElement.textContent = favoriteFoods.join(", ");
const anotherFavoriteFood = "Alfredo";
favoriteFoods.push(anotherFavoriteFood);
foodElement.textContent = favoriteFoods.join(", ");
favoriteFoods.shift();
foodElement.textContent = favoriteFoods.join(", ");
favoriteFoods.pop();
foodElement.textContent = favoriteFoods.join(", ");
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector("#year").value = currentYear;





