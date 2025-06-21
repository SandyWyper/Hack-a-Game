import { scoreElement } from "./elementRefs.js";

export const showScorePage = (score) => {
  // show the score on the page
  // populate appropiate image and if good score do confetti
  console.log(score, "score");

  // show the score on the page
  scoreElement.textContent = `${score}/10`;
};
