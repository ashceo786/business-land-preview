/* Business Land | blog behaviour. Renders posts from js/blog-data.js on the homepage, listing and detail pages. No libraries. */
(function () {
  'use strict';
  var d = document, posts = (window.BLOG_POSTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var WA = '923008449276';

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(iso) { return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); }
  function url(p) { return 'post.html?slug=' + encodeURIComponent(p.slug); }

  function card(p, i) {
    return '<article class="card post reveal" style="--d:' + (i || 0) + '">' +
      '<a class="ph" href="' + url(p) + '" tabindex="-1" aria-hidden="true"><img loading="lazy" src="' + p.image + '" width="1100" height="733" alt=""></a>' +
      '<div class="body"><div class="meta"><span class="chip">' + esc(p.category) + '</span><time datetime="' + p.date + '">' + fmt(p.date) + '</time></div>' +
      '<h3><a href="' + url(p) + '">' + esc(p.title) + '</a></h3><p>' + esc(p.excerpt) + '</p>' +
      '<a class="more" href="' + url(p) + '" aria-label="Read article: ' + esc(p.title) + '">Read article ' + ARROW + '</a></div></article>';
  }

  /* Homepage: three latest */
  var home = d.querySelector('[data-blog="home"]');
  if (home) home.innerHTML = posts.slice(0, 3).map(card).join('');

  /* Listing: featured post, category filter, grid */
  var list = d.querySelector('[data-blog="list"]');
  if (list) {
    var feat = d.getElementById('featured'), grid = d.getElementById('postgrid'), filters = d.getElementById('filters');
    var cats = ['All'].concat(posts.map(function (p) { return p.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    filters.innerHTML = cats.map(function (c, i) { return '<button type="button" class="fchip" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>'; }).join('');
    var f = posts[0];
    feat.innerHTML = '<a class="ph" href="' + url(f) + '" tabindex="-1" aria-hidden="true"><img src="' + f.image + '" width="1100" height="733" alt=""></a>' +
      '<div class="body"><div class="meta"><span class="chip">Latest</span><span class="chip alt">' + esc(f.category) + '</span><time datetime="' + f.date + '">' + fmt(f.date) + '</time></div>' +
      '<h2><a href="' + url(f) + '">' + esc(f.title) + '</a></h2><p>' + esc(f.excerpt) + '</p>' +
      '<a class="btn btn-primary" href="' + url(f) + '">Read article ' + ARROW + '</a></div>';
    var show = function (cat) {
      var rows = posts.filter(function (p) { return cat === 'All' ? p !== f : p.category === cat; });
      feat.hidden = cat !== 'All';
      grid.innerHTML = rows.length ? rows.map(card).join('') : '<p class="empty">No articles in this category yet.</p>';
      [].forEach.call(grid.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
    };
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.fchip'); if (!b) return;
      [].forEach.call(filters.children, function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      show(b.textContent);
    });
    show('All');
  }

  /* Detail: article from ?slug=, related posts, share */
  var art = d.querySelector('[data-blog="post"]');
  if (art) {
    var slug = new URLSearchParams(location.search).get('slug');
    var p = posts.filter(function (x) { return x.slug === slug; })[0];
    if (!p) {
      d.title = 'Article not found | Business Land';
      art.innerHTML = '<div class="notfound"><h1>We could not find that article</h1><p>It may have moved. See all our articles instead.</p><a class="btn btn-primary" href="blog.html">Back to the blog</a></div>';
    } else {
      d.title = p.title + ' | Business Land Blog';
      var md = d.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', p.excerpt);
      var og = d.querySelector('meta[property="og:title"]'); if (og) og.setAttribute('content', p.title);
      var oi = d.querySelector('meta[property="og:image"]'); if (oi) oi.setAttribute('content', p.image);
      var body = p.body.map(function (b) {
        if (b.t === 'h2') return '<h2>' + esc(b.v) + '</h2>';
        if (b.t === 'ul') return '<ul>' + b.v.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
        if (b.t === 'quote') return '<blockquote>' + esc(b.v) + '</blockquote>';
        return '<p>' + esc(b.v) + '</p>';
      }).join('');
      var msg = 'Hello Business Land, I read your article "' + p.title + '" and have a question.';
      var share = 'https://wa.me/?text=' + encodeURIComponent(p.title + ' ' + location.href);
      d.getElementById('crumb').textContent = p.title;
      d.getElementById('phead').innerHTML = '<div class="meta"><span class="chip">' + esc(p.category) + '</span><time datetime="' + p.date + '">' + fmt(p.date) + '</time><span>' + p.read + ' min read</span></div>' +
        '<h1>' + esc(p.title) + '</h1><p class="byline">By ' + esc(p.author) + '</p>';
      art.innerHTML = '<figure class="hero-img"><img src="' + p.image + '" width="1100" height="733" alt="' + esc(p.imageAlt || '') + '" fetchpriority="high"></figure>' +
        '<div class="prose">' + body + '</div>' +
        '<div class="share"><span>Share this article</span><a class="btn btn-wa btn-sm" href="' + share + '" target="_blank" rel="noopener"><svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg>Share on WhatsApp</a></div>' +
        '<aside class="cta-box"><div><h2>Have a question about this?</h2><p>Message our team and get a reply the same day.</p></div>' +
        '<a class="btn btn-light" data-wa="' + esc(msg) + '" href="https://wa.me/' + WA + '" target="_blank" rel="noopener">Ask on WhatsApp ' + ARROW + '</a></aside>';
      var rel = posts.filter(function (x) { return x !== p; }).sort(function (a, b) { return (b.category === p.category) - (a.category === p.category); }).slice(0, 3);
      d.getElementById('related').innerHTML = rel.map(card).join('');
      [].forEach.call(d.querySelectorAll('#related .reveal'), function (el) { el.classList.add('in'); });
    }
  }

  /* WhatsApp links built from data-wa (the homepage script does this too, so only run on blog pages) */
  if (d.body.hasAttribute('data-sub')) {
    d.querySelectorAll('[data-wa]').forEach(function (a) { a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(a.getAttribute('data-wa')); });

    var burger = d.getElementById('burger'), nav = d.getElementById('nav'), header = d.querySelector('.header');
    var closeMenu = function () { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Open menu'); };
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    var yr = d.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
    var io = 'IntersectionObserver' in window && new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { threshold: 0.15 });
    d.querySelectorAll('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });
  }
})();
