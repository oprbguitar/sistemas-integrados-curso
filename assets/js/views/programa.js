/* ============================================================
   SIG Lab — Vistas: El programa · Ruta de estudio
   ============================================================ */
import { META, MODULOS, RUTA, CAMBIOS_2026, HITOS } from '../data/curso.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, badge, table, checklist, acc, pager } from './ui.js';

export function programa() {
  return `
${head('Módulo a módulo', 'El programa,<br><em>desarmado</em>',
  `Los seis módulos del programa con su temario, y encima la capa que separa a quien aprobó el curso de quien puede
   implementar un sistema. Cada módulo trae su <strong>entregable</strong>: lo que deberías poder producir al terminarlo,
   no lo que deberías poder recitar.`)}

${callout('key', 'Cómo leer esta página',
  `<p class="mb0">En cada módulo, <strong>Temario</strong> refleja los contenidos del programa. <strong>Profundización de consultor</strong>
  es la capa que añade este sitio: los matices que aparecen en campo y en las auditorías, no en las diapositivas.
  El <strong>entregable</strong> es tu criterio de autoevaluación.</p>`)}

${MODULOS.map((m, i) => `
${sec(String(i + 1).padStart(2, '0'), m.t, m.resumen)}
<div class="row" style="margin-bottom:20px">
  ${badge(m.n, m.norm)} ${badge(`${m.horas} h de referencia`)} ${badge(`${m.temas.length + m.profundizacion.length} puntos de estudio`)}
</div>

<div class="grid g2">
  ${card(`<h4>Temario del programa</h4>
    <ol class="small" style="color:var(--muted);margin-bottom:0">${m.temas.map((t) => `<li>${t}</li>`).join('')}</ol>`, { norm: m.norm })}
  ${card(`<h4>Profundización de consultor</h4>
    <ul class="small" style="color:var(--muted);margin-bottom:0">${m.profundizacion.map((t) => `<li>${t}</li>`).join('')}</ul>`, { norm: 'sig' })}
</div>

${callout('tip', 'Entregable del módulo', `<p class="mb0">${m.entregable}</p>`)}
`).join('')}

${sec('07', 'Lo que el temario no dice todavía', 'La revisión 2026 ya está en curso. Estudiar la edición 2015 sin conocerla es aprender algo que caducará dentro de tu ciclo de certificación.')}

${table(
  ['~Capítulo', 'Tema', 'Cambio anticipado en la nueva edición'],
  CAMBIOS_2026.map(([c, t, d]) => [`<strong>${c}</strong>`, t, d]))}

${callout('warn', 'Qué hacer con esta información',
  `<p>No pospongas nada. La nueva edición <strong>mantiene la base de 2015 y la Estructura Armonizada</strong>: no es una
  reescritura, es un refinamiento con énfasis nuevos. Todo lo que aprendas ahora sigue siendo válido.</p>
  <p class="mb0">Lo que sí conviene: construir el contexto (cap. 4) y la planificación (cap. 6) con la profundidad que la
  edición 2026 va a exigir. Es la diferencia entre migrar y rehacer.</p>`)}

${pager(['panel', 'Panel de inicio'], ['ruta', 'Ruta de estudio'])}
`;
}

/* ══════════════════════════════════════════════════════════ */

export function ruta() {
  return `
${head('Plan de trabajo', 'Ruta de estudio<br><em>de ocho semanas</em>',
  `Un plan de estudio activo. Cada bloque tiene una <strong>meta verificable</strong>, cuatro cosas concretas que hacer
   y una <strong>señal de dominio</strong>: la prueba de que realmente lo entendiste y no solo lo leíste.
   Tu progreso se guarda en este navegador.`)}

${callout('key', 'El principio de esta ruta',
  `<p class="mb0">No se estudia una norma leyéndola. Se estudia <strong>aplicándola a una organización concreta</strong>.
  Elige ahora una — la tuya, la de un familiar, una que conozcas bien — y llévala contigo las ocho semanas.
  Todo lo que produzcas debe referirse a esa organización. Al terminar tendrás un sistema documentado en borrador,
  no un cuaderno de apuntes.</p>`)}

${RUTA.map((r, i) => `
${sec(String(i + 1).padStart(2, '0'), r.t, '')}
<div class="row" style="margin-bottom:16px">${badge(r.s, 'sig')} ${badge(r.mod)}</div>
<div class="card" data-norm="sig">
  <div class="card-kicker">Meta del bloque</div>
  <p style="font-size:var(--fs-md);margin-bottom:16px"><strong>${r.meta}</strong></p>
  ${checklist(`ruta-${i}`, 'Qué hacer', r.hacer)}
  <div class="callout tip" style="margin-bottom:0">
    <div class="co-title">Señal de dominio</div>
    <p class="mb0">${r.senal}</p>
  </div>
</div>
`).join('')}

${sec('09', 'Cronograma de referencia si vas a implementar', 'Estudiar es una cosa; implementar es otra. Este es el plazo realista para una organización mediana.')}

${fig('ganttImpl', '05', 'De la decisión al certificado en catorce meses',
  'Diecisiete actividades en cuatro fases. Fíjate en la barra de «rodaje del sistema»: son tres meses de generar registros reales. Es la fase que todos quieren saltarse y la única que no se puede saltar, porque sin registros no hay nada que auditar.', { interactive: true })}

${callout('trap', 'El error de cronograma más caro',
  `<p class="mb0">Programar la auditoría de certificación Etapa 2 inmediatamente después de terminar la documentación.
  El organismo certificador exige evidencia de que el sistema <em>operó</em>: al menos un ciclo completo de auditoría interna
  y una revisión por la dirección con datos reales. Sin tres meses de rodaje, la Etapa 2 se convierte en una
  auditoría de documentos que termina en no conformidades mayores y en una segunda visita que se paga aparte.</p>`)}

${sec('10', 'Autoevaluación final', 'Marca solo lo que puedas demostrar. Si no puedes producir el entregable, no está aprendido.')}

${checklist('auto-final', 'Puedo hacer esto sin consultar apuntes', [
  'Escribir de memoria los diez capítulos de la Estructura Armonizada y ubicarlos en el PHVA.',
  'Explicar por qué el capítulo 4 antecede al 6 con una cadena causal, no con una definición.',
  'Redactar un análisis de contexto que genere al menos tres riesgos trazables.',
  'Caracterizar un proceso con diagrama de tortuga en menos de veinte minutos.',
  'Diseñar un indicador con fórmula, fuente, frecuencia, meta, responsable y umbral de reacción.',
  'Llenar un IPERC aplicando correctamente la jerarquía de controles y justificar por escrito cada salto de nivel.',
  'Distinguir aspecto ambiental de impacto, y peligro de riesgo, sin dudar.',
  'Identificar un aspecto ambiental aguas arriba o aguas abajo de mi operación.',
  'Redactar diez hallazgos con requisito, evidencia y desviación.',
  'Clasificar un hallazgo como NC mayor o menor y defender la clasificación.',
  'Explicar la diferencia entre corrección y acción correctiva con un ejemplo propio.',
  'Enumerar las entradas obligatorias de la revisión por la dirección.',
  'Decidir el nivel de integración alcanzable para una organización y argumentarlo.',
  'Explicar por qué el IPERC y la matriz de aspectos no se fusionan.',
  'Defender el presupuesto del SIG ante un gerente financiero con la lógica del costo oculto.',
  'Explicar qué cambia en la edición 2026 y cómo afecta mi plan.'
])}

${pager(['programa', 'El programa'], ['integracion', 'Anexo SL e integración'])}
`;
}
