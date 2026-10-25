// src/pages/ProductoDetalle.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { productoService } from '../Service/ProductoService';
import Boton from '../components/atoms/Boton';

function ProductoDetalle() { // <-- Aquí NO debe haber props
  const { id } = useParams();
  const navigate = useNavigate();
  
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
          
          <div className="mt-4">
            <Boton onClick={() => navigate('/productos')} variant="secondary">
              Volver al catálogo
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;