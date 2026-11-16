// src/pages/Admin.tsx
import { useState, useEffect } from 'react';
import { productoService } from '../Service/ProductoService';
import type { Producto } from '../data/Producto';

interface MensajeContacto {
  id: number;
  nombreCompleto: string;
  correo: string;
  mensaje: string;
  estado?: string;
  fechaCreacion?: string;
}

const formInicial = {
  codigo: '',
  titulo: '',
  descripcion: '',
  precio: 0,
  categoria: 'Guitarras Acústicas',
  imagen: '/imagenes/productos/default.jpg'
};

function Admin() {
  const [tabActiva, setTabActiva] = useState<'productos' | 'mensajes'>('productos');

  const [productos, setProductos] = useState<Producto[]>([]);
  const [formData, setFormData] = useState<Omit<Producto, 'id'>>(formInicial);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  const [mensajes, setMensajes] = useState<MensajeContacto[]>([]);
  const [cargandoMensajes, setCargandoMensajes] = useState(false);
  const [errorMensajes, setErrorMensajes] = useState('');

  const cargarProductos = () => {
    setProductos(productoService.getAll());
  };

  const cargarMensajes = async () => {
    setCargandoMensajes(true);
    setErrorMensajes('');
    try {
      const respuesta = await fetch('http://localhost:8082/api/mensajes');
      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
      }
      const datos = await respuesta.json();
      setMensajes(Array.isArray(datos) ? datos : []);
    } catch (error) {
      console.error('Error al cargar mensajes:', error);
      setMensajes([]);
      setErrorMensajes('No se pudieron cargar los mensajes desde el servidor (puerto 8082).');
    } finally {
      setCargandoMensajes(false);
    }
  };

  useEffect(() => {
    cargarProductos();
    cargarMensajes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'precio' ? Number(value) : value
    });
    if (errores[name]) {
      setErrores({ ...errores, [name]: '' });
    }
  };

  const validarFormulario = () => {
    const nuevosErrores: { [key: string]: string } = {};

    if (!formData.codigo.trim()) nuevosErrores.codigo = 'El código es obligatorio.';
    if (!formData.titulo.trim()) nuevosErrores.titulo = 'El título es obligatorio.';
    if (!formData.descripcion.trim()) nuevosErrores.descripcion = 'La descripción es obligatoria.';
    if (formData.precio <= 0) nuevosErrores.precio = 'El precio debe ser mayor a 0.';

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    if (editandoId !== null) {
      productoService.update(editandoId, formData);
      setEditandoId(null);
      alert('Producto actualizado correctamente');
    } else {
      productoService.create(formData);
      alert('Producto creado correctamente');
    }

    setFormData(formInicial);
    cargarProductos();
  };

  const handleEdit = (prod: Producto) => {
    setFormData({
      codigo: prod.codigo,
      titulo: prod.titulo,
      descripcion: prod.descripcion,
      precio: prod.precio,
      categoria: prod.categoria,
      imagen: prod.imagen
    });
    setEditandoId(prod.id);
    setErrores({});
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      productoService.delete(id);
      cargarProductos();
      if (editandoId === id) {
        setEditandoId(null);
        setFormData(formInicial);
      }
    }
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <h1 className="text-white mb-0">Panel de Administración</h1>

        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${tabActiva === 'productos' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setTabActiva('productos')}
          >
            Productos ({productos.length})
          </button>
          <button
            type="button"
            className={`btn ${tabActiva === 'mensajes' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => {
              setTabActiva('mensajes');
              cargarMensajes();
            }}
          >
            Mensajes de Contacto ({mensajes.length})
          </button>
        </div>
      </div>

      {tabActiva === 'productos' && (
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="bg-dark p-4 rounded border border-secondary">
              <h3 className="text-white mb-3">{editandoId ? 'Editar Producto' : 'Nuevo Producto'}</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label text-light">Código</label>
                  <input type="text" className={`form-control ${errores.codigo ? 'is-invalid' : ''}`} name="codigo" value={formData.codigo} onChange={handleChange} />
                  {errores.codigo && <div className="invalid-feedback">{errores.codigo}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Título</label>
                  <input type="text" className={`form-control ${errores.titulo ? 'is-invalid' : ''}`} name="titulo" value={formData.titulo} onChange={handleChange} />
                  {errores.titulo && <div className="invalid-feedback">{errores.titulo}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Descripción</label>
                  <textarea className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`} name="descripcion" value={formData.descripcion} onChange={handleChange} rows={2} />
                  {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Precio</label>
                  <input type="number" className={`form-control ${errores.precio ? 'is-invalid' : ''}`} name="precio" value={formData.precio} onChange={handleChange} min="0" />
                  {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Categoría</label>
                  <select className="form-select" name="categoria" value={formData.categoria} onChange={handleChange}>
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

                <button type="submit" className="btn btn-primary w-100 mb-2">
                  {editandoId ? 'Guardar Cambios' : 'Crear Producto'}
                </button>

                {editandoId && (
                  <button type="button" className="btn btn-secondary w-100" onClick={() => { setEditandoId(null); setFormData(formInicial); setErrores({}); }}>
                    Cancelar Edición
                  </button>
                )}
              </form>
            </div>
          </div>

          <div className="col-md-8">
            <div className="bg-dark p-4 rounded border border-secondary">
              <h3 className="text-white mb-3">Lista de Productos ({productos.length})</h3>
              <div className="table-responsive">
                <table className="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Título</th>
                      <th>Precio</th>
                      <th>Categoría</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((prod) => (
                      <tr key={prod.id}>
                        <td>{prod.codigo}</td>
                        <td>{prod.titulo}</td>
                        <td>${prod.precio.toLocaleString('es-CL')}</td>
                        <td>{prod.categoria}</td>
                        <td>
                          <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(prod)}>
                            Editar
                          </button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod.id)}>
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {tabActiva === 'mensajes' && (
        <div className="bg-dark p-4 rounded border border-secondary">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-white mb-0">Contactos Recibidos ({mensajes.length})</h3>
            <button
              type="button"
              className="btn btn-sm btn-outline-light"
              onClick={cargarMensajes}
              disabled={cargandoMensajes}
            >
              {cargandoMensajes ? 'Actualizando...' : 'Actualizar'}
            </button>
          </div>

          {errorMensajes && (
            <div className="alert alert-danger py-2">{errorMensajes}</div>
          )}

          {!cargandoMensajes && !errorMensajes && mensajes.length === 0 ? (
            <p className="text-secondary mb-0">Aún no hay mensajes registrados.</p>
          ) : (
            <div className="row g-3">
              {mensajes.map((msg) => (
                <div className="col-md-6" key={msg.id}>
                  <div className="p-3 rounded border border-secondary h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#16161a' }}>
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="text-white mb-0">{msg.nombreCompleto}</h5>
                          <small className="text-info">{msg.correo}</small>
                        </div>
                        <span className="badge bg-warning text-dark">
                          {msg.estado || 'PENDIENTE'}
                        </span>
                      </div>
                      <p className="text-light mt-2 mb-3">{msg.mensaje}</p>
                    </div>

                    {msg.fechaCreacion && (
                      <small className="text-secondary border-top border-secondary pt-2">
                        Recibido: {String(msg.fechaCreacion)}
                      </small>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;