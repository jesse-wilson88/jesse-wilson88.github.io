let url = "https://www.churchofjesuschrist.org/temples/list?lang=eng";

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);
  })
  .catch((err) => {
    throw err;
  });

// const artistName = async () => {
//   // document.getElementById("loading").innerHTML = "Loading...";

//   const response = await fetch(url);
//   const data = await response.json();
//   let mydata = [];

//   for (const i of data.features.values()) {
//     mydata.push(i.properties);
//   }

//   return mydata;
// };

// historyData = {
//   host: "https://history.muffinlabs.com/",
//   load: function (options) {
//     var callback, month, day, host;
//     var path = "/date";

//     host = this.host;

//     if (typeof options == "function") {
//       callback = options;
//     } else if (typeof options == "object") {
//       callback = options.callback;
//     }

//     if (typeof options.month === "undefined") {
//       options.month = new Date().getMonth() + 1;
//     }

//     if (typeof options.day === "undefined") {
//       options.day = new Date().getDate();
//     }

//     month = options.month;
//     day = options.day;
//     path = path + "/" + month + "/" + day;

//     if (options.host !== undefined) {
//       host = options.host;
//     }

//     return fetch(host + path, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (callback) {
//           callback(data);
//         }
//         return data;
//       });
//   },
// };
