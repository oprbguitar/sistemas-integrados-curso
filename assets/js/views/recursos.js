/* ============================================================
   SIG Lab — Vistas: Certificación · Ayuda memoria · Recursos
   ============================================================ */
import { DOS_RUTAS, CADENA, PROVEEDORES, ESQUEMAS, PRECIOS, AHORRO_INTEGRACION, CHECKLIST_CURSO, FUENTES } from '../data/certificacion.js';
import { REGLAS, FORMULAS, PREGUNTAS_ORO, GLOSARIO } from '../data/practica.js';
import { FALSOS_AMIGOS } from '../data/normas.js';
import { META } from '../data/curso.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, badge, table, checklist, acc, linklist, pager } from './ui.js';

/* ══════════════════════════════════════════════════════════
   Certificación
   ══════════════════════════════════════════════════════════ */
export function certificacion() {
  return `
${head('Decisión informada', 'Rutas de<br><em>certificación</em>',
  `Dos preguntas que se confunden todo el tiempo: <strong>certificar a la empresa</strong> y
   <strong>certificarse uno mismo</strong> son caminos distintos, con actores, plazos y precios distintos.
   Esta página los separa, muestra la cadena de acreditación que da valor real al certificado, y lista
   precios referenciales verificables.`)}

${callout('warn', 'Sobre los precios de esta página',
  `<p class="mb0">Todas las cifras son <strong>referenciales, recogidas en agosto de 2026</strong> de páginas públicas de los
  proveedores. Los precios de formación y certificación cambian con frecuencia y varían por promoción, tamaño de grupo,
  modalidad y alcance. <strong>Confirma siempre con el proveedor antes de decidir</strong>, y verifica si el precio incluye IGV.</p>`)}

${sec('01', 'Las dos rutas', 'Antes de cotizar nada, ten claro cuál de las dos estás buscando.')}

<div class="grid g2">
${DOS_RUTAS.map((r) => card(`
  <div class="card-kicker">${r.q}</div>
  <h3>${r.t}</h3>
  <p class="small">${r.a}</p>
  <div class="req-grid">
    <div><dt>Quién lo emite</dt><dd>${r.quien}</dd></div>
    <div><dt>Cuánto vale realmente</dt><dd>${r.vale}</dd></div>
    <div><dt>Plazo</dt><dd>${r.plazo}</dd></div>
  </div>`, { norm: r.col })).join('')}
</div>

${sec('02', 'La cadena de confianza', 'Por qué un certificado sin acreditación vale menos — y a veces no vale nada fuera del país.')}

${fig('certRoute', '23', 'Ruta a la certificación acreditada',
  'Tres carriles y catorce meses. Fíjate en el carril inferior: el organismo de acreditación no audita a tu empresa, audita a tu certificador. Esa cadena es lo que hace que un certificado emitido en Lima sea aceptado en una licitación en Rotterdam.', { interactive: true })}

<div class="grid g4">
${CADENA.map((c) => card(`
  <div class="card-kicker">${c.n}</div>
  <h4>${c.t}</h4>
  <p class="small muted mb0">${c.d}</p>`, { norm: c.col === 'acc' ? 'sig' : c.col })).join('')}
</div>

${callout('key', 'La verificación que toma dos minutos y ahorra miles de soles',
  `<p class="mb0">Antes de contratar a un organismo certificador en Perú, comprueba que esté acreditado consultando el
  <a href="https://www.inacal.gob.pe/principal/categoria/odcdp" target="_blank" rel="noopener noreferrer">directorio de
  Organismos de Certificación de Sistemas de Gestión del INACAL</a> y el alcance exacto de su acreditación —
  un organismo puede estar acreditado para ISO 9001 y no para ISO 45001. Un certificado sin acreditación es válido
  comercialmente, pero no será reconocido en cadenas de suministro internacionales ni en muchas licitaciones públicas.</p>`)}

${sec('03', 'Esquemas de registro de auditores', 'El punto donde más expectativas se rompen: aprobar el curso no es estar registrado.')}

${ESQUEMAS.map((e) => acc('', `<strong>${e.n}</strong> — ${e.org}`, `
  <div class="req-grid two">
    <div><dt>Normas cubiertas</dt><dd>${e.normas}</dd></div>
    <div><dt>Formación</dt><dd>${e.curso}</dd></div>
    <div><dt>Grados del esquema</dt><dd>${e.grados}</dd></div>
    <div><dt>Disponibilidad en Perú</dt><dd>${e.peru}</dd></div>
  </div>
  <p class="small mt6"><strong>Requisito real de registro.</strong> ${e.requisito}</p>
  ${callout('trap', 'Ojo con esto', `<p class="mb0">${e.ojo}</p>`)}
`, 'sig')).join('')}

${callout('trap', 'La confusión más cara del mercado formativo',
  `<p class="mb0">«Curso certificado por IRCA» significa que <strong>el curso</strong> está aprobado por IRCA, no que
  <strong>tú</strong> quedes registrado como auditor IRCA al terminarlo. El certificado del curso acredita que cumpliste
  el requisito formativo. El registro como Auditor Líder exige además formación académica, experiencia laboral y un
  número mínimo de auditorías completas efectivamente realizadas y registradas. Entre una cosa y la otra puede haber
  entre uno y tres años.</p>`)}

${sec('04', 'Proveedores con presencia en Perú', 'Verificados en agosto de 2026. La oferta cambia; los enlaces llevan a la fuente.')}

${PROVEEDORES.map((p) => card(`
  <div class="row" style="justify-content:space-between;align-items:flex-start">
    <div style="flex:1;min-width:240px">
      <h4 style="margin-bottom:4px"><a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.n} ↗</a></h4>
      <div class="card-kicker">${p.tipo}</div>
    </div>
  </div>
  <p class="small" style="margin-top:12px"><strong>Oferta.</strong> ${p.of}</p>
  <p class="small"><strong>Precio referencial.</strong> ${p.precio}</p>
  <p class="small muted mb0"><em>${p.nota}</em></p>`, { norm: 'sig' })).join('')}

${sec('05', 'Precios referenciales de mercado', 'Perú, agosto de 2026. Rangos, no cotizaciones.')}

${table(['Concepto', 'Rango referencial', 'Modalidad típica', 'Para qué sirve'],
  PRECIOS.map((p) => [`<strong>${p[0]}</strong>`, `<span class="mono">${p[1]}</span>`, p[2], `<span class="muted">${p[3]}</span>`]))}

${sec('06', 'Cuánto ahorra realmente integrar', 'El argumento cuantificable para justificar el proyecto.')}

${table(['Concepto', 'Efecto de la integración'], AHORRO_INTEGRACION.map((a) => [`<strong>${a[0]}</strong>`, a[1]]))}

${callout('warn', 'El costo que sí aumenta',
  `<p class="mb0">El diseño inicial. Integrar mal cuesta más que no integrar, porque produce un sistema que la operación
  abandona y que hay que rehacer completo. Si vas a contratar consultoría, verifica que el consultor domine
  <strong>las cuatro normas</strong>, no tres y una de oídas — y pídele que te explique por qué no fusionaría el IPERC
  con la matriz de aspectos. La respuesta te dirá todo lo que necesitas saber.</p>`)}

${sec('07', 'Antes de matricularte', 'Diez preguntas al proveedor. Ninguna es incómoda si el programa es serio.')}

${checklist('curso-check', 'Preguntas al proveedor de formación', CHECKLIST_CURSO)}

${callout('tip', 'Qué necesitas realmente',
  `<ul class="small mb0" style="color:var(--ink-2)">
    <li><strong>Entender el sistema para trabajar en él</strong> → curso de interpretación o programa de especialización. No necesitas IRCA.</li>
    <li><strong>Auditar internamente en tu organización</strong> → curso de auditor interno. Basta con certificación del proveedor.</li>
    <li><strong>Implementar sistemas como consultor</strong> → programa de especialización integrado + experiencia real. La credencial pesa menos que el portafolio.</li>
    <li><strong>Auditar para un organismo certificador o hacer carrera internacional</strong> → ahí sí, ruta CQI/IRCA o Exemplar Global, con el registro completo.</li>
  </ul>`)}

${pager(['casos', 'Casuística aplicada'], ['memoria', 'Ayuda memoria'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Ayuda memoria
   ══════════════════════════════════════════════════════════ */
export function memoria() {
  return `
${head('Repaso rápido', 'Ayuda<br><em>memoria</em>',
  `Todo lo que conviene tener a mano el día antes de un examen, de una auditoría o de una reunión con un cliente.
   Reglas duras, fórmulas, preguntas de alto rendimiento y glosario. Esta página está pensada para imprimirse.`)}

${sec('01', 'Diez reglas duras', 'Si solo memorizas una cosa de todo el sitio, que sea esto.')}

<div class="grid g2">
${REGLAS.map((r, i) => card(`
  <div class="card-kicker">Regla ${String(i + 1).padStart(2, '0')}</div>
  <h4>${r.t}</h4>
  <p class="small muted mb0">${r.d}</p>`, { norm: i % 2 === 0 ? 'sig' : '9001' })).join('')}
</div>

${sec('02', 'La estructura, de memoria', 'Los diez capítulos y su cuadrante. Debe salir sin pensar.')}

${table(['~Cap.', 'Título', '~PHVA', 'Qué contiene realmente'],
  [
    ['1–3', 'Objeto, referencias, términos', '—', '<span class="muted">No auditable. Pero el cap. 3 define el vocabulario que decide si un hallazgo se sostiene.</span>'],
    ['<strong>4</strong>', 'Contexto de la organización', '<span class="badge" data-norm="9001">P</span>', 'Cuestiones internas y externas · partes interesadas · alcance · el sistema y sus procesos'],
    ['<strong>5</strong>', 'Liderazgo', '<span class="badge" data-norm="9001">P</span>', 'Liderazgo y compromiso · política · roles y autoridades · <em>(45001: + consulta y participación)</em>'],
    ['<strong>6</strong>', 'Planificación', '<span class="badge" data-norm="9001">P</span>', 'Riesgos y oportunidades · aspectos / peligros / requisitos legales · objetivos y planificación'],
    ['<strong>7</strong>', 'Apoyo', '<span class="badge" data-norm="45001">H</span>', 'Recursos · competencia · toma de conciencia · comunicación · información documentada'],
    ['<strong>8</strong>', 'Operación', '<span class="badge" data-norm="45001">H</span>', 'Planificación y control operacional · emergencias · <em>(9001: + diseño, compras, producción)</em>'],
    ['<strong>9</strong>', 'Evaluación del desempeño', '<span class="badge" data-norm="14001">V</span>', 'Seguimiento y medición · evaluación del cumplimiento legal · auditoría interna · revisión por la dirección'],
    ['<strong>10</strong>', 'Mejora', '<span class="badge" data-norm="37001">A</span>', 'Generalidades · no conformidad y acción correctiva · mejora continua']
  ])}

${sec('03', 'Fórmulas y cálculos', 'Los diez cálculos que aparecen en examen y en tablero.')}

${FORMULAS.map((f) => card(`
  <div class="row" style="justify-content:space-between;align-items:baseline;gap:16px">
    <h4 style="margin:0">${f.n}</h4>
    <code style="white-space:normal">${f.f}</code>
  </div>
  <p class="small muted" style="margin:12px 0 0">${f.d}</p>`, { norm: 'sig' })).join('')}

${sec('04', 'Preguntas de auditoría de alto rendimiento', 'Diez preguntas que producen más evidencia que cualquier lista de verificación.')}

${table(['Pregunta', 'Por qué funciona'], PREGUNTAS_ORO.map((p) => [`<strong>${p.p}</strong>`, `<span class="muted">${p.porq}</span>`]))}

${sec('05', 'Falsos amigos del vocabulario', 'Los pares que se confunden y cuestan puntos.')}

${table(['Término', 'Definición operativa', 'Ejemplo o consecuencia'], FALSOS_AMIGOS)}

${sec('06', 'Glosario', `${GLOSARIO.length} términos. Los marcados con color pertenecen a una norma específica; el resto son del tronco común.`)}

${table(['Término', 'Definición', '~Origen'],
  GLOSARIO.map(([t, d, n]) => [
    `<strong>${t}</strong>`, `<span class="muted">${d}</span>`,
    n === 'comun' ? '<span class="badge">común</span>' : `<span class="badge" data-norm="${n}">ISO ${n}</span>`
  ]))}

${sec('07', 'Diagramas para repaso visual', 'Los cuatro que conviene poder reproducir a mano en una pizarra.')}

${fig('annexSL', '24', 'La estructura de diez capítulos', 'Si puedes dibujar esto de memoria y ubicar el PHVA, tienes el esqueleto completo del sistema.', { interactive: true })}
${fig('docPyramid', '25', 'Pirámide documental', 'Cuatro niveles, volumen creciente hacia abajo, autoridad creciente hacia arriba.', { interactive: true })}
${fig('auditCycle', '26', 'Ciclo de auditoría', 'Seis fases con su salida característica. Es la secuencia que se pregunta literalmente en los exámenes de auditor.', { interactive: true })}
${fig('ncAnatomy', '27', 'Anatomía de un hallazgo', 'Requisito, evidencia, desviación. Y las tres clasificaciones con su consecuencia.', { interactive: true })}

${pager(['certificacion', 'Rutas de certificación'], ['recursos', 'Fuentes y recursos'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Recursos
   ══════════════════════════════════════════════════════════ */
export function recursos() {
  return `
${head('Verificable', 'Fuentes<br><em>y recursos</em>',
  `Todo enlace lleva a una fuente primaria. Ninguna afirmación de este sitio pretende sustituir el texto normativo,
   la ley vigente o la información oficial del proveedor de formación.`)}

${FUENTES.map((g, i) => `
${sec(String(i + 1).padStart(2, '0'), g.g, '')}
${linklist(g.items)}
`).join('')}

${sec('06', 'Cómo verificar por tu cuenta', 'Cuatro comprobaciones que conviene hacer antes de tomar cualquier decisión con dinero de por medio.')}

${table(['Qué verificar', 'Dónde', 'Qué buscar exactamente'],
  [
    ['<strong>Que tu certificador esté acreditado</strong>', 'Directorio de acreditados del INACAL', 'Que aparezca el organismo <em>y</em> que su alcance de acreditación incluya la norma que quieres certificar.'],
    ['<strong>Que el curso esté aprobado por el esquema</strong>', 'Sitio del esquema (CQI/IRCA, Exemplar Global, PECB)', 'El código del curso y el proveedor aprobado. No basta con que el proveedor lo afirme.'],
    ['<strong>El estado real de la revisión de la norma</strong>', 'Página de la norma en iso.org', 'La etapa (DIS, FDIS, publicada) y la fecha. Los blogs comerciales suelen adelantarse.'],
    ['<strong>El texto legal peruano vigente</strong>', 'Plataforma del Estado Peruano y El Peruano', 'Modificatorias posteriores. Las leyes de SST peruanas se han modificado varias veces.']
  ])}

${sec('07', 'Sobre este material', '')}

<div class="grid g2">
${card(`<h4>Origen y alcance</h4>
  <p class="small muted">Guía de estudio original elaborada a partir de la estructura pública del
  <a href="${META.url}" target="_blank" rel="noopener noreferrer">${META.programa}</a> de ${META.proveedor}.</p>
  <p class="small muted mb0">Este sitio <strong>no está afiliado a Bureau Veritas</strong> ni a ningún organismo de certificación,
  y no reproduce materiales del programa. Es material de estudio independiente con interpretación propia.</p>`, { norm: 'sig' })}
${card(`<h4>Sobre las normas ISO</h4>
  <p class="small muted">El contenido <strong>parafrasea e interpreta</strong> requisitos con fines educativos.
  No reproduce el texto de las normas, protegido por derechos de autor.</p>
  <p class="small muted mb0">Obtén el texto oficial en <a href="https://www.iso.org/" target="_blank" rel="noopener noreferrer">ISO</a>
  o, como Norma Técnica Peruana, en <a href="https://www.gob.pe/inacal" target="_blank" rel="noopener noreferrer">INACAL</a>.</p>`, { norm: '9001' })}
${card(`<h4>Legislación peruana</h4>
  <p class="small muted">Referencias actualizadas a agosto de 2026. La normativa peruana de SST y ambiental
  cambia con frecuencia.</p>
  <p class="small muted mb0"><strong>Esto es material de estudio, no asesoría legal.</strong> Verifica siempre la
  versión vigente y sus modificatorias antes de aplicar cualquier plazo o requisito.</p>`, { norm: '45001' })}
${card(`<h4>Precios y fechas</h4>
  <p class="small muted">Todos los montos son <strong>referenciales de agosto de 2026</strong>, tomados de páginas
  públicas de los proveedores.</p>
  <p class="small muted mb0">Cambian con frecuencia y varían por promoción, grupo, modalidad y alcance.
  Confirma directamente con cada proveedor.</p>`, { norm: '37001' })}
</div>

${callout('key', 'Licencia',
  `<p>Este material se publica bajo <strong>Licencia de Estudio SIG Lab</strong>: uso libre para estudio personal,
  docencia y capacitación interna sin fines de lucro, con atribución. Se permite copiar, adaptar y redistribuir con
  el mismo espíritu.</p>
  <p class="mb0">No se autoriza su comercialización como producto formativo ni su reventa. El texto completo está en el
  archivo <code>LICENSE</code> del repositorio.</p>`)}

${pager(['memoria', 'Ayuda memoria'], null)}
`;
}
