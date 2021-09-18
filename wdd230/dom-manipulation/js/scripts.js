const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

/* Here we use an addEventListener for the button */
button.addEventListener("click", function () {
  let chapterInput = input.value;
  input.value = "";

  if (chapterInput != "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = chapterInput;
    listItem.appendChild(listBtn);
    listBtn.textContent = "\u274C";
    list.appendChild(listItem);

    /* Here we use the onclick for the button
    listBtn.onclick = function () {
      list.removeChild(listItem);
    };*/

    listBtn.addEventListener("click", function () {
      list.removeChild(listItem);
    });

    input.focus();
  }
});
