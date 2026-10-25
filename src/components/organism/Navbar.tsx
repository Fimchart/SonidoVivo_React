// src/components/organism/Navbar.tsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CardContext"; // Corregido: era CartContext, no CardContext
import './Navbar.css';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const cerrarMenu = () => setMenuAbierto(false);
    
    const { usuario, logout } = useAuth();
    const { totalItems, vaciarCarrito } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        localStorage.removeItem('sv_user');
        vaciarCarrito();
        navigate('/');
        cerrarMenu();
    };

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
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/quienessomos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>Quiénes Somos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={cerrarMenu}>Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active text-warning" : "nav-link text-warning"} onClick={cerrarMenu}>Admin</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Acciones */}
                <div className="header-actions">
                    <button className="header-action" title="Carrito">
                        🛒
                        <span className="cart-count">{totalItems}</span>
                    </button>

                    {usuario ? (
                        <button onClick={handleLogout} className="btn btn-outline-danger btn-sm ms-2">
                            Salir
                        </button>
                    ) : (
                        <div className="d-flex gap-2 ms-2">
                            <NavLink to="/login" className="btn btn-outline-warning btn-sm" onClick={cerrarMenu}>
                                Ingresar
                            </NavLink>
                            {/* Botón de registro: se oculta en móviles muy pequeños para no saturar, 
                                pero se muestra en pantallas medianas en adelante */}
                            <NavLink to="/registro" className="btn btn-outline-light btn-sm d-none d-md-block" onClick={cerrarMenu}>
                                Registrarse
                            </NavLink>
                        </div>
                    )}

                    <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
                        {menuAbierto ? '✖' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;