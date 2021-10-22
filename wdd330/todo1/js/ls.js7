let tasklist = [],
  newid,
  taskids = [];

function getlocalitems() {
  let todos = localStorage.getItem("todos");
  // console.log("todos: " + todos);
  return JSON.parse(todos);
}

function savelocalitems(tasks) {
  window.localStorage.setItem("todos", JSON.stringify(tasks));
}

function savenewlocalitem(item) {
  tasklist = getlocalitems();
  if (tasklist != null) {
    taskids = Object.values(
      tasklist.map((i) => {
        return parseInt(i.id.substring(4));
      })
    );
  } else {
    taskids = [0];
  }
  newid = "task" + (Math.max(...taskids) + 1);
  tasklist.push({
    id: newid,
    task: item,
    completed: false,
    timestamp: new Date(),
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
