const animatedScrollObserver = new IntersectionObserver((entries, animatedScrollObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

export default {
  bind(el, binding) {
    el.classList.add('before-enter');
    if (binding.arg) {
      el.classList.add(`before-enter__${binding.arg}`);
    }
    animatedScrollObserver.observe(el);
  },
};
