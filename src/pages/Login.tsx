// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css'; 

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
    
    const exito = login(correo, password);
    
    if (exito) {
      navigate('/productos'); 
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Iniciar Sesión</h2>
        
        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <label className="auth-label">Correo Electrónico</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </span>
              <input 
                type="email" 
                className="form-control auth-input" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                placeholder="ejemplo@correo.cl"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="auth-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
              </span>
              <input 
                type="password" 
                className="form-control auth-input" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <div className="alert alert-danger py-2 text-center" style={{ fontSize: '14px' }}>{error}</div>}

          <button type="submit" className="auth-btn">
            Ingresar a mi cuenta
          </button>
          
          <div className="text-center mt-4">
            <span style={{ color: '#a1a1aa', fontSize: '14px' }}>¿No tienes cuenta? </span>
            <Link to="/registro" className="auth-link" style={{ fontSize: '14px' }}>Regístrate aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;