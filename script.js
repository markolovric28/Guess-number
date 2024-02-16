"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const input = document.querySelector(".input-box");
const number = document.querySelector(".number");

// Make secret number visible
// document.querySelector(".number").textContent = secretNumber;

// Change the message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Delete input, refocus
const clearInput = function () {
  input.value = "";
  input.focus();
};

// Clicking on check, we check if the number in input is the same as secretNumber

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(input.value);
  // console.log(typeof guess);

  // Guard clause
  if (!guess || guess > 20) {
    clearInput();
    displayMessage("No number!");
    // if input value IS the same as secret number
  } else if (guess === secretNumber) {
    displayMessage("You guessed the number!");
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    // If score is bigger than highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // if input value is HIGHER or LOWER than secret number
  } else if (guess !== secretNumber) {
    clearInput();
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  clearInput();
  displayMessage("Start guessing!");
  number.textContent = "?";

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#333";
});

document.querySelector("body").addEventListener("submit", function (e) {
  e.preventDefault();

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  clearInput();
  displayMessage("Start guessing!");
  number.textContent = "?";

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#333";
});
