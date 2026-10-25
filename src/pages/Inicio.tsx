import { Link } from 'react-router-dom';
import './Inicio.css'; // <-- IMPORTANTE: Importar los estilos

function Inicio() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">BIENVENIDO A SONIDO VIVO</span>
            <h1>
              Siente la música, <span>vive el sonido.</span>
            </h1>
            <p>
              Explora nuestro catálogo de equipos profesionales de audio y encuentra 
              todo lo que necesitas para llevar tu próximo evento al siguiente nivel.
            </p>
            <div className="hero-actions">
              <Link to="/productos" className="btn btn-primary">
                Ver Catálogo
              </Link>
              <Link to="/contacto" className="btn btn-secondary">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="section-container">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <div>
                <h2>Envío Rápido</h2>
                <p>Despachos a todo el país en 24/48 horas.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💳</div>
              <div>
                <h2>Pago Seguro</h2>
                <p>Múltiples medios de pago y cuotas sin interés.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎸</div>
              <div>
                <h2>Calidad Pro</h2>
                <p>Equipamiento de las mejores marcas del mundo.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <div>
                <h2>Soporte Técnico</h2>
                <p>Asesoría especializada para tu instrumento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;