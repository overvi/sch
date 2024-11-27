import "../css/input.css";
import "./main";
import "./school-image";
import "./faq";
import { handleNestedCheckboxes, sliderEvent } from "./slider";

// @ts-ignore
const splide = new Splide(".splide-schools", {
  perMove: 1,
  perPage: 1,
  mediaQuery: "min",
  fixedWidth: "70%",
  width: "100%",
  gap: "1.5rem",
  arrows: false,
  autoplay: true,

  breakpoints: {
    850: {
      fixedWidth: "100%",
    },
  },
}).mount();

// @ts-ignore
const splide_secondary = new Splide(".splide-schools-secondary", {
  perMove: 1,
  perPage: 1,
  mediaQuery: "min",
  fixedWidth: "70%",
  width: "100%",
  gap: "1.5rem",
  arrows: false,

  breakpoints: {
    850: {
      fixedWidth: "100%",
    },
  },
}).mount();

const prev = document.querySelector(".ss-left") as HTMLButtonElement;
const next = document.querySelector(".ss-right") as HTMLButtonElement;
const ssContainers = document.querySelectorAll(".ss-wrapper");
const ssDatas = document.querySelectorAll(".splide-schools-data");

sliderEvent(next, splide_secondary, "next");
sliderEvent(prev, splide_secondary, "prev");

ssContainers.forEach((ss, index) => {
  // @ts-ignore
  const elm = new Splide(ssDatas[index], {
    perMove: 1,
    perPage: 1,
    gap: "1.5rem",
    arrows: false,
    autoPlay: true,
  }).mount();

  const slideItems = ss.querySelectorAll(
    ".slide-ss-item"
  ) as NodeListOf<HTMLElement>;

  slideItems.forEach((item, i) => {
    const checkboxes = item.querySelectorAll(
      ".ss-p-checkbox"
    ) as NodeListOf<HTMLInputElement>;

    handleNestedCheckboxes(checkboxes, elm);
  });
});

// @ts-ignore
new Splide(".splide-title", {
  mediaQuery: "min",
  perPage: 2,
  perMove: 1,
  gap: "1rem",
  arrows: false,

  breakpoints: {
    550: {
      perPage: 3,
    },
    680: {
      perPage: 4,
    },
    840: {
      destroy: true,
    },
  },
}).mount();

//@ts-ignore
new Splide(".splide-title-secondary", {
  mediaQuery: "min",
  perPage: 2,
  perMove: 1,
  gap: "1rem",
  arrows: false,

  breakpoints: {
    550: {
      perPage: 3,
    },
    840: {
      destroy: true,
    },
  },
}).mount();

const nextSplide = document.querySelectorAll(".splide__custom__arrow--next");
const prevSplide = document.querySelectorAll(".splide__custom__arrow--prev");

nextSplide.forEach((item) => {
  sliderEvent(item as HTMLElement, splide, "next");
});

prevSplide.forEach((item) => {
  sliderEvent(item as HTMLElement, splide, "prev");
});

function isFooterInView(): boolean {
  const footer = document.querySelector(".booking-animation");
  if (!footer) return false;

  const rect = footer.getBoundingClientRect();

  return rect.y < 70;
}

const handleScroll = () => {
  const footerVisible = isFooterInView();

  if (footerVisible) {
    window.removeEventListener("scroll", handleScroll);
  }
};

window.addEventListener("scroll", handleScroll);

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

const changeTranslate = () => {
  const mediaQuery = window.matchMedia("(max-width: 850px)");

  if (mediaQuery.matches) {
    translateYValue = 38.39;
  } else {
    translateYValue = 85.47;
  }
};

let translateYValue = window.innerWidth > 850 ? 85.47 : 38.39;

function scrollList() {
  const list = document.querySelectorAll(
    ".list"
  ) as NodeListOf<HTMLUListElement>;

  list.forEach((item) => {
    const items = item.querySelectorAll("li");
    const itemCount = items.length;

    let currentIndex = getRandomIndex(itemCount);

    setInterval(() => {
      const nextIndex = getRandomIndex(itemCount);

      let translateY = nextIndex * translateYValue;

      setTimeout(() => {
        items.forEach((item) => {
          item.style.transform = `translateY(-${translateY}px)`;
        });
      }, 1000);

      currentIndex = nextIndex;
    }, 2000);
  });
}

scrollList();
window.addEventListener("resize", changeTranslate);
