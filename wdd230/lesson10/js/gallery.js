// This is the last time the page was open
let lastTime = localStorage.getItem("time");

// Calculate the difference from now to last time visited
let difference = (new Date() - Date.parse(lastTime)) / 1000 / 60 / 60 / 24;
//console.log(parseInt(difference));

// Generate the message for the users last visit
if (difference <= 1) {
  message = "Welcome to weather to go or not.";
  //console.log("Never visited");
} else if (difference < 2) {
  message = "Last visited " + parseInt(difference) + " day ago.";
  //console.log("Visited 1 day ago");
} else {
  message = "Last visited " + parseInt(difference) + " days ago.";
  //console.log("Visited 2 or more day ago");
}

// Setting the message to the lastVisited ID
document.querySelector("#lastVisited").textContent = message;

// Store new time when site visited
localStorage.setItem("time", new Date());
