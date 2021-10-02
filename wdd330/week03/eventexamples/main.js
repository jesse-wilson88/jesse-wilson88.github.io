// ------ Event Object Effects Console------ //
// function doSomething() {
//   console.log("Something Happened!");
// }

// function doSomething(event) {
//   eventType = `${event.type}`;

//   console.log(event.type);
// }

// ------ Target Object ------ //
// function doSomething(event) {
//   console.log(event.target);
// }

// ------ Coordinates Object ------ //
// function doSomething(event) {
//   coords = `screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`;

//   console.log(coords);
// }

// ------ Do not comment out if using above code----- //
// addEventListener("click", doSomething);

// ---------- //
// ---------- //

// ------ Mouse Events Effects Page----- //
const clickParagraph = document.getElementById("click");
const dblclickParagraph = document.getElementById("dblclick");

clickParagraph.addEventListener("click", () => console.log("click"));
clickParagraph.addEventListener("mousedown", () => console.log("mousedown"));
clickParagraph.addEventListener("mouseup", () => console.log("mouseup"));

dblclickParagraph.addEventListener("dblclick", highlight);

const mouseParagraph = document.getElementById("mouse");

mouseParagraph.addEventListener("mouseover", highlight);
mouseParagraph.addEventListener("mouseout", highlight);

mouseParagraph.addEventListener("mousemove", () => console.log("You Moved!"));

function highlight(event) {
  event.target.classList.toggle("highlight");
}

//------ Keyboard Events Effects Console ------ //
//The keydown event is the action of pressing a key
addEventListener("keydown", highlight);

// Show the exact time the key was released in the console
addEventListener("keyup", (event) =>
  console.log(`You stopped pressing the key on ${new Date()}`)
);

// Each of these keyboard events have an key property that returns the printed
// representation of the key that was pressed, if it has one.
addEventListener("keypress", (event) =>
  console.log(`You pressed the ${event.key} character`)
);

// Pressing the modifier keys such as Shift, Ctrl, Alt and meta (Cmd on Mac
// will fire the keydown and keyup events, but not the keypress event as they
// don’t produce any characters on the screen.
addEventListener("keydown", (event) =>
  console.log(`You pressed the ${event.key} character`)
);

// The following code will check to see if the user pressed the C key while
// holding down the Ctrl key ------ //
addEventListener("keydown", (event) => {
  if (event.key === "c" && event.ctrlKey) {
    console.log("Action canceled!");
  }
});
// The following code checks to see if the Shift key was held down when the
// mouse was clicked
addEventListener("click", (event) => {
  if (event.shiftKey) {
    console.log("A Shifty Click!");
  }
});

// ------ Touch Events Effects Console ------ //
// The touchend event occurs when a user stops touching the surface
addEventListener("touchend", () => console.log("Touch stopped"));

// ------ Removing Event Listeners ------ //
// An event listener can be removed using the removeEventListener() method
const onceParagraph = document.getElementById("once");

onceParagraph.addEventListener("click", remove);

function remove(event) {
  console.log("Enjoy this while it lasts!");
  onceParagraph.style.backgroundColor = "pink";
  onceParagraph.removeEventListener("click", remove);
}

// ------ Stopping Default Behavior ------ //
const brokenLink = document.getElementById("broken");

brokenLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Broken Link!");
});

// ------ Bubbling ------ //
ulElement = document.getElementById("list");
liElement = document.querySelector("#list li");

// ulElement.addEventListener("click", (event) => console.log("Clicked on ul"));
// liElement.addEventListener("click", (event) => console.log("Clicked on li"));

// ------ Capturing ------ //
// ulElement.addEventListener(
//   "click",
//   (event) => console.log("Clicked on ul"),
//   true
// );
// liElement.addEventListener(
//   "click",
//   (event) => console.log("Clicked on li"),
//   true
// );

// ------ Capturing & Bubbling ------ //
// capturing
ulElement.addEventListener(
  "click",
  (event) => console.log("Clicked on ul"),
  true
);
liElement.addEventListener(
  "click",
  (event) => console.log("Clicked on li"),
  true
);

// bubbling
ulElement.addEventListener(
  "click",
  (event) => console.log("Clicked on ul"),
  false
);
liElement.addEventListener(
  "click",
  (event) => console.log("Clicked on li"),
  false
);

// ------ Stopping the Bubbling Phase ------ //
// Be very wary of using the stopPropagation() method to stop the bubble
// phase occurring. There may be other event listeners attached to elements
// further up the chain that won’t fire as a result.

// liElement.addEventListener(
//   "click",
//   (event) => {
//     console.log("clicked on li");
//     event.stopPropagation();
//   },
//   false
// );

// ------ Event Delegation ------ //
ulElement.addEventListener("click", highlight);
