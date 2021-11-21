import QuakesController from "./QuakesController.js";

const routes = [
  {
    controller: new QuakesController("#quakeList"),
    file: "views/quakeList.html",
    label: "Local Quakes",
  },
  {
    controller: new QuakesController("#quakeList"),
    file: "views/quakeList.html",
    label: "Yellowstone Quakes",
  },
];

export default function buildNavigation(parent) {
  routes.forEach((route) => {
    let item = document.createElement("li");
    item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
    parent.appendChild(item);
    addNavEventAsync(item, route.file, route.controller);
  });
}

async function getViewAsync(viewPath) {
  try {
    const response = await fetch(viewPath);
    const text = await response.text();

    return text;
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

function addNavEventAsync(element, path, controller) {
   element.addEventListener("touchend", (e) => {
    insertViewAsync(getViewAsync(path), controller);
    e.preventDefault();
  });
  element.addEventListener("click", (e) => {
    insertViewAsync(getViewAsync(path), controller);
  });
}

async function insertViewAsync(viewPromise, controller) {
  const contentElement = document.getElementById("content");

  contentElement.innerHTML = await viewPromise;
  controller.init();
}
