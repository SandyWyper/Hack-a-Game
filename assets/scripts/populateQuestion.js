import { quizBtns, questionImageElement } from "./elementRefs.js";

// populate the question on the page with image and answer options.
/**
 * Populates the question image and button texts.
 * @param {object} question - The question object.
 */
export function populateQuestion(question) {
  // Set image
  if (question.imageURL) {
    questionImageElement.src = question.imageURL;
  }

  // Set button texts
  quizBtns.forEach((btn, i) => {
    btn.textContent = `${i + 1} - ${question.options[i]}`;
  });
}
