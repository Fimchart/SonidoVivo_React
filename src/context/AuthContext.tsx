// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  usuario: string | null;
  rol: 'admin' | 'user' | null;
  login: (correo: string, password: string) => Promise<boolean>;
  registrar: (nombre: string, correo: string, password: string, apellido?: string) => Promise<boolean>;
  logout: () => void;
}

const API_URL = 'http://localhost:8081/api/usuarios';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(localStorage.getItem('sv_user'));
  const [rol, setRol] = useState<'admin' | 'user' | null>(
    localStorage.getItem('sv_user') ? ((localStorage.getItem('sv_rol') as 'admin' | 'user') || 'user') : null
  );

  const registrar = async (
    nombreCompleto: string,
    correo: string,
    password: string,
    apellidoParam?: string
  ): Promise<boolean> => {
    try {
      const partes = nombreCompleto.trim().split(/\s+/);
      const nombre = apellidoParam ? nombreCompleto.trim() : partes[0];
      const apellido = apellidoParam
        ? apellidoParam.trim()
        : partes.slice(1).join(' ') || 'Cliente';

      const response = await fetch(`${API_URL}/registro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          apellido,
          email: correo,
          password,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  };

  const login = async (correo: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      const rolMapeado: 'admin' | 'user' = data.rol === 'ADMIN' ? 'admin' : 'user';
      const emailUsuario = data.email || correo;

      setUsuario(emailUsuario);
      setRol(rolMapeado);
      localStorage.setItem('sv_user', emailUsuario);
      localStorage.setItem('sv_rol', rolMapeado);
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  const logout = () => {
    setUsuario(null);
    setRol(null);
    localStorage.removeItem('sv_user');
    localStorage.removeItem('sv_rol');
  };

  return (
    <AuthContext.Provider value={{ usuario, rol, login, registrar, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return context;
}