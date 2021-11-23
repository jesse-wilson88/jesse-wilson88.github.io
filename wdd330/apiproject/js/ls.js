function getLocalContacts() {
  let contacts = localStorage.getItem("contacts");
  console.log("Getting local contacts if stored.");
  // console.log(contacts);
  return JSON.parse(contacts);
}

function saveNewLocalContact(fName, lName, address, zip, phone, country) {
  console.log("Saving new contact.");
  let contactList = getLocalContacts();
  if (contactList === null) {
    console.log("New array is being created.");
    contactList = [];
  }

  contactList.push({
    id: new Date().getTime(),
    fName: fName,
    lName: lName,
    address: address,
    zip: zip,
    phone: phone,
    country: country,
  });

  console.log(`Contact List ${contactList}`);

  window.localStorage.setItem("contacts", JSON.stringify(contactList));
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
