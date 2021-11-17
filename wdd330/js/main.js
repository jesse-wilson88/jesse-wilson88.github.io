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
  {
    label: "Week 06: ",
    url: "todo/",
  },
  {
    label: "Week 07: ",
    url: "week07/",
  },
  {
    label: "Week 08: ",
    url: "week08/",
  },
  {
    label: "Week 09: ",
    url: "week09/",
  },
  {
    label: "Week 10: ",
    url: "week10/",
  },
  // {
  //   label: "Week 11: ",
  //   url: "week11/",
  // },
  // {
  //   label: "Week 12: ",
  //   url: "week12/",
  // },
];

let ul = document.createElement("ul");

assignments.forEach((assignment) => {
  const label = `${assignment.label}`;
  const url = `${assignment.url}`;

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.setAttribute("href", url);

  li.innerHTML = label;
  console.log(li.innerHTML);
  if (li.innerHTML == "Week 06: ") {
    console.log("This is week 6");
    a.innerHTML = "Todo Application";
  } else {
    console.log("This is not week 6");
    a.innerHTML = "Notes & Code";
  }

  li.append(a);
  ul.append(li);

  document.querySelector("div.assignments").append(ul);
});
