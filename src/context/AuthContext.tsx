// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  usuario: string | null;
  rol: 'admin' | 'user' | null;
  login: (correo: string, password: string) => boolean;
  registrar: (nombre: string, correo: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(localStorage.getItem('sv_user'));
  const [rol, setRol] = useState<'admin' | 'user' | null>(
    localStorage.getItem('sv_user') ? (localStorage.getItem('sv_rol') as 'admin' | 'user' || 'user') : null
  );

  const registrar = (nombre: string, correo: string, password: string) => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('sv_users') || '[]');
    if (usuariosGuardados.find((u: any) => u.correo === correo)) return false;
    const nuevoUsuario = { nombre, correo, password };
    localStorage.setItem('sv_users', JSON.stringify([...usuariosGuardados, nuevoUsuario]));
    return true;
  };

  const login = (correo: string, password: string) => {
    // 1. Credenciales de ADMINISTRADORES (Hardcodeadas para la demo)
    const admins = [
      { correo: 'ThomasAdmin@sonidovivo.cl', password: 'Thomas2024!' },
      { correo: 'MatiasAdmin@sonidovivo.cl', password: 'Matias2024!' }
    ];

    const esAdmin = admins.find(a => a.correo === correo && a.password === password);

    if (esAdmin) {
      setUsuario(correo);
      setRol('admin');
      localStorage.setItem('sv_user', correo);
      localStorage.setItem('sv_rol', 'admin');
      return true;
    }

    // 2. Usuarios normales registrados
    const usuariosGuardados = JSON.parse(localStorage.getItem('sv_users') || '[]');
    const usuarioValido = usuariosGuardados.find((u: any) => u.correo === correo && u.password === password);
    
    if (usuarioValido) {
      setUsuario(correo);
      setRol('user');
      localStorage.setItem('sv_user', correo);
      localStorage.setItem('sv_rol', 'user');
      return true;
    }
    
    return false;
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