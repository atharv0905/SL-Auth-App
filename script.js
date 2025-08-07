const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    showDashboard();
  } else {
    document.getElementById("login-msg").innerText = "Invalid credentials!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  showLogin();
}

function showDashboard() {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("dashboard-container").classList.remove("hidden");
  document.getElementById("user-display").innerText = localStorage.getItem("username");
}

function showLogin() {
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("dashboard-container").classList.add("hidden");
}

window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    showDashboard();
  } else {
    showLogin();
  }
}
