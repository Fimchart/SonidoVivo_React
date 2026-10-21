import CardProducto from "../componentes/moleculas/CardProducto";
import { useState } from "react";

// BASE DE DATOS COMPLETA CON CATEGORÍAS INCLUIDAS
const listaProductos = [
  // Guitarras Acústicas
  { id: 1, codigo: "GA001", categoria: "Guitarras", titulo: "Yamaha F310", descripcion: 'Guitarra Acústica Folk. Tapa de abeto, aros y fondo de meranti.', precio: 129990 },
  { id: 2, codigo: "GA002", categoria: "Guitarras", titulo: "Fender CD-60S", descripcion: 'Guitarra Acústica Dreadnought. Tapa de abeto macizo, brazo de caoba.', precio: 189990 },
  { id: 3, codigo: "GA003", categoria: "Guitarras", titulo: "Yamaha C40", descripcion: 'Guitarra Acústica Clásica 4/4. Nailon, tapa de abeto.', precio: 89990 },
  { id: 4, codigo: "GA004", categoria: "Guitarras", titulo: "Takamine GN20CE", descripcion: 'Guitarra Electroacústica. Pickup integrado, afinador incorporado.', precio: 349990 },
  { id: 5, codigo: "GA005", categoria: "Guitarras", titulo: "Yamaha JR1", descripcion: 'Guitarra 3/4 Niños. Tamaño reducido para niños de 6 a 10 años.', precio: 79990 },

  // Guitarras Eléctricas
  { id: 6, codigo: "GE001", categoria: "Guitarras", titulo: "Squier Affinity Strat", descripcion: 'Guitarra Eléctrica Stratocaster. Cuerpo de álamo, mástil de arce.', precio: 249990 },
  { id: 7, codigo: "GE002", categoria: "Guitarras", titulo: "Epiphone Les Paul Std", descripcion: 'Guitarra Eléctrica Les Paul. Cuerpo caoba, tapa arce.', precio: 329990 },
  { id: 8, codigo: "GE003", categoria: "Guitarras", titulo: "Epiphone SG Standard", descripcion: 'Guitarra Eléctrica SG. Cuerpo caoba, mástil caoba, 2 humbuckers.', precio: 319990 },
  { id: 9, codigo: "GE004", categoria: "Guitarras", titulo: "Squier Affinity Tele", descripcion: 'Guitarra Eléctrica Telecaster. Cuerpo álamo, clavijero vintage.', precio: 239990 },
  { id: 10, codigo: "GE005", categoria: "Guitarras", titulo: "Epiphone ES-335", descripcion: 'Guitarra Eléctrica Semi-hollow. Semi-hueca, ideal para jazz y blues.', precio: 549990 },

  // Bajos
  { id: 11, codigo: "BA001", categoria: "Bajos", titulo: "Squier Affinity PJ", descripcion: 'Bajo Eléctrico 4 Cuerdas. Pickup PJ, cuerpo álamo, mástil arce.', precio: 299990 },
  { id: 12, codigo: "BA002", categoria: "Bajos", titulo: "Fender Player Jazz", descripcion: 'Bajo Eléctrico Jazz Bass. Alder body, 2 Alnico V Jazz single-coil.', precio: 699990 },
  { id: 13, codigo: "BA003", categoria: "Bajos", titulo: "Yamaha APX700II", descripcion: 'Bajo Acústico 4 Cuerdas. Electroacústico, afinador incorporado.', precio: 429990 },

  // Baterías
  { id: 14, codigo: "BT001", categoria: "Baterías", titulo: "Pearl Roadshow", descripcion: 'Batería Acústica 5 piezas. Incluye stands, platillos y pedal.', precio: 599990 },
  { id: 15, codigo: "BT002", categoria: "Baterías", titulo: "Roland TD-02KV", descripcion: 'Batería Electrónica 8 pads. Módulo TD-02, 8 pads de goma.', precio: 799990 },
  { id: 16, codigo: "BT003", categoria: "Baterías", titulo: "Pearl STE1450", descripcion: 'Caja Snare 14". Acero, 14x5", 10 tensores.', precio: 89990 },
  { id: 17, codigo: "BT004", categoria: "Baterías", titulo: 'Zildjian A Series 14"', descripcion: 'Platillo Hi-Hat 14". Latón B20, sonido brillante y claro.', precio: 149990 },
  { id: 18, codigo: "BT005", categoria: "Baterías", titulo: 'Zildjian A Series 16"', descripcion: 'Platillo Crash 16". Latón B20, ataque rápido.', precio: 129990 },

  // Teclados
  { id: 19, codigo: "TC001", categoria: "Teclados", titulo: "Yamaha PSR-E373", descripcion: 'Teclado Digital 61 teclas. Sensible a la velocidad, 622 voces.', precio: 249990 },
  { id: 20, codigo: "TC002", categoria: "Teclados", titulo: "Yamaha P-45", descripcion: 'Piano Digital 88 teclas. Mecanismo Graded Hammer Standard.', precio: 499990 },
  { id: 21, codigo: "TC003", categoria: "Teclados", titulo: "Arturia MiniLab MKII", descripcion: 'Sintetizador 49 teclas. Teclas delgadas, 8 pads RGB.', precio: 129990 },
  { id: 22, codigo: "TC004", categoria: "Teclados", titulo: "M-Audio Hammer 88", descripcion: 'Teclado MIDI 88 teclas. Teclas contrapesadas de acción martillo.', precio: 399990 },

  // Amplificadores
  { id: 23, codigo: "AM001", categoria: "Amplificadores", titulo: "Fender Frontman 15G", descripcion: 'Amplificador Guitarra 15W. 2 canales, ecualizador de 3 bandas.', precio: 99990 },
  { id: 24, codigo: "AM002", categoria: "Amplificadores", titulo: "Marshall MG40GFX", descripcion: 'Amplificador Guitarra 40W. Efectos digitales integrados.', precio: 299990 },
  { id: 25, codigo: "AM003", categoria: "Amplificadores", titulo: "Hartke HD100", descripcion: 'Amplificador Bajo 100W. Altavoz HyDrive de 15 pulgadas.', precio: 449990 },
  { id: 26, codigo: "AM004", categoria: "Amplificadores", titulo: "Fishman Loudbox Mini", descripcion: 'Amplificador Acústico 40W. Micrófono y guitarra, Bluetooth.', precio: 499990 },

  // Micrófonos
  { id: 27, codigo: "MI001", categoria: "Micrófonos", titulo: "Shure SM58", descripcion: 'Micrófono Dinámico Cardioide. Patrón polar cardioide.', precio: 149990 },
  { id: 28, codigo: "MI002", categoria: "Micrófonos", titulo: "Shure SM57", descripcion: 'Micrófono Dinámico Instrumento. Respuesta para instrumentos.', precio: 139990 },
  { id: 29, codigo: "MI003", categoria: "Micrófonos", titulo: "Audio-Tech. AT2020", descripcion: 'Micrófono Condensador de estudio.', precio: 199990 },
  { id: 30, codigo: "MI004", categoria: "Micrófonos", titulo: "Blue Yeti", descripcion: 'Micrófono USB de Condensador. Múltiples patrones polares.', precio: 299990 },

  // Pedales
  { id: 31, codigo: "PE001", categoria: "Pedales", titulo: "Boss DS-1", descripcion: 'Pedal Distorsión analógica clásica para guitarra.', precio: 79990 },
  { id: 32, codigo: "PE002", categoria: "Pedales", titulo: "Boss RV-6", descripcion: 'Pedal Reverb. Procesamiento DSP con 8 modos.', precio: 179990 },
  { id: 33, codigo: "PE003", categoria: "Pedales", titulo: "Boss ME-80", descripcion: 'Pedal Multi-efectos. Simulación de amplificadores COSM.', precio: 349990 },
  { id: 34, codigo: "PE004", categoria: "Pedales", titulo: "Boss TU-3", descripcion: 'Pedal Tuner Cromático ultra preciso.', precio: 89990 },
  { id: 35, codigo: "PE005", categoria: "Pedales", titulo: "MXR Carbon Copy", descripcion: 'Pedal Delay analógico con circuito BBD.', precio: 179990 },
  { id: 36, codigo: "PE006", categoria: "Pedales", titulo: "Ibanez TS9", descripcion: 'El legendario pedal Overdrive Tube Screamer.', precio: 99990 },

  // Accesorios
  { id: 37, codigo: "AC001", categoria: "Accesorios", titulo: "Ernie Ball Super Slinky", descripcion: 'Cuerdas Guitarra Eléctrica 09-42. Níquel entorchado.', precio: 8990 },
  { id: 38, codigo: "AC002", categoria: "Accesorios", titulo: "Ernie Ball Earthwood", descripcion: 'Cuerdas Guitarra Acústica 12-53. Bronce 80/20.', precio: 10990 },
  { id: 39, codigo: "AC003", categoria: "Accesorios", titulo: "Ernie Ball Regular Slinky", descripcion: 'Cuerdas Bajo 45-105. Entorchado redondo.', precio: 14990 },
  { id: 40, codigo: "AC004", categoria: "Accesorios", titulo: "Fender 351 (x12)", descripcion: 'Púas de Guitarra x12 (0.73mm) de celuloide.', precio: 4990 },
  { id: 41, codigo: "AC005", categoria: "Accesorios", titulo: "Dunlop Trigger", descripcion: 'Capotraste Guitarra en aluminio de aviación.', precio: 12990 },
  { id: 42, codigo: "AC006", categoria: "Accesorios", titulo: "Snark SN-5", descripcion: 'Afinador de Clip con pantalla giratoria.', precio: 8990 },
  { id: 43, codigo: "AC007", categoria: "Accesorios", titulo: "Monster S100-I-3", descripcion: 'Cable Instrumento 3m blindado.', precio: 12990 },
  { id: 44, codigo: "AC008", categoria: "Accesorios", titulo: "Monster S100-I-6", descripcion: 'Cable Instrumento 6m blindado.', precio: 17990 },
  { id: 45, codigo: "AC009", categoria: "Accesorios", titulo: "Hercules GS302B", descripcion: 'Soporte Guitarra de Piso plegable.', precio: 22990 },
  { id: 46, codigo: "AC010", categoria: "Accesorios", titulo: "Hercules WAH-202", descripcion: 'Soporte Guitarra de Pared base madera.', precio: 18990 },

  // Estudio
  { id: 47, codigo: "ES001", categoria: "Estudio", titulo: "Focusrite Scarlett Solo", descripcion: 'Interfaz de Audio 2x2 USB con preamp Scarlett.', precio: 149990 },
  { id: 48, codigo: "ES002", categoria: "Estudio", titulo: "Audio-Tech. ATH-M20x", descripcion: 'Auriculares de Estudio. Drivers de 40mm.', precio: 79990 },
  { id: 49, codigo: "ES003", categoria: "Estudio", titulo: "Audio-Tech. ATH-M50x", descripcion: 'Auriculares de Estudio Pro respuesta extendida.', precio: 219990 },
  { id: 50, codigo: "ES004", categoria: "Estudio", titulo: "Yamaha HS5", descripcion: 'Monitor de Estudio 5" bi-amplificado 70W.', precio: 349990 },
  { id: 51, codigo: "ES005", categoria: "Estudio", titulo: "Sennheiser MZP 40", descripcion: 'Pop Filter para Micrófono con brazo flexible.', precio: 149990 }
];

function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Filtro dinámico por Nombre y Categoría
  const productosFiltrados = listaProductos.filter((prod) => {
    const coincideNombre = prod.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todas' || prod.categoria === categoriaSeleccionada;
    
    return coincideNombre && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('Todas');
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Encabezado del Catálogo */}
      <div className="bg-dark text-white text-center py-4 mb-4 shadow-sm">
        <div className="container">
          <h1 className="display-5 fw-bold text-warning mb-1">
            Catálogo - Sonido Vivo
          </h1>
          <p className="text-secondary mb-3">
            Explora nuestra selección completa de instrumentos y accesorios
          </p>

          {/* Barra de Búsqueda Integrada con Menú Compacto */}
          <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-7 col-lg-6">
              <div className="input-group shadow-sm">
                
                {/* Input de Búsqueda por Nombre */}
                <input
                  type="text"
                  className="form-control form-control-lg border-2 border-warning rounded-start-pill ps-4"
                  placeholder="Buscar..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />

                {/* Filtro desplegable con Icono de Tres Puntos */}
                <div className="input-group-text bg-warning border-2 border-warning pe-3 rounded-end-pill">
                  <span className="me-1 fw-bold fs-5 text-dark">⋮</span>
                  <select
                    className="form-select border-0 bg-transparent fw-bold text-dark p-0 pe-4 shadow-none cursor-pointer"
                    style={{ width: "auto" }}
                    value={categoriaSeleccionada}
                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                  >
                    <option value="Todas">Todas</option>
                    <option value="Guitarras">Guitarras</option>
                    <option value="Bajos">Bajos</option>
                    <option value="Baterías">Baterías</option>
                    <option value="Teclados">Teclados</option>
                    <option value="Amplificadores">Amplificadores</option>
                    <option value="Micrófonos">Micrófonos</option>
                    <option value="Pedales">Pedales</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Estudio">Estudio</option>
                  </select>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contenedor de las Cards */}
      <div className="container">
        {productosFiltrados.length > 0 ? (
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {productosFiltrados.map((prod) => (
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
        ) : (
          /* Mensaje si no coincide la búsqueda */
          <div className="text-center py-5">
            <h4 className="text-secondary">
              No se encontraron productos para los filtros seleccionados.
            </h4>
            <button 
              className="btn btn-outline-warning mt-3 px-4 py-2 fw-bold" 
              onClick={limpiarFiltros}
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productos;