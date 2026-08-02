/* ==========================================================================
   SELVAM SWEETS & BAKERY — shared site behaviour
   ========================================================================== */

/* ---------- Header: shadow on scroll ---------- */
const siteHeader = document.querySelector('.site-header');
function onScrollHeader(){
  if(!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 12);
}
document.addEventListener('scroll', onScrollHeader, { passive:true });
onScrollHeader();

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    mainNav.classList.remove('open');
  }));
}

/* ---------- Mark active nav link ---------- */
(function markActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();

/* ---------- Scroll reveal ---------- */
const revealTargets = document.querySelectorAll('.reveal-init, .feature-card, .product-card, .masonry-item');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  revealTargets.forEach((el, i) => {
    el.style.transitionDelay = (i % 8) * 0.06 + 's';
    io.observe(el);
  });
} else {
  revealTargets.forEach(el => el.classList.add('reveal'));
}

/* ---------- Button ripple ---------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if(!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

/* ---------- Image fallback: show a gradient + emoji placeholder if photo missing ---------- */
const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(135deg,#FF9BD1,#FFD23F)',
  'linear-gradient(135deg,#4FC3F7,#4FE3B0)',
  'linear-gradient(135deg,#FF8C3D,#E8483C)',
  'linear-gradient(135deg,#E8B84B,#FFD23F)',
  'linear-gradient(135deg,#4FE3B0,#4FC3F7)',
  'linear-gradient(135deg,#FF4FA3,#FF8C3D)'
];
function hashStr(str){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
  return h;
}
function applyImageFallback(root){
  (root || document).querySelectorAll('img[data-fallback-emoji]').forEach(img => {
    img.addEventListener('error', function handler(){
      img.removeEventListener('error', handler);
      const emoji = img.getAttribute('data-fallback-emoji') || '🍬';
      const wrap = document.createElement('div');
      wrap.className = 'ph-fallback';
      const g = PLACEHOLDER_GRADIENTS[hashStr(img.getAttribute('alt')||'x') % PLACEHOLDER_GRADIENTS.length];
      wrap.style.background = g;
      wrap.textContent = emoji;
      img.replaceWith(wrap);
    }, { once:true });
  });
}
applyImageFallback(document);

/* ---------- Confetti (hero canvas) ---------- */
(function confetti(){
  const canvas = document.getElementById('confetti-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, pieces = [];
  const colors = ['#FF4FA3','#FFD23F','#FF8C3D','#4FC3F7','#4FE3B0','#E8B84B'];

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  function makePiece(){
    return {
      x: Math.random()*w,
      y: Math.random()*-h,
      size: 5 + Math.random()*7,
      speed: 0.6 + Math.random()*1.4,
      drift: (Math.random()-0.5)*1.2,
      rot: Math.random()*360,
      rotSpeed: (Math.random()-0.5)*4,
      color: colors[Math.floor(Math.random()*colors.length)],
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    };
  }
  function init(){
    resize();
    pieces = Array.from({length: Math.min(50, Math.round(w/16))}, makePiece);
  }
  function tick(){
    ctx.clearRect(0,0,w,h);
    pieces.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rot += p.rotSpeed;
      if(p.y > h + 20){ Object.assign(p, makePiece(), { y: -20 }); }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      if(p.shape === 'circle'){
        ctx.beginPath();
        ctx.arc(0,0,p.size/2,0,Math.PI*2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      }
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  window.addEventListener('resize', resize);
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    init();
    requestAnimationFrame(tick);
  }
})();

/* ---------- Typing headline effect ---------- */
(function typedHeadline(){
  const el = document.querySelector('[data-typed]');
  if(!el) return;
  const words = JSON.parse(el.getAttribute('data-typed'));
  let wi = 0, ci = 0, deleting = false;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.innerHTML = '&nbsp;';
  el.after(cursor);

  function step(){
    const word = words[wi];
    if(!deleting){
      ci++;
      el.textContent = word.slice(0, ci);
      if(ci === word.length){ deleting = true; setTimeout(step, 1400); return; }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if(ci === 0){ deleting = false; wi = (wi+1) % words.length; }
    }
    setTimeout(step, deleting ? 45 : 85);
  }
  step();
})();

/* ---------- Counter marquee builder ---------- */
function buildMarquee(items){
  const track = document.querySelector('.counter-track');
  if(!track) return;
  const doubled = items.concat(items);
  track.innerHTML = doubled.map(it => `
    <div class="counter-jar">
      <span class="jar-icon">${it.icon}</span>
      <span>${it.name}</span>
    </div>
  `).join('');
}

/* ---------- Scroll-to-top / WhatsApp float buttons ---------- */
const topBtn = document.querySelector('.float-btn.top');
if(topBtn){
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 500);
  }, { passive:true });
  topBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ---------- Contact form (front-end validation, no backend) ---------- */
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const name = contactForm.querySelector('#c-name').value.trim();
    const phone = contactForm.querySelector('#c-phone').value.trim();
    const email = contactForm.querySelector('#c-email').value.trim();
    const message = contactForm.querySelector('#c-message').value.trim();

    const phoneOk = /^[0-9+\-\s]{7,15}$/.test(phone);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!name || !phoneOk || !emailOk || !message){
      msg.textContent = 'Please fill all fields correctly (valid phone & email).';
      msg.className = 'form-msg show err';
      return;
    }
    msg.textContent = 'Thank you! Your message has been noted — our team will call you back soon. 🍬';
    msg.className = 'form-msg show ok';
    contactForm.reset();
  });
}

/* ---------- Product card renderer (used by category pages) ---------- */
function renderProducts(containerId, items){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.img}" alt="${p.name}" data-fallback-emoji="${p.emoji}" loading="lazy">
        ${p.veg !== undefined ? `<span class="veg-tag ${p.veg ? '' : 'nonveg'}"><i></i></span>` : ''}
        ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ''}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-foot">
          <span class="price">${p.price}<span class="from">${p.note || ''}</span></span>
          <button class="add-btn" aria-label="Enquire about ${p.name}" onclick="window.location.href='contact.html'">+</button>
        </div>
      </div>
    </article>
  `).join('');
  applyImageFallback(container);
  if('IntersectionObserver' in window){
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('reveal'); io2.unobserve(entry.target); }
      });
    }, { threshold:0.1, rootMargin:'0px 0px -30px 0px' });
    container.querySelectorAll('.product-card').forEach((el,i) => {
      el.style.transitionDelay = (i % 10) * 0.05 + 's';
      io2.observe(el);
    });
  } else {
    container.querySelectorAll('.product-card').forEach(el => el.classList.add('reveal'));
  }
}

/* ---------- Filter chips (optional, category pages) ---------- */
function initFilterChips(){
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const target = chip.getAttribute('data-target');
      if(target){
        document.getElementById(target)?.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', initFilterChips);
