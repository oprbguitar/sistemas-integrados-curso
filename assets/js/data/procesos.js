/* ============================================================
   SIG Lab — Gestión por procesos
   Contenido reclasificado en tres niveles acumulativos:
   1 básico (fundamentos) · 2 intermedio (caracterizar y medir)
   3 avanzado (arquitectura, madurez y desempeño)
   ============================================================ */

/* ------------------------------------------------------------------
   Los tres niveles del itinerario — alimentan el portal
   ------------------------------------------------------------------ */
export const NIVELES = [
  {
    id: 'procesos-basico', n: 'Nivel 1', et: 'Básico', norm: '9001',
    t: 'Fundamentos',
    lede: 'Qué es un proceso, en qué se diferencia de un procedimiento y cómo se lee un mapa.',
    para: 'Nunca has caracterizado un proceso, o lo has hecho copiando una plantilla.',
    contenido: ['Definición y anatomía de un proceso', 'Proceso, procedimiento, actividad y función', 'SIPOC y la cadena cliente-proveedor interno', 'Tipos de proceso y mapa de nivel 0', 'Hasta dónde desplegar'],
    salida: 'Puedes leer un mapa de procesos y detectar si describe la organización o la norma.',
    tiempo: '2 h'
  },
  {
    id: 'procesos-intermedio', n: 'Nivel 2', et: 'Intermedio', norm: '14001',
    t: 'Caracterizar y medir',
    lede: 'La ficha de caracterización, el flujo con carriles, las interfaces y el indicador que sirve para decidir.',
    para: 'Ya tienes mapa y fichas, pero no sabes si resistirían una auditoría.',
    contenido: ['Ficha de caracterización, elemento por elemento', 'Diagrama de tortuga aplicado', 'Notación de flujo y carriles', 'Interfaces y traspasos entre áreas', 'Indicadores: seis columnas y bucle de control', 'Riesgo y cambio a nivel de proceso'],
    salida: 'Puedes caracterizar un proceso completo y defender cada indicador ante un auditor.',
    tiempo: '4 h'
  },
  {
    id: 'procesos-avanzado', n: 'Nivel 3', et: 'Avanzado', norm: '37001',
    t: 'Arquitectura y desempeño',
    lede: 'Gobierno de procesos, madurez, variación, eficiencia de ciclo y rediseño con evidencia.',
    para: 'Tienes el sistema certificado y necesitas que además produzca resultados.',
    contenido: ['Arquitectura y gobierno: dueño frente a jefe funcional', 'Modelo de madurez de cinco niveles', 'Variación común y especial', 'Capacidad de proceso y umbrales', 'Eficiencia de ciclo y tiempo de espera', 'Rediseño, automatización y minería de procesos'],
    salida: 'Puedes decidir qué proceso rediseñar, con qué evidencia y en qué orden.',
    tiempo: '5 h'
  }
];

/* ------------------------------------------------------------------
   Fichas conceptuales animadas
   cara  = concepto y por qué importa (teoría)
   dorso = cómo se ve en la realidad (ejemplo funcional)
   ------------------------------------------------------------------ */
export const FICHAS_PROC = [

  /* ---------------- Nivel 1 · Básico ---------------- */
  {
    id: 'pf01', n: 'P-01', niv: 1, norm: '9001', cl: 'ISO 9000 · 3.4.1',
    t: 'Proceso',
    def: 'Conjunto de actividades mutuamente relacionadas que utilizan entradas para producir un resultado previsto.',
    clave: 'Las tres palabras que deciden todo: <strong>relacionadas</strong> (no una lista suelta), <strong>entradas</strong> (algo llega de fuera) y <strong>resultado previsto</strong> (existe un criterio de éxito definido antes de empezar).',
    ej: 'Recepción de materia prima: entra un lote con guía de remisión y certificado de calidad; se verifica contra especificación; sale un lote liberado o rechazado con su registro.',
    ojo: 'Si no puedes nombrar el resultado previsto en una frase que empiece por «asegurar que…», no tienes un proceso: tienes un conjunto de tareas.'
  },
  {
    id: 'pf02', n: 'P-02', niv: 1, norm: '9001', cl: 'Cl. 0.3 · 4.4',
    t: 'Enfoque a procesos',
    def: 'Gestionar la organización como una red de procesos que interactúan, en lugar de como una suma de áreas que reportan hacia arriba.',
    clave: 'El organigrama responde <em>quién manda</em>; el mapa de procesos responde <em>cómo fluye el trabajo</em>. Los problemas caros casi nunca ocurren dentro de un área: ocurren <strong>entre áreas</strong>, que es justo lo que el organigrama no dibuja.',
    ej: 'Un reclamo por entrega tardía no se resuelve en Despacho: nació en Ventas, que prometió una fecha que Planificación nunca confirmó. Solo el mapa muestra esa cadena.',
    ojo: 'Un mapa de procesos que reproduce el organigrama con otros colores no aporta nada. Es la señal más rápida de que se copió una plantilla.'
  },
  {
    id: 'pf03', n: 'P-03', niv: 1, norm: 'sig', cl: 'Vocabulario',
    t: 'Proceso ≠ procedimiento',
    def: 'El proceso es <strong>qué ocurre</strong> y qué resultado produce. El procedimiento es <strong>cómo se ha decidido hacerlo</strong>, por escrito.',
    clave: 'Un proceso existe aunque nadie lo haya escrito — mal, pero existe. Un procedimiento sin proceso detrás es papel. Por eso desde 2015 la norma exige procesos determinados, y solo la información documentada <em>necesaria</em>.',
    ej: '«Gestión de compras» es el proceso. «PR-LOG-02 Procedimiento de selección y evaluación de proveedores» es uno de los documentos que lo gobiernan; puede haber cuatro más, o ninguno.',
    ojo: 'Confundirlos produce el error más caro del sistema: escribir un procedimiento por cada proceso «porque la norma lo pide». La norma no lo pide desde 2015.'
  },
  {
    id: 'pf04', n: 'P-04', niv: 1, norm: '9001', cl: 'Cl. 4.4.1',
    t: 'Entradas, salidas y criterio',
    def: 'Toda entrada llega de un proveedor con un criterio de aceptación; toda salida va a un cliente con un criterio de conformidad.',
    clave: 'El criterio es lo único auditable. Sin él, «recibimos el requerimiento» es una descripción; con él, «recibimos el requerimiento con especificación técnica y firma del jefe de área» es un control verificable.',
    ej: 'Entrada del proceso de compras: requerimiento con especificación, cantidad, fecha necesaria y aprobación presupuestal. Sin los cuatro campos, se devuelve.',
    ojo: 'Omitir el criterio de aceptación es el hallazgo más silencioso: la ficha parece completa y en campo cada quien acepta lo que le parece.'
  },
  {
    id: 'pf05', n: 'P-05', niv: 1, norm: '9001', cl: 'Cl. 4.4.1',
    t: 'Cliente interno',
    def: 'Cada proceso es cliente del que lo precede y proveedor del que le sigue. La cadena termina en el cliente externo, pero empieza mucho antes.',
    clave: 'Ese encadenamiento convierte la calidad en algo distribuido: un proceso puede cumplir su indicador y aun así destruir el desempeño del siguiente si le entrega tarde o incompleto.',
    ej: 'Compras cierra el mes con 98 % de órdenes emitidas a tiempo, pero entrega el 40 % sin certificado de calidad. Recepción no puede liberar y la planta se detiene. Ambos indicadores están «verdes».',
    ojo: 'Cuando cada área mide solo lo suyo, la organización optimiza partes y degrada el conjunto. Mide siempre al menos un indicador de interfaz.'
  },
  {
    id: 'pf06', n: 'P-06', niv: 1, norm: '14001', cl: 'Cl. 4.4 · 8.1',
    t: 'Tipos de proceso',
    def: 'Estratégicos (dirigen y asignan), operativos o de cadena de valor (transforman el requisito del cliente) y de soporte (habilitan a los demás).',
    clave: 'La clasificación no es estética: define <strong>quién debe ser el dueño</strong> y <strong>qué tipo de indicador aplica</strong>. Un proceso estratégico se mide por decisiones tomadas; uno de soporte, por nivel de servicio a su cliente interno.',
    ej: 'En una constructora: «Gestión del SIG» es estratégico, «Ejecución de obra» es cadena de valor, «Mantenimiento de equipos» es soporte crítico —y el que más veces provoca la parada.',
    ojo: 'Clasificar un proceso como soporte no lo hace menos importante. Los procesos de soporte son los más auditados, porque cuelgan directamente de las cláusulas 7.1, 7.2, 7.5 y 8.4.'
  },
  {
    id: 'pf07', n: 'P-07', niv: 1, norm: 'sig', cl: 'Cl. 4.3 · 4.4',
    t: 'Alcance y frontera del proceso',
    def: 'Dónde empieza y dónde termina un proceso es una decisión, no un hecho. Y esa decisión determina quién responde por el resultado.',
    clave: 'Fronteras mal trazadas producen zonas de nadie: el tramo entre dos procesos donde el trabajo se detiene y ningún dueño se siente responsable.',
    ej: 'Si «Compras» termina al emitir la orden y «Almacén» empieza al recibir el bien, nadie es dueño del seguimiento al proveedor. Ahí se pierden las entregas tardías.',
    ojo: 'Prueba de frontera: pregunta quién responde si el trabajo se atasca entre dos procesos. Si hay dos respuestas o ninguna, la frontera está mal trazada.'
  },

  /* ---------------- Nivel 2 · Intermedio ---------------- */
  {
    id: 'pf08', n: 'P-08', niv: 2, norm: '9001', cl: 'Cl. 4.4.1 a-h',
    t: 'Ficha de caracterización',
    def: 'El documento que responde, para un proceso concreto, las ocho cosas que la cl. 4.4.1 exige determinar.',
    clave: 'No es un formato: es la prueba de que el proceso fue <em>pensado</em>. Si la ficha se llenó copiando la del proceso vecino, el auditor lo detecta en dos preguntas.',
    ej: 'Ficha del proceso de compras: objetivo, dueño (Jefe de Logística), entradas con criterio, salidas con criterio, recursos, competencia requerida, métodos, tres indicadores y cuatro riesgos con su control.',
    ojo: 'La ficha describe el proceso como se ejecuta hoy, no como nos gustaría. Una ficha aspiracional es una no conformidad esperando la primera entrevista en campo.'
  },
  {
    id: 'pf09', n: 'P-09', niv: 2, norm: '9001', cl: 'Cl. 5.3 · 4.4.1 e',
    t: 'Dueño de proceso',
    def: 'La persona con autoridad sobre los recursos del proceso y responsabilidad por su resultado de extremo a extremo.',
    clave: 'Dueño no es quien ejecuta ni quien documenta: es quien puede <strong>cambiar el proceso</strong> y responde si el indicador no se mueve. Sin esa autoridad, el rol es decorativo.',
    ej: 'El dueño del proceso de compras es el Jefe de Logística, no el coordinador del SIG. El coordinador facilita el método; el jefe responde por el desempeño.',
    ojo: 'Asignar al coordinador del SIG como dueño de todos los procesos es el antipatrón más extendido en Perú. Convierte el sistema en propiedad de una sola persona — y en huérfano el día que renuncia.'
  },
  {
    id: 'pf10', n: 'P-10', niv: 2, norm: '9001', cl: 'Cl. 9.1.1',
    t: 'Indicador de proceso',
    def: 'Una medición con fórmula, fuente, frecuencia, meta con línea base, responsable y umbral de reacción. Las seis columnas son obligatorias.',
    clave: 'Un indicador sin <strong>umbral de reacción</strong> no es gestionable: informa, pero no obliga a nadie a hacer nada. El umbral es lo que convierte un número en una decisión.',
    ej: '«Órdenes recibidas conformes / órdenes recibidas × 100», fuente ERP reporte RC-04, mensual, de 91 % (2025) a 96 % (2026), Jefe de Logística, y por debajo de 88 % dos meses seguidos se abre acción correctiva.',
    ojo: 'Si el indicador lleva tres años en 98 %, no mide nada relevante. Pide la última decisión que se tomó porque ese número se movió: si no existe, la cl. 9.1.1 está incumplida aunque la tabla sea impecable.'
  },
  {
    id: 'pf11', n: 'P-11', niv: 2, norm: '14001', cl: 'Cl. 9.1.1',
    t: 'Eficacia, eficiencia y efectividad',
    def: 'Eficacia: se logró el resultado. Eficiencia: con qué consumo de recursos. Efectividad: el resultado sirvió para lo que se buscaba.',
    clave: 'La norma exige eficacia. La organización necesita las tres. Medir solo eficacia produce sistemas que cumplen y no rinden.',
    ej: 'Capacitación: eficacia = 100 % del personal capacitado; eficiencia = costo por persona; efectividad = caída de errores en el puesto tres meses después. Solo la tercera justifica el gasto.',
    ojo: 'La lista de asistencia mide asistencia, no competencia (cl. 7.2). Es la no conformidad más repetida de todo el capítulo 7.'
  },
  {
    id: 'pf12', n: 'P-12', niv: 2, norm: '45001', cl: 'Cl. 4.4.1 f · 6.1',
    t: 'Riesgo del proceso',
    def: 'Lo que puede impedir que el proceso entregue su resultado previsto — no lo que puede dañar a una persona: eso es el IPERC y responde otra pregunta.',
    clave: 'Cada proceso aporta sus riesgos significativos al registro de riesgos del sistema. Ahí convergen las cuatro evaluaciones sin fusionar sus metodologías.',
    ej: 'Riesgo del proceso de compras: proveedor único para un insumo crítico. Control: homologación de un segundo proveedor y stock de seguridad de 30 días. Nada de esto aparece en un IPERC.',
    ojo: 'Copiar el IPERC operativo en la casilla de riesgos de la ficha es el atajo más común y el más fácil de detectar: la matriz habla de lesiones donde debía hablar de incumplimiento de resultado.'
  },
  {
    id: 'pf13', n: 'P-13', niv: 2, norm: '9001', cl: 'Cl. 6.3 · 8.1',
    t: 'Cambio en el proceso',
    def: 'Toda modificación de método, recurso, responsable o tecnología debe planificarse: propósito, consecuencias, recursos, responsabilidades y disponibilidad.',
    clave: 'La cl. 6.3 pide planificar el cambio; la 8.1 pide controlar los cambios planificados y revisar las consecuencias de los no previstos. Son dos requisitos distintos y ambos se auditan.',
    ej: 'Cambiar el ERP de compras exige: reasignar el dueño del dato, recalibrar la fórmula del indicador, migrar el histórico para no perder la línea base y volver a evaluar los riesgos del proceso.',
    ojo: 'El cambio que rompe indicadores no es el tecnológico: es el de fórmula. Cambiar el denominador a mitad de año y no declararlo destruye la comparabilidad y la línea base.'
  },
  {
    id: 'pf14', n: 'P-14', niv: 2, norm: '37001', cl: 'Cl. 4.4 · 8.1',
    t: 'Interfaz y traspaso',
    def: 'El punto donde el trabajo cambia de responsable. Necesita: qué se entrega, a quién, con qué criterio y en qué plazo.',
    clave: 'Los traspasos concentran la mayor parte de los retrasos y los reprocesos, y son invisibles en un diagrama de bloques: solo aparecen cuando se dibuja con carriles.',
    ej: 'En el proceso de compras hay cuatro traspasos entre cuatro áreas. Tres de ellos no tienen plazo definido — y ahí están los 14 de los 21 días de plazo total.',
    ojo: 'Cuando un traspaso funciona «porque nos coordinamos por WhatsApp», el proceso depende de personas, no de diseño. Falla el día que una de ellas rota.'
  },

  /* ---------------- Nivel 3 · Avanzado ---------------- */
  {
    id: 'pf15', n: 'P-15', niv: 3, norm: '37001', cl: 'Cl. 5.1 · 5.3',
    t: 'Gobierno de procesos',
    def: 'La estructura que resuelve el conflicto entre la autoridad vertical del organigrama y la responsabilidad horizontal del dueño de proceso.',
    clave: 'Sin una regla de arbitraje declarada, el dueño de proceso pierde siempre frente al jefe funcional, porque este controla el presupuesto y la evaluación de desempeño de la gente.',
    ej: 'Regla operativa: el dueño de proceso decide el método y el criterio; el jefe funcional decide la asignación de personas. Los desacuerdos escalan al comité del sistema con dato, no con opinión.',
    ojo: 'Si el dueño de proceso no participa en la evaluación de desempeño de quienes ejecutan su proceso, su autoridad es nominal y el rediseño nunca se sostiene.'
  },
  {
    id: 'pf16', n: 'P-16', niv: 3, norm: 'sig', cl: 'Cl. 10.3',
    t: 'Madurez del proceso',
    def: 'Cinco niveles: inicial, repetible, definido, gestionado, optimizado. La certificación acredita el nivel 3.',
    clave: 'El salto caro no es del 2 al 3 —eso lo resuelve un consultor con fichas y procedimientos—, sino del 3 al 4: exige que la organización decida contra el dato aunque contradiga a la jerarquía.',
    ej: 'Nivel 3: existe la ficha, el indicador se reporta. Nivel 4: cuando el indicador cae bajo el umbral se detiene la actividad y se abre la acción sin que nadie lo autorice, porque así está definido.',
    ojo: 'Un sistema certificado y estancado en nivel 3 durante cinco años es precisamente lo que la cl. 10.3 llama incumplimiento de mejora continua — aunque nunca le hayan abierto una no conformidad.'
  },
  {
    id: 'pf17', n: 'P-17', niv: 3, norm: '9001', cl: 'Cl. 9.1.3',
    t: 'Variación común y especial',
    def: 'Variación común: la que produce el proceso tal como está diseñado. Especial: la causada por algo ajeno al diseño.',
    clave: 'Reaccionar a la variación común es <em>manipular</em> el proceso y siempre lo empeora. Ignorar la variación especial es dejar suelta una causa asignable. Distinguirlas es la decisión técnica más importante del nivel 4.',
    ej: 'Un indicador que oscila entre 92 % y 96 % sin patrón está mostrando variación común: abrir una acción correctiva por cada mes bajo la media genera ruido y desgasta al equipo.',
    ojo: 'La regla práctica: si el proceso lleva meses oscilando dentro del mismo rango, el problema no es un mes malo — es el diseño del proceso. Rediseñar, no corregir.'
  },
  {
    id: 'pf18', n: 'P-18', niv: 3, norm: '9001', cl: 'Cl. 8.5.1 · 9.1.3',
    t: 'Capacidad del proceso',
    def: 'Comparación entre lo que el proceso produce de forma natural y lo que la especificación exige. Se expresa como Cp y Cpk.',
    clave: 'Cp mide si el proceso <em>cabe</em> en la especificación; Cpk añade si además está <em>centrado</em>. Un Cp alto con Cpk bajo describe un proceso preciso pero desviado: se corrige moviendo el centro, no reduciendo la variación.',
    ej: 'Envasado con especificación 500 ± 10 ml y desviación estándar de 2,5 ml: Cp = 20/(6×2,5) = 1,33. Si la media real es 504 ml, Cpk = 6/(3×2,5) = 0,80 — capaz en teoría, fuera de control en la práctica.',
    ojo: 'Exigir Cpk ≥ 1,33 a un proceso administrativo sin datos suficientes es teatro estadístico. La capacidad exige serie temporal estable: sin estabilidad, el índice no significa nada.'
  },
  {
    id: 'pf19', n: 'P-19', niv: 3, norm: '14001', cl: 'Cl. 8.1 · 10.3',
    t: 'Eficiencia de ciclo (PCE)',
    def: 'Proporción del plazo total que realmente se dedica a transformar. PCE = tiempo de valor añadido / plazo total.',
    clave: 'En procesos administrativos sin gestionar, el PCE típico está por debajo del 10 %: más del 90 % del plazo es espera. La mejora vive ahí, no en «trabajar más rápido».',
    ej: 'Compra de insumo crítico: 5 días de trabajo real dentro de 21 días de plazo → PCE = 24 %. Reducir la espera de aprobación de 6 a 2 días sube el PCE a 29 % sin contratar a nadie.',
    ojo: 'Antes de automatizar, mide el PCE. Automatizar una espera no la elimina: la digitaliza, y encima la vuelve más difícil de ver.'
  },
  {
    id: 'pf20', n: 'P-20', niv: 3, norm: 'esg', cl: 'Cl. 9.1.1 · 10.3',
    t: 'Rediseño frente a mejora',
    def: 'La mejora ajusta el proceso existente. El rediseño cambia su lógica: qué pasos existen, quién decide y en qué orden.',
    clave: 'Criterio de decisión: si el objetivo exige una ganancia superior al 30 %, la mejora incremental no llega. Por debajo de eso, rediseñar destruye más valor del que crea.',
    ej: 'Meta de reducir el plazo de compra de 21 a 18 días: mejora. Meta de bajarlo a 7 días: rediseño — hay que eliminar la doble aprobación y delegar por monto, no acelerar los correos.',
    ojo: 'El rediseño que no toca las reglas de autorización no es rediseño: es un cambio de formato. Las esperas viven en las autorizaciones, casi nunca en la ejecución.'
  },
  {
    id: 'pf21', n: 'P-21', niv: 3, norm: 'sig', cl: 'Cl. 4.4 · 9.1',
    t: 'Un mapa, cuatro lentes',
    def: 'El sistema integrado tiene un solo mapa de procesos; cada norma lo mira con su propia lente y le cuelga sus requisitos propios.',
    clave: 'Lo que se integra es la <strong>gobernanza</strong> del proceso: dueño, ficha, indicador, ciclo de revisión. Lo que no se integra son las metodologías técnicas de evaluación de riesgo, que responden preguntas distintas.',
    ej: 'El proceso «Mantenimiento» aparece una sola vez en el mapa, con un dueño y una ficha. Sobre él cuelgan: control operacional (9001), aspectos ambientales de residuos peligrosos (14001), IPERC de trabajos en altura (45001) y control de proveedores del servicio (37001).',
    ojo: 'Cuatro mapas de procesos —uno por norma— es el síntoma inequívoco de que no hubo integración, sino coordinación de calendarios.'
  }
];

/* ------------------------------------------------------------------
   Vocabulario que se confunde en campo (nivel 1)
   ------------------------------------------------------------------ */
export const VOCABULARIO = [
  ['Proceso', 'Conjunto de actividades relacionadas que transforman entradas en un resultado previsto.', 'Tiene dueño, indicador y riesgo.', 'Gestión de compras'],
  ['Procedimiento', 'Forma especificada de llevar a cabo una actividad o proceso.', 'Es un documento; puede no existir.', 'PR-LOG-02 Evaluación de proveedores'],
  ['Actividad', 'Un paso identificable dentro de un proceso.', 'No se mide por sí sola.', 'Solicitar cotización'],
  ['Tarea', 'La unidad mínima ejecutable por una persona.', 'Vive en instructivos, no en el mapa.', 'Registrar la cotización en el ERP'],
  ['Función o área', 'Unidad del organigrama.', 'Responde por recursos, no por flujo.', 'Departamento de Logística'],
  ['Proyecto', 'Esfuerzo temporal con inicio y fin definidos.', 'No es un proceso: no se repite.', 'Implementación del nuevo ERP']
];

/* ------------------------------------------------------------------
   Los ocho elementos de la caracterización (nivel 2)
   ------------------------------------------------------------------ */
export const CARACTERIZACION = [
  ['Objetivo del proceso', 'Para qué existe, en una frase, en términos de resultado.', 'Describir la actividad («recibir materiales») en lugar del resultado («asegurar que el material recibido cumple especificación»).'],
  ['Dueño', 'Cargo con autoridad sobre los recursos del proceso.', 'Asignar al coordinador del SIG como dueño de todos los procesos.'],
  ['Entradas y proveedores', 'Qué se recibe, de quién, con qué criterio de aceptación.', 'Omitir el criterio de aceptación, que es lo único auditable.'],
  ['Salidas y clientes', 'Qué se entrega, a quién, con qué criterio de conformidad.', 'Confundir cliente final con cliente del proceso (el siguiente proceso).'],
  ['Recursos', 'Infraestructura, equipos, software, ambiente de trabajo.', 'No incluir el ambiente de trabajo, requisito explícito de la cl. 7.1.4.'],
  ['Competencia', 'Perfil requerido y cómo se verifica.', 'Listar el cargo sin definir la competencia ni cómo se evalúa su eficacia.'],
  ['Métodos y criterios', 'Procedimientos, instructivos, criterios de decisión.', 'Referenciar documentos que no existen o están obsoletos.'],
  ['Indicadores', 'Fórmula, fuente, frecuencia, meta, responsable, umbral de reacción.', 'Definir la meta sin línea base, lo que la hace ininterpretable.'],
  ['Riesgos y controles', 'Qué puede impedir el resultado y qué lo previene.', 'Copiar el IPERC operativo, que responde otra pregunta.']
];

/* ------------------------------------------------------------------
   Las seis columnas del indicador (nivel 2)
   ------------------------------------------------------------------ */
export const INDICADOR_COLS = [
  ['Fórmula', '¿Cómo se calcula exactamente?', '(Órdenes recibidas conformes / Órdenes recibidas) × 100'],
  ['Fuente del dato', '¿De dónde sale el número y quién lo puede verificar?', 'Módulo de recepción del ERP, reporte RC-04'],
  ['Frecuencia', '¿Cada cuánto se mide y cada cuánto se analiza?', 'Medición mensual, análisis trimestral'],
  ['Meta y línea base', '¿Desde cuánto, hasta cuánto y para cuándo?', 'De 91 % (2025) a 96 % al cierre de 2026'],
  ['Responsable', '¿Quién responde por el resultado, no quién llena la tabla?', 'Jefe de Logística'],
  ['Umbral de reacción', '¿Por debajo de qué valor se abre una acción, y cuál?', '&lt; 88 % dos meses seguidos → acción correctiva formal']
];

export const TIPOS_INDICADOR = [
  { t: 'De resultado (lag)', d: 'Mide lo que ya ocurrió. Confiable pero tardío: cuando se mueve, el daño ya está hecho.', ej: '% de órdenes conformes del mes cerrado', norm: '9001' },
  { t: 'De proceso (lead)', d: 'Mide una condición que anticipa el resultado. Permite corregir a tiempo.', ej: '% de requerimientos que llegan completos a la primera', norm: '14001' },
  { t: 'De cumplimiento', d: 'Verifica que una obligación legal o normativa se ejecutó.', ej: '% de evaluaciones de cumplimiento legal realizadas en plazo (cl. 9.1.2)', norm: '45001' },
  { t: 'De interfaz', d: 'Mide la calidad del traspaso entre dos procesos, no el desempeño de uno solo.', ej: 'Días entre la aprobación de la orden y su emisión efectiva', norm: '37001' }
];

/* ------------------------------------------------------------------
   Ejemplo funcional completo — proceso de compras (nivel 2)
   ------------------------------------------------------------------ */
export const EJEMPLO_COMPRAS = {
  t: 'Compra de insumo crítico',
  cod: 'P-04 · Cadena de soporte',
  objetivo: 'Asegurar que los insumos críticos estén disponibles en planta, conformes a especificación y en la fecha comprometida, al menor costo total de propiedad.',
  dueno: 'Jefe de Logística — responde por el plazo y por la conformidad, no por el precio unitario.',
  filas: [
    ['Entradas', 'Requerimiento con especificación técnica, cantidad, fecha necesaria y aprobación presupuestal.', 'Área usuaria', 'Los cuatro campos completos; si falta uno, se devuelve en 24 h.'],
    ['Salidas', 'Insumo recibido, verificado y liberado, con orden de compra cerrada.', 'Producción', 'Certificado de calidad del lote + acta de verificación firmada.'],
    ['Recursos', 'ERP módulo de compras, laboratorio de verificación, almacén con condiciones controladas.', '—', 'Equipo de medición con calibración vigente (cl. 7.1.5).'],
    ['Competencia', 'Comprador: negociación y lectura de especificación técnica. Verificador: método de ensayo aplicable.', '—', 'Evaluación práctica anual, no lista de asistencia.'],
    ['Métodos', 'PR-LOG-02 selección y evaluación de proveedores · IT-CAL-07 verificación en recepción.', '—', 'Vigentes y accesibles en el punto de uso.'],
    ['Riesgos', 'Proveedor único · especificación ambigua · aprobación fuera de plazo · lote sin certificado.', '—', 'Cada uno con control asignado y responsable.']
  ],
  indicadores: [
    { n: 'Conformidad en recepción', f: '(Órdenes conformes / Órdenes recibidas) × 100', base: '91 % (2025)', meta: '96 % (2026)', umbral: '< 88 % dos meses → acción correctiva', tipo: 'Resultado' },
    { n: 'Plazo de atención', f: 'Promedio de días entre requerimiento aprobado y recepción conforme', base: '21 días', meta: '14 días', umbral: '> 25 días en un mes → revisión del flujo de aprobación', tipo: 'Resultado' },
    { n: 'Requerimientos completos a la primera', f: '(Requerimientos sin devolución / Requerimientos recibidos) × 100', base: '62 %', meta: '85 %', umbral: '< 60 % → capacitación al área usuaria', tipo: 'Proceso (lead)' }
  ],
  lectura: 'Los tres indicadores cuentan una sola historia: el 38 % de requerimientos incompletos explica buena parte de los 21 días de plazo. Atacar el indicador lead mejora los dos de resultado sin tocar el proceso de compra en sí. Ese razonamiento —y no la tabla— es lo que un auditor competente busca en la revisión por la dirección.'
};

/* ------------------------------------------------------------------
   Gobierno de procesos (nivel 3)
   ------------------------------------------------------------------ */
export const GOBIERNO = [
  ['Decide el método y el criterio del proceso', 'Dueño de proceso', 'Jefe funcional puede opinar; no decide.'],
  ['Asigna a las personas y aprueba sus horas', 'Jefe funcional', 'El dueño no dispone de la gente sin acuerdo.'],
  ['Aprueba el cambio de la fórmula de un indicador', 'Dueño de proceso + comité del sistema', 'Nunca de forma unilateral a mitad de período.'],
  ['Responde si el indicador no alcanza la meta', 'Dueño de proceso', 'No el coordinador del SIG, no el área de calidad.'],
  ['Decide detener la actividad ante riesgo intolerable', 'Cualquier trabajador, según política', 'La autoridad de parada debe estar declarada por escrito.'],
  ['Arbitra el conflicto entre dueño y jefe funcional', 'Comité del sistema, con dato', 'Si arbitra la jerarquía sin dato, el gobierno de procesos no existe.']
];

/* ------------------------------------------------------------------
   Antipatrones por nivel
   ------------------------------------------------------------------ */
export const ANTIPATRONES = [
  { niv: 1, t: 'El mapa espejo del organigrama', d: 'El mapa reproduce las áreas con otros colores. No revela ningún flujo y, por tanto, no sirve para gestionar nada.', fix: 'Redibuja siguiendo un pedido real desde que entra hasta que se cobra. Si cruza cuatro áreas, ese es tu proceso.' },
  { niv: 1, t: 'El proceso sin resultado previsto', d: 'La ficha describe actividades («se recibe», «se registra») y nunca declara qué debe lograrse.', fix: 'Reescribe el objetivo empezando por «asegurar que…» y termina con un criterio verificable.' },
  { niv: 2, t: 'La ficha clonada', d: 'Todas las fichas comparten los mismos riesgos genéricos y los mismos indicadores de porcentaje de cumplimiento.', fix: 'Entrevista al dueño 40 minutos y reescribe con sus palabras. Una ficha honesta se nota en la primera línea.' },
  { niv: 2, t: 'El indicador plano', d: 'Tres años en 98 %. Nunca ha generado una sola decisión.', fix: 'Cámbialo o elimínalo. Un indicador que no discrimina consume esfuerzo de recolección y no aporta control.' },
  { niv: 2, t: 'La medición sin umbral', d: 'Hay meta anual, pero nadie sabe a partir de qué valor hay que reaccionar ni quién debe hacerlo.', fix: 'Define umbral, plazo de reacción y responsable. Sin eso, la cl. 9.1.1 está incumplida en la práctica.' },
  { niv: 3, t: 'El dueño sin autoridad', d: 'El dueño de proceso no controla presupuesto, no participa en la evaluación de desempeño y no puede cambiar el método.', fix: 'Declara por escrito la regla de arbitraje y dale voz formal en la evaluación de quienes ejecutan su proceso.' },
  { niv: 3, t: 'La automatización de la espera', d: 'Se digitaliza un flujo con PCE del 8 % y el plazo total apenas mejora, porque las esperas de aprobación siguen intactas.', fix: 'Mide el PCE antes. Elimina o delega autorizaciones; solo después automatiza lo que quede.' },
  { niv: 3, t: 'La reacción a la variación común', d: 'Se abre una acción correctiva cada mes que el indicador baja de la media, sin evidencia de causa asignable.', fix: 'Establece el rango natural del proceso con serie histórica. Actúa por patrón, no por punto.' }
];

/* ------------------------------------------------------------------
   Preguntas de auditoría graduadas
   ------------------------------------------------------------------ */
export const PREGUNTAS_PROC = [
  { niv: 1, q: '¿Cuál es el resultado previsto de este proceso y quién lo definió?', porq: 'Separa en un minuto el proceso pensado del proceso copiado.' },
  { niv: 1, q: '¿Quién es su cliente y cómo sabe usted que quedó conforme?', porq: 'Verifica que existe criterio de conformidad y no solo entrega.' },
  { niv: 1, q: 'Muéstreme dónde está este proceso en el mapa y con cuáles se conecta.', porq: 'Comprueba si el mapa se usa o solo existe enmarcado en el pasillo.' },
  { niv: 2, q: '¿De dónde sale este número y quién más puede reconstruirlo?', porq: 'Detecta el indicador que vive en la hoja de cálculo personal de una sola persona.' },
  { niv: 2, q: '¿Qué decisión se tomó la última vez que este indicador se movió?', porq: 'Es la prueba definitiva de si la medición alimenta la gestión (cl. 9.1.1).' },
  { niv: 2, q: 'Cuando el trabajo pasa de su área a la siguiente, ¿qué se entrega y en qué plazo?', porq: 'Ataca directamente la interfaz, que es donde vive el retraso.' },
  { niv: 2, q: '¿Qué cambió en este proceso el último año y cómo se planificó ese cambio?', porq: 'Cruza cl. 6.3 con 8.1: el punto de fuga favorito de los auditores externos.' },
  { niv: 3, q: 'Si usted quisiera cambiar el método de este proceso mañana, ¿a quién tendría que convencer?', porq: 'Revela si el dueño de proceso tiene autoridad real o solo el título.' },
  { niv: 3, q: '¿Cuánto del plazo total de este proceso es espera?', porq: 'Casi nadie lo sabe, y la respuesta suele estar por encima del 80 %.' },
  { niv: 3, q: '¿Cómo distinguen un mes malo de un proceso que ya no da más?', porq: 'Separa variación común de especial: la decisión técnica del nivel 4 de madurez.' }
];

/* ------------------------------------------------------------------
   Cálculos trabajados (nivel 3)
   ------------------------------------------------------------------ */
export const CALCULOS = [
  {
    t: 'Eficiencia de ciclo del proceso (PCE)',
    f: 'PCE = tiempo de valor añadido ÷ plazo total',
    datos: 'Compra de insumo crítico: 5 días de trabajo real dentro de 21 días de plazo.',
    paso: 'PCE = 5 ÷ 21 = 0,238',
    res: '23,8 %',
    lee: 'El 76 % del plazo es espera. Reducir la aprobación de 6 a 2 días lleva el plazo a 17 días y el PCE a 29 % sin contratar a nadie ni comprar software.'
  },
  {
    t: 'Capacidad potencial (Cp)',
    f: 'Cp = (LSE − LIE) ÷ 6σ',
    datos: 'Envasado: especificación 500 ± 10 ml (LIE 490, LSE 510), σ = 2,5 ml.',
    paso: 'Cp = (510 − 490) ÷ (6 × 2,5) = 20 ÷ 15',
    res: 'Cp = 1,33',
    lee: 'El proceso cabe en la especificación con margen. Pero Cp no dice nada sobre si está centrado.'
  },
  {
    t: 'Capacidad real (Cpk)',
    f: 'Cpk = mín[(LSE − μ), (μ − LIE)] ÷ 3σ',
    datos: 'Mismo proceso, con media real μ = 504 ml.',
    paso: 'Cpk = mín[(510 − 504), (504 − 490)] ÷ (3 × 2,5) = 6 ÷ 7,5',
    res: 'Cpk = 0,80',
    lee: 'Capaz en teoría, descentrado en la práctica: el 100 % del riesgo está en el límite superior. Se corrige moviendo el centro, no reduciendo la variación.'
  },
  {
    t: 'Rendimiento de primera pasada (FPY)',
    f: 'FPY = unidades conformes sin reproceso ÷ unidades iniciadas',
    datos: 'Cuatro etapas encadenadas con 95 %, 92 %, 98 % y 97 % de conformidad.',
    paso: 'FPY = 0,95 × 0,92 × 0,98 × 0,97',
    res: '83,1 %',
    lee: 'Cada etapa parece buena por separado y el resultado de la cadena es mediocre. Es el argumento numérico contra medir procesos de forma aislada.'
  }
];
