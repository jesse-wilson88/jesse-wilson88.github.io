let statusAction = "";

function getLocalContacts() {
  let contacts = localStorage.getItem("contacts");
  // console.log("Getting local contacts if stored.");
  // console.log(contacts);
  return JSON.parse(contacts);
}

function saveNewLocalContact(fName, lName, address, city, zip, phone, country) {
  // console.log("Saving new contact.");
  let contactList = getLocalContacts();
  if (contactList === null) {
    // console.log("New array is being created.");
    contactList = [];
  }

  contactList.push({
    id: new Date().getTime(),
    fName: fName,
    lName: lName,
    address: address,
    city: city,
    zip: zip,
    phone: phone,
    country: country,
  });

  // console.log(`Contact List ${contactList}`);

  window.localStorage.setItem("contacts", JSON.stringify(contactList));
}

function updateLocalContact() {
  // console.log("Wanting to update contact.");
  // get the id of the contact to be updated
  let id = document.getElementById("id").value;
  // console.log(`ID = ${id}`);
  //get all the contacts from localStorage
  let contactData = getLocalContacts();
  //locate the contact to be updated via the id
  if (contactData !== null) {
    for (c of contactData) {
      if (id == c.id) {
        //Replace the contact with the data passed to this function
        // console.log(c);
        // console.log(`ID = ${id}`);
        // console.log(contactData);
        let placement = contactData.map((i) => i.id).indexOf(c.id);
        // console.log(placement);
        contactData[placement].fName = document.getElementById("fName").value;

        contactData[placement].lName = document.getElementById("lName").value;
        contactData[placement].address =
          document.getElementById("address").value;
        contactData[placement].city = document.getElementById("city").value;
        contactData[placement].zip = document.getElementById("zip").value;
        contactData[placement].phone = document.getElementById("phone").value;
        contactData[placement].country =
          document.getElementById("country").value;
        // console.log(contactData);
        window.localStorage.setItem("contacts", JSON.stringify(contactData));
      }
    }
  }
}

function deleteContact(contact) {
  let myContact = getLocalContacts();

  let newContactList = [];
  for (const c of myContact) {
    if (c.id != contact) {
      newContactList.push(c);
    }
    window.localStorage.setItem("contacts", JSON.stringify(newContactList));
  }
}

function editContact() {
  // console.log("Editing enabled");

  for (i of input) {
    // console.log(i);
    i.disabled = false;
  }
}
