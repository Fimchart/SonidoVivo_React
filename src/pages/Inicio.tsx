// src/pages/Inicio.tsx
import { Link } from 'react-router-dom';
import { productosIniciales } from '../data/Producto';
import CardProducto from '../assets/components/molecules/CardProducto';
import './Inicio.css';

function Inicio() {
  const productosDestacados = productosIniciales.slice(0, 4);

  return (
    <main style={{ backgroundColor: '#181b20' }}>
      {/* 1. SECCIÓN HERO */}
      <section className="hero py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-warning text-dark fw-bold px-3 py-2 mb-3 rounded-pill text-uppercase">
                Novedades 2026
              </span>
              <h1 className="display-4 fw-extrabold text-white mb-3" style={{ lineHeight: '1.2' }}>
                Siente la música, <br />
                <span className="text-warning">vive el sonido.</span>
              </h1>
              <p className="lead text-secondary mb-4 fs-5">
                Explora nuestro catálogo de equipos profesionales de audio e instrumentos musicales. Encuentra todo lo necesario para tu próximo show.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/productos" className="btn btn-warning btn-lg fw-bold text-dark px-4 shadow">
                  Ver Catálogo 🎸
                </Link>
                <Link to="/contacto" className="btn btn-outline-light btn-lg fw-bold px-4">
                  Contáctanos
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center position-relative">
              <div 
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{ 
                  width: '320px', 
                  height: '320px', 
                  backgroundColor: 'rgba(255, 193, 7, 0.15)', 
                  filter: 'blur(90px)',
                  zIndex: 0 
                }}
              />
              <img 
                src="/imagenes/Estudio_inicio.jpg" 
                alt="Estudio de Grabación Sonido Vivo" 
                className="img-fluid rounded-4 shadow-lg border border-warning position-relative"
                style={{ 
                  maxHeight: '400px', 
                  objectFit: 'cover', 
                  width: '100%', 
                  zIndex: 1 
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN PRODUCTOS DESTACADOS */}
      <section className="py-5">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="text-warning fw-bold small text-uppercase d-block mb-1">Lo más buscado</span>
              <h2 className="fw-bold text-white mb-0">Productos Destacados</h2>
            </div>
            <Link to="/productos" className="btn btn-outline-warning btn-sm fw-bold px-3">
              Ver todo el catálogo →
            </Link>
          </div>

          <div className="row g-4">
            {productosDestacados.map((producto) => (
              <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <CardProducto {...producto} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN BENEFICIOS (AHORA ARRIBA DEL FOOTER) */}
      <section className="py-4 border-top border-secondary" style={{ backgroundColor: '#1e2229' }}>
        <div className="container">
          <div className="row g-4 text-white">
            <div className="col-md-3 d-flex align-items-center gap-3">
              <span className="fs-1">🚚</span>
              <div>
                <h6 className="fw-bold mb-0">Envío Rápido</h6>
                <small className="text-secondary">Despachos a todo Chile</small>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center gap-3">
              <span className="fs-1">💳</span>
              <div>
                <h6 className="fw-bold mb-0">Pago Seguro</h6>
                <small className="text-secondary">Cuotas sin interés</small>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center gap-3">
              <span className="fs-1">🎸</span>
              <div>
                <h6 className="fw-bold mb-0">Calidad Pro</h6>
                <small className="text-secondary">Marcas líderes mundial</small>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center gap-3">
              <span className="fs-1">🔧</span>
              <div>
                <h6 className="fw-bold mb-0">Soporte Técnico</h6>
                <small className="text-secondary">Asesoría experta</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;