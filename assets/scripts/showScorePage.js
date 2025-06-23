import { scoreElement } from "./elementRefs.js";

export const showScorePage = (score) => {
  // show the score on the page
  // populate appropiate image and if good score do confetti
  console.log(score, "score");

  // show the score on the page
  scoreElement.textContent = `${score}/10`;
};
import { scoreElement } from "./elementRefs.js";

export const showScorePage = (score) => {
  // show the score on the page
  scoreElement.textContent = `${score}/10`;

  // Select the message element (add this element in your HTML if not present)
  const messageElement = document.getElementById("score-message");
  let message = "";

  if (score <= 3) {
    message = "Better luck next time!";
  } else if (score <= 6) {
    message = "Not bad but could be better!";
  } else {
    message = "You nailed it!";
  }

  if (messageElement) {
    messageElement.textContent = message;
  }
};
