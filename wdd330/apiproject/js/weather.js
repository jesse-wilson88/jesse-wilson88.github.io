const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

function weather(lat, lon) {
  const apiURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`;
  console.log(apiURL);

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
    });
}
