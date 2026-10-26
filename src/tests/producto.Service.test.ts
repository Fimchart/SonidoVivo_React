// src/tests/productoService.test.ts
import { describe, it, expect } from 'vitest';
import { productoService } from '../Service/ProductoService';

describe('Pruebas del Servicio de Productos (CRUD y Filtros)', () => {
  it('1. Debe obtener todos los productos (READ)', () => {
    const productos = productoService.getAll();
    expect(productos.length).toBeGreaterThan(0);
  });

  it('2. Debe crear un nuevo producto (CREATE)', () => {
    const nuevo = {
      codigo: 'TEST01',
      titulo: 'Producto Prueba',
      descripcion: 'Test',
      precio: 1000,
      categoria: 'Accesorios',
      imagen: 'test.jpg'
    };
    const creado = productoService.create(nuevo);
    expect(creado.id).toBeDefined();
    expect(productoService.getById(creado.id)?.titulo).toBe('Producto Prueba');
  });

  it('3. Debe actualizar un producto existente (UPDATE)', () => {
    const todos = productoService.getAll();
    const primerProducto = todos[0];
    const actualizado = productoService.update(primerProducto.id, { precio: 99999 });
    expect(actualizado?.precio).toBe(99999);
  });

  it('4. Debe eliminar un producto (DELETE)', () => {
    const creado = productoService.create({
      codigo: 'TEST02',
      titulo: 'Para Borrar',
      descripcion: 'Test',
      precio: 1000,
      categoria: 'Accesorios',
      imagen: 'test.jpg'
    });
    const exito = productoService.delete(creado.id);
    expect(exito).toBe(true);
    expect(productoService.getById(creado.id)).toBeUndefined();
  });

  it('5. Debe retornar null al intentar actualizar un ID inexistente', () => {
    const resultado = productoService.update(999999, { precio: 100 });
    expect(resultado).toBeNull();
  });

  it('6. Debe retornar false al intentar eliminar un ID inexistente', () => {
    const exito = productoService.delete(999999);
    expect(exito).toBe(false);
  });

  it('7. Debe filtrar productos por categoría', () => {
    const guitarras = productoService.search('', 'Guitarras Acústicas');
    expect(guitarras.length).toBeGreaterThan(0);
    expect(guitarras[0].categoria).toBe('Guitarras Acústicas');
  });
});