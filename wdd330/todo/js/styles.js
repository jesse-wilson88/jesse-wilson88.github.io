const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

/* Here we use an addEventListener for the button */
button.addEventListener("click", function () {
  console.log(document.querySelectorAll("li").length);
  if (document.querySelectorAll("li").length == 0) {
    console.log("Array length is empty");
    let tasks = [];
    console.log(tasks);
  }

  // let tasks = [];

  let taskInput = input.value;
  input.value = "";

  if (taskInput != "") {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskBtn = document.createElement("button");
    const taskBox = document.createElement("input");

    taskItem.appendChild(taskBox);
    taskBox.setAttribute("type", "checkbox");
    taskBox.setAttribute(
      "id",
      `statusBox${document.querySelectorAll("li").length}`
    );
    taskItem.appendChild(taskText);
    taskText.textContent = taskInput;
    taskItem.appendChild(taskBtn);
    taskBtn.textContent = "\u274C";
    task.appendChild(taskItem);

    taskBtn.addEventListener("click", function () {
      task.removeChild(taskItem);
    });
  }

  console.log(`User entered: ${taskInput}`);

  console.log(
    `Array length has ${document.querySelectorAll("li").length} items.`
  );

  // console.log("Task #" + tasks + " is " + taskInput);

  console.log();

  input.focus();
});

taskItem.addEventListener("click", function () {
  let tasks = document.querySelectorAll("li");

  for (let i = 0; i > tasks; i++) {
    for (let j = 0; i < 2; j++) {
      if (tasks.children[0].checked == true) {
        tasks[i].children[j].style.textDecoration = "line-through";
      } else {
        tasks[i].children[j].style.textDecoration = "none";
      }
    }
  }
});
