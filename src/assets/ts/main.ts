export const toggleDarkMode = (): void => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.documentElement.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("darkMode", (!isDarkMode).toString());
};

const darkModeToggleButton = document.querySelectorAll(".darkModeToggle");
darkModeToggleButton?.forEach((button) =>
  button.addEventListener("click", toggleDarkMode)
);

const toggleMenu = document.querySelectorAll(".toggle-menu");
const toggleLogin = document.querySelectorAll(".toggle-login");
const menu = document.querySelector(".menu");
const loginOverlay = document.querySelector(".login-overlay");

toggleMenu?.forEach((item) => {
  item.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  });
});

toggleLogin.forEach((item) => {
  item.addEventListener("click", () => {
    loginOverlay?.classList.toggle("hidden");
  });
});

window.addEventListener("click", (event) => {
  if (loginOverlay?.classList.contains("hidden")) return;
  if (!(event.target as HTMLElement).closest(".toggle-login")) {
    loginOverlay?.classList.add("hidden");
  }
});

const scrollTop = document.getElementById("scroll-top");

scrollTop?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
