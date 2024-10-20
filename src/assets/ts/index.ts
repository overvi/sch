import "../css/input.css";

export const toggleDarkMode = (): void => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.documentElement.classList.toggle("dark", !isDarkMode);
  localStorage.setItem("darkMode", (!isDarkMode).toString());
};

const darkModeToggleButton = document.querySelectorAll(".darkModeToggle");
darkModeToggleButton?.forEach((button) =>
  button.addEventListener("click", toggleDarkMode)
);

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
  arrows: false,
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

const toggleMenu = document.querySelectorAll(".toggle-menu");
const toggleLogin = document.querySelectorAll(".toggle-login");
const menu = document.querySelector(".menu");
const loginOverlay = document.querySelector(".login-overlay");

toggleMenu?.forEach((item) => {
  item.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  });
});

toggleLogin.forEach((item) => {
  item.addEventListener("click", () => {
    loginOverlay?.classList.toggle("hidden");
  });
});

window.addEventListener("click", (event) => {
  if (loginOverlay?.classList.contains("hidden")) return;
  if (!(event.target as HTMLElement).closest(".toggle-login")) {
    loginOverlay?.classList.add("hidden");
  }
});

// Change-Text

class TextAnimator {
  currentIndex: number;
  options: any;

  constructor(
    public element: HTMLParagraphElement,
    public texts: string[],
    options = {}
  ) {
    this.element = element;
    this.texts = texts;
    this.currentIndex = 0;
    this.options = Object.assign(
      {
        minIterations: 5,
        maxIterations: 10,
        iterationInterval: 300,
        pauseDuration: 2000,
        changeTextDuration: 150,
      },
      options
    );
  }

  changeText(text: string) {
    this.element.style.opacity = "0";
    this.element.style.transform = "translateY(-20px)";
    setTimeout(() => {
      this.element.textContent = text;
      this.element.style.opacity = "1";
      this.element.style.transform = "translateY(0)";
    }, this.options.changeTextDuration);
  }

  iterateTexts() {
    let iterationCount = 0;
    const targetIterations =
      Math.floor(
        Math.random() *
          (this.options.maxIterations - this.options.minIterations + 1)
      ) + this.options.minIterations;
    const finalTextIndex = Math.floor(Math.random() * this.texts.length);

    const iterationInterval = setInterval(() => {
      this.changeText(this.texts[this.currentIndex]);
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      iterationCount++;

      if (iterationCount >= targetIterations) {
        clearInterval(iterationInterval);
        this.changeText(this.texts[finalTextIndex]);
        setTimeout(() => this.startAnimation(), this.options.pauseDuration);
      }
    }, this.options.iterationInterval);
  }

  startAnimation() {
    this.iterateTexts();
  }
}

function isFooterInView(): boolean {
  const footer = document.querySelector(".booking-animation");
  if (!footer) return false;

  const rect = footer.getBoundingClientRect();

  return rect.y < 70;
}

const animator1 = new TextAnimator(
  document.getElementById("animated-text-1") as HTMLParagraphElement,
  ["Hello", "Welcome", "Changing", "Text", "Animation"],
  { minIterations: 5, maxIterations: 10 }
);

const animator2 = new TextAnimator(
  document.getElementById("animated-text-2") as HTMLParagraphElement,
  ["Reusable", "Flexible", "Random", "Stop", "Example"],
  { minIterations: 3, maxIterations: 7 }
);

const runAnimation = () => {
  animator2.startAnimation();
  animator1.startAnimation();
};

const handleScroll = () => {
  const footerVisible = isFooterInView();

  if (footerVisible) {
    runAnimation();
    window.removeEventListener("scroll", handleScroll); // use handleScroll here
  }
};

window.addEventListener("scroll", handleScroll);

// Filters

const filterCheckbox = document.querySelectorAll(
  ".filter-checkbox"
) as NodeListOf<HTMLInputElement>;
const filterRemove = document.querySelectorAll(".remove-filter-btn");

filterCheckbox.forEach((item, index) => {
  item.addEventListener("change", () => {
    filterRemove[index].classList.toggle("hidden");

    filterRemove[index].addEventListener("click", () => {
      item.checked = false;
      filterRemove[index].classList.add("hidden");
    });
  });
});

//

const scrollTop = document.getElementById("scroll-top");

scrollTop?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
