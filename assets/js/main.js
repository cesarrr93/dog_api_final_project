//Java script file imports
import { fetchDog, fetchDogBreeds } from "./api.js"; // imports fetchDog function from api.js
import { handleVoteUp, handleVoteDown, getLikedDogs } from "./voting.js";
import { displayLikedDogs } from "./gallery.js";
import { setUpModal } from "./modal.js";

// Variables to target HTML content
const dogContainer = document.getElementById("dog-container");
const voteUpBtn = document.getElementById("vote-up");
const voteDownBtn = document.getElementById("vote-down");
const likesLink = document.getElementById("likes-link");
const randomDogsLink = document.getElementById("random-dogs-link")
const dogBreedsLink = document.getElementById("dog-breeds-link")
const pageTitle = document.getElementById("page-title")


//
// Fetch and display a random dog
//
async function loadRandomDog() {
  // Stores data[0].url into dogImage variable
  const dogImage = await fetchDog();

  //display image if there are no errors
  if (dogImage) {
    dogContainer.innerHTML = `<img src="${dogImage}" alt="Random Dog" id="current-dog"/>`;
  } else {
    // loads error
    dogContainer.innerHTML = "<p>Failed to load dog data. Try again.</p>";
  }
}

// 
// fetch and display dog breeds
// 
async function loadDogBreeds() {
  const breeds = await fetchDogBreeds();
  if (breeds) {
    const breedsList = breeds
      .map((breed) => `<li>${breed.name} - ${breed.temperament}</li>`)
      .join("");
    dogContainer.innerHTML = `<ul>${breedsList}</ul>`;
  } else {
    dogContainer.innerHTML = "<p>Failed to load dog breeds. Try again.</p>";
  }
}

//
// Voting Section
//
voteUpBtn.addEventListener("click", () => {
  // stores current dog into currentDog variable
  const currentDog = document.getElementById("current-dog").src;
  // current dog gets passed down to handle vote up
  handleVoteUp(currentDog);
  // Loads new random dog
  loadRandomDog();
});

voteDownBtn.addEventListener("click", () => {
  // gives user alert that they dislike current dog
  handleVoteDown();
  // loads new random dog
  loadRandomDog();
});

//
// Initialize dog liked gallery
//
likesLink.addEventListener("click", () => {
  const likedDogs = getLikedDogs(); // Gets string array of liked dogs stored in localStorage
  displayLikedDogs(likedDogs);
});

// nav Link for random dog
randomDogsLink.addEventListener("click", () => {
  pageTitle.textContent = "Random Dog Generator";
  loadRandomDog();
});
// nav link for dog breeds
dogBreedsLink.addEventListener("click", () => {
  pageTitle.textContent = "Dogs Breeds";
  loadDogBreeds();
});

// Initialize modal
setUpModal();

// Calls function to display random dog
loadRandomDog();
