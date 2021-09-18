// Gets the full date (Day Name, Month, Day, Year, and so on)
const mydate = new Date();
//console.log(mydate);

// This will pull the Day from the above variable
const myday = mydate.getDay();
//console.log(myday);

//
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
//console.log(myweekday[myday]);

//ADD the key and change units to imperial
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=03df98362f38f6b3d193f48c482fad54&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    //console.log(weatherInfo);

    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    //console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    //console.log(icon_path);

    document.getElementById("weather_icon").src = icon_path;
  }); //end of "then" fat arrow function
