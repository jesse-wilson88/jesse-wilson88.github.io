// Google map key
const googleKey = "AIzaSyC9StYqBMQnjsNjEydg_m3iD8QjWMCP7Iw";

// Cordinates of the contact being viewed
function contactCoords() {
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");

  // var location = "308 West Commercial Ave Gettysburg SD";
  var location = `${address.value} ${city.value} ${state.value}`;
  console.log(location);

  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: location,
        key: googleKey,
      },
    })
    .then(function (response) {
      console.log(response);

      lat = response.data.results[0].geometry.location.lat;
      lon = response.data.results[0].geometry.location.lng;
      
      getmap(lat, lon);
      weather(lat, lon);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Coordinates of the user's current location
function userCoords() {
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
}

function getmap(lat, lon){
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById("map").innerHTML = `<iframe class="map" title="Google map" src="${mapUrl}" loading="lazy"></iframe>`;
}