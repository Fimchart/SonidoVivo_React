// src/pages/QuienesSomos.tsx
import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="pb-5">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="about-subtitle">Nuestra Historia</span>
          <h1 className="about-title">Pasión por el Sonido</h1>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="container mt-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
              alt="Estudio de grabación" 
              className="img-fluid about-img"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
              Más de 10 años conectando músicos
            </h2>
            {/* Cambiado el color a gris claro para que se vea en fondo oscuro */}
            <p style={{ color: '#b0b0b5', lineHeight: '1.8', fontSize: '15px' }}>
              En <strong>Sonido Vivo</strong> nacimos de la pasión por la música y el equipamiento de alta calidad. 
              Lo que comenzó como un pequeño taller de reparación de guitarras, hoy se ha convertido en uno de los 
              principales referentes de instrumentos musicales y equipo de audio profesional en el país.
            </p>
            <p style={{ color: '#b0b0b5', lineHeight: '1.8', fontSize: '15px' }}>
              Nuestro objetivo es simple: entregar las mejores herramientas para que artistas, productores y 
              aficionados puedan dar vida a sus ideas. Trabajamos con las marcas más prestigiosas del mundo y 
              ofrecemos asesoría técnica personalizada para cada necesidad.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container mt-5 pt-5">
        <h2 className="text-center text-white mb-5" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
          Nuestros Valores
        </h2>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-4 rounded h-100 border border-secondary" style={{ backgroundColor: 'var(--sv-dark-soft)' }}>
              <div className="value-icon">🎸</div>
              <h4 className="mb-3 text-white">Calidad Garantizada</h4>
              <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Solo comercializamos equipos que han pasado por rigurosos controles de calidad.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded h-100 border border-secondary" style={{ backgroundColor: 'var(--sv-dark-soft)' }}>
              <div className="value-icon">🤝</div>
              <h4 className="mb-3 text-white">Compromiso</h4>
              <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Ofrecemos un soporte post-venta real y una asesoría honesta y profesional.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded h-100 border border-secondary" style={{ backgroundColor: 'var(--sv-dark-soft)' }}>
              <div className="value-icon">🎵</div>
              <h4 className="mb-3 text-white">Pasión por la Música</h4>
              <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Entendemos las necesidades de los músicos porque nosotros también lo somos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;