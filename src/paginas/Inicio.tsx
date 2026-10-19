import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Banner Principal Centrado */}
      <div className="bg-dark text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-warning mb-3">
            Bienvenido a Sonido Vivo
          </h1>
          <p className="lead text-light mb-4 col-md-8 mx-auto">
            Tu tienda de música de confianza. Encuentra los mejores instrumentos, equipos de estudio y accesorios.
          </p>
          <Link to="/productos" className="btn btn-warning btn-lg fw-bold px-4">
            Explorar Catálogo
          </Link>
        </div>
      </div>

      {/* Sección de Tarjetas de Beneficios */}
      <div className="bg-white py-5 text-dark">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🚚</div>
                <h3 className="h5 fw-bold text-dark">Envíos a todo Chile</h3>
                <p className="text-secondary mb-0">
                  Despachamos tus instrumentos de forma rápida y segura a cualquier región.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🛡️</div>
                <h3 className="h5 fw-bold text-dark">Garantía Oficial</h3>
                <p className="text-secondary mb-0">
                  Todos nuestros productos cuentan con garantía directa de fábrica.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🎸</div>
                <h3 className="h5 fw-bold text-dark">Asesoría de Músicos</h3>
                <p className="text-secondary mb-0">
                  Te orientamos para que elijas el instrumento perfecto para tu nivel y estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;