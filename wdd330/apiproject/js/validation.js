// Checks to see if the three fields (fName, lName, company) should be
// required or not
function requiredField() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const company = document.getElementById("company").value;
  const disabled = document.getElementById("fName").hasAttribute("disabled");

  // If all three fields (fname, lName, company) are blank,
  // set field required to true
  if (fName == "" && lName == "" && company == "" && !disabled) {
    document.getElementById("fName").required = true;
    document.getElementById("lName").required = true;
    document.getElementById("company").required = true;
  } else {
    // If any of the fields (fname, lName, company) are not blank,
    // set field required to false
    document.getElementById("fName").required = false;
    document.getElementById("lName").required = false;
    document.getElementById("company").required = false;
  }
}

// Validate for letters only
function letters(text, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (
    charCode == 32 ||
    charCode == 45 ||
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)
  ) {
    // alert("Only Letters Allowed");
    return true;
  } else {
    return false;
  }
}

// Validate for letters & numbers only
function alphaNumerical(text, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (
    charCode == 32 ||
    charCode == 45 ||
    (charCode > 47 && charCode < 58) ||
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)
  ) {
    // alert("Only Letters Allowed");
    return true;
  } else {
    return false;
  }
}

// Validate only numbers entered for phone number
function phoneNumber(tel, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    // alert("Only Numbers Allowed");
    return false;
  } else {
    if (tel.value.length == 3 || tel.value.length == 7) {
      //keycode to avoid response to backspace
      if (e.keyCode != 8) {
        tel.value = tel.value + "-";
      }
    }
    return true;
  }
}

// Validate only numbers entered for date of birth
function date(date, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    // alert("Only Numbers Allowed");
    return false;
  } else {
    if (date.value.length == 2 || date.value.length == 5) {
      //keycode to avoid response to backspace
      if (e.keyCode != 8) {
        date.value = date.value + "/";
      }
    }
    return true;
  }
}

// If fName, lName. or company is
function validateInput() {
  fName = document.getElementById("fName").value;
  lName = document.getElementById("lName").value;
  company = document.getElementById("company").value;
  contactInfo = document.getElementById("contactInfo");
  error = document.getElementById("error");

  // if (fName == "" && lName == "" && company == "") {
  console.log("No entry in fName, lName, or company");
  contactInfo.style.height = "468px";
  error.classList.add("error");
  error.innerHTML = "Please enter first name, last name, or company.";
  // }
}
