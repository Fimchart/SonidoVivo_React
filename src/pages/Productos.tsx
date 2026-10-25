import { useState } from 'react';
import CardProducto from "../components/molecules/CardProducto";
import { productoService } from '../Service/ProductoService';
import './Inicio.css'; // O crea un Productos.css, pero reutilizamos el contenedor

function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  const productosFiltrados = productoService.search(busqueda, categoria);

  return (
    <div className="section-container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <h1 style={{ color: 'white', marginBottom: '30px', fontFamily: 'Montserrat', fontSize: '36px' }}>
        Catálogo - Sonido Vivo
      </h1>
      
      {/* Controles de Filtro */}
      <div className="d-flex gap-3 mb-4 flex-column flex-md-row">
        <input 
          type="text" 
          className="form-control bg-dark text-white border-secondary" 
          placeholder="Buscar por nombre o código (ej: GA001)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '12px', borderRadius: '8px' }}
        />
        <select 
          className="form-select bg-dark text-white border-secondary"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={{ padding: '12px', borderRadius: '8px', maxWidth: '300px' }}
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Guitarras Acústicas">Guitarras Acústicas</option>
          <option value="Guitarras Eléctricas">Guitarras Eléctricas</option>
          <option value="Bajos">Bajos</option>
          <option value="Baterías">Baterías</option>
          <option value="Teclados">Teclados</option>
          <option value="Amplificadores">Amplificadores</option>
          <option value="Micrófonos">Micrófonos</option>
          <option value="Pedales">Pedales</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Estudio">Estudio</option>
        </select>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="alert alert-warning text-center mt-4">
          No se encontraron productos con esos filtros.
        </div>
      ) : (
        <div className="products-grid">
          {productosFiltrados.map((prod) => (
            <CardProducto
              key={prod.id}
              id={prod.id}
              titulo={prod.titulo}
              descripcion={prod.descripcion}
              precio={prod.precio}
              imagen={prod.imagen}
              categoria={prod.categoria} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;