import "./style.css";

const buttonStyles = "rounded py-2 px-4 bg-white bg-gradient-to-r hover:from-green-500 hover:to-green-400 transition duration-200 hover:scale-110";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.getElementById("users-container");

    users.forEach((user) => {
      const button = document.createElement("button");
      button.textContent = user.name;

      button.classList.add(...buttonStyles.split(" "));

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
