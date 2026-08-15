/* ============================================================
   SIG Lab — Datos: casuística aplicada, ayuda memoria, glosario
   ============================================================ */

export const CASOS = [
  {
    id: 'c1', sector: 'Manufactura · Alimentos', norm: '9001',
    t: 'El indicador que medía lo que no importaba',
    ctx: 'Planta de alimentos, 220 trabajadores, certificada ISO 9001 desde hace seis años. El indicador estrella del proceso de producción es «cumplimiento del programa de producción», que reporta 98 % sostenido durante tres años. Sin embargo, los reclamos de cliente crecieron 40 % en el último año y dos clientes industriales cambiaron de proveedor.',
    hechos: [
      'El indicador mide unidades producidas contra unidades programadas.',
      'Los reclamos se registran en el área comercial, en una hoja de cálculo que no llega a producción.',
      'La revisión por la dirección presenta el 98 % como evidencia de desempeño satisfactorio.',
      'No existe indicador de conformidad de producto en primera pasada.'
    ],
    pregunta: '¿Qué cláusulas están incumplidas y cómo redactaría los hallazgos?',
    analisis: [
      '<strong>Cl. 9.1.1</strong> — La organización determinó qué medir, pero no evaluó <em>el desempeño y la eficacia del sistema</em>. Medir volumen no evalúa calidad.',
      '<strong>Cl. 9.1.2</strong> — La satisfacción del cliente debe ser objeto de seguimiento. Los reclamos existen pero no se analizan como percepción del cliente.',
      '<strong>Cl. 9.1.3</strong> — No hay análisis de datos que relacione reclamos con desempeño del proceso.',
      '<strong>Cl. 9.3.2</strong> — La revisión por la dirección debe incluir la satisfacción del cliente y la conformidad del producto. Presentar solo el 98 % la vuelve incompleta.',
      '<strong>Cl. 4.4.1 c)</strong> — Los criterios y métodos de control del proceso, incluidos indicadores, no aseguran la operación eficaz.'
    ],
    hallazgo: '<strong>NC menor (cl. 9.1.2):</strong> «ISO 9001 cl. 9.1.2 requiere que la organización realice el seguimiento de las percepciones del cliente. Se evidenció que los reclamos de cliente registrados en la hoja "Reclamos 2026" del área comercial (41 registros entre ene y jul 2026) no son analizados ni comunicados al proceso de producción, y no fueron presentados en la revisión por la dirección del 12/03/2026. Por tanto, no se evidencia seguimiento de la percepción del cliente como entrada al sistema.»',
    leccion: 'Un indicador que nunca baja no es una buena noticia: es un indicador mal diseñado. Prueba de consultor: pregunta qué decisión se tomó alguna vez porque el indicador se movió. Si no hay ninguna, el indicador es decorativo.',
    accion: 'Rediseñar el tablero: añadir conformidad en primera pasada, costo de la no calidad y tasa de reclamos por millón de unidades. Cerrar el circuito comercial → producción con periodicidad definida.'
  },
  {
    id: 'c2', sector: 'Construcción · Obra civil', norm: '45001',
    t: 'El IPERC que llegó tarde a su propia obra',
    ctx: 'Contratista de obra civil, 340 trabajadores, certificada ISO 45001 y sujeta a la Ley 29783 y al D.S. 011-2019-TR. Un trabajador sufre fractura al caer desde un andamio a 3,2 m. La investigación concluye «acto subestándar: el trabajador no ancló su arnés».',
    hechos: [
      'El IPERC de línea base de la obra fue elaborado por el ingeniero de SSOMA y aprobado en gabinete.',
      'No hay evidencia de participación de trabajadores en su elaboración.',
      'El andamio fue armado por una subcontrata cuyo personal no figura en el registro de inducción.',
      'El permiso de trabajo en altura del día está firmado, pero con fecha del turno anterior.',
      'El punto de anclaje certificado más cercano estaba a 9 m del punto de trabajo.'
    ],
    pregunta: 'La conclusión de la investigación, ¿es sostenible? ¿Qué encontraría un auditor?',
    analisis: [
      'La conclusión <strong>no es sostenible</strong>. «El trabajador no ancló» es la descripción del evento, no la causa. Detenerse ahí es el patrón clásico de investigación que culpa al último eslabón.',
      '<strong>Cl. 5.4</strong> — IPERC sin consulta a los trabajadores expuestos. NC directa: la norma exige consulta a los no directivos en la identificación de peligros y determinación de controles.',
      '<strong>Cl. 8.1.4</strong> — Control de contratistas: personal de subcontrata sin inducción registrada operando en el alcance del sistema.',
      '<strong>Cl. 8.1.2</strong> — Jerarquía de controles: se saltó directamente al EPP (arnés) sin evidencia de haber evaluado ingeniería (línea de vida, plataforma con barandas) ni administración.',
      '<strong>Cl. 10.2</strong> — La causa raíz declarada no elimina la causa: si el anclaje está a 9 m, el control es físicamente inaplicable. La acción correctiva derivada será inevitablemente ineficaz.',
      '<strong>Legal</strong> — Permiso de trabajo con fecha del turno anterior: el control existe en el papel y no en la operación.'
    ],
    hallazgo: '<strong>NC mayor (cl. 5.4 + 8.1.2):</strong> «ISO 45001 cl. 8.1.2 requiere aplicar la jerarquía de controles. Se evidenció que el IPERC de la partida "Encofrado de vigas nivel 3" (rev. 0, 02/06/2026) determina como único control el uso de arnés de seguridad, sin registro de evaluación de controles de eliminación, sustitución o ingeniería, y sin evidencia de consulta a los trabajadores conforme a cl. 5.4. En inspección de campo se verificó que el punto de anclaje certificado más próximo se encuentra a 9 m del frente de trabajo, lo que hace inaplicable el control determinado.»',
    leccion: 'Cuando la causa raíz de una investigación es siempre el trabajador, el sistema tiene un problema de método, no de disciplina. Regla práctica: si la acción correctiva propuesta es «capacitar y sensibilizar», el análisis se detuvo demasiado pronto.',
    accion: 'Reabrir la investigación con método TASC o árbol de causas. Reelaborar el IPERC con participación del frente. Instalar línea de vida horizontal certificada. Incorporar verificación de anclaje al permiso de trabajo.'
  },
  {
    id: 'c3', sector: 'Minería · Concentradora', norm: '14001',
    t: 'El aspecto ambiental que estaba fuera del cerco',
    ctx: 'Unidad minera con planta concentradora, certificada ISO 14001. La matriz de aspectos e impactos contiene 84 entradas, todas dentro del perímetro de la unidad. Un auditor externo abre una no conformidad en la auditoría de recertificación.',
    hechos: [
      'La matriz cubre emisiones, efluentes, residuos y consumo de agua y energía dentro de la unidad.',
      'La unidad recibe 900 t/mes de reactivos químicos transportados por una empresa contratista por carretera de montaña.',
      'El concentrado se despacha a puerto por la misma vía.',
      'No hay ninguna entrada en la matriz referida a transporte, extracción de insumos ni disposición final.',
      'La organización argumenta que el transporte «es responsabilidad del contratista».'
    ],
    pregunta: '¿Tiene razón la organización? ¿Cuál es la cláusula incumplida?',
    analisis: [
      'La organización <strong>no tiene razón</strong>. La cl. 6.1.2 exige determinar aspectos «que la organización puede controlar y aquellos sobre los que puede influir», <strong>desde una perspectiva de ciclo de vida</strong>.',
      'El transporte de reactivos es una etapa aguas arriba sobre la que existe influencia clara: la organización elige el transportista, define la ruta, especifica el embalaje y firma el contrato.',
      'La delegación contractual <strong>no traslada el requisito normativo</strong>. Cl. 8.1 exige controlar los procesos contratados externamente.',
      'La ausencia de condiciones de emergencia en la matriz (derrame en carretera) agrava el hallazgo y conecta con cl. 8.2.',
      'Riesgo real no gestionado: un derrame de xantato en cabecera de cuenca genera un procedimiento sancionador ante OEFA que ninguna cláusula contractual detiene.'
    ],
    hallazgo: '<strong>NC mayor (cl. 6.1.2):</strong> «ISO 14001 cl. 6.1.2 requiere determinar los aspectos ambientales considerando una perspectiva de ciclo de vida. Se evidenció que la matriz de aspectos e impactos (código MA-01, rev. 7, 15/01/2026) contiene 84 aspectos, todos correspondientes a actividades dentro del perímetro de la unidad. No se evidenció la determinación de aspectos asociados al transporte de insumos químicos (900 t/mes), al despacho de concentrado, ni a la disposición final, etapas sobre las cuales la organización ejerce influencia mediante contratos y especificaciones.»',
    leccion: 'La perspectiva de ciclo de vida es el requisito más incumplido de ISO 14001 en el Perú, y el más fácil de detectar: basta pedir la matriz y buscar una sola fila fuera del cerco. Aclaración clave: no exige un ACV cuantitativo — exige demostrar que se consideraron las etapas.',
    accion: 'Ampliar la matriz con etapas aguas arriba y aguas abajo. Incorporar requisitos ambientales al contrato de transporte. Incluir el escenario de derrame en carretera en el plan de emergencias con simulacro conjunto.'
  },
  {
    id: 'c4', sector: 'Servicios · Contrataciones con el Estado', norm: '37001',
    t: 'La debida diligencia de talla única',
    ctx: 'Empresa de servicios de ingeniería, 90 trabajadores, con el 70 % de sus ingresos proveniente de contratos con entidades públicas. Certificada ISO 37001 hace dos años. La auditoría de seguimiento revisa el proceso de gestión de terceros.',
    hechos: [
      'Existe un formulario único de debida diligencia de 12 preguntas aplicado a todos los terceros.',
      'Se aplicó igual al proveedor de material de oficina y al «agente comercial» contratado para gestionar la relación con una entidad pública.',
      'El agente comercial cobra 8 % del valor del contrato como éxito, sin entregables definidos.',
      'La función de cumplimiento antisoborno la ejerce el Gerente de Administración y Finanzas, que reporta al Gerente General.',
      'El registro de regalos y hospitalidad tiene 3 entradas en 24 meses.'
    ],
    pregunta: '¿Dónde están los hallazgos y cuál es el más grave?',
    analisis: [
      '<strong>Cl. 4.5 + 8.2</strong> — La debida diligencia debe ser <strong>proporcional al riesgo evaluado</strong>. Un formulario idéntico para todos demuestra que la evaluación de riesgo de soborno no se usó como entrada. Es hallazgo de sistema, no de expediente.',
      '<strong>Cl. 8.5</strong> — El pago por éxito a un intermediario ante una entidad pública, sin entregables verificables, es <strong>una de las banderas rojas canónicas</strong> de la norma. Requiere control reforzado, no el formulario estándar.',
      '<strong>Cl. 5.3.2</strong> — La función de cumplimiento antisoborno debe tener <strong>acceso directo al órgano de gobierno</strong>. Si depende del Gerente General, no puede investigar a la línea que la nombra. Es un defecto estructural del control.',
      '<strong>Cl. 8.7</strong> — Tres registros de regalos y hospitalidad en 24 meses en una empresa con 70 % de facturación pública sugiere subregistro, no ausencia de eventos. Indicio de canal inoperante.',
      'Conexión legal peruana: la Ley 30424 permite eximir de responsabilidad administrativa a la persona jurídica si acredita un modelo de prevención adecuado. Un modelo con estos defectos no lo acredita.'
    ],
    hallazgo: '<strong>NC mayor (cl. 5.3.2):</strong> «ISO 37001 cl. 5.3.2 requiere que la función de cumplimiento antisoborno tenga acceso directo al órgano de gobierno. Se evidenció, según el organigrama vigente (rev. 3, 04/2026) y el acta de designación del 11/2024, que dicha función es ejercida por el Gerente de Administración y Finanzas, con línea de reporte única al Gerente General, sin canal formal de acceso al Directorio. No se evidenció ningún reporte directo al órgano de gobierno en el período auditado.»',
    leccion: 'En antisoborno, los hallazgos importantes casi nunca están en el expediente: están en la estructura. Pregunta de consultor: «si el sobornador fuera el Gerente General, ¿este sistema lo detectaría?». Si la respuesta es no, el sistema es cosmético.',
    accion: 'Redefinir la línea de reporte de la función de cumplimiento al Directorio. Estratificar la debida diligencia en tres niveles según riesgo. Someter al agente comercial a debida diligencia reforzada con entregables verificables. Reforzar y comunicar el canal de denuncia.'
  },
  {
    id: 'c5', sector: 'Transversal · SIG', norm: 'sig',
    t: 'La integración que multiplicó el trabajo',
    ctx: 'Empresa agroindustrial que decidió integrar sus tres sistemas certificados por separado. Contrató una consultoría que entregó un «Manual del Sistema Integrado» de 180 páginas y una matriz única que fusiona IPERC, aspectos ambientales y riesgos del sistema en una sola hoja de cálculo de 47 columnas.',
    hechos: [
      'La matriz única usa una sola escala de severidad para lesiones, impactos ambientales y riesgos de negocio.',
      'Nadie en la operación la actualiza: la mantiene una practicante.',
      'Los supervisores siguen usando sus antiguas matrices en paralelo, en Excel local.',
      'La auditoría interna se hizo con la matriz única; la operación se ejecuta con las antiguas.',
      'El auditor externo abrió cuatro no conformidades en la siguiente auditoría de seguimiento.'
    ],
    pregunta: '¿Qué falló conceptualmente en esta integración?',
    analisis: [
      'Se confundió <strong>integrar</strong> con <strong>fusionar</strong>. Integrar es unificar la gobernanza y los procesos comunes; fusionar metodologías con lógicas distintas destruye ambas.',
      'Las tres evaluaciones responden preguntas diferentes: el IPERC evalúa daño a la persona, los aspectos evalúan alteración del medio, el riesgo de sistema evalúa amenaza al resultado previsto. <strong>Una escala común es matemáticamente incoherente.</strong>',
      'Un sistema que la operación abandona y mantiene una practicante incumple <strong>cl. 5.1</strong> (integración a los procesos de negocio) y <strong>cl. 4.4</strong> (procesos necesarios y sus interacciones).',
      'La existencia de sistemas paralelos en la sombra es la señal diagnóstica más fiable de una integración fallida.',
      'Nivel de integración mal elegido: se saltó del nivel 1 al nivel 3 sin la madurez que lo sostiene.'
    ],
    hallazgo: '<strong>NC mayor (cl. 5.1 + 4.4.1):</strong> «ISO 9001/14001/45001 cl. 5.1 requiere que la alta dirección asegure la integración de los requisitos del sistema en los procesos de negocio. Se evidenció que la matriz integrada de riesgos (MIR-01, rev. 1) es mantenida exclusivamente por personal en prácticas y no se utiliza en la operación; los supervisores de las áreas de Empaque, Frío y Mantenimiento operan con matrices propias en archivos locales no controlados, no incluidas en la lista maestra de información documentada.»',
    leccion: 'Lo que se integra es la <strong>gobernanza</strong>: política, objetivos, control documental, auditoría, revisión por la dirección, competencia. Lo que <strong>no</strong> se integra son las metodologías técnicas de evaluación, que responden a preguntas distintas y conservan su escala propia. Un SIG correcto tiene una sola revisión por la dirección y tres matrices distintas.',
    accion: 'Separar las tres matrices restaurando cada metodología. Mantener integrados política, objetivos, control documental, auditoría, competencia y revisión. Devolver la propiedad de cada matriz a su dueño de proceso. Reevaluar el nivel de integración alcanzable con el radar de madurez.'
  }
];

/* ------------------------------------------------------------------
   Ayuda memoria — reglas duras
   ------------------------------------------------------------------ */
export const REGLAS = [
  { t: 'Regla del verbo', d: '«Debe» (<em>shall</em>) genera no conformidad. «Debería» (<em>should</em>) es recomendación. «Puede» (<em>may</em>) es permiso. Antes de abrir un hallazgo, verifica el verbo.' },
  { t: 'Regla de mantener/conservar', d: '<strong>Mantener</strong> información documentada = documento vivo (procedimiento, política). <strong>Conservar</strong> = registro que evidencia lo ocurrido. El verbo te dice qué pedir.' },
  { t: 'Regla de las tres piezas', d: 'Un hallazgo válido necesita <strong>requisito + evidencia + desviación</strong>. Si te falta una, no tienes hallazgo: tienes una opinión.' },
  { t: 'Regla del dueño', d: 'Todo proceso, riesgo, documento e indicador tiene un dueño con nombre. «El área» no es un dueño.' },
  { t: 'Regla de la trazabilidad ascendente', d: 'Todo control debe poder rastrearse hasta un riesgo; todo riesgo hasta una cuestión del contexto o un requisito de parte interesada. Si la cadena se rompe, el control es huérfano.' },
  { t: 'Regla de exclusiones', d: 'Solo ISO 9001 admite requisitos no aplicables, con justificación documentada. 14001, 45001 y 37001 <strong>no admiten exclusiones</strong>.' },
  { t: 'Regla de integración', d: 'Se integra la gobernanza; no se fusionan las metodologías de evaluación de riesgo. Una revisión por la dirección, tres matrices.' },
  { t: 'Regla de la ley por encima', d: 'Cuando la ley peruana es más exigente que la norma ISO, manda la ley. ISO 45001 fija el marco; la Ley 29783 fija los mínimos exigibles.' },
  { t: 'Regla del auditor', d: 'No audites contra tu opinión de cómo debería hacerse: audita contra el criterio declarado (norma, ley, procedimiento propio de la organización).' },
  { t: 'Regla de la muestra', d: 'Si no puedes justificar por qué elegiste esos tres registros y no otros, tu muestra no defiende el hallazgo.' }
];

/* ------------------------------------------------------------------
   Fórmulas y cálculos frecuentes
   ------------------------------------------------------------------ */
export const FORMULAS = [
  { n: 'Nivel de riesgo (matriz)', f: 'NR = Severidad × Probabilidad', d: 'Escala 1-5 en ambos ejes. Rango resultante 1-25. Define las bandas de decisión antes de evaluar, nunca después.' },
  { n: 'Probabilidad (R.M. 050-2013-TR)', f: 'P = A + B + C + D', d: 'A: personas expuestas · B: procedimientos existentes · C: capacitación · D: exposición al riesgo. Se suma y luego se cruza con severidad.' },
  { n: 'Índice de frecuencia', f: 'IF = (N.º accidentes incapacitantes × 1 000 000) / HHT', d: 'HHT = horas-hombre trabajadas. Compara plantas de distinto tamaño. Es indicador reactivo (<em>lagging</em>).' },
  { n: 'Índice de severidad', f: 'IS = (Días perdidos × 1 000 000) / HHT', d: 'Mide gravedad, no cantidad. Un IF bajo con IS alto indica pocos accidentes pero graves.' },
  { n: 'Índice de accidentabilidad', f: 'IA = (IF × IS) / 1 000', d: 'Combina frecuencia y gravedad en un solo número comparable.' },
  { n: 'Conformidad en primera pasada', f: 'FPY = (Unidades conformes sin reproceso / Unidades iniciadas) × 100', d: 'Indicador de calidad más honesto que el rendimiento final, porque no esconde el reproceso.' },
  { n: 'Costo de la no calidad', f: 'CNC = Fallas internas + Fallas externas + Evaluación + Prevención', d: 'Los dos primeros son costos de fallo; los dos últimos, de conformidad. La meta es desplazar gasto de fallo a prevención.' },
  { n: 'Eficacia de la acción correctiva', f: 'Eficaz = recurrencia cero en N períodos + indicador de causa recuperado', d: 'La firma de cierre no es evidencia de eficacia. Se necesita dato y tiempo transcurrido.' },
  { n: 'Días-auditor de certificación', f: 'Base por n.º de empleados (IAF MD 5), ajustado por complejidad, sitios y riesgo', d: 'En auditoría combinada se aplica una reducción, típicamente del 20 % al 30 % frente a auditorías separadas.' },
  { n: 'Índice de madurez del SIG', f: 'IM = Σ (nivel de cada eje) / n.º de ejes', d: 'Escala 1-5. Por debajo de 3, la integración avanzada no es sostenible.' }
];

/* ------------------------------------------------------------------
   Preguntas de auditoría de alto rendimiento
   ------------------------------------------------------------------ */
export const PREGUNTAS_ORO = [
  { p: '«Muéstreme.»', porq: 'La pregunta más poderosa de la auditoría. Convierte la afirmación en evidencia sin confrontar.' },
  { p: '«¿Qué hizo la última vez que esto falló?»', porq: 'Pasa de la teoría del procedimiento a la práctica real. Revela si el sistema opera bajo presión.' },
  { p: '«¿Quién decide esto cuando usted no está?»', porq: 'Detecta sistemas que dependen de una persona en lugar de un proceso.' },
  { p: '«¿Cómo sabe que esta es la versión vigente?»', porq: 'Prueba el control documental en el punto de uso, no en el servidor.' },
  { p: '«¿Qué decisión tomó porque este indicador se movió?»', porq: 'Separa la medición decorativa de la medición útil.' },
  { p: '«¿Participó usted en esto?» (a un no directivo)', porq: 'La prueba directa de la cl. 5.4 de ISO 45001. Ningún documento la sustituye.' },
  { p: '«¿Qué cambió aquí en los últimos seis meses?»', porq: 'Abre la puerta a la gestión del cambio, el punto de fuga más productivo.' },
  { p: '«¿Y si este control falla, qué lo detecta?»', porq: 'Evalúa la profundidad de las barreras. Pregunta de corbatín aplicada en campo.' },
  { p: '«¿Por qué este proceso y no aquel?»', porq: 'Cuestiona el criterio de riesgo detrás del programa de auditoría o del alcance.' },
  { p: 'Silencio, después de la respuesta.', porq: 'Técnica de auditor experimentado: el silencio incómodo produce más evidencia que tres preguntas seguidas.' }
];

/* ------------------------------------------------------------------
   Glosario
   ------------------------------------------------------------------ */
export const GLOSARIO = [
  ['Acción correctiva', 'Acción para eliminar la causa de una no conformidad y evitar que vuelva a ocurrir.', 'comun'],
  ['Alta dirección', 'Persona o grupo que dirige y controla una organización al más alto nivel.', 'comun'],
  ['Aspecto ambiental', 'Elemento de las actividades, productos o servicios que interactúa o puede interactuar con el medio ambiente.', '14001'],
  ['Auditoría combinada', 'Auditoría de dos o más sistemas de gestión realizada conjuntamente en un mismo auditado.', 'comun'],
  ['Auditoría conjunta', 'Auditoría realizada por dos o más organizaciones auditoras a un mismo auditado.', 'comun'],
  ['Competencia', 'Capacidad de aplicar conocimientos y habilidades para lograr los resultados previstos.', 'comun'],
  ['Contexto de la organización', 'Combinación de cuestiones internas y externas que influyen en el enfoque de la organización.', 'comun'],
  ['Corrección', 'Acción para eliminar una no conformidad detectada. Actúa sobre el efecto, no sobre la causa.', 'comun'],
  ['Criterios de auditoría', 'Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia.', 'comun'],
  ['Debida diligencia', 'Proceso para evaluar en profundidad la naturaleza y el alcance del riesgo de soborno de una transacción o socio.', '37001'],
  ['Desempeño', 'Resultado medible. Puede referirse a hallazgos cuantitativos o cualitativos.', 'comun'],
  ['Eficacia', 'Grado en que se realizan las actividades planificadas y se alcanzan los resultados planificados.', 'comun'],
  ['Evidencia objetiva', 'Datos que respaldan la existencia o veracidad de algo. Debe ser verificable.', 'comun'],
  ['Hallazgo de auditoría', 'Resultado de la evaluación de la evidencia recopilada frente a los criterios de auditoría.', 'comun'],
  ['Impacto ambiental', 'Cambio en el medio ambiente, adverso o beneficioso, resultante total o parcialmente de los aspectos ambientales.', '14001'],
  ['Incidente', 'Suceso que surge del trabajo o en el curso del trabajo que podría tener o tiene como resultado lesiones o deterioro de la salud.', '45001'],
  ['Información documentada', 'Información que una organización debe controlar y mantener, y el medio que la contiene. Sustituye a «documento» y «registro».', 'comun'],
  ['IPERC', 'Identificación de Peligros, Evaluación de Riesgos y determinación de Controles. Terminología peruana consolidada.', '45001'],
  ['Lugar de trabajo', 'Lugar bajo el control de la organización donde una persona necesita estar o ir por razones de trabajo.', '45001'],
  ['Mejora continua', 'Actividad recurrente para mejorar el desempeño.', 'comun'],
  ['No conformidad', 'Incumplimiento de un requisito.', 'comun'],
  ['Obligaciones de cumplimiento', 'Requisitos legales que una organización debe cumplir y otros requisitos que decide cumplir.', '14001'],
  ['Parte interesada', 'Persona u organización que puede afectar, verse afectada o percibirse como afectada por una decisión o actividad.', 'comun'],
  ['Peligro', 'Fuente con potencial de causar lesiones y deterioro de la salud.', '45001'],
  ['Perspectiva de ciclo de vida', 'Consideración de las etapas consecutivas e interrelacionadas de un producto, desde la materia prima hasta la disposición final.', '14001'],
  ['Prevención de la contaminación', 'Uso de procesos, prácticas o materiales para evitar, reducir o controlar la generación de cualquier tipo de contaminante.', '14001'],
  ['Proceso', 'Conjunto de actividades mutuamente relacionadas que utilizan entradas para producir un resultado previsto.', 'comun'],
  ['Riesgo', 'Efecto de la incertidumbre. Una desviación de lo esperado, positiva o negativa.', 'comun'],
  ['Riesgo para la SST', 'Combinación de la probabilidad de que ocurran eventos peligrosos y la severidad de las lesiones que pueden causar.', '45001'],
  ['Soborno', 'Ofrecimiento, promesa, entrega, aceptación o solicitud de una ventaja indebida como incentivo para actuar de forma ilícita o quebrantando un deber.', '37001'],
  ['Socio de negocio', 'Parte externa con la que la organización tiene o planea establecer algún tipo de relación comercial.', '37001'],
  ['Trabajador', 'Persona que realiza trabajo bajo el control de la organización. Incluye a la alta dirección, personal directivo y no directivo.', '45001']
];
