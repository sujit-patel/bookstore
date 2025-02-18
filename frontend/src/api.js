const API_URL = import.meta.env.VITE_SERVER_URL;

fetch(`${API_URL}/api/book`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
