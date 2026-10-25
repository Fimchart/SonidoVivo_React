import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Importación de Boton eliminada para quitar el warning

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!correo || !password) {
      setError('Debes completar ambos campos.');
      return;
    }
    
    login(correo);
    localStorage.setItem('sv_user', correo);
    navigate('/productos'); 
  };

  return (
    <div className="container mt-5 pb-5 d-flex justify-content-center">
      <div className="bg-dark p-5 rounded border border-secondary" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-white text-center mb-4">Iniciar Sesión</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-light">Correo Electrónico</label>
            <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="ejemplo@correo.cl"/>
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Contraseña</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******"/>
          </div>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'var(--sv-primary)', border: 'none', padding: '10px' }}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;