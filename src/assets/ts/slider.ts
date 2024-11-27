export function sliderEvent(
  trigger: HTMLElement,
  slider: any,
  action: "prev" | "next"
) {
  trigger.addEventListener("click", () => {
    switch (action) {
      case "next":
        slider.go(">");
        break;

      case "prev":
        slider.go("-1");
        break;
    }
  });
}

export function handleNestedCheckboxes(
  checkboxes: NodeListOf<HTMLInputElement>,
  elm: any
) {
  checkboxes.forEach((item, index) => {
    item.addEventListener("change", () => {
      elm.go(index);
      checkboxes.forEach((c) => {
        if (c !== item) c.checked = false;
      });
    });
  });
}
