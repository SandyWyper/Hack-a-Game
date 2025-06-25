import {
  titleElement,
  startImageElement,
  questionImageWrapper,
} from "./elementRefs.js";

export function toggleStartPageContent(animalType) {
  if (animalType === "cats") {
    titleElement.innerHTML = "Cat Quiz";
    // change the meta title for the page
    document.title = "Cat Quiz";
    // change the favicon for the page
    document.querySelector("link[rel='icon']").href =
      "assets/images/favicon-16x16.png";
    // change the image for the quiz
    startImageElement.src = "assets/images/hero.png";
    // change the animal color variable
    document.documentElement.style.setProperty(
      "--animal-color",
      "var(--cat-color)"
    );
    // change question background image
    questionImageWrapper.classList.add("cat");
    questionImageWrapper.classList.remove("dog");
  } else {
    titleElement.innerHTML = "Dog Quiz";
    // change the meta title for the page
    document.title = "Dog Quiz";
    // change the favicon for the page
    document.querySelector("link[rel='icon']").href =
      "assets/images/dog-favicon.png";
    // change the image for the quiz
    startImageElement.src = "assets/images/guess-pooch.png";
    // change the animal color variable
    document.documentElement.style.setProperty(
      "--animal-color",
      "var(--dog-color)"
    );
    // change question background image
    questionImageWrapper.classList.add("dog");
    questionImageWrapper.classList.remove("cat");
  }
}
