/* ============================================================
   SIG Lab — Datos: rutas de certificación, organismos y fuentes
   ------------------------------------------------------------
   AVISO: los precios son REFERENCIALES, recogidos en agosto de
   2026 de páginas públicas de los proveedores. Cambian con
   frecuencia y varían por promoción, grupo y modalidad.
   Confirma siempre con el proveedor antes de decidir.
   ============================================================ */

export const DOS_RUTAS = [
  {
    k: 'org', t: 'Certificar a la ORGANIZACIÓN', col: '9001',
    q: '¿Quiere que su empresa exhiba un certificado ISO 9001 / 14001 / 45001 / 37001?',
    a: 'El sujeto certificado es la empresa. Lo emite un <strong>organismo de certificación</strong> tras auditar el sistema en dos etapas. Vigencia típica de 3 años con auditorías de seguimiento anuales.',
    quien: 'Organismo de certificación de sistemas de gestión (OCSG), acreditado bajo ISO/IEC 17021-1.',
    vale: 'Vale ante clientes, licitaciones y cadenas de suministro. Su valor real depende de quién acredita al certificador.',
    plazo: '12 a 18 meses desde el inicio de la implementación en una organización mediana.'
  },
  {
    k: 'per', t: 'Certificarse USTED como profesional', col: '45001',
    q: '¿Quiere acreditar su competencia personal como auditor o implementador?',
    a: 'El sujeto certificado es la persona. Se compone de dos cosas distintas que se confunden a menudo: el <strong>curso aprobado</strong> (formación) y el <strong>registro como auditor</strong> ante un esquema internacional (competencia demostrada con auditorías reales).',
    quien: 'Proveedor de formación aprobado + esquema de registro (CQI/IRCA, Exemplar Global, PECB, o certificación del propio proveedor).',
    vale: 'El certificado de curso acredita formación. El registro como auditor acredita competencia, y exige experiencia auditada.',
    plazo: 'Curso de 40 h en 5 días. El registro completo como auditor líder puede tomar 1 a 3 años de experiencia acumulada.'
  }
];

/* ------------------------------------------------------------------
   Cadena de confianza — por qué importa la acreditación
   ------------------------------------------------------------------ */
export const CADENA = [
  { n: 'IAF', t: 'International Accreditation Forum', d: 'Foro mundial que administra el Acuerdo de Reconocimiento Multilateral (MLA). Es lo que hace que un certificado emitido en Lima sea aceptado en Rotterdam.', col: '37001' },
  { n: 'INACAL-DA', t: 'Dirección de Acreditación del INACAL', d: 'Autoridad nacional competente en Perú para acreditar Organismos de Evaluación de la Conformidad, incluidos los OCSG. Es signataria de acuerdos de reconocimiento internacional.', col: 'esg' },
  { n: 'OCSG', t: 'Organismo de Certificación de Sistemas de Gestión', d: 'Audita y certifica a la organización. Debe cumplir NTP-ISO/IEC 17021-1. Un OCSG no puede consultar y certificar a la misma organización.', col: 'acc' },
  { n: 'Empresa', t: 'La organización certificada', d: 'Recibe el certificado con el logo del organismo y, si corresponde, el símbolo de acreditación.', col: '9001' }
];

/* ------------------------------------------------------------------
   Proveedores de formación con presencia en Perú
   ------------------------------------------------------------------ */
export const PROVEEDORES = [
  {
    n: 'Bureau Veritas Perú — Capacitaciones',
    url: 'https://capacitaciones.bureauveritas.com.pe/',
    tipo: 'Organismo certificador con brazo de formación',
    of: 'Programa de Especialización en SIG, cursos por norma, auditor líder ISO 9001 con certificación internacional CQI/IRCA, formación de auditor líder ISO 37001/37301, implementador líder PECB ISO 37001.',
    precio: 'Curso de auditor líder ISO 9001 (40 h, PR328): S/ 3 000 referencial. Implementador Líder PECB ISO 37001: S/ 3 000 referencial.',
    nota: 'Es el proveedor del programa que estás evaluando.'
  },
  {
    n: 'SGS Academy Perú',
    url: 'https://sgsacademy.pe/',
    tipo: 'Organismo certificador con brazo de formación',
    of: 'Auditor Líder IRCA ISO 9001, ISO 14001 e ISO 45001; Diplomado en Sistemas Integrados de Gestión.',
    precio: 'Consultar. Los cursos IRCA de 40 h se mueven en el mismo rango de mercado.',
    nota: 'Amplia oferta de cursos certificados por CQI e IRCA.'
  },
  {
    n: 'TÜV Rheinland',
    url: 'https://academia-es.tuv.com/certificacion-de-personas/certificacion-acreditada-de-personas/acreditaciones-cqi-irca',
    tipo: 'Organismo certificador internacional',
    of: 'Cursos acreditados CQI/IRCA en las tres normas principales.',
    precio: 'Consultar por región.',
    nota: 'Reconocimiento internacional sólido, especialmente en industria y automoción.'
  },
  {
    n: 'GESTOP Perú',
    url: 'https://gestop.pe/cursos-auditor-lider/auditor-lider-iso-9001-irca/',
    tipo: 'Socio comercial de proveedor certificado',
    of: 'Cursos CQI-IRCA gestionados como socio de GLOBAL PCS.',
    precio: 'Consultar. Suele posicionarse por debajo de los organismos certificadores.',
    nota: 'El certificado permite cumplir el requisito formativo para el posterior registro como auditor líder CQI-IRCA.'
  },
  {
    n: 'CTIC / FIA — universidades peruanas',
    url: 'https://www.ctic.uni.edu.pe/',
    tipo: 'Formación académica de especialización',
    of: 'Cursos y programas de especialización en Sistemas Integrados de Gestión con certificación universitaria.',
    precio: 'Generalmente por debajo de los organismos certificadores.',
    nota: 'Certificación universitaria: excelente para conocimiento, no equivale a un registro de auditor internacional.'
  }
];

/* ------------------------------------------------------------------
   Esquemas de registro de auditores
   ------------------------------------------------------------------ */
export const ESQUEMAS = [
  {
    n: 'CQI / IRCA',
    org: 'Chartered Quality Institute — International Register of Certificated Auditors (Reino Unido)',
    normas: 'ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000 y otras',
    curso: 'Lead Auditor de 40 horas (5 días) con examen y evaluación continua.',
    grados: 'Auditor Interno → Auditor Provisional → Auditor → Auditor Líder → Auditor Principal',
    requisito: 'El curso satisface el <strong>requisito formativo</strong>. El registro exige además formación académica, experiencia laboral y un número mínimo de auditorías completas registradas.',
    peru: 'Disponible a través de Bureau Veritas, SGS, TÜV y socios comerciales locales.',
    ojo: 'Aprobar el curso <strong>no otorga automáticamente</strong> la certificación IRCA. Es el error de expectativa más común.'
  },
  {
    n: 'Exemplar Global',
    org: 'Exemplar Global (Australia), antes RABQSA',
    normas: 'Amplia cobertura en calidad, ambiente, SST y seguridad de la información',
    curso: 'Cursos con esquema de competencias por unidades (AU, QM, EM, OH).',
    grados: 'Certificación por unidades de competencia acumulables',
    requisito: 'Modelo basado en competencias verificables más que en horas de curso.',
    peru: 'Menor presencia local que IRCA; disponible en modalidad remota.',
    ojo: 'Muy valorado en mercados de Asia-Pacífico y Norteamérica.'
  },
  {
    n: 'PECB',
    org: 'Professional Evaluation and Certification Board (Canadá)',
    normas: 'ISO 37001, ISO 27001, ISO 22301, ISO 9001, ISO 14001, ISO 45001',
    curso: 'Foundation → Implementer → Lead Implementer → Lead Auditor.',
    grados: 'Provisional → Certificado → Lead → Senior Lead, según experiencia acreditada',
    requisito: 'Examen propio más solicitud de certificación con evidencia de experiencia profesional.',
    peru: 'Disponible a través de Bureau Veritas y otros socios.',
    ojo: 'Es la ruta más frecuente para <strong>ISO 37001 antisoborno</strong>, donde IRCA tiene menor cobertura.'
  }
];

/* ------------------------------------------------------------------
   Precios referenciales de mercado — Perú, agosto 2026
   ------------------------------------------------------------------ */
export const PRECIOS = [
  ['Curso corto por norma (interpretación, 8-16 h)', 'S/ 300 – S/ 800', 'Online en vivo', 'Base conceptual'],
  ['Auditor interno de una norma (16-24 h)', 'S/ 500 – S/ 1 200', 'Online / presencial', 'Habilita auditorías internas'],
  ['Programa de especialización en SIG (60-90 h)', 'S/ 1 500 – S/ 3 500', 'Online en vivo', 'Visión integrada completa'],
  ['Auditor Líder CQI/IRCA (40 h)', 'S/ 2 500 – S/ 3 500', 'Presencial / online sincrónico', 'Requisito formativo para registro internacional'],
  ['Implementador Líder PECB ISO 37001', '≈ S/ 3 000', 'Online en vivo', 'Ruta antisoborno'],
  ['Diplomado universitario en SIG (120-200 h)', 'S/ 2 000 – S/ 5 000', 'Semipresencial', 'Peso académico y grado'],
  ['Certificación de la organización — PYME, 1 norma', 'US$ 3 000 – US$ 6 000', 'Ciclo de 3 años', 'Incluye Etapa 1 + Etapa 2'],
  ['Certificación integrada 3 normas — empresa mediana', 'US$ 8 000 – US$ 18 000', 'Ciclo de 3 años', 'La auditoría combinada reduce días-auditor'],
  ['Auditoría de seguimiento anual', '30 % – 40 % del costo inicial', 'Anual', 'Obligatoria para mantener vigencia'],
  ['Consultoría de implementación', 'US$ 6 000 – US$ 30 000', '9-15 meses', 'Varía enormemente con el alcance']
];

export const AHORRO_INTEGRACION = [
  ['Días-auditor de certificación', 'Reducción del 20 % al 30 % frente a tres auditorías separadas, por aplicación de las reglas de auditoría combinada del IAF.'],
  ['Documentación', 'Un solo procedimiento de control documental, de auditoría interna, de no conformidades y de competencia en lugar de tres o cuatro.'],
  ['Tiempo de gestión interna', 'Una revisión por la dirección al año en lugar de tres; un programa de auditoría en lugar de tres.'],
  ['Costo de formación', 'Auditores internos formados una vez en el sistema integrado en lugar de tres cursos separados.'],
  ['Costo oculto que sí aumenta', 'La complejidad del diseño inicial. Integrar mal es más caro que no integrar: exige un consultor con dominio real de las cuatro normas.']
];

/* ------------------------------------------------------------------
   Checklist de decisión antes de matricularse
   ------------------------------------------------------------------ */
export const CHECKLIST_CURSO = [
  '¿El certificado que recibiré dice «asistencia», «aprobación» o «certificación»? No son lo mismo.',
  '¿El curso está acreditado por CQI/IRCA, Exemplar Global o PECB, o es certificación propia del proveedor?',
  '¿Cuántas horas efectivas son y cuántas de esas son práctica, no exposición?',
  '¿Hay examen final y con qué nota mínima? Un curso sin examen no acredita competencia.',
  '¿El docente es auditor en ejercicio o formador a tiempo completo? Pide su perfil.',
  '¿Incluye casos prácticos con documentos reales o solo lectura de la norma?',
  '¿Me entregan las normas o debo comprarlas aparte? (INACAL vende las NTP; ISO vende las originales.)',
  '¿El certificado tiene vigencia o caduca? Los esquemas internacionales exigen recertificación periódica.',
  '¿Qué necesito realmente: conocimiento (curso corto), habilitación interna (auditor interno) o carrera de auditor (IRCA)?',
  '¿El precio incluye IGV? Muchas cotizaciones de formación se publican sin impuesto.'
];

/* ------------------------------------------------------------------
   Fuentes oficiales
   ------------------------------------------------------------------ */
export const FUENTES = [
  { g: 'El programa evaluado', items: [
    ['Programa de Especialización en Sistemas Integrados de Gestión', 'Página oficial del programa en Bureau Veritas Perú', 'https://capacitaciones.bureauveritas.com.pe/online/programa-de-especializacion-en-sistemas-integrados-de-gestion'],
    ['Implementación en Sistemas Integrados de Gestión', 'Curso relacionado del mismo proveedor', 'https://capacitaciones.bureauveritas.com.pe/online/implementacion-en-sistemas-integrados-de-gestion'],
    ['Catálogo completo de cursos', 'Oferta formativa de Bureau Veritas Perú', 'https://capacitaciones.bureauveritas.com.pe/cursos'],
    ['Certificación Internacional de Auditor Líder ISO 9001 (PR328)', 'Ruta CQI/IRCA con el mismo proveedor', 'https://capacitaciones.bureauveritas.com.pe/online/certificacion-internacional-de-auditor-lider-iso-90012015-pr328']
  ]},
  { g: 'Normas y normalización', items: [
    ['ISO — Organización Internacional de Normalización', 'Texto oficial de las normas y estado de las revisiones', 'https://www.iso.org/'],
    ['INACAL — Instituto Nacional de Calidad', 'Normas Técnicas Peruanas y autoridad nacional de la calidad', 'https://www.gob.pe/inacal'],
    ['INACAL — Dirección de Acreditación', 'Cómo obtener la acreditación y criterios aplicables', 'https://www.inacal.gob.pe/acreditacion'],
    ['INACAL — Organismos de Certificación de Sistemas de Gestión acreditados', 'Verifica aquí si tu certificador está acreditado', 'https://www.inacal.gob.pe/principal/categoria/odcdp'],
    ['INACAL — Directorio de acreditados', 'Listado vigente de organismos acreditados', 'https://www.inacal.gob.pe/acreditacion/categoria/acreditados']
  ]},
  { g: 'Esquemas de certificación de personas', items: [
    ['CQI / IRCA', 'Registro internacional de auditores certificados', 'https://www.quality.org/'],
    ['Exemplar Global', 'Certificación de personas basada en competencias', 'https://exemplarglobal.org/'],
    ['PECB', 'Esquemas Foundation, Implementer y Lead Auditor', 'https://pecb.com/'],
    ['IAF — International Accreditation Forum', 'Acuerdo de reconocimiento multilateral y documentos obligatorios', 'https://iaf.nu/']
  ]},
  { g: 'Marco legal peruano aplicable al SIG', items: [
    ['Ley 29783 — Seguridad y Salud en el Trabajo', 'Norma matriz de SST en Perú', 'https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/243197-29783'],
    ['SUNAFIL', 'Autoridad de fiscalización laboral y de SST', 'https://www.gob.pe/sunafil'],
    ['MINAM — Ministerio del Ambiente', 'Marco de gestión ambiental', 'https://www.gob.pe/minam'],
    ['OEFA — Organismo de Evaluación y Fiscalización Ambiental', 'Fiscalización ambiental y procedimiento sancionador', 'https://www.gob.pe/oefa'],
    ['Ley 30424 — Responsabilidad administrativa de la persona jurídica', 'Base legal peruana del modelo de prevención antisoborno', 'https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/243570-30424']
  ]},
  { g: 'Referencias del proyecto', items: [
    ['Repositorio de referencia — cursoma2026', 'Plataforma hermana de estudio SSOMA', 'https://github.com/oprbguitar/cursoma2026'],
    ['Sistema de diseño de diagramas', 'Base de las reglas gráficas de este sitio', 'https://github.com/cathrynlavery/diagram-design']
  ]}
];
