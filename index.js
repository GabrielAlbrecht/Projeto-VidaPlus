import { data } from "./data.js";

const form = document.querySelector("#login-form");

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");

const errorMessage = document.querySelector("#error-message");

const validLogin = () => {
  const username = inputUsername.value;
  const password = inputPassword.value;

  const user = data.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    errorMessage.classList.add("hidden");

    localStorage.setItem("currentUserProfile", user.profile);

    localStorage.setItem("currentUserId", user.id);

    switch (user.profile) {
      case "paciente":
        window.location.href = "paciente/Pdashboard.html";
        break;
      case "medico":
        window.location.href = "medico/Mdashboard.html";
        break;
      case "administrador":
        window.location.href = "administrador/Adashboard.html";
        break;
      default:
        console.error("Perfil de usuário desconhecido:", user.profile);
        window.location.href = "default-profile.html";
        break;
    }
  } else {
    errorMessage.classList.remove("hidden");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validLogin();
});
