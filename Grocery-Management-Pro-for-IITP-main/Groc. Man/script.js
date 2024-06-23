function searchVegetable() {
    const searchQuery = document.getElementById('search-input').value;
    fetch('/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        q: searchQuery
      }
    })
    .then(response => response.json())
    .then(data => {
      // Display search results here
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }