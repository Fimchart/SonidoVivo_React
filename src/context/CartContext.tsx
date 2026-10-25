// src/context/CartContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Producto } from '../data/Producto';

interface CartContextType {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => boolean;
  eliminarDelCarrito: (id: number) => void;
  vaciarCarrito: () => void;
  totalItems: number;
  totalPrecio: number; // <-- NUEVO
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    const usuarioGuardado = localStorage.getItem('sv_user');
    if (!usuarioGuardado) return false; // No está logueado
    
    setCarrito((prev) => [...prev, producto]);
    return true;
  };

  const eliminarDelCarrito = (id: number) => {
    // Buscamos el índice del primer producto con ese ID y lo eliminamos
    setCarrito((prev) => {
      const index = prev.findIndex(p => p.id === id);
      if (index === -1) return prev;
      const nuevoCarrito = [...prev];
      nuevoCarrito.splice(index, 1);
      return nuevoCarrito;
    });
  };

  const vaciarCarrito = () => setCarrito([]);

  // Cálculo automático del total a pagar
  const totalPrecio = carrito.reduce((total, producto) => total + producto.precio, 0);

  return (
    <CartContext.Provider value={{ 
      carrito, 
      agregarAlCarrito, 
      eliminarDelCarrito, 
      vaciarCarrito,
      totalItems: carrito.length,
      totalPrecio
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider');
  return context;
}