function fetchCatImages() {
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=6")
      .then(response => {
          if (!response.ok) {
              throw new Error('Request failed');
          }
          return response.json();
      })
      .then(data => {
          const imageContainer = document.getElementById("image-container");
          imageContainer.innerHTML = ""; // Clear previous images
          data.forEach(image => {
              imageContainer.innerHTML += `<img src="${image.url}" class="cat-image" alt="Cat Image" />`;
          });
      })
      .catch(error => console.error('Error fetching cat images:', error));
}

document.getElementById("fetch-images").addEventListener("click", fetchCatImages);
function fetchBreeds() {
  fetch("https://api.thecatapi.com/v1/breeds")
      .then(response => {
          if (!response.ok) {
              throw new Error('Request failed');
          }
          return response.json();
      })
      .then(data => {
          const breedContainer = document.getElementById("breed-container");
          breedContainer.innerHTML = ""; // Clear previous breeds
          data.forEach(breed => {
              breedContainer.innerHTML += `<p>${breed.name} - ${breed.temperament}</p>`;
          });
      })
      .catch(error => console.error('Error fetching cat breeds:', error));
}

document.getElementById("fetch-breeds").addEventListener("click", fetchBreeds);