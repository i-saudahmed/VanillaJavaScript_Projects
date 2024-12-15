const questions = document.querySelectorAll(".question");

questions.forEach((curElem) => {
  const btn = curElem.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    curElem.classList.toggle("show-text");
  });
});
