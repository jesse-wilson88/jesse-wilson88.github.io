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
