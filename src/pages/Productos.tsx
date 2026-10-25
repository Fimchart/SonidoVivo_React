import CardProducto from "../components/molecules/CardProducto";

// BASE DE DATOS COMPLETA DE SONIDO VIVO (51 PRODUCTOS)
const listaProductos = [
  // Guitarras Acústicas
  { id: 1, codigo: "GA001", titulo: "Yamaha F310", descripcion: 'Guitarra Acústica Folk. Tapa de abeto, aros y fondo de meranti.', precio: 129990 },
  { id: 2, codigo: "GA002", titulo: "Fender CD-60S", descripcion: 'Guitarra Acústica Dreadnought. Tapa de abeto macizo, brazo de caoba.', precio: 189990 },
  { id: 3, codigo: "GA003", titulo: "Yamaha C40", descripcion: 'Guitarra Acústica Clásica 4/4. Nailon, tapa de abeto.', precio: 89990 },
  { id: 4, codigo: "GA004", titulo: "Takamine GN20CE", descripcion: 'Guitarra Electroacústica. Pickup integrado, afinador incorporado.', precio: 349990 },
  { id: 5, codigo: "GA005", titulo: "Yamaha JR1", descripcion: 'Guitarra 3/4 Niños. Tamaño reducido para niños de 6 a 10 años.', precio: 79990 },

  // Guitarras Eléctricas
  { id: 6, codigo: "GE001", titulo: "Squier Affinity Strat", descripcion: 'Guitarra Eléctrica Stratocaster. Cuerpo de álamo, mástil de arce.', precio: 249990 },
  { id: 7, codigo: "GE002", titulo: "Epiphone Les Paul Std", descripcion: 'Guitarra Eléctrica Les Paul. Cuerpo caoba, tapa arce.', precio: 329990 },
  { id: 8, codigo: "GE003", titulo: "Epiphone SG Standard", descripcion: 'Guitarra Eléctrica SG. Cuerpo caoba, mástil caoba, 2 humbuckers.', precio: 319990 },
  { id: 9, codigo: "GE004", titulo: "Squier Affinity Tele", descripcion: 'Guitarra Eléctrica Telecaster. Cuerpo álamo, clavijero vintage.', precio: 239990 },
  { id: 10, codigo: "GE005", titulo: "Epiphone ES-335", descripcion: 'Guitarra Eléctrica Semi-hollow. Semi-hueca, ideal para jazz y blues.', precio: 549990 },

  // Bajos Eléctricos
  { id: 11, codigo: "BA001", titulo: "Squier Affinity PJ", descripcion: 'Bajo Eléctrico 4 Cuerdas. Pickup PJ, cuerpo álamo, mástil arce.', precio: 299990 },
  { id: 12, codigo: "BA002", titulo: "Fender Player Jazz", descripcion: 'Bajo Eléctrico Jazz Bass. Alder body, 2 Alnico V Jazz single-coil.', precio: 699990 },
  { id: 13, codigo: "BA003", titulo: "Yamaha APX700II", descripcion: 'Bajo Acústico 4 Cuerdas. Electroacústico, afinador incorporado.', precio: 429990 },

  // Baterías
  { id: 14, codigo: "BT001", titulo: "Pearl Roadshow", descripcion: 'Batería Acústica 5 piezas. Incluye stands, platillos y pedal.', precio: 599990 },
  { id: 15, codigo: "BT002", titulo: "Roland TD-02KV", descripcion: 'Batería Electrónica 8 pads. Módulo TD-02, 8 pads de goma.', precio: 799990 },
  { id: 16, codigo: "BT003", titulo: "Pearl STE1450", descripcion: 'Caja Snare 14". Acero, 14x5", 10 tensores.', precio: 89990 },
  { id: 17, codigo: "BT004", titulo: 'Zildjian A Series 14"', descripcion: 'Platillo Hi-Hat 14". Latón B20, sonido brillante y claro.', precio: 149990 },
  { id: 18, codigo: "BT005", titulo: 'Zildjian A Series 16"', descripcion: 'Platillo Crash 16". Latón B20, ataque rápido.', precio: 129990 },

  // Teclados y Pianos
  { id: 19, codigo: "TC001", titulo: "Yamaha PSR-E373", descripcion: 'Teclado Digital 61 teclas. Sensible a la velocidad, 622 voces.', precio: 249990 },
  { id: 20, codigo: "TC002", titulo: "Yamaha P-45", descripcion: 'Piano Digital 88 teclas. Mecanismo Graded Hammer Standard.', precio: 499990 },
  { id: 21, codigo: "TC003", titulo: "Arturia MiniLab MKII", descripcion: 'Sintetizador 49 teclas. Teclas delgadas, 8 pads RGB.', precio: 129990 },
  { id: 22, codigo: "TC004", titulo: "M-Audio Hammer 88", descripcion: 'Teclado MIDI 88 teclas. Teclas contrapesadas de acción martillo.', precio: 399990 },

  // Amplificadores
  { id: 23, codigo: "AM001", titulo: "Fender Frontman 15G", descripcion: 'Amplificador Guitarra 15W. 2 canales, ecualizador de 3 bandas.', precio: 99990 },
  { id: 24, codigo: "AM002", titulo: "Marshall MG40GFX", descripcion: 'Amplificador Guitarra 40W. Efectos digitales integrados.', precio: 299990 },
  { id: 25, codigo: "AM003", titulo: "Hartke HD100", descripcion: 'Amplificador Bajo 100W. Altavoz HyDrive de 15 pulgadas.', precio: 449990 },
  { id: 26, codigo: "AM004", titulo: "Fishman Loudbox Mini", descripcion: 'Amplificador Acústico 40W. Micrófono y guitarra, Bluetooth.', precio: 499990 },

  // Micrófonos
  { id: 27, codigo: "MI001", titulo: "Shure SM58", descripcion: 'Micrófono Dinámico Cardioide. Patrón polar cardioide.', precio: 149990 },
  { id: 28, codigo: "MI002", titulo: "Shure SM57", descripcion: 'Micrófono Dinámico Instrumento. Respuesta para instrumentos.', precio: 139990 },
  { id: 29, codigo: "MI003", titulo: "Audio-Tech. AT2020", descripcion: 'Micrófono Condensador de estudio.', precio: 199990 },
  { id: 30, codigo: "MI004", titulo: "Blue Yeti", descripcion: 'Micrófono USB de Condensador. Múltiples patrones polares.', precio: 299990 },

  // Pedales de Efectos
  { id: 31, codigo: "PE001", titulo: "Boss DS-1", descripcion: 'Pedal Distorsión analógica clásica para guitarra.', precio: 79990 },
  { id: 32, codigo: "PE002", titulo: "Boss RV-6", descripcion: 'Pedal Reverb. Procesamiento DSP con 8 modos.', precio: 179990 },
  { id: 33, codigo: "PE003", titulo: "Boss ME-80", descripcion: 'Pedal Multi-efectos. Simulación de amplificadores COSM.', precio: 349990 },
  { id: 34, codigo: "PE004", titulo: "Boss TU-3", descripcion: 'Pedal Tuner Cromático ultra preciso.', precio: 89990 },
  { id: 35, codigo: "PE005", titulo: "MXR Carbon Copy", descripcion: 'Pedal Delay analógico con circuito BBD.', precio: 179990 },
  { id: 36, codigo: "PE006", titulo: "Ibanez TS9", descripcion: 'El legendario pedal Overdrive Tube Screamer.', precio: 99990 },

  // Accesorios
  { id: 37, codigo: "AC001", titulo: "Ernie Ball Super Slinky", descripcion: 'Cuerdas Guitarra Eléctrica 09-42. Níquel entorchado.', precio: 8990 },
  { id: 38, codigo: "AC002", titulo: "Ernie Ball Earthwood", descripcion: 'Cuerdas Guitarra Acústica 12-53. Bronce 80/20.', precio: 10990 },
  { id: 39, codigo: "AC003", titulo: "Ernie Ball Regular Slinky", descripcion: 'Cuerdas Bajo 45-105. Entorchado redondo.', precio: 14990 },
  { id: 40, codigo: "AC004", titulo: "Fender 351 (x12)", descripcion: 'Púas de Guitarra x12 (0.73mm) de celuloide.', precio: 4990 },
  { id: 41, codigo: "AC005", titulo: "Dunlop Trigger", descripcion: 'Capotraste Guitarra en aluminio de aviación.', precio: 12990 },
  { id: 42, codigo: "AC006", titulo: "Snark SN-5", descripcion: 'Afinador de Clip con pantalla giratoria.', precio: 8990 },
  { id: 43, codigo: "AC007", titulo: "Monster S100-I-3", descripcion: 'Cable Instrumento 3m blindado.', precio: 12990 },
  { id: 44, codigo: "AC008", titulo: "Monster S100-I-6", descripcion: 'Cable Instrumento 6m blindado.', precio: 17990 },
  { id: 45, codigo: "AC009", titulo: "Hercules GS302B", descripcion: 'Soporte Guitarra de Piso plegable.', precio: 22990 },
  { id: 46, codigo: "AC010", titulo: "Hercules WAH-202", descripcion: 'Soporte Guitarra de Pared base madera.', precio: 18990 },

  // Estudio y Grabación
  { id: 47, codigo: "ES001", titulo: "Focusrite Scarlett Solo", descripcion: 'Interfaz de Audio 2x2 USB con preamp Scarlett.', precio: 149990 },
  { id: 48, codigo: "ES002", titulo: "Audio-Tech. ATH-M20x", descripcion: 'Auriculares de Estudio. Drivers de 40mm.', precio: 79990 },
  { id: 49, codigo: "ES003", titulo: "Audio-Tech. ATH-M50x", descripcion: 'Auriculares de Estudio Pro respuesta extendida.', precio: 219990 },
  { id: 50, codigo: "ES004", titulo: "Yamaha HS5", descripcion: 'Monitor de Estudio 5" bi-amplificado 70W.', precio: 349990 },
  { id: 51, codigo: "ES005", titulo: "Sennheiser MZP 40", descripcion: 'Pop Filter para Micrófono con brazo flexible.', precio: 149990 }
];

function Productos() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Catálogo - Sonido Vivo</h1>

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {listaProductos.map((prod) => (
          <CardProducto
            key={prod.codigo}
            id={prod.id}
            titulo={prod.titulo}
            descripcion={prod.descripcion}
            precio={prod.precio}
            imagen={`/imagenes/productos/${prod.codigo}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;