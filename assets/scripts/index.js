import { generateQuestion } from "./generateQuestion.js";
import { showScorePage } from "./showScorePage.js";
import { populateQuestion } from "./populateQuestion.js";
import {
  startLayout,
  quizLayout,
  endLayout,
  startBtn,
  quizBtns,
  retryBtn,
  answerFeedbackElement,
} from "./elementRefs.js";

document.addEventListener("DOMContentLoaded", () => {
  // console.log(cats, dogs, "cats and dogs");
  // console.log(getImage("breed", "cats"), "getImage");

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
  let currentQuestion = null;

  // Show start-layout at the beginning
  showLayout(startLayout);

  // a function for generating and displaying the next question
  async function nextQuestion() {
    const question = await generateQuestion();
    currentQuestion = question;
    populateQuestion(question, questionCount);
  }

  // User starts the quiz
  startBtn.addEventListener("click", async () => {
    await nextQuestion();
    showLayout(quizLayout);
  });

  // handle question answer
  quizBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // get the index of the users chosen answer
      const answerIndex = Number(event.target.dataset.answerIndex);
      const correctAnswerIndex = currentQuestion.options.indexOf(
        currentQuestion.answer
      );
      const isAnswerCorrect = correctAnswerIndex === answerIndex;

      if (isAnswerCorrect) {
        // add 'correct' class to button
        event.target.classList.add("correct");
        // add 'correct' message to the page
        answerFeedbackElement.textContent = "Correct!!";
        answerFeedbackElement.style.color = "green";
        score++;
      } else {
        // add 'wrong' class to button
        event.target.classList.add("wrong");
        // add correct class to the correct answer button
        quizBtns[correctAnswerIndex].classList.add("correct");
        // add 'wrong' message to the page
        answerFeedbackElement.textContent = "Wrong!!";
        answerFeedbackElement.style.color = "red";
      }
      questionCount++;

      // wait 3 seconds before showing the next question
      setTimeout(() => {
        if (questionCount <= 10) {
          nextQuestion();
        } else {
          showLayout(endLayout);
          showScorePage(score);
        }
      }, 3000);
    });
  });

  retryBtn.addEventListener("click", () => {
    // reset quiz
    score = 0;
    questionCount = 1;
    showLayout(startLayout);
  });
});
