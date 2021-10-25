function getLocalTodos() {
  let todos = localStorage.getItem("todos");
  return JSON.parse(todos);
}

function saveLocalTodos(task) {
  localStorage.setItem("tasks", JSON.stringify(task));
}

function saveNewLocalTodo(item) {
  taskList = getLocalTodos();

  if (taskList == null) {
    taskList = [];
  }

  taskList.push({
    id: new Date().getTime(),
    task: item,
    completed: false,
  });

  saveLocalTodos(taskList);
}
