const gallery = document.querySelector('.persons__list');
const persons = gallery.querySelectorAll('.person');
const dotsBlock = document.querySelector('.team__slider').querySelector('.dots');

const moveSlider = () => {
  const  arrowRight = gallery.parentElement.previousElementSibling;
  const arrowLeft = gallery.parentElement.nextElementSibling;

  const width = 299;
  const col = 2;

  let position = 0;
  let i = 1;
  
  arrowLeft.addEventListener('click', () => {
    position -= width * col;
    position = Math.max(position, -width * (persons.length - col));
    gallery.style.marginLeft = position + 'px';
    
    if (i != dotsBlock.children.length) {
      dotsBlock.children[i].style.color = '#39a38f';
      i++;
    }
  });
  
  arrowRight.addEventListener('click', () => {
    position += width * col;
    position = Math.min(position, 0)
    gallery.style.marginLeft = position + 'px';
    
    if (i != 1) {
      dotsBlock.children[i - 1].style.color = '#d5d5d5';
      i--;
    }
  });
}

const addDots = () => {
  for (let _ of persons) {
    dotsBlock.innerHTML += `<i class="fas fa-circle"></i>`;
  }
}

moveSlider();
addDots();