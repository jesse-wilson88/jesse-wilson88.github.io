const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

function weather(lat, lon) {
  const apiURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`;
  console.log(apiURL);

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);

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
        contactWeather += `<li id="windchill">Windchill: ${windchill}&degF</li>`;
      } else {
        contactWeather += `<li id="windchill">Windchill: N/A</li>`;
      }

      document.getElementById("weather").innerHTML = contactWeather;
    });
}
