const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

/* Here we use an addEventListener for the button */
button.addEventListener("click", function () {
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
    taskItem.appendChild(taskText);
    taskText.textContent = taskInput;
    taskItem.appendChild(taskBtn);
    taskBtn.textContent = "\u274C";
    task.appendChild(taskItem);

    taskBtn.addEventListener("click", function () {
      task.removeChild(taskItem);
    });

    input.focus();
  }
});
