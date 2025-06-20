import { getImage } from "./getImage";

export function generateQuestion(animalType = "cats") {
  const question = {
    imageURL: "https://api-ninjas.com/images/cats/american_bobtail.jpg",
    options: ["Paris", "London", "Rome"],
    answer: "Paris",
  };

  return question;
}
