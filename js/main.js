// sopon.me — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ──────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) link.classList.add('active');
  });

  // ── Announcement dismiss ─────────────────────────────────────
  document.querySelectorAll('.announcement-card[data-dismiss]').forEach(card => {
    const key = 'dismissed_' + card.dataset.dismiss;
    if (localStorage.getItem(key)) {
      card.style.display = 'none';
    }
    const btn = card.querySelector('.js-dismiss');
    if (btn) {
      btn.addEventListener('click', () => {
        localStorage.setItem(key, '1');
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.3s';
        setTimeout(() => card.style.display = 'none', 300);
      });
    }
  });

  // ── Smooth scroll for in-page anchors ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
