// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface UsuarioDB {
  nombre: string;
  correo: string;
  password: string;
}

interface AuthContextType {
  usuario: string | null;
  login: (correo: string, password: string) => boolean;
  registrar: (nombre: string, correo: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(localStorage.getItem('sv_user'));

  const registrar = (nombre: string, correo: string, password: string) => {
    // Obtenemos usuarios existentes o un arreglo vacío
    const usuariosGuardados = JSON.parse(localStorage.getItem('sv_users') || '[]');
    
    // Verificamos si el correo ya está registrado
    if (usuariosGuardados.find((u: UsuarioDB) => u.correo === correo)) {
      return false; 
    }

    const nuevoUsuario: UsuarioDB = { nombre, correo, password };
    localStorage.setItem('sv_users', JSON.stringify([...usuariosGuardados, nuevoUsuario]));
    return true;
  };

  const login = (correo: string, password: string) => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('sv_users') || '[]');
    const usuarioValido = usuariosGuardados.find((u: UsuarioDB) => u.correo === correo && u.password === password);
    
    // Usuario de prueba por defecto (opcional, para que puedas entrar rápido)
    if (correo === 'admin@sonidovivo.cl' && password === 'admin123') {
      setUsuario(correo);
      localStorage.setItem('sv_user', correo);
      return true;
    }

    if (usuarioValido) {
      setUsuario(correo);
      localStorage.setItem('sv_user', correo);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('sv_user');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, registrar, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return context;
}