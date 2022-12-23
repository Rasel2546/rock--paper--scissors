/*
0 rock
1 paper
2 scissors
*/

let rivalsPoint = document.getElementById("rivalP");
let yourPoint = document.getElementById("youP");
let rivalImage = document.getElementById("rivalImage");
let txt = document.getElementById("text");

let images = ["images/rock.png", "images/paper.png", "images/scissors.png"];

const rivalsHand = function () {
  return Math.floor(Math.random() * 3);
};

const reload = function () {
  window.location.reload();
};

let R = 0;
rivalsPoint.innerHTML = R;
let Y = 0;
yourPoint.innerHTML = Y;

const whoWin = function () {
  if (Y == 3) {
    alert("Amazing you beat the computer!");
    setInterval(reload, 5);
    Y = Y - 3;
  }
  if (R == 3) {
    alert("I am sorry computer is smarter");
    setInterval(reload, 5);
    R = R - 3;
  }
};

function giveRock() {
  let a = rivalsHand();
  if (a == 1) {
    txt.innerHTML = "rival won";
    rivalImage.src = images[1];
    R += 1;
    rivalsPoint.innerHTML = R;
  } else if (a == 2) {
    txt.innerHTML = "you won";
    rivalImage.src = images[2];
    Y += 1;
    yourPoint.innerHTML = Y;
  }
  setInterval(whoWin, 200);
}

function givePaper() {
  let a = rivalsHand();
  if (a == 0) {
    txt.innerHTML = "you won";
    rivalImage.src = images[0];
    Y += 1;
    yourPoint.innerHTML = Y;
  } else if (a == 2) {
    txt.innerHTML = "rival won";
    rivalImage.src = images[2];
    R += 1;
    rivalsPoint.innerHTML = R;
  }
  setInterval(whoWin, 200);
}

function giveScissors() {
  let a = rivalsHand();
  if (a == 0) {
    txt.innerHTML = "rival won";
    rivalImage.src = images[0];
    R += 1;
    rivalsPoint.innerHTML = R;
  } else if (a == 1) {
    txt.innerHTML = "you won";
    rivalImage.src = images[1];
    Y += 1;
    yourPoint.innerHTML = Y;
  }
  setInterval(whoWin, 200);
}
