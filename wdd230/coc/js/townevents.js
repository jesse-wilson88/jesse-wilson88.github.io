const cardstonevents = "json/cardstonevents.json";

fetch(cardstonevents)
  .then((response) => response.json())
  .then((townevents) => {
    const events = townevents["events"];

    let count = 0;

    events.forEach((event) => {
      let eventBox = document.createElement("section");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("P");
      let p3 = document.createElement("p");

      eventBox.setAttribute("class", "eventBox");

      h2.innerHTML = `${event.name}`;
      p1.innerHTML = `Location: ${event.location}`;
      p2.innerHTML = `Date: ${event.date}`;
      p3.innerHTML = `Time: ${event.time}`;

      eventBox.append(h2);
      eventBox.append(p1);
      eventBox.append(p2);
      eventBox.append(p3);

      document.querySelector("div.events").append(eventBox);

      count += 1;
    });
  });
