// Determine what day of the week it is today
// The code below is in the scripts.js
//let thedate = new Date();
//console.log(thedate.getDay());

// If it is Friday then turn the aside display property to block
// Challenge: Do it with one statement.
if (thedate.getDay() == 5) {
  document.querySelector("#banner").style.display = "block";
}
