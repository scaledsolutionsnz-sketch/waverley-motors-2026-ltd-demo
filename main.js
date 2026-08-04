// Waverley Motors 2026 Ltd — interactions
(function () {
  // Intro overlay
  var intro = document.querySelector('.intro');
  if (intro) {
    window.addEventListener('load', function () {
      setTimeout(function () { intro.classList.add('done'); }, 1800);
    });
    // safety fallback
    setTimeout(function () { intro.classList.add('done'); }, 3200);
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

  // Rotating hero review
  var hrQuote = document.getElementById('hrQuote');
  var hrName = document.getElementById('hrName');
  var heroReview = document.getElementById('heroReview');
  if (hrQuote && hrName && heroReview) {
    var reviews = [
      { q: '"The BEST in Invercargill. Friendly, honest and go the extra mile to help their customer. Fair pricing. Highly recommended!"', n: 'Gonz Hipo · Google review' },
      { q: '"Best WOF place in Invercargill. We have taken our vehicles here for years and always had good reliable service."', n: 'Cameron Corcoran · Local Guide' },
      { q: '"Very awesome garage who tells it like it is and does not rip you off. Staff are always helpful and welcoming."', n: 'Zivana Marie Anderson · Local Guide' },
      { q: '"Great mechanics, very fair prices, and the great customer service by Bronwyn."', n: 'Tim Macdonald · Local Guide' },
      { q: '"Great friendly service. You can trust the team here!!"', n: 'Ollie Jackson · Local Guide' },
      { q: '"Top notch business and staff, excellent service."', n: 'Steve Horton · Google review' },
      { q: '"High-quality service and they always ensure customer satisfaction. Very professional. Thank you Waverley Motors!"', n: 'Ankush Saini · Google review' },
      { q: '"Great friendly service."', n: 'William Ferris · Google review' }
    ];
    var ri = 0;
    setInterval(function () {
      ri = (ri + 1) % reviews.length;
      heroReview.classList.add('fade');
      setTimeout(function () {
        hrQuote.textContent = reviews[ri].q;
        hrName.textContent = reviews[ri].n;
        heroReview.classList.remove('fade');
      }, 420);
    }, 4500);
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
