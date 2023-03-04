import "./style.css";


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.getElementById("users-container");

    users.forEach((user) => {
      const button = document.createElement("button");
      button.textContent = user.name;

      button.classList.add("user-btn-styles");

      button.addEventListener("click", () => {
        // user info page
        window.location.href = `pages/user.html?id=${user.id}`;
      });
      usersContainer.appendChild(button);
    });
  })
  .catch((error) => {
    console.error(error);
  });
