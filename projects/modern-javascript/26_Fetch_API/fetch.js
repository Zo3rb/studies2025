const API_URL = "https://jsonplaceholder.typicode.com";

// Basic GET request
fetch(`${API_URL}/users/1`)
  .then((response) => response.json()) // Parse JSON response
  .then((data) => console.log("User:", data))
  .catch((error) => console.error("Error:", error));

// Same request using async/await
async function getPost() {
  try {
    const response = await fetch(`${API_URL}/posts/1`);
    const data = await response.json();
    console.log("post:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function examineResponse() {
  const response = await fetch(`${API_URL}/posts/1`);

  console.log("Status:", response.status); // 200 if successful
  console.log("OK?", response.ok); // true if status is 200-299
  console.log("Status Text:", response.statusText);
  console.log("Headers:", response.headers);
}

examineResponse();

getPost();
