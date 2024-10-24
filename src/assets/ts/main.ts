const animate = (elm: HTMLElement, names: string[], duraion: string) => {
  if (!elm.classList.contains("hidden")) {
    elm.style.animationName = names[0];
    elm.style.animationDuration = duraion;
  } else {
    elm.style.animationName = names[1];
    elm.style.animationDuration = duraion;
  }
};

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
const menu = document.querySelector(".menu") as HTMLElement;
const loginOverlay = document.querySelector(".login-overlay") as HTMLDivElement;

toggleMenu?.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("-translate-x-full");
    document.documentElement.classList.toggle("overflow-hidden");

    if (menu.classList.contains("-translate-x-full")) {
      menu.style.animationName = "fadeInLeftBig";
    } else {
      menu.style.animationName = "fadeOutLeftBig";
    }
  });
});

toggleLogin.forEach((item) => {
  item.addEventListener("click", () => {
    loginOverlay.classList.toggle("opacity-0");
    loginOverlay.classList.toggle("hidden");
    animate(loginOverlay, ["show", "vanish"], "1s");
  });
});

window.addEventListener("click", (event) => {
  if (loginOverlay?.classList.contains("hidden")) return;
  if (
    !(event.target as HTMLElement).closest(".toggle-login  , .login-content")
  ) {
    loginOverlay.classList.toggle("opacity-0");
    loginOverlay.classList.toggle("hidden");
    animate(loginOverlay, ["show", "vanish"], "1s");
  }
});

const scrollTop = document.getElementById("scroll-top");

scrollTop?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
