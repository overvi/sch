const filterCheckbox = document.querySelectorAll(
  ".filter-checkbox"
) as NodeListOf<HTMLInputElement>;
const filterRemove = document.querySelectorAll(".remove-filter-btn");
const closeFilters = document.querySelector(".close-all-filters");

let hiddenElements = 0;

filterCheckbox.forEach((item, index) => {
  const toggleChecked = () => {
    filterRemove[index].classList.remove("hidden");

    filterRemove[index].addEventListener("click", () => {
      item.checked = false;
      filterRemove[index].classList.add("hidden");
      hideElement();
    });
  };

  const hideElement = () => {
    if (filterRemove[index].classList.contains("hide-variant")) {
      filterCheckbox[index].parentElement!.classList.add("hidden");
      hiddenElements += 1;
    }

    if (hiddenElements == filterCheckbox.length) {
      closeFilters?.classList.add("hidden");
    }
  };

  if (item.checked) toggleChecked();
  item.addEventListener("change", () => {
    toggleChecked();
    hideElement();
  });
});

closeFilters?.addEventListener("click", () => {
  filterCheckbox.forEach((fc) => {
    fc.checked = false;
    fc.parentElement?.classList.add("hidden");
    closeFilters.classList.add("hidden");
  });
});

const menus = document.querySelector(".filters-menu") as HTMLElement;

const toggleFilters = document.querySelectorAll(
  ".toggle-filters-menu"
) as NodeListOf<HTMLButtonElement>;

toggleFilters.forEach((item) => {
  item.addEventListener("click", () => {
    menus.classList.toggle("-translate-x-full");
    document.documentElement.classList.toggle("overflow-hidden");

    if (menus.classList.contains("-translate-x-full")) {
      menus.style.animationName = "fadeInLeftBig";
    } else {
      menus.style.animationName = "fadeOutLeftBig";
    }
  });
});
