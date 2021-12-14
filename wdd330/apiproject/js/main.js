const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

// Event listener for creating a new contact
newContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("newContact").innerHTML;
  const id = document.getElementById("id");
  const contactInfo = document.getElementById("contactInfo");
  const error = document.getElementById("error");

  if (button == "New") {
    // Clears the contactData fields for a new contact data
    id.value = "";
    document.getElementById("saveContact").innerHTML = "Save";
    document.getElementById("editContact").innerHTML = "Cancel";

    unlockFields();
    clearData();
    requiredField();

    document.getElementById("fName").focus();
  } else if (button == "Cancel") {
    // User clicked cancel so fields are locked and buttons are reset to default
    document.getElementById("saveContact").innerHTML = "Clear";
    document.getElementById("newContact").innerHTML = "New";
    document.getElementById("error").innerHTML = "";

    lockFields();
    requiredField();
    displayData(id.value);
    statusAction = "";
  }
  error.classList.remove("error");
  contactInfo.style.height = "405px";
  error.innerHTML = "";
});

// Event Listener for editing exsisting contact
editContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("editContact").innerHTML;
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const contactInfo = document.getElementById("contactInfo");
  const error = document.getElementById("error");
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
  error.classList.remove("error");
  contactInfo.style.height = "405px";
  error.innerHTML = "";
});

// Event listener for saveing contact information
saveContactButton.addEventListener("click", (event) => {
  event.preventDefault();
  const button = document.getElementById("saveContact").innerHTML;
  const id = document.getElementById("id").value;
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  // const contactInfo = document.getElementById("contactInfo");
  // const error = document.getElementById("error");
  const locked = document.getElementById("fName").hasAttribute("disabled");

  if (button == "Save") {
    // Checks to see how the contact information will be saved
    if (!locked) {
      if (fName == "" && lName == "" && company == "") {
        const message = "Please enter first name, last name, or company.";
        errorMessage(message);
      } else if (id == "") {
        const validate = validateDob();

        if (validate) {
          // The new button was clicked to add a new contact
          document.getElementById("saveContact").innerHTML = "Clear";
          document.getElementById("editContact").innerHTML = "Edit";

          addContact();
          lockFields();
          displayData(id);
        }
      } else {
        const validate = validateDob();

        if (validate) {
          // The edit button was clicked to edit an exsisting contact
          document.getElementById("saveContact").innerHTML = "Clear";
          document.getElementById("newContact").innerHTML = "New";

          updateLocalContact();
          lockFields();
          displayData(id);
        }
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

  document.getElementById("map").innerHTML = "";
  document.getElementById("weatherWrapper").innerHTML = "";
}

// Enables the contact information fields so data can be entered
function unlockFields() {
  for (let i of input) {
    i.disabled = false;
  }
}

// Disables the contact information fields so they cannot be edited
function lockFields() {
  for (let i of input) {
    i.disabled = true;
  }
}

displayContacts(getLocalContacts());
userCoords();
