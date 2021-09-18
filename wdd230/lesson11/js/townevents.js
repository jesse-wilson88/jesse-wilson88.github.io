const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];

    //Filters then Town Name from the townName variable found on the weatherapi.js file
    const townEvents = town.filter((town) => town.name == townName);

    // Grabs the events for the town
    const events = townEvents[0].events;

    let div1 = document.createElement("div");
    let ul = document.createElement("ul");

    events.forEach((event) => {
      let li = document.createElement("li");

      li.innerHTML = event;

      ul.append(li);

      div1.append(ul);

      document.querySelector("section.eventBox").append(div1);
    });
  });
