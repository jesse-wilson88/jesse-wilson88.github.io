const assignments = [
  {
    label: "Week 01: ",
    url: "week01/",
  },
  {
    label: "Week 02: ",
    url: "week02/",
  },
];

let ul = document.createElement("ul");

assignments.forEach((assignment) => {
  const label = `${assignment.label}`;
  const url = `${assignment.url}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.setAttribute("href", url);

  li.innerHTML = label;
  a.innerHTML = "Notes & Code";

  li.append(a);
  ul.append(li);

  document.querySelector("div.assignments").append(ul);
});
