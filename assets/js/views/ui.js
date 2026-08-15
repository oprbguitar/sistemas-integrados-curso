/* ============================================================
   SIG Lab — Constructores de UI compartidos por las vistas
   ============================================================ */

export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const head = (eyebrow, title, lede) => `
  <div class="eyebrow">${eyebrow}</div>
  <h1 class="view-title">${title}</h1>
  ${lede ? `<p class="lede">${lede}</p>` : ''}`;

export const sec = (num, title, sub) =>
  `<h2 class="sec"><span class="num">${num}</span>${title}</h2>${sub ? `<p class="sec-sub">${sub}</p>` : ''}`;

export const callout = (kind, title, body) =>
  `<div class="callout ${kind}">${title ? `<div class="co-title">${title}</div>` : ''}${body}</div>`;

export const card = (body, opts = {}) =>
  `<div class="card${opts.hover ? ' hover' : ''}"${opts.norm ? ` data-norm="${opts.norm}"` : ''}>${body}</div>`;

export const kpi = (v, u, l, accent) =>
  `<div class="kpi"${accent ? ' data-accent="1"' : ''}><div class="k-val">${v}${u ? `<span class="u">${u}</span>` : ''}</div><div class="k-lab">${l}</div></div>`;

export const badge = (text, kind = '') =>
  `<span class="badge${kind ? ` ${kind}` : ''}"${['9001', '14001', '45001', '37001', 'esg', 'sig'].includes(kind) ? ` data-norm="${kind}"` : ''}>${text}</span>`;

export function table(headers, rows, opts = {}) {
  return `<div class="tablewrap"><table${opts.narrow ? ' class="narrow"' : ''}>
  <thead><tr>${headers.map((h) => `<th${h.startsWith('~') ? ' class="mono"' : ''}>${h.replace(/^~/, '')}</th>`).join('')}</tr></thead>
  <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>`;
}

export const acc = (clause, title, body, norm) =>
  `<details class="acc"${norm ? ` data-norm="${norm}"` : ''}>
    <summary>${clause ? `<span class="acc-clause">${clause}</span>` : ''}<span>${title}</span></summary>
    <div class="acc-body">${body}</div>
  </details>`;

export const steps = (items) =>
  `<div class="steps">${items.map((s) => `<div class="step"><div><h4>${s.t}</h4><p>${s.d}</p>${s.meta ? `<div class="step-meta">${s.meta}</div>` : ''}</div></div>`).join('')}</div>`;

export const timeline = (items) =>
  `<div class="timeline">${items.map((i) => `<div class="tl-item"${i.hot ? ' data-hot="1"' : ''}>
    <div class="tl-date">${i.d}</div><div class="tl-title">${i.t}</div><div class="tl-body">${i.b}</div></div>`).join('')}</div>`;

export function checklist(id, title, items) {
  return `<div class="checklist" data-ck="${id}">
    <div class="checklist-head"><span>${title}</span><span class="prog" data-prog>0 / ${items.length}</span></div>
    ${items.map((it, i) => `<label class="ck-item"><input type="checkbox" data-ck-i="${i}"><span>${it}</span></label>`).join('')}
  </div>`;
}

export const linklist = (items) =>
  `<div class="linklist">${items.map(([n, d, u]) =>
    `<a class="linkrow" href="${u}" target="_blank" rel="noopener noreferrer">
      <span class="lr-name">${n}</span><span class="lr-desc">${d}</span><span class="lr-go">abrir ↗</span></a>`).join('')}</div>`;

/** Bloque «anatomía de requisito» de una cláusula. */
export function clauseBlock(c) {
  return `
  <p><strong>Requisito.</strong> ${c.req}</p>
  <p><strong>Intención.</strong> ${c.intent}</p>
  <div class="req-grid two">
    <div><dt>Evidencia objetiva a pedir</dt><dd><ul style="padding-left:16px;margin:6px 0 0">${c.evid.map((e) => `<li>${e}</li>`).join('')}</ul></dd></div>
    <div><dt>Preguntas de auditoría</dt><dd><ul style="padding-left:16px;margin:6px 0 0">${c.preg.map((e) => `<li>${e}</li>`).join('')}</ul></dd></div>
  </div>
  ${callout('warn', 'Hallazgo típico', `<p>${c.hallazgo}</p>`)}
  ${callout('trap', 'La trampa', `<p>${c.trampa}</p>`)}`;
}

export const pager = (prev, next) => `<nav class="pager">
  ${prev ? `<a href="#/${prev[0]}"><span class="p-dir">← Anterior</span><span class="p-t">${prev[1]}</span></a>` : '<span style="flex:1"></span>'}
  ${next ? `<a class="next" href="#/${next[0]}"><span class="p-dir">Siguiente →</span><span class="p-t">${next[1]}</span></a>` : '<span style="flex:1"></span>'}
</nav>`;
