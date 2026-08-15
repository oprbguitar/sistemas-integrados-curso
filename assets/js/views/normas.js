/* ============================================================
   SIG Lab — Vistas: Integración · Las normas · Documental
   ============================================================ */
import { NORMAS, COMUNES, PROPIAS, DOCS_OBLIGATORIOS, FALSOS_AMIGOS } from '../data/normas.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, badge, table, acc, clauseBlock, checklist, pager } from './ui.js';

/* ══════════════════════════════════════════════════════════
   Integración
   ══════════════════════════════════════════════════════════ */
export function integracion() {
  return `
${head('Arquitectura del sistema', 'Anexo SL,<br><em>y qué significa integrar</em>',
  `La decisión más importante de todo el programa no es qué normas certificar: es <strong>hasta qué nivel integrarlas</strong>.
   Esta página separa lo que se integra de lo que no, y da el criterio para elegir el nivel que tu organización puede sostener.`)}

${sec('01', 'Tres palabras que no son sinónimas', 'Coordinar, combinar e integrar describen tres cosas distintas. Solo una cambia la arquitectura del sistema.')}

<div class="grid g3">
${card(`<div class="card-kicker">Nivel superficial</div><h3>Coordinar</h3>
  <p class="small muted mb0">Tres sistemas separados que comparten calendario y personas. Las auditorías se hacen la misma semana
  para molestar menos. <strong>Nada cambia en la arquitectura</strong>: siguen siendo tres sistemas.</p>`, { norm: '9001' })}
${card(`<div class="card-kicker">Nivel intermedio</div><h3>Combinar</h3>
  <p class="small muted mb0">Documentos comunes para lo que es común: un procedimiento de control documental, uno de auditoría interna.
  Los sistemas siguen teniendo lógicas propias pero <strong>comparten infraestructura</strong>.</p>`, { norm: '14001' })}
${card(`<div class="card-kicker">Nivel profundo</div><h3>Integrar</h3>
  <p class="small muted mb0">Un solo sistema de gestión con múltiples disciplinas. Una política, un mapa de procesos, un tablero,
  una revisión por la dirección. <strong>Las normas dejan de ser el organizador</strong>: el organizador es el proceso.</p>`, { norm: 'sig' })}
</div>

${callout('key', 'La frase que resume todo el módulo 4',
  `<p class="mb0"><strong>Se integra la gobernanza; no se fusionan las metodologías técnicas de evaluación.</strong>
  Un sistema integrado correcto tiene una sola revisión por la dirección y tres matrices de riesgo distintas.
  Si tienes tres revisiones por la dirección, no integraste. Si tienes una sola matriz, destruiste tres metodologías.</p>`)}

${sec('02', 'Los tres niveles y cómo elegir el tuyo', 'Adaptado del enfoque de UNE 66177. El nivel alcanzable lo determina la madurez, no el entusiasmo del equipo.')}

${fig('integrationLevels', '06', 'Escalera de integración',
  'Cada nivel supone el anterior consolidado. Saltar del nivel 1 al 3 produce sistemas documentalmente elegantes y operativamente muertos — el patrón exacto del caso 5 de la sección de casuística.')}

${fig('maturityRadar', '07', 'El diagnóstico que decide el nivel',
  'Ocho ejes en escala de 1 a 5. Un índice global bajo 3 significa que el nivel avanzado no es sostenible todavía. Un perfil dentado — cuatros y doses alternados — certifica igual que uno parejo, pero colapsa en la primera auditoría de seguimiento.')}

${table(
  ['Índice de madurez', 'Nivel alcanzable', 'Qué priorizar primero'],
  [
    ['<strong>1,0 – 2,0</strong>', 'Ninguno. Estabilizar antes de integrar.', 'Definir procesos y dueños. Sin eso no hay nada que integrar.'],
    ['<strong>2,1 – 3,0</strong>', 'Nivel 1 — Coordinación', 'Política integrada, control documental único, auditorías combinadas.'],
    ['<strong>3,1 – 4,0</strong>', 'Nivel 2 — Integración de procesos', 'Mapa de procesos único, objetivos comunes, una revisión por la dirección.'],
    ['<strong>4,1 – 5,0</strong>', 'Nivel 3 — Integración estratégica', 'Riesgo unificado con ERM, indicadores atados a la estrategia y a ESG.']
  ])}

${sec('03', 'Qué se funde y qué no', 'La matriz de correspondencia responde esto requisito por requisito.')}

${fig('correspondenceGrid', '08', 'Diecisiete requisitos contra cuatro normas',
  'Sólido = plenamente integrable. Rayado con color = común pero con matiz propio de la norma, que hay que respetar en la redacción. Punteado = requisito propio no integrable. Nueve filas plenamente integrables es donde vive el ahorro real del SIG.')}

<div class="grid g2">
${card(`<h4>Se integra sin pérdida</h4><ul class="small" style="color:var(--muted);margin-bottom:0">
  <li>Alcance, política y objetivos</li>
  <li>Análisis de contexto y partes interesadas</li>
  <li>Control de la información documentada</li>
  <li>Competencia, formación y toma de conciencia</li>
  <li>Comunicación interna y externa</li>
  <li>Programa e informes de auditoría interna</li>
  <li>Revisión por la dirección</li>
  <li>No conformidades y acciones correctivas</li>
  <li>Matriz de requisitos legales</li>
  <li>Plan de preparación y respuesta ante emergencias</li>
</ul>`, { norm: 'sig' })}
${card(`<h4>No se integra nunca</h4><ul class="small" style="color:var(--muted);margin-bottom:0">
  <li><strong>IPERC</strong> — evalúa daño a la persona</li>
  <li><strong>Matriz de aspectos e impactos</strong> — evalúa alteración del medio</li>
  <li><strong>Evaluación de riesgo de soborno</strong> — evalúa exposición a conducta ilícita</li>
  <li><strong>Consulta y participación</strong> (cl. 5.4) — propio de SST</li>
  <li><strong>Diseño y desarrollo</strong> (cl. 8.3) — propio de calidad</li>
  <li><strong>Debida diligencia de terceros</strong> — propio de antisoborno</li>
  <li><strong>Investigación de incidentes</strong> — propio de SST y con obligación legal</li>
</ul>`, { norm: '45001' })}
</div>

${callout('trap', 'Por qué las escalas no se pueden unificar',
  `<p class="mb0">Una lesión con incapacidad permanente, un vertimiento a un cuerpo de agua y un pago irregular a un funcionario
  no son comparables en una escala común de «severidad 1 a 5». No existe una unidad que los mida a los tres.
  Forzar la escala produce números que parecen gestión y no lo son: cuando el sistema prioriza, prioriza mal.
  <strong>Tres preguntas distintas exigen tres escalas distintas.</strong></p>`)}

${sec('04', 'Partes interesadas: de la lista a la obligación', 'La cláusula 4.2 no pide un listado. Pide una decisión sobre qué expectativas se convierten en obligaciones.')}

${fig('stakeholderQuadrant', '09', 'Poder, interés y el paso que casi nadie da',
  'El cuadrante es la parte fácil. El flujo de seis pasos de la derecha es lo que realmente exige la cláusula: identificar, determinar la expectativa, decidir si se adopta, clasificarla como legal o voluntaria, y enlazarla a un riesgo.')}

${sec('05', 'Vocabulario: los errores que cuestan puntos', 'Los pares que se confunden en examen y en auditoría.')}

${table(['Término', 'Definición operativa', 'Ejemplo o consecuencia'], FALSOS_AMIGOS)}

${pager(['ruta', 'Ruta de estudio'], ['normas', 'Las normas, cláusula por cláusula'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Las normas
   ══════════════════════════════════════════════════════════ */
export function normas() {
  return `
${head('Referencia técnica', 'Las normas,<br><em>cláusula por cláusula</em>',
  `Cada cláusula desarmada con la lente de auditor: <strong>requisito → intención → evidencia a pedir → preguntas →
   hallazgo típico → la trampa</strong>. Las trampas son la parte más útil: son el motivo por el que sistemas
   técnicamente correctos reciben no conformidades.`)}

${sec('01', 'Las cuatro normas y su objeto de protección', 'Todo lo que diverge entre ellas se deduce de esta diferencia.')}

<div class="grid g2">
${Object.values(NORMAS).map((n) => card(`
  <div class="card-kicker">${n.t}</div>
  <h3>${n.n}</h3>
  <p class="small"><strong>Objetivo.</strong> ${n.obj}</p>
  <p class="small">${n.riesgo}</p>
  <h4 style="margin-top:16px">Requisitos que no comparte con nadie</h4>
  <ul class="small" style="color:var(--muted)">${n.propio.map((p) => `<li>${p}</li>`).join('')}</ul>
  <p class="small muted" style="border-top:1px solid var(--hairline);padding-top:12px;margin-bottom:0">
    <em>${n.cifra}</em><br><span style="font-size:11px">${n.ntp}</span></p>`, { norm: n.k })).join('')}
</div>

${sec('02', 'El tronco común', `Estas ${COMUNES.length} cláusulas son sustancialmente idénticas en las cuatro normas. Dominarlas es dominar el 70 % del sistema integrado.`)}

${COMUNES.map((c) => acc(c.cl, c.t, clauseBlock(c), c.norm)).join('')}

${sec('03', 'Las cláusulas propias', 'Aquí vive la identidad de cada norma. Ninguna estrategia de integración debe tocarlas.')}

${PROPIAS.map((c) => acc(c.cl, `${c.t} <span class="badge" data-norm="${c.norm}" style="margin-left:8px">ISO ${c.norm}</span>`, clauseBlock(c), c.norm)).join('')}

${sec('04', 'Diagramas de apoyo', 'Los tres conceptos propios que más se malinterpretan, en forma visual.')}

${fig('lifecycle', '10', 'Perspectiva de ciclo de vida — ISO 14001',
  'La distinción entre «controlar» e «influir» es todo el requisito. Las etapas bajo control generan requisitos operacionales; las etapas bajo influencia generan requisitos de comunicación y de especificación contractual. Ninguna de las dos puede quedar vacía.')}

${fig('controlHierarchy', '11', 'Jerarquía de controles — ISO 45001',
  'El requisito no es «aplicar la jerarquía»: es aplicarla <em>en orden</em> y poder demostrar por qué cada nivel superior no fue viable. Un IPERC que solo dice «EPP» sin ese rastro es el hallazgo más frecuente en obra.', { interactive: true })}

${fig('bowtie', '12', 'Análisis de corbatín para riesgos críticos',
  'Herramienta avanzada que ISO no exige pero que todo consultor experimentado usa en los riesgos de alta consecuencia. Divide el análisis en prevención (izquierda, reduce probabilidad) y mitigación (derecha, reduce severidad), y obliga a nombrar cada barrera con su dueño y su verificación.')}

${pager(['integracion', 'Anexo SL e integración'], ['procesos', 'Gestión por procesos'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Información documentada
   ══════════════════════════════════════════════════════════ */
export function documental() {
  return `
${head('Módulo 4', 'Información<br><em>documentada</em>',
  `Desde 2015 ISO no exige manual ni procedimientos obligatorios. Devolvió la decisión a la organización — y con ella,
   la responsabilidad. Esta página resuelve las dos preguntas prácticas: <strong>qué es obligatorio</strong> y
   <strong>qué se puede fusionar</strong>.`)}

${sec('01', 'La arquitectura', 'Cuatro niveles. El volumen crece hacia abajo; la autoridad de aprobación, hacia arriba.')}

${fig('docPyramid', '13', 'Pirámide documental del sistema integrado',
  'El nivel 4 es el único que un auditor audita realmente. Los tres superiores describen intención; los registros prueban que ocurrió. Un sistema con mucha pirámide superior y poco registro es un sistema de papel.', { interactive: true })}

${callout('key', 'El cambio de 2015 que casi nadie aprovechó',
  `<p class="mb0">Desapareció la obligación del manual de calidad y de los seis procedimientos documentados.
  La mayoría de las organizaciones <strong>los conservó por inercia</strong>. Si estás rediseñando un sistema,
  esta es la oportunidad de reducción documental más grande disponible — siempre que puedas demostrar que
  la información necesaria para operar y controlar los procesos sigue existiendo.</p>`)}

${sec('02', 'Inventario de lo obligatorio', 'Qué exige literalmente cada norma, y el veredicto de fusión para cada elemento.')}

${table(
  ['Información documentada', '~9001', '~14001', '~45001', '~37001', 'Veredicto de integración'],
  DOCS_OBLIGATORIOS.map((r) => [
    `<strong>${r[0]}</strong>`,
    r[1] === '✔' ? '<span class="badge" data-norm="9001">sí</span>' : '<span class="muted">—</span>',
    r[2] === '✔' ? '<span class="badge" data-norm="14001">sí</span>' : '<span class="muted">—</span>',
    r[3] === '✔' ? '<span class="badge" data-norm="45001">sí</span>' : '<span class="muted">—</span>',
    r[4] === '✔' ? '<span class="badge" data-norm="37001">sí</span>' : '<span class="muted">—</span>',
    r[5].startsWith('No fusionable') || r[5].startsWith('Propio')
      ? `<span style="color:var(--risk)">${r[5]}</span>` : `<span class="muted">${r[5]}</span>`
  ]))}

${sec('03', 'La política integrada', 'Un solo documento que debe satisfacer los compromisos de cuatro normas a la vez.')}

<div class="grid g2">
${card(`<h4>Compromisos obligatorios por norma</h4>
  <p class="small muted">Si integras la política, deben estar <strong>todos</strong>. Omitir uno es no conformidad en esa norma.</p>
  <ul class="small" style="color:var(--muted);margin-bottom:0">
    <li><strong>Las cuatro:</strong> cumplir los requisitos aplicables · mejorar continuamente el sistema</li>
    <li><strong>ISO 14001:</strong> proteger el medio ambiente · prevenir la contaminación · cumplir las obligaciones de cumplimiento</li>
    <li><strong>ISO 45001:</strong> condiciones de trabajo seguras y saludables · eliminar peligros y reducir riesgos · <strong>consulta y participación de los trabajadores</strong></li>
    <li><strong>ISO 37001:</strong> prohibir el soborno · cumplir la legislación antisoborno · fomentar la denuncia de buena fe sin represalias · autoridad e independencia de la función de cumplimiento</li>
  </ul>`, { norm: 'sig' })}
${card(`<h4>Prueba de política auditable</h4>
  <p class="small muted">Lee tu política y aplica estas cuatro pruebas. Si falla alguna, reescríbela.</p>
  <ol class="small" style="color:var(--muted);margin-bottom:0">
    <li><strong>Prueba del compromiso.</strong> ¿Cada párrafo contiene un verbo de compromiso verificable, o solo adjetivos?</li>
    <li><strong>Prueba del marco.</strong> ¿Puedo derivar de ella al menos un objetivo medible de cada disciplina?</li>
    <li><strong>Prueba de la sustitución.</strong> ¿Podría cambiar el nombre de mi empresa por el de otra sin que nadie lo note? Si sí, es genérica.</li>
    <li><strong>Prueba del piso.</strong> ¿Un operario puede señalar algo concreto de su trabajo que cumpla un compromiso de la política?</li>
  </ol>`, { norm: '9001' })}
</div>

${callout('trap', 'La política-poema',
  `<p class="mb0">«Somos una empresa comprometida con la excelencia, la calidad, el medio ambiente, la seguridad de nuestros
  colaboradores y el desarrollo sostenible del país.» Cero compromisos verificables, cero marco para objetivos, y sirve
  para cualquier organización del planeta. Es el hallazgo más fácil de abrir y el más incómodo de discutir, porque
  normalmente la firmó el Gerente General.</p>`)}

${sec('04', 'Control documental que sobrevive a una auditoría', 'Seis controles y las preguntas con las que se verifican.')}

${table(
  ['Control exigido', 'Qué se verifica en campo'],
  [
    ['<strong>Identificación y descripción</strong>', 'Código, título, fecha, autor. ¿Dos documentos distintos comparten código?'],
    ['<strong>Formato y medio</strong>', '¿El operario puede leerlo en el punto de uso? Un PDF en un servidor no sirve en un frente de obra sin señal.'],
    ['<strong>Revisión y aprobación</strong>', 'Evidencia de <em>quién</em> aprobó y con qué autoridad. Una firma escaneada reutilizada no es aprobación.'],
    ['<strong>Distribución y acceso</strong>', '¿Cómo sabe el usuario que tiene la versión vigente? Esta es la pregunta que más obsoletos descubre.'],
    ['<strong>Conservación y preservación</strong>', 'Tiempo de retención por documento, contrastado con la exigencia legal, no solo con la conveniencia interna.'],
    ['<strong>Control de cambios y obsoletos</strong>', 'Trazabilidad de versiones y prevención del uso no intencionado de lo obsoleto.']
  ])}

${callout('warn', 'Retención legal en Perú — la norma ISO no la fija, la ley sí',
  `<p class="mb0">Los registros de SST tienen plazos propios establecidos por el D.S. 005-2012-TR: los registros de exámenes
  médicos ocupacionales se conservan <strong>cinco años</strong> después del cese del vínculo laboral, el registro de accidentes
  de trabajo <strong>diez años</strong>, y el de enfermedades ocupacionales <strong>veinte años</strong>. Definir «3 años» en tu lista maestra
  porque suena razonable es un incumplimiento legal, no solo normativo. Verifica siempre la norma vigente.</p>`)}

${checklist('doc-audit', 'Autoauditoría rápida de control documental', [
  'Toda la información documentada obligatoria de las cuatro normas está identificada y existe.',
  'Existe una lista maestra única, no una por norma.',
  'Cada documento tiene versión, fecha de aprobación y aprobador identificado.',
  'Los tiempos de retención se contrastaron con la exigencia legal peruana aplicable.',
  'Los documentos de origen externo (normas, requisitos de cliente, legales) están controlados.',
  'Se verificó en el punto de uso que la versión disponible es la vigente.',
  'Los documentos obsoletos están retirados o identificados para evitar uso no intencionado.',
  'Ningún procedimiento vigente menciona «acción preventiva» ni «representante de la dirección».',
  'La política contiene los compromisos obligatorios de las cuatro normas integradas.',
  'El volumen documental es menor que la suma de los sistemas separados, sin perder requisitos.'
])}

${pager(['riesgos', 'Riesgo en sus tres lenguajes'], ['auditoria', 'Auditoría interna'])}
`;
}
