const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

let addTaskHandler = function () {
  // console.log(document.querySelectorAll("li").length);
  // if (document.querySelectorAll("li").length == 0) {
  //   console.log("Array length is empty");
  //   let tasks = [];
  //   console.log(tasks);
  // }

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

    taskItem.addEventListener("click", statusCheckHandler);
  }

  // console.log(`User entered: ${taskInput}`);

  // console.log(
  // `Array length has ${document.querySelectorAll("li").length} items.`
  // );

  // console.log("Task #" + tasks + " is " + taskInput);

  input.focus();
};

let statusCheckHandler = (event) => {
  let text = event.target.parentElement.children[1];
  //Check if the check input is checked
  if (event.target.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};

/* Here we use an addEventListener for the button */
button.addEventListener("click", addTaskHandler);
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskHandler();
  }
});
