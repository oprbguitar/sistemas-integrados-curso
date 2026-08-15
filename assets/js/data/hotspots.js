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
  },

  /* ---------------- Línea de tiempo ---------------- */
  normsTimeline: {
    m4: { t: '2012 — Anexo SL', n: 'El punto de inflexión', d: 'ISO decide que todas sus normas de sistemas de gestión compartirán diez capítulos, texto común y vocabulario común. <strong>Sin esta decisión el SIG no existiría</strong> como concepto operativo: antes, integrar era traducir permanentemente entre tres lógicas distintas.' },
    m8: { t: '2024 — Enmienda de cambio climático', n: 'Auditable sin transición', d: 'Modifica dos puntos en más de 30 normas: la cl. 4.1 exige determinar si el cambio climático es una cuestión pertinente, y la cl. 4.2 añade una nota sobre requisitos climáticos de las partes interesadas. <strong>Auditable desde el 23/02/2024, sin período de gracia.</strong> Si tu análisis de contexto no lo menciona, es hallazgo hoy.' },
    m9: { t: '2025-2026 — La ola de revisiones', n: 'Dónde estás parado', d: '<strong>ISO 37001:2025</strong> ya publicada (la de 2016 está retirada). <strong>ISO 14001:2026</strong> publicada el 15/04/2026, con transición hasta el 14/04/2029. <strong>ISO 9001</strong> 6.ª edición prevista para septiembre de 2026. <strong>ISO 45001</strong> en revisión, publicación esperada en 2027. Construye hoy con el capítulo 4 y el 6 sólidos: ahí se anclan todos los cambios.' }
  },

  /* ---------------- Mapa de procesos ---------------- */
  processMap: {
    est: { t: 'Procesos estratégicos', n: 'Dirigen, no ejecutan', d: 'Dirección y contexto, gestión del SIG, mejora y revisión. Definen el rumbo y asignan recursos. <strong>Error frecuente:</strong> ponerlos como adorno y que la alta dirección no aparezca en ninguna evidencia. La cl. 5.1 exige que integre los requisitos en los procesos de negocio, no que los delegue.' },
    val: { t: 'Cadena de valor', n: 'Donde se gana el dinero', d: 'La secuencia que transforma el requisito del cliente en satisfacción. <strong>Prueba de calidad del mapa:</strong> si tu cadena de valor podría pertenecer a cualquier empresa del rubro, está copiada. Los mejores mapas reflejan el flujo real de trabajo; los peores imitan la estructura de la norma.' },
    sop: { t: 'Procesos de soporte', n: 'Habilitan al resto', d: 'RR. HH., compras, mantenimiento, TI y documentación. Sirven a la cadena de valor. <strong>Los más auditados</strong> por el vínculo directo con cláusulas: 7.2 competencia, 8.4 proveedores externos, 7.1.3 infraestructura, 7.5 información documentada.' },
    ret: { t: 'La flecha de retroalimentación', n: 'Cap. 9 cerrando el ciclo', d: 'No es decorativa. Es el capítulo 9 devolviendo información de desempeño al inicio. <strong>Un mapa sin ese retorno describe una fábrica, no un sistema de gestión</strong>, y delata que la medición no alimenta ninguna decisión.' }
  },

  /* ---------------- Tortuga ---------------- */
  turtle: {
    p1: { t: '¿Con qué? — Recursos', n: 'Cl. 7.1', d: 'Infraestructura, equipos, software y ambiente de trabajo. <strong>El olvido clásico es el ambiente de trabajo</strong> (cl. 7.1.4): factores físicos, sociales y psicológicos. En un SIG conecta directo con los peligros psicosociales de ISO 45001.' },
    p2: { t: '¿Con quién? — Personas', n: 'Cl. 7.2', d: 'Competencia requerida, responsable, matriz RACI. No basta con nombrar el cargo: hay que definir <strong>qué competencia</strong> se necesita y cómo se verifica. Si aquí solo hay un nombre, falta la mitad del requisito.' },
    p3: { t: '¿Cómo? — Método', n: 'Cl. 8.1', d: 'Procedimiento, instructivo y criterios de aceptación. La cl. 4.4.1 exige determinar <em>los criterios y los métodos necesarios</em>. <strong>Sin criterio declarado no hay nada que auditar</strong>: no se puede juzgar conformidad contra un estándar que no existe.' },
    p4: { t: '¿Cuán bien? — Medición', n: 'Cl. 9.1', d: 'Indicador, meta, frecuencia y riesgo asociado. Es la pata que más veces queda vacía y la que genera la no conformidad más limpia. <strong>Si una pata queda vacía, el hallazgo ya está escrito:</strong> 4.4.1 no determina los criterios ni los métodos necesarios.' }
  },

  /* ---------------- Ruta de certificación ---------------- */
  certRoute: {
    s1: { t: 'Diagnóstico (GAP)', n: 'Mes 0', d: 'Comparación entre lo que exige la norma y lo que la organización ya hace. <strong>Rara vez se parte de cero:</strong> casi toda empresa en marcha cumple informalmente un 30-50 % sin saberlo. El GAP evita rehacer lo que ya funciona y enfoca el presupuesto donde hay brecha real.' },
    s2: { t: 'Implementación', n: 'Meses 1-10', d: 'Diseño de procesos, matrices, controles y documentación. <strong>Decisión de alcance crítica:</strong> intentar 30-50 procesos a la vez produce sistemas de conformidad, no de mejora. Es más rentable elegir unos pocos procesos clave y hacerlos excelentes, dejando el resto en cumplimiento.' },
    s3: { t: 'Auditoría interna', n: 'Mes 10 · cl. 9.2', d: 'Autodiagnóstico honesto antes de que venga alguien de fuera. <strong>Si tu auditoría interna reporta cero hallazgos, no estás listo: estás ciego.</strong> Un sistema sano encuentra más internamente que externamente.' },
    s4: { t: 'Revisión por la dirección', n: 'Mes 11 · cl. 9.3', d: 'La alta dirección revisa las entradas obligatorias y decide. El organismo certificador la pedirá en la Etapa 1. <strong>Un acta que informa pero no decide incumple la cl. 9.3.3</strong>, por completa que sea la información presentada.' },
    s5: { t: 'Etapa 1 — Revisión documental', n: 'Mes 12', d: 'El certificador revisa documentación, alcance y preparación, normalmente en sitio. Sirve para confirmar que la Etapa 2 es viable. <strong>Salir con muchas observaciones aquí es barato; salir con ellas en Etapa 2 es caro.</strong>' },
    s6: { t: 'Etapa 2 — Auditoría de eficacia', n: 'Mes 13', d: 'Auditoría in situ contra evidencia real de operación. <strong>Exige al menos un ciclo completo</strong> de auditoría interna y revisión por la dirección con registros reales. Sin tres meses de rodaje se convierte en una auditoría de documentos que termina en NC mayores y en una segunda visita que se paga aparte.' }
  },

  /* ---------------- Corbatín ---------------- */
  bowtie: {
    knot: { t: 'El evento tope', n: 'Pérdida de control', d: 'El momento exacto en que se pierde el control del peligro. <strong>Debe redactarse como un evento, no como una consecuencia:</strong> «ignición de vapores inflamables», no «incendio». Confundirlos colapsa las dos mitades del análisis y hace que las barreras se asignen mal.' },
    prev: { t: 'Barreras preventivas', n: 'Reducen la probabilidad', d: 'Actúan antes del evento, sobre las causas: permiso de trabajo, medición de LEL, retiro de combustible. <strong>Cada barrera necesita dueño, verificación y factor de degradación.</strong> Una barrera sin verificación es una barrera de papel: existe en el procedimiento y no en la realidad.' },
    mit: { t: 'Barreras mitigadoras', n: 'Reducen la severidad', d: 'Actúan después del evento, sobre las consecuencias: detección, rociadores, brigada, kit antiderrame. <strong>Prueba de auditoría en campo:</strong> «si este control falla, ¿qué lo detecta?». El silencio ante esa pregunta es el hallazgo.' }
  },

  /* ---------------- Niveles de integración ---------------- */
  integrationLevels: {
    l1: { t: 'Nivel 1 — Coordinación', n: 'Madurez baja', d: 'Política integrada única, un solo control documental, auditorías internas combinadas. Los sistemas operativos siguen separados. <strong>Es el nivel correcto para una primera certificación</strong>: intentar más produce un sistema elegante en papel que la operación abandona.' },
    l2: { t: 'Nivel 2 — Integración de procesos', n: 'Madurez media', d: 'Mapa de procesos único, objetivos e indicadores comunes, gestión de riesgos unificada a nivel de sistema, una sola revisión por la dirección. Requiere estar ya certificado en dos o más normas y tener los procesos realmente definidos.' },
    l3: { t: 'Nivel 3 — Integración estratégica', n: 'Madurez alta', d: 'El SIG deja de ser un sistema paralelo y pasa a ser <strong>el sistema de gestión del negocio</strong>. Riesgo integrado con ERM (ISO 31000), indicadores atados a la estrategia y a ESG. Aquí ya no se habla de cumplimiento sino de cultura.' }
  },

  /* ---------------- Partes interesadas ---------------- */
  stakeholderQuadrant: {
    q1: { t: 'Mantener satisfecho', n: 'Alto poder · bajo interés', d: 'Accionistas, municipalidad. No siguen el día a día, pero pueden detenerlo. <strong>Estrategia:</strong> informar de forma resumida y periódica, sin saturar. El riesgo típico es descubrir tarde que cambiaron una condición que sí te afecta.' },
    q2: { t: 'Gestionar de cerca', n: 'Alto poder · alto interés', d: 'SUNAFIL, OEFA, cliente ancla, sindicato. <strong>Aquí vive casi todo tu riesgo de cumplimiento.</strong> Estrategia: relación activa, requisitos documentados y seguimiento nominal. Sus requisitos casi siempre se convierten en obligaciones de cumplimiento.' },
    q3: { t: 'Monitorear', n: 'Bajo poder · bajo interés', d: 'Medios, público general. Bajo esfuerzo, pero revisar periódicamente: <strong>un actor de este cuadrante puede saltar al de arriba de un día para otro</strong> tras un incidente. La matriz es una foto, no una verdad permanente.' },
    q4: { t: 'Mantener informado', n: 'Bajo poder · alto interés', d: 'Comunidad, ONG, proveedores menores. Les afecta mucho lo que haces y tienen poca capacidad formal de forzarte. <strong>Ignorarlos es el origen clásico del conflicto social</strong>, que después sí les da poder. Estrategia: comunicación proactiva y canal de queja real.' },
    flow: { t: 'De la expectativa al requisito', n: 'El paso que casi nadie da', d: 'La cl. 4.2 no pide una lista: pide <strong>decidir</strong> qué expectativas se adoptan como obligaciones. Si no se puede contactar a una parte interesada, la norma admite deducir sus necesidades poniéndose en su lugar — pero hay que dejar constancia del método. Solo lo adoptado se vuelve auditable.' }
  },

  /* ---------------- Ciclo de vida ---------------- */
  lifecycle: {
    ctrl: { t: 'Etapas bajo control', n: 'Requisito operacional', d: 'Diseño, compras y producción: la organización decide directamente. Generan <strong>controles operacionales</strong> de la cl. 8.1 — especificaciones, criterios de aceptación, parámetros de proceso.' },
    infl: { t: 'Etapas bajo influencia', n: 'Requisito de comunicación', d: 'Materias primas, distribución, uso y fin de vida. No las controlas, pero las condicionas: eliges proveedor, defines embalaje, redactas el contrato. Generan requisitos de <strong>comunicación e información</strong> a proveedores y usuarios. Delegar por contrato no elimina el requisito normativo.' },
    aclara: { t: 'Ciclo de vida ≠ ACV', n: 'La confusión más cara', d: 'La cl. 6.1.2 exige <strong>perspectiva</strong> de ciclo de vida, no un Análisis de Ciclo de Vida cuantitativo (ISO 14040). No hace falta calcular huella: hace falta demostrar que se consideraron las etapas. Confundirlos lleva a proyectos caros e innecesarios; ignorarlos, al hallazgo más fácil de abrir en el Perú.' }
  },

  /* ---------------- Gantt ---------------- */
  ganttImpl: {
    f1: { t: 'Fase 1 — Diagnóstico y diseño base', n: 'Meses 1-4', d: 'GAP, contexto, partes interesadas, alcance y mapa de procesos. <strong>Es la fase que más condiciona el resultado y la que más se recorta por prisa.</strong> Un contexto de plantilla aquí obliga a rehacer los capítulos 6, 9 y 10 más adelante.' },
    f2: { t: 'Fase 2 — Riesgo y planificación', n: 'Meses 3-6', d: 'IPERC, aspectos ambientales, riesgos del sistema, requisitos legales, política y objetivos. Las tres matrices se construyen <strong>en paralelo pero separadas</strong>, cada una con su metodología y escala.' },
    f3: { t: 'Fase 3 — Operación y rodaje', n: 'Meses 6-11', d: 'Control operacional, emergencias, competencia, comunicación y documentación. Incluye los tres meses de <strong>rodaje</strong>: operar generando registros reales. Es la fase que todos quieren saltarse y la única que no se puede saltar.' },
    f4: { t: 'Fase 4 — Verificación y certificación', n: 'Meses 10-14', d: 'Auditoría interna, acciones correctivas, revisión por la dirección y las dos etapas de certificación. <strong>Regla dura:</strong> la Etapa 2 exige al menos un ciclo completo de auditoría interna y revisión con datos reales.' },
    hito: { t: 'Los tres hitos de control', n: 'Cómo saber si vas bien', d: '<strong>Mes 5 — sistema diseñado:</strong> existe en papel y es coherente. <strong>Mes 11 — sistema operando con evidencia:</strong> hay registros reales de al menos un trimestre. <strong>Mes 14 — certificado.</strong> Si llegas al mes 11 sin registros, mover la fecha de certificación es más barato que ir y fallar.' }
  },

  /* ---------------- Radar de madurez ---------------- */
  maturityRadar: {
    perfil: { t: 'Leer el perfil, no el promedio', n: 'Diagnóstico', d: 'El índice global (2,9) esconde lo importante: <strong>el perfil es dentado</strong>. Liderazgo y control operacional en 4, competencia y medición en 2. Un promedio parejo de 2,9 y este perfil exigen planes de acción completamente distintos.' },
    fuerte: { t: 'Los ejes fuertes', n: 'Palancas', d: 'Liderazgo 4 y control operacional 4: la dirección empuja y lo operativo funciona. <strong>Úsalo como palanca</strong> — con liderazgo alto, un plan de mejora bien argumentado consigue presupuesto. Con liderazgo bajo, ningún plan avanza por bueno que sea.' },
    debil: { t: 'Los ejes débiles', n: 'Riesgo de colapso', d: 'Competencia 2 (formación sin evaluar eficacia), medición 2 (indicadores que nadie usa) y mejora 2 (acciones correctivas sin causa raíz). <strong>Un perfil dentado certifica igual que uno parejo, pero colapsa en la primera auditoría de seguimiento</strong>, cuando ya no basta con tener documentos y hay que demostrar que el sistema se mantuvo vivo.' }
  },

  /* ---------------- Iceberg ---------------- */
  costIceberg: {
    vis: { t: 'La punta visible', n: '1×', d: 'Multa, reproceso, chatarra, días perdidos, seguro, atención médica. Es lo que la contabilidad registra y <strong>el argumento más débil que puedes llevar a un gerente financiero</strong>, porque suele parecer asumible frente al costo del sistema.' },
    ocu: { t: 'La masa sumergida', n: '4× a 10×', d: 'Investigación, productividad perdida, retrasos y penalidades, reclutamiento y curva de aprendizaje, prima SCTR, litigio, daño reputacional, licencia social. <strong>Aquí está el argumento que sí mueve presupuesto</strong>, porque convierte la seguridad y la calidad en una decisión económica en lugar de moral.' },
    uso: { t: 'Cómo usarlo en la práctica', n: 'Fórmula de tablero', d: 'Costo total ≈ (multas + reprocesos) × factor de ocultamiento. <strong>Documenta el factor que usas</strong> — la literatura va de 4× a 10× — y sustitúyelo por tus propios datos en cuanto los tengas. Un factor sin fuente es tan atacable como no tener el cálculo.' }
  },

  /* ---------------- Anatomía del hallazgo ---------------- */
  ncAnatomy: {
    a1: { t: '1 · Requisito', n: 'Contra qué comparas', d: 'La cláusula, el artículo legal o el documento propio de la organización. <strong>Si no puedes citarlo, no hay hallazgo.</strong> Y audita contra el criterio declarado, no contra tu opinión de cómo debería hacerse: si la organización cumple su procedimiento y su procedimiento cumple la norma, no hay desviación aunque a ti te parezca mejorable.' },
    a2: { t: '2 · Evidencia', n: 'Hecho verificable', d: 'Con trazabilidad: código de documento, fecha, identificación del registro, ubicación. <strong>Otro auditor debería llegar al mismo lugar con tu descripción.</strong> Y triangula siempre — entrevista, documento, registro y observación en campo; una sola fuente no sostiene un hallazgo.' },
    a3: { t: '3 · Desviación', n: 'La declaración explícita', d: 'La frase que conecta requisito y evidencia: «por tanto, no se evidencia que…». Parece redundante y no lo es: <strong>es la pieza que el auditado discute en la reunión de cierre</strong>, y sin ella el hallazgo se lee como una opinión sobre un hecho.' },
    c1: { t: 'NC mayor', n: 'Bloquea la certificación', d: 'Ausencia total de un requisito, fallo sistémico, o riesgo de incumplimiento legal. Obliga a acción inmediata y normalmente a verificación presencial antes de emitir el certificado.' },
    c2: { t: 'NC menor', n: 'Plan de acción con plazo', d: 'Fallo aislado que no compromete la capacidad del sistema para lograr sus resultados. <strong>Cuidado con el efecto acumulación:</strong> varias NC menores sobre la misma cláusula dejan de ser aisladas y se convierten en una mayor.' },
    c3: { t: 'Observación / OM', n: 'No exige acción formal', d: 'Cumple, pero hay riesgo de degradación o espacio de mejora. <strong>No la uses para evitar el conflicto de abrir una NC real</strong>: es la forma más común de que una auditoría interna se vuelva complaciente y de que la externa encuentre lo que tú callaste.' }
  },

  /* ---------------- Matriz de correspondencia ---------------- */
  correspondenceGrid: {
    integ: { t: 'Integrable', n: 'Aquí está el ahorro', d: 'Requisito sustancialmente idéntico en las cuatro normas: un solo documento, un solo proceso, una sola evidencia. Nueve de diecisiete filas caen aquí. <strong>Es donde se justifica económicamente el SIG</strong> y donde el IAF reconoce reducción de días-auditor en auditoría combinada.' },
    matiz: { t: 'Común con matiz', n: 'Cuidado al redactar', d: 'El requisito existe en todas, pero cada norma añade algo propio. Ejemplo: la cl. 5.1 de liderazgo es común, pero ISO 45001 exige además proteger a los trabajadores de represalias al reportar. <strong>Se integra el documento, no se recorta el matiz</strong> — recortarlo es la forma silenciosa de perder un requisito.' },
    propio: { t: 'Propio — no integrable', n: 'La identidad de cada norma', d: 'IPERC, aspectos ambientales, riesgo de soborno, consulta y participación, diseño y desarrollo. <strong>Responden preguntas distintas con escalas distintas.</strong> Fusionarlos en una sola matriz destruye las tres metodologías y produce números que parecen gestión sin serlo.' }
  }

};

/** Diagramas que hoy tienen puntos interactivos. */
export const INTERACTIVOS = Object.keys(HOTSPOTS);
