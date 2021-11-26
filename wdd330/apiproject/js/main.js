const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

// Event listener for creating a new contact
newContactButton.addEventListener("click", function () {
  const verify = document.getElementById("newContact").innerHTML;
  // console.log(verify);
  if (verify === "New") {
    statusAction = "new";

    unlockFields();
    clearData();
    requiredField();
    // console.log("New Contact button has been clicked.");
    document.getElementById("editContact").innerHTML = "Cancel";
    document.getElementById("fName").focus();
  } else {
    document.getElementById("newContact").innerHTML = "New";
    lockFields();
    requiredField();
    statusAction = "";
  }
});

// Event Listener for editing exsisting contact
editContactButton.addEventListener("click", function () {
  const verify = document.getElementById("editContact").innerHTML;
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;

  if ((verify == "Edit" && fName != "") || lName != "" || company != "") {
    statusAction = "edit";
    for (i of input) {
      // console.log(i);
      i.disabled = false;
    }

    document.getElementById("newContact").innerHTML = "Cancel";
  } else {
    document.getElementById("editContact").innerHTML = "Edit";
    lockFields();
    requiredField();
    statusAction = "";
  }
});

// Event listener for saveing contact information
saveContactButton.addEventListener("click", function () {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const locked = document.getElementById("fName").hasAttribute("disabled");

  // Checks to see how the contact information will be saved
  if (!locked) {
    if (fName == "" && lName == "" && company == "") {
      alert("Please enter first name, last name, or company.");
    } else if (statusAction == "new") {
      // The new button was clicked to add a new contact
      addContact();
    } else if (statusAction == "edit") {
      // The edit button was clicked to edit an exsisting contact
      updateLocalContact();
    }
  }
});

// Clears all the contact informatoin data fields on the right side of the address book
function clearData() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("company").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("country").value = "";
  document.getElementById("phone").value = "";
}

// Enables the contact information fields so data can be entered
function unlockFields() {
  for (i of input) {
    // console.log(i);
    i.disabled = false;
  }
}

// Disables the contact information fields so they cannot be edited
function lockFields() {
  for (i of input) {
    // console.log(i);
    i.disabled = true;
  }
}

displayContacts(getLocalContacts());
