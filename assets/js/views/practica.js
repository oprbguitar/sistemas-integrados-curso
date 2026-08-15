/* ============================================================
   SIG Lab — Vistas: Procesos · Riesgos · Auditoría · Medición · Casos
   ============================================================ */
import { CASOS } from '../data/practica.js';
import { CAMBIOS_2026 } from '../data/curso.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, badge, table, checklist, acc, pager } from './ui.js';

/* ══════════════════════════════════════════════════════════
   Procesos
   ══════════════════════════════════════════════════════════ */
export function procesos() {
  return `
${head('Módulo 2', 'Gestión<br><em>por procesos</em>',
  `El corazón operativo del SIG. Sin procesos caracterizados no hay sistema integrado: hay cuatro manuales conviviendo
   en un archivador. Esta página va del mapa de nivel 0 hasta el indicador que sobrevive a una auditoría.`)}

${sec('01', 'El mapa de procesos', 'Tres bandas, una dirección de flujo, y una regla que descarta el 70 % de los mapas que se ven en campo.')}

${fig('processMap', '14', 'Mapa de procesos de nivel 0',
  'Procesos estratégicos arriba, cadena de valor al centro, soporte abajo. La flecha de retroalimentación no es decorativa: es el capítulo 9 cerrando el ciclo. Un mapa sin ese retorno describe una fábrica, no un sistema de gestión.', { interactive: true })}

${callout('key', 'La regla que descarta mapas',
  `<p class="mb0">Si un proceso del mapa no tiene <strong>dueño con nombre</strong>, <strong>indicador</strong> y
  <strong>al menos un riesgo asociado</strong>, no es un proceso: es un dibujo. La cl. 4.4.1 exige determinar criterios,
  métodos, recursos, responsabilidades y riesgos para cada proceso. Un mapa bonito sin fichas detrás es una no conformidad
  esperando a que alguien la escriba.</p>`)}

<div class="grid g3">
${card(`<div class="card-kicker">Nivel 0</div><h4>Mapa general</h4>
  <p class="small muted mb0">De 8 a 15 procesos. Cabe en una hoja. Es lo que ve la alta dirección y lo que abre una auditoría.</p>`, { norm: '37001' })}
${card(`<div class="card-kicker">Nivel 1</div><h4>Subprocesos</h4>
  <p class="small muted mb0">Despliegue de cada proceso del nivel 0. Aquí viven las fichas de caracterización y los indicadores.</p>`, { norm: '9001' })}
${card(`<div class="card-kicker">Nivel 2</div><h4>Actividades y flujos</h4>
  <p class="small muted mb0">Diagramas de flujo e instructivos. <strong>El límite</strong>: bajar más es documentar tareas, y eso genera burocracia sin control.</p>`, { norm: '14001' })}
</div>

${sec('02', 'Caracterizar un proceso', 'Cuatro preguntas. Si una queda sin responder, el hallazgo ya está escrito.')}

${fig('turtle', '15', 'Diagrama de tortuga',
  'Las cuatro patas son exactamente las cuatro preguntas que un auditor formula frente a cualquier proceso. Responderlas por anticipado es la forma más eficiente de prepararse para una auditoría — y la forma más honesta de descubrir que un proceso no está bajo control.', { interactive: true })}

${table(
  ['Elemento', 'Qué debe contener', 'Error frecuente'],
  [
    ['<strong>Objetivo del proceso</strong>', 'Para qué existe, en una frase, en términos de resultado.', 'Describir la actividad («recibir materiales») en lugar del resultado («asegurar que el material recibido cumple especificación»).'],
    ['<strong>Dueño</strong>', 'Cargo con autoridad sobre los recursos del proceso.', 'Asignar al coordinador del SIG como dueño de todos los procesos.'],
    ['<strong>Entradas y proveedores</strong>', 'Qué se recibe, de quién, con qué criterio de aceptación.', 'Omitir el criterio de aceptación, que es lo único auditable.'],
    ['<strong>Salidas y clientes</strong>', 'Qué se entrega, a quién, con qué criterio de conformidad.', 'Confundir cliente final con cliente del proceso (el siguiente proceso).'],
    ['<strong>Recursos</strong>', 'Infraestructura, equipos, software, ambiente de trabajo.', 'No incluir el ambiente de trabajo, requisito explícito de la cl. 7.1.4.'],
    ['<strong>Competencia</strong>', 'Perfil requerido y cómo se verifica.', 'Listar el cargo sin definir la competencia.'],
    ['<strong>Métodos y criterios</strong>', 'Procedimientos, instructivos, criterios de decisión.', 'Referenciar documentos que no existen o están obsoletos.'],
    ['<strong>Indicadores</strong>', 'Fórmula, fuente, frecuencia, meta, responsable, umbral de reacción.', 'Definir la meta sin línea base, lo que la hace ininterpretable.'],
    ['<strong>Riesgos y controles</strong>', 'Qué puede impedir el resultado y qué lo previene.', 'Copiar el IPERC operativo, que responde otra pregunta.']
  ])}

${sec('03', 'Indicadores que sobreviven a una auditoría', 'Seis columnas obligatorias. Si falta alguna, el indicador no es gestionable.')}

${table(
  ['Columna', 'Pregunta que responde', 'Ejemplo — proceso de compras'],
  [
    ['<strong>Fórmula</strong>', '¿Cómo se calcula exactamente?', '(Órdenes recibidas conformes / Órdenes recibidas) × 100'],
    ['<strong>Fuente del dato</strong>', '¿De dónde sale el número y quién lo puede verificar?', 'Módulo de recepción del ERP, reporte RC-04'],
    ['<strong>Frecuencia</strong>', '¿Cada cuánto se mide y cada cuánto se analiza?', 'Medición mensual, análisis trimestral'],
    ['<strong>Meta y línea base</strong>', '¿Desde cuánto, hasta cuánto y para cuándo?', 'De 91 % (2025) a 96 % al cierre de 2026'],
    ['<strong>Responsable</strong>', '¿Quién responde por el resultado, no quién llena la tabla?', 'Jefe de Logística'],
    ['<strong>Umbral de reacción</strong>', '¿Por debajo de qué valor se abre una acción, y cuál?', '&lt; 88 % dos meses seguidos → acción correctiva formal']
  ])}

${callout('trap', 'El indicador que nunca baja',
  `<p class="mb0">Si un indicador lleva tres años en 98 %, no está midiendo nada relevante — está midiendo algo que la
  organización ya domina, o está midiendo mal. Prueba de consultor: <strong>pregunta qué decisión se tomó alguna vez
  porque ese indicador se movió</strong>. Si no hay ninguna, el indicador es decorativo y la cl. 9.1.1 está incumplida
  aunque la tabla esté impecable. Ver el <a href="#/casos">caso 1</a>.</p>`)}

${sec('04', 'Documentar el flujo', 'Cuándo basta un diagrama de bloques y cuándo hace falta notación con carriles.')}

<div class="grid g2">
${card(`<h4>Diagrama de bloques</h4>
  <p class="small muted">Secuencia simple, un solo responsable, sin decisiones complejas.</p>
  <p class="small muted mb0"><strong>Úsalo cuando:</strong> el proceso es lineal y cabe en menos de doce pasos.
  <strong>Ventaja:</strong> cualquiera lo lee sin formación previa.</p>`, { norm: '9001' })}
${card(`<h4>Diagrama con carriles (swimlane)</h4>
  <p class="small muted">Cada carril es un rol o área; el flujo cruza carriles al cambiar de responsable.</p>
  <p class="small muted mb0"><strong>Úsalo cuando:</strong> el proceso cruza áreas — que es donde nacen la mayoría de los problemas.
  <strong>Ventaja:</strong> hace visible el traspaso de responsabilidad, que es lo que un auditor busca.</p>`, { norm: '14001' })}
</div>

${callout('tip', 'Cinco reglas de notación que evitan discusiones',
  `<ol class="small mb0" style="color:var(--ink-2)">
    <li>Un solo punto de inicio y, preferentemente, un solo punto de fin.</li>
    <li>Los rombos de decisión tienen exactamente dos salidas rotuladas (sí/no). Tres salidas indican que faltan decisiones.</li>
    <li>Toda flecha va en una sola dirección. Las flechas bidireccionales ocultan un bucle no analizado.</li>
    <li>Cada actividad empieza con un verbo en infinitivo. «Facturación» no es una actividad; «emitir factura» sí.</li>
    <li>Si el diagrama no cabe en una hoja, el proceso está mal delimitado — no hace falta una hoja más grande.</li>
  </ol>`)}

${pager(['normas', 'Las normas'], ['riesgos', 'Riesgo en sus tres lenguajes'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Riesgos
   ══════════════════════════════════════════════════════════ */
export function riesgos() {
  return `
${head('Módulo 3', 'Riesgo<br><em>en sus tres lenguajes</em>',
  `El módulo donde más gente se pierde, porque la palabra «riesgo» significa tres cosas distintas dentro del mismo sistema.
   Esta página las separa, muestra la metodología de cada una, y explica por qué no se pueden fusionar.`)}

${sec('01', 'Las tres preguntas distintas', 'Mismo evento, tres evaluaciones, tres escalas. Confundirlas es el error conceptual más caro del programa.')}

${table(
  ['', 'Riesgo del sistema', 'Peligro / riesgo SST', 'Aspecto ambiental', 'Riesgo de soborno'],
  [
    ['<strong>Cláusula</strong>', '6.1 (las cuatro)', '6.1.2 de ISO 45001', '6.1.2 de ISO 14001', '4.5 de ISO 37001'],
    ['<strong>Pregunta</strong>', '¿Qué amenaza el resultado previsto del sistema?', '¿Qué puede dañar a una persona?', '¿Qué altera el medio ambiente?', '¿Dónde puede ocurrir un pago indebido?'],
    ['<strong>Objeto en riesgo</strong>', 'El objetivo de la organización', 'El trabajador', 'El entorno y terceros', 'La integridad y la licencia para operar'],
    ['<strong>Unidad de medida</strong>', 'Impacto en el objetivo', 'Severidad de la lesión', 'Magnitud y reversibilidad del impacto', 'Exposición y consecuencia legal'],
    ['<strong>Metodología típica</strong>', 'Matriz de riesgo estratégico, ISO 31000', 'IPERC (R.M. 050-2013-TR o 5×5 sectorial)', 'Matriz de significancia con ciclo de vida', 'Matriz por operación, socio y transacción'],
    ['<strong>Quién lo evalúa</strong>', 'Dueños de proceso y dirección', 'Trabajadores expuestos + SSOMA', 'Especialista ambiental + operación', 'Función de cumplimiento'],
    ['<strong>¿Se fusiona?</strong>', '<span style="color:var(--risk)">No con las otras tres</span>', '<span style="color:var(--risk)">No</span>', '<span style="color:var(--risk)">No</span>', '<span style="color:var(--risk)">No</span>']
  ])}

${callout('key', 'Cómo se articulan sin fusionarse',
  `<p class="mb0">Las cuatro evaluaciones son independientes en su método, pero <strong>convergen en un solo lugar</strong>:
  los riesgos significativos de cualquiera de ellas escalan al registro de riesgos del sistema (cl. 6.1) y de ahí a la
  revisión por la dirección. La organización tiene <strong>un solo apetito de riesgo</strong> aunque tenga cuatro matrices.
  Ese es el nivel correcto de integración.</p>`)}

${sec('02', 'Evaluación de riesgo SST', 'La metodología más regulada de las cuatro, porque en Perú tiene sustento legal propio.')}

${fig('riskMatrix', '16', 'Matriz 5 × 5 y bandas de decisión',
  'Define las bandas ANTES de evaluar, nunca después. Definirlas después es ajustar el criterio al resultado, y un auditor experimentado lo detecta comparando la distribución de riesgos con la banda de acción.', { interactive: true })}

${callout('warn', 'La trampa de la escala invertida',
  `<p class="mb0">El D.S. 024-2016-EM (reglamento de seguridad minera) usa una matriz donde <strong>1 es lo más grave</strong>,
  al revés de la convención habitual. Si tu organización opera en minería y en otros sectores, o si un consultor trajo
  una plantilla de otro sector, puedes terminar con dos convenciones opuestas en el mismo sistema. El resultado es que
  los riesgos críticos se priorizan al final. <strong>Declara la convención en el procedimiento y verifícala en cada matriz.</strong></p>`)}

${table(
  ['Método', 'Base', 'Cuándo usarlo'],
  [
    ['<strong>R.M. 050-2013-TR Anexo 3</strong>', 'Probabilidad = A + B + C + D (personas expuestas, procedimientos, capacitación, exposición), luego cruce con severidad.', 'Referencia general en Perú. Es el método que espera un inspector de SUNAFIL.'],
    ['<strong>Matriz 5×5 estándar</strong>', 'Severidad × Probabilidad, escala 1-5, resultado 1-25.', 'Sectores no regulados específicamente. Compatible con la evaluación de riesgo del sistema.'],
    ['<strong>D.S. 024-2016-EM</strong>', 'Matriz 5×5 con escala invertida (1 = catastrófico).', 'Obligatorio en minería. No mezclar con las anteriores.'],
    ['<strong>Corbatín (bow-tie)</strong>', 'Análisis de barreras preventivas y mitigadoras alrededor de un evento tope.', 'Riesgos de alta consecuencia y baja frecuencia. No sustituye al IPERC: lo complementa.']
  ])}

${sec('03', 'Jerarquía de controles', 'El requisito no es aplicar la jerarquía. Es aplicarla en orden y poder demostrarlo.')}

${fig('controlHierarchy', '17', 'Cinco niveles, eficacia decreciente',
  'Cada nivel hacia abajo es más barato, más fácil de implementar y menos eficaz, porque depende cada vez más de que una persona haga lo correcto en el momento correcto. El EPP no es un control de riesgo: es la última barrera cuando todo lo demás falló.', { interactive: true })}

${callout('trap', 'El salto al EPP',
  `<p class="mb0">El hallazgo más frecuente en obra y planta: el IPERC determina «uso de EPP» como control único, sin ningún
  registro de que se evaluaron eliminación, sustitución, ingeniería y administración. La cl. 8.1.2 exige aplicar la jerarquía;
  saltarla es no conformidad aunque el EPP sea el correcto y el trabajador lo use. <strong>La evidencia que falta es
  el razonamiento, no el equipo.</strong> Ver el <a href="#/casos">caso 2</a>.</p>`)}

${sec('04', 'Aspectos ambientales', 'Donde ISO 14001 exige mirar fuera del cerco.')}

${fig('lifecycle', '18', 'Perspectiva de ciclo de vida',
  'La distinción entre controlar e influir define dos tipos de requisito: operacional para lo que se controla, de comunicación y especificación para lo que se influye. Una matriz de aspectos sin una sola fila fuera del perímetro es el hallazgo más fácil de abrir en el Perú.', { interactive: true })}

<div class="grid g2">
${card(`<h4>Las tres condiciones operativas</h4>
  <p class="small muted">La cl. 6.1.2 exige considerar las tres. La mayoría de matrices solo cubre la primera.</p>
  <ul class="small" style="color:var(--muted);margin-bottom:0">
    <li><strong>Normal.</strong> Operación de rutina, régimen estable.</li>
    <li><strong>Anormal.</strong> Arranque, parada, mantenimiento, sobrecarga, falla parcial.</li>
    <li><strong>Emergencia.</strong> Situaciones razonablemente previsibles: derrame, incendio, fuga.</li>
  </ul>`, { norm: '14001' })}
${card(`<h4>Criterio de significancia</h4>
  <p class="small muted">La norma no impone método, pero exige criterio documentado y coherente.</p>
  <ul class="small" style="color:var(--muted);margin-bottom:0">
    <li><strong>Magnitud</strong> — cantidad, concentración, extensión.</li>
    <li><strong>Severidad</strong> — gravedad del cambio en el medio.</li>
    <li><strong>Frecuencia o probabilidad</strong> de ocurrencia.</li>
    <li><strong>Requisito legal aplicable</strong> — su sola existencia suele hacer significativo el aspecto.</li>
    <li><strong>Preocupación de partes interesadas</strong> — enlace directo con la cl. 4.2.</li>
  </ul>`, { norm: '14001' })}
</div>

${sec('05', 'Riesgos críticos: análisis de corbatín', 'Herramienta que ISO no exige y que todo consultor experimentado usa.')}

${fig('bowtie', '19', 'Corbatín aplicado a trabajo en caliente',
  'Obliga a nombrar cada barrera individualmente, con su dueño y su verificación. Una barrera sin verificación es una barrera de papel: existe en el procedimiento y no en la realidad — y es exactamente lo que un auditor busca cuando pregunta «¿y si este control falla, qué lo detecta?».', { interactive: true })}

${callout('tip', 'Factores de degradación',
  `<p class="mb0">El refinamiento que separa un corbatín real de un dibujo: por cada barrera, identificar qué la degrada
  (rotación de personal, presión de producción, falta de mantenimiento, normalización de la desviación) y qué control
  secundario protege a la barrera. Es el nivel de análisis que exigen los sistemas de gestión de riesgo mayor en
  industria de proceso e hidrocarburos.</p>`)}

${sec('06', 'Gestión del cambio', 'El punto de fuga favorito de los auditores externos.')}

${table(
  ['Tipo de cambio', 'Qué debe reevaluarse', 'Cláusula'],
  [
    ['Nuevo proceso, equipo o tecnología', 'IPERC, aspectos ambientales, competencia requerida, control operacional.', '8.1.3 (45001) · 8.1 (14001) · 6.3 (9001)'],
    ['Cambio de proveedor o contratista', 'Debida diligencia, criterios de evaluación, riesgos SST y ambientales del tercero.', '8.4 (9001) · 8.1.4 (45001) · 8.2 (37001)'],
    ['Cambio de método o procedimiento', 'Criterios de control, formación, información documentada.', '8.1 (todas)'],
    ['Cambio de personal en puesto clave', 'Competencia, gestión del conocimiento, continuidad de responsabilidades.', '7.2 · 5.3'],
    ['Cambio legal o normativo', 'Matriz de requisitos legales, evaluación de cumplimiento, controles afectados.', '6.1.3 · 9.1.2'],
    ['Cambio organizacional o de alcance', 'Contexto, partes interesadas, alcance del sistema, mapa de procesos.', '4.1 · 4.2 · 4.3']
  ])}

${checklist('riesgo-check', 'Autoauditoría de la gestión del riesgo', [
  'Existen matrices separadas para riesgo del sistema, SST, ambiente y — si aplica — soborno.',
  'Cada matriz declara su metodología y su escala en un procedimiento, no solo en el encabezado.',
  'Las bandas de decisión se definieron antes de evaluar y están documentadas.',
  'El IPERC incluye peligros psicosociales y de organización del trabajo, no solo físicos.',
  'Hay evidencia de participación de trabajadores en la identificación de peligros.',
  'La jerarquía de controles se aplicó en orden, con registro de por qué no bastó cada nivel superior.',
  'La matriz de aspectos incluye condiciones normales, anormales y de emergencia.',
  'La matriz de aspectos incluye al menos una etapa aguas arriba y una aguas abajo.',
  'Los riesgos significativos escalan a un registro único de riesgos del sistema.',
  'Existe un proceso de gestión del cambio que dispara la reevaluación de las matrices.',
  'Las matrices se actualizaron después del último incidente y del último cambio relevante.'
])}

${pager(['procesos', 'Gestión por procesos'], ['documental', 'Información documentada'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Auditoría
   ══════════════════════════════════════════════════════════ */
export function auditoria() {
  return `
${head('Módulo 5', 'Auditoría interna<br><em>del sistema integrado</em>',
  `ISO 19011:2018 aplicada a auditorías combinadas. Del programa anual basado en riesgo hasta la redacción de hallazgos
   que no se caen en la reunión de cierre — que es donde se separa un auditor formado de uno certificado.`)}

${sec('01', 'El ciclo completo', 'Seis fases. El 70 % de los hallazgos débiles nacen de una fase 2 mal hecha.')}

${fig('auditCycle', '20', 'Las seis fases de ISO 19011 cl. 6',
  'Cada fase tiene una salida característica y verificable. La fase 6.7 pertenece al auditado, no al auditor: el auditor verifica la eficacia de la acción correctiva, no la ejecuta ni la propone. Confundir esto compromete la imparcialidad exigida por la cl. 9.2.', { interactive: true })}

${sec('02', 'Programa basado en riesgo', 'Un programa plano — todo una vez al año — es un hallazgo defendible del auditor externo.')}

${table(
  ['Criterio', 'Efecto sobre la frecuencia', 'Ejemplo'],
  [
    ['<strong>Importancia del proceso</strong>', 'Los procesos de la cadena de valor se auditan más que los de soporte.', 'Producción: 2 veces/año. Archivo: cada 2 años.'],
    ['<strong>Resultados previos</strong>', 'Un proceso con NC recurrentes sube de frecuencia hasta demostrar estabilidad.', '3 NC en el último ciclo → auditoría a los 4 meses.'],
    ['<strong>Cambios</strong>', 'Todo cambio significativo dispara auditoría fuera de programa.', 'Nueva línea, nueva sede, nuevo ERP, cambio legal.'],
    ['<strong>Riesgo asociado</strong>', 'Los procesos con riesgos intolerables o significativos se auditan siempre.', 'Trabajo en caliente, manejo de residuos peligrosos.'],
    ['<strong>Requisito legal</strong>', 'Procesos con exigencia legal explícita tienen frecuencia mínima obligatoria.', 'Comité de SST, exámenes médicos ocupacionales.'],
    ['<strong>Preocupación de partes interesadas</strong>', 'Un reclamo recurrente de cliente o comunidad justifica auditoría dirigida.', 'Quejas por ruido de la comunidad vecina.']
  ])}

${sec('03', 'Redacción de hallazgos', 'Tres piezas obligatorias. Sin una de ellas, no tienes hallazgo: tienes una opinión.')}

${fig('ncAnatomy', '21', 'Anatomía de un hallazgo',
  'Requisito, evidencia y desviación. La evidencia debe incluir trazabilidad — código de documento, fecha, identificación del registro — porque en la reunión de cierre el auditado va a pedir exactamente eso. Abajo, la clasificación con su consecuencia real.', { interactive: true })}

<div class="grid g2">
${card(`<h4>Cómo NO se escribe</h4>
  <ul class="small" style="color:var(--muted);margin-bottom:0">
    <li>«Falta procedimiento de compras.» — Sin requisito ni evidencia.</li>
    <li>«El personal no está capacitado.» — Juicio sin evidencia ni cláusula.</li>
    <li>«Se recomienda mejorar el control documental.» — Recomendación, no hallazgo.</li>
    <li>«El almacén está desordenado.» — Opinión del auditor, no criterio declarado.</li>
    <li>«No cumple ISO 9001.» — No identifica el requisito específico.</li>
  </ul>`, { norm: '45001' })}
${card(`<h4>Cómo sí</h4>
  <p class="small muted mb0" style="line-height:1.6">
  «<strong>ISO 9001 cl. 8.4.1</strong> requiere que la organización determine y aplique criterios para la evaluación
  y selección de proveedores externos <em>[requisito]</em>. Se evidenció que los proveedores PRV-118 y PRV-204, con
  compras acumuladas de S/ 340 000 en 2026, no cuentan con registro de evaluación en el formato FR-CO-03, y que el
  procedimiento PR-CO-01 rev. 4 no establece criterios de selección <em>[evidencia]</em>. Por tanto, no se evidencia
  la determinación y aplicación de criterios de evaluación de proveedores externos <em>[desviación]</em>.»</p>`, { norm: '9001' })}
</div>

${callout('tip', 'Prueba de los tres filtros antes de escribir un hallazgo',
  `<ol class="small mb0" style="color:var(--ink-2)">
    <li><strong>¿Cuál es el requisito exacto?</strong> Cláusula, artículo legal o documento propio de la organización. Si no puedes citarlo, no hay hallazgo.</li>
    <li><strong>¿Mi evidencia es verificable por un tercero?</strong> Otro auditor debería llegar al mismo lugar con mi descripción.</li>
    <li><strong>¿Estoy auditando el criterio o mi preferencia?</strong> Si la organización cumple su procedimiento y su procedimiento cumple la norma, no hay hallazgo aunque a ti te parezca mejorable.</li>
  </ol>`)}

${sec('04', 'Análisis de causa raíz', 'La diferencia entre cerrar una NC y evitar que vuelva.')}

${table(
  ['Método', 'Cuándo funciona', 'Cuándo falla'],
  [
    ['<strong>Cinco porqués</strong>', 'Causas lineales y evidentes. Rápido, sin formación previa.', 'Se detiene demasiado pronto o deriva hacia la persona. Regla: si el quinto porqué es «falta de capacitación», reinicia.'],
    ['<strong>Ishikawa (espina de pescado)</strong>', 'Causas múltiples y concurrentes. Bueno en taller con equipo.', 'Genera un mural de hipótesis sin priorizar ni verificar ninguna.'],
    ['<strong>Árbol de causas / fallas</strong>', 'Eventos complejos con causas concurrentes y barreras múltiples.', 'Requiere formación y tiempo. Sobredimensionado para una NC menor.'],
    ['<strong>Modelo de queso suizo</strong>', 'Explicar fallas latentes del sistema, no del individuo.', 'Es un modelo explicativo, no un método de análisis: no produce causas por sí solo.']
  ])}

${callout('trap', 'La causa raíz que no lo es',
  `<p class="mb0">«Falta de capacitación», «error humano», «descuido del trabajador» y «no siguió el procedimiento» son
  <strong>descripciones del evento, no causas</strong>. Si el 80 % de tus NC cierran con una de estas cuatro, el análisis
  es ritual. Prueba de control: la acción correctiva derivada de una causa raíz real casi nunca es «capacitar» —
  suele ser rediseñar un control, cambiar una condición física o modificar una decisión de gestión.</p>`)}

${sec('05', 'Corrección, acción correctiva y eficacia', 'Tres cosas distintas que la mayoría de los registros confunde.')}

${table(
  ['', 'Corrección', 'Acción correctiva', 'Verificación de eficacia'],
  [
    ['<strong>Actúa sobre</strong>', 'El efecto ya ocurrido', 'La causa que lo produjo', 'El resultado de la acción'],
    ['<strong>Pregunta</strong>', '¿Cómo arreglo esto ahora?', '¿Por qué ocurrió y cómo evito que vuelva?', '¿Funcionó?'],
    ['<strong>Ejemplo</strong>', 'Retirar el lote no conforme', 'Rediseñar el control de recepción', 'Cero recurrencias en 6 meses y FPY recuperado'],
    ['<strong>Evidencia</strong>', 'Registro de la acción inmediata', 'Análisis de causa + plan implementado', 'Dato posterior, no firma de cierre'],
    ['<strong>Plazo</strong>', 'Inmediato', 'Con fecha y responsable', 'Después de transcurrido tiempo suficiente']
  ])}

${sec('06', 'Auditoría interna frente a certificación', 'Dos normas distintas para dos cosas distintas.')}

<div class="grid g2">
${card(`<h4>ISO 19011:2018</h4>
  <p class="small muted">Directrices para auditorías <strong>internas (1.ª parte)</strong> y a proveedores <strong>(2.ª parte)</strong>.</p>
  <p class="small muted mb0">Es una guía, no una norma certificable. Sus siete principios incluyen el
  <strong>enfoque basado en riesgos</strong>, incorporado en la edición 2018.</p>`, { norm: '14001' })}
${card(`<h4>ISO/IEC 17021-1</h4>
  <p class="small muted">Requisitos para los organismos que auditan y certifican sistemas de gestión <strong>(3.ª parte)</strong>.</p>
  <p class="small muted mb0">Es la norma bajo la cual INACAL acredita a los certificadores. Define imparcialidad,
  competencia, días-auditor y reglas de la auditoría combinada.</p>`, { norm: '37001' })}
</div>

${checklist('audit-check', 'Preparación de una auditoría interna integrada', [
  'El programa anual está justificado por riesgo, no por calendario uniforme.',
  'El equipo auditor no audita su propia área ni su propio trabajo.',
  'La competencia de cada auditor está evidenciada (formación + experiencia + evaluación).',
  'El plan de auditoría se envió con antelación y fue acordado con el auditado.',
  'La lista de verificación cruza las cuatro normas en la misma fila por proceso.',
  'Se revisó la información documentada antes de ir a campo.',
  'Se definió el criterio de muestreo y se puede justificar.',
  'Se revisaron los hallazgos de la auditoría anterior y su estado de cierre.',
  'Cada hallazgo redactado tiene requisito, evidencia con trazabilidad y desviación.',
  'La clasificación mayor/menor está justificada, no asignada por costumbre.',
  'El informe se emitió dentro del plazo acordado.',
  'El seguimiento verifica eficacia con dato posterior, no con firma de cierre.'
])}

${pager(['documental', 'Información documentada'], ['medicion', 'Medición, mejora y ESG'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Medición y mejora
   ══════════════════════════════════════════════════════════ */
export function medicion() {
  return `
${head('Módulo 6', 'Medición, mejora<br><em>y el puente a ESG</em>',
  `Cerrar el ciclo y proyectarlo. Aquí el sistema deja de ser cumplimiento y empieza a ser información para decidir —
   y desde ahí conecta con la agenda de sostenibilidad que hoy exigen clientes, bancos y reguladores.`)}

${sec('01', 'El tablero del SIG', 'Indicadores reactivos y predictivos. Un tablero solo con los primeros informa del pasado.')}

${table(
  ['Disciplina', 'Indicador reactivo (lagging)', 'Indicador predictivo (leading)'],
  [
    ['<strong>Calidad</strong>', 'Reclamos de cliente · Producto no conforme · Costo de la no calidad', 'Conformidad en primera pasada · Cumplimiento del plan de control · Capacidad de proceso'],
    ['<strong>Ambiente</strong>', 'Incidentes ambientales · Excedencias de LMP · Multas', 'Consumo específico por unidad producida · % residuos valorizados · Inspecciones ambientales realizadas'],
    ['<strong>SST</strong>', 'Índice de frecuencia · Índice de severidad · Días perdidos', 'Reportes de condición subestándar · % IPERC actualizados · Cumplimiento de inspecciones planeadas · Participación en simulacros'],
    ['<strong>Antisoborno</strong>', 'Denuncias recibidas · Casos investigados · Sanciones', 'Cobertura de debida diligencia · % personal formado en posiciones expuestas · Registros de regalos y hospitalidad'],
    ['<strong>Sistema</strong>', 'NC de auditoría externa · NC reincidentes', 'NC detectadas internamente · % acciones cerradas en plazo · Índice de madurez']
  ])}

${callout('key', 'La proporción que revela un sistema maduro',
  `<p class="mb0">Un sistema sano encuentra <strong>más no conformidades en su auditoría interna que en la externa</strong>.
  Cuando la relación se invierte, la auditoría interna es complaciente. Es la métrica de salud del sistema más simple
  que existe, y ninguna norma la exige: por eso es un buen indicador de consultor.</p>`)}

${sec('02', 'Revisión por la dirección', 'Acto de gobierno, no reunión de cumplimiento. Las entradas son literales y un auditor las tacha una por una.')}

<div class="grid g2">
${card(`<h4>Entradas obligatorias — tronco común</h4>
  <ol class="small" style="color:var(--muted);margin-bottom:0">
    <li>Estado de las acciones de revisiones previas</li>
    <li>Cambios en cuestiones externas e internas pertinentes</li>
    <li>Grado de satisfacción de partes interesadas / del cliente</li>
    <li>Grado de cumplimiento de los objetivos</li>
    <li>Desempeño de los procesos y conformidad</li>
    <li>No conformidades y acciones correctivas</li>
    <li>Resultados de seguimiento y medición</li>
    <li>Resultados de auditorías</li>
    <li>Desempeño de proveedores externos</li>
    <li>Adecuación de los recursos</li>
    <li>Eficacia de las acciones para abordar riesgos y oportunidades</li>
    <li>Oportunidades de mejora</li>
  </ol>`, { norm: 'sig' })}
${card(`<h4>Entradas adicionales por norma</h4>
  <ul class="small" style="color:var(--muted);margin-bottom:0">
    <li><strong>ISO 14001:</strong> cumplimiento de las obligaciones de cumplimiento; comunicaciones de partes interesadas externas, incluidas las quejas.</li>
    <li><strong>ISO 45001:</strong> resultados de la <strong>consulta y participación</strong> de los trabajadores; incidentes; peligros y riesgos emergentes.</li>
    <li><strong>ISO 37001:</strong> informes de la función de cumplimiento antisoborno; naturaleza y alcance de los riesgos de soborno; denuncias e investigaciones.</li>
  </ul>
  <div class="callout warn" style="margin:16px 0 0">
    <p class="small mb0">Las tres entradas más olvidadas: <strong>adecuación de los recursos</strong>,
    <strong>eficacia de las acciones de riesgo</strong> y <strong>desempeño de proveedores externos</strong>.</p>
  </div>`, { norm: '45001' })}
</div>

${callout('trap', 'Actas que informan pero no deciden',
  `<p class="mb0">Las salidas de la revisión son requisito, no opción: <strong>oportunidades de mejora, necesidad de cambios
  en el sistema y necesidades de recursos</strong>. Un acta que presenta veinte diapositivas y termina sin una sola decisión
  con responsable y plazo incumple la cl. 9.3.3, por completa que sea la información presentada.</p>`)}

${sec('03', 'El argumento económico', 'Cómo se defiende el presupuesto del SIG ante quien firma los cheques.')}

${fig('costIceberg', '22', 'Lo visible y lo sumergido',
  'El argumento débil es la multa evitada. El argumento que mueve presupuesto es el costo oculto: investigación, productividad perdida, rotación, prima de seguro, licitaciones perdidas y licencia social. Documenta el factor de ocultamiento que uses — entre 4× y 10× según la literatura — y sostenlo con tus propios datos.', { interactive: true })}

${sec('04', 'Del SIG al reporte de sostenibilidad', 'Un sistema maduro ya produce el 60 % de lo que exige un marco ESG. La mayoría de las organizaciones no lo sabe.')}

${table(
  ['Pilar ESG', 'Qué aporta el SIG que ya tienes', 'Qué falta añadir'],
  [
    ['<strong>Ambiental (E)</strong>', 'Matriz de aspectos, consumos, residuos, emisiones, cumplimiento legal ambiental, objetivos y su seguimiento.', 'Inventario de GEI por alcances, metas de descarbonización, análisis de doble materialidad.'],
    ['<strong>Social (S)</strong>', 'Indicadores de SST, competencia y formación, consulta y participación, gestión de contratistas, satisfacción del cliente.', 'Diversidad e inclusión, derechos humanos en la cadena de valor, relacionamiento comunitario formalizado.'],
    ['<strong>Gobernanza (G)</strong>', 'Sistema antisoborno, canal de denuncia, debida diligencia de terceros, revisión por la dirección, auditoría interna.', 'Composición y competencia del directorio, política fiscal, remuneración ligada a desempeño no financiero.']
  ])}

${callout('tip', 'El puente que casi nadie construye',
  `<p class="mb0">La revisión por la dirección del SIG y el reporte de sostenibilidad se alimentan de los mismos datos.
  Si diseñas el tablero del SIG pensando en los dos destinos desde el inicio, el reporte ESG deja de ser un proyecto
  paralelo con presupuesto propio y pasa a ser una salida más del sistema. Es uno de los argumentos de venta más
  sólidos de un consultor de SIG hoy.</p>`)}

${sec('05', 'Lo que viene', 'La revisión 2026 lleva el sistema hacia la cultura y la resiliencia.')}

${table(['~Capítulo', 'Tema', 'Cambio anticipado'], CAMBIOS_2026.map(([c, t, d]) => [`<strong>${c}</strong>`, t, d]))}

${callout('warn', 'Traducción práctica para tu plan de estudio',
  `<p class="mb0">Los tres conceptos nuevos — <strong>cultura de calidad</strong>, <strong>conducta ética</strong> y
  <strong>planificación de la resiliencia</strong> — no son capítulos nuevos: son exigencias que se anclan en los
  capítulos 4, 5, 6 y 7 que ya estás estudiando. Quien domine el contexto y la planificación en la edición 2015
  migrará con esfuerzo marginal. Quien los haya resuelto con plantilla, tendrá que rehacerlos.</p>`)}

${pager(['auditoria', 'Auditoría interna'], ['casos', 'Casuística aplicada'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Casos
   ══════════════════════════════════════════════════════════ */
export function casos() {
  return `
${head('Práctica', 'Casuística<br><em>aplicada</em>',
  `Cinco casos construidos a partir de patrones reales de campo. Cada uno trae contexto, hechos verificados, el análisis
   cláusula por cláusula, <strong>el hallazgo redactado como se entrega</strong> y la lección transferible.
   Léelos intentando responder antes de abrir el análisis.`)}

${callout('key', 'Cómo trabajarlos',
  `<p class="mb0">Lee el contexto y los hechos. Antes de continuar, escribe en un papel qué cláusulas crees que están
  incumplidas y cómo redactarías el hallazgo. Después abre el análisis y compara. La diferencia entre tu respuesta y
  la del caso es exactamente tu brecha de estudio — y es información mucho más útil que una nota de examen.</p>`)}

${CASOS.map((c, i) => `
${sec(String(i + 1).padStart(2, '0'), c.t, '')}
<div class="case" data-norm="${c.norm}">
  <div class="case-head">
    <div class="case-sector">${c.sector}</div>
    <h3 style="margin-top:8px">${c.t}</h3>
    <p class="small mb0" style="color:var(--ink-2)">${c.ctx}</p>
  </div>
  <div class="case-body">
    <h4 class="mini">Hechos verificados en auditoría</h4>
    <ul class="small" style="color:var(--muted)">${c.hechos.map((h) => `<li>${h}</li>`).join('')}</ul>

    <div class="case-q">${c.pregunta}</div>

    ${acc('', 'Ver el análisis cláusula por cláusula', `
      <ul class="small" style="color:var(--ink-2)">${c.analisis.map((a) => `<li style="margin-bottom:10px">${a}</li>`).join('')}</ul>
      <div class="callout norm">
        <div class="co-title">Hallazgo como se entrega</div>
        <p class="mb0" style="font-size:var(--fs-sm);line-height:1.6">${c.hallazgo}</p>
      </div>
      <div class="callout key">
        <div class="co-title">Lección transferible</div>
        <p class="mb0">${c.leccion}</p>
      </div>
      <h4 class="mini">Plan de acción recomendado</h4>
      <p class="small muted mb0">${c.accion}</p>
    `, c.norm)}
  </div>
</div>
`).join('')}

${sec('06', 'Patrones que se repiten', 'Lo que estos cinco casos tienen en común, y que verás una y otra vez en campo.')}

<div class="grid g2">
${card(`<h4>El sistema paralelo en la sombra</h4>
  <p class="small muted mb0">Cuando la operación mantiene sus propios archivos fuera del sistema, la integración fracasó.
  Es el síntoma diagnóstico más fiable, y aparece antes que cualquier no conformidad formal. Búscalo preguntando a un
  supervisor: «¿usted usa esto o tiene el suyo?».</p>`, { norm: 'sig' })}
${card(`<h4>La culpa que se detiene en el último eslabón</h4>
  <p class="small muted mb0">Investigaciones que concluyen en el trabajador, causas raíz que son «falta de capacitación»,
  acciones correctivas que son «sensibilizar». Es un problema de método, no de disciplina — y garantiza recurrencia.</p>`, { norm: '45001' })}
${card(`<h4>El control que existe solo en el papel</h4>
  <p class="small muted mb0">Permisos firmados con fecha del turno anterior, anclajes a nueve metros, formularios de
  debida diligencia idénticos para todos. El control está documentado y es físicamente inaplicable. Se detecta yendo
  a campo, nunca revisando el archivo.</p>`, { norm: '14001' })}
${card(`<h4>La métrica que consuela</h4>
  <p class="small muted mb0">Indicadores que nunca bajan, registros de denuncias casi vacíos, auditorías internas con
  cero hallazgos. Cuando los números son demasiado buenos, el sistema no está midiendo lo que importa o hay subregistro.</p>`, { norm: '9001' })}
</div>

${pager(['medicion', 'Medición, mejora y ESG'], ['certificacion', 'Rutas de certificación'])}
`;
}
