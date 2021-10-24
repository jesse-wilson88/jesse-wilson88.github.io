const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

displayTasks();

// Here we use an addEventListener for the button
button.addEventListener("click", addTask);

// Here we use an addEventListener for the Enter key
// The button eventListener above can be towards the top
// but the input eventListener cannot because it has to
// call the function.
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
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

  // Calls this function to show all tasks
  filterTasks(data);
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

  // Calls this function to hide active tasks
  filterTasks(data);
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

  // Calls this function to hide completed tasks
  filterTasks(data);
  console.log(data);
});

// function getTaskItems() {
//   let data = [...value].map((item) => ({
//     timestamp: new Date().getTime(),
//     checked: item.children[0].checked,
//     task: item.children[1].innerHTML,
//   }));
// }
