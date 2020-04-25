const animatedObject = document.querySelectorAll('.js-animation');
const windowHeight = window.innerHeight;

//Animate on Scroll
animatedObject.forEach((el) => {
  window.addEventListener('scroll', function() {
    let posTop = el.getBoundingClientRect().top;
    if (posTop - windowHeight <= 0) {
      el.className = el.className.replace('js-animation', 'fade-in');
    }
  });
});
