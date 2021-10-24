// let tasklist = [],
//   newid,
//   taskids = [];

let newid = [];

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
