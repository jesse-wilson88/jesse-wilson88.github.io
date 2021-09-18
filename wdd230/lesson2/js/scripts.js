// Gets the last modified date
document.querySelector('#lastmodified').textContent = document.lastModified;

// Gets the current year
let thedate = new Date();
let theyear = thedate.getFullYear();
document.querySelector('#currentyear').textContent = theyear;