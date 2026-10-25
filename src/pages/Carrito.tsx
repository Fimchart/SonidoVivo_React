// src/pages/Carrito.tsx
import { useState } from 'react'; // <-- Agregado para el Modal
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // <-- Importación de React-Bootstrap
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Carrito.css'; 

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalPrecio, totalItems } = useCart();
  const { usuario } = useAuth();
  const navigate = useNavigate();

  // Estado para controlar el Modal de Login
  const [showModalPago, setShowModalPago] = useState(false);

  const formatearPrecio = (valor: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
  };

  const handlePagar = () => {
    if (!usuario) {
      // Si no hay usuario, mostramos el Modal en vez de la alerta fea
      setShowModalPago(true);
      return;
    }
    
    // Si está logueado, procesamos la compra (simulada)
    alert(`¡Compra simulada exitosa por ${formatearPrecio(totalPrecio)}! Gracias por preferir Sonido Vivo.`);
    vaciarCarrito();
    navigate('/productos');
  };

  // ==========================================
  // VISTA 1: CARRITO VACÍO
  // ==========================================
  if (carrito.length === 0) {
    return (
      <div className="container empty-cart-wrapper">
        <div className="empty-cart-card text-center">
          
          <div className="empty-cart-icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="var(--sv-primary)" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </div>

          <h2 className="empty-cart-title">Tu carrito está vacío</h2>
          <p className="empty-cart-text">
            Parece que aún no has agregado ningún instrumento a tu carrito. <br />
            ¡Explora nuestro catálogo y encuentra el equipo perfecto para tu próximo evento!
          </p>
          
          <Link to="/productos" className="btn btn-primary btn-lg px-5 py-3 fw-bold" style={{ backgroundColor: 'var(--sv-primary)', border: 'none' }}>
            Explorar Catálogo 🎸
          </Link>
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA 2: CARRITO CON PRODUCTOS
  // ==========================================
  return (
    <div className="container mt-5 pb-5 pt-3">
      <h1 className="cart-main-title">
        Tu Carrito de Compras <span style={{ color: 'var(--sv-primary)' }}>({totalItems})</span>
      </h1>

      <div className="row g-4">
        {/* Lista de Productos */}
        <div className="col-md-8">
          <div className="cart-item-list">
            {carrito.map((prod, index) => (
              <div key={`${prod.id}-${index}`} className="cart-item flex-wrap flex-md-nowrap">
                <img src={prod.imagen} alt={prod.titulo} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <h5 className="cart-item-title">{prod.titulo}</h5>
                  <span className="cart-item-details">{prod.categoria} | Código: {prod.codigo}</span>
                </div>
                
                <div className="cart-item-actions ms-md-auto">
                  <div className="cart-item-price">{formatearPrecio(prod.precio)}</div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarDelCarrito(prod.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 d-flex gap-2">
            <Link to="/productos" className="btn btn-outline-warning btn-sm">
              ← Seguir comprando
            </Link>
            <button className="btn btn-outline-secondary btn-sm" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
          </div>
        </div>

        {/* Resumen de Pago */}
        <div className="col-md-4">
          <div className="cart-summary-card">
            <h4 className="cart-summary-title">Resumen de compra</h4>
            
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>{formatearPrecio(totalPrecio)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Envío</span>
              <span className="text-success">Gratis</span>
            </div>
            
            <hr className="cart-summary-divider" />
            
            <div className="cart-summary-total">
              <span className="cart-summary-total-label">Total</span>
              <span className="cart-summary-total-value">{formatearPrecio(totalPrecio)}</span>
            </div>

            <button className="btn-pay" onClick={handlePagar}>
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE BOOTSTRAP PARA EL LOGIN */}
      <Modal 
        show={showModalPago} 
        onHide={() => setShowModalPago(false)} 
        centered
        contentClassName="bg-dark text-white border-secondary"
      >
        <Modal.Header closeButton closeVariant="white" className="border-secondary">
          <Modal.Title>Inicia sesión para pagar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            Para poder finalizar tu compra y procesar el pago, necesitas estar conectado a tu cuenta.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-secondary">
          <Button variant="outline-secondary" onClick={() => setShowModalPago(false)}>
            Cancelar
          </Button>
          <Button 
            style={{ backgroundColor: 'var(--sv-primary)', border: 'none' }} 
            onClick={() => navigate('/login')}
          >
            Ir a Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Carrito;