const container = document.querySelector('.container');

const tl = new TimelineMax();

//tl.fromTo(container, 1, {width: "0%"}, {width: "100%"})

function showContainer() {
    container.classList.add('show');
  }
  
  // Call the showContainer function after a delay (e.g., 1 second)
  setTimeout(showContainer, 1000);