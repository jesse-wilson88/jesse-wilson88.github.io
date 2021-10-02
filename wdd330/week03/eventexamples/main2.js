// The Object Event
function doSomething(event) {
  message = `Event type: click`;

  console.log(event.type);

  document.getElementById("example").innerHTML = message;
}

addEventListener("click", doSomething);
