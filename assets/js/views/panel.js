/* ============================================================
   SIG Lab — Vista: Panel de inicio
   ============================================================ */
import { META, KPIS, MODULOS, HITOS } from '../data/curso.js';
import { fig } from '../viz.js';
import { head, sec, callout, card, kpi, badge, table, timeline, pager } from './ui.js';

export function panel() {
  return `
${head('Guía de estudio avanzada · ' + META.actualizado,
  'Sistemas Integrados<br><em>de Gestión</em>',
  `Repaso completo, ayuda memoria y guía de estudio del <strong>${META.programa}</strong> de ${META.proveedor}.
   No es el temario: es lo que necesitas dominar detrás del temario, escrito con la lente de un consultor
   que ya implementó y auditó estos sistemas — con diagramas propios, casuística real y rutas de certificación
   verificables en Perú y en el extranjero.`)}

<div class="grid g4">${KPIS.map((k, i) => kpi(k.v, k.u, k.l, i === 0)).join('')}</div>

${callout('key', 'Cómo usar este sitio',
  `<p>Cada vista es autónoma y se puede imprimir. Si vas a tomar el programa, sigue la <a href="#/ruta">ruta de estudio de ocho semanas</a>
   en paralelo a las clases. Si ya lo tomaste, usa <a href="#/memoria">Ayuda memoria</a> y <a href="#/casos">Casuística</a> como repaso activo.
   Si estás decidiendo si matricularte, empieza por <a href="#/certificacion">Rutas de certificación</a>.</p>
   <p class="small muted mb0">Pulsa <code>/</code> o <code>Ctrl</code>+<code>K</code> para buscar en todo el contenido.</p>`)}

${sec('01', 'La idea que sostiene todo lo demás',
  'Antes de cualquier temario, esto: la integración no es juntar tres manuales. Es reconocer que tres normas comparten el mismo esqueleto.')}

<div class="prose">
<p>Hasta 2012, cada norma ISO de sistemas de gestión tenía su propia estructura, su propio vocabulario y su propia
lógica interna. Integrarlas era un ejercicio de traducción permanente: lo que ISO 9001 llamaba «acción preventiva»,
OHSAS 18001 lo resolvía en otro capítulo con otro nombre, y el resultado eran tres sistemas conviviendo con
tres manuales, tres auditorías y tres revisiones por la dirección.</p>

<p>El <strong>Anexo SL</strong> cambió eso. ISO decidió que todas sus normas de sistemas de gestión compartirían
una estructura de diez capítulos, un texto común y un vocabulario común. A partir de ahí, siete de esos diez
capítulos son <em>idénticos</em> en ISO 9001, ISO 14001, ISO 45001 e ISO 37001. Un requisito escrito una sola vez
sirve a las cuatro.</p>

<p>Ahí está el ahorro real, y ahí está también la trampa: <strong>lo que se integra es la gobernanza, no las
metodologías técnicas</strong>. Un IPERC, una matriz de aspectos ambientales y una evaluación de riesgo de soborno
responden preguntas distintas y no se pueden fusionar en una sola hoja de cálculo sin destruir las tres. Este
sitio insiste mucho en esa distinción porque es donde fracasan la mayoría de las integraciones que se ven en campo.</p>
</div>

${fig('annexSL', '01', 'La estructura que hace posible el SIG',
  'Los capítulos 1 a 3 no son auditables. Del 4 al 10 son requisitos, y son los mismos en las cuatro normas salvo por los añadidos propios de cada disciplina. La columna derecha muestra el cuadrante PHVA al que pertenece cada capítulo.')}

${fig('pdcaLoop', '02', 'El ciclo que ordena los capítulos',
  'El PHVA no es un adorno pedagógico: es el criterio con el que se ordenaron los capítulos. Entender que 4-5-6 son planificación explica por qué no se puede auditar el capítulo 9 de una organización que no cerró el 6.')}

${sec('02', 'Qué cubre este material', 'Seis módulos del programa, ampliados con la capa que un consultor necesita y que un temario no alcanza a incluir.')}

<div class="grid g2">
${MODULOS.map((m) => card(`
  <div class="card-kicker">${m.n} · ${m.horas} h de referencia</div>
  <h3>${m.t}</h3>
  <p class="small muted">${m.resumen}</p>
  <div class="row" style="margin-top:12px">
    ${badge(`${m.temas.length} temas`, m.norm)}
    ${badge(`+${m.profundizacion.length} de profundización`)}
  </div>`, { norm: m.norm, hover: true })).join('')}
</div>

<p class="small muted mt6">Las horas son de referencia para dimensionar el esfuerzo de estudio. Confirma la carga horaria oficial en
<a href="${META.url}" target="_blank" rel="noopener noreferrer">la página del programa</a>.</p>

${sec('03', 'Dónde está parada la norma hoy', 'Agosto de 2026. Hay una enmienda ya auditable y una revisión mayor en curso: estudiar la edición 2015 sin esto es estudiar incompleto.')}

${fig('normsTimeline', '03', 'Cuarenta años en una línea',
  'Dos puntos importan más que el resto: 2012, cuando el Anexo SL hizo estructuralmente posible la integración; y 2024-2026, la ventana de cambio que estás atravesando ahora mismo.')}

${timeline(HITOS)}

${callout('warn', 'Consecuencia práctica',
  `<p class="mb0">Si implementas un sistema hoy, hazlo con el contexto y el capítulo 6 <strong>bien resueltos</strong>.
  Los cambios de la edición 2026 (cultura de calidad, conducta ética, resiliencia) se anclan justamente ahí. Un sistema
  con contexto sólido migrará con esfuerzo marginal; uno con contexto de plantilla tendrá que rehacerse.</p>`)}

${sec('04', 'Las cuatro normas de un vistazo', 'Cada una protege algo distinto. Esa diferencia de objeto es la que explica todo lo que no se puede fusionar.')}

${table(
  ['Norma', 'Qué protege', 'Su requisito irrepetible', '~Certificable'],
  [
    ['<strong>ISO 9001:2015</strong><br><span class="small muted">Calidad</span>', 'El cliente y la conformidad del producto o servicio.', 'Diseño y desarrollo (cl. 8.3) · Satisfacción del cliente', 'Sí'],
    ['<strong>ISO 14001:2015</strong><br><span class="small muted">Ambiente</span>', 'El medio ambiente — un tercero que no participa del proceso.', 'Perspectiva de ciclo de vida (cl. 6.1.2)', 'Sí'],
    ['<strong>ISO 45001:2018</strong><br><span class="small muted">SST</span>', 'El trabajador, incluidos contratistas y visitantes.', 'Consulta y participación de los trabajadores (cl. 5.4)', 'Sí'],
    ['<strong>ISO 37001:2016</strong><br><span class="small muted">Antisoborno</span>', 'La integridad de la organización y del mercado.', 'Función de cumplimiento con acceso al órgano de gobierno', 'Sí']
  ])}

${fig('correspondenceGrid', '04', 'Dónde se funden y dónde divergen',
  'Nueve de diecisiete requisitos comunes son plenamente integrables. Las filas marcadas como «propio» son las que ninguna estrategia de integración debe tocar: ahí vive la razón de ser de cada norma.')}

${sec('05', 'Advertencias antes de empezar', 'Lo que este material es y lo que no es.')}

<div class="grid g2">
${card(`<h4>Qué es</h4><ul class="small muted" style="margin-bottom:0">
  <li>Material de estudio original, con interpretación propia de los requisitos.</li>
  <li>Diagramas construidos para este sitio, sin dependencias externas.</li>
  <li>Casuística redactada a partir de patrones reales de campo.</li>
  <li>Enlaces a fuentes oficiales verificables.</li>
</ul>`)}
${card(`<h4>Qué no es</h4><ul class="small muted" style="margin-bottom:0">
  <li>No reproduce el texto de las normas ISO, que es material protegido por derechos de autor.</li>
  <li>No sustituye al programa formativo ni a las normas oficiales.</li>
  <li>No es asesoría legal: los plazos y montos peruanos cambian y deben verificarse.</li>
  <li>Los precios son referenciales de agosto de 2026 y varían.</li>
</ul>`)}
</div>

${callout('norm', 'Sobre el texto de las normas',
  `<p class="mb0">Para trabajar en serio necesitas el texto oficial. En Perú se adquiere como Norma Técnica Peruana a través del
  <a href="https://www.gob.pe/inacal" target="_blank" rel="noopener noreferrer">INACAL</a>; internacionalmente, en
  <a href="https://www.iso.org/" target="_blank" rel="noopener noreferrer">ISO</a>. Ningún resumen — este incluido — reemplaza la lectura del requisito literal.</p>`)}

${pager(null, ['programa', 'El programa, módulo a módulo'])}
`;
}
