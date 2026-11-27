// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
});

// Highlight the current section in the navbar
const links = [...menu.querySelectorAll('a')];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach(s => io.observe(s));

// Contact form opens the visitor's email app (no server or secrets needed)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const body = `${f.msg.value}\n\nFrom: ${f.name.value} (${f.from.value})`;
  window.location.href = 'mailto:your.email@example.com?subject=' +
    encodeURIComponent('Portfolio message from ' + f.name.value) + '&body=' + encodeURIComponent(body);
});

document.getElementById('year').textContent = new Date().getFullYear();
