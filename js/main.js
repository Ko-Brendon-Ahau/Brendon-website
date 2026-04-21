// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navUl  = document.querySelector('.site-nav ul');
if (toggle && navUl) {
  toggle.addEventListener('click', () => navUl.classList.toggle('open'));
}

// Active nav link
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  if (a.getAttribute('href') === page || a.getAttribute('href') === '../' + page) {
    a.classList.add('active');
  }
});

// Contact form placeholder
const form = document.querySelector('form.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    // Remove this preventDefault once Formspree is configured
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sent — ngā mihi!';
    btn.disabled = true;
    form.reset();
  });
}
