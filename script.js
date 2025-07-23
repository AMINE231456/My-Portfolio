document.addEventListener('DOMContentLoaded', function () {
  const leftPanel = document.querySelector('.left-panel');
  const rightPanel = document.querySelector('.right-panel');
  const toggleBtn = document.querySelector('.toggle-panels');
  const navLinks = document.querySelectorAll('.icon-navbar a');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      leftPanel.classList.toggle('show');
      rightPanel.classList.toggle('show');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
  });
});
