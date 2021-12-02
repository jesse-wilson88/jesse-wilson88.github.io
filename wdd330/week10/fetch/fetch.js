let latitude;
let longitude;
let startDate;
let endDate;
let url = "";

function getCoords() {
  latitude = document.getElementById("latitude").value;
  longitude = document.getElementById("longitude").value;
  radius = document.getElementById("radius").value;
  startDate = document.getElementById("startDate").value;
  endDate = document.getElementById("endDate").value;

  url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`;
  console.log(url);

  outputdata();
}

const getEarthquake = async () => {
  document.getElementById("loading").innerHTML = "Loading...";

  const response = await fetch(url);
  const data = await response.json();
  let mydata = [];
  
  for (const i of data.features.values()) {
    mydata.push(i.properties);
  }

  return mydata;
};

const outputdata = async () => {
  let mydata = await getEarthquake();

  for (const i of mydata) {
    console.log(i);
    var date = new Date(i.time);
    formatDate =
      date.toLocaleString("default", { month: "short" }) +
      " " +
      (date.getUTCDate() < 10 ? "0" : "") +
      date.getUTCDate() +
      ", " +
      date.getUTCFullYear();

    document.getElementById(
      "quake"
    ).innerHTML += `<li>On ${formatDate} an ${i.type} hit ${i.place} with a magnitude of ${i.mag}.</li>`;
  }
  document.getElementById("finish").innerHTML = "Done";
};

const button = document.querySelector("button");

button.addEventListener("click", getCoords);
