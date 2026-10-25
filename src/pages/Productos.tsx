// src/pages/Productos.tsx
import { useState } from 'react'; // Quitamos useEffect
import CardProducto from "../components/molecules/CardProducto";
import { productoService } from '../Service/ProductoService';

function Productos() {
  // Eliminamos el estado 'productos' y el useEffect
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  // Buscamos directamente en el servicio (que se actualiza cuando vuelves del Admin)
  const productosFiltrados = productoService.search(busqueda, categoria);

  return (
    <div className="container mt-4 pb-5">
      <h1 className="mb-4">Catálogo - Sonido Vivo</h1>
      
      {/* Controles de Filtro y Búsqueda */}
      <div className="row mb-4 bg-dark p-3 rounded">
        <div className="col-12 col-md-8 mb-2 mb-md-0">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar por nombre o código (ej: GA001)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-4">
          <select 
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
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
      </div>

      {/* Mensaje si no hay resultados */}
      {productosFiltrados.length === 0 ? (
        <div className="alert alert-warning text-center">
          No se encontraron productos con esos filtros.
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
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