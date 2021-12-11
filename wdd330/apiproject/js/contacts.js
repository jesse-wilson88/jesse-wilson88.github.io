// Get the only ul element in the HTML
const contact = document.querySelector("ul");
// Get all of the input fields
const input = document.querySelectorAll("input");

// Adds new contact to address book
function addContact() {
  let fName = document.getElementById("fName").value.trim();
  let lName = document.getElementById("lName").value.trim();
  let company = document.getElementById("company").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let zip = document.getElementById("zip").value.trim();
  let country = document.getElementById("country").value.trim();
  let phone = document.getElementById("phone").value.trim();
  if (phone != "") {
    phone = phone
      .match(/\d+/g)
      .join("")
      .replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, "$1-$2-$3");
  }
  let dob = document.getElementById("dob").value.trim();
  if (dob != "") {
    dob = dob
      .match(/\d+/g)
      .join("")
      .replace(/(\d{2})\/?(\d{2})\/?(\d{4})/, "$1/$2/$3");
  }

  saveNewLocalContact(
    fName,
    lName,
    company,
    address,
    city,
    state,
    zip,
    country,
    phone,
    dob
  );
  displayContacts(getLocalContacts());
  displayData(id);
}

// Displays the contact names on the let side of the address book
function displayContacts(contacts) {
  contact.innerHTML = "";
  if (contacts !== null) {
    for (const c of contacts) {
      const myContact = document.createElement("li");
      const deleteBtn = document.createElement("button");

      // Checks to see if the fName and lName should be displayed or company
      if (c.fName == "" && c.lName == "" && c.company != "") {
        myContact.append(`${c.company}`);
      } else {
        myContact.append(`${c.fName} ${c.lName}`);
      }

      myContact.setAttribute("id", c.id);
      myContact.appendChild(deleteBtn);
      deleteBtn.textContent = "❌";
      contact.appendChild(myContact);

      // Event listener to display the contacts information
      myContact.addEventListener("click", function (event) {
        for (i of input) {
          i.disabled = true;
        }

        displayData(event.target.id);
      });

      // Event listener to delete a contact and their information
      deleteBtn.addEventListener("click", function () {
        const contactInfoId = document.getElementById("id").value;
        deleteContact(myContact.id);
        if (contactInfoId == myContact.id) {
          clearData();
        }

        contact.removeChild(myContact);
      });
    }
  }
}

// Displays the contact information on the right side of the address book
function displayData(id) {
  document.getElementById("map").innerHTML = "";
  document.getElementById("weather").innerHTML = "";
  document.getElementById("newContact").innerHTML = "New";
  document.getElementById("editContact").innerHTML = "Edit";
  const contactData = getLocalContacts();
  if (contactData !== null) {
    for (c of contactData) {
      if (id == c.id) {
        document.getElementById("id").value = c.id;
        document.getElementById("fName").value = c.fName;
        document.getElementById("lName").value = c.lName;
        document.getElementById("company").value = c.company;
        document.getElementById("address").value = c.address;
        document.getElementById("city").value = c.city;
        document.getElementById("state").value = c.state;
        document.getElementById("zip").value = c.zip;
        document.getElementById("country").value = c.country;
        document.getElementById("phone").value = c.phone;
        document.getElementById("dob").value = c.dob;

        // Looks to see what is shown in google maps
        let theAddress = document.getElementById("address").value;
        let theCity = document.getElementById("city").value;
        let theState = document.getElementById("state").value;
        let mapAddress;

        if (theAddress != "" && theCity != "" && theState != "") {
          // If the address includes a box number only the city & state are shown
          if (theAddress.toString().toLowerCase().includes("box")) {
            mapAddress = `${c.city}, ${c.state}`.replace(/ /g, "+");
          } else {
            // The address, city, and state are shown
            mapAddress = `${c.address}, ${c.city}, ${c.state}`.replace(
              / /g,
              "+"
            );
          }
          contactCoords();
        }
      }
    }
    requiredField();
  }
}

// Displays the google map based on the contact address information
function getMap(contactAddress) {
  let url = `https://maps.google.com/maps?q=${contactAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById(
    "map"
  ).innerHTML = `<iframe class="map" title="Google map" src="${url}" loading="lazy"></iframe>`;
}
