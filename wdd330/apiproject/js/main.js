const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

newContactButton.addEventListener("click", function () {
  statusAction = "new";

  for (i of input) {
    // console.log(i);
    i.disabled = false;
  }
  // console.log("New Contact button has been clicked.");
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";

  document.getElementById("fName").focus();
});

editContactButton.addEventListener("click", function () {
  // console.log("Edit Contact button has been clicked.");
  statusAction = "edit";
  for (i of input) {
    // console.log(i);
    i.disabled = false;
  }
});

saveContactButton.addEventListener("click", function () {
  if (statusAction == "new") {
    // console.log("Adding Contact");
    addContact();
  } else {
    // console.log("Updating Contact");
    updateLocalContact();
  }

  for (i of input) {
    // console.log(i);
    i.disabled = true;
  }
});

function validate() {}

displayContacts(getLocalContacts());
