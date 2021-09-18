const apiKey = "03df98362f38f6b3d193f48c482fad54";
const cityid = "5604473";
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=03df98362f38f6b3d193f48c482fad54&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("current-temp").textContent = weatherInfo.main.temp;

    const imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherInfo.weather[0].icon +
      ".png"; // note the concatenation
    const desc = weatherInfo.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });
