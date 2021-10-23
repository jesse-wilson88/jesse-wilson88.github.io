function displayTasks() {
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

// function updateCounter() {
//   if (data.length < 1 || data.length > 1) {
//     document.querySelector("#taskTotal").innerHTML = `${data.length} Tasks`;
//   } else {
//     document.querySelector("#taskTotal").innerHTML = `${data.length} Task`;
//   }
// }
