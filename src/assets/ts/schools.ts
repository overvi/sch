import "./school-image";

const sortBtns = document.querySelectorAll(".sort-button");
const sortContents = document.querySelectorAll(".sort-content");

sortBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("opacity-0");
    button.classList.toggle("w-0");
  });
});

sortContents.forEach((content, index) => {
  content.addEventListener("dblclick", () => {
    sortBtns[index].classList.remove("opacity-0");
    sortBtns[index].classList.remove("w-0");
  });
});

const input = document.querySelectorAll(".inpt");
const filterContainer = document.querySelectorAll(".filter-container");

input.forEach((inp, index) => {
  inp.addEventListener("click", () => {
    filterContainer[index].classList.toggle("bg-[#FFDCBD]");
  });
});

const schoolsContainer = document.querySelector(".schools-container");
const viewSelects = document.querySelectorAll(
  ".view-input"
) as NodeListOf<HTMLInputElement>;

viewSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    const target = e.target as HTMLSelectElement;

    if (target.value == "card") {
      schoolsContainer?.classList.replace("image", "card");
    } else {
      schoolsContainer?.classList.replace("card", "image");
    }
  });
});
