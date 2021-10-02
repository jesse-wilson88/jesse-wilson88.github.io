// The Object Event// The Event target
function doSomething(event) {
  target = `Event target: ${event.target}`;

  console.log(event.target);

  document.getElementById("example").innerHTML = target;
}

addEventListener("click", doSomething);
