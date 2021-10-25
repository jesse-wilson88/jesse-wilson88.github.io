function addTask() {
  if (input.value !== "") {
    saveNewTask(input.value);
    input.value = "";
  }
}

function displayTasks() {
  task.innerHTML = "";
  let tasks = getTasks();

  if (tasks !== null) {
    for (const t of tasks) {
      const taskItem = document.createElement("li");
      const taskText = document.createElement("span");
      const taskBtn = document.createElement("button");
      const taskBox = document.createElement("input");

      taskItem.appendChild(taskBox);
      taskBox.setAttribute("type", "checkbox");
      taskItem.setAttribute("id", t.id);
      if (taskItem.parentElement != null || taskItem.length == 0) {
        if (t.completed) {
          taskItem.parentElement.children[1].style.textDecoration =
            "line-through";
        } else {
          taskItem.parentElement.children[1].style.textDecoration = "none";
        }
      }

      taskBox.checked = t.completed;
      taskItem.setAttribute("id", t.id);
      taskItem.appendChild(taskText);
      taskText.textContent = t.task;
      taskItem.appendChild(taskBtn);
      taskBtn.textContent = "❌";

      task.appendChild(taskItem);

      // Here we use an addEventListener to delete a task
      taskBtn.addEventListener("click", function () {
        deleteTask(taskItem);
      });

      // Here is use an addEventListener to each taskItem so
      // they can operate seperately.
      taskItem.addEventListener("click", statusCheckHandler);

      input.focus();
    }
  }
}

// function updateCounter() {
//   let tasks = getTasks();
//   let completedTasks = tasks.filter((i) => !i.completed);

// }

let statusCheckHandler = (event) => {
  let text = event.target.parentElement.children[1];
  // Check if the checkbox is checked
  if (event.target.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};
