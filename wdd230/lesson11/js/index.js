const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const sitetown = towns.filter(
      (town) =>
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
    );

    sitetown.forEach((town) => {
      let card = document.createElement("section");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let img = document.createElement("img");

      h2.innerHTML = `${town.name}`;
      h3.innerHTML = `${town.motto}`;
      p1.innerHTML = `Year Founded: ${town.yearFounded}`;
      p2.innerHTML = `Population: ${town.currentPopulation}`;
      p3.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

      div1.setAttribute("class", "towninfo");
      img.setAttribute("src", `images/${town.photo}`);
      img.setAttribute("alt", `Town of ${town.name}`);

      div1.append(h2);
      div1.append(h3);
      div1.append(p1);
      div1.append(p2);
      div1.append(p3);
      div2.append(img);

      card.append(div1);
      card.append(div2);

      document.querySelector("div.card").append(card);
    });
  });
