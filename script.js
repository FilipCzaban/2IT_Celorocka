/**
 * PyroData CZ — script.js
 * App logic
 */

'use strict';

const state = {
  theme:       localStorage.getItem('pyro-theme') || 'dark',
  chemTab:     'binders',
  compFilter:  'all',
  azLetter:    'all',
};

// ══════════════════════════════════════════════════════════════
// UTILITIES
// ══════════════════════════════════════════════════════════════
const $  = (sel, p = document) => p.querySelector(sel);
const $$ = (sel, p = document) => [...p.querySelectorAll(sel)];

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function highlight(text, q) {
  if (!q) return esc(text);
  const safe = esc(text);
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return safe.replace(re, '<mark>$1</mark>');
}

function animateCount(el, target, dur = 1400) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ══════════════════════════════════════════════════════════════
// THEME
// ══════════════════════════════════════════════════════════════
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const btn  = $('#themeBtn');
  const icon = btn?.querySelector('.theme-btn__icon');
  if (!icon) return;
  if (state.theme === 'dark') {
    icon.textContent = '☀️';
    btn.setAttribute('aria-label', 'Přepnout na světlý režim');
  } else {
    icon.textContent = '🌙';
    btn.setAttribute('aria-label', 'Přepnout na tmavý režim');
  }
}

// ══════════════════════════════════════════════════════════════
// PARTICLES
// ══════════════════════════════════════════════════════════════
function spawnParticles() {
  const wrap = $('#heroParticles');
  if (!wrap) return;
  const colors = ['#ff6b00','#ff9500','#ffcc00','#ff4500','#ffd700'];
  const count  = window.innerWidth < 768 ? 22 : 48;

  for (let i = 0; i < count; i++) {
    const p   = document.createElement('div');
    p.className = 'particle';
    const sz  = Math.random() * 7 + 2;
    const dur = Math.random() * 9 + 5;
    const del = Math.random() * 10;
    const op  = (Math.random() * 0.6 + 0.2).toFixed(2);
    const drift = ((Math.random() - .5) * 220).toFixed(0);
    const col = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left:${(Math.random()*100).toFixed(1)}%;
      bottom:${(Math.random()*25).toFixed(1)}%;
      width:${sz.toFixed(1)}px; height:${sz.toFixed(1)}px;
      background:radial-gradient(circle,${col},transparent);
      animation:rise ${dur.toFixed(1)}s ${del.toFixed(1)}s linear infinite;
      --drift:${drift}px; --op:${op};
      filter:blur(${(Math.random()*2).toFixed(1)}px);
    `;
    wrap.appendChild(p);
  }
}

// ══════════════════════════════════════════════════════════════
// STATS COUNTER
// ══════════════════════════════════════════════════════════════
function initStats() {
  const chemN = Object.values(DB.chemicals).reduce((s,a) => s + a.length, 0);
  const compN = DB.compositions.length;
  const defN  = Object.values(DB.definitions).reduce((s,a) => s + a.length, 0);

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount($('#statChem'), chemN);
      animateCount($('#statComp'), compN);
      animateCount($('#statDef'),  defN);
      obs.disconnect();
    }
  }, { threshold: 0.5 });

  const el = $('.hero__stats');
  if (el) obs.observe(el);
}

// ══════════════════════════════════════════════════════════════
// CHEMICALS
// ══════════════════════════════════════════════════════════════
function renderChemicals() {
  const grid = $('#chem-panel');
  if (!grid) return;
  const data = DB.chemicals[state.chemTab] || [];

  const hazardCls = { low:'ok', medium:'med', high:'hi' };
  const hazardLbl = { low:'✓ Nízké riziko', medium:'⚠ Střední riziko', high:'⚠️ Vysoké riziko' };

  grid.innerHTML = data.map(c => `
    <article class="chem-card" tabindex="0" aria-label="${esc(c.name)}">
      <div class="chem-card__name">${esc(c.name)}</div>
      <div class="chem-card__formula">${esc(c.formula)}</div>
      <p class="chem-card__desc">${esc(c.desc)}</p>
      <div class="chem-card__tags">
        ${c.props.map(p => `<span class="tag">${esc(p)}</span>`).join('')}
        <span class="tag tag--${hazardCls[c.hazard]}">${hazardLbl[c.hazard]}</span>
      </div>
    </article>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
// COMPOSITIONS
// ══════════════════════════════════════════════════════════════
const CATS = [
  { id:'all', lbl:'Vše' },
  { id:'stars',     lbl:'⭐ Hvězdy' },
  { id:'glitters',  lbl:'✨ Glittery' },
  { id:'primes',    lbl:'🔥 Priming' },
  { id:'burst',     lbl:'💥 Burst' },
  { id:'whistle',   lbl:'🎵 Whistle' },
  { id:'rockets',   lbl:'🚀 Rakety' },
  { id:'fountains', lbl:'⛲ Fontány' },
  { id:'flares',    lbl:'🔴 Flares' },
  { id:'smoke',     lbl:'💨 Dýmy' },
  { id:'sparklers', lbl:'🎇 Jiskrnice' },
];

function renderCompChips() {
  const wrap = $('#compChips');
  if (!wrap) return;
  wrap.innerHTML = CATS.map(c => `
    <button class="chip ${c.id === state.compFilter ? 'chip--active' : ''}"
      data-cat="${c.id}" aria-pressed="${c.id === state.compFilter}">${esc(c.lbl)}</button>
  `).join('');

  $$('.chip', wrap).forEach(ch => {
    ch.addEventListener('click', () => {
      state.compFilter = ch.dataset.cat;
      $$('.chip', wrap).forEach(x => { x.classList.remove('chip--active'); x.setAttribute('aria-pressed','false'); });
      ch.classList.add('chip--active');
      ch.setAttribute('aria-pressed','true');
      renderCompositions($('#compSearch')?.value.trim() || '');
    });
  });
}

function renderCompositions(q = '') {
  const grid = $('#comp-grid');
  if (!grid) return;

  let data = DB.compositions;
  if (state.compFilter !== 'all') data = data.filter(c => c.cat === state.compFilter);
  if (q) {
    const lq = q.toLowerCase();
    data = data.filter(c =>
      c.name.toLowerCase().includes(lq) ||
      c.desc.toLowerCase().includes(lq) ||
      c.ing.some(i => i.n.toLowerCase().includes(lq))
    );
  }

  if (!data.length) {
    grid.innerHTML = `<p class="no-results">🔍 Žádné výsledky${q ? ` pro „${esc(q)}"` : ''}</p>`;
    return;
  }

  const hazLbl = { low:'✓ Nízké', med:'⚠ Střední', high:'⚠️ Vysoké' };

  grid.innerHTML = data.map(c => {
    const maxP = Math.max(...c.ing.map(i => i.p));
    const rows = c.ing.slice(0, 4).map(i => `
      <tr>
        <td>
          <span class="ing-bar" style="width:${Math.round(i.p / maxP * 55)}px" aria-hidden="true"></span>
          ${highlight(i.n, q)}
        </td>
        <td>${i.p}%</td>
      </tr>`).join('');
    const more = c.ing.length > 4
      ? `<tr><td colspan="2" style="color:var(--txt-3);font-style:italic">+ ${c.ing.length - 4} další…</td></tr>`
      : '';

    return `
      <article class="comp-card" tabindex="0" role="button"
        aria-label="${esc(c.name)} — kliknutím zobrazíte detail"
        data-id="${c.id}">
        <div class="comp-card__head">
          <h3 class="comp-card__name">${highlight(c.name, q)}</h3>
          <span class="comp-card__cat">${esc(c.catL)}</span>
        </div>
        <p class="comp-card__desc">${highlight(c.desc, q)}</p>
        <table class="ing-table" aria-label="Ingredience">
          <thead><tr><th>Složka</th><th>%</th></tr></thead>
          <tbody>${rows}${more}</tbody>
        </table>
        <div class="comp-card__foot">
          <span class="hazard hazard--${c.hazard}" aria-label="Nebezpečnost: ${hazLbl[c.hazard]}">
            ${hazLbl[c.hazard]}
          </span>
          <button class="btn-detail" data-id="${c.id}" aria-label="Zobrazit detail ${esc(c.name)}">
            Detail →
          </button>
        </div>
      </article>`;
  }).join('');

  // Event delegation
  grid.addEventListener('click', e => {
    const card = e.target.closest('.comp-card');
    if (!card) return;
    openModal(parseInt(card.dataset.id));
  });
  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.comp-card');
      if (card) openModal(parseInt(card.dataset.id));
    }
  });
}

// ══════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════
function openModal(id) {
  const c = DB.compositions.find(x => x.id === id);
  if (!c) return;

  const wrap = $('#modalWrap');
  const body = $('#modalBody');
  if (!wrap || !body) return;

  const hazLbl = { low:'✓ Nízké riziko', med:'⚠ Střední riziko', high:'⚠️ Vysoké riziko' };

  // Globální přepínač pro zobrazení/skrytí videí (pokud napíšete, stačí přepsat na false)
  const SHOW_VIDEOS = true;
  let videoHtml = '';
  if (SHOW_VIDEOS && c.youtubeId) {
    videoHtml = `
      <div class="modal__video-container">
        <iframe 
          src="https://www.youtube.com/embed/${esc(c.youtubeId)}" 
          title="Video ukázka" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="modal__cat">${esc(c.catL)}</div>
    <h2 class="modal__title" id="modalTitle">${esc(c.name)}</h2>
    <p class="modal__desc">${esc(c.desc)}</p>
    <table class="modal__table" aria-label="Složení kompozice">
      <thead><tr><th>Složka</th><th style="text-align:right">%</th></tr></thead>
      <tbody>
        ${c.ing.map(i => `<tr><td>${esc(i.n)}</td><td>${i.p}%</td></tr>`).join('')}
      </tbody>
    </table>
    ${videoHtml}
    <div class="modal__notes">
      <div class="modal__notes-title">⚠️ Poznámky a bezpečnost</div>
      <p>${esc(c.notes)}</p>
    </div>
    <div style="margin-top:1rem">
      <span class="hazard hazard--${c.hazard}">${hazLbl[c.hazard]}</span>
    </div>
  `;

  wrap.hidden = false;
  wrap.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  $('#modalClose')?.focus();
}

function closeModal() {
  const wrap = $('#modalWrap');
  if (wrap) { wrap.hidden = true; wrap.setAttribute('hidden',''); }
  document.body.style.overflow = '';
}

function initModal() {
  $('#modalClose')?.addEventListener('click', closeModal);
  $('#modalWrap')?.addEventListener('click', e => { if (e.target === $('#modalWrap')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ══════════════════════════════════════════════════════════════
// DEFINITIONS
// ══════════════════════════════════════════════════════════════
function renderAZNav() {
  const row = $('#azRow');
  if (!row) return;
  const available = new Set(Object.keys(DB.definitions));

  // "Vše" button
  const all = document.createElement('button');
  all.className = `az-btn ${state.azLetter === 'all' ? 'az-btn--active' : ''}`;
  all.textContent = 'Vše';
  all.setAttribute('aria-label','Zobrazit vše');
  all.setAttribute('aria-pressed', state.azLetter === 'all');
  all.addEventListener('click', () => filterDefs('all'));
  row.appendChild(all);

  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => {
    const btn = document.createElement('button');
    btn.className = `az-btn${!available.has(l) ? ' az-btn--off' : ''}${state.azLetter === l ? ' az-btn--active' : ''}`;
    btn.textContent = l;
    btn.setAttribute('aria-label', `Definice na ${l}`);
    btn.setAttribute('aria-pressed', state.azLetter === l);
    if (!available.has(l)) btn.setAttribute('aria-disabled','true');
    else btn.addEventListener('click', () => filterDefs(l));
    row.appendChild(btn);
  });
}

function filterDefs(letter) {
  state.azLetter = letter;
  $$('.az-btn').forEach(b => {
    const active = (letter === 'all' && b.textContent === 'Vše') || b.textContent === letter;
    b.classList.toggle('az-btn--active', active);
    b.setAttribute('aria-pressed', active);
  });
  renderDefinitions($('#defSearch')?.value.trim() || '');
}

function renderDefinitions(q = '') {
  const list = $('#def-list');
  if (!list) return;

  let entries = state.azLetter === 'all'
    ? Object.entries(DB.definitions)
    : [[state.azLetter, DB.definitions[state.azLetter] || []]];

  if (q) {
    const lq = q.toLowerCase();
    entries = entries
      .map(([l, defs]) => [l, defs.filter(d => d.term.toLowerCase().includes(lq) || d.def.toLowerCase().includes(lq))])
      .filter(([, defs]) => defs.length);
  }

  if (!entries.length || entries.every(([,d]) => !d.length)) {
    list.innerHTML = `<p class="no-results" style="display:block">🔍 Žádné definice${q ? ` pro „${esc(q)}"` : ''}</p>`;
    return;
  }

  list.innerHTML = entries.map(([l, defs]) => `
    <div class="def-group" id="letter-${l}">
      <div class="def-group__letter" aria-label="Písmeno ${l}">${l}</div>
      ${defs.map(d => `
        <div class="def-item">
          <div class="def-item__term">${highlight(d.term, q)}</div>
          <div class="def-item__def">${highlight(d.def, q)}</div>
        </div>`).join('')}
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
// GLOBAL SEARCH
// ══════════════════════════════════════════════════════════════
function initSearch() {
  const inp  = $('#globalSearch');
  const drop = $('#searchDropdown');
  if (!inp || !drop) return;

  inp.addEventListener('input', () => {
    const q = inp.value.trim();
    if (q.length < 2) { drop.hidden = true; return; }
    showSearchResults(q, drop);
  });

  inp.addEventListener('keydown', e => {
    if (e.key === 'Escape') { inp.value = ''; drop.hidden = true; }
  });

  inp.addEventListener('blur', () => {
    setTimeout(() => { drop.hidden = true; }, 200);
  });

  // Keyboard shortcut
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      inp.focus(); inp.select();
      window.scrollTo({ top:0, behavior:'smooth' });
    }
  });

  // Comp search
  $('#compSearch')?.addEventListener('input', e => renderCompositions(e.target.value.trim()));

  // Def search
  $('#defSearch')?.addEventListener('input', e => renderDefinitions(e.target.value.trim()));
}

function showSearchResults(q, drop) {
  const lq  = q.toLowerCase();
  const res = [];

  Object.values(DB.chemicals).forEach(arr => arr.forEach(c => {
    if (c.name.toLowerCase().includes(lq) || c.desc.toLowerCase().includes(lq))
      res.push({ type:'Chemikálie', name:c.name, desc:c.desc, anchor:'#chemicals' });
  }));

  DB.compositions.forEach(c => {
    if (c.name.toLowerCase().includes(lq) || c.desc.toLowerCase().includes(lq))
      res.push({ type:'Kompozice', name:c.name, desc:c.desc, anchor:'#compositions', id:c.id });
  });

  Object.values(DB.definitions).flat().forEach(d => {
    if (d.term.toLowerCase().includes(lq) || d.def.toLowerCase().includes(lq))
      res.push({ type:'Definice', name:d.term, desc:d.def, anchor:'#definitions' });
  });

  if (!res.length) {
    drop.innerHTML = `<div class="sdr-item"><div class="sdr-item__name" style="color:var(--txt-3)">Žádné výsledky…</div></div>`;
  } else {
    drop.innerHTML = res.slice(0, 8).map((r, i) => `
      <div class="sdr-item" tabindex="0" role="option" data-anchor="${r.anchor}" ${r.id ? `data-id="${r.id}"` : ''}>
        <div class="sdr-item__type">${esc(r.type)}</div>
        <div class="sdr-item__name">${highlight(r.name, q)}</div>
        <div class="sdr-item__desc">${esc(r.desc.substring(0, 90))}…</div>
      </div>`).join('');

    $$('.sdr-item', drop).forEach(item => {
      item.addEventListener('click', () => {
        const anchor = item.dataset.anchor;
        const id     = item.dataset.id;
        const target = document.querySelector(anchor);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior:'smooth' });
        }
        drop.hidden = true;
        if (id) setTimeout(() => openModal(parseInt(id)), 600);
      });
    });
  }

  drop.hidden = false;
  drop.removeAttribute('hidden');
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
function initNav() {
  // Hamburger
  const ham  = $('#hamburger');
  const menu = $('#navLinks');

  ham?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
  });

  $$('.nav__link').forEach(l => l.addEventListener('click', () => {
    menu?.classList.remove('open');
    ham?.classList.remove('open');
    ham?.setAttribute('aria-expanded','false');
  }));

  // Smooth scroll for all anchor links
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        const top = t.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior:'smooth' });
      }
    });
  });

  // Active nav link on scroll
  const sections = $$('section[id]');
  const links    = $$('.nav__link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => {
          const active = l.getAttribute('href') === `#${en.target.id}`;
          l.classList.toggle('active', active);
        });
      }
    });
  }, { threshold:0.25, rootMargin:'-80px 0px 0px 0px' });

  sections.forEach(s => obs.observe(s));
}

// ══════════════════════════════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════════════════════════════
function initBTT() {
  const btn = $('#btt');
  if (!btn) return;
  window.addEventListener('scroll', () => { btn.hidden = window.scrollY < 500; }, { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  spawnParticles();
  initStats();
  initChemTabs();
  renderCompChips();
  renderCompositions();
  renderAZNav();
  renderDefinitions();
  initSearch();
  initNav();
  initModal();
  initBTT();

  $('#themeBtn')?.addEventListener('click', toggleTheme);

  console.log('%c🔥 PyroData CZ', 'color:#ff6b00;font-size:22px;font-weight:900;');
  console.log('%cŠkolní projekt 2IT · Filip Czaban · Vanilla JS/CSS/HTML', 'color:#ff9500');
});