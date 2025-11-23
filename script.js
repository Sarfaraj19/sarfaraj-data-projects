// script.js
document.getElementById('year').textContent = new Date().getFullYear();

// simple mobile nav toggle
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

// Optional: form submit UX
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // let formspree handle it; show simple success feedback
    setTimeout(() => {
      alert('Thanks — your message has been sent!');
      form.reset();
    }, 300);
  });
}


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) { // adjust offset
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

