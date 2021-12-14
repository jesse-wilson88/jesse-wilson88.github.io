const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

function weather(lat, lon) {
  const apiURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      const currently = weatherInfo.weather[0].description.replace(
        /(^\w{1})|(\s+\w{1})/g,
        (letter) => letter.toUpperCase()
      );
      const current_temp = Math.round(weatherInfo.main.temp);
      const humidity = Math.round(weatherInfo.main.humidity);
      const windspeed = Math.round(weatherInfo.wind.speed);

      let contactWeather = `
        <li id="currently">Currently: ${currently}</li>
        <li id="current_temp">Temperature: ${current_temp}&degF</li>
        <li id="humidity">Humidity: ${humidity}%</li>
        <li id="windspeed">Wind Speed: ${windspeed} mph</li>`;

      // Calculates the windchill factor if there is one
      let windchill =
        35.74 +
        0.6215 * current_temp -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * current_temp * Math.pow(windspeed, 0.16);

      windchill = Math.round(windchill);

      if (current_temp <= 50 && windspeed > 3) {
        contactWeather += `
        <li id="windchill">Windchill: ${windchill}&degF</li>`;
      } else {
        contactWeather += "";
      }

      document.getElementById(
        "weatherWrapper"
      ).innerHTML = `<ul id="weather"></ul>`;
      document.getElementById("weather").innerHTML = contactWeather;
    });
}

function usersWeather(lat, lon) {
  const apiURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      const name = weatherInfo.name;
      const currently = weatherInfo.weather[0].description.replace(
        /(^\w{1})|(\s+\w{1})/g,
        (letter) => letter.toUpperCase()
      );
      const current_temp = Math.round(weatherInfo.main.temp);
      const humidity = Math.round(weatherInfo.main.humidity);
      const windspeed = Math.round(weatherInfo.wind.speed);

      // Calculates the windchill factor if there is one
      let windchill =
        35.74 +
        0.6215 * current_temp -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * current_temp * Math.pow(windspeed, 0.16);

      windchill = Math.round(windchill);

      if (current_temp <= 50 && windspeed > 3) {
        windchill = `Wind Chill: ${windchill}`;
      } else {
        windchill = "";
      }

      // Ticker modified from https://naishare.com/blog/how-to-create-a-simple-news-ticker-using-html,-css-and-javascript
      const news = [
        `Location: ${name}`,
        `&emsp;&emsp;&emsp;Currently: ${currently}`,
        `&emsp;&emsp;&emsp;Temp: ${current_temp}&degF`,
        `&emsp;&emsp;&emsp;Humidity: ${humidity}%`,
        `&emsp;&emsp;&emsp;Wind Speed: ${windspeed} mph`,
        `&emsp;&emsp;&emsp;${windchill}`,
      ];

      let tickerText = "";
      //looping through the news array
      for (let i = 0; i < news.length; i++) {
        tickerText += news[i];
      }

      document.querySelector("#scroll").innerHTML = tickerText;
    });
}
