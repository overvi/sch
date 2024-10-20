export const initDarkMode = (): void => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.documentElement.classList.toggle("dark", isDarkMode);
};

initDarkMode();
