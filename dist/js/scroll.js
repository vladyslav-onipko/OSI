const arrowDown = document.querySelector('.arrows-container');
const arrowUp = document.querySelector('.footer').querySelector('.fa-angle-up');

arrowDown.addEventListener('click', () => {
  arrowDown.scrollIntoView({
    behavior: "smooth",
  });
})

arrowUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
})