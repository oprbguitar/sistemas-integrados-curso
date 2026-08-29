/* ============================================================
   SIG Lab — Motor de diagramas SVG
   ------------------------------------------------------------
   Reglas heredadas del sistema editorial:
   · Toda coordenada, ancho y separacion es multiplo de 4.
   · Filetes de 1px. Sin sombras. Radio maximo 10px.
   · Un solo acento focal por diagrama (1-2 elementos).
   · Cada SVG lleva <title> y <desc> con aria-labelledby resuelto.
   · Cero dependencias externas, cero JavaScript embebido.
   ============================================================ */

let _uid = 0;
const uid = (p) => `${p}-${++_uid}`;

/** Envoltura accesible estandar. */
function frame(w, h, title, desc, body, opts = {}) {
  const id = uid('dg');
  const cls = opts.class ? ` ${opts.class}` : '';
  return `<svg class="dgsvg${cls}" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"
     preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="${id}-t ${id}-d"
     xmlns="http://www.w3.org/2000/svg">
  <title id="${id}-t">${title}</title>
  <desc id="${id}-d">${desc}</desc>
  ${body}
</svg>`;
}

/** Rectangulo con filete. */
const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 8}"
  fill="${o.fill || 'var(--paper-2)'}" stroke="${o.stroke || 'var(--hairline)'}"
  stroke-width="${o.sw || 1}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;

/** Texto. `a` = anchor, `c` = clase. */
const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}"
  class="${o.c || 'd-label'}"${o.fill || o.w || o.size ? ` style="${o.fill ? `fill:${o.fill};` : ''}${o.w ? `font-weight:${o.w};` : ''}${o.size ? `font-size:${o.size}px;` : ''}"` : ''}>${s}</text>`;

/** Texto multilinea centrado verticalmente en un bloque. */
function lines(x, y, arr, o = {}) {
  const lh = o.lh || 14;
  return arr.map((s, i) => txt(x, y + i * lh, s, o)).join('\n  ');
}

/** Envuelve un nodo en un grupo interactivo (clic / Enter / Espacio).
    `r` = [x, y, w, h] del area sensible: sin ella, los huecos entre formas
    no responden al clic y el nodo parece roto. */
const hot = (k, body, label, r) => {
  const hit = r ? `<rect class="dg-hit" x="${r[0]}" y="${r[1]}" width="${r[2]}" height="${r[3]}" rx="8" fill="transparent"/>` : '';
  return `<g class="dg-hot" data-k="${k}" tabindex="0" role="button" aria-label="${label.replace(/"/g, '&quot;')}">${hit}${body}</g>`;
};

/** Marcador de flecha reutilizable, uno por diagrama. */
function arrowDefs(id, color = 'var(--muted-2)') {
  return `<defs><marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6"
    orient="auto-start-reverse"><path d="M0 0 L8 4 L0 8 z" fill="${color}"/></marker></defs>`;
}

const arrow = (d, mid, o = {}) => `<path d="${d}" fill="none" stroke="${o.stroke || 'var(--muted-2)'}"
  stroke-width="${o.sw || 1}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} marker-end="url(#${mid})"/>`;

/* Bandas solidas y su tinta obligatoria. Nunca uses una sin la otra:
   en claro la banda es oscura con tinta blanca; en oscuro se invierte. */
const S = {
  q:   { bg: 'var(--solid-9001)',  ink: 'var(--on-9001)'  },
  e:   { bg: 'var(--solid-14001)', ink: 'var(--on-14001)' },
  s:   { bg: 'var(--solid-45001)', ink: 'var(--on-45001)' },
  a:   { bg: 'var(--solid-37001)', ink: 'var(--on-37001)' },
  acc: { bg: 'var(--solid-accent)', ink: 'var(--on-accent)' }
};

/* Tinta de TEXTO. Un color de trazo nunca se usa directamente como texto:
   se pasa por ink() para obtener su variante legible. */
const INK = {
  'var(--c-9001)':  'var(--c-9001-ink)',
  'var(--c-14001)': 'var(--c-14001-ink)',
  'var(--c-45001)': 'var(--c-45001-ink)',
  'var(--c-37001)': 'var(--c-37001-ink)',
  'var(--c-esg)':   'var(--c-esg-ink)',
  'var(--accent)':  'var(--accent-ink)'
};
const ink = (c) => INK[c] || c;

/* Paleta semantica accesible desde JS */
const C = {
  q: 'var(--c-9001)',  qw: 'var(--c-9001-wash)',
  e: 'var(--c-14001)', ew: 'var(--c-14001-wash)',
  s: 'var(--c-45001)', sw: 'var(--c-45001-wash)',
  a: 'var(--c-37001)', aw: 'var(--c-37001-wash)',
  g: 'var(--c-esg)',   gw: 'var(--c-esg-wash)',
  acc: 'var(--accent)', accw: 'var(--accent-wash)', acci: 'var(--accent-ink)',
  hair: 'var(--hairline)', ink: 'var(--ink)', muted: 'var(--muted)', paper: 'var(--paper-2)'
};

/* ════════════════════════════════════════════════════════════
   01 · Estructura Armonizada (Anexo SL) — pila de capas
   ════════════════════════════════════════════════════════════ */
export function annexSL() {
  const W = 800, rowH = 44, x = 168, w = 464;
  const rows = [
    ['1', 'Objeto y campo de aplicación', 'no auditable', false],
    ['2', 'Referencias normativas', 'no auditable', false],
    ['3', 'Términos y definiciones', 'no auditable', false],
    ['4', 'Contexto de la organización', 'P', true],
    ['5', 'Liderazgo', 'P', true],
    ['6', 'Planificación', 'P', true],
    ['7', 'Apoyo', 'H', true],
    ['8', 'Operación', 'H', true],
    ['9', 'Evaluación del desempeño', 'V', true],
    ['10', 'Mejora', 'A', true]
  ];
  const H = 72 + rows.length * (rowH + 4) + 40;
  let b = arrowDefs('asl-a', C.acc);

  b += txt(24, 32, 'Estructura Armonizada (HS) — Anexo SL', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'tronco común de TODAS las normas ISO de sistemas de gestión', { a: 'start', c: 'd-anno' });

  rows.forEach(([n, name, tag, aud], i) => {
    const y = 72 + i * (rowH + 4);
    const fill = aud ? C.paper : 'var(--paper-3)';
    const stroke = aud ? C.hair : C.hair;
    let g = box(x, y, w, rowH, { fill, stroke, r: 8, dash: aud ? null : '3 3' });
    g += txt(x + 20, y + 27, `${n}.`, { a: 'end', c: 'd-sub', fill: aud ? C.acci : 'var(--muted-2)' });
    g += txt(x + 28, y + 27, name, { a: 'start', c: 'd-label', fill: aud ? 'var(--ink)' : 'var(--muted)' });
    b += hot(n, g, `Capítulo ${n}: ${name}`, [x - 8, y, w + 72, rowH]);

    // Columna PHVA a la derecha
    if (aud) {
      const pc = { P: S.q, H: S.s, V: S.e, A: S.a }[tag];
      b += box(x + w + 16, y + 12, 20, 20, { fill: pc.bg, stroke: 'none', r: 4 });
      b += txt(x + w + 26, y + 26, tag, { c: 'd-sub', fill: pc.ink, w: 700, size: 11 });
    } else {
      b += txt(x + w + 16, y + 27, tag, { a: 'start', c: 'd-sub' });
    }
  });

  // Llave izquierda: capitulos auditables
  const yA = 72 + 3 * (rowH + 4), yB = 72 + 10 * (rowH + 4) - 4;
  b += `<path d="M${x - 40} ${yA} h-16 V${yB} h16" class="d-accent-s"/>`;
  b += `<text transform="translate(${x - 64},${(yA + yB) / 2}) rotate(-90)" text-anchor="middle" class="d-sub" fill="${C.acci}">7 CAPÍTULOS AUDITABLES</text>`;

  b += txt(24, H - 16, 'Un requisito escrito una sola vez sirve a 9001 + 14001 + 45001 + 37001 simultáneamente.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Estructura Armonizada del Anexo SL',
    'Pila de los diez capítulos de la Estructura Armonizada ISO. Los capítulos 1 a 3 son no auditables; del 4 al 10 son auditables y se mapean al ciclo Planificar-Hacer-Verificar-Actuar.', b);
}

/* ════════════════════════════════════════════════════════════
   02 · Ciclo PHVA mapeado a cláusulas
   ════════════════════════════════════════════════════════════ */
export function pdcaLoop() {
  const W = 720, H = 500, cx = 300, cy = 268, R = 152;
  let b = arrowDefs('pdca-a', C.muted);

  b += txt(24, 32, 'El ciclo PHVA sobre la Estructura Armonizada', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'Deming aplicado: cada cuadrante contiene capítulos completos, no fragmentos', { a: 'start', c: 'd-anno' });

  // Anillo de contexto
  b += `<circle cx="${cx}" cy="${cy}" r="${R + 36}" fill="none" stroke="${C.hair}" stroke-width="1" stroke-dasharray="4 4"/>`;
  b += txt(cx, cy - R - 44, 'CAP. 4 · CONTEXTO Y PARTES INTERESADAS', { c: 'd-sub', fill: C.acci, w: 600 });

  const quads = [
    { t: 'PLANIFICAR', cl: '4 · 5 · 6', d: 'Contexto, liderazgo,\nriesgos y objetivos', col: C.q, a0: -90 },
    { t: 'HACER', cl: '7 · 8', d: 'Recursos, competencia,\ncontrol operacional', col: C.s, a0: 0 },
    { t: 'VERIFICAR', cl: '9', d: 'Seguimiento, auditoría,\nrevisión por la dirección', col: C.e, a0: 90 },
    { t: 'ACTUAR', cl: '10', d: 'No conformidad,\nacción correctiva, mejora', col: C.a, a0: 180 }
  ];

  quads.forEach((q, i) => {
    const a0 = (q.a0 * Math.PI) / 180, a1 = a0 + Math.PI / 2;
    const gap = 0.045;
    const x0 = cx + R * Math.cos(a0 + gap), y0 = cy + R * Math.sin(a0 + gap);
    const x1 = cx + R * Math.cos(a1 - gap), y1 = cy + R * Math.sin(a1 - gap);
    const ri = R - 52;
    const x2 = cx + ri * Math.cos(a1 - gap), y2 = cy + ri * Math.sin(a1 - gap);
    const x3 = cx + ri * Math.cos(a0 + gap), y3 = cy + ri * Math.sin(a0 + gap);
    let g = `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}
      L${x2.toFixed(1)} ${y2.toFixed(1)} A${ri} ${ri} 0 0 0 ${x3.toFixed(1)} ${y3.toFixed(1)} Z"
      fill="${q.col}" fill-opacity="0.14" stroke="${q.col}" stroke-width="1"/>`;

    const am = a0 + Math.PI / 4, rm = R - 26;
    const mx = cx + rm * Math.cos(am), my = cy + rm * Math.sin(am);
    g += txt(mx, my - 2, q.t, { c: 'd-label', fill: ink(q.col), w: 700, size: 11 });
    g += txt(mx, my + 14, q.cl, { c: 'd-sub', fill: ink(q.col) });
    b += hot(q.t[0], g, `${q.t}, capítulos ${q.cl}`);

    // Leyenda lateral
    const ly = 116 + i * 84;
    b += box(504, ly, 4, 60, { fill: q.col, stroke: 'none', r: 2 });
    b += txt(520, ly + 14, q.t, { a: 'start', c: 'd-label', fill: ink(q.col), w: 700, size: 11 });
    b += lines(520, ly + 32, q.d.split('\n'), { a: 'start', c: 'd-sub', lh: 14 });
  });

  // Núcleo
  let core = `<circle cx="${cx}" cy="${cy}" r="${R - 60}" fill="var(--paper-2)" stroke="${C.hair}"/>`;
  core += txt(cx, cy - 8, 'MEJORA', { c: 'd-label', fill: C.acci, w: 700, size: 13 });
  core += txt(cx, cy + 10, 'CONTINUA', { c: 'd-label', fill: C.acci, w: 700, size: 13 });
  core += txt(cx, cy + 28, 'una sola vuelta', { c: 'd-anno', size: 11 });
  b += hot('core', core, 'Mejora continua: una sola vuelta');

  // Flecha de giro
  b += `<path d="M${cx + R + 16} ${cy - 24} A${R + 16} ${R + 16} 0 0 1 ${cx + R + 4} ${cy + 40}"
    fill="none" stroke="${C.acc}" stroke-width="1.5" marker-end="url(#pdca-a)"/>`;

  b += txt(24, H - 16, 'Error frecuente: auditar el cap. 9 sin haber cerrado el cap. 6 — se verifica contra objetivos que nunca se planificaron.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Ciclo PHVA mapeado a los capítulos de la Estructura Armonizada',
    'Rueda dividida en cuatro cuadrantes: Planificar abarca los capítulos 4, 5 y 6; Hacer los capítulos 7 y 8; Verificar el capítulo 9; Actuar el capítulo 10. El núcleo es la mejora continua y el anillo exterior el contexto.', b);
}

/* ════════════════════════════════════════════════════════════
   03 · Línea de tiempo de las normas
   ════════════════════════════════════════════════════════════ */
export function normsTimeline() {
  const W = 900, H = 320, y0 = 168, x0 = 64, x1 = 848;
  const marks = [
    { x: 0.00, y: 'ISO 9001', s: '1987', d: 'Nace la certificación\nde calidad', col: C.q, up: true },
    { x: 0.14, y: 'BS 8800', s: '1996', d: 'Primer estándar SST', col: C.s, up: false },
    { x: 0.24, y: 'ISO 14001', s: '1996', d: 'Gestión ambiental', col: C.e, up: true },
    { x: 0.34, y: 'OHSAS 18001', s: '1999', d: 'De facto en SST', col: C.s, up: false },
    { x: 0.52, y: 'Anexo SL', s: '2012', d: 'Estructura común:\nnace el SIG real', col: C.acc, up: true, hot: true },
    { x: 0.62, y: '9001 · 14001', s: '2015', d: 'Riesgo, contexto,\nciclo de vida', col: C.q, up: false },
    { x: 0.70, y: 'ISO 37001', s: '2016', d: 'Antisoborno', col: C.a, up: true },
    { x: 0.78, y: 'ISO 45001', s: '2018', d: 'Sustituye OHSAS\n(migración 2021)', col: C.s, up: false },
    { x: 0.88, y: 'Enmienda 1', s: '2024', d: 'Cambio climático\nen 4.1 y 4.2', col: C.g, up: true, hot: true },
    { x: 0.98, y: '9001:2026', s: '2026', d: 'Cultura de calidad,\nética, resiliencia', col: C.acc, up: false, hot: true }
  ];
  let b = arrowDefs('tl-a', C.muted);

  b += txt(24, 32, 'Cuarenta años de sistemas de gestión', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'la integración no fue un accidente: fue una decisión de arquitectura en 2012', { a: 'start', c: 'd-anno' });

  b += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${C.hair}" stroke-width="1"/>`;
  b += arrow(`M${x1 - 24} ${y0} H${x1}`, 'tl-a');

  marks.forEach((m, mi) => {
    const x = Math.round(x0 + m.x * (x1 - x0 - 32));
    const hk = { 4: 'm4', 8: 'm8', 9: 'm9' }[mi];
    let g = '';
    const dir = m.up ? -1 : 1;
    const stem = m.up ? 40 : 36;
    g += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + dir * stem}" stroke="${m.hot ? C.acc : C.hair}" stroke-width="1"/>`;
    g += `<circle cx="${x}" cy="${y0}" r="${m.hot ? 5 : 3.5}" fill="${m.hot ? C.acc : m.col}" stroke="var(--paper-2)" stroke-width="1.5"/>`;
    const ty = y0 + dir * (stem + (m.up ? 8 : 16));
    g += txt(x, ty, m.y, { c: 'd-label', fill: ink(m.col), w: 650, size: 11.5 });
    g += txt(x, ty + dir * 0 + 14, m.s, { c: 'd-sub', fill: m.hot ? C.acci : 'var(--muted-2)' });
    g += lines(x, ty + 30, m.d.split('\n'), { c: 'd-sub', lh: 12, size: 9.5 });
    b += hk ? hot(hk, g, `${m.s} — ${m.y}`, [x - 40, m.up ? ty - 14 : y0 + 8, 80, 72]) : g;
  });

  b += txt(24, H - 12, 'Hoy: la Enmienda 1:2024 ya es auditable sin periodo de transición. La revisión 2026 sí lo tendrá.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Línea de tiempo de la evolución de las normas ISO de sistemas de gestión',
    'Cronología desde ISO 9001 en 1987 hasta la revisión prevista de ISO 9001 en 2026, destacando el Anexo SL de 2012 como punto de inflexión que hizo posible la integración real y la enmienda de cambio climático de 2024.', b);
}

/* ════════════════════════════════════════════════════════════
   04 · Mapa de procesos
   ════════════════════════════════════════════════════════════ */
export function processMap() {
  const W = 860, H = 440;
  let b = arrowDefs('pm-a', C.muted);

  b += txt(24, 32, 'Mapa de procesos de nivel 0', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'tres bandas, una sola dirección de flujo: del requisito del cliente a su satisfacción', { a: 'start', c: 'd-anno' });

  // Entradas y salidas
  b += box(24, 152, 96, 120, { fill: 'var(--paper-3)', r: 8 });
  b += lines(72, 200, ['PARTES', 'INTERESADAS'], { c: 'd-sub', lh: 13, fill: C.acci });
  b += lines(72, 230, ['Requisitos', 'y expectativas'], { c: 'd-sub', lh: 13 });

  b += box(740, 152, 96, 120, { fill: 'var(--paper-3)', r: 8 });
  b += lines(788, 200, ['PARTES', 'INTERESADAS'], { c: 'd-sub', lh: 13, fill: C.acci });
  b += lines(788, 230, ['Satisfacción', 'y desempeño'], { c: 'd-sub', lh: 13 });

  const bands = [
    { y: 80, h: 56, label: 'PROCESOS ESTRATÉGICOS', col: C.a, items: ['Dirección y contexto', 'Gestión del SIG', 'Mejora y revisión'] },
    { y: 152, h: 120, label: 'CADENA DE VALOR', col: C.acc, items: [] },
    { y: 288, h: 56, label: 'PROCESOS DE SOPORTE', col: C.e, items: ['RR. HH. y competencia', 'Compras y proveedores', 'Mantenimiento', 'TI y documentación'] }
  ];

  const bandKeys = ['est', 'val', 'sop'];
  bands.forEach((bd, bi) => {
    let g = box(136, bd.y, 588, bd.h, { fill: 'none', stroke: bd.col, r: 8, dash: '4 4' });
    g += txt(140, bd.y - 6, bd.label, { a: 'start', c: 'd-sub', fill: ink(bd.col), w: 600 });
    if (bd.items.length) {
      const cw = Math.floor(556 / bd.items.length);
      bd.items.forEach((it, i) => {
        const x = 152 + i * cw;
        g += box(x, bd.y + 12, cw - 16, bd.h - 24, { fill: 'var(--paper-2)', stroke: bd.col, r: 6 });
        g += txt(x + (cw - 16) / 2, bd.y + bd.h / 2 + 4, it, { c: 'd-label', size: 10.5 });
      });
    }
    b += hot(bandKeys[bi], g, bd.label, [136, bd.y - 14, 588, bd.h + 14]);
  });

  // Cadena de valor con flechas encadenadas
  const chain = ['Comercial', 'Diseño', 'Planificación', 'Producción', 'Entrega', 'Posventa'];
  const cw = 92;
  chain.forEach((c, i) => {
    const x = 152 + i * (cw + 8);
    b += box(x, 176, cw, 72, { fill: i === 3 ? C.accw : 'var(--paper-2)', stroke: i === 3 ? C.acc : C.hair, r: 6, sw: i === 3 ? 1.5 : 1 });
    b += txt(x + cw / 2, 208, c, { c: 'd-label', size: 11, fill: i === 3 ? C.acci : 'var(--ink)' });
    b += txt(x + cw / 2, 224, `P-0${i + 1}`, { c: 'd-sub', size: 9 });
    if (i < chain.length - 1) b += arrow(`M${x + cw} 212 H${x + cw + 6}`, 'pm-a');
  });

  b += arrow('M120 212 H148', 'pm-a', { stroke: C.acc });
  b += arrow('M724 212 H736', 'pm-a', { stroke: C.acc });

  // Retroalimentación
  b += `<path d="M788 280 V376 H72 V280" fill="none" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#pm-a)"/>`;
  b += hot('ret', txt(430, 372, 'retroalimentación · cap. 9 evaluación del desempeño', { c: 'd-anno', fill: C.acci }), 'La flecha de retroalimentación', [232, 360, 400, 20]);

  b += txt(24, H - 12, 'Regla del auditor: si un proceso del mapa no tiene dueño, indicador y riesgo asociado, no es un proceso — es un dibujo.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Mapa de procesos de nivel cero',
    'Diagrama de tres bandas: procesos estratégicos arriba, cadena de valor al centro con seis procesos encadenados desde comercial hasta posventa, y procesos de soporte abajo. El flujo entra desde las partes interesadas y retorna como retroalimentación.', b);
}

/* ════════════════════════════════════════════════════════════
   05 · SIPOC + Tortuga
   ════════════════════════════════════════════════════════════ */
export function turtle() {
  const W = 800, H = 400, px = 280, py = 148, pw = 240, ph = 104;
  let b = arrowDefs('tt-a', C.muted);

  b += txt(24, 32, 'Diagrama de tortuga — caracterización de un proceso', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'las cuatro patas responden las cuatro preguntas que todo auditor hace', { a: 'start', c: 'd-anno' });

  b += box(px, py, pw, ph, { fill: C.accw, stroke: C.acc, r: 10, sw: 1.5 });
  b += txt(px + pw / 2, py + 40, 'PROCESO', { c: 'd-label', fill: C.acci, w: 700, size: 13 });
  b += txt(px + pw / 2, py + 60, 'Actividades que transforman', { c: 'd-sub' });
  b += txt(px + pw / 2, py + 76, 'entradas en salidas', { c: 'd-sub' });

  // Entrada / salida
  b += box(48, py + 16, 176, 72, { r: 8 });
  b += txt(136, py + 40, 'ENTRADAS', { c: 'd-sub', fill: C.acci, w: 600 });
  b += lines(136, py + 58, ['Qué recibo y de quién', '(proveedor interno/externo)'], { c: 'd-sub', lh: 13 });
  b += arrow(`M224 ${py + 52} H${px - 8}`, 'tt-a', { stroke: C.acc });

  b += box(576, py + 16, 176, 72, { r: 8 });
  b += txt(664, py + 40, 'SALIDAS', { c: 'd-sub', fill: C.acci, w: 600 });
  b += lines(664, py + 58, ['Qué entrego y a quién', '(cliente interno/externo)'], { c: 'd-sub', lh: 13 });
  b += arrow(`M${px + pw + 8} ${py + 52} H568`, 'tt-a', { stroke: C.acc });

  // Cuatro patas
  const legs = [
    { x: 168, y: 60, t: '¿CON QUÉ?', d: ['Infraestructura,', 'equipos, software'], col: C.q },
    { x: 452, y: 60, t: '¿CON QUIÉN?', d: ['Competencia,', 'responsable, RACI'], col: C.s },
    { x: 168, y: 288, t: '¿CÓMO?', d: ['Procedimiento,', 'instructivo, criterios'], col: C.e },
    { x: 452, y: 288, t: '¿CUÁN BIEN?', d: ['Indicador, meta,', 'frecuencia, riesgo'], col: C.a }
  ];
  legs.forEach((l, li) => {
    let g = box(l.x, l.y, 180, 68, { r: 8, stroke: l.col });
    g += txt(l.x + 90, l.y + 24, l.t, { c: 'd-label', fill: ink(l.col), w: 700, size: 11 });
    g += lines(l.x + 90, l.y + 42, l.d, { c: 'd-sub', lh: 13 });
    b += hot(`p${li + 1}`, g, l.t, [l.x, l.y, 180, 68]);
    const fromY = l.y < py ? l.y + 68 : l.y;
    const toY = l.y < py ? py : py + ph;
    const fx = l.x + 90;
    const tx = l.x < px ? px + 56 : px + pw - 56;
    b += `<path d="M${fx} ${fromY} C${fx} ${(fromY + toY) / 2} ${tx} ${(fromY + toY) / 2} ${tx} ${toY}"
      fill="none" stroke="${l.col}" stroke-width="1" stroke-dasharray="3 3"/>`;
  });

  b += txt(24, H - 12, 'Si una pata queda vacía, la no conformidad ya está escrita: 4.4.1 no determina los criterios ni los métodos necesarios.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Diagrama de tortuga para caracterizar un proceso',
    'El proceso al centro recibe entradas por la izquierda y produce salidas por la derecha. Cuatro patas lo caracterizan: con qué recursos, con quién, cómo, y cuán bien se mide.', b);
}

/* ════════════════════════════════════════════════════════════
   06 · Matriz de riesgo 5x5
   ════════════════════════════════════════════════════════════ */
export function riskMatrix() {
  const W = 800, H = 452, x0 = 152, y0 = 72, cell = 56;
  let b = '';
  b += txt(24, 32, 'Matriz de evaluación de riesgo 5 × 5', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'severidad × probabilidad — la escala debe ser una sola en todo el SIG', { a: 'start', c: 'd-anno' });

  const sev = ['Catastrófica', 'Mayor', 'Moderada', 'Menor', 'Insignificante'];
  const prob = ['Muy baja', 'Baja', 'Media', 'Alta', 'Muy alta'];
  const scale = ['var(--r1)', 'var(--r2)', 'var(--r3)', 'var(--r4)', 'var(--r5)', 'var(--r6)', 'var(--r7)'];

  for (let r = 0; r < 5; r++) {
    const sevVal = 5 - r;
    for (let c = 0; c < 5; c++) {
      const probVal = c + 1;
      const score = sevVal * probVal;
      let idx = 0;
      if (score >= 20) idx = 6; else if (score >= 15) idx = 5; else if (score >= 10) idx = 4;
      else if (score >= 8) idx = 3; else if (score >= 5) idx = 2; else if (score >= 3) idx = 1;
      const x = x0 + c * cell, y = y0 + r * cell;
      const focal = score === 20 && sevVal === 5;
      b += box(x, y, cell - 4, cell - 4, { fill: scale[idx], stroke: focal ? C.acc : C.hair, r: 4, sw: focal ? 2 : 1 });
      b += txt(x + (cell - 4) / 2, y + 32, String(score), { c: 'd-label', size: 13, w: 600 });
    }
    b += txt(x0 - 12, y0 + r * cell + 32, sev[r], { a: 'end', c: 'd-sub' });
    b += txt(x0 - 12, y0 + r * cell + 44, `${sevVal}`, { a: 'end', c: 'd-sub', fill: 'var(--muted-2)' });
  }
  prob.forEach((p, c) => {
    b += txt(x0 + c * cell + 26, y0 + 5 * cell + 16, p, { c: 'd-sub' });
    b += txt(x0 + c * cell + 26, y0 + 5 * cell + 28, `${c + 1}`, { c: 'd-sub', fill: 'var(--muted-2)' });
  });

  b += `<text transform="translate(${x0 - 92},${y0 + 140}) rotate(-90)" text-anchor="middle" class="d-sub" fill="${C.acci}">SEVERIDAD →</text>`;
  b += txt(x0 + 140, y0 + 5 * cell + 56, 'PROBABILIDAD →', { c: 'd-sub', fill: C.acci });

  // Leyenda de bandas
  const leg = [
    ['1 – 4', 'Trivial / Aceptable', 'Mantener el control actual.', 'var(--r1)'],
    ['5 – 9', 'Tolerable', 'Verificar eficacia. Evaluar mejora.', 'var(--r3)'],
    ['10 – 14', 'Moderado', 'Acción con plazo y responsable.', 'var(--r4)'],
    ['15 – 19', 'Importante', 'No iniciar sin control. Plazo corto.', 'var(--r6)'],
    ['20 – 25', 'Intolerable', 'Detener. Riesgo no aceptable.', 'var(--r7)']
  ];
  b += box(464, y0 - 8, 312, 5 * 40 + 8, { fill: 'var(--paper-3)', r: 8 });
  leg.forEach((l, i) => {
    const y = y0 + i * 40;
    let g = box(480, y, 16, 16, { fill: l[3], stroke: C.hair, r: 3 });
    g += txt(504, y + 8, l[0], { a: 'start', c: 'd-sub', fill: 'var(--muted-2)' });
    g += txt(504, y + 22, l[1], { a: 'start', c: 'd-label', size: 11, w: 650 });
    g += txt(504, y + 34, l[2], { a: 'start', c: 'd-sub', size: 9 });
    b += hot(`b${i + 1}`, g, `Banda ${l[0]}: ${l[1]}`, [472, y - 4, 296, 40]);
  });

  b += hot('esc', txt(24, H - 12, 'D.S. 024-2016-EM invierte la escala (1 = más grave). Nunca mezcles ambas convenciones en un mismo IPERC.', { a: 'start', c: 'd-anno' }), 'La trampa de la escala invertida', [24, H - 26, W - 48, 22]);

  return frame(W, H, 'Matriz de riesgo de cinco por cinco',
    'Cuadrícula que cruza cinco niveles de severidad contra cinco de probabilidad, con el producto en cada celda y cinco bandas de decisión desde trivial hasta intolerable.', b);
}

/* ════════════════════════════════════════════════════════════
   07 · Jerarquía de controles
   ════════════════════════════════════════════════════════════ */
export function controlHierarchy() {
  const W = 900, H = 400;
  let b = '';
  b += txt(24, 32, 'Jerarquía de controles — ISO 45001 cl. 8.1.2', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'de arriba abajo: menos eficaz, más barato, más dependiente del comportamiento humano', { a: 'start', c: 'd-anno' });

  const levels = [
    { t: 'Eliminar', d: 'Suprimir el peligro. Rediseñar el proceso.', ex: 'Automatizar la tarea en altura', ef: 'Muy alta', col: C.e },
    { t: 'Sustituir', d: 'Reemplazar por algo menos peligroso.', ex: 'Solvente base agua en lugar de xileno', ef: 'Alta', col: C.e },
    { t: 'Controles de ingeniería', d: 'Aislar a la persona del peligro.', ex: 'Guarda enclavada, extracción localizada', ef: 'Media-alta', col: C.q },
    { t: 'Controles administrativos', d: 'Cambiar la forma de trabajar.', ex: 'Permiso de trabajo, rotación, señalización', ef: 'Media-baja', col: C.s },
    { t: 'EPP', d: 'Última barrera. Depende del uso correcto.', ex: 'Arnés, respirador, protección auditiva', ef: 'Baja', col: 'var(--risk)' }
  ];

  const topW = 216, botW = 560, cx = 320, rowH = 56, y0 = 76;
  levels.forEach((l, i) => {
    const wTop = topW + ((botW - topW) * i) / levels.length;
    const wBot = topW + ((botW - topW) * (i + 1)) / levels.length;
    const y = y0 + i * (rowH + 4);
    let g = `<path d="M${(cx - wTop / 2).toFixed(0)} ${y} H${(cx + wTop / 2).toFixed(0)} L${(cx + wBot / 2).toFixed(0)} ${y + rowH} H${(cx - wBot / 2).toFixed(0)} Z"
      fill="${l.col}" fill-opacity="${0.2 - i * 0.02}" stroke="${l.col}" stroke-width="1"/>`;
    g += txt(cx, y + 24, l.t, { c: 'd-label', fill: ink(l.col), w: 700, size: 12 });
    g += txt(cx, y + 40, l.d, { c: 'd-sub', size: 9.5 });
    g += txt(616, y + 26, l.ex, { a: 'start', c: 'd-sub', size: 9.5 });
    g += txt(616, y + 38, `eficacia ${l.ef}`, { a: 'start', c: 'd-sub', size: 9, fill: 'var(--muted-2)' });
    b += hot(`h${i + 1}`, g, `Nivel ${i + 1}: ${l.t}`, [24, y, W - 48, rowH]);
  });

  b += `<path d="M40 ${y0 + 8} V${y0 + 5 * (rowH + 4) - 12}" stroke="${C.acc}" stroke-width="1.5"/>`;
  b += `<path d="M36 ${y0 + 5 * (rowH + 4) - 20} l4 8 l4 -8" fill="none" stroke="${C.acc}" stroke-width="1.5"/>`;
  b += `<text transform="translate(28,${y0 + 140}) rotate(-90)" text-anchor="middle" class="d-sub" fill="${C.acci}">EFICACIA DECRECIENTE</text>`;
  b += `<text transform="translate(60,${y0 + 140}) rotate(-90)" text-anchor="middle" class="d-sub">DEPENDENCIA HUMANA CRECIENTE</text>`;

  b += txt(24, H - 12, 'Hallazgo clásico: el IPERC salta directo a EPP sin evidencia de haber evaluado los cuatro niveles superiores.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Jerarquía de controles de ISO 45001',
    'Embudo invertido de cinco niveles: eliminar, sustituir, controles de ingeniería, controles administrativos y equipo de protección personal, con eficacia decreciente y dependencia humana creciente hacia abajo.', b);
}

/* ════════════════════════════════════════════════════════════
   08 · Pirámide de información documentada
   ════════════════════════════════════════════════════════════ */
export function docPyramid() {
  const W = 820, H = 372;
  let b = '';
  b += txt(24, 32, 'Arquitectura de la información documentada', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'ISO ya no exige manual ni procedimientos: exige que la información necesaria exista y esté controlada', { a: 'start', c: 'd-anno' });

  const tiers = [
    { t: 'Política y manual del SIG', d: 'Nivel 1 · Qué queremos y hasta dónde llega', n: 'Opcional desde 2015', col: C.a },
    { t: 'Procedimientos e interacciones', d: 'Nivel 2 · Quién hace qué y en qué orden', n: 'Solo los necesarios', col: C.q },
    { t: 'Instructivos, planes y criterios', d: 'Nivel 3 · Cómo se hace exactamente', n: 'Nivel operativo', col: C.e },
    { t: 'Registros — evidencia objetiva', d: 'Nivel 4 · Prueba de que ocurrió', n: 'Lo único que audita un auditor', col: C.acc }
  ];

  const cx = 300, y0 = 76, rowH = 60;
  tiers.forEach((t, i) => {
    const wTop = 152 + i * 112, wBot = 152 + (i + 1) * 112;
    const y = y0 + i * (rowH + 4);
    const focal = i === 3;
    let g = `<path d="M${cx - wTop / 2} ${y} H${cx + wTop / 2} L${cx + wBot / 2} ${y + rowH} H${cx - wBot / 2} Z"
      fill="${t.col}" fill-opacity="${focal ? 0.2 : 0.1}" stroke="${t.col}" stroke-width="${focal ? 1.5 : 1}"/>`;
    g += txt(cx, y + 26, t.t, { c: 'd-label', fill: ink(t.col), w: 650, size: 11.5 });
    g += txt(cx, y + 42, t.d, { c: 'd-sub', size: 9.5 });
    g += txt(600, y + 34, t.n, { a: 'start', c: 'd-sub', size: 9.5, fill: focal ? C.acci : 'var(--muted)' });
    b += hot(`n${i + 1}`, g, `Nivel ${i + 1}: ${t.t}`, [24, y, W - 48, rowH]);
  });

  b += `<path d="M580 ${y0 + 3 * (rowH + 4) + 30} h-40" stroke="${C.acc}" stroke-width="1"/>`;

  b += txt(24, H - 44, 'Volumen documental: crece hacia abajo.   Autoridad de aprobación: crece hacia arriba.', { a: 'start', c: 'd-anno' });
  b += txt(24, H - 12, 'Integrar = un solo procedimiento de control de información documentada para las cuatro normas, no cuatro copias.', { a: 'start', c: 'd-anno', fill: C.acci });

  return frame(W, H, 'Pirámide de información documentada',
    'Cuatro niveles: política y manual, procedimientos, instructivos y registros. El volumen crece hacia abajo y la autoridad de aprobación hacia arriba. Los registros son el nivel que efectivamente se audita.', b);
}

/* ════════════════════════════════════════════════════════════
   09 · Ciclo de auditoría ISO 19011
   ════════════════════════════════════════════════════════════ */
export function auditCycle() {
  const W = 940, H = 348;
  let b = arrowDefs('ac-a', C.acc);
  b += txt(24, 32, 'Ciclo de auditoría — ISO 19011:2018 cl. 6', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'seis fases; el 70 % de los hallazgos débiles nacen de una fase 2 mal hecha', { a: 'start', c: 'd-anno' });

  const phases = [
    { n: '6.2', t: 'Inicio', d: ['Contacto con', 'el auditado', 'Viabilidad'], out: 'Confirmación' },
    { n: '6.3', t: 'Preparación', d: ['Revisión documental', 'Plan y lista', 'de verificación', 'Roles del equipo'], out: 'Plan de auditoría' },
    { n: '6.4', t: 'Ejecución', d: ['Reunión de apertura', 'Recopilar evidencia', 'Generar hallazgos'], out: 'Evidencia objetiva' },
    { n: '6.5', t: 'Informe', d: ['Redactar', 'Distribuir', 'Aprobar'], out: 'Informe de auditoría' },
    { n: '6.6', t: 'Cierre', d: ['Completar', 'y archivar', 'Lecciones'], out: 'Auditoría cerrada' },
    { n: '6.7', t: 'Seguimiento', d: ['Verificar la acción', 'correctiva', 'Comprobar eficacia'], out: 'Cierre de la NC' }
  ];

  const bw = 140, gap = 12, y = 84;
  phases.forEach((p, i) => {
    const x = 24 + i * (bw + gap);
    const focal = i === 2;
    let g = box(x, y, bw, 132, { fill: focal ? C.accw : 'var(--paper-2)', stroke: focal ? C.acc : C.hair, r: 8, sw: focal ? 1.5 : 1 });
    g += box(x, y, bw, 24, { fill: focal ? S.acc.bg : 'var(--paper-3)', stroke: 'none', r: 8 });
    g += `<rect x="${x}" y="${y + 16}" width="${bw}" height="8" fill="${focal ? S.acc.bg : 'var(--paper-3)'}"/>`;
    g += txt(x + bw / 2, y + 17, `${p.n} · ${p.t}`, { c: 'd-label', size: 10.5, w: 700, fill: focal ? S.acc.ink : 'var(--ink)' });
    g += lines(x + bw / 2, y + 46, p.d, { c: 'd-sub', lh: 14, size: 9.5 });
    g += `<line x1="${x + 12}" y1="${y + 104}" x2="${x + bw - 12}" y2="${y + 104}" stroke="${C.hair}"/>`;
    g += txt(x + bw / 2, y + 120, p.out, { c: 'd-sub', size: 9, fill: C.acci });
    b += hot(`f${i + 1}`, g, `Fase ${p.n}: ${p.t}`, [x, y, bw, 132]);
    if (i < phases.length - 1) b += arrow(`M${x + bw + 2} ${y + 66} H${x + bw + gap - 4}`, 'ac-a');
  });

  // Retorno al programa
  b += `<path d="M${24 + 5 * (bw + gap) + bw / 2} ${y + 140} V276 H${24 + bw / 2} V${y + 140}"
    fill="none" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#ac-a)"/>`;
  b += txt(450, 272, 'alimenta el programa de auditoría del año siguiente · cl. 5', { c: 'd-anno', fill: C.acci });

  b += txt(24, H - 12, 'La fase 6.7 pertenece al auditado, no al auditor: el auditor verifica eficacia, no ejecuta la corrección.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Ciclo de auditoría de ISO 19011',
    'Seis fases encadenadas: inicio, preparación, ejecución, informe, cierre y seguimiento, cada una con su salida característica. El resultado retroalimenta el programa de auditoría del período siguiente.', b);
}

/* ════════════════════════════════════════════════════════════
   10 · Ruta de certificación (carriles)
   ════════════════════════════════════════════════════════════ */
export function certRoute() {
  const W = 960, H = 400;
  let b = arrowDefs('cr-a', C.muted);
  b += txt(24, 32, 'Ruta a la certificación acreditada', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'tres actores, un solo camino — y un ciclo que se repite cada tres años', { a: 'start', c: 'd-anno' });

  const lanes = [
    { t: 'ORGANIZACIÓN', col: C.q, y: 84 },
    { t: 'ORGANISMO CERTIFICADOR', col: C.acc, y: 188 },
    { t: 'ORGANISMO DE ACREDITACIÓN', col: C.a, y: 292 }
  ];
  lanes.forEach((l) => {
    b += `<line x1="192" y1="${l.y - 8}" x2="940" y2="${l.y - 8}" stroke="${C.hair}"/>`;
    b += txt(184, l.y + 32, l.t, { a: 'end', c: 'd-sub', fill: ink(l.col), w: 600 });
  });
  b += `<line x1="192" y1="376" x2="940" y2="376" stroke="${C.hair}"/>`;
  b += `<line x1="192" y1="76" x2="192" y2="376" stroke="${C.hair}"/>`;

  const steps = [
    { x: 268, lane: 0, t: 'Diagnóstico', d: 'GAP analysis', m: 'Mes 0' },
    { x: 388, lane: 0, t: 'Implementar', d: '9-12 meses', m: 'Mes 1-10' },
    { x: 508, lane: 0, t: 'Auditoría interna', d: 'cl. 9.2', m: 'Mes 10' },
    { x: 628, lane: 0, t: 'Revisión dirección', d: 'cl. 9.3', m: 'Mes 11' },
    { x: 748, lane: 1, t: 'Etapa 1', d: 'Revisión documental\ny preparación', m: 'Mes 12' },
    { x: 868, lane: 1, t: 'Etapa 2', d: 'Auditoría in situ\nde eficacia', m: 'Mes 13' }
  ];
  steps.forEach((s, i) => {
    const y = lanes[s.lane].y;
    const focal = i === 5;
    let g = box(s.x - 52, y, 104, 64, { fill: focal ? C.accw : 'var(--paper-2)', stroke: focal ? C.acc : C.hair, r: 8, sw: focal ? 1.5 : 1 });
    g += txt(s.x, y + 22, s.t, { c: 'd-label', size: 10.5, w: 650 });
    g += lines(s.x, y + 38, s.d.split('\n'), { c: 'd-sub', lh: 11, size: 9 });
    g += txt(s.x, y - 14, s.m, { c: 'd-sub', size: 9, fill: 'var(--muted-2)' });
    b += hot(`s${i + 1}`, g, `${s.t} — ${s.m}`, [s.x - 52, y - 22, 104, 88]);
    if (i < steps.length - 1) {
      const n = steps[i + 1], ny = lanes[n.lane].y;
      if (n.lane === s.lane) b += arrow(`M${s.x + 54} ${y + 32} H${n.x - 56}`, 'cr-a');
      else b += arrow(`M${s.x} ${y + 66} V${ny - 16} H${n.x} V${ny - 4}`, 'cr-a', { dash: '3 3' });
    }
  });

  // Acreditación
  b += box(696, 292, 232, 64, { fill: C.aw, stroke: C.a, r: 8 });
  b += txt(812, 316, 'INACAL-DA · IAF MLA', { c: 'd-label', size: 10.5, fill: ink(C.a), w: 650 });
  b += txt(812, 332, 'acredita bajo ISO/IEC 17021-1', { c: 'd-sub', size: 9 });
  b += txt(812, 344, 'sin esto no vale fuera del país', { c: 'd-sub', size: 9, fill: ink(C.a) });
  b += arrow('M812 288 V264', 'cr-a', { stroke: C.a, dash: '3 3' });

  // Certificado + ciclo
  b += box(868 - 52, 84, 104, 64, { fill: 'var(--paper-2)', stroke: C.ok, r: 8 });
  b += txt(868, 108, 'CERTIFICADO', { c: 'd-label', size: 10.5, fill: C.ok, w: 700 });
  b += txt(868, 124, 'vigencia 3 años', { c: 'd-sub', size: 9 });
  b += txt(868, 136, 'Mes 14', { c: 'd-sub', size: 9, fill: 'var(--muted-2)' });
  b += arrow('M868 184 V156', 'cr-a', { stroke: C.ok });

  b += `<path d="M920 116 H944 V168 H360" fill="none" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#cr-a)"/>`;
  b += txt(376, 164, 'seguimiento anual · recertificación en el año 3', { a: 'start', c: 'd-anno', fill: C.acci, size: 10 });

  b += txt(24, H - 8, 'Un certificado sin logo de acreditación es válido comercialmente, pero no es reconocido en cadenas de suministro internacionales.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Ruta a la certificación acreditada en tres carriles',
    'Diagrama de carriles con la organización arriba, el organismo certificador al centro y el organismo de acreditación abajo. Desde el diagnóstico hasta el certificado con vigencia de tres años y ciclo de seguimiento anual.', b);
}

/* ════════════════════════════════════════════════════════════
   11 · Bowtie (corbatín)
   ════════════════════════════════════════════════════════════ */
export function bowtie() {
  const W = 900, H = 396, cx = 450, cy = 190;
  let b = arrowDefs('bt-a', C.muted);
  b += txt(24, 32, 'Análisis de corbatín — un solo peligro, dos mitades', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'a la izquierda se previene la causa; a la derecha se mitiga la consecuencia', { a: 'start', c: 'd-anno' });

  // Nudo
  b += `<path d="M${cx - 56} ${cy - 44} h112 v88 h-112 z" fill="${C.accw}" stroke="${C.acc}" stroke-width="1.5" rx="8"/>`;
  let knot = box(cx - 56, cy - 44, 112, 88, { fill: C.accw, stroke: C.acc, r: 10, sw: 1.5 });
  knot += txt(cx, cy - 16, 'EVENTO TOPE', { c: 'd-label', fill: C.acci, w: 700, size: 11 });
  knot += txt(cx, cy + 2, 'Pérdida de', { c: 'd-sub' });
  knot += txt(cx, cy + 16, 'control del peligro', { c: 'd-sub' });
  b += hot('knot', knot, 'Evento tope', [cx - 56, cy - 44, 112, 88]);
  b += txt(24, 70, 'PELIGRO ANALIZADO — trabajo en caliente en planta con solventes', { a: 'start', c: 'd-sub', fill: C.acci, w: 600 });

  const causes = [
    ['Chispa fuera de zona', 'Permiso de trabajo · Vigía de fuego'],
    ['Atmósfera inflamable', 'Medición LEL · Ventilación forzada'],
    ['Material combustible', 'Retiro 11 m · Mantas ignífugas']
  ];
  const conseqs = [
    ['Incendio de planta', 'Detección · Rociadores · Brigada'],
    ['Lesión de trabajador', 'Ruta de evacuación · Primeros auxilios'],
    ['Derrame y contaminación', 'Kit antiderrame · Contención secundaria']
  ];

  causes.forEach((c, i) => {
    const y = 106 + i * 72;
    b += box(24, y, 152, 44, { r: 6, stroke: 'var(--risk)' });
    b += txt(100, y + 20, c[0], { c: 'd-label', size: 10 });
    b += txt(100, y + 34, 'causa', { c: 'd-sub', size: 9, fill: 'var(--risk)' });
    // Barrera
    b += box(216, y + 4, 8, 36, { fill: C.e, stroke: 'none', r: 2 });
    b += txt(268, y + 16, c[1].split(' · ')[0], { a: 'start', c: 'd-sub', size: 9 });
    b += txt(268, y + 28, c[1].split(' · ')[1], { a: 'start', c: 'd-sub', size: 9 });
    b += arrow(`M176 ${y + 22} H212`, 'bt-a');
    b += `<path d="M228 ${y + 22} H${cx - 60}" stroke="${C.hair}" stroke-width="1"/>`;
  });

  conseqs.forEach((c, i) => {
    const y = 106 + i * 72;
    b += box(724, y, 152, 44, { r: 6, stroke: 'var(--risk)' });
    b += txt(800, y + 20, c[0], { c: 'd-label', size: 10 });
    b += txt(800, y + 34, 'consecuencia', { c: 'd-sub', size: 9, fill: 'var(--risk)' });
    b += box(676, y + 4, 8, 36, { fill: C.q, stroke: 'none', r: 2 });
    b += txt(632, y + 16, c[1].split(' · ')[0], { a: 'end', c: 'd-sub', size: 9 });
    b += txt(632, y + 28, c[1].split(' · ')[1], { a: 'end', c: 'd-sub', size: 9 });
    b += arrow(`M684 ${y + 22} H720`, 'bt-a');
    b += `<path d="M${cx + 60} ${y + 22} H672" stroke="${C.hair}" stroke-width="1"/>`;
  });

  b += hot('prev', txt(240, 348, 'BARRERAS PREVENTIVAS', { c: 'd-sub', fill: ink(C.e), w: 600 }) +
    txt(240, 364, 'reducen la probabilidad', { c: 'd-anno', size: 10 }), 'Barreras preventivas', [140, 336, 200, 36]);
  b += hot('mit', txt(660, 348, 'BARRERAS MITIGADORAS', { c: 'd-sub', fill: ink(C.q), w: 600 }) +
    txt(660, 364, 'reducen la severidad', { c: 'd-anno', size: 10 }), 'Barreras mitigadoras', [560, 336, 200, 36]);

  b += txt(24, H - 8, 'Cada barrera debe tener dueño, verificación y factor de degradación identificado. Barrera sin verificación = barrera de papel.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Diagrama de corbatín para análisis de riesgo',
    'Estructura de corbatín con tres causas a la izquierda separadas por barreras preventivas, un evento tope al centro, y tres consecuencias a la derecha separadas por barreras mitigadoras.', b);
}

/* ════════════════════════════════════════════════════════════
   12 · Niveles de integración
   ════════════════════════════════════════════════════════════ */
export function integrationLevels() {
  const W = 860, H = 356;
  let b = arrowDefs('il-a', C.acc);
  b += txt(24, 32, 'Los tres niveles de integración', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'adaptado de UNE 66177 — la madurez decide el nivel, no el entusiasmo', { a: 'start', c: 'd-anno' });

  const lv = [
    {
      t: 'BÁSICO', sub: 'Coordinación',
      col: C.q, sol: S.q, w: 232,
      items: ['Política integrada única', 'Un solo control documental', 'Auditorías internas combinadas', 'Sistemas operativos aún separados'],
      when: 'Madurez baja. Primera certificación.'
    },
    {
      t: 'MEDIO', sub: 'Integración de procesos',
      col: C.s, sol: S.s, w: 232,
      items: ['Mapa de procesos único', 'Objetivos e indicadores comunes', 'Gestión de riesgos unificada', 'Una revisión por la dirección'],
      when: 'Ya certificado en 2+ normas. Procesos definidos.'
    },
    {
      t: 'AVANZADO', sub: 'Integración estratégica',
      col: C.acc, sol: S.acc, w: 232,
      items: ['SIG = sistema de gestión del negocio', 'Riesgo integrado con ERM (ISO 31000)', 'Indicadores atados a la estrategia y ESG', 'Cultura, no cumplimiento'],
      when: 'Organización madura. Enfoque de excelencia.'
    }
  ];

  lv.forEach((l, i) => {
    const x = 24 + i * 280;
    const focal = i === 2;
    const y = 156 - i * 24;
    let g = box(x, y, l.w, 168, { fill: focal ? C.accw : 'var(--paper-2)', stroke: l.col, r: 10, sw: focal ? 1.5 : 1 });
    g += box(x, y, l.w, 28, { fill: l.sol.bg, stroke: 'none', r: 10 });
    g += `<rect x="${x}" y="${y + 18}" width="${l.w}" height="10" fill="${l.sol.bg}"/>`;
    g += txt(x + l.w / 2, y + 19, `${i + 1}. ${l.t} — ${l.sub}`, { c: 'd-label', size: 10.5, w: 700, fill: l.sol.ink });
    l.items.forEach((it, j) => {
      g += `<circle cx="${x + 16}" cy="${y + 48 + j * 22}" r="2" fill="${l.col}"/>`;
      g += txt(x + 26, y + 52 + j * 22, it, { a: 'start', c: 'd-sub', size: 9.5 });
    });
    g += `<line x1="${x + 12}" y1="${y + 138}" x2="${x + l.w - 12}" y2="${y + 138}" stroke="${C.hair}"/>`;
    g += txt(x + l.w / 2, y + 154, l.when, { c: 'd-sub', size: 9, fill: ink(l.col) });
    b += hot(`l${i + 1}`, g, `Nivel ${i + 1}: ${l.t}`, [x, y, l.w, 168]);
    if (i < 2) b += arrow(`M${x + l.w + 4} ${y + 84} H${x + l.w + 40}`, 'il-a');
  });

  b += txt(24, H - 32, 'Saltar del nivel 1 al 3 produce un sistema documentalmente elegante y operativamente muerto.', { a: 'start', c: 'd-anno' });
  b += txt(24, H - 12, 'El diagnóstico previo (contexto, madurez, complejidad, riesgo) es lo que determina el nivel alcanzable.', { a: 'start', c: 'd-anno', fill: C.acci });

  return frame(W, H, 'Los tres niveles de integración de sistemas de gestión',
    'Tres bloques escalonados ascendentes: nivel básico de coordinación, nivel medio de integración de procesos y nivel avanzado de integración estratégica, cada uno con sus elementos característicos y su condición de aplicabilidad.', b);
}

/* ════════════════════════════════════════════════════════════
   13 · Cuadrante de partes interesadas
   ════════════════════════════════════════════════════════════ */
export function stakeholderQuadrant() {
  const W = 800, H = 468, x0 = 120, y0 = 76, size = 320;
  let b = '';
  b += txt(24, 32, 'Partes interesadas — poder × interés', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'cl. 4.2 no pide una lista: pide una decisión sobre qué requisitos se vuelven obligaciones', { a: 'start', c: 'd-anno' });

  b += box(x0, y0, size, size, { fill: 'none', r: 8 });
  b += `<line x1="${x0 + size / 2}" y1="${y0}" x2="${x0 + size / 2}" y2="${y0 + size}" stroke="${C.hair}"/>`;
  b += `<line x1="${x0}" y1="${y0 + size / 2}" x2="${x0 + size}" y2="${y0 + size / 2}" stroke="${C.hair}"/>`;

  const q = [
    { qx: 0, qy: 0, t: 'MANTENER SATISFECHO', d: 'Alto poder · Bajo interés', ex: 'Accionistas · Municipalidad', col: C.q },
    { qx: 1, qy: 0, t: 'GESTIONAR DE CERCA', d: 'Alto poder · Alto interés', ex: 'SUNAFIL · OEFA · Cliente ancla · Sindicato', col: C.acc, focal: true },
    { qx: 0, qy: 1, t: 'MONITOREAR', d: 'Bajo poder · Bajo interés', ex: 'Medios · Público general', col: 'var(--muted)' },
    { qx: 1, qy: 1, t: 'MANTENER INFORMADO', d: 'Bajo poder · Alto interés', ex: 'Comunidad · ONG · Proveedores menores', col: C.e }
  ];
  q.forEach((c, qi) => {
    const x = x0 + c.qx * (size / 2), y = y0 + c.qy * (size / 2);
    let g = '';
    if (c.focal) g += box(x + 4, y + 4, size / 2 - 8, size / 2 - 8, { fill: C.accw, stroke: C.acc, r: 6, sw: 1.5 });
    g += txt(x + size / 4, y + 48, c.t, { c: 'd-label', size: 10.5, w: 700, fill: ink(c.col) });
    g += txt(x + size / 4, y + 66, c.d, { c: 'd-sub', size: 9 });
    const ws = c.ex.split(' · ');
    g += lines(x + size / 4, y + 92, ws, { c: 'd-sub', size: 9, lh: 13, fill: 'var(--muted-2)' });
    b += hot(`q${qi + 1}`, g, c.t, [x + 4, y + 4, size / 2 - 8, size / 2 - 8]);
  });

  b += `<text transform="translate(${x0 - 32},${y0 + size / 2}) rotate(-90)" text-anchor="middle" class="d-sub" fill="${C.acci}">PODER / INFLUENCIA →</text>`;
  b += txt(x0 + size / 2, y0 + size + 28, 'INTERÉS / AFECTACIÓN →', { c: 'd-sub', fill: C.acci });
  b += txt(x0 - 8, y0 + 12, 'alto', { a: 'end', c: 'd-sub', size: 9 });
  b += txt(x0 - 8, y0 + size - 4, 'bajo', { a: 'end', c: 'd-sub', size: 9 });
  b += txt(x0 + 4, y0 + size + 14, 'bajo', { a: 'start', c: 'd-sub', size: 9 });
  b += txt(x0 + size - 4, y0 + size + 14, 'alto', { a: 'end', c: 'd-sub', size: 9 });

  let fl = box(468, y0, 308, 200, { fill: 'var(--paper-3)', r: 8 });
  fl += txt(484, y0 + 24, 'De la matriz al requisito', { a: 'start', c: 'd-label', size: 11, w: 650 });
  const flow = [
    '1 · Identificar la parte interesada',
    '2 · Determinar su necesidad/expectativa',
    '3 · Decidir si se vuelve requisito',
    '4 · Si es legal → registro de req. legales',
    '5 · Si es voluntario → compromiso asumido',
    '6 · Enlazar a un riesgo del cap. 6.1'
  ];
  flow.forEach((f, i) => fl += txt(484, y0 + 52 + i * 22, f, { a: 'start', c: 'd-sub', size: 9.5 }));
  b += hot('flow', fl, 'De la expectativa al requisito', [468, y0, 308, 200]);

  b += txt(24, H - 12, 'Solo los requisitos que la organización decide adoptar se vuelven obligaciones de cumplimiento auditables.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Matriz de poder e interés de partes interesadas',
    'Cuadrante de dos por dos que clasifica partes interesadas según poder e interés, con cuatro estrategias: mantener satisfecho, gestionar de cerca, monitorear y mantener informado, más el flujo de seis pasos para convertir expectativas en requisitos.', b);
}

/* ════════════════════════════════════════════════════════════
   14 · Perspectiva de ciclo de vida (ISO 14001 cl. 8.1)
   ════════════════════════════════════════════════════════════ */
export function lifecycle() {
  const W = 880, H = 320;
  let b = arrowDefs('lc-a', C.e);
  b += txt(24, 32, 'Perspectiva de ciclo de vida — ISO 14001 cl. 6.1.2 y 8.1', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'no es un ACV completo: es la obligación de mirar más allá de la puerta de la planta', { a: 'start', c: 'd-anno' });

  const stages = [
    { t: 'Materias primas', d: 'Extracción,\nagotamiento', ctrl: 'Influir', col: 'var(--muted)' },
    { t: 'Diseño', d: 'Ecodiseño,\nsustitución', ctrl: 'Controlar', col: C.e },
    { t: 'Compras', d: 'Requisitos\nambientales', ctrl: 'Controlar', col: C.e },
    { t: 'Producción', d: 'Emisiones,\nresiduos, agua', ctrl: 'Controlar', col: C.acc, focal: true },
    { t: 'Distribución', d: 'Huella de\ntransporte', ctrl: 'Influir', col: C.e },
    { t: 'Uso', d: 'Consumo\nenergético', ctrl: 'Influir', col: 'var(--muted)' },
    { t: 'Fin de vida', d: 'Reciclaje,\ndisposición', ctrl: 'Influir', col: 'var(--muted)' }
  ];

  const bw = 108, gap = 12, y = 108;
  stages.forEach((s, i) => {
    const x = 24 + i * (bw + gap);
    b += box(x, y, bw, 92, { fill: s.focal ? C.accw : 'var(--paper-2)', stroke: s.focal ? C.acc : s.col, r: 8, sw: s.focal ? 1.5 : 1 });
    b += txt(x + bw / 2, y + 24, s.t, { c: 'd-label', size: 10.5, w: 650, fill: s.focal ? C.acci : 'var(--ink)' });
    b += lines(x + bw / 2, y + 44, s.d.split('\n'), { c: 'd-sub', lh: 12, size: 9 });
    b += `<line x1="${x + 12}" y1="${y + 68}" x2="${x + bw - 12}" y2="${y + 68}" stroke="${C.hair}"/>`;
    b += txt(x + bw / 2, y + 84, s.ctrl.toUpperCase(), { c: 'd-sub', size: 8.5, fill: s.ctrl === 'Controlar' ? ink(C.e) : 'var(--muted-2)' });
    if (i < stages.length - 1) b += arrow(`M${x + bw + 1} ${y + 46} H${x + bw + gap - 3}`, 'lc-a');
  });

  const cSt = 24 + 1 * (bw + gap), cEn = 24 + 4 * (bw + gap) - gap;
  b += hot('ctrl', `<path d="M${cSt} ${y - 12} H${cEn}" stroke="${C.e}" stroke-width="1.5"/>` +
    txt((cSt + cEn) / 2, y - 18, 'CONTROL DIRECTO — requisito operacional', { c: 'd-sub', fill: ink(C.e), w: 600 }),
    'Etapas bajo control directo', [cSt, y - 30, cEn - cSt, 24]);

  b += `<path d="M24 ${y + 112} H${24 + 6 * (bw + gap) + bw}" stroke="${C.hair}" stroke-width="1" stroke-dasharray="4 4"/>`;
  b += hot('infl', txt(450, y + 128, 'INFLUENCIA — requisito de comunicación e información a proveedores y usuarios', { c: 'd-anno' }),
    'Etapas bajo influencia', [120, y + 116, 660, 20]);

  b += txt(24, H - 32, 'La norma exige determinar aspectos ambientales en las etapas que la organización pueda controlar y en las que pueda influir.', { a: 'start', c: 'd-anno' });
  b += hot('aclara', txt(24, H - 12, 'Prueba de auditoría: pedir la matriz de aspectos y buscar una sola fila de una etapa aguas arriba o aguas abajo.', { a: 'start', c: 'd-anno', fill: C.acci }),
    'Ciclo de vida no es ACV', [24, H - 26, W - 48, 22]);

  return frame(W, H, 'Perspectiva de ciclo de vida en ISO 14001',
    'Cadena de siete etapas desde materias primas hasta fin de vida, distinguiendo las etapas bajo control directo de la organización de aquellas donde solo puede ejercer influencia.', b);
}

/* ════════════════════════════════════════════════════════════
   15 · Gantt de implementación 14 meses
   ════════════════════════════════════════════════════════════ */
export function ganttImpl() {
  const W = 1000, H = 452, x0 = 316, colW = 44, y0 = 96;
  let b = '';
  b += txt(24, 32, 'Cronograma maestro de implementación de un SIG', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'referencia para organización mediana (150-400 personas, un sitio) — 14 meses a certificado', { a: 'start', c: 'd-anno' });

  for (let m = 0; m < 14; m++) {
    const x = x0 + m * colW;
    b += `<line x1="${x}" y1="${y0 - 20}" x2="${x}" y2="${y0 + 292}" stroke="${C.hair}" stroke-dasharray="2 4"/>`;
    b += txt(x + colW / 2, y0 - 26, `M${m + 1}`, { c: 'd-sub', size: 9, fill: 'var(--muted-2)' });
  }

  const tasks = [
    { t: 'Diagnóstico y análisis de brecha', s: 0, e: 1, col: C.a, ph: 'Fase 1' },
    { t: 'Contexto, partes interesadas, alcance', s: 1, e: 2, col: C.q },
    { t: 'Mapa de procesos y caracterización', s: 1, e: 3, col: C.q },
    { t: 'Identificación de requisitos legales', s: 2, e: 3, col: C.e },
    { t: 'IPERC base + matriz de aspectos', s: 2, e: 4, col: C.s, ph: 'Fase 2' },
    { t: 'Riesgos y oportunidades del sistema', s: 3, e: 5, col: C.q },
    { t: 'Política, objetivos y programas', s: 4, e: 5, col: C.a },
    { t: 'Información documentada integrada', s: 4, e: 8, col: C.q },
    { t: 'Control operacional y emergencias', s: 6, e: 9, col: C.s, ph: 'Fase 3' },
    { t: 'Competencia, formación, comunicación', s: 6, e: 10, col: C.e },
    { t: 'Rodaje del sistema — generar registros', s: 8, e: 11, col: C.acc, focal: true },
    { t: 'Formación de auditores internos', s: 9, e: 10, col: C.a },
    { t: 'Auditoría interna integrada', s: 10, e: 11, col: C.acc, ph: 'Fase 4', focal: true },
    { t: 'Acciones correctivas y cierre de NC', s: 11, e: 12, col: C.s },
    { t: 'Revisión por la dirección', s: 11, e: 12, col: C.a },
    { t: 'Auditoría de certificación Etapa 1', s: 12, e: 13, col: C.q },
    { t: 'Auditoría de certificación Etapa 2', s: 13, e: 14, col: C.acc, focal: true }
  ];

  const rowH = 17;
  const phaseAt = {};
  tasks.forEach((t, i) => { if (t.ph) phaseAt[t.ph] = i; });
  const phaseKeys = { 'Fase 1': 'f1', 'Fase 2': 'f2', 'Fase 3': 'f3', 'Fase 4': 'f4' };
  tasks.forEach((t, i) => {
    const y = y0 + i * rowH;
    if (t.ph) b += hot(phaseKeys[t.ph], txt(24, y + 11, t.ph, { a: 'start', c: 'd-sub', size: 9, fill: C.acci, w: 600 }),
      t.ph, [16, y, 56, 16]);
    b += txt(308, y + 11, t.t, { a: 'end', c: 'd-sub', size: 9.5, fill: t.focal ? 'var(--ink)' : 'var(--muted)' });
    const bx = x0 + t.s * colW, bw = (t.e - t.s) * colW - 4;
    b += `<rect x="${bx + 2}" y="${y + 3}" width="${bw}" height="10" rx="3"
      fill="${t.col}" fill-opacity="${t.focal ? 1 : 0.42}" stroke="${t.focal ? t.col : 'none'}" stroke-width="1"/>`;
  });

  // Hitos
  const mile = [
    { m: 5, t: 'Sistema diseñado' },
    { m: 11, t: 'Sistema operando' },
    { m: 14, t: 'Certificado' }
  ];
  mile.forEach((mi) => {
    const x = x0 + mi.m * colW;
    b += hot('hito', `<path d="M${x} ${y0 + 296} l6 8 l-6 8 l-6 -8 z" fill="${C.acc}"/>` +
      txt(x, y0 + 326, mi.t, { c: 'd-sub', size: 9, fill: C.acci, w: 600 }),
      `Hito: ${mi.t}`, [x - 60, y0 + 292, 120, 42]);
  });

  b += txt(24, H - 12, 'Regla dura: la Etapa 2 exige al menos un ciclo completo de auditoría interna y revisión por la dirección con registros reales. Sin tres meses de rodaje, no hay evidencia que auditar.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Cronograma de implementación de un sistema integrado de gestión',
    'Diagrama de Gantt de catorce meses con diecisiete actividades agrupadas en cuatro fases, desde el diagnóstico inicial hasta la auditoría de certificación etapa dos, con tres hitos de control.', b);
}

/* ════════════════════════════════════════════════════════════
   16 · Radar de madurez
   ════════════════════════════════════════════════════════════ */
export function maturityRadar() {
  const W = 820, H = 420, cx = 258, cy = 232, R = 124;
  const axes = [
    { l: 'Liderazgo', v: 4 }, { l: 'Contexto y riesgo', v: 3 },
    { l: 'Procesos', v: 3 }, { l: 'Competencia', v: 2 },
    { l: 'Control operacional', v: 4 }, { l: 'Medición', v: 2 },
    { l: 'Auditoría interna', v: 3 }, { l: 'Mejora', v: 2 }
  ];
  const n = axes.length;
  let b = '';
  b += txt(24, 32, 'Radar de madurez del sistema integrado', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'cinco niveles: 1 inicial · 2 repetible · 3 definido · 4 gestionado · 5 optimizado', { a: 'start', c: 'd-anno' });

  for (let r = 1; r <= 5; r++) {
    const pts = Array.from({ length: n }, (_, i) => {
      const a = (i / n) * 2 * Math.PI - Math.PI / 2;
      return `${(cx + (R * r / 5) * Math.cos(a)).toFixed(1)},${(cy + (R * r / 5) * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    b += `<polygon points="${pts}" fill="none" stroke="${C.hair}" stroke-width="1"${r < 5 ? ' stroke-dasharray="2 3"' : ''}/>`;
  }
  axes.forEach((ax, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    const ex = cx + R * Math.cos(a), ey = cy + R * Math.sin(a);
    b += `<line x1="${cx}" y1="${cy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${C.hair}"/>`;
    const lx = cx + (R + 22) * Math.cos(a), ly = cy + (R + 22) * Math.sin(a);
    const anchor = Math.abs(Math.cos(a)) < 0.25 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
    b += txt(lx.toFixed(1), (ly + 4).toFixed(1), ax.l, { a: anchor, c: 'd-sub', size: 9.5 });
  });

  const pts = axes.map((ax, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    const r = (R * ax.v) / 5;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  b += hot('perfil', `<polygon points="${pts}" fill="${C.acc}" fill-opacity="0.16" stroke="${C.acc}" stroke-width="1.5"/>`,
    'Leer el perfil, no el promedio');
  axes.forEach((ax, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    const r = (R * ax.v) / 5;
    b += `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="3"
      fill="${ax.v <= 2 ? 'var(--risk)' : C.acc}" stroke="var(--paper-2)" stroke-width="1.5"/>`;
  });

  b += box(524, 88, 272, 264, { fill: 'var(--paper-3)', r: 8 });
  b += txt(544, 112, 'Lectura del diagnóstico', { a: 'start', c: 'd-label', size: 11, w: 650 });
  const read = [
    ['Liderazgo 4', 'La dirección empuja: aprovéchalo.', C.ok],
    ['Control operacional 4', 'Lo operativo ya funciona.', C.ok],
    ['Competencia 2', 'Formación reactiva, sin evaluar eficacia.', 'var(--risk)'],
    ['Medición 2', 'Indicadores que nadie usa para decidir.', 'var(--risk)'],
    ['Mejora 2', 'Acciones correctivas sin causa raíz.', 'var(--risk)']
  ];
  read.forEach((r, i) => {
    const y = 140 + i * 40;
    b += `<circle cx="${544}" cy="${y - 4}" r="2.5" fill="${r[2]}"/>`;
    b += txt(556, y, r[0], { a: 'start', c: 'd-sub', size: 9.5, fill: r[2], w: 650 });
    b += txt(556, y + 14, r[1], { a: 'start', c: 'd-sub', size: 9 });
  });
  b += `<line x1="544" y1="324" x2="780" y2="324" stroke="${C.hair}"/>`;
  b += txt(544, 342, 'Índice global: 2,9 / 5 — nivel definido', { a: 'start', c: 'd-sub', size: 9.5, fill: C.acci, w: 600 });

  b += txt(24, H - 12, 'Un perfil dentado (4 y 2 alternos) certifica igual que uno parejo, pero colapsa en la primera auditoría de seguimiento.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Radar de madurez de un sistema integrado de gestión',
    'Gráfico radar de ocho ejes evaluados en escala de uno a cinco, mostrando un perfil desigual con fortaleza en liderazgo y control operacional y debilidad en competencia, medición y mejora.', b);
}

/* ════════════════════════════════════════════════════════════
   17 · Iceberg de costos de la no calidad
   ════════════════════════════════════════════════════════════ */
export function costIceberg() {
  const W = 720, H = 420;
  let b = '';
  b += txt(24, 32, 'Costos de la no calidad y de los incidentes', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'lo visible es el argumento débil; lo sumergido es el que convence a un gerente financiero', { a: 'start', c: 'd-anno' });

  const wl = 208;
  b += `<line x1="24" y1="${wl}" x2="696" y2="${wl}" stroke="${C.q}" stroke-width="1.5"/>`;
  b += txt(696, wl - 8, 'línea de flotación contable', { a: 'end', c: 'd-anno', fill: ink(C.q), size: 10 });

  // Punta visible
  b += `<path d="M280 ${wl} L360 96 L440 ${wl} Z" fill="${C.acc}" fill-opacity="0.22" stroke="${C.acc}" stroke-width="1.5"/>`;
  b += hot('vis', txt(360, 132, '1× VISIBLE', { c: 'd-label', size: 11, fill: C.acci, w: 700 }) +
    txt(360, 150, 'Multa · Reproceso', { c: 'd-sub', size: 9 }) +
    txt(360, 164, 'Chatarra · Días perdidos', { c: 'd-sub', size: 9 }) +
    txt(360, 182, 'Seguro · Atención médica', { c: 'd-sub', size: 9 }),
    'La punta visible del iceberg', [284, 120, 152, 76]);

  // Masa sumergida
  b += `<path d="M280 ${wl} L440 ${wl} L560 300 L520 372 L200 372 L152 296 Z"
    fill="${C.q}" fill-opacity="0.1" stroke="${C.q}" stroke-width="1" stroke-dasharray="4 4"/>`;
  b += hot('ocu', txt(360, wl + 32, '4× a 10× OCULTO', { c: 'd-label', size: 12, fill: ink(C.q), w: 700 }),
    'La masa sumergida', [232, wl + 16, 256, 24]);

  const hidden = [
    ['Tiempo de investigación y gestión', 'Sobretiempo de reemplazo'],
    ['Pérdida de productividad del equipo', 'Retraso en entregas y penalidades'],
    ['Reclutamiento y curva de aprendizaje', 'Daño reputacional y pérdida de licitación'],
    ['Aumento de prima SCTR', 'Desmotivación y rotación'],
    ['Costo legal y litigio', 'Pérdida de la licencia social']
  ];
  hidden.forEach((h, i) => {
    const y = wl + 56 + i * 22;
    b += txt(348, y, h[0], { a: 'end', c: 'd-sub', size: 9 });
    b += `<circle cx="356" cy="${y - 4}" r="2" fill="${C.q}"/>`;
    b += txt(372, y, h[1], { a: 'start', c: 'd-sub', size: 9 });
  });

  b += box(24, 96, 168, 96, { fill: 'var(--paper-3)', r: 8 });
  b += txt(40, 120, 'Uso en consultoría', { a: 'start', c: 'd-label', size: 10.5, w: 650 });
  b += lines(40, 142, ['Convierte el costo oculto', 'en el numerador del ROI', 'del SIG. Es la única cifra', 'que mueve el presupuesto.'], { a: 'start', c: 'd-sub', lh: 14, size: 9 });

  b += box(528, 96, 168, 96, { fill: 'var(--paper-3)', r: 8 });
  b += txt(544, 120, 'Regla de Heinrich', { a: 'start', c: 'd-label', size: 10.5, w: 650 });
  b += lines(544, 142, ['Costo indirecto ≈ 4×', 'el directo. Estudios', 'modernos elevan el', 'rango hasta 10×.'], { a: 'start', c: 'd-sub', lh: 14, size: 9 });

  b += txt(24, H - 12, 'Fórmula de tablero: Costo total = (multas + reprocesos) × factor de ocultamiento. Documenta el factor que usas.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Iceberg de costos de la no calidad',
    'Metáfora de iceberg: la punta visible sobre la línea de flotación contiene multas y reprocesos; la masa sumergida, cuatro a diez veces mayor, contiene costos de investigación, productividad, reputación y litigio.', b);
}

/* ════════════════════════════════════════════════════════════
   18 · Anatomía de una no conformidad
   ════════════════════════════════════════════════════════════ */
export function ncAnatomy() {
  const W = 860, H = 412;
  let b = arrowDefs('nc-a', C.acc);
  b += txt(24, 32, 'Anatomía de un hallazgo de auditoría', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'tres piezas obligatorias: sin una de ellas, el hallazgo se cae en la reunión de cierre', { a: 'start', c: 'd-anno' });

  const parts = [
    { t: 'REQUISITO', d: 'La cláusula o el requisito legal incumplido.', ex: '"ISO 45001 cl. 7.2 — la organización debe determinar la competencia necesaria."', col: C.q },
    { t: 'EVIDENCIA', d: 'El hecho verificable, con trazabilidad.', ex: '"Los operadores de montacargas F-12 y F-19 no cuentan con registro de certificación vigente (verificado en legajo, 14/08/2026)."', col: C.e },
    { t: 'DESVIACIÓN', d: 'La declaración explícita del incumplimiento.', ex: '"Por tanto, no se evidencia que la competencia requerida haya sido determinada ni evaluada para el puesto."', col: C.acc, focal: true }
  ];
  parts.forEach((p, i) => {
    const y = 84 + i * 76;
    let g = box(24, y, 152, 60, { fill: p.focal ? C.accw : 'var(--paper-2)', stroke: p.col, r: 8, sw: p.focal ? 1.5 : 1 });
    g += txt(100, y + 26, p.t, { c: 'd-label', size: 11, fill: ink(p.col), w: 700 });
    g += txt(100, y + 44, `${i + 1} de 3`, { c: 'd-sub', size: 9 });
    g += txt(196, y + 20, p.d, { a: 'start', c: 'd-sub', size: 9.5, fill: 'var(--ink)' });
    const words = p.ex.match(/.{1,74}(\s|$)/g) || [p.ex];
    g += lines(196, y + 38, words.map(w => w.trim()), { a: 'start', c: 'd-anno', lh: 13, size: 9.5 });
    b += hot(`a${i + 1}`, g, `${i + 1}. ${p.t}`, [24, y, 812, 62]);
    if (i < 2) b += arrow(`M100 ${y + 62} V${y + 74}`, 'nc-a', { stroke: p.col });
  });

  // Clasificación
  b += `<line x1="24" y1="320" x2="836" y2="320" stroke="${C.hair}"/>`;
  const cls = [
    { t: 'NC MAYOR', d: 'Ausencia total del requisito, fallo sistémico\no riesgo de incumplimiento legal.', col: 'var(--risk)', a: 'Bloquea la certificación.' },
    { t: 'NC MENOR', d: 'Fallo aislado que no compromete\nla capacidad del sistema.', col: C.s, a: 'Plan de acción con plazo.' },
    { t: 'OBSERVACIÓN / OM', d: 'Cumple, pero hay riesgo de degradación\no espacio de mejora.', col: C.q, a: 'No exige acción formal.' }
  ];
  cls.forEach((c, i) => {
    const x = 24 + i * 276;
    let g = box(x, 332, 256, 64, { r: 8, stroke: c.col });
    g += txt(x + 12, 350, c.t, { a: 'start', c: 'd-label', size: 10.5, fill: ink(c.col), w: 700 });
    g += lines(x + 12, 366, c.d.split('\n'), { a: 'start', c: 'd-sub', lh: 11, size: 9 });
    g += txt(x + 12, 390, c.a, { a: 'start', c: 'd-sub', size: 9, fill: ink(c.col), w: 600 });
    b += hot(`c${i + 1}`, g, c.t, [x, 332, 256, 64]);
  });

  return frame(W, H, 'Anatomía de un hallazgo de auditoría',
    'Tres bloques encadenados: requisito, evidencia y declaración de desviación, con ejemplos redactados; abajo, la clasificación en no conformidad mayor, menor y observación con su consecuencia.', b);
}

/* ════════════════════════════════════════════════════════════
   19 · Matriz de correspondencia entre normas
   ════════════════════════════════════════════════════════════ */
export function correspondenceGrid() {
  const W = 860, H = 688, x0 = 264, colW = 136, rowH = 30, y0 = 108;
  let b = '';
  b += txt(24, 32, 'Matriz de correspondencia — dónde se funden y dónde divergen', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'sólido = requisito común integrable · rayado = requisito propio no integrable', { a: 'start', c: 'd-anno' });

  const cols = [
    { t: 'ISO 9001', s: 'Calidad', col: C.q, sol: S.q },
    { t: 'ISO 14001', s: 'Ambiente', col: C.e, sol: S.e },
    { t: 'ISO 45001', s: 'SST', col: C.s, sol: S.s },
    { t: 'ISO 37001', s: 'Antisoborno', col: C.a, sol: S.a }
  ];
  cols.forEach((c, i) => {
    const x = x0 + i * colW;
    b += box(x, y0 - 44, colW - 8, 36, { fill: c.sol.bg, stroke: 'none', r: 6 });
    b += txt(x + (colW - 8) / 2, y0 - 28, c.t, { c: 'd-label', size: 11, fill: c.sol.ink, w: 700 });
    b += txt(x + (colW - 8) / 2, y0 - 14, c.s, { c: 'd-sub', size: 9, fill: c.sol.ink });
  });

  // 1 = comun, 0.5 = comun con matiz, 0 = propio
  const rows = [
    ['4.1 Contexto', 1, 1, 1, 1],
    ['4.2 Partes interesadas', 1, 1, 0.5, 1],
    ['5.1 Liderazgo', 1, 1, 0.5, 0.5],
    ['5.4 Participación de trabajadores', 0, 0, 0, 0],
    ['6.1 Riesgos y oportunidades', 1, 0.5, 0.5, 0.5],
    ['6.1.2 Aspectos ambientales', 0, 0, 0, 0],
    ['6.1.2 Peligros e IPERC', 0, 0, 0, 0],
    ['6.1.3 Requisitos legales', 0.5, 1, 1, 1],
    ['7.2 Competencia', 1, 1, 1, 1],
    ['7.5 Info. documentada', 1, 1, 1, 1],
    ['8.1 Control operacional', 0.5, 0.5, 0.5, 0.5],
    ['8.2 Emergencias', 0, 1, 1, 0],
    ['8.4 Proveedores externos', 1, 0.5, 0.5, 1],
    ['9.1 Seguimiento y medición', 1, 1, 1, 1],
    ['9.2 Auditoría interna', 1, 1, 1, 1],
    ['9.3 Revisión por la dirección', 1, 1, 1, 1],
    ['10.2 NC y acción correctiva', 1, 1, 0.5, 1]
  ];

  rows.forEach((r, i) => {
    const y = y0 + i * rowH;
    b += txt(256, y + 16, r[0], { a: 'end', c: 'd-sub', size: 9.5, fill: 'var(--ink)' });
    for (let c = 0; c < 4; c++) {
      const x = x0 + c * colW, v = r[c + 1];
      const col = cols[c].col, sol = cols[c].sol;
      let g = '', hk = '';
      if (v === 1) {
        hk = 'integ';
        g += box(x, y + 3, colW - 8, rowH - 10, { fill: sol.bg, stroke: 'none', r: 4 });
        g += txt(x + (colW - 8) / 2, y + 17, 'integrable', { c: 'd-sub', size: 8.5, fill: sol.ink });
      } else if (v === 0.5) {
        hk = 'matiz';
        g += box(x, y + 3, colW - 8, rowH - 10, { fill: col, stroke: col, r: 4 });
        g += `<rect x="${x}" y="${y + 3}" width="${colW - 8}" height="${rowH - 10}" rx="4" fill="var(--paper-2)" fill-opacity="0.72"/>`;
        g += txt(x + (colW - 8) / 2, y + 17, 'común + matiz', { c: 'd-sub', size: 8.5, fill: ink(col) });
      } else {
        hk = 'propio';
        g += box(x, y + 3, colW - 8, rowH - 10, { fill: 'none', stroke: C.hair, r: 4, dash: '3 3' });
        g += txt(x + (colW - 8) / 2, y + 17, 'propio', { c: 'd-sub', size: 8.5, fill: 'var(--muted-2)' });
      }
      b += hot(hk, g, `${r[0]} en ${cols[c].t}`, [x, y + 3, colW - 8, rowH - 10]);
    }
  });

  const yEnd = y0 + rows.length * rowH;
  b += `<line x1="24" y1="${yEnd + 8}" x2="836" y2="${yEnd + 8}" stroke="${C.hair}"/>`;
  b += txt(24, yEnd + 28, 'Nueve de diecisiete filas son plenamente integrables: ahí está el ahorro real del SIG.', { a: 'start', c: 'd-anno', fill: C.acci });

  return frame(W, H, 'Matriz de correspondencia entre las cuatro normas del sistema integrado',
    'Tabla que cruza diecisiete requisitos contra ISO 9001, ISO 14001, ISO 45001 e ISO 37001, clasificando cada intersección como plenamente integrable, común con matiz, o requisito propio no integrable.', b);
}

/* ════════════════════════════════════════════════════════════
   Registro para render declarativo desde las vistas
   ════════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════════
   20 · Itinerario de gestión por procesos — tres niveles
   ════════════════════════════════════════════════════════════ */
export function processJourney() {
  const W = 880, H = 340;
  let b = arrowDefs('pj-a', C.acc);

  b += txt(24, 32, 'Itinerario de gestión por procesos', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'tres niveles acumulativos: ninguno tiene sentido si el anterior no está resuelto', { a: 'start', c: 'd-anno' });

  const cols = [
    { k: 'n1', x: 24,  col: C.q, w: C.qw, n: 'NIVEL 1 · BÁSICO', t: 'Fundamentos',
      d: ['Qué es un proceso', 'Anatomía y SIPOC', 'Tipos y mapa de nivel 0'], out: 'Sabes leer un mapa' },
    { k: 'n2', x: 312, col: C.e, w: C.ew, n: 'NIVEL 2 · INTERMEDIO', t: 'Caracterización',
      d: ['Ficha y tortuga', 'Flujo, carriles e interfaces', 'Indicadores y bucle de control'], out: 'Sabes caracterizar y medir' },
    { k: 'n3', x: 600, col: C.a, w: C.aw, n: 'NIVEL 3 · AVANZADO', t: 'Arquitectura',
      d: ['Gobierno y dueño de proceso', 'Madurez y capacidad', 'Valor, variación y rediseño'], out: 'Sabes rediseñar' }
  ];

  cols.forEach((c, i) => {
    const y = 84, h = 168, cw = 256;
    let g = box(c.x, y, cw, h, { fill: c.w, stroke: c.col, r: 10, sw: 1.5 });
    g += txt(c.x + 16, y + 24, c.n, { a: 'start', c: 'd-sub', fill: ink(c.col), w: 600 });
    g += txt(c.x + 16, y + 48, c.t, { a: 'start', c: 'd-label', size: 14, w: 600 });
    c.d.forEach((line, j) => {
      g += `<circle cx="${c.x + 22}" cy="${y + 74 + j * 22}" r="2.5" fill="${c.col}"/>`;
      g += txt(c.x + 34, y + 78 + j * 22, line, { a: 'start', c: 'd-label', size: 11 });
    });
    g += `<path d="M${c.x + 16} ${y + 142} H${c.x + cw - 16}" stroke="${c.col}" stroke-width="1" stroke-dasharray="3 3"/>`;
    g += txt(c.x + 16, y + 158, `Al terminar: ${c.out}`, { a: 'start', c: 'd-sub', fill: ink(c.col) });
    b += hot(c.k, g, c.n, [c.x, y, cw, h]);
    if (i < cols.length - 1) b += arrow(`M${c.x + cw + 4} ${y + h / 2} H${c.x + cw + 26}`, 'pj-a');
  });

  let g2 = box(24, 272, 832, 44, { fill: C.accw, stroke: C.acc, r: 8 });
  g2 += txt(440, 300, 'Criterio de avance: no pases de nivel hasta poder demostrar el resultado del anterior con evidencia objetiva, no con lectura.', { c: 'd-label', size: 11, fill: C.acci });
  b += hot('crit', g2, 'Criterio de avance entre niveles', [24, 272, 832, 44]);

  return frame(W, H, 'Itinerario de aprendizaje de gestión por procesos en tres niveles',
    'Tres bloques encadenados: nivel básico de fundamentos, nivel intermedio de caracterización y medición, y nivel avanzado de arquitectura y rediseño. Una banda inferior fija el criterio para avanzar de nivel.', b);
}

/* ════════════════════════════════════════════════════════════
   21 · Anatomía de un proceso (entradas, controles, recursos, salidas)
   ════════════════════════════════════════════════════════════ */
export function processAnatomy() {
  const W = 860, H = 420, px = 316, py = 176, pw = 228, ph = 96;
  let b = arrowDefs('pa-a', C.muted);

  b += txt(24, 32, 'Anatomía de un proceso', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'cuatro flujos, no dos: lo que entra y sale, lo que manda y lo que habilita', { a: 'start', c: 'd-anno' });

  // Nucleo
  let core = box(px, py, pw, ph, { fill: C.accw, stroke: C.acc, r: 10, sw: 1.5 });
  core += txt(px + pw / 2, py + 34, 'TRANSFORMACIÓN', { c: 'd-label', fill: C.acci, w: 700, size: 12 });
  core += lines(px + pw / 2, py + 54, ['actividades que añaden', 'valor a la entrada'], { c: 'd-sub', lh: 13 });
  core += txt(px + pw / 2, py + 86, 'aquí ocurre el trabajo real', { c: 'd-anno', size: 10 });
  b += hot('core', core, 'La transformación', [px, py, pw, ph]);

  // Entradas
  let ent = box(24, py + 8, 216, 80, { fill: C.qw, stroke: C.q, r: 8 });
  ent += txt(132, py + 30, 'ENTRADAS', { c: 'd-sub', fill: ink(C.q), w: 600 });
  ent += lines(132, py + 48, ['Material, información,', 'solicitud, expediente'], { c: 'd-sub', lh: 13 });
  ent += txt(132, py + 78, 'de un proveedor con criterio de aceptación', { c: 'd-anno', size: 9 });
  b += hot('ent', ent, 'Entradas del proceso', [24, py + 8, 216, 80]);
  b += arrow(`M240 ${py + 48} H${px - 8}`, 'pa-a', { stroke: C.q });

  // Salidas
  let sal = box(620, py + 8, 216, 80, { fill: C.ew, stroke: C.e, r: 8 });
  sal += txt(728, py + 30, 'SALIDAS', { c: 'd-sub', fill: ink(C.e), w: 600 });
  sal += lines(728, py + 48, ['Producto, servicio,', 'decisión, registro'], { c: 'd-sub', lh: 13 });
  sal += txt(728, py + 78, 'a un cliente con criterio de conformidad', { c: 'd-anno', size: 9 });
  b += hot('sal', sal, 'Salidas del proceso', [620, py + 8, 216, 80]);
  b += arrow(`M${px + pw + 8} ${py + 48} H612`, 'pa-a', { stroke: C.e });

  // Controles (arriba)
  let ctrl = box(px - 40, 84, 308, 60, { fill: C.aw, stroke: C.a, r: 8 });
  ctrl += txt(px + 114, 106, 'CONTROLES — qué manda sobre el proceso', { c: 'd-sub', fill: ink(C.a), w: 600 });
  ctrl += txt(px + 114, 126, 'Requisito legal · política · criterio de aceptación · procedimiento', { c: 'd-sub', size: 9.5 });
  b += hot('ctrl', ctrl, 'Controles del proceso', [px - 40, 84, 308, 60]);
  b += arrow(`M${px + pw / 2} 148 V${py - 8}`, 'pa-a', { stroke: C.a });

  // Recursos (abajo)
  let rec = box(px - 40, 308, 308, 60, { fill: C.sw, stroke: C.s, r: 8 });
  rec += txt(px + 114, 330, 'RECURSOS — con qué se ejecuta', { c: 'd-sub', fill: ink(C.s), w: 600 });
  rec += txt(px + 114, 350, 'Personas competentes · equipos · software · ambiente de trabajo', { c: 'd-sub', size: 9.5 });
  b += hot('rec', rec, 'Recursos del proceso', [px - 40, 308, 308, 60]);
  b += arrow(`M${px + pw / 2} 304 V${py + ph + 8}`, 'pa-a', { stroke: C.s });

  // Medicion
  let med = box(620, 308, 216, 60, { fill: 'var(--paper-3)', stroke: C.hair, r: 8, dash: '4 4' });
  med += txt(728, 330, 'MEDICIÓN', { c: 'd-sub', fill: C.acci, w: 600 });
  med += txt(728, 350, 'indicador sobre la salida y sobre el propio proceso', { c: 'd-sub', size: 9 });
  b += hot('med', med, 'Medición del proceso', [620, 308, 216, 60]);
  b += `<path d="M728 ${py + 96} V300" fill="none" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#pa-a)"/>`;

  b += txt(24, H - 12, 'Prueba rápida: si no puedes nombrar la entrada, la salida, el control y el recurso, no estás mirando un proceso — estás mirando una actividad suelta.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Anatomía de un proceso con sus cuatro flujos',
    'Un bloque central de transformación recibe entradas por la izquierda y produce salidas por la derecha. Desde arriba bajan los controles que gobiernan el proceso y desde abajo suben los recursos que lo habilitan. A la derecha, la medición toma dato de la salida.', b);
}

/* ════════════════════════════════════════════════════════════
   22 · Cadena SIPOC y la relación cliente-proveedor interno
   ════════════════════════════════════════════════════════════ */
export function sipocChain() {
  const W = 880, H = 400;
  let b = arrowDefs('sc-a', C.muted);

  b += txt(24, 32, 'SIPOC — la fotografía de una página', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'la herramienta más rápida para delimitar un proceso antes de caracterizarlo', { a: 'start', c: 'd-anno' });

  const cols = [
    { k: 's', l: 'S', t: 'Supplier', es: 'Proveedor', d: ['Quién entrega', 'la entrada'], ej: 'Área usuaria', col: C.q },
    { k: 'i', l: 'I', t: 'Input', es: 'Entrada', d: ['Qué se recibe', 'y con qué criterio'], ej: 'Requerimiento aprobado', col: C.q },
    { k: 'p', l: 'P', t: 'Process', es: 'Proceso', d: ['De 4 a 7 pasos', 'de alto nivel'], ej: 'Compra de insumo', col: C.acc },
    { k: 'o', l: 'O', t: 'Output', es: 'Salida', d: ['Qué se entrega', 'y con qué criterio'], ej: 'Insumo conforme', col: C.e },
    { k: 'c', l: 'C', t: 'Customer', es: 'Cliente', d: ['Quién recibe', 'y a quién sirve'], ej: 'Producción', col: C.e }
  ];

  const cw = 160, gap = 8;
  cols.forEach((c, i) => {
    const x = 24 + i * (cw + gap), y = 80, h = 152;
    const isP = c.k === 'p';
    let g = box(x, y, cw, h, { fill: isP ? C.accw : 'var(--paper-2)', stroke: c.col, r: 8, sw: isP ? 1.5 : 1 });
    g += box(x, y, cw, 30, { fill: 'none', stroke: c.col, r: 8 });
    g += txt(x + 20, y + 21, c.l, { c: 'd-label', fill: ink(c.col), w: 700, size: 15 });
    g += txt(x + 38, y + 20, `${c.t} · ${c.es}`, { a: 'start', c: 'd-sub', fill: ink(c.col) });
    g += lines(x + cw / 2, y + 54, c.d, { c: 'd-label', lh: 15, size: 11 });
    g += `<path d="M${x + 16} ${y + 92} H${x + cw - 16}" stroke="${C.hair}" stroke-width="1"/>`;
    g += txt(x + cw / 2, y + 112, 'ejemplo', { c: 'd-sub', size: 9 });
    g += txt(x + cw / 2, y + 132, c.ej, { c: 'd-label', size: 10.5, fill: ink(c.col) });
    b += hot(c.k, g, `${c.t} — ${c.es}`, [x, y, cw, h]);
    if (i < cols.length - 1) b += arrow(`M${x + cw} ${y + 76} H${x + cw + gap - 2}`, 'sc-a');
  });

  // Cadena cliente-proveedor interno
  b += txt(24, 276, 'La consecuencia: toda organización es una cadena de clientes internos', { a: 'start', c: 'd-label', w: 600, size: 12 });

  const chain = [
    { n: 'Proceso A', r: 'proveedor' },
    { n: 'Proceso B', r: 'cliente de A · proveedor de C' },
    { n: 'Proceso C', r: 'cliente de B' }
  ];
  chain.forEach((c, i) => {
    const x = 24 + i * 288;
    b += box(x, 296, 256, 56, { fill: 'var(--paper-3)', stroke: C.hair, r: 8 });
    b += txt(x + 128, 318, c.n, { c: 'd-label', size: 11.5 });
    b += txt(x + 128, 336, c.r, { c: 'd-sub', size: 9.5 });
    if (i < chain.length - 1) b += arrow(`M${x + 256} 324 H${x + 284}`, 'sc-a', { stroke: C.acc });
  });
  b += hot('interno', txt(440, 372, 'cada flecha es una interfaz: ahí se pierde el 80 % del desempeño de un proceso', { c: 'd-anno', fill: C.acci }),
    'La cadena cliente-proveedor interno', [140, 360, 600, 20]);

  return frame(W, H, 'Cadena SIPOC y relación cliente proveedor interno',
    'Cinco columnas encadenadas: proveedor, entrada, proceso, salida y cliente, cada una con su ejemplo. Debajo, tres procesos en cadena muestran que cada proceso es cliente del anterior y proveedor del siguiente.', b);
}

/* ════════════════════════════════════════════════════════════
   23 · Niveles de despliegue del mapa de procesos
   ════════════════════════════════════════════════════════════ */
export function processLevels() {
  const W = 840, H = 400;
  let b = arrowDefs('pl-a', C.muted);

  b += txt(24, 32, 'Hasta dónde desplegar el mapa', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'cuatro niveles posibles, un solo límite razonable', { a: 'start', c: 'd-anno' });

  const rows = [
    { k: 'l0', n: 'Nivel 0', t: 'Mapa general', d: 'De 8 a 15 procesos en una hoja. Lo que ve la alta dirección.', q: 'Obligatorio', col: C.a, w: C.aw, ok: true },
    { k: 'l1', n: 'Nivel 1', t: 'Subprocesos y fichas', d: 'Despliegue de cada proceso. Aquí viven caracterización e indicadores.', q: 'Obligatorio', col: C.q, w: C.qw, ok: true },
    { k: 'l2', n: 'Nivel 2', t: 'Actividades y flujos', d: 'Diagramas de flujo, carriles, criterios de decisión.', q: 'Según riesgo', col: C.e, w: C.ew, ok: true },
    { k: 'l3', n: 'Nivel 3', t: 'Tareas e instructivos', d: 'Paso a paso operativo. Solo donde el error es caro o irreversible.', q: 'Excepcional', col: C.s, w: C.sw, ok: false }
  ];

  rows.forEach((r, i) => {
    const y = 80 + i * 68, x = 24 + i * 24, w = 700 - i * 24;
    let g = box(x, y, w, 56, { fill: r.w, stroke: r.col, r: 8, dash: r.ok ? null : '4 4' });
    g += txt(x + 16, y + 24, r.n, { a: 'start', c: 'd-sub', fill: ink(r.col), w: 600 });
    g += txt(x + 78, y + 24, r.t, { a: 'start', c: 'd-label', size: 12 });
    g += txt(x + 16, y + 42, r.d, { a: 'start', c: 'd-sub', size: 9.5 });
    g += txt(x + w - 16, y + 24, r.q, { a: 'end', c: 'd-sub', fill: ink(r.col), w: 600 });
    b += hot(r.k, g, `${r.n} — ${r.t}`, [x, y, w, 56]);
    if (i < rows.length - 1) b += arrow(`M${x + 40} ${y + 58} V${y + 76}`, 'pl-a');
  });

  let lim = box(748, 148, 68, 124, { fill: C.accw, stroke: C.acc, r: 8, sw: 1.5 });
  lim += txt(782, 190, 'EL', { c: 'd-sub', fill: C.acci, w: 700 });
  lim += txt(782, 208, 'LÍMITE', { c: 'd-sub', fill: C.acci, w: 700 });
  lim += txt(782, 232, 'baja solo', { c: 'd-sub', size: 9 });
  lim += txt(782, 246, 'si el riesgo', { c: 'd-sub', size: 9 });
  lim += txt(782, 260, 'lo exige', { c: 'd-sub', size: 9 });
  b += hot('limite', lim, 'El límite del despliegue', [748, 148, 68, 124]);

  b += txt(24, 356, 'Regla de coste: cada nivel adicional multiplica por tres el esfuerzo de mantenimiento documental y no añade control si el anterior no se cumple.', { a: 'start', c: 'd-anno' });
  b += txt(24, 378, 'La burocracia documental casi nunca nace de exigir demasiado: nace de desplegar niveles que nadie lee ni actualiza.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Niveles de despliegue del mapa de procesos',
    'Cuatro bandas escalonadas de nivel cero a nivel tres, cada una con lo que contiene y si es obligatoria. Una marca lateral señala el límite razonable de despliegue.', b);
}

/* ════════════════════════════════════════════════════════════
   24 · Mapa de interfaces y traspasos (swimlane con puntos de fuga)
   ════════════════════════════════════════════════════════════ */
export function handoffMap() {
  const W = 880, H = 400;
  let b = arrowDefs('hm-a', C.muted);

  b += txt(24, 32, 'Carriles e interfaces — proceso de compra de un insumo crítico', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'cada cambio de carril es un traspaso, y cada traspaso es un punto de fuga de control', { a: 'start', c: 'd-anno' });

  const lanes = [
    { n: 'Área usuaria', col: C.q },
    { n: 'Logística', col: C.acc },
    { n: 'Calidad', col: C.e },
    { n: 'Finanzas', col: C.a }
  ];
  const laneH = 60, x0 = 136, laneW = 720;
  lanes.forEach((l, i) => {
    const y = 80 + i * laneH;
    b += box(24, y, 108, laneH - 4, { fill: 'var(--paper-3)', stroke: C.hair, r: 6 });
    b += txt(78, y + 34, l.n, { c: 'd-sub', fill: ink(l.col), w: 600 });
    b += box(x0, y, laneW, laneH - 4, { fill: 'none', stroke: C.hair, r: 6, dash: '2 4' });
  });

  // Pasos: [lane, x, w, label]
  const steps = [
    { lane: 0, x: 152, w: 116, t: 'Solicitar', s: 'con especificación' },
    { lane: 1, x: 292, w: 116, t: 'Cotizar', s: '3 proveedores' },
    { lane: 3, x: 432, w: 116, t: 'Aprobar', s: 'según monto' },
    { lane: 1, x: 572, w: 116, t: 'Emitir OC', s: 'con criterio' },
    { lane: 2, x: 712, w: 128, t: 'Verificar', s: 'contra especificación' }
  ];
  steps.forEach((s, i) => {
    const y = 80 + s.lane * laneH + 8;
    b += box(s.x, y, s.w, 40, { fill: 'var(--paper-2)', stroke: lanes[s.lane].col, r: 6 });
    b += txt(s.x + s.w / 2, y + 18, s.t, { c: 'd-label', size: 11 });
    b += txt(s.x + s.w / 2, y + 32, s.s, { c: 'd-sub', size: 9 });
  });

  // Traspasos
  const hops = [
    { k: 'h1', from: 0, to: 1, x: 280, t: '1' },
    { k: 'h2', from: 1, to: 3, x: 420, t: '2' },
    { k: 'h3', from: 3, to: 1, x: 560, t: '3' },
    { k: 'h4', from: 1, to: 2, x: 700, t: '4' }
  ];
  hops.forEach((h) => {
    const y1 = 80 + h.from * laneH + 28, y2 = 80 + h.to * laneH + 28;
    let g = `<path d="M${h.x - 12} ${y1} H${h.x} V${y2} H${h.x + 12}" fill="none" stroke="${C.acc}" stroke-width="1.5" marker-end="url(#hm-a)"/>`;
    g += `<circle cx="${h.x}" cy="${(y1 + y2) / 2}" r="9" fill="${C.accw}" stroke="${C.acc}" stroke-width="1.5"/>`;
    g += txt(h.x, (y1 + y2) / 2 + 4, h.t, { c: 'd-sub', fill: C.acci, w: 700 });
    b += hot(h.k, g, `Traspaso ${h.t}`, [h.x - 16, Math.min(y1, y2) - 8, 32, Math.abs(y2 - y1) + 16]);
  });

  let z = box(24, 324, 832, 44, { fill: C.accw, stroke: C.acc, r: 8 });
  z += txt(440, 344, 'Cuatro traspasos en un proceso de cinco pasos. Cada uno necesita: qué se entrega, a quién, con qué criterio de aceptación y en qué plazo.', { c: 'd-label', size: 11, fill: C.acci });
  z += txt(440, 360, 'Si el traspaso no está definido, el proceso funciona por costumbre — y falla en cuanto rota la persona.', { c: 'd-sub', size: 9.5 });
  b += hot('zona', z, 'La regla de los traspasos', [24, 324, 832, 44]);

  return frame(W, H, 'Diagrama de carriles con los traspasos entre áreas',
    'Cuatro carriles —área usuaria, logística, calidad y finanzas— recorridos por cinco pasos de un proceso de compra. Cuatro puntos numerados marcan cada traspaso entre carriles.', b);
}

/* ════════════════════════════════════════════════════════════
   25 · Bucle de control del indicador
   ════════════════════════════════════════════════════════════ */
export function indicatorLoop() {
  const W = 880, H = 380;
  let b = arrowDefs('il-a', C.muted);

  b += txt(24, 32, 'Del dato a la decisión — el bucle que hace útil un indicador', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'un indicador que no cierra este bucle es decorativo, por impecable que sea la tabla', { a: 'start', c: 'd-anno' });

  const nodes = [
    { k: 'dato', x: 24,  t: 'DATO', d: ['fuente verificable,', 'no memoria'], col: C.q },
    { k: 'ind',  x: 196, t: 'INDICADOR', d: ['fórmula estable', 'en el tiempo'], col: C.q },
    { k: 'umb',  x: 368, t: 'UMBRAL', d: ['meta, línea base', 'y punto de reacción'], col: C.acc },
    { k: 'dec',  x: 540, t: 'DECISIÓN', d: ['¿actúo o', 'sigo?'], col: C.a },
    { k: 'acc',  x: 712, t: 'ACCIÓN', d: ['sobre la causa,', 'con responsable'], col: C.s }
  ];
  nodes.forEach((n, i) => {
    const y = 92, w = 144, h = 84;
    const focal = n.k === 'umb';
    let g = box(n.x, y, w, h, { fill: focal ? C.accw : 'var(--paper-2)', stroke: n.col, r: 8, sw: focal ? 1.5 : 1 });
    g += txt(n.x + w / 2, y + 30, n.t, { c: 'd-label', fill: ink(n.col), w: 700, size: 12 });
    g += lines(n.x + w / 2, y + 52, n.d, { c: 'd-sub', lh: 13 });
    g += txt(n.x + w / 2, y + 76, `paso ${i + 1}`, { c: 'd-sub', size: 9 });
    b += hot(n.k, g, n.t, [n.x, y, w, h]);
    if (i < nodes.length - 1) b += arrow(`M${n.x + w} ${y + 42} H${n.x + w + 24}`, 'il-a', { stroke: C.acc });
  });

  // Retorno al proceso
  b += `<path d="M784 176 V236 H172 V196" fill="none" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#il-a)"/>`;
  b += hot('ret', txt(478, 232, 'el efecto vuelve al proceso y se vuelve a medir — verificación de eficacia (cl. 10.2)', { c: 'd-anno', fill: C.acci }),
    'El retorno: verificación de eficacia', [220, 220, 520, 20]);

  // Rupturas frecuentes
  const breaks = [
    { x: 24,  t: 'Dato que nadie puede reconstruir', s: 'se mide de memoria o en una hoja personal' },
    { x: 296, t: 'Umbral que no existe', s: 'hay meta, pero nadie sabe cuándo reaccionar' },
    { x: 568, t: 'Decisión que nunca ocurre', s: 'el indicador se reporta y se archiva' }
  ];
  b += txt(24, 284, 'Dónde se rompe el bucle en la práctica', { a: 'start', c: 'd-label', size: 12, w: 600 });
  breaks.forEach((br) => {
    b += box(br.x, 296, 264, 48, { fill: 'var(--risk-wash)', stroke: 'var(--risk)', r: 8, dash: '4 4' });
    b += txt(br.x + 132, 316, br.t, { c: 'd-label', size: 11, fill: 'var(--risk)' });
    b += txt(br.x + 132, 332, br.s, { c: 'd-sub', size: 9 });
  });

  b += txt(24, H - 8, 'Prueba de consultor: pide la última decisión que se tomó porque este indicador se movió. Si no existe, el bucle está roto.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Bucle de control de un indicador de proceso',
    'Cinco nodos encadenados: dato, indicador, umbral, decisión y acción, con una flecha de retorno que devuelve el efecto al proceso para volver a medirlo. Debajo, los tres puntos donde el bucle se rompe en la práctica.', b);
}

/* ════════════════════════════════════════════════════════════
   26 · Madurez de la gestión por procesos
   ════════════════════════════════════════════════════════════ */
export function processMaturity() {
  const W = 860, H = 420;
  let b = '';

  b += txt(24, 32, 'Madurez de la gestión por procesos', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'certificarse acredita el nivel 3; el valor económico aparece en el 4 y el 5', { a: 'start', c: 'd-anno' });

  const levels = [
    { k: 'm1', n: '1', t: 'Inicial', s: 'depende de la persona', d: 'El trabajo depende de quién esté ese día.', e: 'Nadie sabe describir el proceso igual dos veces.', col: 'var(--risk)', w: 'var(--risk-wash)' },
    { k: 'm2', n: '2', t: 'Repetible', s: 'costumbre no escrita', d: 'Hay práctica común, no documentada.', e: 'Funciona hasta que rota el personal clave.', col: 'var(--warn)', w: 'var(--warn-wash)' },
    { k: 'm3', n: '3', t: 'Definido', s: 'caracterizado y medido', d: 'Proceso caracterizado, con dueño e indicador.', e: 'Es el nivel que exige y verifica una certificación.', col: C.q, w: C.qw },
    { k: 'm4', n: '4', t: 'Gestionado', s: 'se decide con el dato', d: 'Se decide con el dato y se controla la variación.', e: 'El indicador cambia decisiones, no solo informes.', col: C.e, w: C.ew },
    { k: 'm5', n: '5', t: 'Optimizado', s: 'se rediseña por evidencia', d: 'El proceso se rediseña por evidencia y anticipación.', e: 'Se mejora antes de que aparezca el problema.', col: C.acc, w: C.accw }
  ];

  const bw = 148, base = 344;
  levels.forEach((l, i) => {
    const h = 56 + i * 44, x = 24 + i * 164, y = base - h;
    let g = box(x, y, bw, h, { fill: l.w, stroke: l.col, r: 8, sw: i === 4 ? 1.5 : 1 });
    g += txt(x + bw / 2, y + 26, l.n, { c: 'd-label', fill: ink(l.col), w: 700, size: 16 });
    g += txt(x + bw / 2, y + 46, l.t, { c: 'd-label', size: 12 });
    b += hot(l.k, g, `Nivel ${l.n} — ${l.t}`, [x, y, bw, h]);
    b += txt(x + bw / 2, base + 20, l.s, { c: 'd-sub', size: 9 });
  });

  b += `<path d="M24 ${base + 4} H${24 + 5 * 164 - 16}" stroke="${C.hair}" stroke-width="1"/>`;

  // Linea de certificacion
  const cx = 24 + 2 * 164 + bw + 8;
  b += `<path d="M${cx} 96 V${base}" stroke="${C.acc}" stroke-width="1" stroke-dasharray="4 4"/>`;
  b += txt(cx + 8, 108, 'umbral de certificación', { a: 'start', c: 'd-sub', fill: C.acci });
  b += txt(cx + 8, 124, 'a la izquierda no hay sistema auditable', { a: 'start', c: 'd-sub', size: 9 });

  b += txt(24, 384, 'El salto caro no es del 2 al 3 —eso lo resuelve un consultor—, sino del 3 al 4: exige que la organización acepte decidir contra el dato aunque contradiga a la jerarquía.', { a: 'start', c: 'd-anno' });
  b += txt(24, 404, 'Un sistema certificado y estancado en nivel 3 durante años es exactamente lo que la cl. 10.3 llama incumplimiento de mejora continua.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Escalera de madurez de la gestión por procesos',
    'Cinco escalones ascendentes: inicial, repetible, definido, gestionado y optimizado, cada uno con su síntoma característico. Una línea vertical marca el umbral a partir del cual el sistema es certificable.', b);
}

/* ════════════════════════════════════════════════════════════
   27 · Cadena de valor y tiempo: eficiencia de ciclo
   ════════════════════════════════════════════════════════════ */
export function valueStream() {
  const W = 880, H = 412;
  let b = arrowDefs('vs-a', C.muted);

  b += txt(24, 32, 'Dónde se va el tiempo — eficiencia de ciclo del proceso', { a: 'start', c: 'd-title' });
  b += txt(24, 52, 'mismo proceso de compra: 5 días de trabajo real dentro de 21 días de plazo', { a: 'start', c: 'd-anno' });

  /* Bloques: va = valor añadido, es = espera. La barra es estrictamente
     proporcional, asi que los tramos de medio dia quedan demasiado estrechos
     para rotularlos: sus nombres van en la leyenda de debajo. */
  const blocks = [
    { t: 'Solicitar', h: 0.5, k: 'va' }, { t: 'Espera de visto bueno', h: 3, k: 'es' },
    { t: 'Cotizar', h: 2, k: 'va' },     { t: 'Espera de aprobación', h: 6, k: 'es' },
    { t: 'Emitir OC', h: 0.5, k: 'va' }, { t: 'Espera del proveedor', h: 5, k: 'es' },
    { t: 'Recibir', h: 1, k: 'va' },     { t: 'Espera de verificación', h: 2, k: 'es' },
    { t: 'Verificar', h: 1, k: 'va' }
  ];
  const total = blocks.reduce((a, c) => a + c.h, 0);
  const spanW = 812;
  const dias = (n) => String(n).replace('.', ',');
  let x = 24;
  blocks.forEach((bl) => {
    const w = (bl.h / total) * spanW;
    const isVA = bl.k === 'va';
    const y = isVA ? 100 : 128;
    const h = isVA ? 60 : 32;
    b += box(x, y, w - 2, h, {
      fill: isVA ? C.ew : 'var(--warn-wash)',
      stroke: isVA ? C.e : 'var(--warn)', r: 6, dash: isVA ? null : '3 3'
    });
    if (w > 44) b += txt(x + w / 2, isVA ? y + 28 : y + 21, `${dias(bl.h)} d`, {
      c: 'd-sub', size: 10, fill: isVA ? ink(C.e) : 'var(--warn)'
    });
    if (isVA && w > 68) b += txt(x + w / 2, y + 46, bl.t, { c: 'd-label', size: 10 });
    x += w;
  });

  b += hot('va', '', 'Tiempo de valor añadido', [24, 96, spanW, 32]);
  b += hot('es', '', 'Tiempo de espera', [24, 128, spanW, 32]);

  b += txt(24, 92, 'barra alta = valor añadido · barra baja punteada = espera', { a: 'start', c: 'd-sub' });

  /* Leyenda: los tramos estrechos no caben rotulados dentro de la barra. */
  b += txt(24, 180, 'Valor añadido: Solicitar 0,5 · Cotizar 2 · Emitir OC 0,5 · Recibir 1 · Verificar 1 = 5 d', { a: 'start', c: 'd-sub', size: 10, fill: ink(C.e) });
  b += txt(24, 196, 'Espera: visto bueno 3 · aprobación 6 · proveedor 5 · verificación 2 = 16 d', { a: 'start', c: 'd-sub', size: 10, fill: 'var(--warn)' });

  // Linea de lead time
  b += `<path d="M24 216 H836" stroke="${C.acc}" stroke-width="1" marker-end="url(#vs-a)"/>`;
  b += `<path d="M24 210 V222 M836 210 V222" stroke="${C.acc}" stroke-width="1"/>`;
  b += hot('lead', txt(430, 238, 'plazo total (lead time) = 21 días — lo único que percibe el cliente', { c: 'd-label', size: 11, fill: C.acci }),
    'El plazo total', [200, 226, 460, 20]);

  // Calculo
  let calc = box(24, 256, 400, 112, { fill: C.accw, stroke: C.acc, r: 8, sw: 1.5 });
  calc += txt(40, 280, 'Eficiencia de ciclo del proceso (PCE)', { a: 'start', c: 'd-label', fill: C.acci, w: 600, size: 12 });
  calc += txt(40, 306, 'PCE = tiempo de valor añadido / plazo total', { a: 'start', c: 'd-sub', size: 10.5 });
  calc += txt(40, 330, 'PCE = 5 d / 21 d = 24 %', { a: 'start', c: 'd-label', size: 14, fill: C.acci });
  calc += txt(40, 354, 'el 76 % del plazo es espera — ahí está la mejora', { a: 'start', c: 'd-sub', size: 9.5 });
  b += hot('pce', calc, 'Eficiencia de ciclo del proceso', [24, 256, 400, 112]);

  let ref = box(444, 256, 392, 112, { fill: 'var(--paper-3)', stroke: C.hair, r: 8 });
  ref += txt(460, 280, 'Cómo se lee', { a: 'start', c: 'd-label', size: 12, w: 600 });
  ref += txt(460, 302, 'PCE < 10 % — proceso administrativo típico sin gestionar', { a: 'start', c: 'd-sub', size: 9.5 });
  ref += txt(460, 322, 'PCE 10-25 % — hay control, la espera sigue dominando', { a: 'start', c: 'd-sub', size: 9.5 });
  ref += txt(460, 342, 'PCE > 25 % — proceso gestionado con flujo trabajado', { a: 'start', c: 'd-sub', size: 9.5 });
  ref += txt(460, 360, 'Reducir esperas rara vez cuesta dinero: cuesta decisiones.', { a: 'start', c: 'd-anno', size: 10 });
  b += hot('ref', ref, 'Cómo leer la eficiencia de ciclo', [444, 256, 392, 112]);

  b += txt(24, H - 8, 'Regla: antes de automatizar un proceso, mide su PCE. Automatizar la espera no la elimina — la digitaliza.', { a: 'start', c: 'd-anno' });

  return frame(W, H, 'Cadena de tiempo de un proceso con eficiencia de ciclo',
    'Una barra de tiempo alterna bloques altos de valor añadido con bloques bajos de espera a lo largo de veintiún días. Debajo se calcula la eficiencia de ciclo del proceso: cinco días de trabajo real sobre veintiún días de plazo, un veinticuatro por ciento.', b);
}

export const DIAGRAMS = {
  annexSL, pdcaLoop, normsTimeline, processMap, turtle, riskMatrix,
  controlHierarchy, docPyramid, auditCycle, certRoute, bowtie,
  integrationLevels, stakeholderQuadrant, lifecycle, ganttImpl,
  maturityRadar, costIceberg, ncAnatomy, correspondenceGrid,
  /* Itinerario de gestión por procesos */
  processJourney, processAnatomy, sipocChain, processLevels,
  handoffMap, indicatorLoop, processMaturity, valueStream
};

/** Envuelve un diagrama en su <figure> con numeración y pie. */
export function fig(name, num, title, caption, opts = {}) {
  const fn = DIAGRAMS[name];
  if (!fn) return '';
  const inter = !!opts.interactive;
  return `<figure class="diagram" data-dg="${name}"${inter ? ' data-interactive="1"' : ''}>
  <div class="dg-head">
    <span class="dg-num">Diagrama ${num}</span>
    <span class="dg-title">${title}</span>
    <span class="dg-tools">
      ${inter ? '<span class="dg-hint">Pulsa cualquier elemento</span>' : ''}
      <button class="dg-btn" data-act="zoom" aria-label="Ampliar el diagrama a pantalla completa">Ampliar</button>
    </span>
  </div>
  <div class="dg-canvas">${fn()}</div>
  <div class="dg-panel" hidden aria-live="polite"></div>
  ${caption ? `<figcaption>${caption}</figcaption>` : ''}
</figure>`;
}
