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
  const options = [correctBreed, ...incorrectOptions].sort(
    () => Math.random() - 0.5
  );

  const imageURL = await getImage(correctBreed, animalType);

  return {
    imageURL,
    options,
    answer: correctBreed,
  };
}
