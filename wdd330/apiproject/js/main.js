const newContactButton = document.getElementById("newContact");
const editContactButton = document.getElementById("editContact");
const saveContactButton = document.getElementById("saveContact");

newContactButton.addEventListener("click", function () {
  const verify = document.getElementById("newContact").innerHTML;
  // console.log(verify);
  if (verify === "New") {
    statusAction = "new";

    unlockFields();
    clearData();
    // console.log("New Contact button has been clicked.");
    document.getElementById("editContact").innerHTML = "Cancel";
    document.getElementById("fName").focus();
  } else {
    document.getElementById("newContact").innerHTML = "New";
    lockFields();
    statusAction = "";
  }
});

editContactButton.addEventListener("click", function () {
  const verify = document.getElementById("editContact").innerHTML;
  const fName = document.getElementById("fName").value;

  if (verify == "Edit" && fName !== "") {
    statusAction = "edit";
    for (i of input) {
      // console.log(i);
      i.disabled = false;
    }

    document.getElementById("newContact").innerHTML = "Cancel";
  } else {
    document.getElementById("editContact").innerHTML = "Edit";
    lockFields();
    statusAction = "";
  }
});

saveContactButton.addEventListener("click", function () {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const locked = document.getElementById("fName").hasAttribute("disabled");

  if (!locked) {
    if (fName == "" && lName == "" && company == "") {
      alert("Please enter first name, last name, company or click cancel.");
    } else if (statusAction == "new" && fName !== "") {
      // console.log("Adding Contact");
      addContact();
    } else if (statusAction == "edit" && fName !== "") {
      // console.log("Updating Contact");
      updateLocalContact();
    }
    // clearData();
    lockFields();
    document.getElementById("newContact").innerHTML = "New";
    document.getElementById("editContact").innerHTML = "Edit";
  }
});

function clearData() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("company").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";
}

function unlockFields() {
  for (i of input) {
    // console.log(i);
    i.disabled = false;
  }
}

function lockFields() {
  for (i of input) {
    // console.log(i);
    i.disabled = true;
  }
}

displayContacts(getLocalContacts());
