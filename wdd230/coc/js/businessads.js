const businessdata = "json/businessdata.json";

fetch(businessdata)
  .then((response) => response.json())
  .then((businessinfo) => {
    const businesses = businessinfo["businesses"];

    const businessName = businesses.filter(
      (business) =>
        business.name == "Cardston Clinic" ||
        business.name == "Carriage House Theatre" ||
        business.name == "Remington Carriage Museum"
    );

    let count = 0;

    businessName.forEach((business) => {
      let adBox = document.createElement("section");
      let img = document.createElement("img");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      const imagesrc = `images/${business.logo}.jpg`;

      img.setAttribute("src", imagesrc);
      img.setAttribute("alt", `${business.logo} logo`);

      h2.innerHTML = `${business.name}`;
      p1.innerHTML = `${business.address}`;
      p2.innerHTML = `${business.town}, ${business.province}`;
      p3.innerHTML = `${business.postalcode}`;
      p4.innerHTML = `${business.phone}`;

      adBox.append(img);
      adBox.append(h2);
      adBox.append(p1);
      adBox.append(p2);
      adBox.append(p3);
      adBox.append(p4);

      document.querySelector("div.businessAds").append(adBox);

      count += 1;
    });
  });
