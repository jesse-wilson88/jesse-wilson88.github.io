// api.openweathermap.org key
const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

// Google map key
const googleKey = "AIzaSyC9StYqBMQnjsNjEydg_m3iD8QjWMCP7Iw";

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
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
