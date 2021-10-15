import Hikes from "./hikes.js";

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  console.log("loading....");
  var hike = new Hikes();
  hike.showHikeList();
});

// document.getElementsByClassName("button").addEventListener("click", toggleMenu);
