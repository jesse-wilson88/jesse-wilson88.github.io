// This is the last time the page was open
let lastTime = localStorage.getItem("time");

// Calculate the difference from now to last time visited
let difference = (new Date() - Date.parse(lastTime)) / 1000 / 60 / 60 / 24;

if (difference == 1) {
  message = "Last visited " + parseInt(difference) + " day ago.";
} else {
  message = "Last visited " + parseInt(difference) + " days ago.";
}

// Setting the message to the lastVisited ID
document.querySelector("#lastVisited").textContent = message;

// Store new time when site visited
localStorage.setItem("time", new Date());
