import { cats, dogs } from "./catsndogs.js";
import { getImage } from "./getImage.js";

export async function generateQuestion(animalType) {
  const petSpecies = animalType === "dogs" ? dogs : cats;
  const correctIndex = Math.floor(Math.random() * petSpecies.length);
  const correctBreed = petSpecies[correctIndex];

  let incorrectOptions = [];
  while (incorrectOptions.length < 2) {
    const randomIndex = Math.floor(Math.random() * petSpecies.length);
    if (
      randomIndex !== correctIndex &&
      !incorrectOptions.includes(petSpecies[randomIndex])
    ) {
      incorrectOptions.push(petSpecies[randomIndex]);
    }
  }

  //Shuffle options
  const options = shuffle([correctBreed, ...incorrectOptions]);

  const imageURL = await getImage(correctBreed, animalType);

  return {
    imageURL,
    options,
    answer: correctBreed,
  };
}

function shuffle(array) {
  const result = array.slice(); // make a copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
