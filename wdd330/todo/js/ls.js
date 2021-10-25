// Gets the tasks from local storage if there are any
function getLocalTasks() {
  let tasks = localStorage.getItem("tasks");
  return JSON.parse(tasks);
}

// Saves tasks entered by the user
function saveNewLocalTask(task) {
  let taskList = getLocalTasks();
  if (taskList === null) {
    taskList = [];
  }

  // Adds task to array to be saved in localStorage
  taskList.push({
    id: new Date().getTime(),
    task: task,
    checked: false,
  });

  window.localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Filters out the tasks based on the condition and displays the filtered tasks
function filterTasks(condition) {
  let taskList = getLocalTasks();
  let filteredTasks = [];

  if (taskList != null) {
    if (condition != "All") {
      filteredTasks = taskList.filter((i) => {
        return i.checked == condition;
      });
    } else {
      filteredTasks = taskList;
    }
  }

  // I like the following commented out code. Leaving it for later reference
  // console.log(JSON.stringify(completedTasks, null, 2));
  return filteredTasks;
}

// Toggles the checkBox with checked (true) or unchecked (false)
function taskChecked(id) {
  let taskList = getLocalTasks();

  for (const task of taskList) {
    if (task.id == id) {
      task.checked = !task.checked;
    }
  }

  window.localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Deletes the task list and updates the array
function deleteTask(task) {
  let taskList = getLocalTasks();

  let newTaskList = [];
  for (const t of taskList) {
    if (t.id != task) {
      newTaskList.push(t);
    }
  }

  window.localStorage.setItem("tasks", JSON.stringify(newTaskList));
  countTasks(newTaskList);
}
