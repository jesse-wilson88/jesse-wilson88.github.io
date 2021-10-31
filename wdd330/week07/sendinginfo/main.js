// This is from the book JavaScript: Novice to Ninja, 2nd Edition from page 520 to 524

// This is a standard HTML5 web page that contains two buttons and a <div>
// element. Each button will be used to make a different type of Ajax request. One
// will request plain text and the other will request a JSON string from an external
// API. The div with an id of output will be where we’ll insert the response we
// receive from the Ajax request.
// For our Ajax requests, we’ll be using a couple of online APIs. The first is
// NumbersAPI6, which returns facts about random numbers as a text string. The
// second is chucknorris.io7, which returns a JSON string, containing a random
// satirical factoid about everybody’s favorite hard man, Chuck Norris.
const textButton = document.getElementById("number");
const apiButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

// This assigns each of the buttons in the HTML file to a variable, so we can refer to
// them later in the file.
// Next, we’ll assign some URLs to variables:
const textURL = "http://numbersapi.com/random";
const apiURL = "https://api.chucknorris.io/jokes/random";

// And finally, we’ll assign an event handler to each button. Let’s start with the
// Number Fact button:
textButton.addEventListener(
  "click",
  () => {
    fetch(textURL)
      .then((response) => {
        outputDiv.innerHTML = "Waiting for response...";
        if (response.ok) {
          return response;
        }
        throw Error(response.statusText);
      })
      .then((response) => response.text())
      .then((text) => (outputDiv.innerText = text))
      .catch((error) => console.log("There was an error:", error));
  },
  false
);

// This uses the format we saw earlier to construct a fetch request. This returns a
// promise that resolves to a string. We can then place that string inside the <div>
// with an id of output by assigning it its innerText property.

// And now for the Chuck Norris Fact button:
apiButton.addEventListener(
  "click",
  () => {
    fetch(apiURL)
      .then((response) => {
        outputDiv.innerHTML = "Waiting for response...";
        if (response.ok) {
          return response;
        }
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => (outputDiv.innerText = data.value))
      .catch((error) => console.log("There was an error:", error));
  },
  false
);

// This is almost identical to the Number example, except the response returns
// JSON, so we use the json() method to return a promise that resolves as a
// JavaScript object. This object has a value property that contains the Chuck Norris
// fact, so we insert it into the <div> with an id of output using innerText again.

// This example shows how easy it is to request data from a server, then insert it
// into a web page, although there are some subtle differences depending on what
// type of data is returned.
