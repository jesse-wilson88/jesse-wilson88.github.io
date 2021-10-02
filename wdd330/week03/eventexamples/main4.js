// The Object Event// The Event target
function doSomething(event) {
  text = `<b>Coordinates: screen: (${event.screenX},${event.screenY}),page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})</b>`;

  console.log(text);
  document.getElementById("example").innerHTML = text;
}

addEventListener("click", doSomething);
