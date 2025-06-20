import { cats } from "./catsndogs.js";
import { getImage } from "./getImage.js";

export async function generateQuestion() {
  
  const correctIndex = Math.floor(Math.random() * cats.length);
  const correctBreed = cats[correctIndex];

  
  let incorrectOptions = [];
  while (incorrectOptions.length < 2) {
    const randomIndex = Math.floor(Math.random() * cats.length);
    if (randomIndex !== correctIndex && !incorrectOptions.includes(cats[randomIndex])) {
      incorrectOptions.push(cats[randomIndex]);
    }
  }

  //Shuffle options
  const options = [correctBreed, ...incorrectOptions].sort(() => Math.random() - 0.5);

  
  const imageURL = await getImage(correctBreed, "cats");

  
  return {
    imageURL,
    options,
    answer: correctBreed,
  };
}