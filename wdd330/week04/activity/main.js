const board = document.querySelector(".board");
const reset = document.querySelector(".resetBoard");

let isX = true;

function placement(e) {
  if (e.target.innerHTML == "") {
    e.target.innerHTML = isX ? "X" : "O";

    isX = !isX;
  }
}

function resetBoard() {
  let tbody = board.children[0];

  for (let i = 0; i < tbody.children.length; i++) {
    let trows = tbody.children[i];

    for (let j = 0; j < trows.children.length; j++) {
      trows.children[j].innerHTML = "";
    }
  }
}

// When we did this in our team zoom meeting it worked like a charm. For some
// reason it is not working unless I inspect the page. I am changing it from
// "touchend" to "clicked" just so it works for now till I have time to look
// at it and find out why it is not working now. When we started this two
// other people tried to be the scribe for this week but the code did not work
// but mine did till now.
board.addEventListener("clicked", placement, false);

reset.addEventListener("clicked", resetBoard, false);
