document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.card, .stat-card, .contact-banner').forEach((element) => {
  element.classList.add('fade-in');
  observer.observe(element);
});
