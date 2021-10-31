// If a form is passed to this constructor function as an argument, the form data
// instance will serialize all the data automatically, ready to be sent using Ajax. In
// our last example, we created the task manually based on the data provided in the
// form. The FormData interface helps to reduce the amount of code needed when
// submitting forms.

const form = document.forms["todo"];

form.addEventListener("submit", addTask, false);

function addTask(event) {
  event.preventDefault();
  const task = new FormData(form);
  const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });
  const request = new Request(url, {
    method: "POST",
    mode: "cors",
    header: headers,
    body: JSON.stringify(task),
  });

  fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(`${data.title} saved with an id of ${data.id}`))
    .catch((error) => console.log("There was an error:", error));
}

// In this function, we create a new FormData instance using the FormData()
// constructor function and provide the form as an argument. This does all the hard
// work of creating the task object for us.

// It’s also possible to add data to the form data instance as key-value pairs using the
// append() method:
data = new FormData(); // no form provided as an argument creates an empty form data instance

data.append("height", 75);

// The FormData interface really comes into its own when a form contains files to
// upload. This was a notoriously difficult task in the past, often requiring the use of
// Flash or another third-party browser plugin to handle the upload process. The
// FormData instance will automatically create the necessary settings required, and
// take care of all the hard work if any file uploads are present in the form.
