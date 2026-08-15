/* ============================================================
   SIG Lab — Contenido de los puntos interactivos de los diagramas
   Cada clave corresponde a un <g class="dg-hot" data-k="...">
   emitido por viz.js. El panel muestra t (título) y d (cuerpo).
   ============================================================ */

export const HOTSPOTS = {

  /* ---------------- Estructura Armonizada ---------------- */
  annexSL: {
    '1': { t: 'Cap. 1 — Objeto y campo de aplicación', n: 'No auditable',
      d: 'Declara qué cubre la norma y a quién aplica. <strong>No genera requisitos</strong>, por lo que no puedes abrir una no conformidad contra este capítulo. Se lee una vez y se olvida.' },
    '2': { t: 'Cap. 2 — Referencias normativas', n: 'No auditable',
      d: 'Remite a otras normas necesarias para aplicar esta. En ISO 9001 remite a ISO 9000 (vocabulario). Tampoco es auditable, pero <strong>define qué diccionario manda</strong> cuando discutes el significado de un término en una reunión de cierre.' },
    '3': { t: 'Cap. 3 — Términos y definiciones', n: 'No auditable, pero decisivo',
      d: 'Aquí vive el vocabulario. No es auditable en sí mismo, pero <strong>es el capítulo que decide si tu hallazgo se sostiene</strong>: si confundes peligro con riesgo, o corrección con acción correctiva, el auditado te lo tumba. En la revisión 2026 de ISO 9001 se incorporan más términos propios en lugar de remitir a ISO 9000.' },
    '4': { t: 'Cap. 4 — Contexto de la organización', n: 'PLANIFICAR',
      d: 'Cuestiones internas y externas (4.1), partes interesadas (4.2), alcance (4.3) y el sistema con sus procesos (4.4). <strong>Es el capítulo que hace irrepetible cada sistema.</strong> Todo lo demás debería poder rastrearse hasta aquí. Desde la Enmienda 1:2024, el cambio climático debe evaluarse expresamente como cuestión pertinente.' },
    '5': { t: 'Cap. 5 — Liderazgo', n: 'PLANIFICAR',
      d: 'Liderazgo y compromiso (5.1), política (5.2), roles y autoridades (5.3). En ISO 45001 se añade <strong>5.4 consulta y participación de los trabajadores</strong>, que no existe en ninguna otra norma. Desde 2015 no existe el «representante de la dirección»: la rendición de cuentas es indelegable.' },
    '6': { t: 'Cap. 6 — Planificación', n: 'PLANIFICAR',
      d: 'Riesgos y oportunidades (6.1), objetivos y planificación (6.2). Aquí cuelgan los requisitos propios: aspectos ambientales en ISO 14001, peligros e IPERC en ISO 45001, riesgo de soborno en ISO 37001. <strong>Sustituyó a la acción preventiva</strong>, eliminada en 2015.' },
    '7': { t: 'Cap. 7 — Apoyo', n: 'HACER',
      d: 'Recursos (7.1), competencia (7.2), toma de conciencia (7.3), comunicación (7.4) e información documentada (7.5). La no conformidad más frecuente de todo el capítulo: <strong>usar la lista de asistencia como prueba de competencia</strong>, sin evaluación de eficacia.' },
    '8': { t: 'Cap. 8 — Operación', n: 'HACER',
      d: 'Es donde el sistema toca el trabajo real; todo lo anterior era preparación. Control operacional (8.1) y emergencias. En ISO 9001 se expande enormemente: diseño y desarrollo, compras, producción, liberación. <strong>La gestión del cambio vive aquí</strong> y es el punto de fuga favorito de los auditores externos.' },
    '9': { t: 'Cap. 9 — Evaluación del desempeño', n: 'VERIFICAR',
      d: 'Seguimiento y medición (9.1), auditoría interna (9.2), revisión por la dirección (9.3). Ojo con 9.1.2: <strong>la evaluación del cumplimiento legal es una cláusula independiente</strong> y de las más olvidadas. Tener la matriz legal no es evaluarla.' },
    '10': { t: 'Cap. 10 — Mejora', n: 'ACTUAR',
      d: 'No conformidad y acción correctiva (10.2), mejora continua (10.3). La trampa: <strong>cerrar con «falta de capacitación» como causa raíz</strong>. Si eso aparece en el 80 % de tus registros, el análisis es ritual y la no conformidad volverá.' }
  },

  /* ---------------- Ciclo PHVA ---------------- */
  pdcaLoop: {
    P: { t: 'PLANIFICAR — Capítulos 4, 5 y 6', n: 'Dónde se decide todo',
      d: 'Contexto, liderazgo, riesgos y objetivos. <strong>Un sistema mal planificado no se arregla ejecutando mejor.</strong> Si el capítulo 6 no fijó objetivos medibles con línea base, el capítulo 9 no tendrá nada contra qué verificar y la revisión por la dirección se convertirá en una presentación de diapositivas.' },
    H: { t: 'HACER — Capítulos 7 y 8', n: 'Dónde el sistema toca la realidad',
      d: 'Recursos, competencia, comunicación, información documentada y control operacional. Es el tramo donde se genera la <strong>evidencia objetiva</strong> que después se audita. Sin registros producidos aquí, no hay nada que verificar: por eso la auditoría de certificación Etapa 2 exige meses de rodaje real.' },
    V: { t: 'VERIFICAR — Capítulo 9', n: 'Dónde se descubre la verdad',
      d: 'Seguimiento, medición, evaluación del cumplimiento legal, auditoría interna y revisión por la dirección. Prueba de salud del sistema: <strong>una organización sana encuentra más hallazgos en su auditoría interna que en la externa.</strong> Cuando se invierte, la auditoría interna es complaciente.' },
    A: { t: 'ACTUAR — Capítulo 10', n: 'Dónde se cierra o se repite el ciclo',
      d: 'No conformidad, acción correctiva y mejora continua. Distingue tres cosas que casi todos los registros confunden: <strong>corrección</strong> (actúa sobre el efecto), <strong>acción correctiva</strong> (actúa sobre la causa) y <strong>verificación de eficacia</strong> (comprueba con dato posterior, no con firma de cierre).' },
    core: { t: 'El núcleo: una sola vuelta', n: 'El error de arquitectura más común',
      d: 'Un sistema integrado da <strong>una sola vuelta al ciclo</strong>, no tres en paralelo. Si tu organización tiene tres revisiones por la dirección, tres programas de auditoría y tres juegos de objetivos, no integró: coordinó calendarios. Lo que se integra es la gobernanza; las metodologías técnicas de evaluación de riesgo se mantienen separadas.' }
  },

  /* ---------------- Matriz de riesgo ---------------- */
  riskMatrix: {
    b1: { t: 'Banda 1–4 · Trivial / Aceptable', n: 'Sin acción adicional',
      d: 'El control existente basta. <strong>No significa «riesgo cero»</strong>: significa que el nivel residual es tolerable con los controles actuales. Sigue exigiendo mantenimiento del control y reevaluación ante cambios.' },
    b2: { t: 'Banda 5–9 · Tolerable', n: 'Verificar eficacia',
      d: 'Aceptable, pero conviene comprobar que el control opera como se diseñó y evaluar mejoras de bajo costo. Es la banda donde más se acumula el <strong>riesgo por normalización de la desviación</strong>: nadie lo mira porque «nunca ha pasado nada».' },
    b3: { t: 'Banda 10–14 · Moderado', n: 'Acción con plazo y responsable',
      d: 'Exige plan formal con responsable nombrado y fecha. Si tu matriz tiene muchos riesgos aquí y ninguna acción abierta, el auditor concluirá que <strong>la evaluación no alimenta la gestión</strong> — hallazgo contra la cl. 6.1.' },
    b4: { t: 'Banda 15–19 · Importante', n: 'No iniciar sin control',
      d: 'La actividad no debe comenzar hasta implementar controles adicionales. Aquí es donde el <strong>análisis de corbatín</strong> aporta más: obliga a nombrar cada barrera preventiva y mitigadora con su dueño y su verificación.' },
    b5: { t: 'Banda 20–25 · Intolerable', n: 'Detener la actividad',
      d: 'Riesgo no aceptable bajo ninguna justificación de productividad. Requiere detener y rediseñar. Comprueba siempre que la <strong>jerarquía de controles</strong> se aplicó en orden: si el único control es EPP, el riesgo residual no puede declararse reducido.' },
    esc: { t: 'La trampa de la escala invertida', n: 'Error de campo frecuente',
      d: 'El <strong>D.S. 024-2016-EM</strong> (seguridad minera) usa una matriz donde <strong>1 es lo más grave</strong>, al revés de la convención habitual. Si operas en minería y en otros sectores, o si un consultor trajo una plantilla ajena, puedes acabar con dos convenciones opuestas en el mismo sistema — y priorizar los riesgos críticos al final. Declara la convención en el procedimiento y verifícala en cada matriz.' }
  },

  /* ---------------- Jerarquía de controles ---------------- */
  controlHierarchy: {
    h1: { t: '1 · Eliminar', n: 'Eficacia muy alta',
      d: 'Suprimir el peligro rediseñando el proceso. Es el único control que <strong>no depende del comportamiento humano</strong> y por eso no se degrada con el tiempo. Ejemplo: automatizar la tarea en altura para que nadie deba subir. Caro al inicio, el más barato en el ciclo de vida.' },
    h2: { t: '2 · Sustituir', n: 'Eficacia alta',
      d: 'Reemplazar por algo menos peligroso: solvente base agua en lugar de xileno. <strong>Verifica que no trasladas el riesgo</strong> — una sustitución que reduce el peligro químico pero introduce uno ergonómico o ambiental no es una mejora neta. Reevalúa la matriz completa tras sustituir.' },
    h3: { t: '3 · Controles de ingeniería', n: 'Eficacia media-alta',
      d: 'Aislar a la persona del peligro: guarda enclavada, extracción localizada, línea de vida certificada. Actúan aunque el trabajador se equivoque. <strong>Exigen mantenimiento verificable</strong>: una guarda anulada con cinta es un control de ingeniería degradado y es hallazgo inmediato.' },
    h4: { t: '4 · Controles administrativos', n: 'Eficacia media-baja',
      d: 'Cambian la forma de trabajar: permisos de trabajo, rotación, señalización, procedimientos. <strong>Dependen de que alguien haga lo correcto en el momento correcto</strong>, por eso se degradan bajo presión de producción. Un permiso firmado con la fecha del turno anterior es el síntoma clásico.' },
    h5: { t: '5 · EPP', n: 'Eficacia baja — última barrera',
      d: 'No reduce el peligro: reduce la consecuencia si todo lo demás falló. <strong>El hallazgo más frecuente en obra</strong> es un IPERC que determina EPP como control único, sin registro de haber evaluado los cuatro niveles superiores. La cl. 8.1.2 exige aplicar la jerarquía <em>en orden</em> y poder demostrarlo: lo que falta en la evidencia es el razonamiento, no el equipo.' }
  },

  /* ---------------- Ciclo de auditoría ---------------- */
  auditCycle: {
    f1: { t: '6.2 — Inicio de la auditoría', n: 'Salida: confirmación',
      d: 'Contacto con el auditado y comprobación de viabilidad. Parece trámite y no lo es: aquí se detecta si el alcance propuesto es auditable con los recursos y el tiempo asignados. <strong>Una auditoría mal dimensionada produce muestras que no defienden ningún hallazgo.</strong>' },
    f2: { t: '6.3 — Preparación', n: 'Salida: plan de auditoría',
      d: 'Revisión documental, plan, lista de verificación y asignación de roles. <strong>El 70 % de los hallazgos débiles nacen aquí.</strong> Si llegas a campo sin haber leído los procedimientos del auditado, auditarás contra tu opinión de cómo debería hacerse en lugar de contra el criterio declarado.' },
    f3: { t: '6.4 — Ejecución', n: 'Salida: evidencia objetiva',
      d: 'Reunión de apertura, recopilación de evidencia y generación de hallazgos. Regla de oro: <strong>triangula</strong> — entrevista, documento, registro y observación en campo. Una sola fuente nunca sostiene un hallazgo. La pregunta más productiva sigue siendo «muéstreme».' },
    f4: { t: '6.5 — Informe', n: 'Salida: informe de auditoría',
      d: 'Redacción, distribución y aprobación. Cada hallazgo necesita las tres piezas: <strong>requisito + evidencia con trazabilidad + declaración de desviación</strong>. Si falta una, no tienes hallazgo: tienes una opinión, y se caerá en la reunión de cierre.' },
    f5: { t: '6.6 — Cierre', n: 'Salida: auditoría cerrada',
      d: 'Completar, archivar y capturar lecciones aprendidas. La auditoría se cierra aunque las no conformidades sigan abiertas: <strong>son dos ciclos distintos</strong> y confundirlos deja acciones correctivas sin seguimiento formal.' },
    f6: { t: '6.7 — Seguimiento', n: 'Salida: cierre de la NC',
      d: 'Verificación de la acción correctiva y de su eficacia. <strong>Esta fase pertenece al auditado, no al auditor</strong>: el auditor verifica, no ejecuta ni propone la corrección. Proponerla compromete la imparcialidad que exige la cl. 9.2. Y la eficacia se comprueba con dato posterior y tiempo transcurrido, nunca con una firma de cierre.' }
  },

  /* ---------------- Pirámide documental ---------------- */
  docPyramid: {
    n1: { t: 'Nivel 1 — Política y manual', n: 'Opcional desde 2015',
      d: 'Qué queremos y hasta dónde llega el sistema. <strong>El manual de calidad dejó de ser obligatorio en 2015</strong> y la mayoría de organizaciones lo conservó por inercia. Si estás rediseñando, es la mayor oportunidad de reducción documental disponible — siempre que la información necesaria para operar siga existiendo en algún lado.' },
    n2: { t: 'Nivel 2 — Procedimientos', n: 'Solo los necesarios',
      d: 'Quién hace qué y en qué orden. Los seis procedimientos documentados obligatorios también desaparecieron en 2015. <strong>Aquí está el ahorro real de integrar</strong>: un solo procedimiento de control documental, de auditoría interna, de no conformidades y de competencia, en lugar de cuatro juegos paralelos.' },
    n3: { t: 'Nivel 3 — Instructivos y criterios', n: 'Nivel operativo',
      d: 'Cómo se hace exactamente. Deben estar <strong>en el punto de uso y en un formato usable ahí</strong>: un PDF en un servidor no sirve en un frente de obra sin señal. Es donde se verifica de verdad el control documental, no en la lista maestra.' },
    n4: { t: 'Nivel 4 — Registros', n: 'Lo único que audita un auditor',
      d: 'La prueba de que ocurrió. Los tres niveles superiores describen intención; <strong>solo este demuestra ejecución</strong>. En Perú, además, los registros de SST tienen plazos de retención fijados por ley (D.S. 005-2012-TR), no por tu conveniencia: exámenes médicos 5 años tras el cese, accidentes 10 años, enfermedades ocupacionales 20 años. La norma ISO no los fija; la ley sí.' }
  }
};

/** Diagramas que hoy tienen puntos interactivos. */
export const INTERACTIVOS = Object.keys(HOTSPOTS);
