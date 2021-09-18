// Gets the current year
let thedate = new Date();
let theyear = thedate.getFullYear();
document.querySelector("#currentyear").textContent = theyear;

const assignments = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
];

let ul = document.createElement("ul");

assignments.forEach((assignment) => {
  const label = `${assignment.label}`;
  const url = `${assignment.url}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.setAttribute = ("href", url);

  a.innerHTML = url;
  li.innerHTML = label;

  li.append(a);
  ul.append(li);

  document.querySelector("div.assignments").append(ul);
});
