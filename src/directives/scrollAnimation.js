const animatedScrollObserver = new IntersectionObserver((entries, animatedScrollObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('enter');
      entry.target.className.replace('before-enter', 'enter');
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

export default {
  bind(el, binding) {
    el.classList.add(`before-enter__${binding.arg}`);
    animatedScrollObserver.observe(el);
  },
};
