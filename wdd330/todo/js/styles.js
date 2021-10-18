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

  let num = document.querySelectorAll("li").length;
  // let item = document.getElementsByTagName("span");

  console.log(
    `Array length has ${document.querySelectorAll("li").length} items.`
  );

  console.log("Task #" + num + " is " + taskInput);
  // Use document.querySelectorAll("li").length to get the number of the item that is added, so there is something from an array to get. The taskItem (task1, task2, task3, etc)

  // let itemNum = document.querySelectorAll("li");
  // let item = console.log(taskInput);

  // let tasks[itemNum] = item;

  input.focus();
});
