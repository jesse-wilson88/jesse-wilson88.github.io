// wss is the secure protocol used by websockets instead of HTTP.
// The site is the Echo server hosted at websocket.org.
// This accepts messages then returns the same message (like an echo).
// const URL = "wss://echo.websocket.org:443/"; // This does not work
const URL = "wss://javascript.info/article/websocket/demo/hello";

// The variable is outputDiv and it’s used to store a reference to the <div> element where we will be displaying the messages.

const outputDiv = document.getElementById("output");

// The form variable is also used to store a reference to the form element.
const form = document.forms[0];

// The variable called connection stores a reference to our websocket object.
// This is created using a constructor function, and takes the URL as a parameter.
//
const connection = new WebSocket(URL);

// An instance of a Websocket object is created and tries to connect to the URL.
// When this is successful, it fires an event called “open”.
// This is one of a number of events that a WebSocket object can emit.
// To deal with this an event handler is added.
connection.addEventListener(
  "open",
  () => {
    output("CONNECTED"); // CONNECTED is a default message
  },
  false
);

// Sends messages to screen
function output(message) {
  const para = document.createElement("p");
  para.innerHTML = message;
  outputDiv.appendChild(para);
}

// This event listener invokes the message() function
form.addEventListener("submit", message, false);

function message(event) {
  event.preventDefault(); // Stop the default behavior, so the form doesn’t actually get submitted.
  const text = form.message.value; // Grabs the value of the text input and store it in a local variable.
  output(`SENT: ${text}`); // Adds the message to the “output” <div>, with the phrase “SENT:” at the start.
  connection.send(text); // This sends the message to the URL that the websocket is connected to.
}
// When this message is received, the server will process it and send a response.
// The connection object waits for the response, and when it receives one, a “message” event is fired.
// The “echo.websocket.org” server simply responds with the same message, but any message could be
// processed in a variety of ways before sending a response.

// This event handler deals with the response
connection.addEventListener(
  "message",
  (event) => {
    output(`RESPONSE: ${event.data}`);
  },
  false
);
