// import { doConfetti } from "./confetti.js";
// import { getImage } from "./getImage.js";
// import { cats, dogs } from "./catsndogs.js";
import { showScorePage } from "./showScorePage.js";

document.addEventListener("DOMContentLoaded", () => {
  // console.log(cats, dogs, "cats and dogs");
  // console.log(getImage("breed", "cats"), "getImage");

  const startLayout = document.getElementById("start-layout");
  const quizLayout = document.getElementById("quiz-layout");
  const endLayout = document.getElementById("end-layout");
  const startBtn = document.getElementById("start-button");
  const quizBtns = document.querySelectorAll(".answer-button");
  const retryBtn = document.getElementById("retry-button");

  function showLayout(layoutToShow) {
    startLayout.style.display = "none";
    quizLayout.style.display = "none";
    endLayout.style.display = "none";
    layoutToShow.style.display = "block";
    // Footer is always visible, so no need to toggle it
  }

  // init score
  let score = 0;
  let questionCount = 1;

  // Show start-layout at the beginning
  showLayout(startLayout);

  startBtn.addEventListener("click", async () => {
    showLayout(quizLayout);
    // generate a question
    // const question = await generateQuestion();
    // // populate the question on the page
    // populateQuestion(question);
  });

  function handleAnswer(answer) {
    // needs to check if anwser is correct
    // if correct, add to score
    // show whether it is correct or not
    // if incorrect, do nothing
    // then generate a new question
    // populate the question on the page
    // update the score on the page
  }

  quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showLayout(endLayout);
    });
  });

  retryBtn.addEventListener("click", () => {
    showLayout(quizLayout);
  });
});
