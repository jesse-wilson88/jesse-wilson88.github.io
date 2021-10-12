const assignments = [
  {
    label: "Week 01: ",
    url: "week01/",
  },
  {
    label: "Week 02: ",
    url: "week02/",
  },
  {
    label: "Week 03: ",
    url: "week03/",
  },
  {
    label: "Week 04: ",
    url: "week04/",
  },
  {
    label: "Week 05: ",
    url: "week05/",
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
