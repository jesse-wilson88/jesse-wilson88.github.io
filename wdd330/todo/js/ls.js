function getlocalitems() {
  let tasks = localStorage.getItem("tasks");
  // console.log("tasks: " + tasks);
  return JSON.parse(tasks);
}

function savelocalitems(tasks) {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function savenewlocalitem(item) {
  tasklist = getlocalitems();

  let counter = 0;
  for (const i in tasklist) {
    counter++;
  }

  if (counter > 0) {
    taskids = Object.values(
      tasklist.map((i) => {
        return parseInt(i.id.substring(4));
      })
    );
  } else {
    tasklist = [];
    taskids = [0];
  }

  tasklist.push({
    id: new Date(),
    task: item,
    completed: false,
  });

  savelocalitems(tasklist);
}

function deletelocalitem(item) {
  tasklist = getlocalitems();
  tasklist = tasklist.filter((i) => i.id !== item);
  savelocalitems(tasklist);
}

function completelocaltask(item) {
  tasklist = getlocalitems();
  tasktoupdate = tasklist
    .map((i) => {
      return i.id;
    })
    .indexOf(item);
  tasklist[tasktoupdate].completed = true;
  savelocalitems(tasklist);
}

function uncompletelocaltask(item) {
  tasklist = getlocalitems();
  tasktoupdate = tasklist
    .map((i) => {
      return i.id;
    })
    .indexOf(item);
  tasklist[tasktoupdate].completed = false;
  savelocalitems(tasklist);
}
