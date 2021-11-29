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

// Validate only numbers entered for phone number
function num(tel, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    alert("Only Numbers Allowed");
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

// Validate only letters entered
function letters(text, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode == 46 || (charCode > 47 && charCode < 65)) {
    alert("Only Letters Allowed");
    return false;
  } else {
    return true;
  }
}

// function alphaNumerical(text, e) {
//   var charCode = e.which ? e.which : e.keyCode;
//   if (
//     charCode == 32 || // space
//     (charCode > 31 && (charCode < 48 || charCode > 57)) ||
//     charCode == 46 ||
//     (charCode > 47 && charCode < 65)
//   ) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     alert("message");
//     return false;
//   }
// }
