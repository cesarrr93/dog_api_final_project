//Java script file imports
import { fetchDog } from "./api.js"; // imports fetchDog function from api.js
import { handleVoteUp, handleVoteDown, getLikedDogs } from "./voting.js";
import { displayLikedDogs } from "./gallery.js";

// Variables to target HTML content
const dogContainer = document.getElementById("dog-container");
const voteUpBtn = document.getElementById("vote-up");
const voteDownBtn = document.getElementById("vote-down");
const likesLink = document.getElementById("likes-link");
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


// Calls function to display random dog
loadRandomDog();
