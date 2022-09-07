const toggleMenu = document.querySelectorAll("[accordion-toggle]");

const arr = [...toggleMenu].forEach((e) => {
  e.addEventListener("click", () => {
    const accordionQuestionClassList = e.firstElementChild.classList;
    const arrowEventClassList = e.firstElementChild.lastElementChild.classList;
    const accordionAnswerClassList = e.lastElementChild.firstElementChild.classList;

    accordionQuestionClassList.toggle("active");
    arrowEventClassList.toggle("active");
    accordionAnswerClassList.toggle("active");
  });
});
