// The Mouse Event
const clickParagraph = document.getElementById("click");
clickParagraph.addEventListener("click", () => console.log("click"));
clickParagraph.addEventListener("mousedown", () => console.log("down"));
clickParagraph.addEventListener("mouseup", () => console.log("up"));
clickParagraph.addEventListener("dblclick", () => console.log("up"));

const dblclickParagraph = document.getElementById("dblclick");
dblclickParagraph.addEventListener("dblclick", highlight);

const mouseParagraph = document.getElementById("mouse");
mouseParagraph.addEventListener("mouseover", highlight);
mouseParagraph.addEventListener("mouseout", highlight);
mouseParagraph.addEventListener("mousemove", () => console.log("You Moved!"));

function highlight(event) {
  event.target.classList.toggle("highlight");
}

addEventListener("keydown", highlight);

addEventListener("keypress", (event) =>
  console.log(`You pressed the ${new Date()} character`)
);

addEventListener("keyup", (event) =>
  console.log(`You stopped pressing the key on ${event.key}`)
);

addEventListener("keydown", (event) => {
  if (event.key === "c" && event.ctrlKey) {
    console.log("Action canceled!");
  }
});

addEventListener("click", (event) => {
  if (event.shiftKey) {
    console.log("A Shifty Click!");
  }
});
