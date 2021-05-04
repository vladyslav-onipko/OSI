const width = 299;
const col = 2;

const gallery = document.querySelector('.persons__list');
const persons = gallery.querySelectorAll('.person');

const  arrowRight = gallery.parentElement.previousElementSibling;
const arrowLeft = gallery.parentElement.nextElementSibling;

let position = 0;

arrowLeft.addEventListener('click', () => {
  position -= width * col;
  position = Math.max(position, -width * (persons.length - col));
  gallery.style.marginLeft = position + 'px';
});

arrowRight.addEventListener('click', () => {
  position += width * col;
  position = Math.min(position, 0)
  gallery.style.marginLeft = position + 'px';
});