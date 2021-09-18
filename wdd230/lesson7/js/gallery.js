// This is the last time the page was open
let lastTime = localStorage.getItem("time");

// Calculate the difference from now to last time visited
let difference = (new Date() - Date.parse(lastTime)) / 1000 / 60 / 60 / 24;
//console.log(parseInt(difference));
document.getElementById("lastVisited").innerHTML = parseInt(difference);

// Store new time when site visited
localStorage.setItem("time", new Date());
