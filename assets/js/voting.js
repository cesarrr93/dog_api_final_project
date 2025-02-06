//Sets an Array of liked dogs stored in local storage if there are none return an empty array
let likedDogs = JSON.parse(localStorage.getItem("likedDogs")) || [];

//Stores dog image in an array at local storage
export function handleVoteUp(dogImage) {
    likedDogs.push(dogImage);
    localStorage.setItem("likeDgos", JSON.stringify(likedDogs));
    alert("You Liked this dog!");
}
// Gives user an alert when down vote 
export function handleVoteDown() {
    alert("You dislike this dog!");
}
//Returns array from local storage that contains liked dogs
export function getLikedDogs() {
    return likedDogs;
}