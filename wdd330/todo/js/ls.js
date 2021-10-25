function getLocalTodos() {
  let tasks = localStorage.getItem("tasks");
  return JSON.parse(tasks);
}

function saveLocalTodos(task) {
  localStorage.setItem("tasks", JSON.stringify(task));
}

function saveNewLocalTodo(item) {
  let taskList = getLocalTodos();

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

  saveLocalTodos(taskList);
}
