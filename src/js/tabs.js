const portfolioBlock = document.querySelector('.portfolio');
const portfolioBlocks = portfolioBlock.querySelectorAll('.portfolio__blocks');
const itemsList = portfolioBlock.querySelector('.nav-bar__items');
const tabsBtn = itemsList.querySelectorAll('a');

tabsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let tabId = btn.getAttribute('data-tab');
    let currentTab = portfolioBlock.querySelector(tabId);

    if (!btn.classList.contains('nav-bar__item--active')) {
      tabsBtn.forEach(btn => {
        btn.classList.remove('nav-bar__item--active');
      })
  
      portfolioBlocks.forEach(block => {
        block.classList.remove('portfolio__blocks--active');
      })
      
      currentTab.classList.add('portfolio__blocks--active');
      btn.classList.add('nav-bar__item--active');
    };
  })
})

itemsList.lastElementChild.querySelector('a').click();