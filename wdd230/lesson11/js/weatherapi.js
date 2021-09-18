const apiKey = "03df98362f38f6b3d193f48c482fad54";
let townName = document.getElementById("cityid").textContent;
if (townName == "Preston") {
  cityid = 5604473;
} else if (townName == "Soda Springs") {
  cityid = 5607916;
} else if (townName == "Fish Haven") {
  cityid = 5585000;
} else {
  cityid = 0;
}

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=03df98362f38f6b3d193f48c482fad54&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    // Temperature variables
    const currently = weatherInfo.weather[0].description.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );
    const current_temp = Math.round(weatherInfo.main.temp);
    const humidity = Math.round(weatherInfo.main.humidity);
    const windspeed = Math.round(weatherInfo.wind.speed);

    // Displays the temperature information in the Weather Summary
    document.getElementById("currently").innerHTML = currently;
    document.getElementById("current-temp").innerHTML = current_temp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windspeed").innerHTML = windspeed;

    // Calculates the windchill factor if there is one
    let windchill =
      35.74 +
      0.6215 * current_temp -
      35.75 * Math.pow(windspeed, 0.16) +
      0.4275 * current_temp * Math.pow(windspeed, 0.16);

    windchill = Math.round(windchill);

    if (current_temp <= 50 && windspeed > 3) {
      document.getElementById("windchill").innerHTML = `${windchill}&degF`;
    } else {
      document.getElementById("windchill").innerHTML = "N/A";
    }
  });
