// ===== MOBILE MENU =====
const toggle = document.querySelector('.menu-toggle');
const navUl  = document.querySelector('nav ul');

if (toggle && navUl) {
  toggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== CONTACT FORM (basic client-side handling) =====
// To make the form actually send emails, replace this with a service like
// Formspree (https://formspree.io) — just update the form action attribute.
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', (e) => {
    // If using Formspree or similar, remove the preventDefault below
    // and set form action="https://formspree.io/f/YOUR_ID" method="POST"
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Message sent — thank you!';
    btn.disabled = true;
    form.reset();
  });
}
