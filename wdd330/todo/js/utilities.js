const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

displayTasks();

// Here we use an addEventListener for the button
button.addEventListener("click", displayTasks);

// Here we use an addEventListener for the Enter key
// The button eventListener above can be towards the top
// but the input eventListener cannot because it has to
// call the function.
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    displayTasks();
  }
});

const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

filterAll.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value].map((item) => ({
    timestamp: new Date().getTime(),
    checked: item.children[0].checked,
    task: item.children[1].innerHTML,
  }));

  console.log(data);
});

filterActive.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      timestamp: new Date().getTime(),
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
    }))
    .filter((item) => !item.checked);

  console.log(data);
});

filterCompleted.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      timestamp: new Date().getTime(),
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
    }))
    .filter((item) => item.checked);

  console.log(data);
});

// function getTaskItems() {
//   let data = [...value].map((item) => ({
//     timestamp: new Date().getTime(),
//     checked: item.children[0].checked,
//     task: item.children[1].innerHTML,
//   }));
// }
