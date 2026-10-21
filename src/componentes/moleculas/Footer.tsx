import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-secondary w-100">
      <div className="container">
        <div className="row g-4">
          
          {/* Marca y Descripción */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-warning fw-bold fs-4 mb-3">Sonido Vivo</h5>
            <p className="text-secondary small">
              Tu tienda de música e instrumentos de confianza. Ofrecemos la mejor calidad en equipos de audio, guitarras, teclados y accesorios con envíos a todo Chile.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3">Navegación</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none hover-warning">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/productos" className="text-secondary text-decoration-none hover-warning">
                  Productos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/quienes-somos" className="text-secondary text-decoration-none hover-warning">
                  Quiénes Somos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contacto" className="text-secondary text-decoration-none hover-warning">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto e Información */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3">Contacto</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">📍 Av. Providencia 1234, Santiago</li>
              <li className="mb-2">📞 +56 9 1234 5678</li>
              <li className="mb-2">✉️ contacto@sonidovivo.cl</li>
            </ul>
          </div>

          {/* Redes Sociales / Horarios */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3">Horario de Atención</h6>
            <p className="text-secondary small mb-1">Lunes a Viernes: 10:00 - 19:00 hrs</p>
            <p className="text-secondary small">Sábados: 10:00 - 14:00 hrs</p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Derechos de autor */}
        <div className="row text-center text-secondary small">
          <div className="col">
            <p className="mb-0">&copy; {new Date().getFullYear()} Sonido Vivo. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;