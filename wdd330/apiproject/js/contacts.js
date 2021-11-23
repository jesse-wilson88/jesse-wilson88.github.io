const contact = document.querySelector("ul");

function addContact() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let address = document.getElementById("address").value;
  let zip = document.getElementById("zip").value;
  let phone = document.getElementById("phone").value;
  let country = document.getElementById("country").value;
  saveNewLocalContact(fName, lName, address, zip, phone, country);
  displayContacts(getLocalContacts());
}

function displayContacts(contacts) {
  contact.innerHTML = "";
  if (contacts !== null) {
    for (const c of contacts) {
      const myContact = document.createElement("li");
      const contactBtn = document.createElement("button");
      myContact.append(`${c.fName} ${c.lName}`);
      myContact.setAttribute("id", c.id);
      myContact.appendChild(contactBtn);
      contactBtn.textContent = "❌";
      contact.appendChild(myContact);

      contactBtn.addEventListener("click", function () {
        deleteContact(myContact.id);
        contact.removeChild(myContact);
      });
    }
  }
}
