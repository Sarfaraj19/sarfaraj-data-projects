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
