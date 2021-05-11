const gallery = document.querySelector('.persons__list');
const persons = gallery.querySelectorAll('.person');
const dotsBlock = document.querySelector('.team__slider').querySelector('.dots');

const personMarginRight = window.getComputedStyle(gallery.firstElementChild).getPropertyValue('margin-right').slice(0, 2);
const mainWidth = document.querySelector('.main').offsetWidth;

const personWidth = gallery.firstElementChild.offsetWidth + +personMarginRight;
const visible = (mainWidth <= 767) ? 1 : (mainWidth >= 767 && mainWidth <= 1279) ? 2 : 3;

const moveSlider = () => {
  const  arrowLeft = gallery.parentElement.previousElementSibling;
  const arrowRight = gallery.parentElement.nextElementSibling;
  
  let currentDot;
  let i = 0;
  let position = 0;
  
  arrowLeft.addEventListener('click', () => {
    position -= personWidth;
    currentDot.classList.remove('active');
    i--;

    if (position < 0) {
      for (let dot of dotsBlock.children) {
        dot.classList.add('active');
      }
      position = personWidth * persons.length - visible * personWidth;
      i = dotsBlock.children.length - 1;
    }

    gallery.style.marginLeft = -position + 'px';
    currentDot = dotsBlock.children[i];
  });
  
  arrowRight.addEventListener('click', () => {
    position += personWidth;
    i++;

    if (position > personWidth * persons.length - visible * personWidth) {
      for (let dot of dotsBlock.children) {
        dot.classList.remove('active');
      }
      position = 0;
      i = 0;
    }

    gallery.style.marginLeft = -position + 'px';
    currentDot = dotsBlock.children[i];
    currentDot.classList.add('active');
  });
}

const addDots = () => {
  for (let i = visible; i <= persons.length; i++) {
    dotsBlock.innerHTML += `<i class="fas fa-circle"></i>`;
  }
}

moveSlider();
addDots();