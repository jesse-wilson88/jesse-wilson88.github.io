const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

// Event listener for creating a new contact
newContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("newContact").innerHTML;

  if (button == "New") {
    // Clears the contactData fields for a new contact data
    document.getElementById("id").value = "";
    document.getElementById("saveContact").innerHTML = "Save";
    document.getElementById("editContact").innerHTML = "Cancel";

    unlockFields();
    requiredField();
    clearData();

    document.getElementById("fName").focus();
  } else {
    // User clicked cancel so fields are locked and buttons are reset to default
    document.getElementById("saveContact").innerHTML = "Clear";
    document.getElementById("newContact").innerHTML = "New";

    lockFields();
    requiredField();
    statusAction = "";
  }
});

// Event Listener for editing exsisting contact
editContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("editContact").innerHTML;
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const locked = document.getElementById("fName").hasAttribute("disabled");

  if (button == "Edit") {
    if ((locked && fName != "") || lName != "" || company != "") {
      document.getElementById("newContact").innerHTML = "Cancel";
      document.getElementById("saveContact").innerHTML = "Save";
      unlockFields();
    }
  } else if (button == "Cancel") {
    document.getElementById("editContact").innerHTML = "Edit";
    document.getElementById("saveContact").innerHTML = "Clear";
    lockFields();
    clearData();
    requiredField();
  }
});

// Event listener for saveing contact information
saveContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("saveContact").innerHTML;
  const id = document.getElementById("id").value;
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const locked = document.getElementById("fName").hasAttribute("disabled");

  if (button == "Save") {
    // Checks to see how the contact information will be saved
    if (!locked) {
      if (fName == "" && lName == "" && company == "") {
        alert("Please enter first name, last name, or company.");
      } else if (id == "") {
        // The new button was clicked to add a new contact
        document.getElementById("saveContact").innerHTML = "Clear";
        document.getElementById("editContact").innerHTML = "Edit";

        addContact();
        lockFields();
      } else {
        // The edit button was clicked to edit an exsisting contact
        document.getElementById("saveContact").innerHTML = "Clear";
        document.getElementById("newContact").innerHTML = "New";

        updateLocalContact();
        lockFields();
      }
    }
  } else {
    // Clears the contactData on the right column
    clearData();
  }
});

// Clears all the contact informatoin data fields on the right side of the address book
function clearData() {
  document.getElementById("form").reset();
}

// Enables the contact information fields so data can be entered
function unlockFields() {
  for (i of input) {
    i.disabled = false;
  }
}

// Disables the contact information fields so they cannot be edited
function lockFields() {
  for (i of input) {
    i.disabled = true;
  }
}

displayContacts(getLocalContacts());
