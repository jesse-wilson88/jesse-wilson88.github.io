const forecast = `//api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${apiKey}&units=imperial`;

// This will pull the Day from the styles.js file
//const theday = thedate.getDay();
//console.log(theday);

// This will help with todays day name is
const theweekday = new Array(7);
theweekday[0] = "Sunday";
theweekday[1] = "Monday";
theweekday[2] = "Tuesday";
theweekday[3] = "Wednesday";
theweekday[4] = "Thursday";
theweekday[5] = "Friday";
theweekday[6] = "Saturday";
//console.log(theweekday[theday]);

fetch(forecast)
  .then((response) => response.json())
  .then((dayForecast) => {
    console.log(dayForecast);

    const fivedayforecast = dayForecast.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );
    //console.log(fivedayforecast);

    let day = 0;

    fivedayforecast.forEach((theDay) => {
      let d = new Date(theDay.dt_txt);
      //console.log(d);

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

      // Sets the src url
      const imagesrc = `//openweathermap.org/img/wn/${fivedayforecast[day].weather[0].icon}@2x.png`;
      //console.log(imagesrc);

      // Sets the weather icon description
      const desc = fivedayforecast[day].weather[0].description;
      //console.log(desc);

      // Displays the day name for the 5 day forecast
      //document.getElementById(`forecast${day + 1}`).append(h3);

      img.setAttribute("class", `div.iconBox${day + 1}`);
      img.setAttribute("src", imagesrc);
      img.setAttribute("alt", desc);

      // Sets the temperature
      h4.innerHTML = dayForecast.list[day].main.temp.toFixed(0);
      h4.setAttribute("class", `tempDay${day + 1}`);

      //document.getElementById(`tempday${day + 1}`).append(h4);

      section.appendChild(h3);
      section.appendChild(img);
      section.appendChild(h4);

      document.querySelector("div.forecastBox").appendChild(section);

      day++;
    });
  });
