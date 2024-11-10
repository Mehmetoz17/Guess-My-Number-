"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👏 correct number!'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess'). value = 23
console.log(document.querySelector('.guess').value);
*/
//⛔⛔⛔REMEMBER TO MAKE THIS WEBSITE RESPONSIVE FOR MOBILE⛔⛔⛔

let secretNumber = Number(Math.trunc(Math.random() * 21));
let score = 20;
let highscore = 0;

//Beautiful sentences that I use
const sentences = [
  "🌈Do You Know You Are Stupid",
  "🌈Get Out Of The Game, Idiot",
  "🌈Why Are You Gay?",
  "🌈You're Stupid Gay",
  "👋Go F#ck Yourself",
];


//This statement Math.floor() works like the statement Math.trunc() , chatGPT : 
//- Math.floor(): Rounds the number to the lowest integer. For example, Math.floor(3.7) has a result of 3 and Math.floor(-3.7) has a result of -4.
//- Math.trunc(): removes the decimal part of the number and returns only the integer part. For example, Math.trunc(3.7) has a result of 3 and Math.trunc(-3.7) has a result of -3.
//In short, Math.floor moves down for positive numbers and left for negative numbers, while Math.trunc always returns only the integer part.

const getRandomSentence = () => {
  return sentences[Math.floor(Math.random() * sentences.length)]
}

//With this function, you don't need to use "document.querySelector" anymore
const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const bodyElement = document.querySelector("body");
const scoreElement = document.querySelector(".score");
const guessInput = document.querySelector(".guess");
const highScoreElement = document.querySelector(".highscore");

const displayMessage = (message) => {
  messageElement.textContent = message;
};

const updateScore = (newScore) => {
  score = newScore;
  scoreElement.textContent = score;
};

//We also use the function to set css
//document.querySelector("body").style.backgroundColor = "#8718DE";
const setStyles = (bgColor, fontSize, width) => {
  bodyElement.style.backgroundColor = bgColor;
  numberElement.style.fontSize = fontSize;
  numberElement.style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessInput.value);

  //when there is no input
  if (!guess) {
    displayMessage("🤡Don't Be Stupid");
  }
  else if (guess === secretNumber) {
    //when player wins
    numberElement.textContent = secretNumber;
    displayMessage("😎You're God Damn Right");
    setStyles("#8718DE", "8rem", "30rem");
    //To record high score
    if (score > highscore) {
      highscore = score;
      highScoreElement.textContent = highscore;
    }
  }
  else {
    //when it is wrong
    //guess > secretNumber ? displayMessage("📉 Too High") : displayMessage("📈 Too Low")  Or

    displayMessage(guess < secretNumber ? "📈 Too Low" : "📉 Too High");
    updateScore(score > 1 ? score - 1 : 0);

    if (score === 0) { 
      const randomSentence = getRandomSentence()
      displayMessage(randomSentence)
    };
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 21))
  displayMessage("Start guessing...");
  updateScore(score);
  numberElement.textContent = "?";
  guessInput.value = "";
  setStyles("#222", "60px", "15rem");
});

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   //when there is no input
//   if (!guess) {
//     document.querySelector(".message").textContent = "🤡Don't Be Stupid";
//     //when player wins
//   } else if (guess === secretNumber) {
//     //How To Show Question Mark
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector(".number").style.fontSize = "8rem";

//     document.querySelector(".message").textContent = "😎You're God Damn Right";
//     document.querySelector("body").style.backgroundColor = "#8718DE";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore
//     }

//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       //1
//       document.querySelector(".message").textContent = "📈 Too Low ";
//       //2
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       //3
//       document.querySelector(
//         ".message"
//       ).textContent = `🌈Do You Know You Are Stupid`;

//       document.querySelector('.score').textContent = 0
//     }
//     ////when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //1
//       document.querySelector(".message").textContent = "📉 Too High";
//       //2
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       //3
//       document.querySelector(
//         ".message"
//       ).textContent = `🌈Get Out Of The Game, Idiot`;
//       document.querySelector('.score').textContent = 0

//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 21);
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".number").style.fontSize = "60px";
// });
// A comment for Dear Mehmet : Always Be CareFul in useing keyboard Symbols
// (difference Between ( , ) and ( . ))
// For Example :     const guess = Number(document.querySelector('.guess').value);    and
//                   const guess = Number(document.querySelector('.guess'),value);

بعر;
