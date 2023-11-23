
const container = document.querySelector('.header');

const tl = new TimelineMax();

function showContainer() {
    container.classList.add('show');
  }
  
  setTimeout(showContainer, 1000);