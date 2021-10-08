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

board.addEventListener("touchend", placement, false);

reset.addEventListener("touchend", resetBoard, false);
