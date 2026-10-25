// src/pages/ProductoDetalle.tsx
import { useState } from 'react'; // <-- Importamos useState
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // <-- Importamos el Modal
import { productoService } from '../Service/ProductoService';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Boton from '../components/atoms/Boton';

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart();
  const { usuario } = useAuth();
  
  // Estado para controlar el modal
  const [showModal, setShowModal] = useState(false);

  const producto = productoService.getById(Number(id));

  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Producto no encontrado</h2>
        <Boton onClick={() => navigate('/productos')} variant="primary">
          Volver al catálogo
        </Boton>
      </div>
    );
  }

  const formatearPrecio = (valor: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
  };

  const handleComprar = () => {
    if (!usuario) {
      // En lugar de alert(), mostramos el modal
      setShowModal(true);
      return;
    }
    agregarAlCarrito(producto);
    alert(`${producto.titulo} agregado al carrito.`); // (También podrías cambiar esto por un Toast de Bootstrap)
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row bg-dark p-4 rounded border border-secondary">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src={producto.imagen} 
            alt={producto.titulo} 
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'contain', width: '100%' }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <span className="badge bg-primary mb-2 align-self-start">{producto.categoria}</span>
          <h1 className="text-white">{producto.titulo}</h1>
          <p className="text-muted">Código: {producto.codigo}</p>
          <p className="text-light mt-3">{producto.descripcion}</p>
          <h3 className="text-warning mt-3">{formatearPrecio(producto.precio)}</h3>
          
          <div className="mt-4 d-flex gap-3">
            <Boton onClick={handleComprar} variant="primary">
              Agregar al Carrito 🛒
            </Boton>
            <Boton onClick={() => navigate('/productos')} variant="secondary">
              Volver
            </Boton>
          </div>
        </div>
      </div>

      {/* MODAL DE BOOTSTRAP ELEGANTE */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        contentClassName="bg-dark text-white border-secondary"
      >
        <Modal.Header closeButton closeVariant="white" className="border-secondary">
          <Modal.Title>Inicia sesión</Modal.Title>
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

export default ProductoDetalle;