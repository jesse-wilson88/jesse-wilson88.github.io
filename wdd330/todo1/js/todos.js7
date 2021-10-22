let deletingtask = false;

function addTask() {
  if (input.value !== "") {
    savenewlocalitem(input.value);
    displayTasks();
    input.value = "";
  }
}

function filterTasks(data) {
  let dataids = data.map((i) => {
    return i.id;
  });
  let items = task.getElementsByTagName("li");
  for (const i of items) {
    i.hidden = false;
    if (!dataids.includes(i.id)) {
      i.hidden = true;
    }
  }
}

function displayTasks() {
  task.innerHTML = "";
  let tasks = getlocalitems();

  if (tasks !== null) {
    for (const t of tasks) {
      const taskItem = document.createElement("li");
      const taskText = document.createElement("span");
      const taskBtn = document.createElement("button");
      const taskBox = document.createElement("input");

      taskItem.appendChild(taskBox);
      taskBox.setAttribute("type", "checkbox");
      taskBox.setAttribute("id", t.id);
      if (taskItem.parentElement != null || taskItem.length == 0) {
        console.log(tasks.length);
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

      taskBtn.addEventListener("click", function () {
        deleteTask(taskItem);
        updateCounter();
      });

      taskItem.addEventListener("click", statusCheckHandler);
    }
    updateCounter();
  }
}

function updateCounter() {
  let tasks = getlocalitems();
  let completedtasks = tasks.filter((i) => !i.completed);
  if (completedtasks.length < 1 || completedtasks.length > 1) {
    document.querySelector(
      "#taskTotal"
    ).innerHTML = `${completedtasks.length} Tasks`;
  } else {
    document.querySelector(
      "#taskTotal"
    ).innerHTML = `${completedtasks.length} Task`;
  }
}

function deleteTask(item) {
  deletingtask = true;
  deletelocalitem(item.id);
  task.removeChild(item);
}

let statusCheckHandler = (event) => {
  let check = event.target.parentElement.children[1];
  if (!deletingtask) {
    // Check if the checkbox is checked
    if (event.target.checked) {
      check.style.textDecoration = "line-through";
      completelocaltask(event.target.id);
    } else {
      uncompletelocaltask(event.target.id);
      check.style.textDecoration = "none";
    }
    updateCounter();
  }
  deletingtask = false;
};
