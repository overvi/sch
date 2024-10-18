import "../css/input.css";

export const toggleDarkMode = (): void => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.documentElement.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("darkMode", (!isDarkMode).toString());
};

export const initDarkMode = (): void => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.documentElement.classList.toggle("dark", isDarkMode);
};

const darkModeToggleButton = document.querySelectorAll(".darkModeToggle");
darkModeToggleButton?.forEach((button) =>
  button.addEventListener("click", toggleDarkMode)
);

initDarkMode();

let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", () => {
    const active = document.querySelector(".question.active") as HTMLElement;
    if (active && active !== question) {
      active.classList.toggle("active");
      (active.nextElementSibling as HTMLElement).style.maxHeight = " 0";
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling as HTMLElement;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});

// @ts-ignore
const splide = new Splide(".splide-schools", {
  perMove: 1,
  perPage: 1,
  arrows: false,
}).mount();

// @ts-ignore
new Splide(".splide-title", {
  mediaQuery: "min",
  perPage: 2,
  perMove: 1,
  gap: "1rem",
  arrows: false,

  breakpoints: {
    550: {
      perPage: 4,
    },
    840: {
      destroy: true,
    },
  },
}).mount();

const nextSplide = document.querySelectorAll(".splide__custom__arrow--next");
const prevSplide = document.querySelectorAll(".splide__custom__arrow--prev");

nextSplide.forEach((item) => {
  item.addEventListener("click", () => {
    splide.go(">");
  });
});

prevSplide.forEach((item) => {
  item.addEventListener("click", () => {
    splide.go("-1");
  });
});

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
