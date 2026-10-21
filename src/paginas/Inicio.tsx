import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="w-100 min-vh-100 bg-dark text-white m-0 p-0 overflow-x-hidden">
      
      {/* Banner Principal Centrado */}
      <section className="bg-dark text-white text-center py-5 w-100">
        <div className="container py-5">
          <h1 className="display-3 fw-bold text-warning mb-3">
            Bienvenido a Sonido Vivo
          </h1>
          <p className="lead text-light mb-4 col-md-8 mx-auto fs-4">
            Tu tienda de música de confianza. Encuentra los mejores instrumentos, equipos de estudio y accesorios.
          </p>
          <Link to="/productos" className="btn btn-warning btn-lg fw-bold px-5 py-3 fs-5 shadow">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      {/* Sección de Tarjetas de Beneficios */}
      <section className="bg-white py-5 text-dark w-100">
        <div className="container py-3">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 border-0 rounded-4 shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🚚</div>
                <h3 className="h5 fw-bold text-dark">Envíos a todo Chile</h3>
                <p className="text-secondary mb-0">
                  Despachamos tus instrumentos de forma rápida y segura a cualquier región.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border-0 rounded-4 shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🛡️</div>
                <h3 className="h5 fw-bold text-dark">Garantía Oficial</h3>
                <p className="text-secondary mb-0">
                  Todos nuestros productos cuentan con garantía directa de fábrica.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border-0 rounded-4 shadow-sm h-100 bg-light">
                <div className="fs-1 mb-2">🎸</div>
                <h3 className="h5 fw-bold text-dark">Asesoría de Músicos</h3>
                <p className="text-secondary mb-0">
                  Te orientamos para que elijas el instrumento perfecto para tu nivel y estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Inicio;