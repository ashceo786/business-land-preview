/* Business Land | homepage behaviour. No libraries. */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WA = '923008449276';

  /* WhatsApp links: build the message from data-wa */
  d.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(a.getAttribute('data-wa'));
  });

  /* Mobile menu */
  var burger = d.getElementById('burger'), nav = d.getElementById('nav');
  function closeMenu() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* Scroll progress, header shadow, active link (one rAF-throttled handler) */
  var bar = d.querySelector('.progress span'), header = d.querySelector('.header'), ticking = false;
  var links = [].slice.call(nav.querySelectorAll('a')).map(function (a) {
    return { a: a, s: d.querySelector(a.getAttribute('href')) };
  }).filter(function (x) { return x.s; });
  function onScroll() {
    var y = window.scrollY, h = root.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
    header.classList.toggle('scrolled', y > 20);
    var mid = y + window.innerHeight * 0.35;
    links.forEach(function (x) { x.a.classList.toggle('on', x.s.offsetTop <= mid && x.s.offsetTop + x.s.offsetHeight > mid); });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Reveal on scroll, counters, layered foil, timeline */
  function count(el) {
    var to = parseFloat(el.getAttribute('data-count')), dec = +el.getAttribute('data-dec') || 0;
    if (reduce) { el.textContent = to.toFixed(dec); return; }
    var t0 = performance.now(), dur = 1400;
    (function tick(t) {
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = (to * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  var targets = d.querySelectorAll('.reveal, .steps, .spec');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; el.classList.add('in'); io.unobserve(el);
        el.querySelectorAll('[data-count]').forEach(count);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); el.querySelectorAll('[data-count]').forEach(count); });
  }

  /* Hero parallax: pointer on desktop, gentle tilt on scroll for touch */
  var stage = d.getElementById('stage');
  if (stage && !reduce && window.matchMedia('(pointer: fine)').matches) {
    var hero = stage.closest('.hero'), raf = 0, tx = 0, ty = 0;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(function () {
        stage.style.setProperty('--mx', tx.toFixed(3)); stage.style.setProperty('--my', ty.toFixed(3)); raf = 0;
      });
    });
    hero.addEventListener('pointerleave', function () { stage.style.setProperty('--mx', 0); stage.style.setProperty('--my', 0); });
  }

  /* Enquiry form: validate, then open WhatsApp with the message ready */
  var form = d.getElementById('enquiry'), err = d.getElementById('err');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, name = f.name.value.trim(), phone = f.phone.value.trim();
    [f.name, f.phone].forEach(function (i) { i.setAttribute('aria-invalid', String(!i.value.trim())); });
    err.hidden = !!(name && phone);
    if (!name || !phone) { (name ? f.phone : f.name).focus(); return; }
    var msg = 'Hello Business Land, my name is ' + name + '. I am interested in: ' + f.topic.value + '.' +
      (f.msg.value.trim() ? ' ' + f.msg.value.trim() : '') + ' My number: ' + phone;
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });




  /* Hide the floating WhatsApp button while the contact section is on screen (it has its own buttons) */
  var fab = d.querySelector('.fab'), contact = d.getElementById('contact');
  if (fab && contact && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { fab.classList.toggle('away', en[0].isIntersecting); }, { threshold: 0.25 }).observe(contact);
  }

  /* Swipe lists on phones: make them keyboard focusable only while they scroll sideways */
  var rails = d.querySelectorAll('[data-carousel]');
  function railCheck() {
    rails.forEach(function (r) {
      if (r.scrollWidth > r.clientWidth + 2) { [].forEach.call(r.children, function (c) { c.classList.add('in'); }); r.setAttribute('tabindex', '0'); r.setAttribute('role', 'region'); r.setAttribute('aria-label', r.getAttribute('data-carousel')); }
      else { r.removeAttribute('tabindex'); r.removeAttribute('role'); r.removeAttribute('aria-label'); }
    });
  }
  railCheck(); window.addEventListener('resize', railCheck);

  /* Video modal: one player, loaded only when someone clicks play */
  var vm = d.getElementById('vmodal'), vp = d.getElementById('vplayer'), vt = d.getElementById('vtitle'), lastBtn = null;
  if (vm && vm.showModal) {
    d.addEventListener('click', function (e) {
      var t = e.target.closest('[data-video]');
      if (t) { lastBtn = t; vp.src = t.getAttribute('data-video'); vt.textContent = t.getAttribute('data-title') || ''; vm.showModal(); vp.play().catch(function () {}); return; }
      if (e.target === vm || e.target.closest('.vclose')) vm.close();
    });
    vm.addEventListener('close', function () { vp.pause(); vp.removeAttribute('src'); vp.load(); if (lastBtn) lastBtn.focus(); });
  }

  var yr = d.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
