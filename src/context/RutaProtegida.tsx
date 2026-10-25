// src/components/auth/RutaProtegida.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
  rolRequerido?: 'admin' | 'user';
}

export default function RutaProtegida({ children, rolRequerido }: Props) {
  const { usuario, rol } = useAuth();

  // Si no hay usuario logueado, lo enviamos al login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Si la ruta requiere ser admin, pero el usuario no lo es, lo enviamos al inicio
  if (rolRequerido === 'admin' && rol !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // Si pasa las validaciones, mostramos el componente
  return <>{children}</>;
}