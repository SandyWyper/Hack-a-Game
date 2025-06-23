import {
  scoreElement,
  messageElement,
  resultImageElement,
} from "./elementRefs.js";
import { doConfetti } from "./confetti.js";

export const showScorePage = (score) => {
  // show the score on the page
  scoreElement.textContent = `${score}/10`;

  // Select the message element (add this element in your HTML if not present)
  let message = "";

  if (score <= 3) {
    message = "Better luck next time!";
  } else if (score <= 6) {
    message = "Not bad but could be better!";
  } else {
    message = "You nailed it!";
  }

  messageElement.textContent = message;

  //show appropriate image
  const imageUrl =
    score <= 3
      ? "assets/images/grumpy-cat.png"
      : score <= 6
      ? "assets/images/neutral-cat.png"
      : "assets/images/happy-cat.png";
  resultImageElement.src = imageUrl;

  // if score over 6 do confetti
  if (score > 6) {
    doConfetti();
  }
};
