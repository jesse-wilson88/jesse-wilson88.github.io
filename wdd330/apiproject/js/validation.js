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
    // Return true is the key pressed is a letter
    return true;
  } else {
    // Return false is the key pressed is a not letter
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
    // Returns true if the key pressed is a letter or number
    return true;
  } else {
    // Returns false if the key pressed is not a letter or number
    return false;
  }
}

// Validate only numbers entered for phone number
function phoneNumber(tel, e) {
  var charCode = e.which ? e.which : e.keyCode;
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    // Returns false if the key pressed is a letter
    return false;
  } else {
    if (tel.value.length == 3 || tel.value.length == 7) {
      //keycode to avoid response to backspace
      if (e.keyCode != 8) {
        // Puts a + between the area code & prefix and between the prefix & number
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
    // Returns false if the key pressed is a letter
    return false;
  } else {
    if (date.value.length == 2 || date.value.length == 5) {
      //keycode to avoid response to backspace
      if (e.keyCode != 8) {
        // Puts a / between the day & month and between the month & year
        date.value = date.value + "/";
      }
    }
    return true;
  }
}

// If fName, lName. or company is empty, user gets an error message
function errorMessage(message) {
  error = document.getElementById("error");

  contactInfo.style.height = "375px";
  error.classList.add("error");
  error.innerHTML = message;
}

// Checks to see if the Date is valid or not
function validateDob() {
  const birthday = document.getElementById("dob").value;
  // Converts the birthday to an actual date
  if (birthday != "") {
    const dob = new Date(birthday);
    let day;
    let month;
    // Gets the day and adds a leading zero if less than 10
    if (dob.getDate() < 10) {
      day = `0${dob.getDate()}`;
    } else {
      day = `${dob.getDate()}`;
    }

    // Gets the month and adds a leading zero if less than 10
    if (dob.getMonth() + 1 < 10) {
      month = `0${dob.getMonth() + 1}`;
    } else {
      month = `${dob.getMonth() + 1}`;
    }

    const year = dob.getFullYear();
    const dobDate = `${month}/${day}/${year}`;

    // Gets the birthday from the birthday field
    const date = document.getElementById("dob").value;
    const dateDay = date.slice(0, 2); // Gets the day
    const dateMonth = date.slice(3, 5); // Gets the month
    const dateYear = date.slice(6, 10); // Gets the year
    const dateDob = `${dateDay}/${dateMonth}/${dateYear}`;

    // Checks to see if the New Date() is the same as the date in the input field
    if (dobDate != dateDob) {
      const message = "Please look at the Birthday Date again.";
      errorMessage(message);
      return false;
    } else {
      error.classList.remove("error");
      contactInfo.style.height = "405px";
      error.innerHTML = "";

      return true;
    }
  } else {
    error.classList.remove("error");
    contactInfo.style.height = "405px";
    error.innerHTML = "";

    return true;
  }
}

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
