const container = document.querySelector('.container');

const tl = new TimelineMax();

function showContainer() {
    container.classList.add('show');
  }
  
  setTimeout(showContainer, 1000);

