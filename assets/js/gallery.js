const likedDogsContainer = document.getElementById("liked-dog-container");

// This function uses handleVoteUp function string array that is stored at local storage
// likedDogs is an array of Strings Ex.
export function displayLikedDogs (likedDogs) {
    console.log(likedDogs);
    likedDogsContainer.innerHTML = likedDogs
        .map((dog) => `<img src="${dog}" alt="Liked Dog" />`)
        .join("");
}