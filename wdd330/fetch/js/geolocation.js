// api.openweathermap.org key
// const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

// Google map key
// const googleKey = "AIzaSyC9StYqBMQnjsNjEydg_m3iD8QjWMCP7Iw";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  const lat = crd.latitude;
  const lon = crd.longitude;

  console.log(lat, lon);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
ticker();

function ticker() {
  const currently = (document.getElementById("lat").innerHTML =
    "Overcast Clouds");
  const temp = (document.getElementById("lon").innerHTML = "31°F");
  const humidity = (document.getElementById("address").innerHTML = "N/A");
  const windchill = (document.getElementById("city").innerHTML = "92%");
  const windspeed = (document.getElementById("state").innerHTML = "3 mph");

  const news = [
    `Currently: ${currently}  ||  Temperature: ${temp}  ||  Humidity: ${humidity}  ||  Wind Speed: ${windspeed}  ||  Wind Chill: ${windchill}`,
  ];

  let tickerText = "";

  //looping through the news array
  for (let i = 0; i < news.length; i++) {
    tickerText += news[i];
  }

  document.querySelector("#scroll").innerHTML = tickerText;
}
