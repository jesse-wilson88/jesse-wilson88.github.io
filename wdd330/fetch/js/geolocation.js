// api.openweathermap.org key
const weatherKey = "a0b3d490a08e094f9b99a83f6d6220ec";

// Google map key
const googleKey = "AIzaSyDFzPm6JNDK7h4mrUZAeYNiLeh6YEiQZLg";

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// Get contact coordinates
function contactCoordinates() {
  const address = document
    .getElementById("address")
    .innerHTML.replace(/ /g, "+");
  const city = document.getElementById("city").innerHTML.replace(/ /g, "+");
  const state = document.getElementById("state").innerHTML.replace(/ /g, "+");

  const coordinates = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+${state}&key=${googleKey}`;
  console.log(coordinates);

  fetch(coordinates)
    .then((response) => response.json())
    .then((coords) => {
      console.log(coords);
    });
}

function weather() {
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zip = document.getElementById("zip");
  // const state = getStateName();
  const country = document.getElementById("country");
  // const apiURL = `//api.openweathermap.org/data/2.5/weather?q=${city.innerHTML},${state.innerHTML},${country.innerHTML}&appid=${apiKey}&units=imperial`;
  const apiURL = `//api.openweathermap.org/data/2.5/weather?q=${zip.innerHTML},${country.innerHTML}&appid=${weatherKey}&units=imperial`;

  console.log(apiURL);

  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
      //Temperature variables
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

function getStateName() {
  const state = document.getElementById("state");
  console.log(state.innerHTML);
  const stateAbbreviations = [
    {
      name: "Alabama",
      abbreviation: "AL",
      code: "01",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
      code: "02",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
      code: "03",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
      code: "04",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
      code: "05",
    },
    {
      name: "California",
      abbreviation: "CA",
      code: "06",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
      code: "07",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
      code: "08",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
      code: "09",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
      code: "10",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
      code: "11",
    },
    {
      name: "Florida",
      abbreviation: "FL",

      code: "12",
    },
    {
      name: "Georgia",
      abbreviation: "GA",

      code: "13",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  for (s of stateAbbreviations) {
    console.log("Looking for match...");
    if (s.abbreviation == state.innerHTML) {
      console.log("Matched");
      return s.name;
    }
  }

  // <option value="AL">Alabama</option>
  // <option value="AK">Alaska</option>
  // <option value="AZ">Arizona</option>
  // <option value="AR">Arkansas</option>
  // <option value="CA">California</option>
  // <option value="CO">Colorado</option>
  // <option value="CT">Connecticut</option>
  // <option value="DE">Delaware</option>
  // <option value="DC">District Of Columbia</option>
  // <option value="FL">Florida</option>
  // <option value="GA">Georgia</option>
  // <option value="HI">Hawaii</option>
  // <option value="ID">Idaho</option>
  // <option value="IL">Illinois</option>
  // <option value="IN">Indiana</option>
  // <option value="IA">Iowa</option>
  // <option value="KS">Kansas</option>
  // <option value="KY">Kentucky</option>
  // <option value="LA">Louisiana</option>
  // <option value="ME">Maine</option>
  // <option value="MD">Maryland</option>
  // <option value="MA">Massachusetts</option>
  // <option value="MI">Michigan</option>
  // <option value="MN">Minnesota</option>
  // <option value="MS">Mississippi</option>
  // <option value="MO">Missouri</option>
  // <option value="MT">Montana</option>
  // <option value="NE">Nebraska</option>
  // <option value="NV">Nevada</option>
  // <option value="NH">New Hampshire</option>
  // <option value="NJ">New Jersey</option>
  // <option value="NM">New Mexico</option>
  // <option value="NY">New York</option>
  // <option value="NC">North Carolina</option>
  // <option value="ND">North Dakota</option>
  // <option value="OH">Ohio</option>
  // <option value="OK">Oklahoma</option>
  // <option value="OR">Oregon</option>
  // <option value="PA">Pennsylvania</option>
  // <option value="RI">Rhode Island</option>
  // <option value="SC">South Carolina</option>
  // <option value="SD">South Dakota</option>
  // <option value="TN">Tennessee</option>
  // <option value="TX">Texas</option>
  // <option value="UT">Utah</option>
  // <option value="VT">Vermont</option>
  // <option value="VA">Virginia</option>
  // <option value="WA">Washington</option>
  // <option value="WV">West Virginia</option>
  // <option value="WI">Wisconsin</option>
  // <option value="WY">Wyoming</option>
}

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);

//   const apiURL = `//api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=imperial`;

//   fetch(apiURL)
//     .then((response) => response.json())
//     .then((weatherInfo) => {
//       console.log(weatherInfo);
//       //Temperature variables
//       const currently = weatherInfo.weather[0].description.replace(
//         /(^\w{1})|(\s+\w{1})/g,
//         (letter) => letter.toUpperCase()
//       );
//       const current_temp = Math.round(weatherInfo.main.temp);
//       const humidity = Math.round(weatherInfo.main.humidity);
//       const windspeed = Math.round(weatherInfo.wind.speed);

//       // Displays the temperature information in the Weather Summary
//       document.getElementById("currently").innerHTML = currently;
//       document.getElementById("current-temp").innerHTML = current_temp;
//       document.getElementById("humidity").innerHTML = humidity;
//       document.getElementById("windspeed").innerHTML = windspeed;

//       // Calculates the windchill factor if there is one
//       let windchill =
//         35.74 +
//         0.6215 * current_temp -
//         35.75 * Math.pow(windspeed, 0.16) +
//         0.4275 * current_temp * Math.pow(windspeed, 0.16);

//       windchill = Math.round(windchill);

//       if (current_temp <= 50 && windspeed > 3) {
//         document.getElementById("windchill").innerHTML = `${windchill}&degF`;
//       } else {
//         document.getElementById("windchill").innerHTML = "N/A";
//       }
//     });
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// weather();
contactCoordinates();

// const theUrl =
//   "https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVD&TVD=53971";
// console.log(`The URL: ${theUrl}`);

// fetch(theUrl)
//   .then((response) => response.json())
//   .then((stateCode) => {
//     console.log(stateCode);
//   });
