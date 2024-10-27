//@ts-ignore

new Splide(".splide", {
  mediaQuery: "min",
  perPage: "1",
  fixedWidth: "66%",

  gap: "1rem",
  arrows: false,

  breakpoints: {
    650: {
      perPage: "3",
      fixedWidth: "35%",
    },
    850: { perPage: "4", fixedWidth: "22%" },
  },
}).mount();
