/* ==========================================================================
   JINEET PANCHAL — PORTFOLIO — app.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- INTRO ---------- */
  const intro = document.getElementById('intro');
  const jpText = document.getElementById('jp3d');
  if (jpText) {
    'JP'.split('').forEach(ch => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = ch;
      span.setAttribute('data-ch', ch);
      jpText.appendChild(span);
    });
  }
  function hideIntro(){
    intro.classList.add('hide');
    document.body.classList.remove('lock');
  }
  document.body.classList.add('lock');
  const introTimer = setTimeout(hideIntro, 2000);
  intro.addEventListener('click', () => { clearTimeout(introTimer); hideIntro(); });

  /* ---------- NAV ---------- */
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
  if (navToggle) {
    navToggle.addEventListener('click', () => navUl.classList.toggle('open'));
    navUl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navUl.classList.remove('open')));
  }

  /* ---------- SCROLL REVEALS ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger, .timeline');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- COUNT-UP STATS ---------- */
  const statNums = document.querySelectorAll('.stat .num');
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = cur + suffix;
      }, 25);
      countIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => countIo.observe(el));

  /* ---------- HERO PORTRAIT PARALLAX + BLOB DRIFT ---------- */
  const portraitWrap = document.querySelector('.hero-portrait-wrap');
  const portrait = document.querySelector('.hero-portrait');
  if (portraitWrap && portrait) {
    portraitWrap.addEventListener('mousemove', (e) => {
      const r = portraitWrap.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) / r.width;
      const y = (e.clientY - r.top - r.height/2) / r.height;
      portrait.style.transform = `translate(${x*14}px, ${y*14}px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`;
    });
    portraitWrap.addEventListener('mouseleave', () => {
      portrait.style.transform = 'translate(0,0) rotateY(0) rotateX(0)';
    });
  }

  /* ---------- GENERIC 3D TILT (do-cards, edu-cards, work-cards) ---------- */
  function applyTilt(el, strength = 8) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateY(${x*strength}deg) rotateX(${-y*strength}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(700px) rotateY(0) rotateX(0) translateY(0)';
    });
  }
  document.querySelectorAll('.do-card').forEach(c => applyTilt(c, 6));

  /* ---------- WORK: RENDER FROM DATA ---------- */
  const grid = document.getElementById('workGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let currentFilter = 'All';

  function iconForCategory(cat){
    return cat === 'Video Edits' ? true : false;
  }

  function renderWork(filter){
    grid.innerHTML = '';
    const items = WORK_ITEMS.filter(i => filter === 'All' || i.category === filter);
    items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'work-card';
      card.style.animationDelay = (idx * 0.05) + 's';

      const isVideo = item.type === 'video';
      const isSite = item.type === 'site';

      card.innerHTML = `
        <div class="work-thumb">
          <img src="${item.thumb}" alt="${item.title} — ${item.client}" loading="lazy">
          ${isVideo ? '<div class="play"><div class="play-icon"></div></div>' : ''}
          <span class="work-cat-badge">${item.category}</span>
        </div>
        <div class="work-body">
          <div class="work-client">${item.client}</div>
          <div class="work-title">${item.title}</div>
          <p class="work-desc">${item.description}</p>
          ${isSite ? `<span class="work-visit">Visit live site →</span>` : ''}
        </div>
      `;
      applyTilt(card, 5);
      card.addEventListener('click', () => openLightbox(item));
      grid.appendChild(card);

      requestAnimationFrame(() => card.classList.add('show'));
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderWork(currentFilter);
    });
  });

  renderWork('All');

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lbMedia = document.querySelector('.lb-media');
  const lbClient = document.querySelector('.lb-client');
  const lbTitle = document.querySelector('.lb-info h3');
  const lbDesc = document.querySelector('.lb-info p');
  const lbClose = document.querySelector('.lb-close');

  function openLightbox(item){
    if (item.type === 'site') {
      window.open(item.link, '_blank', 'noopener');
      return;
    }
    lbMedia.innerHTML = item.type === 'video'
      ? `<video src="${item.src}" controls autoplay playsinline></video>`
      : `<img src="${item.src}" alt="${item.title}">`;
    lbClient.textContent = item.client;
    lbTitle.textContent = item.title;
    lbDesc.textContent = item.description;
    lightbox.classList.add('open');
    document.body.classList.add('lock');
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.classList.remove('lock');
    lbMedia.innerHTML = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- TIMELINE SVG HEIGHT SYNC ---------- */
  const timelineEl = document.querySelector('.timeline');
  const timelineLine = document.querySelector('.timeline-line');
  const timelineLineFill = document.querySelector('.timeline-line-fill');
  function syncTimelineHeight(){
    if (!timelineEl) return;
    const h = timelineEl.offsetHeight;
    [timelineLine, timelineLineFill].forEach(l => { if (l) l.setAttribute('y2', h); });
    document.querySelector('.timeline-svg').setAttribute('height', h);
  }
  syncTimelineHeight();
  window.addEventListener('resize', syncTimelineHeight);

});
