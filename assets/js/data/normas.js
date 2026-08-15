/* ============================================================
   SIG Lab — Datos: las cuatro normas, cláusula por cláusula
   Lente de consultor: requisito → intención → evidencia →
   preguntas de auditoría → hallazgo típico → la trampa.
   ============================================================ */

export const NORMAS = {
  '9001': {
    k: '9001', n: 'ISO 9001:2015', t: 'Sistemas de gestión de la calidad',
    obj: 'Capacidad demostrada de entregar productos y servicios conformes y aumentar la satisfacción del cliente.',
    riesgo: 'El objeto de protección es el <strong>cliente y la conformidad del producto/servicio</strong>.',
    ntp: 'NTP-ISO 9001:2015 (INACAL)',
    propio: ['Enfoque al cliente y satisfacción', 'Diseño y desarrollo (cl. 8.3)', 'Propiedad del cliente', 'Liberación de producto y servicio'],
    cifra: 'La norma de gestión más certificada del mundo — más de un millón de certificados vigentes.'
  },
  '14001': {
    k: '14001', n: 'ISO 14001:2026', t: 'Sistemas de gestión ambiental',
    obj: 'Proteger el medio ambiente, prevenir la contaminación y cumplir obligaciones de cumplimiento, con perspectiva de ciclo de vida.',
    riesgo: 'El objeto de protección es el <strong>medio ambiente y el entorno</strong>. El impacto se mide sobre un tercero que no participa en el proceso.',
    ntp: 'Publicada el 15/04/2026. Reemplaza a ISO 14001:2015; transición hasta el 14/04/2029.',
    propio: ['Aspectos e impactos ambientales', 'Perspectiva de ciclo de vida', 'Obligaciones de cumplimiento', 'Preparación y respuesta ante emergencias ambientales'],
    cifra: 'Única de las cuatro que exige mirar más allá de los límites físicos de la organización.'
  },
  '45001': {
    k: '45001', n: 'ISO 45001:2018', t: 'Sistemas de gestión de la seguridad y salud en el trabajo',
    obj: 'Prevenir lesiones y deterioro de la salud, y proporcionar lugares de trabajo seguros y saludables.',
    riesgo: 'El objeto de protección es el <strong>trabajador</strong> — incluidos contratistas y visitantes bajo control de la organización.',
    ntp: 'NTP-ISO 45001:2018 (INACAL). En Perú convive con la Ley 29783 y su reglamento.',
    propio: ['Consulta y participación de los trabajadores (cl. 5.4)', 'Identificación de peligros e IPERC', 'Jerarquía de controles', 'Investigación de incidentes', 'Comité de SST'],
    cifra: 'La única con un capítulo de participación obligatoria: el trabajador no es objeto del sistema, es sujeto.'
  },
  '37001': {
    k: '37001', n: 'ISO 37001:2025', t: 'Sistemas de gestión antisoborno',
    obj: 'Prevenir, detectar y responder al soborno, y cumplir la legislación antisoborno aplicable.',
    riesgo: 'El objeto de protección es la <strong>integridad de la organización y del mercado</strong>.',
    ntp: 'Publicada el 02/03/2025; reemplaza a ISO 37001:2016 (retirada) e incorpora la Amd 1:2024. En Perú se articula con la Ley 30424.',
    propio: ['Función de cumplimiento antisoborno', 'Debida diligencia sobre socios de negocio', 'Controles financieros y no financieros', 'Regalos, hospitalidad y donaciones', 'Denuncia e investigación'],
    cifra: 'Exige un órgano de gobierno independiente para la función de cumplimiento — no puede reportar a quien audita.'
  }
};

/* ------------------------------------------------------------------
   Cláusulas del tronco común (Anexo SL) con lectura integrada
   ------------------------------------------------------------------ */
export const COMUNES = [
  {
    cl: '4.1', t: 'Comprensión de la organización y su contexto', norm: 'sig',
    req: 'Determinar las cuestiones externas e internas pertinentes al propósito y dirección estratégica que afectan la capacidad de lograr los resultados previstos del sistema.',
    intent: 'Obligar a que el sistema se diseñe desde la realidad de la organización, no desde una plantilla. Es la cláusula que hace irrepetible cada SIG.',
    evid: [
      'Análisis PESTEL o equivalente con fecha y responsable',
      'FODA cruzado que genere estrategias, no solo listas',
      'Acta donde la alta dirección revisa y aprueba el contexto',
      'Evidencia de que el cambio climático fue evaluado como cuestión pertinente (Enmienda 1:2024)',
      'Trazabilidad de al menos una cuestión del contexto hacia un riesgo del cap. 6.1'
    ],
    preg: [
      '¿Cuáles son las tres cuestiones externas que más amenazan sus resultados previstos este año?',
      'Muéstreme cómo esa cuestión se convirtió en un riesgo, un objetivo o un control.',
      '¿Cuándo revisaron el contexto por última vez y qué cambió?',
      '¿Evaluaron el cambio climático como cuestión pertinente? ¿Con qué conclusión y qué evidencia?'
    ],
    hallazgo: 'Contexto redactado una vez en la implementación y nunca actualizado, sin ninguna conexión demostrable con los riesgos declarados.',
    trampa: 'La norma no exige información documentada del contexto, pero sí exige <em>determinarlo</em>. Sin documento no puedes demostrar la determinación: en la práctica, se documenta.'
  },
  {
    cl: '4.2', t: 'Necesidades y expectativas de las partes interesadas', norm: 'sig',
    req: 'Determinar las partes interesadas pertinentes, sus requisitos pertinentes, y cuáles de esos requisitos se convierten en obligaciones de cumplimiento.',
    intent: 'Separar el ruido de la obligación. No toda expectativa es un requisito; el sistema debe declarar cuáles adopta.',
    evid: [
      'Registro de partes interesadas con criterio de pertinencia explícito',
      'Columna que distingue expectativa de requisito adoptado',
      'Enlace de los requisitos legales al registro de obligaciones de cumplimiento',
      'Evidencia de seguimiento y revisión de esa información'
    ],
    preg: [
      '¿Qué criterio usó para decidir que esta parte interesada es pertinente y aquella no?',
      'De las expectativas listadas, ¿cuáles adoptó como obligación y quién lo decidió?',
      '¿Cómo se enteran de que un requisito de una parte interesada cambió?'
    ],
    hallazgo: 'Listado genérico (clientes, proveedores, Estado, comunidad) copiado de una plantilla, sin requisitos concretos ni decisión de adopción.',
    trampa: 'En ISO 45001, los trabajadores y sus representantes son parte interesada <strong>obligatoria</strong>, no opcional. Omitirlos es no conformidad directa.'
  },
  {
    cl: '4.3 / 4.4', t: 'Alcance y sistema de gestión', norm: 'sig',
    req: 'Determinar los límites y aplicabilidad del sistema, mantenerlo como información documentada, y establecer los procesos necesarios con sus criterios, métodos, recursos, responsabilidades y riesgos.',
    intent: 'Que el alcance sea una decisión defendible y que el sistema exista como red de procesos, no como carpeta.',
    evid: [
      'Alcance documentado con productos, servicios, sitios y justificación de exclusiones (solo ISO 9001 admite no aplicabilidad)',
      'Mapa de procesos con secuencia e interacción',
      'Fichas de caracterización con dueño, entradas, salidas, criterios e indicadores'
    ],
    preg: [
      '¿Por qué esta sede quedó fuera del alcance? ¿Puede sostenerlo ante un cliente?',
      'Muéstreme un proceso y dígame quién es su dueño, cómo se mide y qué riesgo tiene asociado.',
      '¿Cómo determinó que estos son los procesos «necesarios» y no otros?'
    ],
    hallazgo: 'Procesos declarados en el mapa sin dueño asignado, sin indicador o sin criterios de control definidos — incumplimiento directo de 4.4.1.',
    trampa: 'ISO 14001, 45001 y 37001 <strong>no admiten exclusiones</strong>. Solo ISO 9001 permite declarar requisitos no aplicables, y con justificación documentada.'
  },
  {
    cl: '5.1', t: 'Liderazgo y compromiso', norm: 'sig',
    req: 'La alta dirección debe demostrar liderazgo y compromiso asumiendo la responsabilidad de la eficacia del sistema, integrando los requisitos en los procesos de negocio y asegurando recursos.',
    intent: 'Terminar con el sistema delegado al «encargado de calidad». La rendición de cuentas es indelegable.',
    evid: [
      'Actas de revisión por la dirección con decisiones y asignación de recursos',
      'Presupuesto aprobado del SIG',
      'Participación verificable de la alta dirección en comités y recorridos',
      'Objetivos del SIG presentes en la evaluación de desempeño de los directivos'
    ],
    preg: [
      'Gerente General: ¿cuáles son los objetivos del sistema este año y cómo va su cumplimiento?',
      '¿Qué decisión de negocio se modificó en los últimos doce meses por información del SIG?',
      '¿Cómo se asegura de que los requisitos del sistema estén en los procesos de negocio y no en un sistema paralelo?'
    ],
    hallazgo: 'La alta dirección desconoce los objetivos y el desempeño del sistema; toda la evidencia proviene del coordinador del SIG.',
    trampa: 'Desde 2015 <strong>no existe el «representante de la dirección»</strong> como requisito. Puedes tenerlo, pero no sustituye la rendición de cuentas de la alta dirección.'
  },
  {
    cl: '5.2 / 5.3', t: 'Política y roles organizacionales', norm: 'sig',
    req: 'Establecer una política apropiada al propósito y contexto, que incluya los compromisos exigidos y sirva de marco para los objetivos; asignar y comunicar responsabilidades y autoridades.',
    intent: 'Que la política sea un contrato verificable, no un adorno de recepción.',
    evid: [
      'Política integrada con los compromisos obligatorios de cada norma',
      'Evidencia de comunicación interna y disponibilidad para partes interesadas',
      'Organigrama del SIG, matriz RACI o descripciones de puesto'
    ],
    preg: [
      '¿Qué compromiso de su política se puede verificar hoy en el piso de planta?',
      '¿Quién tiene autoridad para detener una operación insegura y dónde está documentada?'
    ],
    hallazgo: 'Política que enumera adjetivos sin ningún compromiso auditable, o que omite un compromiso obligatorio de alguna de las normas integradas.',
    trampa: 'Los compromisos mínimos difieren: 9001 exige satisfacer requisitos y mejorar; 14001 añade proteger el medio ambiente y prevenir la contaminación; 45001 añade condiciones seguras, eliminar peligros y <strong>consulta y participación</strong>; 37001 añade prohibir el soborno y fomentar la denuncia de buena fe.'
  },
  {
    cl: '6.1', t: 'Acciones para abordar riesgos y oportunidades', norm: 'sig',
    req: 'Al planificar, considerar las cuestiones del 4.1 y los requisitos del 4.2 para determinar riesgos y oportunidades, planificar acciones y evaluar su eficacia.',
    intent: 'Sustituir la acción preventiva (eliminada en 2015) por pensamiento basado en riesgos incorporado a la planificación.',
    evid: [
      'Matriz de riesgos y oportunidades del sistema con trazabilidad al contexto',
      'Acciones planificadas con responsable, plazo y recurso',
      'Evaluación posterior de la eficacia de las acciones'
    ],
    preg: [
      '¿Cómo determinó este riesgo y de qué cuestión del contexto proviene?',
      '¿Qué acción tomó y cómo verificó que funcionó?',
      '¿Qué oportunidad identificó y qué hizo con ella?'
    ],
    hallazgo: 'Matriz de riesgos que solo replica el IPERC operativo, sin ningún riesgo estratégico o de sistema; oportunidades vacías o inexistentes.',
    trampa: 'ISO 9001 <strong>no exige una metodología formal</strong> de gestión del riesgo ni una matriz. Pero exige demostrar que se consideró. Y no exige un «procedimiento de gestión de riesgos»: exige acciones.'
  },
  {
    cl: '6.2', t: 'Objetivos y planificación para lograrlos', norm: 'sig',
    req: 'Establecer objetivos coherentes con la política, medibles, objeto de seguimiento, comunicados y actualizados; y planificar qué se hará, con qué recursos, quién, cuándo y cómo se evaluarán los resultados.',
    intent: 'Convertir la intención en gestión. Los cinco elementos de la planificación son requisito literal.',
    evid: ['Ficha de objetivo con los cinco elementos', 'Seguimiento periódico con datos', 'Comunicación a los niveles pertinentes'],
    preg: ['Muéstreme el plan de este objetivo: qué, recursos, quién, cuándo y cómo evalúa el resultado.', '¿Qué hizo cuando este objetivo se desvió de la meta?'],
    hallazgo: 'Objetivos declarados sin plan asociado, o metas fijadas sin línea base que las haga interpretables.',
    trampa: 'Un objetivo sin línea base no es medible en la práctica: «reducir accidentes» no dice desde cuánto ni hasta cuánto.'
  },
  {
    cl: '7.2 / 7.3', t: 'Competencia y toma de conciencia', norm: 'sig',
    req: 'Determinar la competencia necesaria, asegurarla mediante educación, formación o experiencia, tomar acciones para adquirirla y evaluar su eficacia; asegurar que las personas tomen conciencia de la política, objetivos, su contribución y las implicaciones del incumplimiento.',
    intent: 'Distinguir formación de competencia. Asistir a un curso no es ser competente.',
    evid: [
      'Perfil de puesto con competencia requerida',
      'Registro de formación y, crucialmente, <strong>evaluación de eficacia</strong>',
      'Evidencia de conciencia en entrevistas de campo, no en firmas de asistencia'
    ],
    preg: [
      'A un operario: ¿cuál es la política del sistema y cómo contribuye usted a ella?',
      '¿Cómo evaluó que la formación fue eficaz? Muéstreme el criterio.',
      '¿Qué pasa si esta persona no cumple con los requisitos del sistema?'
    ],
    hallazgo: 'Lista de asistencia como única evidencia de competencia. No hay evaluación de eficacia — es la no conformidad más frecuente del cap. 7.',
    trampa: 'En ISO 45001 la formación en SST debe ser <strong>gratuita y en horario laboral</strong> (cl. 7.2 nota y Ley 29783 art. 49). Cobrarla o darla fuera de jornada es hallazgo legal, no solo normativo.'
  },
  {
    cl: '7.5', t: 'Información documentada', norm: 'sig',
    req: 'Incluir la información documentada exigida por la norma y la que la organización determine necesaria; controlar su creación, actualización, distribución, acceso, conservación y disposición.',
    intent: 'Terminar con la burocracia obligatoria y devolver la decisión a la organización — con la responsabilidad que eso implica.',
    evid: ['Lista maestra con versión, aprobación y retención', 'Evidencia de control de documentos de origen externo', 'Control de acceso y protección de registros'],
    preg: ['¿Cómo sabe el operario que este es el documento vigente?', '¿Dónde está la versión anterior y por qué la conservó?', '¿Cómo controla los documentos de origen externo, como una norma legal o una especificación de cliente?'],
    hallazgo: 'Documentos obsoletos en uso en el punto de operación, o registros sin tiempo de retención definido frente a la exigencia legal.',
    trampa: 'La retención de registros de SST en Perú tiene <strong>plazos legales propios</strong> (D.S. 005-2012-TR): exámenes médicos ocupacionales 5 años tras el cese, registro de accidentes 10 años, enfermedades ocupacionales 20 años. La norma ISO no los fija; la ley sí.'
  },
  {
    cl: '8.1', t: 'Planificación y control operacional', norm: 'sig',
    req: 'Planificar, implementar y controlar los procesos necesarios; establecer criterios, implementar el control conforme a esos criterios y mantener información documentada que dé confianza en que se ejecutaron según lo planificado.',
    intent: 'Es la cláusula donde el sistema toca el trabajo real. Todo lo anterior es preparación.',
    evid: ['Procedimientos e instructivos en el punto de uso', 'Registros de ejecución y verificación', 'Control de cambios (gestión del cambio)', 'Control sobre procesos contratados externamente'],
    preg: ['¿Qué criterio define que este trabajo está bien hecho y dónde está escrito?', '¿Qué pasó la última vez que cambió este proceso? Muéstreme la gestión del cambio.'],
    hallazgo: 'Cambio de proveedor, equipo o método ejecutado sin evaluación previa de riesgos ni actualización del IPERC o de la matriz de aspectos.',
    trampa: 'La <strong>gestión del cambio</strong> es requisito explícito en 14001 (8.1) y 45001 (8.1.3), e implícito en 9001 (6.3 y 8.5.6). Es el punto de fuga favorito de los auditores externos.'
  },
  {
    cl: '9.1', t: 'Seguimiento, medición, análisis y evaluación', norm: 'sig',
    req: 'Determinar qué, cómo y cuándo se hace el seguimiento y la medición, cuándo se analizan los resultados, y evaluar el desempeño y la eficacia del sistema.',
    intent: 'Que el sistema genere información para decidir. Medir sin analizar no cumple.',
    evid: ['Plan de seguimiento y medición', 'Evidencia de calibración o verificación de equipos', 'Análisis de tendencias, no solo tablas de datos', 'Evaluación del cumplimiento legal con periodicidad definida'],
    preg: ['¿Qué le dicen estos datos y qué decisión tomó con ellos?', '¿Cuándo evaluó por última vez el cumplimiento de los requisitos legales y con qué resultado?'],
    hallazgo: 'Indicadores recolectados y graficados sin análisis ni decisión asociada; evaluación de cumplimiento legal ausente o desactualizada.',
    trampa: 'La <strong>evaluación del cumplimiento legal</strong> (9.1.2 en 14001, 9.1.2 en 45001) es una cláusula independiente y frecuentemente olvidada. Tener la matriz legal no es evaluarla.'
  },
  {
    cl: '9.2', t: 'Auditoría interna', norm: 'sig',
    req: 'Realizar auditorías internas a intervalos planificados; establecer un programa que considere la importancia de los procesos, los cambios y los resultados previos; definir criterios y alcance; asegurar objetividad e imparcialidad.',
    intent: 'Autodiagnóstico honesto. Si la auditoría interna no encuentra nada, la externa encontrará todo.',
    evid: ['Programa anual justificado por riesgo', 'Planes de auditoría', 'Evidencia de competencia e imparcialidad de los auditores', 'Informes con hallazgos y seguimiento'],
    preg: ['¿Por qué auditó este proceso dos veces y aquel ninguna?', '¿Cómo asegura que el auditor no audita su propio trabajo?', 'Su auditoría interna reportó cero no conformidades: ¿cómo lo explica?'],
    hallazgo: 'Programa de auditoría plano (todos los procesos una vez al año) sin criterio de riesgo, o auditores auditando su propia área.',
    trampa: 'El programa <strong>debe basarse en la importancia y el riesgo</strong>, no en el calendario. Un programa uniforme es un hallazgo defendible del auditor externo.'
  },
  {
    cl: '9.3', t: 'Revisión por la dirección', norm: 'sig',
    req: 'La alta dirección debe revisar el sistema a intervalos planificados considerando las entradas obligatorias y generando salidas sobre oportunidades de mejora, cambios necesarios y necesidades de recursos.',
    intent: 'Convertir el sistema en insumo de gobierno corporativo.',
    evid: ['Acta con las entradas obligatorias tratadas una por una', 'Decisiones con responsable y plazo', 'Asignación efectiva de recursos'],
    preg: ['Muéstreme dónde se trató el desempeño de los proveedores externos en esta acta.', '¿Qué recurso se asignó como resultado de esta revisión?'],
    hallazgo: 'Acta que presenta información pero no registra decisiones; o entradas obligatorias omitidas (típicamente: adecuación de recursos, eficacia de las acciones de riesgo, desempeño de proveedores).',
    trampa: 'Las entradas son <strong>literales y verificables una a una</strong>. Un auditor experimentado lleva la lista y las tacha. En un SIG hay que cubrir además las entradas propias de cada norma (p. ej., consulta y participación en 45001).'
  },
  {
    cl: '10.2', t: 'No conformidad y acción correctiva', norm: 'sig',
    req: 'Reaccionar ante la no conformidad, evaluar la necesidad de eliminar sus causas, implementar acciones, revisar su eficacia y actualizar riesgos si es necesario.',
    intent: 'Distinguir apagar el fuego (corrección) de evitar que vuelva (acción correctiva).',
    evid: ['Registro de NC con corrección y análisis de causa', 'Evidencia del método de causa raíz aplicado', 'Verificación posterior de eficacia con dato, no con firma'],
    preg: ['Esta NC se repitió tres veces: ¿qué falló en el análisis de causa?', '¿Cómo verificó que la acción fue eficaz y cuánto tiempo esperó para hacerlo?'],
    hallazgo: 'Causa raíz registrada como «falta de capacitación» o «error humano» en el 80 % de los casos — señal inequívoca de análisis ritual.',
    trampa: 'La <strong>acción preventiva desapareció</strong> en 2015: su función la absorbió el cap. 6.1. Si tu procedimiento aún dice «acción preventiva», estás citando una edición derogada.'
  }
];

/* ------------------------------------------------------------------
   Cláusulas propias no integrables
   ------------------------------------------------------------------ */
export const PROPIAS = [
  {
    cl: '5.4', t: 'Consulta y participación de los trabajadores', norm: '45001',
    req: 'Establecer procesos para la consulta y participación de trabajadores <strong>de todos los niveles y funciones</strong>, incluidos los no directivos, eliminando obstáculos como el idioma, la alfabetización o las represalias.',
    intent: 'Es la cláusula que hace a ISO 45001 estructuralmente distinta. El trabajador no es objeto del sistema: es sujeto con derecho a intervenir en su diseño.',
    evid: [
      'Actas del Comité de SST (en Perú, obligatorio desde 20 trabajadores — Ley 29783)',
      'Evidencia de consulta previa a la determinación de controles del IPERC',
      'Mecanismos de sugerencia con respuesta trazable',
      'Evidencia de eliminación de obstáculos: traducción, pictogramas, canal anónimo'
    ],
    preg: [
      'A un trabajador no directivo: ¿participó usted en la elaboración del IPERC de su área?',
      '¿Qué obstáculos identificó para la participación y qué hizo para eliminarlos?',
      '¿En qué se diferencia lo que ustedes <em>consultan</em> de lo que ustedes <em>informan</em>?'
    ],
    hallazgo: 'Actas de comité firmadas sin evidencia de consulta real; el IPERC lo elaboró el área de SSOMA sin participación del personal expuesto.',
    trampa: 'La norma distingue <strong>consulta</strong> (buscar la opinión antes de decidir — reservada a los no directivos en asuntos clave) de <strong>participación</strong> (involucrarse en la toma de decisiones). No son sinónimos y la norma lista temas específicos para cada una.'
  },
  {
    cl: '6.1.2', t: 'Aspectos ambientales e impactos', norm: '14001',
    req: 'Determinar los aspectos ambientales de las actividades, productos y servicios que se pueden controlar o influir, y sus impactos asociados, <strong>desde una perspectiva de ciclo de vida</strong>, considerando condiciones normales, anormales y situaciones de emergencia razonablemente previsibles.',
    intent: 'Obligar a mirar más allá de la puerta de la planta y más allá del día normal de operación.',
    evid: [
      'Matriz de aspectos con las tres condiciones operativas diferenciadas',
      'Al menos una etapa aguas arriba (compras, materias primas) y una aguas abajo (uso, disposición)',
      'Criterio documentado para determinar la significancia',
      'Aspectos significativos comunicados a quienes trabajan bajo control de la organización'
    ],
    preg: [
      'Muéstreme un aspecto de una etapa que usted no controla directamente pero sí influye.',
      '¿Qué aspecto identificó en condición de emergencia y cómo se refleja en su plan de respuesta?',
      '¿Cuál es su criterio de significancia y quién lo aprobó?'
    ],
    hallazgo: 'Matriz limitada a las operaciones internas en condición normal — sin ciclo de vida ni condiciones anormales o de emergencia.',
    trampa: 'Perspectiva de ciclo de vida <strong>no es un ACV (ISO 14040)</strong>. No hace falta cuantificar huella: hace falta demostrar que se consideraron las etapas. Confundirlos lleva a proyectos innecesariamente caros.'
  },
  {
    cl: '6.1.2', t: 'Identificación de peligros y evaluación de riesgos SST', norm: '45001',
    req: 'Establecer procesos de identificación continua y proactiva de peligros, considerando la organización del trabajo, factores sociales, liderazgo, cultura, actividades rutinarias y no rutinarias, emergencias, personas (incluidos contratistas y visitantes), cambios y conocimiento adquirido de incidentes.',
    intent: 'Ampliar el foco del peligro físico al peligro psicosocial y organizacional.',
    evid: [
      'IPERC con línea base, específico y continuo',
      'Peligros psicosociales identificados (carga de trabajo, acoso, jornadas)',
      'Evidencia de participación de trabajadores en la identificación',
      'Actualización tras incidentes y cambios'
    ],
    preg: [
      '¿Dónde están los peligros psicosociales en su IPERC?',
      '¿Cómo identifica peligros en actividades no rutinarias como un mantenimiento mayor?',
      'Ocurrió este incidente hace tres meses: ¿dónde se actualizó el IPERC?'
    ],
    hallazgo: 'IPERC exclusivamente de peligros físicos y mecánicos; sin factores psicosociales ni organización del trabajo, pese a ser requisito literal.',
    trampa: 'La norma exige identificación <strong>continua y proactiva</strong>. Un IPERC con fecha de hace dos años y sin evidencia de revisión tras cambios es no conformidad, aunque el contenido sea técnicamente correcto.'
  },
  {
    cl: '4.5 / 8.2', t: 'Evaluación del riesgo de soborno y debida diligencia', norm: '37001',
    req: 'Evaluar el riesgo de soborno por categoría de operación, socio de negocio y transacción; y aplicar debida diligencia proporcional sobre proyectos, socios y personal en posiciones expuestas.',
    intent: 'Focalizar los controles donde el riesgo real está, en lugar de aplicar una política uniforme e inoperante.',
    evid: [
      'Matriz de riesgo de soborno por unidad de negocio y geografía',
      'Expedientes de debida diligencia de terceros con nivel proporcional al riesgo',
      'Registro de regalos, hospitalidad y donaciones con umbrales definidos',
      'Canal de denuncia con protección al denunciante y evidencia de investigación'
    ],
    preg: [
      '¿Qué socio de negocio tiene el mayor riesgo de soborno y qué debida diligencia le aplicó?',
      '¿Quién ejerce la función de cumplimiento antisoborno y a quién reporta?',
      'Muéstreme una denuncia recibida y cómo fue investigada.'
    ],
    hallazgo: 'Debida diligencia uniforme (el mismo formulario para el proveedor de útiles y para el agente aduanero), lo que demuestra que la evaluación de riesgo no se usó.',
    trampa: 'La función de cumplimiento antisoborno debe tener <strong>acceso directo al órgano de gobierno</strong>. Si reporta al gerente comercial, el control está estructuralmente comprometido — y es hallazgo mayor.'
  }
];

/* ------------------------------------------------------------------
   Información documentada obligatoria — inventario integrado
   ------------------------------------------------------------------ */
export const DOCS_OBLIGATORIOS = [
  ['Alcance del sistema', '✔', '✔', '✔', '✔', 'Fusionable en un solo documento'],
  ['Política', '✔', '✔', '✔', '✔', 'Fusionable — verificar compromisos de las 4'],
  ['Objetivos y planes', '✔', '✔', '✔', '✔', 'Fusionable en una sola matriz'],
  ['Riesgos y oportunidades', '—', '✔', '✔', '✔', 'Fusionable a nivel de sistema'],
  ['Aspectos ambientales significativos', '—', '✔', '—', '—', 'No fusionable — metodología propia'],
  ['Peligros, riesgos SST y controles', '—', '—', '✔', '—', 'No fusionable — metodología propia'],
  ['Evaluación del riesgo de soborno', '—', '—', '—', '✔', 'No fusionable — metodología propia'],
  ['Requisitos legales y otros', '—', '✔', '✔', '✔', 'Fusionable en una matriz legal única'],
  ['Competencia del personal', '✔', '✔', '✔', '✔', 'Fusionable'],
  ['Evidencia de operación según lo planificado', '✔', '✔', '✔', '✔', 'Por proceso, no por norma'],
  ['Preparación y respuesta ante emergencias', '—', '✔', '✔', '—', 'Fusionable en un solo plan'],
  ['Seguimiento, medición y calibración', '✔', '✔', '✔', '✔', 'Fusionable en un plan único'],
  ['Evaluación del cumplimiento legal', '—', '✔', '✔', '✔', 'Fusionable'],
  ['Programa e informes de auditoría interna', '✔', '✔', '✔', '✔', 'Fusionable — auditoría combinada'],
  ['Revisión por la dirección', '✔', '✔', '✔', '✔', 'Fusionable en una sola acta'],
  ['No conformidades y acciones correctivas', '✔', '✔', '✔', '✔', 'Fusionable en un solo registro'],
  ['Investigación de incidentes', '—', '—', '✔', '—', 'Propio de SST — obligación legal en Perú'],
  ['Consulta y participación de trabajadores', '—', '—', '✔', '—', 'Propio de SST'],
  ['Debida diligencia sobre socios de negocio', '—', '—', '—', '✔', 'Propio de antisoborno']
];

/* ------------------------------------------------------------------
   Errores de traducción normativa que cuestan puntos en examen
   ------------------------------------------------------------------ */
export const FALSOS_AMIGOS = [
  ['Corrección', 'Acción para eliminar una <strong>no conformidad detectada</strong>. Actúa sobre el efecto.', 'Retirar el lote defectuoso del almacén.'],
  ['Acción correctiva', 'Acción para eliminar la <strong>causa</strong> de la no conformidad y evitar que vuelva a ocurrir.', 'Rediseñar el control de recepción que dejó pasar el lote.'],
  ['Acción preventiva', '<strong>Ya no existe</strong> como requisito desde 2015. Su función la asumió el cap. 6.1.', 'Citarla en un procedimiento actual es un error de edición.'],
  ['Riesgo', 'Efecto de la <strong>incertidumbre</strong>. Puede ser positivo o negativo.', 'La rotación del personal clave puede afectar la capacidad de entrega.'],
  ['Peligro', 'Fuente con <strong>potencial</strong> de causar lesión o deterioro de la salud. Es una propiedad, no un evento.', 'Trabajo en altura, energía eléctrica, ruido.'],
  ['Aspecto ambiental', 'Elemento de las actividades que <strong>interactúa o puede interactuar</strong> con el medio ambiente.', 'Vertimiento de efluentes, consumo de agua.'],
  ['Impacto ambiental', 'El <strong>cambio</strong> en el medio ambiente resultante del aspecto.', 'Contaminación del cuerpo receptor, agotamiento del recurso.'],
  ['Incidente', 'Suceso que <strong>surge del trabajo</strong> y que podría causar o causa lesión. Incluye el cuasi accidente.', 'Un accidente es un incidente <em>con</em> lesión.'],
  ['Requisito', 'Necesidad o expectativa establecida, generalmente implícita u obligatoria.', 'No todo requisito es legal; no toda expectativa es requisito.'],
  ['Debe / Debería', '«Debe» (<em>shall</em>) es <strong>requisito auditable</strong>. «Debería» (<em>should</em>) es recomendación.', 'Solo lo que «debe» genera no conformidad.'],
  ['Información documentada', 'Sustituye a «documento» y «registro». <strong>Mantener</strong> = documento; <strong>conservar</strong> = registro.', 'Detectar el verbo indica qué exige la cláusula.'],
  ['Eficacia / Eficiencia', 'Eficacia: grado en que se alcanzan los resultados. Eficiencia: relación resultado/recursos.', 'ISO 9001 exige <strong>eficacia</strong>. La eficiencia es opcional (ISO 9004).']
];
