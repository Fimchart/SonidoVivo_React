// src/data/products.ts

export interface Producto {
  id: number;
  codigo: string;
  titulo: string;
  descripcion: string;
  descripcionLarga?: string;
  especificaciones?: string[];
  precio: number;
  categoria: string;
  imagen: string;
}

export const productosIniciales: Producto[] = [
  // Guitarras Acústicas
  { 
    id: 1, 
    codigo: "GA001", 
    titulo: "Yamaha F310", 
    descripcion: 'Guitarra Acústica Folk. Tapa de abeto, aros y fondo de meranti.', 
    descripcionLarga: "La Yamaha F310 ofrece una calidad extraordinaria a un precio realmente asequible. Su sonido vivo y cálido proviene de una tapa de abeto seleccionada y aros/fondo de meranti. Su cuerpo de tamaño tradicional Dreadnought y su escala ligeramente reducida garantizan una excelente comodidad al tocar.",
    especificaciones: ["Tapa: Abeto macizo", "Aros y Fondo: Meranti", "Mástil: Nato / Caoba", "Diapasón: Palo de rosa (Rosewood)", "Número de Trastes: 20", "Escala: 634 mm (25\")", "Acabado: Brillante natural"],
    precio: 129990, 
    categoria: "Guitarras Acústicas", 
    imagen: "/imagenes/productos/GA001.jpg" 
  },
  { 
    id: 2, 
    codigo: "GA002", 
    titulo: "Fender CD-60S", 
    descripcion: 'Guitarra Acústica Dreadnought. Tapa de abeto macizo, brazo de caoba.', 
    descripcionLarga: "La CD-60S es uno de los modelos más populares de Fender, ideal para músicos que buscan una guitarra acústica con gran resonancia y proyección. Cuenta con tapa de abeto macizo, bordes del diapasón enrollados para máxima comodidad y aros/fondo de caoba.",
    especificaciones: ["Forma del Cuerpo: Dreadnought", "Tapa: Abeto Macizo", "Aros y Fondo: Caoba", "Mástil: Caoba con perfil 'Easy-to-Play'", "Diapasón: Nogal con bordes redondeados", "Trastes: 20 Vintage", "Clavijero: Chrome Die-Cast"],
    precio: 189990, 
    categoria: "Guitarras Acústicas", 
    imagen: "/imagenes/productos/GA002.jpg" 
  },
  { 
    id: 3, 
    codigo: "GA003", 
    titulo: "Yamaha C40", 
    descripcion: 'Guitarra Acústica Clásica 4/4. Nailon, tapa de abeto.', 
    descripcionLarga: "Un estándar de la industria para estudiantes y conservatorios. La Yamaha C40 ofrece un tono clásico excepcionalmente equilibrado gracias a sus cuerdas de nylon de alta calidad y la combinación de madera de abeto en la tapa y meranti en el cuerpo.",
    especificaciones: ["Tipo: Guitarra Clásica Española 4/4", "Tapa: Abeto", "Aros y Fondo: Meranti", "Mástil: Nato", "Diapasón: Palo de rosa", "Cuerdas: Nylon de tensión media", "Ancho de cejuela: 52 mm"],
    precio: 89990, 
    categoria: "Guitarras Acústicas", 
    imagen: "/imagenes/productos/GA003.jpg" 
  },
  { 
    id: 4, 
    codigo: "GA004", 
    titulo: "Takamine GN20CE", 
    descripcion: 'Guitarra Electroacústica. Pickup integrado, afinador incorporado.', 
    descripcionLarga: "Con la elegante forma del cuerpo NEX propia de Takamine, esta electroacústica combina una tapa de cedro macizo con aros y fondo de caoba para producir un tono cálido y detallado. Incluye el preamplificador Takamine TP-4TD con afinador integrado.",
    especificaciones: ["Cuerpo: NEX Cutaway", "Tapa: Cedro Macizo", "Aros y Fondo: Caoba", "Electrónica: Preamplificador Takamine TP-4TD con ecualizador de 3 bandas", "Afinador: Integrado con pantalla digital", "Puente: Pin-less de palisandro"],
    precio: 349990, 
    categoria: "Guitarras Acústicas", 
    imagen: "/imagenes/productos/GA004.jpg" 
  },
  { 
    id: 5, 
    codigo: "GA005", 
    titulo: "Yamaha JR1", 
    descripcion: 'Guitarra 3/4 Niños. Tamaño reducido para niños de 6 a 10 años.', 
    descripcionLarga: "Diseñada a imagen y semejanza de la famosa serie FG de Yamaha, la JR1 es una guitarra compacta de escala 3/4 perfecta para niños pequeños o como guitarra de viaje súper portátil sin sacrificar tono ni afinación.",
    especificaciones: ["Escala: 3/4 (540 mm)", "Tapa: Abeto", "Aros y Fondo: Meranti", "Mástil: Nato", "Diapasón: Palo de rosa", "Incluye: Funda acolchada original Yamaha"],
    precio: 79990, 
    categoria: "Guitarras Acústicas", 
    imagen: "/imagenes/productos/GA005.jpg" 
  },

  // Guitarras Eléctricas
  { 
    id: 6, 
    codigo: "GE001", 
    titulo: "Squier Affinity Strat", 
    descripcion: 'Guitarra Eléctrica Stratocaster. Cuerpo de álamo, mástil de arce.', 
    descripcionLarga: "La Squier Affinity Series Stratocaster ofrece un diseño legendario y el tono definitivo de Fender. Con un cuerpo liviano de álamo, perfil de mástil en 'C' muy cómodo y tres cápsulas Single-Coil que entregan el sonido clásico e inconfundible de la Strat.",
    especificaciones: ["Cuerpo: Álamo", "Mástil: Arce (Maple) atornillado", "Perfil del mástil: 'C' delgado", "Cápsulas: 3 x Ceramic Single-Coil", "Controles: Volumen master, Tono 1, Tono 2, Selector de 5 posiciones", "Puente: Trémolo sincronizado de 2 puntos"],
    precio: 249990, 
    categoria: "Guitarras Eléctricas", 
    imagen: "/imagenes/productos/GE001.jpg" 
  },
  { 
    id: 7, 
    codigo: "GE002", 
    titulo: "Epiphone Les Paul Std", 
    descripcion: 'Guitarra Eléctrica Les Paul. Cuerpo caoba, tapa arce.', 
    descripcionLarga: "La Epiphone Les Paul Standard recrea fielmente el modelo clásico de los años 50. Equipada con un cuerpo de caoba maciza, tapa de arce figurado y un par de potentes pastillas Humbucker Alnico Classic PRO para un sustain infinito.",
    especificaciones: ["Cuerpo: Caoba", "Tapa: Arce figurado", "Mástil: Caoba encolado (Set-neck)", "Perfil: SlimTaper 60s C", "Cápsulas: Epiphone Alnico Classic PRO Humbuckers", "Puente: LockTone Tune-O-Matic con Stopbar"],
    precio: 329990, 
    categoria: "Guitarras Eléctricas", 
    imagen: "/imagenes/productos/GE002.jpg" 
  },
  { 
    id: 8, 
    codigo: "GE003", 
    titulo: "Epiphone SG Standard", 
    descripcion: 'Guitarra Eléctrica SG. Cuerpo caoba, mástil caoba, 2 humbuckers.', 
    descripcionLarga: "La Epiphone SG Standard de la colección 'Inspired by Gibson' recrea la legendaria guitarra de doble cutaway que definió el rock pesado y el hard rock en los 60. Ligera, rápida y extremadamente agresiva.",
    especificaciones: ["Cuerpo: Caoba maciza", "Mástil: Caoba encolado", "Escala: 24.75\"", "Cápsulas: Alnico Classic PRO", "Clavijero: Epiphone Deluxe con botones de tulipán", "Electrónica: Potenciómetros CTS"],
    precio: 319990, 
    categoria: "Guitarras Eléctricas", 
    imagen: "/imagenes/productos/GE003.jpg" 
  },
  { 
    id: 9, 
    codigo: "GE004", 
    titulo: "Squier Affinity Tele", 
    descripcion: 'Guitarra Eléctrica Telecaster. Cuerpo álamo, clavijero vintage.', 
    descripcionLarga: "La clásica Telecaster adaptada para los músicos de hoy. Destaca por su twang característico, cápsulas de cerámica monobobina y su cuerpo ultra cómodo con puente Through-Body para mayor resonancia.",
    especificaciones: ["Cuerpo: Álamo", "Mástil: Arce", "Cápsulas: 2 x Ceramic Single-Coil Tele", "Puente: 6-Saddle String-Through-Body Tele", "Controles: Master Volume, Master Tone, Selector de 3 vías"],
    precio: 239990, 
    categoria: "Guitarras Eléctricas", 
    imagen: "/imagenes/productos/GE004.jpg" 
  },
  { 
    id: 10, 
    codigo: "GE005", 
    titulo: "Epiphone ES-335", 
    descripcion: 'Guitarra Eléctrica Semi-hollow. Semi-hueca, ideal para jazz y blues.', 
    descripcionLarga: "La Epiphone ES-335 es la versión accesible de la histórica guitarra semihueca. Presenta un bloque central de arce para evitar el acople (feedback), tapa de arce laminado y pastillas Alnico Classic PRO de tono suave y esponjoso.",
    especificaciones: ["Cuerpo: Arce laminado Semi-Hollow con bloque central de arce", "Mástil: Caoba", "Cápsulas: Alnico Classic PRO Humbuckers", "Nut: Graph Tech NuBone", "Trastes: 22 Medium Jumbo"],
    precio: 549990, 
    categoria: "Guitarras Eléctricas", 
    imagen: "/imagenes/productos/GE005.jpg" 
  },

  // Bajos Eléctricos
  { 
    id: 11, 
    codigo: "BA001", 
    titulo: "Squier Affinity PJ", 
    descripcion: 'Bajo Eléctrico 4 Cuerdas. Pickup PJ, cuerpo álamo, mástil arce.', 
    descripcionLarga: "El Squier Affinity Series Precision Bass PJ combina el estruendoso golpe de la cápsula de mástil P-Bass con el tono punzante de la cápsula de puente J-Bass, entregando una versatilidad tonal idónea para cualquier género.",
    especificaciones: ["Configuración de Cápsulas: PJ (Precision / Jazz)", "Cuerpo: Álamo", "Mástil: Arce", "Perfil del Mástil: 'C' delgado y cómodo", "Controles: 2 Volúmenes independientes, 1 Tono Master"],
    precio: 299990, 
    categoria: "Bajos", 
    imagen: "/imagenes/productos/BA001.jpg" 
  },
  { 
    id: 12, 
    codigo: "BA002", 
    titulo: "Fender Player Jazz", 
    descripcion: 'Bajo Eléctrico Jazz Bass. Alder body, 2 Alnico V Jazz single-coil.', 
    descripcionLarga: "Con sus dos pastillas de bobina simple y su tacto suave, el Player Jazz Bass es un instrumento inspirador con un estilo clásico y auténtico tono de bajo Fender. Sonido potente, nítido y con gran pegada.",
    especificaciones: ["Cuerpo: Aliso (Alder)", "Mástil: Arce perfil 'Modern C'", "Diapasón: Arce o Pau Ferro con radio de 9.5\"", "Cápsulas: 2 x Player Series Alnico 5 Single-Coil Jazz Bass", "Puente: Estándar de 4 selletas"],
    precio: 699990, 
    categoria: "Bajos", 
    imagen: "/imagenes/productos/BA002.jpg" 
  },
  { 
    id: 13, 
    codigo: "BA003", 
    titulo: "Yamaha APX700II", 
    descripcion: 'Bajo Acústico 4 Cuerdas. Electroacústico, afinador incorporado.', 
    descripcionLarga: "Bajo electroacústico de escala completa y cuerpo delgado. Diseñado para ofrecer una comodidad superior en el escenario y un tono acústico orgánico gracias a su sistema de pastillas piezoeléctricas de alta precisión.",
    especificaciones: ["Tapa: Abeto Macizo", "Aros y Fondo: Nato", "Electrónica: System 64 con afinador y ecualizador de 3 bandas", "Escala: 34\" (Long Scale)", "Diapasón: Palo de rosa"],
    precio: 429990, 
    categoria: "Bajos", 
    imagen: "/imagenes/productos/BA003.jpg" 
  },

  // Baterías
  { 
    id: 14, 
    codigo: "BT001", 
    titulo: "Pearl Roadshow", 
    descripcion: 'Batería Acústica 5 piezas. Incluye stands, platillos y pedal.', 
    descripcionLarga: "El kit perfecto para empezar a tocar inmediatamente. Incluye cascos de álamo de 9 capas (7mm), herrajes de doble pata ultra resistentes, platillos de ensayo, sillín y banquetas.",
    especificaciones: ["Configuración: Bombo 22\", Toms 10\" y 12\", Floor Tom 16\", Caja 14\"", "Material: Álamo de 9 capas (7mm)", "Platillos Incluidos: Hi-Hat 14\" y Crash/Ride 16\"", "Herrajes: Soportes de doble perfil, pedal de bombo y sillín incluidos"],
    precio: 599990, 
    categoria: "Baterías", 
    imagen: "/imagenes/productos/BT001.jpg" 
  },
  { 
    id: 15, 
    codigo: "BT002", 
    titulo: "Roland TD-02KV", 
    descripcion: 'Batería Electrónica 8 pads. Módulo TD-02, 8 pads de goma.', 
    descripcionLarga: "La serie TD-02 te ofrece la experiencia de batería electrónica de nivel de entrada superior del mundo a un precio asequible. Impulsada por décadas de innovación V-Drums con pads de caja de malla súper silenciosos.",
    especificaciones: ["Módulo: TD-02 con 16 kits listos para tocar", "Pad de Caja: Malla PDX-8 de doble zona", "Conectividad: Salida de audífonos, entrada Mix In, USB MIDI", "Funciones de Práctica: 5 funciones de Coach integradas"],
    precio: 799990, 
    categoria: "Baterías", 
    imagen: "/imagenes/productos/BT002.jpg" 
  },
  { 
    id: 16, 
    codigo: "BT003", 
    titulo: "Pearl STE1450", 
    descripcion: 'Caja Snare 14". Acero, 14x5", 10 tensores.', 
    descripcionLarga: "Redoblante de acero inoxidable de 14x5 pulgadas con un sonido cortante, brillante y seco. Excelente para atravesar mezclas en vivo tanto en rock, pop como en funk.",
    especificaciones: ["Medidas: 14\" x 5\"", "Material: Acero cromado (1.0mm)", "Tensores: 10 por lado", "Aros: 1.6mm Steel Hoops"],
    precio: 89990, 
    categoria: "Baterías", 
    imagen: "/imagenes/productos/BT003.jpg" 
  },
  { 
    id: 17, 
    codigo: "BT004", 
    titulo: 'Zildjian A Series 14"', 
    descripcion: 'Platillo Hi-Hat 14". Latón B20, sonido brillante y claro.', 
    descripcionLarga: "Los platillos Zildjian A-Custom Hi-Hats de 14 pulgadas ofrecen un sonido moderno, sofisticado y brillante pero nunca demasiado estridente. Respuesta táctil limpia y definición del baqueteo insuperable.",
    especificaciones: ["Serie: A Custom", "Tipo: Hi-Hat (Pareja)", "Tamaño: 14 pulgadas", "Aleación: Bronce Zildjian B20 secret alloy", "Acabado: Brillante"],
    precio: 149990, 
    categoria: "Baterías", 
    imagen: "/imagenes/productos/BT004.jpg" 
  },
  { 
    id: 18, 
    codigo: "BT005", 
    titulo: 'Zildjian A Series 16"', 
    descripcion: 'Platillo Crash 16". Latón B20, ataque rápido.', 
    descripcionLarga: "Un clásico atemporal. Este crash de 16 pulgadas responde al instante con un ataque veloz y un decay medio perfecto para cualquier acento musical rítmico.",
    especificaciones: ["Serie: A Custom", "Tipo: Crash", "Tamaño: 16 pulgadas", "Aleación: Bronce B20", "Sonido: Brillante / Medio colapso"],
    precio: 129990, 
    categoria: "Baterías", 
    imagen: "/imagenes/productos/BT005.jpg" 
  },

  // Teclados y Pianos
  { 
    id: 19, 
    codigo: "TC001", 
    titulo: "Yamaha PSR-E373", 
    descripcion: 'Teclado Digital 61 teclas. Sensible a la velocidad, 622 voces.', 
    descripcionLarga: "Un teclado portátil dinámico para principiantes y entusiastas. Equipado con una sensibilidad al tacto superior y el generador de tonos LSI de Yamaha que ofrece un repertorio gigante de voces de instrumentos.",
    especificaciones: ["Teclas: 61 sensibles al tacto", "Polifonía: 48 notas", "Voces: 622 sonidos de alta calidad", "Efectos: DSP, Reverb, Chorus, Master EQ", "Lecciones: Sistema de aprendizaje 'Keys to Success'"],
    precio: 249990, 
    categoria: "Teclados", 
    imagen: "/imagenes/productos/TC001.jpg" 
  },
  { 
    id: 20, 
    codigo: "TC002", 
    titulo: "Yamaha P-45", 
    descripcion: 'Piano Digital 88 teclas. Mecanismo Graded Hammer Standard.', 
    descripcionLarga: "El piano digital con contrapeso de 88 teclas más cotizado del mercado. Utiliza la tecnología GHS (Graded Hammer Standard) de Yamaha para simular el peso de los martillos de un piano acústico de cola.",
    especificaciones: ["Teclas: 88 teclas contrapesadas (GHS)", "Muestra de sonido: AWM Stereo Sampling", "Polifonía: 64 notas", "Conexiones: USB to Host, salida de auriculares, entrada de pedal Sustain", "Incluye: Pedal de sustain y atril de partituras"],
    precio: 499990, 
    categoria: "Teclados", 
    imagen: "/imagenes/productos/TC002.jpg" 
  },
  { 
    id: 21, 
    codigo: "TC003", 
    titulo: "Arturia MiniLab MKII", 
    descripcion: 'Sintetizador 49 teclas. Teclas delgadas, 8 pads RGB.', 
    descripcionLarga: "Un controlador MIDI portátil versátil que combina teclas de formato slim sensibles a la velocidad, pads retroiluminados RGB y potenciómetros giratorios para un control total de tu Software DAW.",
    especificaciones: ["Teclas: 25 teclas delgadas sensibles a la velocidad", "Pads: 8 pads retroiluminados RGB ultra sensibles", "Encoders: 16 potenciómetros giratorios", "Software incluido: Analog Lab Lite, Ableton Live Lite, Grand Piano Model D"],
    precio: 129990, 
    categoria: "Teclados", 
    imagen: "/imagenes/productos/TC003.jpg" 
  },
  { 
    id: 22, 
    codigo: "TC004", 
    titulo: "M-Audio Hammer 88", 
    descripcion: 'Teclado MIDI 88 teclas. Teclas contrapesadas de acción martillo.', 
    descripcionLarga: "Controlador USB/MIDI premium para pianistas que buscan la sensación real de un piano de cola combinada con el flujo de trabajo del estudio digital moderno.",
    especificaciones: ["Teclas: 88 teclas contrapesadas con acción martillo", "Controles: Ruedas de Pitch Bend y Modulación, fader de volumen master", "Entradas de pedal: Sustain, Expression y Soft", "Alimentación: Vía USB o adaptador de corriente"],
    precio: 399990, 
    categoria: "Teclados", 
    imagen: "/imagenes/productos/TC004.jpg" 
  },

  // Amplificadores
  { 
    id: 23, 
    codigo: "AM001", 
    titulo: "Fender Frontman 15G", 
    descripcion: 'Amplificador Guitarra 15W. 2 canales, ecualizador de 3 bandas.', 
    descripcionLarga: "Amplificador de práctica ideal con el tono limpio característico de Fender y un circuito de overdrive seleccionable para riffs distorsionados con mucho cuerpo.",
    especificaciones: ["Potencia: 15 Watts RMS", "Altavoz: 1 x 8\" Fender Special Design", "Canales: 2 (Normal y Drive)", "Ecualización: Treble, Middle, Bass", "Salida: Auriculares con emulación de gabinete"],
    precio: 99990, 
    categoria: "Amplificadores", 
    imagen: "/imagenes/productos/AM001.jpg" 
  },
  { 
    id: 24, 
    codigo: "AM002", 
    titulo: "Marshall MG40GFX", 
    descripcion: 'Amplificador Guitarra 40W. Efectos digitales integrados.', 
    descripcionLarga: "Potente amplificador para ensayo y directo con el icónico tono Marshall. Incluye 4 canales programables y una suite completa de efectos digitales (Reverb, Delay, Chorus, Flanger, Phaser).",
    especificaciones: ["Potencia: 40 Watts RMS", "Altavoz: 1 x 10\" personalizado", "Canales: Clean, Crunch, OD1, OD2", "Efectos: Reverb de estudio, Chorus, Phaser, Flanger, Delay analógico/digital"],
    precio: 299990, 
    categoria: "Amplificadores", 
    imagen: "/imagenes/productos/AM002.jpg" 
  },
  { 
    id: 25, 
    codigo: "AM003", 
    titulo: "Hartke HD100", 
    descripcion: 'Amplificador Bajo 100W. Altavoz HyDrive de 15 pulgadas.', 
    descripcionLarga: "Equipado con la galardonada tecnología de altavoces HyDrive de Hartke (cono híbrido de aluminio y papel). Proporciona bajos profundos y punch contundente en frecuencias medias.",
    especificaciones: ["Potencia: 100 Watts", "Altavoz: 15\" HyDrive con imán de neodimio", "Ecualizador: Gráfico de 7 bandas", "Limitador: Circuito de protección integrado"],
    precio: 449990, 
    categoria: "Amplificadores", 
    imagen: "/imagenes/productos/AM003.jpg" 
  },
  { 
    id: 26, 
    codigo: "AM004", 
    titulo: "Fishman Loudbox Mini", 
    descripcion: 'Amplificador Acústico 40W. Micrófono y guitarra, Bluetooth.', 
    descripcionLarga: "El estándar de la industria para amplificación de instrumentos acústicos. Ofrece 40 vatios de potencia transparente con dos canales independientes para guitarra e instrumento vocal con conectividad Bluetooth.",
    especificaciones: ["Potencia: 40 Watts con Master Volume", "Canales: Canal 1 para instrumento (jack 1/4\"), Canal 2 para micrófono (XLR)", "Efectos: Digital Reverb y Chorus", "Conectividad: Bluetooth 4.0 y salida D.I. XLR balanceada"],
    precio: 499990, 
    categoria: "Amplificadores", 
    imagen: "/imagenes/productos/AM004.jpg" 
  },

  // Micrófonos
  { 
    id: 27, 
    codigo: "MI001", 
    titulo: "Shure SM58", 
    descripcion: 'Micrófono Dinámico Cardioide. Patrón polar cardioide.', 
    descripcionLarga: "El micrófono vocal más famoso y legendario del planeta. Diseñado para actuaciones en vivo, el SM58 aísla la voz principal y elimina el ruido ambiental de fondo gracias a su filtro esférico integrado.",
    especificaciones: ["Tipo: Dinámico", "Patrón Polar: Cardioide", "Respuesta de frecuencia: 50 a 15,000 Hz", "Estructura: Metal indestructible a prueba de golpes"],
    precio: 149990, 
    categoria: "Micrófonos", 
    imagen: "/imagenes/productos/MI001.jpg" 
  },
  { 
    id: 28, 
    codigo: "MI002", 
    titulo: "Shure SM57", 
    descripcion: 'Micrófono Dinámico Instrumento. Respuesta para instrumentos.', 
    descripcionLarga: "Insuperable para la microfonía de tambores, cajas de batería, amplificadores de guitarra eléctrica e instrumentos de viento. Soporta altos niveles de presión sonora SPL sin distorsionar.",
    especificaciones: ["Tipo: Dinámico", "Patrón Polar: Cardioide", "Uso Recomendado: Redoblantes, amplificadores de guitarra y metales", "Conector: XLR de 3 pines"],
    precio: 139990, 
    categoria: "Micrófonos", 
    imagen: "/imagenes/productos/MI002.jpg" 
  },
  { 
    id: 29, 
    codigo: "MI003", 
    titulo: "Audio-Tech. AT2020", 
    descripcion: 'Micrófono Condensador de estudio.', 
    descripcionLarga: "Micrófono de condensador de diafragma grande ideal para home studios. Ofrece un rango dinámico excepcionalmente amplio y capacidad para manejar altos niveles de SPL con total claridad.",
    especificaciones: ["Elemento: Condensador con placa trasera de carga fija", "Patrón Polar: Cardioide", "Respuesta en Frecuencia: 20-20,000 Hz", "Requiere: Phantom Power +48V"],
    precio: 199990, 
    categoria: "Micrófonos", 
    imagen: "/imagenes/productos/MI003.jpg" 
  },
  { 
    id: 30, 
    codigo: "MI004", 
    titulo: "Blue Yeti", 
    descripcion: 'Micrófono USB de Condensador. Múltiples patrones polares.', 
    descripcionLarga: "El micrófono USB número uno para podcasters, streamers y creadores de contenido. Presenta un arreglo exclusivo de 3 cápsulas con 4 patrones de captación seleccionables (Estéreo, Cardioide, Omnidireccional, Bidireccional).",
    especificaciones: ["Conexión: USB Plug and Play", "Patrones Polares: Cardioide, Bidireccional, Omnidireccional, Estéreo", "Salida de Audífonos: 3.5mm con latencia cero", "Controles: Ganancia, Mute, Volumen de auricular"],
    precio: 299990, 
    categoria: "Micrófonos", 
    imagen: "/imagenes/productos/MI004.jpg" 
  },

  // Pedales de Efectos
  { 
    id: 31, 
    codigo: "PE001", 
    titulo: "Boss DS-1", 
    descripcion: 'Pedal Distorsión analógica clásica para guitarra.', 
    descripcionLarga: "El pedal de distorsión más vendido de la historia de BOSS. Proporciona un tono de distorsión cortante para guitarra y teclados, reproduciendo fielmente todos los matices de tu interpretación.",
    especificaciones: ["Circuito: Analógico", "Controles: Tone, Level, Distortion", "Alimentación: Batería de 9V o adaptador de corriente DC 9V", "Carcasa: Metal ultra resistente BOSS"],
    precio: 79990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE001.jpg" 
  },
  { 
    id: 32, 
    codigo: "PE002", 
    titulo: "Boss RV-6", 
    descripcion: 'Pedal Reverb. Procesamiento DSP con 8 modos.', 
    descripcionLarga: "Combinando sonido de alta definición y versatilidad de vanguardia, el RV-6 pone la reverberación de estudio en un formato compacto. Modos que van desde salas clásicas hasta sonidos modernos Shimmer.",
    especificaciones: ["Modos: Hall, Plate, Room, Spring, Modulate, Dynamic, Shimmer, Delay", "Entradas/Salidas: Estéreo completas", "Procesamiento: DSP avanzado BOSS de 32 bits"],
    precio: 179990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE002.jpg" 
  },
  { 
    id: 33, 
    codigo: "PE003", 
    titulo: "Boss ME-80", 
    descripcion: 'Pedal Multi-efectos. Simulación de amplificadores COSM.', 
    descripcionLarga: "Procesador de guitarra multiefectos impulsado por footswitches de acceso directo. Ofrece modelado de amplificadores COSM derivados de la pedalera flagship GT-100.",
    especificaciones: ["Efectos: Overdrive, Delay, Reverb, Modulación, Wah, Compresor", "Pedal de Expresión: Integrado", "Interfaz de Audio: USB integrada para grabación direct-to-DAW"],
    precio: 349990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE003.jpg" 
  },
  { 
    id: 34, 
    codigo: "PE004", 
    titulo: "Boss TU-3", 
    descripcion: 'Pedal Tuner Cromático ultra preciso.', 
    descripcionLarga: "El afinador de escenario estándar de la industria en formato pedal. Cuenta con un medidor LED de 21 segmentos con un modo de alto brillo para visibilidad óptima bajo la luz del sol al aire libre.",
    especificaciones: ["Rango de afinación: C0 (16.35Hz) a C8 (4,186Hz)", "Precisión: +/- 1 centésima", "Pantalla: LED de 21 segmentos con modo High Brightness"],
    precio: 89990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE004.jpg" 
  },
  { 
    id: 35, 
    codigo: "PE005", 
    titulo: "MXR Carbon Copy", 
    descripcion: 'Pedal Delay analógico con circuito BBD.', 
    descripcionLarga: "Pedal de delay 100% analógico impulsado por tecnología de brigada de cubos (Bucket-Brigade). Entrega repeticiones cálidas y orgánicas con hasta 600ms de tiempo de retardo.",
    especificaciones: ["Tecnología: Analógica BBD", "Tiempo de Delay: De 20ms a 600ms", "Switch de Modulación: Añade vibrato/chorus a las repeticiones", "Bypass: True Hardwire Bypass"],
    precio: 179990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE005.jpg" 
  },
  { 
    id: 36, 
    codigo: "PE006", 
    titulo: "Ibanez TS9", 
    descripcion: 'El legendario pedal Overdrive Tube Screamer.', 
    descripcionLarga: "Revisión exacta del legendario pedal de Overdrive. Destaca por su icónico empuje en frecuencias medias que hace resaltar a la guitarra eléctrica en cualquier mezcla de banda.",
    especificaciones: ["Circuito: Analógico legendario JRC4558D", "Controles: Drive, Tone, Level", "Uso: Overdrive principal o Booster para amplificadores a tubos"],
    precio: 99990, 
    categoria: "Pedales", 
    imagen: "/imagenes/productos/PE006.jpg" 
  },

  // Accesorios
  { 
    id: 37, 
    codigo: "AC001", 
    titulo: "Ernie Ball Super Slinky", 
    descripcion: 'Cuerdas Guitarra Eléctrica 09-42. Níquel entorchado.', 
    descripcionLarga: "Las cuerdas de guitarra eléctrica más populares del mundo. Fabricadas con alambre de acero niquelado envuelto alrededor de un núcleo de acero hexagonal.",
    especificaciones: ["Calibres: .009, .011, .016, .024w, .032, .042", "Material: Acero niquelado", "Origen: Hecho en Coachella, EE.UU."],
    precio: 8990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC001.jpg" 
  },
  { 
    id: 38, 
    codigo: "AC002", 
    titulo: "Ernie Ball Earthwood", 
    descripcion: 'Cuerdas Guitarra Acústica 12-53. Bronce 80/20.', 
    descripcionLarga: "Cuerdas para guitarra acústica de bronce 80/20 que brindan un sonido claro, brillante y lleno de armónicos resonantes.",
    especificaciones: ["Calibres: .012, .016, .024w, .032, .044, .053", "Composición: 80% Cobre, 20% Zinc"],
    precio: 10990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC002.jpg" 
  },
  { 
    id: 39, 
    codigo: "AC003", 
    titulo: "Ernie Ball Regular Slinky", 
    descripcion: 'Cuerdas Bajo 45-105. Entorchado redondo.', 
    descripcionLarga: "Cuerdas para bajo de 4 cuerdas de la serie Slinky Bass. Entregan agudos definidos y graves profundos con máxima durabilidad.",
    especificaciones: ["Calibres: .045, .065, .080, .105", "Tipo: Roundwound (Entorchado redondo)"],
    precio: 14990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC003.jpg" 
  },
  { 
    id: 40, 
    codigo: "AC004", 
    titulo: "Fender 351 (x12)", 
    descripcion: 'Púas de Guitarra x12 (0.73mm) de celuloide.', 
    descripcionLarga: "Pack de 12 uñetas Fender tradicionales de celuloide. Proporcionan un ataque suave y una flexibilidad media ideal para rasgueos.",
    especificaciones: ["Grosor: Medium (0.73mm)", "Cantidad: 12 unidades", "Material: Celuloide Premium"],
    precio: 4990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC004.jpg" 
  },
  { 
    id: 41, 
    codigo: "AC005", 
    titulo: "Dunlop Trigger", 
    descripcion: 'Capotraste Guitarra en aluminio de aviación.', 
    descripcionLarga: "Capotasto con mecanismo de muelle para cambio rápido con una sola mano. Acolchado protector que no daña el acabado del mástil.",
    especificaciones: ["Material: Aluminio de grado aeronáutico", "Compatibilidad: Guitarras acústicas y eléctricas de diapasón curvo"],
    precio: 12990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC005.jpg" 
  },
  { 
    id: 42, 
    codigo: "AC006", 
    titulo: "Snark SN-5", 
    descripcion: 'Afinador de Clip con pantalla giratoria.', 
    descripcionLarga: "Afinador de pinza para pala de guitarra, bajo y violín. Pantalla a color giratoria en 360 grados de lectura ultrarrápida.",
    especificaciones: ["Sensor: Transductor de vibración de alta frecuencia", "Pantalla: LCD a color rotativa 360°"],
    precio: 8990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC006.jpg" 
  },
  { 
    id: 43, 
    codigo: "AC007", 
    titulo: "Monster S100-I-3", 
    descripcion: 'Cable Instrumento 3m blindado.', 
    descripcionLarga: "Cable profesional de 3 metros para instrumento con conectores Plug de 1/4\" rectos y blindaje trenzado para rechazo absoluto de ruidos e interferencias.",
    especificaciones: ["Largo: 3 Metros (10 ft)", "Conectores: Jack 1/4\" Mono a Jack 1/4\" Mono", "Blindaje: 90% cobre trenzado"],
    precio: 12990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC007.jpg" 
  },
  { 
    id: 44, 
    codigo: "AC008", 
    titulo: "Monster S100-I-6", 
    descripcion: 'Cable Instrumento 6m blindado.', 
    descripcionLarga: "Versión de 6 metros del afamado cable Monster S100, diseñado para músicos de escenario que requieren movilidad libre sin degradar la señal de audio.",
    especificaciones: ["Largo: 6 Metros (20 ft)", "Conectores: Jack 1/4\" metálicos de alta durabilidad"],
    precio: 17990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC008.jpg" 
  },
  { 
    id: 45, 
    codigo: "AC009", 
    titulo: "Hercules GS302B", 
    descripcion: 'Soporte Guitarra de Piso plegable.', 
    descripcionLarga: "Soporte de piso compacto para guitarra eléctrica o bajo. Su diseño ultra liviano permite plegarlo plano para transportarlo en cualquier funda.",
    especificaciones: ["Capacidad: 1 instrumento (Eléctrica/Bajo)", "Acolchado: Espuma de formulación especial (SFF) segura para acabados delicados"],
    precio: 22990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC009.jpg" 
  },
  { 
    id: 46, 
    codigo: "AC010", 
    titulo: "Hercules WAH-202", 
    descripcion: 'Soporte Guitarra de Pared base madera.', 
    descripcionLarga: "Soporte de pared colgante con sistema Auto-Swivel y base de madera maciza para exhibir tus instrumentos de forma elegante y segura.",
    especificaciones: ["Sistema: Auto-Grip (AGS) que bloquea el instrumento automáticamente al colgarlo", "Base: Madera noble barnizada"],
    precio: 18990, 
    categoria: "Accesorios", 
    imagen: "/imagenes/productos/AC010.jpg" 
  },

  // Estudio y Grabación
  { 
    id: 47, 
    codigo: "ES001", 
    titulo: "Focusrite Scarlett Solo", 
    descripcion: 'Interfaz de Audio 2x2 USB con preamp Scarlett.', 
    descripcionLarga: "La interfaz de audio USB de 2 entradas y 2 salidas más popular para cantautores. Cuenta con un preamplificador Scarlett de 3ª Generación con modo 'Air' conmutable.",
    especificaciones: ["Entradas: 1 x XLR Mic, 1 x 1/4\" Instrumento/Línea", "Conversión: 24 bits / 192 kHz", "Alimentación: Vía bus USB-C"],
    precio: 149990, 
    categoria: "Estudio", 
    imagen: "/imagenes/productos/ES001.jpg" 
  },
  { 
    id: 48, 
    codigo: "ES002", 
    titulo: "Audio-Tech. ATH-M20x", 
    descripcion: 'Auriculares de Estudio. Drivers de 40mm.', 
    descripcionLarga: "Audífonos de monitoreo profesional para estudio. Una introducción ideal a la aclamada línea M-Series de Audio-Technica.",
    especificaciones: ["Drivers: 40mm con imanes de neodimio", "Diseño: Circumaural cerrado para aislamiento de ruido", "Respuesta de frecuencia: 15 - 20,000 Hz"],
    precio: 79990, 
    categoria: "Estudio", 
    imagen: "/imagenes/productos/ES002.jpg" 
  },
  { 
    id: 49, 
    codigo: "ES003", 
    titulo: "Audio-Tech. ATH-M50x", 
    descripcion: 'Auriculares de Estudio Pro respuesta extendida.', 
    descripcionLarga: "Audífonos profesionales de monitoreo elogiados por los mejores ingenieros de audio e ingenieros de mezcla del mundo.",
    especificaciones: ["Drivers: 45mm de gran apertura", "Auriculares: Giratorios 90° para monitoreo con una sola oreja", "Cables incluidos: 3 cables desmontables (espiral y rectos)"],
    precio: 219990, 
    categoria: "Estudio", 
    imagen: "/imagenes/productos/ES003.jpg" 
  },
  { 
    id: 50, 
    codigo: "ES004", 
    titulo: "Yamaha HS5", 
    descripcion: 'Monitor de Estudio 5" bi-amplificado 70W.', 
    descripcionLarga: "Monitor de estudio activo de 2 vías con cono de 5 pulgadas. Famoso por su respuesta plana y precisa para mezclas profesionales sin coloración de sonido.",
    especificaciones: ["Potencia: 70W Bi-amplificado (LF 45W + HF 25W)", "Respuesta de frecuencia: 54Hz - 30kHz", "Entradas: XLR y TRS de 1/4\" balanceadas"],
    precio: 349990, 
    categoria: "Estudio", 
    imagen: "/imagenes/productos/ES004.jpg" 
  },
  { 
    id: 51, 
    codigo: "ES005", 
    titulo: "Sennheiser MZP 40", 
    descripcion: 'Pop Filter para Micrófono con brazo flexible.', 
    descripcionLarga: "Filtro anti-pop profesional con malla doble para atenuar plosivas (sonidos 'P' y 'B') al grabar voces en estudio.",
    especificaciones: ["Diámetro: 130mm (5.1\")", "Brazo: Cuello de cisne flexible de 35cm con abrazadera universal para soporte de micrófono"],
    precio: 149990, 
    categoria: "Estudio", 
    imagen: "/imagenes/productos/ES005.jpg" 
  }
];