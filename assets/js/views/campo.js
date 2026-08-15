/* ============================================================
   SIG Lab — Vista: Modo campo
   ============================================================ */
import { FICHAS, ALCANCE_PROYECTO, REGLA_DIRECCION, EVIDENCIA, TRIANGULACION } from '../data/campo.js';
import { head, sec, callout, card, badge, table, acc, checklist, pager } from './ui.js';

export function campo() {
  return `
${head('La capa que falta', 'Modo<br><em>campo</em>',
  `La teoría responde <em>qué exige la norma</em>. Esta sección responde la otra pregunta:
   <strong>estoy parado frente a una organización real, ¿qué hago ahora?</strong>
   Ocho fichas de actuación con qué pedir, a quién preguntar, qué observar, qué producir
   y —lo más importante— <strong>cómo saber que lo hiciste bien</strong>.`)}

${callout('key', 'Cómo se usa esta sección',
  `<p>No se lee de corrido. Se abre por la situación en la que estás. Cada ficha es autónoma y termina
  con un <strong>criterio de aceptación</strong>: la lista con la que compruebas que tu entregable está
  realmente terminado y no solo escrito.</p>
  <p class="mb0">El último bloque de cada ficha —<em>dónde falla</em>— es el patrón de error que más veces
  se ve en campo. Léelo antes de empezar, no después.</p>`)}

${sec('01', 'Antes de nada: la pregunta que define el proyecto', 'La respuesta a esto predice el resultado mejor que cualquier cronograma.')}

${callout('trap', REGLA_DIRECCION.t, `<p class="mb0">${REGLA_DIRECCION.d}</p>`)}

<h3 class="sub">Cuatro formas de dimensionar el proyecto</h3>
<p class="prose muted">Cuando hay varias normas, varias sedes y plazo corto, estas son las opciones reales.
No son equivalentes: cada una compra algo distinto.</p>

${table(['~Opción', 'Estrategia', 'Cuándo tiene sentido'],
  ALCANCE_PROYECTO.map(([k, t, d]) => [
    k === 'D' ? `<strong style="color:var(--accent-ink)">${k}</strong>` : `<strong>${k}</strong>`,
    `<strong>${t}</strong>`, d]))}

${sec('02', 'Las ocho fichas de actuación', 'Abre la que corresponde a tu situación.')}

<div class="grid g4" style="margin-bottom:32px">
${FICHAS.map((f) => `<a class="linkrow" href="#ficha-${f.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
  <span class="lr-name" style="font-size:var(--fs-xs);font-family:var(--font-mono);color:var(--accent-ink)">${f.n}</span>
  <span style="font-size:var(--fs-sm);font-weight:600;line-height:1.3">${f.t}</span>
</a>`).join('')}
</div>

${FICHAS.map((f) => `
<div id="ficha-${f.id}" class="case" data-norm="${f.norm}" style="margin-bottom:40px">
  <div class="case-head">
    <div class="case-sector">Ficha ${f.n} · ${f.iso}</div>
    <h3 style="margin-top:8px;font-size:var(--fs-lg)">${f.t}</h3>
    <p class="small mb0" style="color:var(--ink-2)"><strong>Cuándo.</strong> ${f.cuando}</p>
  </div>
  <div class="case-body">
    <div class="callout key" style="margin-top:0">
      <div class="co-title">Objetivo de la intervención</div>
      <p class="mb0">${f.obj}</p>
    </div>

    <div class="grid g2">
      ${card(`<h4>Qué pedir por adelantado</h4>
        <ul class="small" style="color:var(--muted);margin-bottom:0">${f.pedir.map((x) => `<li>${x}</li>`).join('')}</ul>`, { norm: '9001' })}
      ${card(`<h4>Qué observar en campo</h4>
        <ul class="small" style="color:var(--muted);margin-bottom:0">${f.observar.map((x) => `<li>${x}</li>`).join('')}</ul>`, { norm: '14001' })}
    </div>

    <h4 class="mini">A quién preguntar y qué</h4>
    ${table(['Interlocutor', 'Pregunta'], f.preguntar.map((p) => [`<strong>${p.a}</strong>`, p.q]))}

    <div class="callout warn">
      <div class="co-title">La decisión de criterio</div>
      <p class="mb0">${f.decidir}</p>
    </div>

    <h4 class="mini">Qué produces</h4>
    <p class="small" style="color:var(--ink-2)">${f.producir}</p>

    ${checklist(`campo-${f.id}`, 'Criterio de aceptación — no está terminado hasta que', f.aceptacion)}

    <div class="callout trap" style="margin-bottom:0">
      <div class="co-title">Dónde falla en la práctica</div>
      <p class="mb0">${f.falla}</p>
    </div>
  </div>
</div>
`).join('')}

${sec('03', 'Fuerza de la evidencia', 'La diferencia entre un auditor que pregunta y uno que verifica. Para cada requisito hay tres niveles de prueba, y solo uno cierra el hallazgo.')}

${EVIDENCIA.map((e) => `
<div class="card" data-norm="sig" style="margin-bottom:12px">
  <div class="row" style="justify-content:space-between;align-items:baseline;margin-bottom:12px">
    <h4 style="margin:0">${e.t}</h4>${badge(e.cl, 'sig')}
  </div>
  <div class="req-grid">
    <div><dt>Evidencia débil</dt><dd style="color:var(--risk)">${e.debil}</dd></div>
    <div><dt>Evidencia media</dt><dd style="color:var(--warn)">${e.media}</dd></div>
    <div><dt>Evidencia fuerte</dt><dd style="color:var(--ok)">${e.fuerte}</dd></div>
  </div>
</div>`).join('')}

${sec('04', 'Triangular: nunca confíes en una sola fuente', 'El método que separa una conclusión defendible de una impresión.')}

<div class="card" data-norm="45001">
  <div class="card-kicker">Caso de demostración</div>
  <h3>${TRIANGULACION.caso}</h3>
  ${table(['Fuente', 'Lo que dice'],
    TRIANGULACION.fuentes.map(([f, d, k]) => [
      `<strong>${f}</strong>`,
      k === 'info' ? d : `<span style="color:var(--${k === 'warn' ? 'warn' : 'risk'})">${d}</span>`]))}
  <div class="callout key" style="margin-bottom:0">
    <div class="co-title">Conclusión correcta</div>
    <p class="mb0">${TRIANGULACION.conclusion}</p>
  </div>
</div>

${callout('tip', 'La regla de las cuatro fuentes',
  `<p class="mb0">Ante cualquier requisito importante, busca las cuatro: <strong>entrevista</strong> (lo que dicen que hacen),
  <strong>documento</strong> (lo que está establecido), <strong>registro</strong> (lo que quedó escrito que pasó) y
  <strong>observación</strong> (lo que realmente ocurre). Las contradicciones entre ellas <em>son</em> el hallazgo:
  no son un obstáculo para encontrarlo.</p>`)}

${pager(['casos', 'Casuística aplicada'], ['certificacion', 'Rutas de certificación'])}
`;
}
