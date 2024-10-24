import "../css/input.css";
import "./main";

let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", () => {
    const active = document.querySelector(".question.active") as HTMLElement;
    if (active && active !== question) {
      active.classList.toggle("active");
      (active.nextElementSibling as HTMLElement).style.maxHeight = " 0";
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling as HTMLElement;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});

// @ts-ignore
const splide = new Splide(".splide-schools", {
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

var elms = document.querySelectorAll(".splide-school-image")!;
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

const nextSplide = document.querySelectorAll(".splide__custom__arrow--next");
const prevSplide = document.querySelectorAll(".splide__custom__arrow--prev");

nextSplide.forEach((item) => {
  item.addEventListener("click", () => {
    splide.go(">");
  });
});

prevSplide.forEach((item) => {
  item.addEventListener("click", () => {
    splide.go("-1");
  });
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

      const translateY = nextIndex * 85.47;

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
