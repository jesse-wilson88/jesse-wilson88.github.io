// Stopping Default Behavior
const brokenLink = document.getElementById("broken");

brokenLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Broken Link!");
});
