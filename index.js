let resetbtn = document.querySelector("#reset-btn")
let boxes = document.querySelectorAll(".box");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector(".newGame");

let turn0 = true;
let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disablebtn=()=>{

    for (let box of boxes) {
        box.disabled=true
    }
}

const enablebtn=()=>{
    for (let box of boxes) {
        box.disabled    =false
    }

}

const showwinner = (winner) => {
  msg.innerText = `Congrats the winner is ${winner}`;
  msgcont.classList.remove("hidden")
  disablebtn()
};
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner");
        showwinner(pos1val);
        disablebtn()
      }
    }
  }
};
const resetgame=()=>{
    enablebtn();

    for(let box of boxes   ) {
        box.innerText=''
    }
    msgcont.classList.add("hidden")

}
 newGamebtn.addEventListener("click" , resetgame)
 resetbtn.addEventListener("click" , resetgame)