const temperature = parseFloat(
  document.getElementById("temperature").textContent
);

const windspeed = parseFloat(document.getElementById("windspeed").textContent);

let windchill =
  35.74 +
  0.6215 * temperature -
  35.75 * Math.pow(windspeed, 0.16) +
  0.4275 * temperature * Math.pow(windspeed, 0.16);

windchill = Math.round(windchill);
/*console.log(windchill);*/
if (temperature <= 50 && windspeed > 3) {
  document.getElementById("chill").textContent = windchill;
} else {
  document.getElementById("chill").textContent = temperature;
}
