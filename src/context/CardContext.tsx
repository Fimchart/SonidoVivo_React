// src/context/CartContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Producto } from '../data/Producto';

interface CartContextType {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => boolean; // Retorna true si se agregó, false si no hay sesión
  eliminarDelCarrito: (id: number) => void;
  vaciarCarrito: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    // Lógica de negocio: Verificamos si hay usuario logueado
    const usuarioGuardado = localStorage.getItem('sv_user'); // Lo guardaremos en localStorage en el Login
    if (!usuarioGuardado) {
      return false; // No está logueado, no se puede agregar
    }
    
    setCarrito((prev) => [...prev, producto]);
    return true;
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ 
      carrito, 
      agregarAlCarrito, 
      eliminarDelCarrito, 
      vaciarCarrito,
      totalItems: carrito.length 
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