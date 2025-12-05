function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      return response.json(); // can throw if JSON is invalid
    })
    .then(data => {
      const user = {
        id: data.id,
        name: data.name,
        email: data.email,
      };

      console.log("User loaded:", user);
      return user;
    })
    .catch(error => {
      console.error("Failed to load user:", error.message);
      return null;
    });
}

loadUser();