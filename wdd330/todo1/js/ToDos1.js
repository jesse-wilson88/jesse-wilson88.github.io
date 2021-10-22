const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Toggles the class 'hide' which CSS will remove from sight
function filterTasks(data) {
  let dataids = data.map((i) => {return i.id});
  var items = task.getElementsByTagName("li");
  for(const i of items){
    i.hidden = false;
    if(!dataids.includes(i.id)){
      i.hidden = true;
    }
  }
}

function taskFramework() {
  let taskInput = input.value;
  input.value = "";

  if (taskInput != "") {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskBtn = document.createElement("button");
    const taskBox = document.createElement("input");

    taskItem.appendChild(taskBox);
    taskBox.setAttribute("type", "checkbox");
    taskBox.setAttribute("id", "statusBox");
    taskItem.setAttribute(
      "id",
      `task${document.querySelectorAll("li").length}`
    );
    taskItem.appendChild(taskText);
    taskText.textContent = taskInput;
    taskItem.appendChild(taskBtn);
    taskBtn.textContent = "❌";

    task.appendChild(taskItem);

    // Here we use an addEventListener to delete a task
    taskBtn.addEventListener("click", function () {
      task.removeChild(taskItem);
    });

    // Here is use an addEventListener to each taskItem so
    // they can operate seperately.
    taskItem.addEventListener("click", statusCheckHandler);
  }

  input.focus();
}

let statusCheckHandler = (event) => {
  let text = event.target.parentElement.children[1];
  // Check if the checkbox is checked
  if (event.target.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};

// Here we use an addEventListener for the button
// button.addEventListener("click", addTaskHandler);
button.addEventListener("click", taskFramework);

// Here we use an addEventListener for the Enter key
// The button eventListener above can be towards the top
// but the input eventListener cannot because it has to
// call the function.
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    taskFramework();
  }
});

// const filterActive = document.querySelector("button");
const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

filterAll.addEventListener("click", taskFramework);
filterActive.addEventListener("click", taskFramework);
filterCompleted.addEventListener("click", taskFramework);

filterAll.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value].map((item) => ({
    checked: item.children[0].checked,
    task: item.children[1].innerHTML,
    id: item.id,
  }));

  // Calls this function to hide completed tasks
  filterTasks(data);

  console.log(data);
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

  if (data.length < 1 || data.length > 1) {
    document.querySelector("#taskTotal").innerHTML = `${data.length} Tasks`;
  } else {
    document.querySelector("#taskTotal").innerHTML = `${data.length} Task`;
  }

  console.log(data);
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

  console.log(data);
});