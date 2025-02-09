fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=6")
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data[3].url)
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
 