// Gets the contacts from local storage if there are any
function getLocalContacts() {
  let contacts = localStorage.getItem("contacts");

  return JSON.parse(contacts);
}

// Saves the new contact to the local storage
function saveNewLocalContact(
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
) {
  // checks to see if there are contacts in the local storage
  let contactList = getLocalContacts();
  // If no contacts are found in the local storage a new array is created
  if (contactList === null) {
    contactList = [];
  }

  // If contacts are found in the local storage it is put into an array
  contactList.push({
    id: new Date().getTime(),
    fName: fName,
    lName: lName,
    company: company,
    address: address,
    city: city,
    state: state,
    zip: zip,
    country: country,
    phone: phone,
    dob: dob,
  });

  window.localStorage.setItem("contacts", JSON.stringify(contactList));

  displayData(contactList[contactList.length - 1].id);
}

// Updates contact information already in the local storage
function updateLocalContact() {
  // Get the id of the contact to be updated
  let id = document.getElementById("id").value;
  // Get all the contacts from localStorage
  let contactData = getLocalContacts();
  // Locate the contact to be updated via the id
  if (contactData !== null) {
    for (c of contactData) {
      if (id == c.id) {
        // Replace the contact information with the new data passed to this function
        let placement = contactData.map((i) => i.id).indexOf(c.id);
        contactData[placement].fName = document
          .getElementById("fName")
          .value.trim();

        contactData[placement].lName = document
          .getElementById("lName")
          .value.trim();
        contactData[placement].company = document
          .getElementById("company")
          .value.trim();
        contactData[placement].address = document
          .getElementById("address")
          .value.trim();
        contactData[placement].city = document
          .getElementById("city")
          .value.trim();
        contactData[placement].state = document
          .getElementById("state")
          .value.trim();
        contactData[placement].zip = document
          .getElementById("zip")
          .value.trim();
        contactData[placement].country = document
          .getElementById("country")
          .value.trim();
        contactData[placement].phone = document
          .getElementById("phone")
          .value.trim();
        contactData[placement].dob = document
          .getElementById("dob")
          .value.trim();

        window.localStorage.setItem("contacts", JSON.stringify(contactData));
      }
    }
  }

  displayContacts(contactData);
  displayData(contactData.id);
}

// Deletes the contact and all its info
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
