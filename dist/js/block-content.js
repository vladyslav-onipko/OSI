const blocks = document.querySelectorAll('.portfolio__blocks :nth-child(6)');

const items = {
  img: './dist/img/clip.png',
  title: 'Free Website PSD',
  subtitle: 'Web'
};

const addContent = (hook, content) => {
  const image = document.createElement('img');
  const title = document.createElement('p');
  const subtitle = document.createElement('p');

  image.src = content.img;
  title.className = 'block__title';
  title.textContent = content.title;
  subtitle.className = 'block__subtitle';
  subtitle.textContent = content.subtitle;

  hook.append(image, title, subtitle);
};

blocks.forEach(block => {
  addContent(block, items);
})