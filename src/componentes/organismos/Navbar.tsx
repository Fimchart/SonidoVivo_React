import { Link } from "react-router-dom";

function Navbar (){
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <span className="navbar-brand text-white">
                    Mi tienda
                </span>

                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/quienessomos">
                        Quienes somos
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>
                </div>
                <div className="navbar nav">
                    <Link className="nav-link text-white" to="/login">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar