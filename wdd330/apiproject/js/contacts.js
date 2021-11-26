// Get the only ul element in the HTML
const contact = document.querySelector("ul");
// Get all of the input fields
const input = document.querySelectorAll("input");

// Adds new contact to address book
function addContact() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let company = document.getElementById("company").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let country = document.getElementById("country").value;
  let phone = document.getElementById("phone").value;
  saveNewLocalContact(
    fName,
    lName,
    company,
    address,
    city,
    state,
    zip,
    phone,
    country
  );
  displayContacts(getLocalContacts());
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
  console.log("Displaying data");
  document.getElementById("newContact").innerHTML = "New";
  document.getElementById("editContact").innerHTML = "Edit";
  contactData = getLocalContacts();
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
      }
    }
  }
  requiredField();
}
