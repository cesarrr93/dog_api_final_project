const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search";
const API_URL_BREEDS = "https://api.thedogapi.com/v1/breeds";
const API_KEY =
  "live_bb6TD28HmuDBYlYfm4rlFwFYTQRrOOhFoJRitWqWVtrR0ekhfVmpAk4fC8bvOyEA";

export async function fetchDog() {
  try {
    const response = await fetch(API_URL_RANDOM, {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    const data = await response.json(); // Parsing Dog Data
    return data[0].url; //This return dog image url
  } catch (error) {
    console.error("Error fetching dog data: ", error);
    return null;
  }
}

// Second end point 
export async function fetchDogBreeds() {
    try {
        const response = await fetch(API_URL_BREEDS, {
            headers: {
                "x-api-key": API_KEY,
            },
        });
        const data = await response.json();
        return data; //returns list of dog breeds
    } catch (error) {
      console.error("Error fetching dog breeds: ", error);
      return null;
    }
}