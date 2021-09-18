// select the element to manipulate (output to) -- <date></date> in html code
const datefield = document.querySelector("#currentDate");

// Gets the current year
const thedate = new Date();
const fulldate = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(
  thedate
);
datefield.textContent = fulldate;

function toggleMenu() {
  /*console.log(document.getElementById("primaryNav").classList);*/
  document.getElementById("primaryNav").classList.toggle("hide");
}

// if (localStorage) {
//   var visits = localStorage.getItem("visits");
//   if (visits == null) visits = 1;

//   if (visits == 1) console.log("First visit");
//   else console.log(visits + " times visited");

//   localStorage.setItem("visits", visits + 1);
// }

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
