// This will help with todays day name is
const theweekday = new Array(7);
theweekday[0] = "Sunday";
theweekday[1] = "Monday";
theweekday[2] = "Tuesday";
theweekday[3] = "Wednesday";
theweekday[4] = "Thursday";
theweekday[5] = "Friday";
theweekday[6] = "Saturday";

fetch(apiURL)
  .then((response) => response.json())
  .then((dayForecast) => {
    const threedayforecast = dayForecast.daily;

    let day = 0;

    threedayforecast.forEach((theDay) => {
      if (day == 0) {
        day++;
        return false;
      }
      if (day <= 3) {
        let d = new Date(theDay.dt * 1000);

        let section = document.createElement("section");
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let h41 = document.createElement("h4");
        let h42 = document.createElement("h4");
        let img = document.createElement("img");

        section.setAttribute("class", "forecast");
        div.setAttribute("class", "forecastBox");

        // Sets the day name
        h3.innerHTML = theweekday[d.getDay()];
        h3.setAttribute("class", `forecast${day + 1}`);

        // Sets the image src url
        const imagesrc = `//openweathermap.org/img/wn/${threedayforecast[day].weather[0].icon}@2x.png`;

        // Sets the weather icon description
        const desc = threedayforecast[day].weather[0].description.replace(
          /(^\w{1})|(\s+\w{1})/g,
          (letter) => letter.toUpperCase()
        );

        // Calculates temperature in Fahrenheit
        //const temp = Math.round(threedayforecast[day].temp.max.toFixed(0));

        // Calculates temperature in Celcuis
        const temp = Math.round(
          (5 / 9) * (threedayforecast[day].temp.max.toFixed(0) - 32)
        );

        img.setAttribute("class", `div.iconBox${day + 1}`);
        img.setAttribute("src", imagesrc);
        img.setAttribute("alt", desc);

        // Displays temperature in fahrenheit
        //h41.innerHTML = `${temp}&deg;F`;

        // Displays temperature in celcuis
        h41.innerHTML = `${temp}&deg;C`;

        h41.setAttribute("class", `tempDay${day + 1}`);

        h42.innerHTML = `${desc}`;

        section.append(h3);
        section.append(h42);
        section.append(img);
        section.append(h41);

        document.querySelector("div.forecastBox").appendChild(section);

        day++;
      }
    });
  });
