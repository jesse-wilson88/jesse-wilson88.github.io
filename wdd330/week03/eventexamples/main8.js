// The Touch Event
const onceParagraph = document.getElementById("once");

onceParagraph.addEventListener("click", remove);

function remove(event) {
  console.log("Enjoy this while it lasts!");
  onceParagraph.style.backgroundColor = "pink";
  onceParagraph.removeEventListener("click", remove);
}
