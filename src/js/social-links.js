const linkedinBtns = document.querySelectorAll('.linkedin');
const pinterestBtns = document.querySelectorAll('.pinterest');
const twitterBtns = document.querySelectorAll('.twitter');
const facebookBtns = document.querySelectorAll('.facebook');

const init = () => {
  const postImg = encodeURI('https://s.dou.ua/img/announces/how-to-front-end-840.jpg');

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('check this out');

  linkedinBtns.forEach(btn => {
    btn.setAttribute('href', `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
  });
  pinterestBtns.forEach(btn => {
    btn.setAttribute('href', `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&is_video=[is_video]&description=${postTitle}`);
  });
  twitterBtns.forEach(btn => {
    btn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
  });
  facebookBtns.forEach(btn => {
    btn.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`);
  });
}

init()