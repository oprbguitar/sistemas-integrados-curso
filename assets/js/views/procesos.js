/* ============================================================
   SIG Lab — Itinerario de gestión por procesos
   Portal + tres niveles: básico, intermedio y avanzado.
   ============================================================ */
import {
  NIVELES, FICHAS_PROC, VOCABULARIO, CARACTERIZACION, INDICADOR_COLS,
  TIPOS_INDICADOR, EJEMPLO_COMPRAS, GOBIERNO, ANTIPATRONES, PREGUNTAS_PROC, CALCULOS
} from '../data/procesos.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, badge, table, checklist, acc, pager } from './ui.js';

/* ══════════════════════════════════════════════════════════
   Constructores propios de la sección
   ══════════════════════════════════════════════════════════ */

/** Ficha conceptual animada: cara = teoría, dorso = ejemplo funcional. */
export function ficha(f, i) {
  return `<button type="button" class="ficha" data-ficha="${f.id}" data-niv="${f.niv}"
    data-norm="${f.norm}" data-flip="0" data-in="false" style="--i:${i % 12}"
    aria-pressed="false" aria-label="${f.n} ${f.t}. Pulsa para ver el ejemplo aplicado.">
  <span class="ficha-inner">
    <span class="ficha-face front">
      <span class="f-head"><span class="f-n">${f.n}</span><span class="f-cl">${f.cl}</span></span>
      <span class="f-t">${f.t}</span>
      <span class="f-def">${f.def}</span>
      <span class="f-lab">Por qué importa</span>
      <span class="f-body">${f.clave}</span>
      <span class="f-foot"><span class="f-turn">↻</span> ver ejemplo</span>
    </span>
    <span class="ficha-face back">
      <span class="f-head"><span class="f-n">${f.n}</span><span class="f-cl">en la práctica</span></span>
      <span class="f-t">${f.t}</span>
      <span class="f-lab">Ejemplo aplicado</span>
      <span class="f-body">${f.ej}</span>
      <span class="f-lab">Dónde falla</span>
      <span class="f-body">${f.ojo}</span>
      <span class="f-foot"><span class="f-turn">↻</span> volver al concepto</span>
    </span>
  </span>
</button>`;
}

/** Rejilla de fichas con filtro por nivel. */
export function fichero(items, opts = {}) {
  const conFiltro = opts.filtro !== false;
  const cuenta = (n) => items.filter((f) => f.niv === n).length;
  const chips = conFiltro ? `
  <div class="nivelbar" data-nivelbar>
    <span class="nb-lab">Filtrar por nivel</span>
    <button type="button" class="nchip" data-niv-filter="0" aria-pressed="true">Todas<span class="nc-count">${items.length}</span></button>
    ${[1, 2, 3].filter(cuenta).map((n) => `<button type="button" class="nchip" data-niv-filter="${n}" aria-pressed="false">Nivel ${n}<span class="nc-count">${cuenta(n)}</span></button>`).join('')}
    <span class="ficha-count" data-ficha-count>${items.length} fichas</span>
  </div>` : '';
  return `${chips}<div class="fichas" data-fichero>${items.map(ficha).join('')}</div>`;
}

/** Guía de lectura de un diagrama: pasos numerados que aparecen escalonados. */
export function guia(titulo, pasos) {
  return `<div class="guia" data-guia data-in="false">
  <div class="g-lab">${titulo}</div>
  <ol>${pasos.map((p, i) => `<li style="--i:${i}"><span>${p}</span></li>`).join('')}</ol>
</div>`;
}

const tarjetaNivel = (n, i) => `<a class="nivelcard" href="#/${n.id}" data-norm="${n.norm}" data-reveal style="--i:${i}">
  <span class="nv-n">${n.n} · ${n.et} · ${n.tiempo}</span>
  <span class="nv-t">${n.t}</span>
  <span class="nv-lede">${n.lede}</span>
  <ul>${n.contenido.map((c) => `<li>${c}</li>`).join('')}</ul>
  <span class="nv-out"><strong>Al terminar:</strong> ${n.salida}</span>
</a>`;

const antipatron = (a) => card(`
  <div class="card-kicker">Antipatrón · nivel ${a.niv}</div>
  <h4>${a.t}</h4>
  <p class="small muted">${a.d}</p>
  <p class="small mb0" style="color:var(--ink-2)"><strong>Corrección.</strong> ${a.fix}</p>`,
  { norm: a.niv === 1 ? '9001' : a.niv === 2 ? '14001' : '37001' });

const preguntas = (niv) => table(['Pregunta de auditoría', 'Por qué funciona'],
  PREGUNTAS_PROC.filter((p) => p.niv === niv).map((p) => [`<strong>«${p.q}»</strong>`, p.porq]));

/* ══════════════════════════════════════════════════════════
   Portal de la sección
   ══════════════════════════════════════════════════════════ */
export function procesos() {
  return `
${head('Módulo 2 · itinerario completo', 'Gestión<br><em>por procesos</em>',
  `El corazón operativo del SIG. Sin procesos caracterizados no hay sistema integrado: hay cuatro manuales conviviendo
   en un archivador. Aquí está todo el cuerpo de conocimiento reclasificado en <strong>tres niveles acumulativos</strong>,
   con veintiuna fichas conceptuales, siete diagramas guiados y un caso numérico que atraviesa los tres.`)}

${callout('key', 'Por qué esta sección se dividió en niveles',
  `<p>El material de procesos mezclaba tres cosas que se aprenden en momentos distintos: <strong>entender</strong> qué es
  un proceso, <strong>caracterizarlo y medirlo</strong>, y <strong>gobernarlo y rediseñarlo</strong>. Presentarlas juntas
  produce el efecto típico de los cursos de SIG: el participante copia la ficha de caracterización sin haber entendido
  qué es una entrada, y termina con un sistema documentalmente correcto y operativamente inerte.</p>
  <p class="mb0">Los tres niveles son <strong>acumulativos</strong>: cada uno supone resuelto el anterior. Si dudas de dónde
  entrar, empieza por el nivel 1 y usa el criterio de avance de cada página.</p>`)}

${fig('processJourney', '14', 'El itinerario completo en una vista',
  'Tres niveles encadenados con su resultado de salida. La banda inferior fija el criterio de avance: se pasa de nivel cuando puedes demostrar el resultado del anterior con evidencia objetiva, no cuando terminaste de leer.', { interactive: true })}

${guia('Cómo se lee este diagrama', [
  'Empieza por la izquierda: los tres bloques están en orden temporal, no en orden de importancia.',
  'Dentro de cada bloque, los tres puntos son los temas que la página correspondiente desarrolla.',
  'La línea punteada inferior de cada bloque separa el contenido del <strong>resultado</strong>: lo que sabrás hacer.',
  'Las flechas entre bloques son dependencias reales: el nivel 2 usa vocabulario que solo se define en el nivel 1.',
  'La banda naranja inferior es el criterio de avance. Es la única parte del diagrama que exige evidencia, no lectura.'
])}

${sec('01', 'Elige por dónde entrar', 'Tres páginas autónomas. Cada una se puede imprimir y usar como material de trabajo.')}

<div class="grid g3">${NIVELES.map(tarjetaNivel).join('')}</div>

<div class="grid g3 mt6">
${NIVELES.map((n) => card(`<div class="card-kicker">${n.n} · para ti si…</div>
  <p class="small mb0" style="color:var(--ink-2)">${n.para}</p>`, { norm: n.norm })).join('')}
</div>

${sec('02', 'Las veintiuna fichas conceptuales', 'Cada ficha tiene dos caras: el concepto y su aplicación real. Pulsa cualquiera para girarla; usa los filtros para ver solo un nivel.')}

${callout('tip', 'Cómo estudiar con las fichas',
  `<p class="mb0">Lee solo la cara del concepto y, antes de girar, <strong>construye tú el ejemplo</strong> con un proceso
  de tu organización. Después gira y compara. Si tu ejemplo no encaja, casi siempre es porque el concepto se entendió
  a medias — no porque tu caso sea especial. Es el mismo mecanismo de recuperación activa que se usa para preparar
  el examen de auditor líder.</p>`)}

${fichero(FICHAS_PROC)}

${sec('03', 'La regla que descarta el 70 % de los mapas', 'Vale para los tres niveles y se comprueba en treinta segundos.')}

${callout('key', 'Dueño, indicador y riesgo',
  `<p class="mb0">Si un proceso del mapa no tiene <strong>dueño con nombre</strong>, <strong>indicador</strong> y
  <strong>al menos un riesgo asociado</strong>, no es un proceso: es un dibujo. La cl. 4.4.1 exige determinar criterios,
  métodos, recursos, responsabilidades y riesgos para cada proceso. Un mapa bonito sin fichas detrás es una no conformidad
  esperando a que alguien la escriba.</p>`)}

${sec('04', 'Antipatrones de los tres niveles', 'Los ocho errores que más veces se ven en campo, ordenados por el nivel en el que aparecen.')}

<div class="grid g2">${ANTIPATRONES.map(antipatron).join('')}</div>

${pager(['normas', 'Las normas'], ['procesos-basico', 'Nivel 1 — Fundamentos'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Nivel 1 · Básico
   ══════════════════════════════════════════════════════════ */
export function procesosBasico() {
  return `
${head('Nivel 1 · Básico', 'Fundamentos<br><em>del proceso</em>',
  `Qué es exactamente un proceso, en qué se diferencia de un procedimiento y cómo se lee un mapa.
   Este nivel no produce documentos: produce <strong>criterio</strong>. Sin él, la ficha de caracterización
   del nivel 2 se llena copiando, que es justo lo que un auditor detecta en dos preguntas.`)}

${callout('key', 'Qué vas a poder hacer al terminar',
  `<p class="mb0">Leer un mapa de procesos ajeno y decir, con argumentos, si describe cómo trabaja esa organización
  o si reproduce el índice de la norma. Es una habilidad de diagnóstico, y es la primera que se le pide a un consultor
  cuando entra a una empresa que ya tiene sistema.</p>`)}

${sec('01', 'La definición, palabra por palabra', 'Tres términos deciden todo lo demás.')}

<div class="prose">
<p>ISO 9000 define proceso como un <strong>conjunto de actividades mutuamente relacionadas que utilizan
entradas para producir un resultado previsto</strong>. Cada parte de esa frase carga un requisito:</p>
<p><strong>Mutuamente relacionadas.</strong> No es una lista de tareas que ocurren en la misma área. Hay una secuencia
y una dependencia: si el paso tres no ocurre, el cuatro no puede ocurrir bien. Esa dependencia es lo que permite
localizar la causa cuando el resultado falla.</p>
<p><strong>Utilizan entradas.</strong> Algo llega de fuera del proceso. Si nada entra, no hay transformación: hay
generación espontánea, y eso no existe en una organización. Identificar la entrada obliga a identificar al proveedor,
y con él aparece el primer criterio verificable.</p>
<p><strong>Resultado previsto.</strong> El resultado se define <em>antes</em> de ejecutar. Es la diferencia entre
un proceso y una costumbre: la costumbre produce lo que salga; el proceso produce lo que se determinó, y por eso
puede declararse conforme o no conforme.</p>
</div>

${fig('processAnatomy', '15', 'Anatomía de un proceso',
  'Cuatro flujos, no dos. Lo que entra y lo que sale es la parte visible; lo que manda sobre el proceso (controles) y lo que lo habilita (recursos) es lo que casi ninguna ficha declara — y es donde vive la mitad de los hallazgos del capítulo 7.', { interactive: true })}

${guia('Cómo se lee este diagrama', [
  'Mira primero el eje horizontal: entrada → transformación → salida. Es el proceso en su forma más simple.',
  'Sube al bloque superior: los <strong>controles</strong> no se consumen, gobiernan. Un requisito legal o un criterio de aceptación manda sobre el proceso sin ser parte de él.',
  'Baja al bloque inferior: los <strong>recursos</strong> habilitan y sí se consumen o se desgastan. Personas, equipos, software, ambiente de trabajo (cl. 7.1.4).',
  'La flecha punteada de la derecha es la medición: toma dato de la salida y también del propio proceso.',
  'Prueba final: nombra los cuatro para un proceso de tu organización. Si falta el control o el recurso, la ficha está incompleta aunque el formato esté lleno.'
])}

${sec('02', 'Proceso, procedimiento, actividad, tarea', 'Cuatro palabras que se usan como sinónimas y no lo son. Confundirlas produce el sistema burocrático clásico.')}

${table(['Término', 'Qué es', 'Regla práctica', 'Ejemplo'],
  VOCABULARIO.map(([t, d, r, e]) => [`<strong>${t}</strong>`, d, `<span class="small muted">${r}</span>`, `<span class="mono small">${e}</span>`]))}

${callout('trap', 'El error que multiplica la documentación',
  `<p class="mb0">«Un procedimiento por cada proceso» no es un requisito de la norma <strong>desde 2015</strong>.
  Los seis procedimientos documentados obligatorios desaparecieron en esa edición. Lo que la norma exige es
  <em>determinar los procesos</em> y mantener la información documentada <strong>necesaria para apoyar su operación</strong>.
  La palabra «necesaria» es la que ahorra cientos de horas — y la que casi nadie usa a su favor.</p>`)}

${sec('03', 'SIPOC: delimitar antes de caracterizar', 'Media hora con el dueño del proceso y una pizarra. Es el paso previo a cualquier ficha.')}

${fig('sipocChain', '16', 'SIPOC y la cadena cliente-proveedor interno',
  'Se llena de fuera hacia dentro: primero cliente y salida, después proveedor y entrada, y solo al final el proceso. Hacerlo al revés es la razón por la que tantos SIPOC terminan describiendo lo que el área hace en vez de lo que el cliente necesita.', { interactive: true })}

${guia('Cómo se construye, en este orden', [
  'Empieza por la <strong>C</strong>: ¿quién recibe la salida? Puede ser otro proceso, no necesariamente el cliente final.',
  'Sigue con la <strong>O</strong>: qué se le entrega y con qué criterio de conformidad. Sin criterio, no hay salida definida.',
  'Ahora la <strong>S</strong> y la <strong>I</strong>: quién entrega la entrada y con qué criterio de aceptación se recibe.',
  'Al final la <strong>P</strong>: de cuatro a siete pasos de alto nivel. Si te salen quince, estás describiendo dos procesos.',
  'Mira la cadena inferior: cada flecha entre procesos es una interfaz, y el nivel 2 la trata como objeto de gestión propio.'
])}

${sec('04', 'Tipos de proceso y mapa de nivel 0', 'Tres bandas, una dirección de flujo, y una flecha que casi nadie dibuja.')}

${fig('processMap', '17', 'Mapa de procesos de nivel 0',
  'Procesos estratégicos arriba, cadena de valor al centro, soporte abajo. La flecha de retroalimentación no es decorativa: es el capítulo 9 cerrando el ciclo. Un mapa sin ese retorno describe una fábrica, no un sistema de gestión.', { interactive: true })}

${guia('Cómo se audita un mapa en dos minutos', [
  'Cuenta los procesos: menos de 8 esconde agregaciones que ocultan responsabilidad; más de 15 no cabe en la cabeza de nadie.',
  'Busca la banda estratégica: si la alta dirección no aparece en ningún proceso, la cl. 5.1 está en riesgo.',
  'Recorre la cadena de valor con un pedido real. Si el flujo no se puede seguir, el mapa es decorativo.',
  'Comprueba el retorno de retroalimentación: sin él, la medición no alimenta ninguna decisión (cl. 9.1.1).',
  'Elige un proceso al azar y pide su dueño, su indicador y su riesgo. La respuesta llega en treinta segundos o no llega.'
])}

<div class="grid g3">
${card(`<div class="card-kicker">Estratégicos</div><h4>Dirigen y asignan</h4>
  <p class="small muted mb0">Dirección y contexto, gestión del SIG, revisión y mejora. Se miden por <strong>decisiones tomadas</strong> y recursos asignados, no por actividades ejecutadas.</p>`, { norm: '37001' })}
${card(`<div class="card-kicker">Cadena de valor</div><h4>Transforman el requisito</h4>
  <p class="small muted mb0">La secuencia que convierte el requisito del cliente en satisfacción. Si podría pertenecer a cualquier empresa del rubro, está copiada.</p>`, { norm: '9001' })}
${card(`<div class="card-kicker">Soporte</div><h4>Habilitan al resto</h4>
  <p class="small muted mb0">RR. HH., compras, mantenimiento, TI, documentación. <strong>Los más auditados</strong>: cuelgan directamente de 7.1, 7.2, 7.5 y 8.4.</p>`, { norm: '14001' })}
</div>

${sec('05', 'Hasta dónde desplegar', 'La pregunta que decide si el sistema será usable o burocrático.')}

${fig('processLevels', '18', 'Cuatro niveles posibles, un límite razonable',
  'El nivel 0 y el nivel 1 son innegociables. El 2 se justifica por riesgo o por complejidad de la interfaz. El 3 solo donde el error es caro o irreversible. Cada nivel adicional multiplica el mantenimiento documental sin añadir control si el anterior no se cumple.', { interactive: true })}

${callout('warn', 'De dónde viene realmente la burocracia',
  `<p class="mb0">Casi nunca de exigir demasiado en el nivel 0. Viene de desplegar niveles 2 y 3 que nadie lee y que
  quedan obsoletos en el primer cambio de método. La prueba: pregunta en campo cuándo fue la última vez que alguien
  consultó un instructivo. Si la respuesta es «cuando lo firmamos», ese nivel de despliegue está <strong>costando dinero
  y no está comprando control</strong>.</p>`)}

${sec('06', 'Fichas de este nivel', 'Siete conceptos. Cara: la definición y por qué importa. Dorso: cómo se ve en una organización real.')}

${fichero(FICHAS_PROC.filter((f) => f.niv === 1), { filtro: false })}

${sec('07', 'Preguntas que ya puedes hacer', 'Con solo este nivel puedes diagnosticar un sistema ajeno.')}

${preguntas(1)}

${checklist('proc-n1', 'Criterio de avance al nivel 2 — no pases hasta que', [
  'Puedas definir proceso sin leer la norma y explicar las tres palabras clave de la definición.',
  'Sepas distinguir proceso, procedimiento, actividad y tarea con un ejemplo propio de cada uno.',
  'Hayas construido un SIPOC completo de un proceso real, empezando por el cliente.',
  'Puedas nombrar entrada, salida, control y recurso de tres procesos de tu organización.',
  'Hayas revisado un mapa de nivel 0 real y detectado al menos una debilidad con argumento normativo.',
  'Sepas justificar hasta qué nivel desplegar cada proceso y por qué no más abajo.'
])}

${pager(['procesos', 'Portal de gestión por procesos'], ['procesos-intermedio', 'Nivel 2 — Caracterizar y medir'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Nivel 2 · Intermedio
   ══════════════════════════════════════════════════════════ */
export function procesosIntermedio() {
  const e = EJEMPLO_COMPRAS;
  return `
${head('Nivel 2 · Intermedio', 'Caracterizar<br><em>y medir</em>',
  `Aquí el proceso deja de ser un concepto y se vuelve un objeto gestionable: una ficha que alguien firma,
   un flujo con responsables, interfaces con criterio y plazo, e indicadores que obligan a decidir.
   Todo el nivel se construye sobre un mismo caso real —la compra de un insumo crítico— para que
   la teoría y el ejemplo no vayan por caminos separados.`)}

${callout('key', 'Qué vas a poder hacer al terminar',
  `<p class="mb0">Caracterizar un proceso completo y <strong>defender cada campo de la ficha ante un auditor</strong>:
  por qué ese objetivo, por qué ese dueño, por qué ese indicador y por qué ese umbral. La ficha es fácil de llenar;
  lo difícil —y lo que se audita— es sostenerla en la entrevista.</p>`)}

${sec('01', 'La ficha de caracterización', 'Ocho elementos y un error típico por cada uno. La cl. 4.4.1 los enumera de la a) a la h).')}

${fig('turtle', '19', 'Diagrama de tortuga',
  'Las cuatro patas son exactamente las cuatro preguntas que un auditor formula frente a cualquier proceso. Responderlas por anticipado es la forma más eficiente de prepararse para una auditoría — y la más honesta de descubrir que un proceso no está bajo control.', { interactive: true })}

${guia('Cómo se usa la tortuga en una entrevista real', [
  'Pregunta primero por el centro: «¿qué hace este proceso y qué resultado debe entregar?». Anota la respuesta literal.',
  'Ve a las entradas y salidas: «¿qué recibe, de quién?» y «¿qué entrega, a quién?». Insiste en el <strong>criterio</strong>, no solo en el objeto.',
  'Pata «¿con qué?»: infraestructura y equipos. Pregunta por calibración si hay medición (cl. 7.1.5).',
  'Pata «¿con quién?»: competencia, no cargo. «¿Cómo sabe usted que esta persona es competente?» (cl. 7.2).',
  'Pata «¿cómo?»: método y criterios de decisión. Pide el documento y comprueba su versión vigente.',
  'Pata «¿cuán bien?»: indicador y riesgo. Aquí es donde se cae la mayoría de las fichas clonadas.'
])}

${table(['Elemento', 'Qué debe contener', 'Error frecuente'],
  CARACTERIZACION.map(([a, b, c]) => [`<strong>${a}</strong>`, b, c]))}

${sec('02', 'La ficha, rellenada', 'El mismo proceso de compras que atraviesa todo este nivel y el siguiente.')}

<div class="case" data-norm="9001">
  <div class="case-head">
    <div class="case-sector">${e.cod}</div>
    <h3 style="margin-top:8px;font-size:var(--fs-lg)">${e.t}</h3>
    <p class="small mb0" style="color:var(--ink-2)"><strong>Objetivo.</strong> ${e.objetivo}</p>
  </div>
  <div class="case-body">
    <div class="callout key" style="margin-top:0">
      <div class="co-title">Dueño del proceso</div>
      <p class="mb0">${e.dueno}</p>
    </div>
    ${table(['Elemento', 'Contenido', 'Contraparte', 'Criterio verificable'], e.filas.map(([a, b, c, d]) => [`<strong>${a}</strong>`, b, c, d]))}
    <h4 class="mini">Los tres indicadores del proceso</h4>
    ${table(['~Indicador', 'Fórmula', 'Línea base → meta', 'Umbral de reacción', '~Tipo'],
      e.indicadores.map((i) => [`<strong>${i.n}</strong>`, `<span class="mono small">${i.f}</span>`, `${i.base} → <strong>${i.meta}</strong>`, i.umbral, `<span class="small muted">${i.tipo}</span>`]))}
    <div class="callout key" style="margin-bottom:0">
      <div class="co-title">Cómo se leen juntos</div>
      <p class="mb0">${e.lectura}</p>
    </div>
  </div>
</div>

${sec('03', 'Documentar el flujo y sus interfaces', 'Cuándo basta un diagrama de bloques y cuándo hace falta carriles. Pista: casi siempre hacen falta carriles.')}

<div class="grid g2">
${card(`<h4>Diagrama de bloques</h4>
  <p class="small muted">Secuencia simple, un solo responsable, sin decisiones complejas.</p>
  <p class="small muted mb0"><strong>Úsalo cuando:</strong> el proceso es lineal y cabe en menos de doce pasos.
  <strong>Ventaja:</strong> cualquiera lo lee sin formación previa. <strong>Límite:</strong> oculta los traspasos.</p>`, { norm: '9001' })}
${card(`<h4>Diagrama con carriles (swimlane)</h4>
  <p class="small muted">Cada carril es un rol o área; el flujo cruza carriles al cambiar de responsable.</p>
  <p class="small muted mb0"><strong>Úsalo cuando:</strong> el proceso cruza áreas — que es donde nacen la mayoría de los problemas.
  <strong>Ventaja:</strong> hace visible el traspaso de responsabilidad, que es lo que un auditor busca.</p>`, { norm: '14001' })}
</div>

${fig('handoffMap', '20', 'Carriles e interfaces del proceso de compras',
  'Cinco pasos, cuatro áreas y cuatro traspasos. Cada punto numerado es una interfaz que necesita cuatro definiciones: qué se entrega, a quién, con qué criterio y en qué plazo. Tres de estos cuatro traspasos no tienen plazo definido — y ahí están 14 de los 21 días del proceso.', { interactive: true })}

${guia('Cómo se lee un diagrama de carriles', [
  'Cuenta los cruces de carril, no los pasos: los cruces son los puntos de riesgo del proceso.',
  'En cada cruce pregunta las cuatro definiciones. Si falta el plazo, ahí está la demora estructural.',
  'Un paso que vuelve a un carril anterior (traspaso 3) es una autorización intercalada: casi siempre es el cuello de botella.',
  'Si un carril solo aparece una vez y para aprobar, evalúa si esa aprobación puede delegarse por monto o por riesgo.',
  'El carril de Calidad al final indica verificación posterior. Preguntar si podría ser preventiva es el inicio del rediseño del nivel 3.'
])}

${callout('tip', 'Cinco reglas de notación que evitan discusiones',
  `<ol class="small mb0" style="color:var(--ink-2)">
    <li>Un solo punto de inicio y, preferentemente, un solo punto de fin.</li>
    <li>Los rombos de decisión tienen exactamente dos salidas rotuladas (sí/no). Tres salidas indican que faltan decisiones.</li>
    <li>Toda flecha va en una sola dirección. Las flechas bidireccionales ocultan un bucle no analizado.</li>
    <li>Cada actividad empieza con un verbo en infinitivo. «Facturación» no es una actividad; «emitir factura» sí.</li>
    <li>Si el diagrama no cabe en una hoja, el proceso está mal delimitado — no hace falta una hoja más grande.</li>
  </ol>`)}

${sec('04', 'Indicadores que sobreviven a una auditoría', 'Seis columnas obligatorias. Si falta una, el indicador informa pero no gestiona.')}

${table(['Columna', 'Pregunta que responde', 'Ejemplo — proceso de compras'],
  INDICADOR_COLS.map(([a, b, c]) => [`<strong>${a}</strong>`, b, c]))}

<div class="grid g2 mt6">
${TIPOS_INDICADOR.map((t) => card(`<h4>${t.t}</h4>
  <p class="small muted">${t.d}</p>
  <p class="small mb0" style="color:var(--ink-2)"><strong>Ejemplo.</strong> ${t.ej}</p>`, { norm: t.norm })).join('')}
</div>

${fig('indicatorLoop', '21', 'Del dato a la decisión',
  'El indicador no es la tabla: es el bucle completo. Dato con fuente verificable, fórmula estable, umbral declarado, decisión y acción sobre la causa, y el efecto volviendo al proceso para volver a medirse. Tres rupturas típicas lo interrumpen, y las tres son hallazgos contra la cl. 9.1.1.', { interactive: true })}

${guia('Cómo se comprueba el bucle en campo', [
  'Paso 1 — pide el dato crudo, no el reporte. Si solo existe en la hoja de una persona, el bucle ya está roto.',
  'Paso 2 — comprueba que la fórmula no cambió a mitad de período sin declararlo: destruye la línea base.',
  'Paso 3 — pregunta por el umbral de reacción. Meta no es umbral: la meta es a dónde vamos, el umbral es cuándo hay que actuar.',
  'Paso 4 — pide la última decisión tomada por este indicador. Es la pregunta que más sistemas tumba.',
  'Paso 5 — verifica que la acción atacó la causa y no el síntoma, y que hubo verificación de eficacia con dato posterior (cl. 10.2).'
])}

${callout('trap', 'El indicador que nunca baja',
  `<p class="mb0">Si un indicador lleva tres años en 98 %, no está midiendo nada relevante — está midiendo algo que la
  organización ya domina, o está midiendo mal. Prueba de consultor: <strong>pregunta qué decisión se tomó alguna vez
  porque ese indicador se movió</strong>. Si no hay ninguna, el indicador es decorativo y la cl. 9.1.1 está incumplida
  aunque la tabla esté impecable. Ver el <a href="#/casos">caso 1</a>.</p>`)}

${sec('05', 'Riesgo y cambio a nivel de proceso', 'Dos requisitos que se auditan sobre la ficha y que casi nadie conecta con ella.')}

<div class="grid g2">
${acc('4.4.1 f', 'El riesgo del proceso no es el IPERC',
  `<p>La ficha pide los riesgos que pueden impedir que <em>el proceso entregue su resultado previsto</em>. El IPERC
  responde qué puede dañar a una persona. Son preguntas distintas, con escalas distintas y evaluadores distintos.</p>
  <p class="mb0">En el proceso de compras: «proveedor único de un insumo crítico» es riesgo de proceso.
  «Caída de carga en la descarga del insumo» es peligro SST. Los dos existen, van en registros distintos y
  <strong>convergen únicamente en el registro de riesgos del sistema</strong> (cl. 6.1), que alimenta la revisión por la dirección.</p>`, '45001')}
${acc('6.3 · 8.1', 'Todo cambio de proceso se planifica',
  `<p>La cl. 6.3 exige planificar el cambio: propósito, consecuencias potenciales, integridad del sistema, recursos y
  asignación de responsabilidades. La cl. 8.1 exige además controlar los cambios planificados y revisar las
  consecuencias de los no previstos.</p>
  <p class="mb0">Aplicado a compras: cambiar el ERP obliga a reasignar el dueño del dato, recalcular la fórmula,
  migrar el histórico para no perder la línea base y reevaluar los riesgos. <strong>El cambio que más indicadores
  rompe no es el tecnológico: es el de fórmula</strong>, hecho a mitad de año y sin declarar.</p>`, '9001')}
</div>

${sec('06', 'Fichas de este nivel', 'Siete conceptos operativos. Gira cada una para ver el mismo concepto aplicado al caso de compras.')}

${fichero(FICHAS_PROC.filter((f) => f.niv === 2), { filtro: false })}

${sec('07', 'Preguntas de auditoría de este nivel', 'Cuatro preguntas que separan la ficha pensada de la ficha copiada.')}

${preguntas(2)}

${checklist('proc-n2', 'Criterio de avance al nivel 3 — no pases hasta que', [
  'Hayas caracterizado un proceso real completo, con los nueve elementos y sin copiar de otra ficha.',
  'Cada indicador tuyo tenga las seis columnas, incluida la de umbral de reacción con responsable.',
  'Hayas dibujado el proceso con carriles y contado sus traspasos.',
  'Cada traspaso tenga definidos qué se entrega, a quién, con qué criterio y en qué plazo.',
  'Puedas mostrar una decisión concreta tomada a partir de un indicador de proceso en los últimos seis meses.',
  'Los riesgos de la ficha hablen de incumplimiento de resultado y no estén copiados del IPERC.'
])}

${pager(['procesos-basico', 'Nivel 1 — Fundamentos'], ['procesos-avanzado', 'Nivel 3 — Arquitectura y desempeño'])}
`;
}

/* ══════════════════════════════════════════════════════════
   Nivel 3 · Avanzado
   ══════════════════════════════════════════════════════════ */
export function procesosAvanzado() {
  return `
${head('Nivel 3 · Avanzado', 'Arquitectura<br><em>y desempeño</em>',
  `El nivel donde la gestión por procesos deja de ser un requisito de certificación y empieza a producir dinero.
   Gobierno, madurez, variación, capacidad y tiempo. Es también el nivel que explica por qué tantas organizaciones
   certificadas llevan cinco años con el mismo desempeño: <strong>la certificación acredita el nivel 3 de madurez,
   y el valor económico aparece en el 4</strong>.`)}

${callout('key', 'Qué vas a poder hacer al terminar',
  `<p class="mb0">Decidir <strong>qué proceso rediseñar, con qué evidencia y en qué orden</strong>, y sostener esa decisión
  ante una gerencia con dato numérico en lugar de con opinión. Es la conversación que separa a un coordinador de sistema
  de un consultor de procesos.</p>`)}

${sec('01', 'Gobierno: el conflicto que nadie declara', 'El dueño de proceso responde en horizontal; el organigrama manda en vertical. Sin regla de arbitraje, gana siempre el organigrama.')}

<div class="prose">
<p>La cl. 5.3 exige asignar responsabilidades y autoridades. Casi todos los sistemas lo resuelven nombrando dueños
de proceso en un cuadro. Muy pocos declaran <strong>qué ocurre cuando el dueño del proceso y el jefe funcional
no están de acuerdo</strong>, que es exactamente lo que ocurre en cuanto el proceso exige cambiar cómo trabaja alguien.</p>
<p>El desenlace por defecto es conocido: el jefe funcional controla el presupuesto y la evaluación de desempeño de
las personas, así que su criterio prevalece aunque el dueño tenga razón. El resultado es un rol de dueño de proceso
puramente nominal — y un sistema que documenta procesos que nadie tiene autoridad real para cambiar.</p>
</div>

${table(['Decisión', 'Quién decide', 'Regla'], GOBIERNO.map(([a, b, c]) => [`<strong>${a}</strong>`, b, `<span class="small muted">${c}</span>`]))}

${callout('warn', 'La prueba de autoridad real',
  `<p class="mb0">Pregunta al dueño de proceso: <strong>«si usted quisiera cambiar el método de este proceso mañana,
  ¿a quién tendría que convencer?»</strong>. Si la lista tiene más de dos nombres, o si incluye a alguien que no
  responde por el resultado del proceso, la autoridad es nominal. Ningún rediseño se sostiene sobre una autoridad nominal:
  se implementa, dura dos meses y el proceso vuelve a su forma anterior.</p>`)}

${sec('02', 'Madurez: dónde está realmente tu sistema', 'Cinco niveles. La certificación acredita el tercero.')}

${fig('processMaturity', '22', 'Escalera de madurez de la gestión por procesos',
  'El salto del 2 al 3 lo resuelve un consultor con fichas y procedimientos. El del 3 al 4 no se compra: exige que la organización acepte decidir contra el dato aunque contradiga a la jerarquía. Por eso tantos sistemas se estancan justo después de certificarse.', { interactive: true })}

${guia('Cómo se diagnostica el nivel real, sin autoengaño', [
  'Nivel 1 → 2: ¿dos personas describen el proceso igual? Si no, ni siquiera hay práctica común.',
  'Nivel 2 → 3: ¿existe ficha con dueño, indicador y riesgo, y coincide con lo que se hace en campo?',
  'Nivel 3 → 4: ¿el indicador ha cambiado alguna decisión sin que nadie tuviera que autorizarla caso por caso?',
  'Nivel 4 → 5: ¿se ha rediseñado algún proceso <em>antes</em> de que apareciera el problema, por evidencia anticipada?',
  'Ojo con el autodiagnóstico: casi todas las organizaciones se sitúan un nivel por encima del que la evidencia sostiene.'
])}

${callout('trap', 'El sistema certificado y estancado',
  `<p class="mb0">Cinco años en nivel 3 con el mismo desempeño es precisamente lo que la cl. 10.3 llama incumplimiento
  de mejora continua — aunque nunca le hayan abierto una no conformidad, porque los auditores externos rara vez comparan
  el desempeño entre ciclos de certificación. <strong>La auditoría interna sí puede y debe hacerlo</strong>: es una de
  las pocas cosas que una auditoría interna puede ver mejor que una externa.</p>`)}

${sec('03', 'Variación: la decisión técnica del nivel 4', 'Distinguir el mes malo del proceso que ya no da más.')}

<div class="grid g2">
${card(`<h4>Variación común</h4>
  <p class="small muted">La que produce el proceso tal como está diseñado. Aparece siempre, sin causa asignable, dentro de un rango estable.</p>
  <p class="small mb0" style="color:var(--ink-2)"><strong>Qué hacer.</strong> Nada puntual: rediseñar el proceso si el rango no es aceptable.
  <strong>Qué no hacer.</strong> Abrir una acción correctiva por cada punto bajo la media. Reaccionar a la variación común
  <em>aumenta</em> la variación: es el efecto que Deming demostró con el experimento del embudo.</p>`, { norm: '9001' })}
${card(`<h4>Variación especial</h4>
  <p class="small muted">La causada por algo ajeno al diseño: un lote distinto, un operador nuevo, un equipo descalibrado, un cambio de proveedor.</p>
  <p class="small mb0" style="color:var(--ink-2)"><strong>Qué hacer.</strong> Investigarla: tiene causa asignable y es el caso legítimo de acción correctiva (cl. 10.2).
  <strong>Cómo se reconoce.</strong> Rompe el patrón: un punto fuera del rango histórico, siete puntos seguidos del mismo lado de la media, o una tendencia sostenida.</p>`, { norm: '14001' })}
</div>

${callout('key', 'La regla que evita el desgaste del equipo',
  `<p class="mb0">Antes de abrir una acción correctiva por un indicador bajo, mira la serie de los últimos doce meses.
  Si el valor está dentro del rango en que el proceso ha oscilado siempre, <strong>el problema no es este mes:
  es el diseño</strong>. Abrir acciones correctivas contra variación común genera decenas de registros, consume el
  tiempo del equipo, no cambia nada y —a los dos años— produce la frase que mata cualquier sistema:
  «esto de la calidad es puro papel».</p>`)}

${sec('04', 'Capacidad y eficiencia: los cuatro cálculos', 'Cuatro números que convierten una discusión de opiniones en una decisión.')}

<div class="grid g2">
${CALCULOS.map((c) => card(`
  <div class="card-kicker">${c.t}</div>
  <p class="mono small" style="color:var(--accent-ink);margin:0 0 8px">${c.f}</p>
  <p class="small muted" style="margin-bottom:8px"><strong>Datos.</strong> ${c.datos}</p>
  <p class="mono small" style="color:var(--ink-2);margin-bottom:4px">${c.paso}</p>
  <p style="font-family:var(--font-title);font-size:var(--fs-lg);color:var(--accent-ink);margin:0 0 8px">${c.res}</p>
  <p class="small mb0" style="color:var(--ink-2)"><strong>Cómo se lee.</strong> ${c.lee}</p>`, { norm: 'sig' })).join('')}
</div>

${fig('valueStream', '23', 'Dónde se va el tiempo — eficiencia de ciclo',
  'El mismo proceso de compras del nivel 2, medido en tiempo. Cinco días de trabajo real dentro de veintiún días de plazo: un PCE del 24 %. El 76 % restante es espera, y casi toda la espera vive en autorizaciones, no en ejecución.', { interactive: true })}

${guia('Cómo se construye y se usa esta medición', [
  'Toma un caso real reciente, no un promedio: reconstruye fecha y hora de cada paso desde los registros.',
  'Clasifica cada bloque en valor añadido (transforma o verifica) o espera. La revisión que no cambia nada es espera, aunque alguien esté trabajando.',
  'Suma por separado y divide: PCE = valor añadido ÷ plazo total. Menos del 10 % es lo normal en procesos administrativos sin gestionar.',
  'Ordena las esperas de mayor a menor. Casi siempre las dos primeras concentran más de la mitad del plazo.',
  'Ataca la mayor con una decisión de gobierno —delegar por monto, eliminar la doble aprobación—, no con software.',
  'Vuelve a medir a los tres meses con otro caso real: esa es la verificación de eficacia que exige la cl. 10.2.'
])}

${callout('trap', 'Automatizar la espera',
  `<p class="mb0">El error más caro de los proyectos de transformación digital aplicados a procesos: digitalizar un flujo
  con PCE del 8 % sin tocar las autorizaciones. El plazo total apenas mejora, la organización gastó seis cifras y
  ahora la espera es <strong>más difícil de ver</strong>, porque está dentro de un sistema en lugar de en una bandeja
  de escritorio. Mide el PCE antes de firmar cualquier proyecto de automatización.</p>`)}

${sec('05', 'Rediseñar frente a mejorar', 'Un criterio numérico para no equivocarse de intervención.')}

${table(['Situación', 'Intervención', 'Por qué'],
  [
    ['Objetivo de mejora <strong>menor al 30 %</strong> sobre la línea base', '<strong>Mejora incremental</strong>', 'El proceso actual tiene margen. Rediseñar destruiría conocimiento acumulado y costaría más de lo que aporta.'],
    ['Objetivo de mejora <strong>mayor al 30 %</strong>', '<strong>Rediseño</strong>', 'Ningún ajuste incremental llega. Hay que cambiar qué pasos existen, quién decide y en qué orden.'],
    ['El proceso oscila siempre en el mismo rango y el rango no es aceptable', '<strong>Rediseño</strong>', 'Es variación común: el rango <em>es</em> el diseño. Corregir puntos no lo mueve.'],
    ['Aparece una desviación con causa asignable identificable', '<strong>Acción correctiva</strong>', 'Variación especial: hay una causa concreta que eliminar (cl. 10.2).'],
    ['El proceso cumple, pero su PCE está por debajo del 10 %', '<strong>Rediseño del flujo de autorizaciones</strong>', 'El desempeño no está limitado por la ejecución sino por la espera. Acelerar la ejecución no cambia el plazo.']
  ])}

${callout('tip', 'La regla incómoda del rediseño',
  `<p class="mb0">Un rediseño que no toca las reglas de autorización no es un rediseño: es un cambio de formato.
  Las esperas viven en las autorizaciones —y las autorizaciones son poder—, por eso el rediseño de procesos es
  siempre, en el fondo, una negociación de gobierno. Quien lo presenta como un ejercicio técnico está garantizando
  que no se implemente.</p>`)}

${sec('06', 'Un mapa, cuatro lentes', 'Cómo se integra todo esto cuando hay cuatro normas sobre el mismo proceso.')}

${callout('key', 'Lo que se integra y lo que no',
  `<p>Se integra la <strong>gobernanza del proceso</strong>: un dueño, una ficha, un ciclo de revisión, un tablero.
  El proceso «Mantenimiento» aparece una sola vez en el mapa, no cuatro.</p>
  <p class="mb0">No se integran las <strong>metodologías técnicas de evaluación</strong>: sobre ese único proceso cuelgan
  el control operacional de ISO 9001, los aspectos ambientales de sus residuos peligrosos (ISO 14001), el IPERC de
  trabajos en altura (ISO 45001) y el control del proveedor del servicio (ISO 37001). Cuatro evaluaciones, cuatro
  escalas, un solo proceso y un solo dueño. <strong>Cuatro mapas de procesos es el síntoma inequívoco de que no hubo
  integración</strong>, sino coordinación de calendarios.</p>`)}

${sec('07', 'Fichas de este nivel', 'Siete conceptos de arquitectura y desempeño, cada uno con su cálculo o su regla de decisión al dorso.')}

${fichero(FICHAS_PROC.filter((f) => f.niv === 3), { filtro: false })}

${sec('08', 'Preguntas de este nivel', 'Tres preguntas que casi nadie sabe responder — y por eso son las que mejor diagnostican.')}

${preguntas(3)}

${checklist('proc-n3', 'Criterio de cierre del itinerario', [
  'Puedas nombrar el nivel de madurez real de tres procesos de tu organización, con la evidencia que lo sostiene.',
  'Hayas calculado el PCE de al menos un proceso real a partir de registros, no de estimaciones.',
  'Sepas distinguir variación común de especial en una serie de doce meses y justificar tu lectura.',
  'La regla de arbitraje entre dueño de proceso y jefe funcional esté declarada por escrito en tu organización.',
  'Puedas defender ante gerencia qué proceso rediseñar primero, con un número y no con una opinión.',
  'Los cuatro requisitos normativos sobre un mismo proceso cuelguen de una sola ficha y un solo dueño.'
])}

${pager(['procesos-intermedio', 'Nivel 2 — Caracterizar y medir'], ['riesgos', 'Riesgo en sus tres lenguajes'])}
`;
}
