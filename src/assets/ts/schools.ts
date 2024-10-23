const sortBtns = document.querySelectorAll(".sort-button");
const sortContents = document.querySelectorAll(".sort-content");

sortBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("hidden");
  });
});

sortContents.forEach((content, index) => {
  content.addEventListener("dblclick", () => {
    sortBtns[index].classList.remove("hidden");
  });
});
