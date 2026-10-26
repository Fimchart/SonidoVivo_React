// src/services/productService.ts
import { productosIniciales, type Producto } from '../data/Producto';

// Estado en memoria que inicia cargando todos los productos enriquecidos
let db: Producto[] = [...productosIniciales];

export const productoService = {
  // READ (Obtener todos los productos)
  getAll: (): Producto[] => {
    return db;
  },

  // READ (Obtener por ID para la vista de detalle)
  getById: (id: number): Producto | undefined => {
    return db.find((p) => p.id === id);
  },

  // CREATE (Agregar nuevo producto desde el panel de administración)
  create: (nuevoProducto: Omit<Producto, 'id'>): Producto => {
    const nuevoId = db.length > 0 ? Math.max(...db.map((p) => p.id)) + 1 : 1;
    const producto: Producto = { ...nuevoProducto, id: nuevoId };
    db.push(producto);
    return producto;
  },

  // UPDATE (Editar producto existente)
  update: (id: number, productoActualizado: Partial<Producto>): Producto | null => {
    const index = db.findIndex((p) => p.id === id);
    if (index !== -1) {
      db[index] = { ...db[index], ...productoActualizado };
      return db[index];
    }
    return null;
  },

  // DELETE (Eliminar producto)
  delete: (id: number): boolean => {
    const index = db.findIndex((p) => p.id === id);
    if (index !== -1) {
      db.splice(index, 1);
      return true;
    }
    return false;
  },

  // FILTRO DE BÚSQUEDA Y CATEGORÍA
  search: (termino: string, categoria?: string): Producto[] => {
    let filtrados = db;

    if (termino) {
      const query = termino.toLowerCase();
      filtrados = filtrados.filter(
        (p) =>
          p.titulo.toLowerCase().includes(query) ||
          p.codigo.toLowerCase().includes(query)
      );
    }

    if (categoria && categoria !== 'Todas') {
      filtrados = filtrados.filter((p) => p.categoria === categoria);
    }

    return filtrados;
  }
};