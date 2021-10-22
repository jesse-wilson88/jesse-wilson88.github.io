const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

displayTasks();

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
button.addEventListener("click", addTask);

const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

filterAll.addEventListener("click", displayTasks);
filterActive.addEventListener("click", displayTasks);
filterCompleted.addEventListener("click", displayTasks);

filterAll.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value].map((item) => ({
    checked: item.children[0].checked,
    task: item.children[1].innerHTML,
    id: item.id,
  }));

  // Calls this function to hide completed tasks
  filterTasks(data);
});

filterActive.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
      id: item.id,
    }))
    .filter((item) => !item.checked);

  // Calls this function to hide completed tasks
  filterTasks(data);
});

filterCompleted.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
      id: item.id
    }))
    .filter((item) => item.checked);

  // Calls this function to hide completed tasks
  filterTasks(data);
});
