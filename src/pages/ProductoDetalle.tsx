// src/pages/ProductoDetalle.tsx
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { productoService } from '../Service/ProductoService';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart();
  const { usuario } = useAuth();
  
  // Estado para controlar el modal de inicio de sesión
  const [showModal, setShowModal] = useState(false);

  const producto = productoService.getById(Number(id));

  if (!producto) {
    return (
      <div className="container py-5 text-center text-white">
        <h2 className="text-warning">Producto no encontrado</h2>
        <Link to="/productos" className="btn btn-warning mt-3 fw-bold">
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleComprar = () => {
    if (!usuario) {
      setShowModal(true);
      return;
    }
    agregarAlCarrito(producto);
  };

  return (
    <div className="container py-5 text-white">
      {/* Botón Volver con separación superior */}
      <div className="row mb-4">
        <div className="col-12 col-lg-10 mx-auto">
          <Link to="/productos" className="btn btn-outline-warning fw-bold">
            ← Volver al catálogo
          </Link>
        </div>
      </div>

      {/* Tarjeta Detallada Centrada con Borde Dorado */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div 
            className="card text-white border-2 border-warning shadow-lg p-4 rounded-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
          >
            <div className="row g-4">
              
              {/* Imagen del Producto */}
              <div className="col-md-5 text-center d-flex align-items-center justify-content-center">
                <img 
                  src={producto.imagen} 
                  alt={producto.titulo} 
                  className="img-fluid rounded-4 bg-white p-3 shadow border border-secondary w-100"
                  style={{ maxHeight: '380px', objectFit: 'contain' }}
                />
              </div>

              {/* Información Detallada */}
              <div className="col-md-7 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex gap-2 mb-2">
                    <span className="badge bg-secondary text-white px-3 py-2 fw-semibold">
                      {producto.categoria}
                    </span>
                    <span className="badge bg-success text-white px-3 py-2 fw-semibold">
                      ✓ En Stock
                    </span>
                  </div>

                  <h1 className="text-warning fw-bold mb-1">{producto.titulo}</h1>
                  <p className="text-secondary small mb-3">Código: {producto.codigo}</p>
                  
                  <h5 className="text-white fw-bold border-bottom border-secondary pb-2 mb-3">
                    Descripción del Producto
                  </h5>
                  <p className="text-light fs-6 mb-4" style={{ textAlign: 'justify' }}>
                    {producto.descripcionLarga || producto.descripcion}
                  </p>

                  {/* ESPECIFICACIONES TÉCNICAS */}
                  {producto.especificaciones && producto.especificaciones.length > 0 && (
                    <>
                      <h5 className="text-white fw-bold border-bottom border-secondary pb-2 mb-3">
                        Especificaciones Técnicas
                      </h5>
                      <ul className="text-secondary small mb-4 pe-3">
                        {producto.especificaciones.map((spec, index) => (
                          <li key={index} className="mb-1 text-light">{spec}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Precio y Botón de Carrito */}
                <div className="pt-3 border-top border-secondary d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <span className="text-secondary small d-block">Precio Oferta:</span>
                    <h2 className="text-warning fw-bold mb-0">
                      ${Number(producto.precio).toLocaleString('es-CL')}
                    </h2>
                  </div>
                  
                  <button 
                    onClick={handleComprar}
                    className="btn btn-warning btn-lg fw-bold px-4 shadow flex-grow-1 flex-md-grow-0"
                  >
                    Agregar al Carrito 🛒
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE AUTENTICACIÓN */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        contentClassName="bg-dark text-white border-warning"
      >
        <Modal.Header closeButton closeVariant="white" className="border-secondary">
          <Modal.Title className="text-warning fw-bold">Inicia sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            Para poder comprar y agregar productos al carrito, necesitas tener una cuenta y estar conectado.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-secondary">
          <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button 
            className="btn btn-warning fw-bold"
            onClick={() => navigate('/login')}
          >
            Ir a Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductoDetalle;