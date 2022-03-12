'use strict';
// console.log(
//   (document.querySelector(`.message`).textContent = `🥳 Correct Number!`)
// );
// document.querySelector(`.guess`).value = 25;

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector(`.score`).textContent;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess;

  //if no input
  if (document.querySelector(`.guess`).value === ``) {
    displayMessage(`No Number given`);
  } else {
    //if inout
    guess = Number(document.querySelector(`.guess`).value);
    if (guess === randomNumber) {
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      // document.querySelector(`body`).style.transition = `300ms ease-in-out`;
      document.querySelector(`body`).style.animation = `fadein 200ms`;
      document.querySelector(`body`).style.animationIterationCount = `infinite`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(
        `.guessedRight`
      ).textContent = `You Guessed Right! 🥳 🎊`;
      displayMessage(`Correct!`);
      document.querySelector(`.number`).textContent = randomNumber;
      document.querySelector(`.guess`).style.display = `none`;
      document.querySelector(`.check`).textContent = `You Win!`;
      if (document.querySelector(`.highscore`).textContent < score) {
        document.querySelector(`.highscore`).textContent = score;
      }
    } else if (guess !== randomNumber) {
      displayMessage(guess < randomNumber ? `Too low 😬` : `Too high 😐`);
      score--;
      document.querySelector(`.score`).textContent = score;
      if (score < 1) {
        displayMessage(`You Lost! 🥴`);
        document.querySelector(`.score`).textContent = 0;
        document.querySelector(`.guess`).style.display = `none`;
        document.querySelector(`.check`).textContent = `Click: Again`;
      }
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.guessedRight`).textContent = `Guess My Number!`;
  randomNumber = document.querySelector(`.number`).textContent = Math.trunc(
    Math.random() * 20 + 1
  );
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`body`).style.animation = `none`;
  document.querySelector(`.guess`).value = null;
  score = document.querySelector(`.score`).textContent = `20`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).style.display = `block`;
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.check`).textContent = `Check!`;
});
