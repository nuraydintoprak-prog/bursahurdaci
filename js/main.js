// =========================================================
// BURSA HURDACI - main.js
// =========================================================
document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Sticky header shadow on scroll
  var header = document.getElementById('header');
  var backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY > 60;
    if (header) header.style.boxShadow = scrolled
      ? '0 4px 26px rgba(0,0,0,0.35)'
      : '0 2px 20px rgba(0,0,0,0.25)';
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('active');
      });
      if (!wasActive) item.classList.add('active');
    });
  });

  // Smooth-scroll offset correction for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 1;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

});
