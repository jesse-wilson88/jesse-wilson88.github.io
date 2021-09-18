const forecast = `//api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${apiKey}&units=imperial`;

// This will help with todays day name is
const theweekday = new Array(7);
theweekday[0] = "Sunday";
theweekday[1] = "Monday";
theweekday[2] = "Tuesday";
theweekday[3] = "Wednesday";
theweekday[4] = "Thursday";
theweekday[5] = "Friday";
theweekday[6] = "Saturday";

fetch(forecast)
  .then((response) => response.json())
  .then((dayForecast) => {
    const fivedayforecast = dayForecast.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );

    let day = 0;

    fivedayforecast.forEach((theDay) => {
      let d = new Date(theDay.dt * 1000);

      let section = document.createElement("section");
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      let h4 = document.createElement("h4");

      section.setAttribute("class", "forecast");
      div.setAttribute("class", "forecastBox");

      // Sets the day name
      h3.innerHTML = theweekday[d.getDay()];
      h3.setAttribute("class", `forecast${day + 1}`);

      // Sets the image src url
      const imagesrc = `//openweathermap.org/img/wn/${fivedayforecast[day].weather[0].icon}@2x.png`;

      // Sets the weather icon description
      const desc = fivedayforecast[day].weather[0].description;
      img.setAttribute("class", `div.iconBox${day + 1}`);
      img.setAttribute("src", imagesrc);
      img.setAttribute("alt", desc);

      // Sets the temperature
      h4.innerHTML = `${dayForecast.list[day].main.temp.toFixed(0)}&deg;F`;
      h4.setAttribute("class", `tempDay${day + 1}`);

      section.appendChild(h3);
      section.appendChild(img);
      section.appendChild(h4);

      document.querySelector("div.forecastBox").appendChild(section);

      day++;
    });
  });
