// Add data-reveal to any element you want to fade in
(function(){
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'opacity .6s ease, transform .6s ease';
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    io.observe(el);
  });

  // Remember last active section
  const links = document.querySelectorAll('[data-section]');
  links.forEach(a => a.addEventListener('click', () => {
    localStorage.setItem('pk_active_section', a.dataset.section);
  }));
  const saved = localStorage.getItem('pk_active_section');
  if (saved) {
    const target = document.querySelector(`[data-section="${saved}"]`);
    target && target.click();
  }
})();
