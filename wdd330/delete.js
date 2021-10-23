//www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp&ab_channel=SteveGriffith-Prof3ssorSt3v3

// JavaScript Event Listeners
// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)
//

https: document.addEventListener("DOMContentLoaded", init);

function init() {
  let btn = document.getElementById("btn");
  let lnk = document.getElementById("lnk");
  let txt = document.getElementById("txt");

  txt.addEventListener("input", (ev) => {
    console.log(ev.type, ev.target, ev.target.value);
  });
  txt.addEventListener("change", (ev) => {
    console.log(ev.type, ev.target, ev.target.value);
  });
  txt.addEventListener("blur", (ev) => {
    console.log(ev.type);
  });
  lnk.addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log(ev.type, ev.target);
  });
  btn.addEventListener("click", buttonClicked);
}

function buttonClicked(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
}

//function linkClicked(ev){
//    ev.preventDefault(); //stop the link from being followed
//    console.log(ev.type, ev.target, ev.currentTarget);
//}

// object.addEventListener(event, function)

//myDiv.addEventListener('click', doSomething )

//function doSomething(ev){
//    console.log( ev.type )//click
//    console.log( ev.target )
//    return 7;
//}
