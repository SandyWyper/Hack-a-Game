// this function takes a breed of cat or dog and returns an image of that breed
// args:
//  - breed (string) [required] - the breed of the animal
//  - animalType (string) [optional] - the type of animal (cat or dog)

export async function getImage(breed, animalType) {
  if (!breed) return null;
  return "https://api-ninjas.com/images/cats/american_bobtail.jpg";

  //   try {
  //     const response = await fetch(
  //       `https://api.api-ninjas.com/v1/${animalType || "cats"}?name=${breed}`,
  //       {
  //         method: "GET",
  //         headers: { "X-Api-Key": "QkOFImsO+WmexRiuHPMVVg==uQTYrf9KNw6WoWNL" },
  //         contentType: "application/json",
  //       }
  //     );
  //     const data = await response.json();
  //     return data[0].image_link;
  //   } catch (error) {
  //     console.error("Error: ", error);
  //     return null;
  //   }
}
