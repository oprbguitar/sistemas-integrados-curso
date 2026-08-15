/* ============================================================
   SIG Lab — Router, tema, búsqueda y persistencia
   Sin dependencias. Módulos ES nativos.
   ============================================================ */

import { panel } from './views/panel.js';
import { programa, ruta } from './views/programa.js';
import { integracion, normas, documental } from './views/normas.js';
import { procesos, riesgos, auditoria, medicion, casos } from './views/practica.js';
import { certificacion, memoria, recursos } from './views/recursos.js';
import { campo } from './views/campo.js';

import { MODULOS, RUTA, CAMBIOS_2026 } from './data/curso.js';
import { COMUNES, PROPIAS, FALSOS_AMIGOS } from './data/normas.js';
import { CASOS, REGLAS, FORMULAS, GLOSARIO, PREGUNTAS_ORO } from './data/practica.js';
import { PROVEEDORES, ESQUEMAS } from './data/certificacion.js';
import { HOTSPOTS, INTERACTIVOS } from './data/hotspots.js';
import { FICHAS, EVIDENCIA } from './data/campo.js';

/* ------------------------------------------------------------------
   Rutas
   ------------------------------------------------------------------ */
const ROUTES = {
  panel:         { t: 'Panel', g: 'Empezar', render: panel },
  programa:      { t: 'El programa', g: 'Empezar', render: programa },
  ruta:          { t: 'Ruta de estudio', g: 'Empezar', render: ruta },
  integracion:   { t: 'Anexo SL e integración', g: 'Núcleo técnico', render: integracion },
  normas:        { t: 'Las normas', g: 'Núcleo técnico', render: normas },
  procesos:      { t: 'Gestión por procesos', g: 'Núcleo técnico', render: procesos },
  riesgos:       { t: 'Riesgo y peligros', g: 'Núcleo técnico', render: riesgos },
  documental:    { t: 'Información documentada', g: 'Núcleo técnico', render: documental },
  auditoria:     { t: 'Auditoría interna', g: 'Núcleo técnico', render: auditoria },
  medicion:      { t: 'Medición, mejora y ESG', g: 'Núcleo técnico', render: medicion },
  casos:         { t: 'Casuística aplicada', g: 'Aplicar', render: casos },
  campo:         { t: 'Modo campo', g: 'Aplicar', render: campo },
  certificacion: { t: 'Rutas de certificación', g: 'Aplicar', render: certificacion },
  memoria:       { t: 'Ayuda memoria', g: 'Aplicar', render: memoria },
  recursos:      { t: 'Fuentes y recursos', g: 'Aplicar', render: recursos }
};
const ORDER = Object.keys(ROUTES);
const DEFAULT = 'panel';

/* ------------------------------------------------------------------
   Persistencia
   ------------------------------------------------------------------ */
const KEY = 'siglab.v1';
const store = {
  read() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } },
  write(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* modo privado */ } },
  get(k, d) { const v = this.read()[k]; return v === undefined ? d : v; },
  set(k, v) { const o = this.read(); o[k] = v; this.write(o); }
};

/* ------------------------------------------------------------------
   Tema
   ------------------------------------------------------------------ */
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);
  const btn = document.getElementById('theme-btn');
  if (btn) {
    const label = { auto: 'Auto', light: 'Claro', dark: 'Oscuro' }[mode];
    btn.setAttribute('aria-label', `Tema: ${label}. Pulsa para cambiar.`);
    btn.title = `Tema: ${label}`;
    btn.querySelector('[data-theme-label]').textContent = label;
  }
}
function cycleTheme() {
  const cur = store.get('theme', 'auto');
  const next = { auto: 'light', light: 'dark', dark: 'auto' }[cur];
  store.set('theme', next);
  applyTheme(next);
}

/* ------------------------------------------------------------------
   Navegación lateral
   ------------------------------------------------------------------ */
function buildNav() {
  const groups = {};
  ORDER.forEach((k, i) => { (groups[ROUTES[k].g] ||= []).push([k, i + 1]); });
  return Object.entries(groups).map(([g, items]) => `
    <div class="navgroup">
      <div class="navgroup-label">${g}</div>
      ${items.map(([k, n]) => `<a class="navlink" href="#/${k}" data-nav="${k}">
        <span class="navlink-num">${String(n).padStart(2, '0')}</span><span>${ROUTES[k].t}</span></a>`).join('')}
    </div>`).join('');
}

function markActive(route) {
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === route) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

/* ------------------------------------------------------------------
   Índice de búsqueda
   ------------------------------------------------------------------ */
const INDEX = [];
/* Vista donde vive cada diagrama interactivo */
const DG_VIEW = {
  annexSL: 'panel', pdcaLoop: 'panel', normsTimeline: 'panel', correspondenceGrid: 'integracion',
  integrationLevels: 'integracion', maturityRadar: 'integracion', stakeholderQuadrant: 'integracion',
  processMap: 'procesos', turtle: 'procesos', riskMatrix: 'riesgos', controlHierarchy: 'riesgos',
  bowtie: 'riesgos', lifecycle: 'riesgos', docPyramid: 'documental', auditCycle: 'auditoria',
  ncAnatomy: 'auditoria', costIceberg: 'medicion', ganttImpl: 'ruta', certRoute: 'certificacion'
};
const strip = (s) => String(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const add = (t, c, v, extra = '') => INDEX.push({ t: strip(t), c: strip(c), v, key: strip(`${t} ${c} ${extra}`).toLowerCase() });

function buildIndex() {
  ORDER.forEach((k) => add(ROUTES[k].t, `Sección · ${ROUTES[k].g}`, k));
  MODULOS.forEach((m) => {
    add(`${m.n} — ${m.t}`, m.resumen, 'programa', m.temas.join(' '));
    m.temas.forEach((t) => add(t, `Temario · ${m.n}`, 'programa'));
    m.profundizacion.forEach((t) => add(t, `Profundización · ${m.n}`, 'programa'));
  });
  RUTA.forEach((r) => add(`${r.s} — ${r.t}`, r.meta, 'ruta', r.hacer.join(' ')));
  COMUNES.forEach((c) => add(`Cl. ${c.cl} — ${c.t}`, c.intent, 'normas', `${c.req} ${c.trampa} ${c.hallazgo}`));
  PROPIAS.forEach((c) => add(`Cl. ${c.cl} — ${c.t}`, `ISO ${c.norm} · ${c.intent}`, 'normas', `${c.req} ${c.trampa}`));
  FALSOS_AMIGOS.forEach(([t, d]) => add(t, `Vocabulario · ${strip(d)}`, 'memoria'));
  GLOSARIO.forEach(([t, d, n]) => add(t, `Glosario · ${d}`, 'memoria', n));
  FORMULAS.forEach((f) => add(f.n, `Fórmula · ${f.f}`, 'memoria', f.d));
  REGLAS.forEach((r) => add(r.t, `Regla dura · ${strip(r.d)}`, 'memoria'));
  PREGUNTAS_ORO.forEach((p) => add(p.p, `Pregunta de auditoría · ${p.porq}`, 'memoria'));
  CASOS.forEach((c) => add(c.t, `Caso · ${c.sector}`, 'casos', `${c.ctx} ${c.leccion}`));
  FICHAS.forEach((f) => {
    add(f.t, `Ficha de actuación ${f.n} · ${f.iso}`, 'campo', `${f.cuando} ${f.obj} ${f.falla}`);
    f.preguntar.forEach((q) => add(q.q, `Pregunta de campo · a ${q.a}`, 'campo'));
  });
  EVIDENCIA.forEach((e) => add(`Evidencia — ${e.t}`, `Fuerza de la evidencia · ${e.cl}`, 'campo', `débil media fuerte ${e.debil} ${e.media} ${e.fuerte}`));
  CAMBIOS_2026.forEach(([c, t, d]) => add(`${c} — ${t}`, `ISO 9001:2026 · ${strip(d)}`, 'programa'));
  PROVEEDORES.forEach((p) => add(p.n, `Proveedor · ${p.tipo}`, 'certificacion', p.of));
  ESQUEMAS.forEach((e) => add(e.n, `Esquema de registro · ${e.org}`, 'certificacion', e.normas));
  Object.entries(HOTSPOTS).forEach(([dg, keys]) =>
    Object.values(keys).forEach((h) => add(h.t, `Diagrama interactivo · ${h.n || ''}`, DG_VIEW[dg] || 'panel', h.d)));
  [['Diagrama de tortuga', 'procesos'], ['Mapa de procesos', 'procesos'], ['Matriz de riesgo 5×5', 'riesgos'],
   ['Jerarquía de controles', 'riesgos'], ['Análisis de corbatín', 'riesgos'], ['Perspectiva de ciclo de vida', 'riesgos'],
   ['Pirámide documental', 'documental'], ['Ciclo de auditoría', 'auditoria'], ['Anatomía de un hallazgo', 'auditoria'],
   ['Cronograma de implementación', 'ruta'], ['Radar de madurez', 'integracion'], ['Iceberg de costos', 'medicion'],
   ['Matriz de correspondencia', 'integracion'], ['Ruta de certificación', 'certificacion'],
   ['Cuadrante de partes interesadas', 'integracion'], ['Estructura Armonizada Anexo SL', 'integracion'],
   ['Ciclo PHVA', 'panel'], ['Línea de tiempo de las normas', 'panel'], ['Niveles de integración', 'integracion']
  ].forEach(([t, v]) => add(t, 'Diagrama', v));
}

function search(q) {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return INDEX
    .map((it) => {
      let score = 0;
      for (const t of terms) {
        const i = it.key.indexOf(t);
        if (i === -1) return null;
        score += i === 0 ? 12 : (it.t.toLowerCase().includes(t) ? 8 : 3);
      }
      return { ...it, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24);
}

/* ------------------------------------------------------------------
   Modal de búsqueda
   ------------------------------------------------------------------ */
let selIdx = 0;
function openSearch() {
  const m = document.getElementById('search-modal');
  m.hidden = false;
  const inp = m.querySelector('input');
  inp.value = ''; renderResults([]); inp.focus();
}
function closeSearch() { document.getElementById('search-modal').hidden = true; }

function renderResults(res) {
  const box = document.getElementById('search-results');
  selIdx = 0;
  if (!res.length) {
    box.innerHTML = '<div class="empty">Escribe para buscar cláusulas, términos, fórmulas, casos y diagramas.</div>';
    return;
  }
  box.innerHTML = res.map((r, i) => `<a class="result" href="#/${r.v}" data-i="${i}"${i === 0 ? ' data-sel="true"' : ''}>
    <div class="r-v">${ROUTES[r.v] ? ROUTES[r.v].t : r.v}</div>
    <div class="r-t">${r.t}</div>
    <div class="r-c">${r.c.length > 132 ? r.c.slice(0, 132) + '…' : r.c}</div></a>`).join('');
}

function moveSel(d) {
  const items = [...document.querySelectorAll('#search-results .result')];
  if (!items.length) return;
  items[selIdx]?.removeAttribute('data-sel');
  selIdx = (selIdx + d + items.length) % items.length;
  items[selIdx].setAttribute('data-sel', 'true');
  items[selIdx].scrollIntoView({ block: 'nearest' });
}

/* ------------------------------------------------------------------
   Diagramas interactivos: puntos activables y ampliación
   ------------------------------------------------------------------ */
function showHotspot(figure, node) {
  const dg = figure.dataset.dg, k = node.dataset.k;
  const info = HOTSPOTS[dg] && HOTSPOTS[dg][k];
  const panel = figure.querySelector('.dg-panel');
  if (!info || !panel) return;

  figure.querySelectorAll('.dg-hot[data-sel="true"]').forEach((n) => n.removeAttribute('data-sel'));
  node.setAttribute('data-sel', 'true');

  panel.innerHTML = `<div class="p-head">
      <span class="p-t">${info.t}</span>
      ${info.n ? `<span class="p-n">${info.n}</span>` : ''}
      <button class="p-close" data-act="close" aria-label="Cerrar el detalle">×</button>
    </div><p class="p-d">${info.d}</p>`;
  panel.hidden = false;
}

function closePanel(figure) {
  const panel = figure.querySelector('.dg-panel');
  if (panel) { panel.hidden = true; panel.innerHTML = ''; }
  figure.querySelectorAll('.dg-hot[data-sel="true"]').forEach((n) => n.removeAttribute('data-sel'));
}

function toggleZoom(figure, on) {
  const scrim = document.getElementById('dg-scrim');
  if (on) { figure.dataset.zoom = '1'; scrim.hidden = false; }
  else { delete figure.dataset.zoom; scrim.hidden = true; }
  const btn = figure.querySelector('[data-act="zoom"]');
  if (btn) btn.textContent = on ? 'Cerrar' : 'Ampliar';
}

function initDiagrams() {
  const main = document.getElementById('main');

  main.addEventListener('click', (e) => {
    const zoomBtn = e.target.closest('[data-act="zoom"]');
    if (zoomBtn) {
      const fg = zoomBtn.closest('figure.diagram');
      toggleZoom(fg, fg.dataset.zoom !== '1');
      return;
    }
    if (e.target.closest('[data-act="close"]')) {
      closePanel(e.target.closest('figure.diagram'));
      return;
    }
    const node = e.target.closest('.dg-hot');
    if (node) {
      const fg = node.closest('figure.diagram');
      if (node.getAttribute('data-sel') === 'true') closePanel(fg);
      else showHotspot(fg, node);
    }
  });

  main.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const node = e.target.closest('.dg-hot');
    if (!node) return;
    e.preventDefault();
    showHotspot(node.closest('figure.diagram'), node);
  });

  document.getElementById('dg-scrim').addEventListener('click', () => {
    document.querySelectorAll('figure.diagram[data-zoom="1"]').forEach((f) => toggleZoom(f, false));
  });
}

/* ------------------------------------------------------------------
   Checklists persistentes
   ------------------------------------------------------------------ */
function hydrateChecklists() {
  document.querySelectorAll('[data-ck]').forEach((box) => {
    const id = box.dataset.ck;
    const saved = store.get(`ck.${id}`, []);
    const inputs = [...box.querySelectorAll('input[type="checkbox"]')];
    inputs.forEach((inp, i) => { inp.checked = saved.includes(i); });
    const prog = box.querySelector('[data-prog]');
    const update = () => {
      const idxs = inputs.map((inp, i) => (inp.checked ? i : -1)).filter((i) => i >= 0);
      store.set(`ck.${id}`, idxs);
      if (prog) prog.textContent = `${idxs.length} / ${inputs.length}`;
    };
    inputs.forEach((inp) => inp.addEventListener('change', update));
    update();
  });
}

/* ------------------------------------------------------------------
   Render
   ------------------------------------------------------------------ */
function currentRoute() {
  const h = location.hash.replace(/^#\/?/, '').split('?')[0];
  return ROUTES[h] ? h : DEFAULT;
}

function render() {
  const route = currentRoute();
  const main = document.getElementById('main');
  main.innerHTML = `<div class="view">${ROUTES[route].render()}</div>${footer()}`;
  markActive(route);
  document.getElementById('dg-scrim').hidden = true;
  hydrateChecklists();
  document.title = `${ROUTES[route].t} · SIG Lab — Sistemas Integrados de Gestión`;
  document.querySelector('.sidebar')?.setAttribute('data-open', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function footer() {
  return `<footer class="foot"><div class="foot-grid">
    <div>
      <h5>SIG Lab</h5>
      <p>Guía de estudio avanzada y ayuda memoria de Sistemas Integrados de Gestión —
      ISO 9001, ISO 14001, ISO 45001 e ISO 37001. Material educativo independiente,
      no afiliado a ningún organismo de certificación.</p>
      <p class="mb0">Actualizado a agosto de 2026 · Licencia de Estudio SIG Lab</p>
    </div>
    <div>
      <h5>Secciones</h5>
      ${ORDER.slice(0, 7).map((k) => `<a href="#/${k}">${ROUTES[k].t}</a>`).join('')}
    </div>
    <div>
      <h5>Fuentes</h5>
      <a href="https://www.iso.org/" target="_blank" rel="noopener noreferrer">ISO ↗</a>
      <a href="https://www.gob.pe/inacal" target="_blank" rel="noopener noreferrer">INACAL ↗</a>
      <a href="https://capacitaciones.bureauveritas.com.pe/online/programa-de-especializacion-en-sistemas-integrados-de-gestion" target="_blank" rel="noopener noreferrer">Programa BV ↗</a>
      <a href="https://github.com/oprbguitar/sistemas-integrados-curso" target="_blank" rel="noopener noreferrer">Repositorio ↗</a>
    </div>
  </div></footer>`;
}

/* ------------------------------------------------------------------
   Arranque
   ------------------------------------------------------------------ */
function init() {
  applyTheme(store.get('theme', 'auto'));
  document.getElementById('nav').innerHTML = buildNav();
  buildIndex();
  render();
  initDiagrams();

  window.addEventListener('hashchange', render);

  document.getElementById('theme-btn').addEventListener('click', cycleTheme);

  const sidebar = document.querySelector('.sidebar');
  document.getElementById('nav-toggle').addEventListener('click', () => {
    sidebar.setAttribute('data-open', sidebar.getAttribute('data-open') === 'true' ? 'false' : 'true');
  });

  // Búsqueda
  document.getElementById('search-btn').addEventListener('click', openSearch);
  const modal = document.getElementById('search-modal');
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
  modal.querySelector('input').addEventListener('input', (e) => renderResults(search(e.target.value)));
  modal.addEventListener('click', (e) => { if (e.target.closest('.result')) closeSearch(); });

  document.addEventListener('keydown', (e) => {
    const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if ((e.key === '/' && !inField) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault(); openSearch(); return;
    }
    if (modal.hidden) {
      if (e.key === 'Escape') {
        document.querySelectorAll('figure.diagram[data-zoom="1"]').forEach((f) => toggleZoom(f, false));
        document.querySelectorAll('figure.diagram').forEach((f) => closePanel(f));
      }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); closeSearch(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
    if (e.key === 'Enter') {
      const sel = document.querySelector('#search-results .result[data-sel="true"]');
      if (sel) { e.preventDefault(); location.hash = sel.getAttribute('href'); closeSearch(); }
    }
  });

  // Volver arriba
  const fab = document.getElementById('fab');
  fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const onScroll = () => fab.setAttribute('data-show', window.scrollY > 640 ? 'true' : 'false');
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
