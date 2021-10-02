// The Object Event
function doSomething() {
  console.log("Something Happened!");

  document.getElementById("example").innerHTML = "Message: Something Happened!";
}

addEventListener("click", doSomething);
