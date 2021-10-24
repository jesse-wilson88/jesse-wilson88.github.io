function getTasks() {
  let todos = localStorage.getItem("todos");
  console.log("todos: " + todos);
  return JSON.parse(todos);
}

function saveTasks(tasks) {
  window.localStorage.setItem("todos", JSON.stringify(tasks));
}

function saveNewTask(item) {
  taskList = getTasks();

  let counter = 0;
  for (const i in taskList) {
    counter++;
  }

  if (counter > 0) {
    taskIds = Object.values(
      taskList.map((i) => {
        return parseInt(i.id.substring(4));
      })
    );
  } else {
    taskList = [];
    taskIds = [0];
  }

  taskList.push({
    id: new Date().getTime(),
    task: item,
    completed: false,
  });

  saveTasks(taskList);
}
