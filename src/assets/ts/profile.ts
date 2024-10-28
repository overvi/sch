const profileFilterLabels = document.querySelectorAll(".profile-filter-label");
const profileFilters = document.querySelectorAll(".profile-filter");

profileFilters.forEach((filter, index) => {
  filter.addEventListener("change", () => {
    profileFilterLabels.forEach((x) => {
      if (x.classList.contains("checked")) {
        x.classList.remove("checked");
      } else {
        profileFilterLabels[index].classList.add("checked");
      }
    });
  });
});

const profileMenu = document.querySelector(".profile-menu") as HTMLElement;

const toggleMenu = document.querySelectorAll(
  ".toggle-profile-menu"
) as NodeListOf<HTMLButtonElement>;

toggleMenu.forEach((item) => {
  item.addEventListener("click", () => {
    profileMenu.classList.toggle("-translate-x-full");
    document.documentElement.classList.toggle("overflow-hidden");

    if (menus.classList.contains("-translate-x-full")) {
      profileMenu.style.animationName = "fadeInLeftBig";
    } else {
      profileMenu.style.animationName = "fadeOutLeftBig";
    }
  });
});
