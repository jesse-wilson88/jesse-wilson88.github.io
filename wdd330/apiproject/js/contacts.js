const contact = document.querySelector("ul");
const input = document.querySelectorAll("input");

function addContact() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let zip = document.getElementById("zip").value;
  let phone = document.getElementById("phone").value;
  let country = document.getElementById("country").value;
  saveNewLocalContact(fName, lName, address, city, zip, phone, country);
  displayContacts(getLocalContacts());
}

function displayContacts(contacts) {
  contact.innerHTML = "";
  if (contacts !== null) {
    for (const c of contacts) {
      const myContact = document.createElement("li");
      const deleteBtn = document.createElement("button");
      myContact.append(`${c.fName} ${c.lName}`);
      myContact.setAttribute("id", c.id);
      myContact.appendChild(deleteBtn);
      deleteBtn.textContent = "❌";
      contact.appendChild(myContact);

      myContact.addEventListener("click", function (thing) {
        // console.log("Contact's name was clicked");
        // console.log(thing.target.id);
        displayData(thing.target.id);
      });

      deleteBtn.addEventListener("click", function () {
        deleteContact(myContact.id);
        contact.removeChild(myContact);
      });
    }
  }
}

function displayData(id) {
  contactData = getLocalContacts();
  // console.log(contactData);
  if (contactData !== null) {
    for (c of contactData) {
      if (id == c.id) {
        document.getElementById("id").value = c.id;
        document.getElementById("fName").value = c.fName;
        document.getElementById("lName").value = c.lName;
        document.getElementById("address").value = c.address;
        document.getElementById("city").value = c.city;
        document.getElementById("zip").value = c.zip;
        document.getElementById("phone").value = c.phone;
        document.getElementById("country").value = c.country;
      }
    }
  }
}
