const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

displayTasks(getLocalTasks());
countTasks(filterTasks("All"));

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

// This is where the tasks are filtered
const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

// Shows all tasks, completed or not
filterAll.addEventListener("click", (event) => {
  task.innerHTML = "";
  const tasks = filterTasks("All");

  displayTasks(tasks);

  countTasks(tasks);
});

// Shows only active tasks
filterActive.addEventListener("click", (event) => {
  task.innerHTML = "";
  const tasks = filterTasks(false);
  displayTasks(tasks);

  countTasks(tasks);
});

// Shows only completed tasks
filterCompleted.addEventListener("click", (event) => {
  task.innerHTML = "";
  const tasks = filterTasks(true);
  displayTasks(tasks);

  countTasks(tasks);
});

// Displays how many tasks there are filtered or not
function countTasks(data) {
  let tasks = 0;
  if (data != null) {
    tasks = data.length;
  }

  if (tasks == 1) {
    document.getElementById("taskTotal").innerHTML = `${tasks} task`;
  } else {
    document.getElementById("taskTotal").innerHTML = `${tasks} tasks`;
  }
}
