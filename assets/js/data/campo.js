/* ============================================================
   SIG Lab — Modo campo: fichas de actuación
   ------------------------------------------------------------
   La teoría responde «qué exige la norma». Esto responde
   «qué hago el lunes cuando entro a la empresa».
   Cada ficha: situación → objetivo → qué pedir → a quién
   preguntar → qué observar → qué decidir → qué producir →
   criterio de aceptación → dónde falla.
   ============================================================ */

export const FICHAS = [
  {
    id: 'f1', n: '01', norm: 'sig',
    t: 'Primera visita a una organización',
    cuando: 'Te contrataron o te asignaron el proyecto. No conoces la empresa. Tienes un día.',
    obj: 'Salir con una foto defendible de la organización, su madurez y el tamaño real del trabajo — no con una lista de deseos.',
    pedir: [
      'Organigrama vigente y número de trabajadores por sede (propios y contratistas)',
      'Licencia de funcionamiento, permisos y autorizaciones sectoriales',
      'Certificados ISO vigentes, si los hay, con su alcance literal y fecha de vencimiento',
      'Último informe de auditoría interna y externa, con sus no conformidades',
      'Mapa de procesos o, si no existe, la lista de procesos que ellos reconocen',
      'Registro de accidentes e incidentes de los últimos 24 meses',
      'Matriz de requisitos legales, si existe',
      'Últimas dos actas de revisión por la dirección'
    ],
    preguntar: [
      { a: 'Gerente General', q: '¿Por qué quiere certificarse y qué pasa si no lo logra este año?' },
      { a: 'Gerente General', q: '¿Qué decisión de negocio cambió en el último año por información del sistema?' },
      { a: 'Responsable del SIG', q: '¿Qué parte del sistema mantiene usted solo, sin ayuda de la operación?' },
      { a: 'Jefe de operaciones', q: '¿Usted usa estos documentos o tiene los suyos aparte?' },
      { a: 'Un operario', q: '¿Qué hace usted si ve algo inseguro? ¿A quién avisa y qué pasa después?' },
      { a: 'RR. HH.', q: '¿Cómo sabe que una persona es competente para su puesto?' }
    ],
    observar: [
      'Documentos en el punto de uso: ¿están vigentes o hay fotocopias sin control?',
      'Tableros de indicadores: ¿tienen datos del mes actual o del año pasado?',
      'Señalización, EPP en uso real, orden y limpieza en el frente de trabajo',
      'Si el personal mira al jefe antes de responder — indica sistema declarativo, no vivido',
      'Archivos locales en escritorios: la señal más fiable de un sistema paralelo en la sombra'
    ],
    decidir: 'Si la organización ya tiene sistemas certificados por separado, la pregunta no es «¿implementamos?» sino «¿qué nivel de integración soporta su madurez?». Aplica el radar de madurez antes de prometer nada.',
    producir: 'Informe de visita de 3 a 5 páginas: perfil de la organización, madurez estimada por eje, brechas visibles, riesgos del proyecto y propuesta de alcance con plazo.',
    aceptacion: [
      'Cada afirmación del informe se apoya en un documento visto o una persona entrevistada, con fecha',
      'El alcance propuesto nombra sedes, procesos y normas, y excluye explícitamente lo que queda fuera',
      'Hay al menos un riesgo del proyecto identificado (p. ej. «no hay dueño de procesos designado»)',
      'La estimación de plazo distingue diseño, rodaje y certificación — no un número único'
    ],
    falla: 'Prometer una fecha de certificación en la primera visita. Sin conocer la madurez ni la disponibilidad real del equipo, cualquier fecha es una invención que después te perseguirá.',
    iso: 'Cl. 4.1 · 4.2 · 4.3 · 4.4'
  },
  {
    id: 'f2', n: '02', norm: '9001',
    t: 'Diagnóstico de brechas (GAP)',
    cuando: 'Ya conoces la empresa. Necesitas cuantificar cuánto falta y cuánto cuesta.',
    obj: 'Convertir «no cumplimos la norma» en una lista finita de brechas con esfuerzo estimado, para que la dirección pueda decidir con números.',
    pedir: [
      'Toda la información documentada existente, aunque esté desordenada',
      'Evidencia de operación de los últimos 6 meses de tres procesos representativos',
      'Los registros que la ley peruana exige por sector (SST, ambiental)',
      'Contratos con proveedores y contratistas críticos'
    ],
    preguntar: [
      { a: 'Dueño de cada proceso', q: '¿Cómo sabe usted que su proceso funcionó bien este mes?' },
      { a: 'Responsable del SIG', q: 'De todo esto que existe, ¿qué se usa realmente y qué se hizo para la auditoría?' },
      { a: 'Compras', q: '¿Con qué criterio eligió a este proveedor y dónde está registrado?' }
    ],
    observar: [
      'La distancia entre el procedimiento escrito y lo que hace la persona en el puesto',
      'Si los registros están completos en fechas o solo cerca de la última auditoría',
      'La proporción de procesos con indicador frente a procesos sin ninguno'
    ],
    decidir: 'No clasifiques solo «cumple / no cumple». Usa cuatro estados: <strong>no existe</strong>, <strong>existe informal</strong> (se hace pero no se evidencia), <strong>existe documentado sin uso</strong>, <strong>cumple</strong>. El segundo estado es el más valioso: es cumplimiento barato, solo hay que evidenciarlo.',
    producir: 'Matriz de brechas cláusula por cláusula, con estado, evidencia encontrada, acción requerida, responsable propuesto y esfuerzo estimado en días-persona.',
    aceptacion: [
      'Cubre las cuatro normas del alcance, no solo la principal',
      'Incluye los requisitos legales peruanos, no solo los de la norma ISO',
      'Cada brecha tiene una acción concreta, no «implementar la cláusula X»',
      'El total en días-persona permite construir un cronograma y un presupuesto',
      'Identifica lo que ya se cumple informalmente y solo requiere evidenciarse'
    ],
    falla: 'Entregar un GAP que solo dice «no conforme» en 60 filas. Eso no es un diagnóstico: es la norma con una columna vacía. El valor está en distinguir lo que falta de lo que existe sin evidencia.',
    iso: 'Todas las cláusulas · Marco legal aplicable'
  },
  {
    id: 'f3', n: '03', norm: 'sig',
    t: 'Levantar el contexto y las partes interesadas',
    cuando: 'Arranca el diseño del sistema. Es la primera cláusula y la que más se despacha con una plantilla.',
    obj: 'Producir un contexto del que se puedan derivar riesgos reales, no un documento de archivo.',
    pedir: [
      'Plan estratégico, presupuesto y actas de directorio del último año',
      'Análisis de mercado o de competencia, si existe',
      'Reclamos de clientes, de la comunidad y de la autoridad',
      'Cualquier trabajo previo de responsabilidad social o de grupos de interés'
    ],
    preguntar: [
      { a: 'Alta dirección', q: '¿Qué tres cosas de afuera podrían impedirle cumplir sus objetivos este año?' },
      { a: 'Alta dirección', q: '¿Y qué tres cosas de adentro?' },
      { a: 'Comercial', q: '¿Qué le exigen sus clientes que no esté en el contrato?' },
      { a: 'Legal', q: '¿Qué cambio normativo le preocupa para los próximos 24 meses?' }
    ],
    observar: [
      'Si el discurso del gerente coincide con lo que dice el plan estratégico',
      'Si alguien menciona el cambio climático sin que tú lo preguntes — desde la Enmienda 1:2024 es obligatorio evaluarlo'
    ],
    decidir: 'Cuando no puedas contactar a una parte interesada, la norma admite deducir sus necesidades poniéndote en su lugar — pero <strong>deja constancia del método usado</strong>. Y recuerda: la organización decide voluntariamente cuáles expectativas se convierten en requisitos, considerando el riesgo de atenderlas o no.',
    producir: 'FODA cruzado con la perspectiva afectada marcada por cada entrada (CA / MA / SST / AS), y registro de partes interesadas con cuatro columnas: necesidad, si es pertinente, cómo se obtuvo la información, y cómo se le da cumplimiento en el sistema.',
    aceptacion: [
      'Cada cuestión del contexto se puede rastrear hasta un riesgo, un objetivo o un control',
      'El registro de partes interesadas incluye trabajadores y sus representantes (obligatorio en ISO 45001)',
      'Está declarado el criterio por el que una parte interesada es pertinente y otra no',
      'El cambio climático fue evaluado y hay constancia de la conclusión',
      'Cambiando el nombre de la empresa, el documento deja de tener sentido — si sigue sirviendo, es genérico'
    ],
    falla: 'El FODA de cuatro listas sin cruzar. Un FODA que no genera estrategias (FO, FA, DO, DA) es un inventario, y no permite derivar ni un solo riesgo defendible.',
    iso: 'Cl. 4.1 · 4.2 · 6.1'
  },
  {
    id: 'f4', n: '04', norm: '9001',
    t: 'Levantar procesos con la organización',
    cuando: 'Tienes el contexto. Ahora hay que mapear cómo trabaja realmente la empresa.',
    obj: 'Un mapa que refleje el flujo real de trabajo, no la estructura de la norma.',
    pedir: [
      'Organigrama, descripciones de puesto y manual de funciones',
      'Procedimientos existentes, aunque estén obsoletos',
      'Un recorrido físico completo por la operación, de entrada a salida'
    ],
    preguntar: [
      { a: 'Cada dueño de proceso', q: '¿Qué recibe, de quién, y cómo sabe que llegó bien?' },
      { a: 'Cada dueño de proceso', q: '¿Qué entrega, a quién, y cómo sabe que salió bien?' },
      { a: 'Cada dueño de proceso', q: '¿Qué le hace perder más tiempo en su día?' },
      { a: 'Operarios', q: '¿Quién decide esto cuando su jefe no está?' }
    ],
    observar: [
      'Dónde se acumula trabajo — ahí hay un cuello de botella que el organigrama no muestra',
      'Los traspasos entre áreas: es donde nacen la mayoría de los problemas y de los hallazgos',
      'Reprocesos y retrabajos que nadie registra porque «siempre se ha hecho así»'
    ],
    decidir: 'Levanta los procesos en <strong>talleres de dos días con equipos multifuncionales</strong> y deja que el dueño del proceso lo cierre después. Los procesos redactados por el consultor a solas se documentan más rápido y se abandonan igual de rápido.',
    producir: 'Mapa de nivel 0 (8 a 15 procesos, en una hoja) y ficha de caracterización por proceso con las cuatro patas del diagrama de tortuga y al menos un indicador con sus seis columnas.',
    aceptacion: [
      'Todo proceso tiene dueño con nombre, no un área',
      'Toda entrada tiene origen declarado y toda salida tiene receptor',
      'Cada proceso tiene al menos un indicador con fórmula, fuente, frecuencia, meta con línea base, responsable y umbral de reacción',
      'Cada proceso tiene al menos un riesgo asociado',
      'Las interacciones entre procesos están dibujadas, no solo enumeradas',
      'La dirección validó el mapa en acta'
    ],
    falla: 'El mapa que imita la estructura de la norma: un recuadro por capítulo. Es el patrón del peor mapa posible — se reconoce porque ningún trabajador se ve reflejado en él y porque no sirve para explicar cómo se hace el producto.',
    iso: 'Cl. 4.4 · 5.1 · 8.1'
  },
  {
    id: 'f5', n: '05', norm: '45001',
    t: 'Construir las matrices de riesgo',
    cuando: 'Los procesos están mapeados. Toca el módulo donde más gente se pierde.',
    obj: 'Tres matrices coherentes entre sí y separadas en su metodología, no una hoja de cálculo gigante.',
    pedir: [
      'IPERC y matriz de aspectos existentes, aunque estén desactualizados',
      'Registro de accidentes, incidentes y enfermedades ocupacionales',
      'Hojas de seguridad de sustancias químicas y permisos ambientales',
      'Contratos con terceros expuestos a riesgo de soborno',
      'Actas del Comité de SST'
    ],
    preguntar: [
      { a: 'Trabajadores expuestos', q: '¿Qué es lo que más miedo le da de su trabajo?' },
      { a: 'Trabajadores expuestos', q: '¿Participó usted en la elaboración del IPERC de su área?' },
      { a: 'Supervisores', q: '¿Qué hacen cuando hay que apurar la producción?' },
      { a: 'Mantenimiento', q: '¿Qué falla más y qué pasa cuando falla?' }
    ],
    observar: [
      'Si los controles del IPERC son físicamente aplicables en el punto de trabajo',
      'Actividades no rutinarias en curso: mantenimiento mayor, parada de planta, obra',
      'Si el IPERC contempla peligros psicosociales y de organización del trabajo, o solo físicos'
    ],
    decidir: 'Elige y declara la metodología <strong>antes</strong> de evaluar, incluida la convención de la escala. Si operas en minería, el D.S. 024-2016-EM invierte la escala (1 = más grave): no la mezcles con la convención habitual en el mismo sistema.',
    producir: 'IPERC (línea base, específico y continuo), matriz de aspectos e impactos con las tres condiciones operativas y perspectiva de ciclo de vida, matriz de riesgo de soborno por operación y socio, y registro único de riesgos del sistema al que escalan los significativos.',
    aceptacion: [
      'Hay evidencia de participación de trabajadores en la identificación de peligros',
      'La jerarquía de controles se aplicó en orden, con registro de por qué no bastó cada nivel superior',
      'La matriz de aspectos tiene al menos una fila fuera del perímetro de la organización',
      'Cada matriz declara su metodología, su escala y sus bandas de decisión',
      'Los riesgos significativos aparecen en el registro del sistema y en la revisión por la dirección',
      'Existe un proceso de gestión del cambio que dispara la reevaluación'
    ],
    falla: 'Fusionar las tres matrices en una sola con escala común. Una lesión incapacitante, un vertimiento y un pago irregular no son comparables en una escala de 1 a 5: no existe unidad que los mida a los tres. El resultado son números que parecen gestión y priorizan mal.',
    iso: 'Cl. 6.1 · 6.1.2 (14001 y 45001) · 4.5 (37001) · 8.1.2'
  },
  {
    id: 'f6', n: '06', norm: 'sig',
    t: 'Diseñar objetivos que la dirección defienda',
    cuando: 'Contexto y riesgos listos. Hay que convertirlos en compromisos medibles.',
    obj: 'Objetivos que sobrevivan una auditoría y que la dirección use para decidir.',
    pedir: ['Objetivos vigentes, si existen', 'Presupuesto anual', 'Resultados históricos de los indicadores que ya se miden'],
    preguntar: [
      { a: 'Alta dirección', q: '¿Cuál sería una mejora que notaría en la cuenta de resultados?' },
      { a: 'Dueños de proceso', q: '¿Desde qué valor partimos hoy? Si no lo sabe, ese es el primer trabajo.' }
    ],
    observar: ['Si los objetivos actuales usan el verbo «mantener» — normalmente no implica reto', 'Si hay meta sin línea base, lo que la hace ininterpretable'],
    decidir: 'Busca objetivos <strong>bi-integrados o tri-integrados</strong>: un mismo plan de acción que mejore dos o tres perspectivas a la vez. Sustituir un solvente reduce el riesgo químico (SST), el residuo peligroso (MA) y el reproceso (CA). Un objetivo así vale por tres y es mucho más fácil de defender ante la dirección.',
    producir: 'Ficha por objetivo con los cinco elementos que exige la cl. 6.2.2: qué se hará, qué recursos, quién es responsable, cuándo termina y cómo se evalúan los resultados.',
    aceptacion: [
      'Hay al menos un objetivo por cada perspectiva del alcance',
      'Cada objetivo lleva indicador, línea base y meta con fecha',
      'El verbo implica cambio: incrementar, reducir, optimizar — no «mantener»',
      'Existe plan de acción con responsables, plazos y recursos asignados',
      'Los objetivos se comunicaron a las áreas responsables y hay evidencia de ello',
      'Al menos uno es bi- o tri-integrado'
    ],
    falla: 'Objetivos que solo repiten los indicadores que ya se medían. Si el objetivo no exige hacer algo distinto, no es un objetivo de mejora: es un reporte con otro nombre.',
    iso: 'Cl. 6.2 · 9.1 · 9.3'
  },
  {
    id: 'f7', n: '07', norm: '14001',
    t: 'Preparar y ejecutar la auditoría interna',
    cuando: 'El sistema lleva al menos tres meses operando y generando registros.',
    obj: 'Encontrar los problemas antes que el organismo certificador, y encontrarlos de verdad.',
    pedir: [
      'Programa anual de auditoría y su justificación por riesgo',
      'Informes de auditorías previas y estado de cierre de sus hallazgos',
      'Toda la información documentada del proceso a auditar',
      'Registros de los últimos tres meses del proceso'
    ],
    preguntar: [
      { a: 'Auditado', q: '«Muéstreme.» — la pregunta más productiva de toda la auditoría' },
      { a: 'Auditado', q: '¿Qué hizo la última vez que esto falló?' },
      { a: 'Auditado', q: '¿Qué cambió aquí en los últimos seis meses?' },
      { a: 'Auditado', q: '¿Qué decisión tomó porque este indicador se movió?' }
    ],
    observar: [
      'La versión del documento que tiene el operario frente a la de la lista maestra',
      'Si el control descrito es físicamente ejecutable donde se ejecuta',
      'El lenguaje corporal cuando preguntas por un registro concreto'
    ],
    decidir: 'Si el auditor es novel, apóyate más en la lista de comprobación; si tiene experiencia, úsala como red de seguridad y sigue el rastro de la evidencia. <strong>Y triangula siempre</strong>: entrevista, documento, registro y observación. Una sola fuente no sostiene un hallazgo.',
    producir: 'Programa basado en riesgo, plan de auditoría acordado, lista de verificación integrada (las cuatro normas en la misma fila por proceso) e informe con hallazgos de tres piezas.',
    aceptacion: [
      'El programa justifica por qué un proceso se audita más que otro',
      'Ningún auditor audita su propia área',
      'Cada hallazgo tiene requisito citado, evidencia con trazabilidad y declaración de desviación',
      'La clasificación mayor/menor está argumentada, no asignada por costumbre',
      'El criterio de muestreo se puede justificar ante el auditado',
      'El seguimiento verifica eficacia con dato posterior, no con firma de cierre'
    ],
    falla: 'La auditoría interna que reporta cero no conformidades. No demuestra que el sistema esté bien: demuestra que la auditoría fue complaciente, y garantiza que la externa encontrará todo lo que tú callaste.',
    iso: 'ISO 19011 cl. 5 y 6 · Cl. 9.2'
  },
  {
    id: 'f8', n: '08', norm: '45001',
    t: 'Ocurrió un accidente',
    cuando: 'Lo urgente ya pasó. Ahora hay que investigar sin convertirlo en un juicio al trabajador.',
    obj: 'Encontrar las causas del sistema, no al culpable — y producir una acción correctiva que realmente evite la recurrencia.',
    pedir: [
      'Reporte preliminar, parte médico y registro del incidente',
      'IPERC vigente de la tarea y su fecha de última revisión',
      'Permiso de trabajo del día y del turno',
      'Registros de inducción, capacitación y entrega de EPP del accidentado',
      'Registro de mantenimiento del equipo involucrado',
      'Contrato y evidencia de control si intervino un contratista'
    ],
    preguntar: [
      { a: 'Accidentado y testigos', q: '¿Cómo se hace normalmente esta tarea? (no «cómo debía hacerse»)' },
      { a: 'Compañeros', q: '¿Había pasado algo parecido antes? ¿Se reportó?' },
      { a: 'Supervisor', q: '¿Qué presión de tiempo había ese día?' },
      { a: 'Mantenimiento', q: '¿Cuándo se revisó por última vez este equipo o punto de anclaje?' }
    ],
    observar: [
      'El lugar exacto, antes de que se «ordene». Fotografía con referencia de escala',
      'Si los controles del IPERC están físicamente presentes y son utilizables',
      'La distancia real entre el punto de trabajo y el control que debía usarse'
    ],
    decidir: 'Si tu análisis termina en «el trabajador no cumplió el procedimiento», <strong>no has terminado</strong>. Pregunta por qué el procedimiento era incumplible, o por qué incumplirlo era la forma normal de trabajar. Regla de control: si la acción correctiva propuesta es «capacitar y sensibilizar», el análisis se detuvo demasiado pronto.',
    producir: 'Informe de investigación con línea de tiempo, causas inmediatas, causas básicas y fallas de control; acciones correctivas con responsable y plazo; IPERC actualizado; y los registros que exige la ley peruana.',
    aceptacion: [
      'La causa raíz no es «error humano» ni «falta de capacitación»',
      'Cada causa tiene una acción que la elimina, no que la compensa',
      'La acción correctiva sube en la jerarquía de controles respecto de lo que había',
      'El IPERC se actualizó y se comunicó a los expuestos',
      'Se cumplieron los plazos legales de notificación aplicables',
      'Se definió cómo y cuándo se verificará la eficacia, con dato'
    ],
    falla: 'Cerrar la investigación con una charla de cinco minutos y la firma del trabajador. Es el patrón que garantiza la recurrencia, y ante SUNAFIL demuestra que el sistema no aprendió.',
    iso: 'Cl. 10.2 · 6.1.2 · 8.1.2 · Ley 29783'
  }
];

/* ------------------------------------------------------------------
   Decisiones de alcance del proyecto
   ------------------------------------------------------------------ */
export const ALCANCE_PROYECTO = [
  ['A', 'Integrar y estandarizar todo, en todas las sedes, a la vez',
   'Es la única opción viable cuando un cliente o un regulador impone una fecha corta. Pero implementar 30-50 procesos de golpe produce procesos de conformidad, no de excelencia. Si eliges esta vía, <strong>designa unos pocos procesos como prioritarios</strong> y acepta que el resto solo cumplirá.'],
  ['B', 'Estandarizar una sola norma en todas las sedes y añadir el resto después',
   'Mismo esfuerzo que la opción A pero sin el beneficio de integrar. Difícil de justificar salvo que solo exista una norma en el horizonte.'],
  ['C', 'Integrar todo en una sede y luego replicar',
   'Carga la misma dificultad que A concentrada en un sitio. Funciona en organizaciones pequeñas; en las grandes, la réplica casi nunca sale tan limpia como el piloto.'],
  ['D', 'Integrar unos pocos procesos clave en todas las sedes, por fases',
   '<strong>La mejor opción cuando no hay fecha impuesta desde fuera.</strong> Cada fase apunta a un grupo reducido de procesos y los deja realmente bien. Permite aprender entre fases y produce mejora real, no solo certificado.']
];

export const REGLA_DIRECCION = {
  t: 'Lo que la dirección apunta es lo que la dirección obtiene',
  d: 'Si el objetivo declarado es «certificarnos», el resultado será un certificado y poco más. Si el objetivo declarado es «mejorar y certificarnos», se obtienen las dos cosas. No es una frase motivacional: es lo que distingue las implementaciones que siguen vivas tres años después de las que se abandonan al mes siguiente de la auditoría. Pregúntalo en la primera reunión y deja la respuesta por escrito.'
};

/* ------------------------------------------------------------------
   Fuerza de la evidencia — entrena el criterio del auditor
   ------------------------------------------------------------------ */
export const EVIDENCIA = [
  {
    t: 'Competencia del personal', cl: 'Cl. 7.2',
    debil: 'Certificado de asistencia a un curso.',
    media: 'Certificado + evaluación de conocimiento aprobada.',
    fuerte: 'Competencia definida en el perfil + formación + evaluación + <strong>observación del desempeño en el puesto</strong> con criterio declarado.'
  },
  {
    t: 'Consulta a los trabajadores', cl: 'Cl. 5.4 · ISO 45001',
    debil: 'Acta de comité con firmas.',
    media: 'Acta con temas tratados y acuerdos.',
    fuerte: 'Evidencia de que <strong>la opinión se pidió antes de decidir</strong> y de que modificó el control adoptado, más el retorno al trabajador que la propuso.'
  },
  {
    t: 'Control de proveedores externos', cl: 'Cl. 8.4',
    debil: 'Lista de proveedores aprobados.',
    media: 'Lista + criterios de selección documentados.',
    fuerte: 'Criterios aplicados con evidencia de evaluación periódica, <strong>reevaluación por desempeño real</strong> y acciones tomadas ante incumplimiento.'
  },
  {
    t: 'Cumplimiento legal', cl: 'Cl. 9.1.2',
    debil: 'Matriz de requisitos legales actualizada.',
    media: 'Matriz + fecha de última revisión.',
    fuerte: 'Matriz + <strong>evaluación del grado de cumplimiento de cada requisito</strong>, con evidencia por requisito y acciones abiertas para los incumplidos.'
  },
  {
    t: 'Eficacia de la acción correctiva', cl: 'Cl. 10.2',
    debil: 'Firma de cierre del responsable.',
    media: 'Firma + descripción de lo implementado.',
    fuerte: '<strong>Dato posterior</strong> que demuestra que el indicador de la causa se recuperó y que no hubo recurrencia en un período significativo.'
  },
  {
    t: 'Toma de conciencia', cl: 'Cl. 7.3',
    debil: 'Lista de difusión de la política firmada.',
    media: 'Charla registrada con evaluación.',
    fuerte: 'Un trabajador explica <strong>con sus palabras</strong> cómo su trabajo contribuye al sistema y qué pasa si no cumple. Se verifica preguntando, no revisando papeles.'
  }
];

/* ------------------------------------------------------------------
   Triangulación
   ------------------------------------------------------------------ */
export const TRIANGULACION = {
  caso: 'La inducción de contratistas',
  fuentes: [
    ['Entrevista', 'El gerente afirma: «todos reciben inducción antes de entrar».', 'info'],
    ['Documento', 'El procedimiento PR-SST-04 efectivamente establece la inducción obligatoria.', 'info'],
    ['Registro', 'De 62 contratistas activos, 15 no tienen registro de inducción.', 'warn'],
    ['Observación', 'Dos trabajadores de contrata desconocen la ruta de evacuación de su zona.', 'risk']
  ],
  conclusion: 'El procedimiento existe y es correcto. <strong>El control no está implementado eficazmente.</strong> Fíjate en la diferencia: sin las fuentes 3 y 4 habrías concluido que todo estaba bien; sin la fuente 2 habrías creído que faltaba el procedimiento. Ninguna fuente por separado da la respuesta correcta.'
};
