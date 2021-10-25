function getTasks() {
  let todos = localStorage.getItem("todos");
  return JSON.parse(todos);
}

function saveNewTask(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
