const apiKey = "a0b3d490a08e094f9b99a83f6d6220ec";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  // const apiURL = `//api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&limit={limit}&appid=${apiKey}`;
  const apiURL = `//api.openweathermap.org/geo/1.0/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
      // Temperature variables
      // const currently = weatherInfo.weather[0].description.replace(
      //   /(^\w{1})|(\s+\w{1})/g,
      //   (letter) => letter.toUpperCase()
      // );
      // const current_temp = Math.round(weatherInfo.main.temp);
      // const humidity = Math.round(weatherInfo.main.humidity);
      // const windspeed = Math.round(weatherInfo.wind.speed);

      // // Displays the temperature information in the Weather Summary
      // document.getElementById("currently").innerHTML = currently;
      // document.getElementById("current-temp").innerHTML = current_temp;
      // document.getElementById("humidity").innerHTML = humidity;
      // document.getElementById("windspeed").innerHTML = windspeed;

      // // Calculates the windchill factor if there is one
      // let windchill =
      //   35.74 +
      //   0.6215 * current_temp -
      //   35.75 * Math.pow(windspeed, 0.16) +
      //   0.4275 * current_temp * Math.pow(windspeed, 0.16);

      // windchill = Math.round(windchill);

      // if (current_temp <= 50 && windspeed > 3) {
      //   document.getElementById("windchill").innerHTML = `${windchill}&degF`;
      // } else {
      //   document.getElementById("windchill").innerHTML = "N/A";
      // }
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
