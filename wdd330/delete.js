const url = "https:example.com/data";
const headers = new Headers({
  "Content-Type": "text/plain",
  "Accept-Charset": "utf-8",
  "Accept-Encoding": "gzip,deflate",
});
const request = (url, { headers: headers });
fetch(request)
  .then(function (response) {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then((response) =>
    console
      .log("Do something with response")
      .catch((error) => console.log("There was an error!"))
  );
