import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'; // <-- IMPORTANTE: Importar los estilos

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo */}
                <NavLink to="/" className="logo" onClick={cerrarMenu}>
                    <div className="logo-icon">🎸</div>
                    <span className="logo-text">
                        Sonido<span>Vivo</span>
                    </span>
                </NavLink>

                {/* Navegación */}
                <nav className={`main-nav ${menuAbierto ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quienessomos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>
                                Quiénes Somos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link text-warning"} onClick={cerrarMenu}>
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Acciones */}
                <div className="header-actions">
                    <button className="header-action">
                        🛒
                        <span className="cart-count">0</span>
                    </button>
                    <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
                        {menuAbierto ? '✖' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;