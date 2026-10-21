import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Verificamos si estamos en /productos o en el detalle /producto/:id
  const esPaginaProductos = location.pathname.startsWith("/producto");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary py-3 shadow-sm">
      <div className="container-fluid px-4 px-md-5">
        
        {/* LOGO */}
        <Link className="navbar-brand fw-bold text-warning fs-3" to="/">
          Sonido Vivo
        </Link>

        {/* BOTÓN RESPONSIVE */}
        <button 
          className="navbar-toggler border-warning" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav gap-2 gap-lg-4 mt-3 mt-lg-0 fw-semibold fs-5">
            
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link px-2 ${isActive ? "text-warning border-bottom border-warning border-2 active" : "text-light"}`
              }
            >
              Inicio
            </NavLink>

            {/* PRODUCTOS: Activo si la ruta empieza con /producto o /productos */}
            <NavLink 
              to="/productos" 
              className={() => 
                `nav-link px-2 ${esPaginaProductos ? "text-warning border-bottom border-warning border-2 active" : "text-light"}`
              }
            >
              Productos
            </NavLink>

            <NavLink 
              to="/quienessomos" 
              className={({ isActive }) => 
                `nav-link px-2 ${isActive ? "text-warning border-bottom border-warning border-2 active" : "text-light"}`
              }
            >
              Quiénes Somos
            </NavLink>

            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `nav-link px-2 ${isActive ? "text-warning border-bottom border-warning border-2 active" : "text-light"}`
              }
            >
              Contacto
            </NavLink>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;