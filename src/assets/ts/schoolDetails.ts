import "./main"
import "./faq"

const tabs = document.querySelectorAll(".tab-items");
const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach((tabLink, wIndex) => {
  const tabToggles = tabLink.querySelectorAll(".tablink");
  const tabContents = tabs[wIndex].querySelectorAll(".tab-item");

  tabToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
      tabToggles.forEach((b) => {
        if (b !== toggle) {
          b.classList.remove("active-tab");
        }
      });
      const content = tabContents[index] as HTMLElement;
      const target = toggle.getAttribute("aria-target");

      tabContents.forEach((c) => {
        if (!c.classList.contains("hidden")) {
          c.classList.add("hidden");
          c.classList.add("opacity-0");
        }
      });

      if (content.id == target) {
        toggle.classList.add("active-tab");
        content.classList.remove("hidden");
        content.classList.remove("opacity-0");
      }
    });
  });
});

const elms = document.querySelectorAll(".splide-schools")!;

for (var i = 0; i < elms.length; i++) {
  //@ts-ignore
  const elm = new Splide(elms[i], {
    perMove: 1,
    perPage: 1,
    mediaQuery: "min",
    fixedWidth: "80%",
    
    width: "100%",
    gap: "1.5rem",
    arrows: false,

    breakpoints: {
      850: {
        fixedWidth: "100%",
      },
    },
  }).mount();

  const nextSplide = elms[i].querySelectorAll(".splide__custom__arrow--next");
  const prevSplide = elms[i].querySelectorAll(".splide__custom__arrow--prev");

  const nextOuterSplide =
    elms[i].parentElement!.querySelectorAll(".outer-splide-next");
  const prevOuterSplide =
    elms[i].parentElement!.querySelectorAll(".outer-splide-prev");

  nextOuterSplide.forEach((next) => {
    next.addEventListener("click", () => {
      elm.go(">");
    });
  });
  prevOuterSplide.forEach((prev, index) => {
    prev.addEventListener("click", () => {
      elm.go("-1");
    });
  });

  nextSplide.forEach((item) => {
    item.addEventListener("click", () => {
      elm.go(">");
    });
  });

  prevSplide.forEach((item) => {
    item.addEventListener("click", () => {
      elm.go("-1");
    });
  });

  //@ts-ignore
}
const ImageElms = document.querySelectorAll(".splide-school-image")!;
const elmPagination = document.querySelectorAll(".school-pagination-checkbox");

for (var i = 0; i < ImageElms.length; i++) {
  //@ts-ignore
  const elm2 = new Splide(ImageElms[i], {
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
      elm2.go(index);
      checkbox.forEach((c) => {
        if (c !== item) c.checked = false;
      });
    });
  });
}
