// Adds a new task
function addTask() {
  let taskInput = input.value;
  input.value = "";
  if (taskInput != "") {
    saveNewLocalTask(taskInput);
    displayTasks(getLocalTasks());
    countTasks(filterTasks("All"));
  }
}

// Displays the tasks inside a frame
function displayTasks(tasks) {
  task.innerHTML = "";

  if (tasks !== null) {
    for (const t of tasks) {
      const taskItem = document.createElement("li");
      const taskText = document.createElement("span");
      const taskBtn = document.createElement("button");
      const taskBox = document.createElement("input");

      taskItem.appendChild(taskBox);
      taskBox.setAttribute("type", "checkbox");
      taskBox.checked = t.checked;
      taskBox.setAttribute("id", t.id);

      // Checks to see is the checkBox is checked or not. Without this
      // here, they are still checked but the link-through is gone
      if (t.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }

      taskItem.setAttribute("id", t.id);
      taskItem.appendChild(taskText);
      taskText.textContent = t.task;
      taskItem.appendChild(taskBtn);
      taskBtn.textContent = "❌";

      task.appendChild(taskItem);

      // Here we use an addEventListener to delete a task
      taskBtn.addEventListener("click", function () {
        deleteTask(taskItem.id);
        task.removeChild(taskItem);
      });

      // Here is use an addEventListener to each taskItem so
      // they can operate seperately.
      taskItem.addEventListener("click", statusCheckHandler);
    }
  }

  input.focus();
}

// Checks to see is the checkBox is checked or not.
let statusCheckHandler = (event) => {
  let text = event.target.parentElement.children[1];
  // Check if the checkbox is checked
  if (event.target.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
  taskChecked(event.target.id);
};
