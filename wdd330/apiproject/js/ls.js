// This is used to know if the New button or Edit button were clicked
let statusAction = "";

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
  phone
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
  });

  window.localStorage.setItem("contacts", JSON.stringify(contactList));

  document.getElementById("id").value = contactList[contactList.length - 1].id;
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
        contactData[placement].fName = document.getElementById("fName").value;

        contactData[placement].lName = document.getElementById("lName").value;
        contactData[placement].company =
          document.getElementById("company").value;
        contactData[placement].address =
          document.getElementById("address").value;
        contactData[placement].city = document.getElementById("city").value;
        contactData[placement].state = document.getElementById("state").value;
        contactData[placement].zip = document.getElementById("zip").value;
        contactData[placement].country =
          document.getElementById("country").value;
        contactData[placement].phone = document.getElementById("phone").value;

        window.localStorage.setItem("contacts", JSON.stringify(contactData));
      }
    }
  }
  console.log("Display Contact");
  console.log("Display Data");
  displayContacts(contactData);
  displayData(contactData);
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
