// src/assets/components/organism/Footer.tsx
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    {/* Columna 1: Marca */}
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '14px' }}>🎸</div>
                            <span className="logo-text" style={{ fontSize: '17px' }}>
                                Sonido<span>Vivo</span>
                            </span>
                        </Link>
                        <p>
                            Tu tienda de confianza para equipamiento musical profesional. 
                            Encuentra las mejores marcas y lleva tu sonido al siguiente nivel.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">f</a>
                            <a href="#" aria-label="Instagram">ig</a>
                            <a href="#" aria-label="Twitter">X</a>
                            <a href="#" aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    {/* Columna 2: Tienda */}
                    <div className="footer-column">
                        <h2>Tienda</h2>
                        <ul>
                            <li><Link to="/productos">Todos los productos</Link></li>
                            <li><Link to="/productos?categoria=Guitarras">Guitarras</Link></li>
                            <li><Link to="/productos?categoria=Baterías">Baterías</Link></li>
                            <li><Link to="/productos?categoria=Teclados">Teclados</Link></li>
                            <li><Link to="/productos?categoria=Estudio">Estudio</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Ayuda */}
                    <div className="footer-column">
                        <h2>Ayuda</h2>
                        <ul>
                            <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                            <li><Link to="/preguntas-frecuentes?cat=envios">Envíos</Link></li>
                            <li><Link to="/preguntas-frecuentes?cat=devoluciones">Devoluciones</Link></li>
                            <li><Link to="/preguntas-frecuentes?cat=garantia">Garantías</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4: Contacto */}
                    <div className="footer-column">
                        <h2>Contacto</h2>
                        <address>
                            <p>
                                <i>📍</i>
                                Av. Providencia 1234,<br/> Santiago, Chile
                            </p>
                            <p>
                                <i>📞</i>
                                +56 9 1234 5678
                            </p>
                            <p>
                                <i>✉️</i>
                                contacto@sonidovivo.cl
                            </p>
                        </address>
                    </div>
                </div>

                {/* Parte inferior */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sonido Vivo. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <a href="#">Privacidad</a>
                        <a href="#">Cookies</a>
                        <a href="#">Accesibilidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;