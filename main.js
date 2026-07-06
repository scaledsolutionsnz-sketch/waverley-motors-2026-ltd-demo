// Waverley Motors 2026 Ltd — interactions
(function () {
  // Intro overlay
  var intro = document.querySelector('.intro');
  if (intro) {
    window.addEventListener('load', function () {
      setTimeout(function () { intro.classList.add('done'); }, 1150);
    });
    // safety fallback
    setTimeout(function () { intro.classList.add('done'); }, 2600);
  }

  // Nav scroll state
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Hero rolling slides
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 5500);
  }

  // Reveal on scroll
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.style.display === 'flex';
      links.style.display = open ? '' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.right = '20px';
      links.style.background = 'rgba(11,18,32,.97)';
      links.style.padding = '18px 26px';
      links.style.borderRadius = '14px';
      links.style.gap = '14px';
    });
  }
})();
