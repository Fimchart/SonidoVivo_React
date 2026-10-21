import { useParams, Link } from "react-router-dom";

const productos = [
  {
    id: 1,
    codigo: "GA001",
    categoria: "Guitarras Acústicas",
    titulo: "Yamaha F310",
    descripcionCorta: "Guitarra Acústica Folk.",
    descripcionLarga: "La Yamaha F310 ofrece una calidad extraordinaria a un precio realmente asequible. Su sonido vivo y cálido proviene de una tapa de abeto seleccionada y aros/fondo de meranti. Su cuerpo de tamaño tradicional Dreadnought y su escala ligeramente reducida garantizan una excelente comodidad al tocar, convirtiéndola en la opción preferida tanto para principiantes como para músicos intermedios.",
    especificaciones: [
      "Tapa: Abeto macizo",
      "Aros y Fondo: Meranti",
      "Mástil: Nato / Caoba",
      "Diapasón: Palo de rosa (Rosewood)",
      "Número de Trastes: 20",
      "Escala: 634 mm (25\")",
      "Acabado: Brillante natural"
    ],
    precio: "129990",
    imagen: "/imagenes/productos/GA001.jpg"
  }
];

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find(
    (p) => p.id === Number(id)
  );

  if (!producto) {
    return (
      <div className="container py-5 text-center text-white">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-warning mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5 text-white">
      {/* Botón Volver con mayor margen (mb-5) */}
      <div className="row mb-5">
        <div className="col-12 col-lg-10 mx-auto">
          <Link to="/productos" className="btn btn-outline-warning fw-bold">
            ← Volver al catálogo
          </Link>
        </div>
      </div>

      {/* Tarjeta Detallada Centrada */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card text-white border-2 border-warning shadow p-4 rounded-4"
               style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
            <div className="row g-4">
              
              {/* Imagen del Producto con marco encuadrado */}
              <div className="col-md-5 text-center d-flex align-items-center justify-content-center">
                <img 
                  src={producto.imagen} 
                  alt={producto.titulo}
                  className="img-fluid rounded-4 bg-white p-3 shadow border border-secondary w-100"
                  style={{ maxHeight: '380px', objectFit: 'contain' }}
                />
              </div>

              {/* Información Ampliada */}
              <div className="col-md-7 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex gap-2 mb-2">
                    <span className="badge bg-secondary text-white px-3 py-2 fw-semibold">
                      {producto.categoria}
                    </span>
                    <span className="badge bg-success text-white px-3 py-2 fw-semibold">
                      ✓ En Stock
                    </span>
                  </div>

                  <h1 className="text-warning fw-bold mb-3">{producto.titulo}</h1>
                  
                  <h5 className="text-white fw-bold border-bottom border-secondary pb-2 mb-3">
                    Descripción del Producto
                  </h5>
                  <p className="text-light fs-6 mb-4" style={{ textAlign: 'justify' }}>
                    {producto.descripcionLarga}
                  </p>

                  <h5 className="text-white fw-bold border-bottom border-secondary pb-2 mb-3">
                    Especificaciones Técnicas
                  </h5>
                  <ul className="text-secondary small mb-4 pe-3">
                    {producto.especificaciones.map((spec, index) => (
                      <li key={index} className="mb-1 text-light">{spec}</li>
                    ))}
                  </ul>
                </div>

                {/* Precio y Acción */}
                <div className="pt-3 border-top border-secondary d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <span className="text-secondary small d-block">Precio Oferta:</span>
                    <h2 className="text-warning fw-bold mb-0">
                      ${Number(producto.precio).toLocaleString('es-CL')}
                    </h2>
                  </div>
                  
                  <button className="btn btn-warning btn-lg fw-bold px-4 shadow flex-grow-1 flex-md-grow-0">
                    Añadir al carrito
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;