import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold text-warning" to="/">
                    Sonido Vivo
                </Link>

                <div className="navbar-nav ms-auto gap-2">
                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/quienessomos">
                        Quiénes Somos
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;