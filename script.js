// Basic interactions: year, smooth scroll, active nav highlighting, simple mobile nav toggle

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Active menu highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.pageYOffset >= top) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('resize', setActiveNav);
setActiveNav();
