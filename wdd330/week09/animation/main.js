// #square1
const squareElement1 = document.getElementById("square1");

let angle1 = 0;

setInterval(() => {
  angle1 = (angle1 + 2) % 360;
  squareElement1.style.transform = `rotate(${angle1}deg)`;
}, 1000 / 60);

// #square2
const squareElement2 = document.getElementById("square2");

let angle2 = 0;

function rotate() {
  angle2 = (angle2 + 2) % 360;
  squareElement2.style.transform = `rotate(${angle2}deg)`;
  window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
