// Gets the current year
let thedate = new Date();
let theyear = thedate.getFullYear();
document.querySelector("#currentyear").textContent = theyear;

const assignments = [
  {
    label: "Week 01: ",
    url: "week01/",
  },
];

let ul = document.createElement("ul");

assignments.forEach((assignment) => {
  const label = `${assignment.label}`;
  const url = `${assignment.url}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  li.setAttribute("href", url);
  a.setAttribute("href", url);

  a.innerHTML = "Notes & Code";
  li.innerHTML = label;

  li.append(a);
  ul.append(li);

  document.querySelector("div.assignments").append(ul);
});
