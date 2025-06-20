import { generateQuestion } from "./generateQuestion.js";

// populate the question on the page with image and answer options.
// This function assumes that the HTML structure has elements with IDs
// 'question-image', 'option1-btn', 'option2-btn', and 'option3-btn'.
// It also assumes that the question object has properties 'imageUrl' and 'options'.
/**
 * Populates the question image and button texts.
 * @param {string} imageId - The id of the image element.
 * @param {string[]} buttonIds - Array of button element ids.
 * @returns {object} The question object used for population.
 */
export function populateQuestion(imageId, buttonIds) {
  // Call generateQuestion and get the question object
  const question = generateQuestion();

  // Set image
  const imageElement = document.getElementById(imageId);
  if (imageElement && question.imageUrl) {
    imageElement.src = question.imageUrl;
    imageElement.width = 300;
    imageElement.height = 300;
  }

  // Set button texts
  if (Array.isArray(buttonIds) && Array.isArray(question.options)) {
    buttonIds.forEach((btnId, idx) => {
      const btn = document.getElementById(btnId);
      if (btn && question.options.length > idx) {
        btn.textContent = `Option ${idx + 1} - ${question.options[idx]}`;
      }
    });
  }

  return question;
}
