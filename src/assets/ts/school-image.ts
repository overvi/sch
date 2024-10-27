//@ts-ignore

const elms = document.querySelectorAll(".splide-school-image")!;
const elmPagination = document.querySelectorAll(".school-pagination-checkbox");

for (var i = 0; i < elms.length; i++) {
  //@ts-ignore
  const elm = new Splide(elms[i], {
    perPage: 1,
    arrows: false,
    width: "30rem",
    fixedHeight: "max-content",
  }).mount();

  const checkbox = elmPagination[i].querySelectorAll(
    ".p-checkbox"
  ) as NodeListOf<HTMLInputElement>;

  checkbox.forEach((item, index) => {
    item.addEventListener("change", () => {
      elm.go(index);
      checkbox.forEach((c) => {
        if (c !== item) c.checked = false;
      });
    });
  });
}
