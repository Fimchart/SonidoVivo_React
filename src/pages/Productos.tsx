// src/pages/Productos.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardProducto from "../assets/components/molecules/CardProducto";
import { productoService } from '../Service/ProductoService';
import type { Producto } from '../data/Producto';
import './Inicio.css';

function Productos() {
  const [searchParams] = useSearchParams();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  // Cargar catálogo completo desde msProductos (puerto 8083)
  useEffect(() => {
    const cargarCatalogo = async () => {
      setCargando(true);
      setError('');
      try {
        const lista = await productoService.getAll();
        setProductos(lista);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('No se pudo conectar con el catálogo de productos (puerto 8083).');
      } finally {
        setCargando(false);
      }
    };

    cargarCatalogo();
  }, []);

  // Lee el parámetro ?categoria= de la URL y actualiza el estado
  useEffect(() => {
    const catQuery = searchParams.get('categoria');
    if (catQuery) {
      setCategoria(catQuery);
    } else {
      setCategoria('Todas');
    }
  }, [searchParams]);

  // Filtro en memoria por búsqueda y categoría (incluyendo "Guitarras")
  const productosFiltrados = productos.filter((p) => {
    const query = busqueda.trim().toLowerCase();
    const coincideBusqueda =
      !query ||
      p.titulo.toLowerCase().includes(query) ||
      p.codigo.toLowerCase().includes(query);

    const coincideCategoria =
      categoria === 'Todas'
        ? true
        : categoria === 'Guitarras'
        ? p.categoria.includes('Guitarras')
        : p.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

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
          <option value="Guitarras">Todas las Guitarras</option>
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

      {cargando ? (
        <div className="text-center text-warning py-5">
          <div className="spinner-border" role="status" />
          <p className="mt-2 mb-0">Cargando catálogo...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center mt-4">
          {error}
        </div>
      ) : productosFiltrados.length === 0 ? (
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