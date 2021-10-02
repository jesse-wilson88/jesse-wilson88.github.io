// The Touch Event
function highlight(event) {
  event.target.classList.toggle("highlight");
}

addEventListener("touchend", () => console.log("Touch stopped"));
