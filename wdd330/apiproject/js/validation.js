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
function validateRequired() {
  error = document.getElementById("error");

  contactInfo.style.height = "375px";
  error.classList.add("error");
  error.innerHTML = "Please enter first name, last name, or company.";
}

// I am trying to validate the date entered by the user.
// Trying to see if the dob variable is the same as the data variable.
// If they are the same then nothing happens.
// If thry are not the same then send error message.
function validateDob() {
  const dob = new Date(document.getElementById("dob").value);
  let day;
  let month;
  if (dob.getDate() < 10) {
    day = `0${dob.getDate()}`;
  } else {
    day = `${dob.getDate()}`;
  }

  if (dob.getMonth() + 1 < 10) {
    month = `0${dob.getMonth() + 1}`;
  } else {
    month = `${dob.getMonth() + 1}`;
  }
  const year = dob.getFullYear();
  const isLeapYear = leapYear(year);
  // console.log(`Day: ${day}`);
  // console.log(`Month: ${month}`);
  // console.log(`Year: ${year}`);
  console.log(`Leap Year: ${isLeapYear}`);

  // if (dob.getDate() < 10) {
  //   console.log("Day is less than 10");
  // } else {
  //   console.log("OOPs, something went wrong");
  // }

  const dobDate = `${month}/${day}/${year}`;
  // const date = `${month}/${day}/${year}`;
  // const date = new Date(`${document.getElementById("dob").value}`);
  const date = document.getElementById("dob").value;
  const dateDay = date.slice(0, 2);
  console.log(dateDay);
  const dateMonth = date.slice(3, 5);
  console.log(dateMonth);
  const dateYear = date.slice(6, 10);
  console.log(dateYear);
  const dateDob = `${dateDay}/${dateMonth}/${dateYear}`;

  // console.log(`DOB typeof = ${typeof dob}`);
  // console.log(`Date typeof = ${typeof date}`);
  // console.log(`Data typeof = ${typeof data}`);
  console.log(`concatenate: ${month}/${day}/${year}`);
  console.log(`getElementByID: ${document.getElementById("dob").value}`);
  // console.log(`${dob.toString()}`)
  console.log(dobDate);
  console.log(dateDob);

  // console.log(JSON.stringify(dob));
  // console.log(JSON.stringify(date));

  // if (`${month}/${day}/${year}` != `${document.getElementById("dob").value}`) {
  //   console.log("Please look at the Birthday Date again.");
  // }

  if (dobDate != dateDob) {
    console.log("Please look at the Birthday Date again.");
  }
}

function leapYear(year) {
  // console.log(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
