const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

newContactButton.addEventListener("click", function () {
  console.log("New Contact button has been clicked.");
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";

  document.getElementById("fName").focus();
});

editContactButton.addEventListener("click", function () {
  console.log("Edit Contact button has been clicked.");
});

saveContactButton.addEventListener("click", function () {
  console.log("Save Contact button has been clicked.");
  // saveNewLocalContact();
  addContact();
});

displayContacts(getLocalContacts());
