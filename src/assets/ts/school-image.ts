//@ts-ignore

import { handleNestedCheckboxes } from "./slider";

const elms = document.querySelectorAll(".splide-school-image")!;
const elmPagination = document.querySelectorAll(".school-pagination-checkbox")!;


for (var i = 0; i < elms.length; i++) {
  //@ts-ignore
  const elm = new Splide(elms[i], {
    perPage: 1,
    arrows: false,
    width: "30rem",
    fixedHeight: "max-content",
  }).mount();

  const checkboxes = elmPagination[i].querySelectorAll(
    ".p-checkbox"
  ) as NodeListOf<HTMLInputElement>;



  handleNestedCheckboxes(checkboxes , elm)
}
