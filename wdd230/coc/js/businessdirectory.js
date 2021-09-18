const businessdata = "json/businessdata.json";

fetch(businessdata)
  .then((response) => response.json())
  .then((businessinfo) => {
    const businesses = businessinfo["businesses"];

    let count = 0;

    businesses.forEach((business) => {
      let businessBox = document.createElement("section");
      let img = document.createElement("img");
      let div = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let a = document.createElement("a");

      const imagesrc = `images/${business.logo}.jpg`;

      const url = `${business.url}`;

      businessBox.setAttribute("class", "businessBox");

      img.setAttribute("src", imagesrc);
      img.setAttribute("alt", `${business.logo} logo`);

      div.setAttribute("class", "urlLink");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");

      a.innerHTML = `${business.name}`;
      p1.innerHTML = `${business.address}`;
      p2.innerHTML = `${business.town}, ${business.province}`;
      p3.innerHTML = `${business.postalcode}`;
      p4.innerHTML = `${business.phone}`;

      div.append(a);
      div.append(p1);
      div.append(p2);
      div.append(p3);
      div.append(p4);

      businessBox.append(img);
      businessBox.append(div);

      document.querySelector("div.businessDirectory").append(businessBox);

      count += 1;
    });
  });

const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const businessDirectory = document.querySelector(".businessDirectory");

list.addEventListener("click", () => {
  businessDirectory.classList.add("list");
});

grid.addEventListener("click", () => {
  businessDirectory.classList.remove("list");
});
