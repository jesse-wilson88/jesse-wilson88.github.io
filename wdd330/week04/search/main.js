const form = document.forms["search"];
const input = form.elements.searchInput;
input.value = "Search Here";

// The focus event occurs when an element is focused on. I
// changed it because the focused alert would not go away, so
// I changed it to at least see the change.
// ----------------------------------------- //
// input.addEventListener(
//   "focus",
//   function () {
//     if (input.value === "Search Here") {
//       input.value = "";
//     }
//   },
//   false
// );

// The blur event occurs when the user moves the focus away
// from the form element.
// ----------------------------------------- //
// input.addEventListener(
//   "blur",
//   function () {
//     if (input.value === "") {
//       input.value = "Search Here";
//     }
//   },
//   false
// );

// You’ll notice the alert messagechanged only appears if you
// actually change the value inside the search box, then move
// the cursor away from it.
input.addEventListener("change", () => alert("changed"), false);

form.addEventListener("submit", search, false);

// We can actually stop the form from being submitted to that
// URL altogether by using the preventDefault() method.
function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}
