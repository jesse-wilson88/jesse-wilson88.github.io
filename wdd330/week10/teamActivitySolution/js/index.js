// import QuakesController from "./QuakesContoller.js";
import buildNavigation from "./routing.js";

const navElement = document.getElementById("mainNav");
buildNavigation(navElement);

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();