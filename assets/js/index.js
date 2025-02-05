// API
const API_URL = "https://api.thedogapi.com/v1/images/search";
const dogContainer = document.getElementById("dog-container");

// Fetch Data
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    // logs data
    console.log("API Response: ", data);
    const dogData = data[0];
    const dogImage = dogData.url;
    console.log(dogImage);

    dogContainer.innerHTML = `
        <img src="${dogImage}" alt="Random Dog"/>
    `;
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
    dogContainer.innerHTML = "<p> Failed to load dog Data. Try Again. </p>";
  });
