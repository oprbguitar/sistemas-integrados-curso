/* ============================================================
   SIG Lab — Datos: estructura del programa y ruta de estudio
   ============================================================ */

export const META = {
  programa: 'Programa de Especialización en Sistemas Integrados de Gestión',
  proveedor: 'Bureau Veritas Perú — Capacitaciones',
  url: 'https://capacitaciones.bureauveritas.com.pe/online/programa-de-especializacion-en-sistemas-integrados-de-gestion',
  normas: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 37001:2016'],
  actualizado: 'Agosto 2026'
};

export const KPIS = [
  { v: '4', u: 'normas', l: 'ISO 9001 · 14001 · 45001 · 37001 sobre un solo tronco común' },
  { v: '7', u: 'caps.', l: 'Capítulos auditables idénticos gracias al Anexo SL' },
  { v: '~30', u: '%', l: 'Reducción típica de documentación al integrar frente a sistemas paralelos' },
  { v: '14', u: 'meses', l: 'Plazo de referencia de implementación a certificado en una organización mediana' }
];

/* ------------------------------------------------------------------
   Los seis módulos. `temas` refleja el temario del programa;
   `profundizacion` es la capa de consultor que este sitio añade.
   ------------------------------------------------------------------ */
export const MODULOS = [
  {
    id: 'm1',
    n: 'Módulo 1',
    t: 'Fundamentos e implementación del sistema integrado',
    norm: 'sig',
    horas: 12,
    resumen: 'De qué hablamos cuando decimos «integrar». Evolución de la calidad y de la gestión HSE, estructura de alto nivel, PHVA, contexto, partes interesadas, enfoque a procesos y liderazgo.',
    temas: [
      'Perspectivas en la gestión: evolución de la calidad y evolución de la gestión HSE',
      'Beneficios reales y costos ocultos del sistema integrado de gestión',
      'Definiciones clave en calidad, medio ambiente y seguridad',
      'Enfoque de sistemas de gestión y mejora continua',
      'Estructura de alto nivel (Anexo SL) y enfoque PHVA',
      'Comprensión de la organización y su contexto (cl. 4.1)',
      'Necesidades y expectativas de las partes interesadas (cl. 4.2)',
      'Enfoque basado en procesos y liderazgo (cl. 4.4 y 5.1)'
    ],
    profundizacion: [
      'Diferencia operativa entre <em>coordinar</em>, <em>combinar</em> e <em>integrar</em>: solo la tercera cambia la arquitectura del sistema.',
      'Estructura Armonizada (HS) 2021 como evolución de la HLS: qué cambió en el vocabulario común.',
      'Enmienda 1:2024 de cambio climático — auditable desde el 23/02/2024 sin período de transición.',
      'Lectura del contexto con PESTEL + FODA + cadena de valor, y cómo enlazarlo con el cap. 6.1 sin dejar cabos sueltos.'
    ],
    entregable: 'Análisis de contexto con matriz PESTEL, FODA cruzado y registro de partes interesadas con criterio de pertinencia declarado.'
  },
  {
    id: 'm2',
    n: 'Módulo 2',
    t: 'Gestión por procesos',
    norm: '9001',
    horas: 12,
    resumen: 'El corazón operativo del SIG. Sin procesos caracterizados no hay sistema integrado: hay cuatro manuales conviviendo en un archivador.',
    temas: [
      'Introducción a la gestión por procesos',
      'Identificación de entradas, salidas, secuencia de actividades y recursos',
      'Mapas de procesos: procesos de dirección, cadena de valor y procesos de soporte',
      'Requisitos aplicables de ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 e ISO 37001:2016',
      'Herramientas para el seguimiento y medición de los procesos',
      'Reglas básicas para documentar procesos del servicio',
      'Manejo de diagramas de flujo'
    ],
    profundizacion: [
      'Caracterización con diagrama de tortuga y ficha SIPOC: las cuatro preguntas que todo auditor formula.',
      'Diseño de indicadores que sobreviven a una auditoría: fórmula, fuente del dato, frecuencia, meta, responsable y umbral de reacción.',
      'Notación de flujo: cuándo basta un diagrama de bloques y cuándo hace falta BPMN con carriles.',
      'Jerarquía de procesos nivel 0 → 1 → 2 y el error de mapear a nivel de tarea.'
    ],
    entregable: 'Mapa de procesos de nivel 0 y una ficha de caracterización completa con tres indicadores validados.'
  },
  {
    id: 'm3',
    n: 'Módulo 3',
    t: 'Riesgos, aspectos, peligros y requisitos legales',
    norm: '45001',
    horas: 16,
    resumen: 'Las tres metodologías que no se pueden fusionar en una sola matriz — y cómo articularlas sin duplicar el trabajo.',
    temas: [
      'Pensamiento basado en riesgos y su alcance en ISO 9001',
      'Identificación y evaluación de aspectos e impactos ambientales',
      'IPERC: identificación de peligros, evaluación de riesgos y determinación de controles',
      'Evaluación del riesgo de soborno (ISO 37001 cl. 4.5)',
      'Identificación y evaluación del cumplimiento de requisitos legales',
      'Jerarquía de controles y gestión del cambio',
      'Riesgos y oportunidades a nivel del sistema (cl. 6.1)'
    ],
    profundizacion: [
      'Por qué el riesgo del cap. 6.1 (riesgo del sistema) es distinto del riesgo operacional del IPERC — y el hallazgo que genera confundirlos.',
      'Articulación con ISO 31000: la organización tiene un solo apetito de riesgo, aunque tenga tres matrices.',
      'IPERC por R.M. 050-2013-TR Anexo 3 frente a la matriz 5×5 del D.S. 024-2016-EM (escala invertida).',
      'Análisis de corbatín para riesgos críticos: barreras preventivas, mitigadoras y factores de degradación.',
      'Perspectiva de ciclo de vida en la identificación de aspectos (cl. 6.1.2 de ISO 14001).'
    ],
    entregable: 'Matriz IPERC base, matriz de aspectos e impactos con perspectiva de ciclo de vida, y matriz de riesgos del sistema enlazada a objetivos.'
  },
  {
    id: 'm4',
    n: 'Módulo 4',
    t: 'Estrategias de integración e información documentada',
    norm: 'sig',
    horas: 12,
    resumen: 'El módulo que decide si el SIG será un activo o una carga. Aquí se elige el nivel de integración y se diseña la arquitectura documental.',
    temas: [
      'Estrategias y pautas para la integración de sistemas de gestión',
      'Documentos requeridos por ISO 9001, ISO 14001, ISO 45001 e ISO 37001',
      'Buenas prácticas para el control de la información documentada',
      'Política integrada y objetivos del sistema',
      'Comunicación interna y externa del SIG',
      'Competencia, formación y toma de conciencia'
    ],
    profundizacion: [
      'Los tres niveles de integración (básico, medio, avanzado) y el diagnóstico de madurez que determina cuál es alcanzable.',
      'Inventario de información documentada obligatoria por norma: qué se puede fusionar en un solo documento y qué no.',
      'Redacción de la política integrada: los cinco compromisos que no pueden faltar y el error de la política-poema.',
      'Control documental digital: versionado, retención legal peruana y evidencia de aprobación.'
    ],
    entregable: 'Política integrada, lista maestra de información documentada y procedimiento único de control documental para las cuatro normas.'
  },
  {
    id: 'm5',
    n: 'Módulo 5',
    t: 'Auditoría interna del sistema integrado',
    norm: '14001',
    horas: 16,
    resumen: 'ISO 19011:2018 aplicada a auditorías combinadas. Programa, plan, técnicas de recopilación de evidencia, redacción de hallazgos y competencia del auditor.',
    temas: [
      'Principios de auditoría y gestión del programa de auditoría',
      'Planificación de la auditoría integrada y lista de verificación',
      'Técnicas de recopilación de evidencia objetiva',
      'Redacción y clasificación de hallazgos y no conformidades',
      'Tratamiento de no conformidades en un sistema integrado',
      'Análisis de causa raíz y verificación de eficacia',
      'Competencia y evaluación de auditores'
    ],
    profundizacion: [
      'Enfoque basado en riesgos aplicado al programa de auditoría: no todos los procesos se auditan con la misma frecuencia.',
      'Muestreo de auditoría: cómo justificar el tamaño de muestra ante el auditado y ante el organismo certificador.',
      'Los cinco porqués frente a Ishikawa frente a árbol de fallas: cuándo usar cada uno sin caer en el ritual.',
      'Diferencia entre corrección, acción correctiva y acción preventiva tras la desaparición de esta última en 2015.',
      'ISO 19011 (auditoría interna y de segunda parte) frente a ISO/IEC 17021-1 (certificación de tercera parte).'
    ],
    entregable: 'Programa anual de auditoría basado en riesgo, plan de auditoría integrada, lista de verificación e informe con hallazgos redactados.'
  },
  {
    id: 'm6',
    n: 'Módulo 6',
    t: 'Seguimiento, mejora, sostenibilidad y ESG',
    norm: 'esg',
    horas: 12,
    resumen: 'Cerrar el ciclo y proyectarlo. Indicadores, revisión por la dirección, mejora continua y la conexión del SIG con la agenda ESG y el reporte de sostenibilidad.',
    temas: [
      'Seguimiento y mejora en ISO 9001, ISO 14001 e ISO 45001',
      'Análisis de datos y evaluación del desempeño (cl. 9.1)',
      'Revisión por la dirección: entradas y salidas obligatorias',
      'No conformidad, acción correctiva y mejora continua (cap. 10)',
      'Análisis de ciclo de vida para el sistema de gestión ambiental',
      'Sostenibilidad y pilares ESG en el contexto de los sistemas de gestión',
      'Auditor interno ISO 37001:2016 y revisión del modelo de gestión'
    ],
    profundizacion: [
      'Diseño del tablero del SIG: indicadores de resultado frente a indicadores predictivos (lagging vs. leading).',
      'Revisión por la dirección como acto de gobierno, no como reunión de cumplimiento: las once entradas obligatorias.',
      'Puente SIG → ESG: cómo un SIG maduro alimenta un reporte GRI o una doble materialidad CSRD sin empezar de cero.',
      'Lo que viene: ISO 9001:2026 con cultura de calidad, conducta ética y planificación de la resiliencia.'
    ],
    entregable: 'Tablero de indicadores del SIG, acta de revisión por la dirección y mapa de contribución del SIG a los pilares ESG.'
  }
];

/* ------------------------------------------------------------------
   Ruta de estudio sugerida — 8 semanas
   ------------------------------------------------------------------ */
export const RUTA = [
  {
    s: 'Semana 1-2', t: 'Cimientos conceptuales', mod: 'Módulo 1',
    meta: 'Explicar sin apuntes por qué el Anexo SL hizo posible la integración.',
    hacer: [
      'Memoriza la estructura de 10 capítulos hasta poder escribirla de cabeza.',
      'Mapea los 7 capítulos auditables contra los cuadrantes del PHVA.',
      'Elige una organización real (la tuya) y redacta su contexto en una página.',
      'Construye el registro de partes interesadas con el criterio de pertinencia explícito.'
    ],
    senal: 'Puedes responder «¿por qué el cap. 4.1 antecede al 6.1?» con una cadena causal, no con una definición.'
  },
  {
    s: 'Semana 3', t: 'Procesos', mod: 'Módulo 2',
    meta: 'Caracterizar cualquier proceso en 20 minutos con evidencia auditable.',
    hacer: [
      'Dibuja el mapa de procesos nivel 0 de tu organización sin mirar el de nadie más.',
      'Caracteriza tres procesos con diagrama de tortuga.',
      'Diseña un indicador por proceso con las seis columnas obligatorias.',
      'Detecta y corrige el error más común: procesos mapeados a nivel de tarea.'
    ],
    senal: 'Cada proceso de tu mapa tiene dueño, indicador y al menos un riesgo asociado.'
  },
  {
    s: 'Semana 4-5', t: 'Riesgo en sus tres lenguajes', mod: 'Módulo 3',
    meta: 'Distinguir riesgo del sistema, aspecto ambiental, peligro SST y riesgo de soborno sin mezclarlos.',
    hacer: [
      'Llena una matriz IPERC de un proceso operativo con la metodología de R.M. 050-2013-TR.',
      'Llena una matriz de aspectos e impactos del mismo proceso, incluyendo una etapa aguas arriba.',
      'Aplica jerarquía de controles y justifica por escrito por qué no bastó el nivel superior.',
      'Construye un corbatín para el riesgo más crítico que encontraste.'
    ],
    senal: 'Puedes explicar por qué un mismo evento puede ser simultáneamente aspecto ambiental y peligro SST, y por qué se evalúan por separado.'
  },
  {
    s: 'Semana 6', t: 'Arquitectura documental e integración', mod: 'Módulo 4',
    meta: 'Decidir el nivel de integración con criterio y no por moda.',
    hacer: [
      'Aplica el radar de madurez a tu organización y calcula el índice global.',
      'Determina el nivel de integración alcanzable y arguméntalo en cinco líneas.',
      'Redacta la política integrada verificando los cinco compromisos obligatorios.',
      'Construye la lista maestra fusionando lo fusionable y marcando lo que debe quedar separado.'
    ],
    senal: 'Tu lista maestra tiene menos documentos que la suma de los cuatro sistemas por separado, sin perder ningún requisito.'
  },
  {
    s: 'Semana 7', t: 'Auditoría', mod: 'Módulo 5',
    meta: 'Redactar hallazgos que no se caen en la reunión de cierre.',
    hacer: [
      'Escribe diez hallazgos con la estructura requisito + evidencia + desviación.',
      'Clasifica cada uno como NC mayor, menor u oportunidad de mejora y justifica.',
      'Haz un análisis de causa raíz real con cinco porqués y detecta dónde se detuvo antes de tiempo.',
      'Prepara una lista de verificación integrada para un proceso, con las cuatro normas en la misma fila.'
    ],
    senal: 'Ninguno de tus hallazgos empieza con «falta» o «no hay»: todos citan requisito y evidencia.'
  },
  {
    s: 'Semana 8', t: 'Cierre, medición y ESG', mod: 'Módulo 6',
    meta: 'Convertir el sistema en información que la dirección usa para decidir.',
    hacer: [
      'Diseña el tablero del SIG con al menos tres indicadores predictivos.',
      'Simula un acta de revisión por la dirección con las once entradas obligatorias.',
      'Traza el puente entre tres procesos del SIG y tres indicadores ESG.',
      'Repasa la tabla de transición a ISO 9001:2026 y marca tu plan de actualización.'
    ],
    senal: 'Puedes defender el presupuesto del SIG ante un gerente financiero con la lógica del iceberg de costos.'
  }
];

/* ------------------------------------------------------------------
   Hitos normativos vigentes y en curso
   ------------------------------------------------------------------ */
export const HITOS = [
  {
    d: 'Feb 2024', t: 'Enmienda 1 — Cambio climático', hot: true,
    b: 'ISO publicó la <strong>Amendment 1:2024</strong> sobre acción climática en más de 30 normas de sistemas de gestión, incluidas ISO 9001, ISO 14001 e ISO 45001. Modifica dos puntos: la cl. 4.1 exige determinar si el cambio climático es una cuestión pertinente, y la cl. 4.2 añade una nota sobre requisitos de las partes interesadas relacionados con el clima. <strong>Es auditable desde el 23/02/2024, sin período de transición.</strong>'
  },
  {
    d: 'Ago 2025', t: 'ISO/DIS 9001 — Borrador Internacional',
    b: 'Se publica el borrador de norma internacional de la nueva ISO 9001, abriendo el proceso formal de revisión y el período de comentarios de los comités nacionales.'
  },
  {
    d: '2026', t: 'FDIS y publicación prevista de ISO 9001:2026', hot: true,
    b: 'Tras el FDIS, la publicación de la nueva edición se espera dentro de 2026. Mantiene la base de 2015 y la Estructura Armonizada, e incorpora <strong>cultura de calidad, conducta ética, gestión del conocimiento y planificación de la resiliencia</strong>. ISO 14001 e ISO 45001 avanzan en revisiones coordinadas.'
  },
  {
    d: 'Tras publicación', t: 'Ventana de transición',
    b: 'El IAF fija normalmente un período de transición de tres años desde la publicación. Los certificados bajo la edición 2015 dejan de ser válidos al cierre de esa ventana. <strong>Planifica la migración desde el diseño</strong>: un sistema construido hoy con contexto y riesgo bien resueltos migra con esfuerzo marginal.'
  }
];

/* ------------------------------------------------------------------
   Cambios anticipados de la revisión 2026
   ------------------------------------------------------------------ */
export const CAMBIOS_2026 = [
  ['Cap. 3', 'Términos y definiciones', 'Se incorporan a la propia norma más términos específicos del sistema de gestión de la calidad, en lugar de remitir a ISO 9000.'],
  ['Cap. 4', 'Contexto', 'Cambio climático y sostenibilidad pasan a formar parte explícita del contexto organizacional, consolidando la Enmienda 1:2024.'],
  ['Cap. 5', 'Liderazgo', 'La <strong>conducta ética</strong> y la <strong>cultura de la calidad</strong> se incorporan como responsabilidad de la alta dirección.'],
  ['Cap. 6', 'Planificación', 'La cl. 6.1 se subdivide (6.1.1 a 6.1.3) separando explícitamente riesgos de oportunidades. Se refuerza la <strong>planificación de la resiliencia</strong>: respuesta ante disrupciones, gestión del conocimiento frente a la rotación y adaptación a cambios tecnológicos y regulatorios.'],
  ['Cap. 7', 'Toma de conciencia', 'La cl. 7.3 incorpora expresamente la cultura de calidad y la ética, más allá del conocimiento de la política y los objetivos.']
];
