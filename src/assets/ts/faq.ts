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
