// src/pages/Registro.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css'; 

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmPassword: ''
  });
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  
  const { registrar, login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpiamos el error del campo cuando el usuario empieza a escribir
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: '' });
    }
  };

  const validarFormulario = () => {
    const nuevosErrores: { [key: string]: string } = {};
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    
    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!regexCorreo.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un formato de correo válido.';
    }
    
    if (!formData.password) {
      nuevosErrores.password = 'La contraseña es obligatoria.';
    } else if (formData.password.length < 6) {
      nuevosErrores.password = 'Debe tener al menos 6 caracteres.';
    }

    if (formData.password !== formData.confirmPassword) {
      nuevosErrores.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const exito = registrar(formData.nombre, formData.correo, formData.password);
    
    if (exito) {
      // Auto-loguear después de registrar
      login(formData.correo, formData.password);
      navigate('/productos');
    } else {
      setErrores({ correo: 'Este correo ya está registrado.' });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Crea tu cuenta</h2>
        
        <form onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div className="mb-3">
            <label className="auth-label">Nombre Completo</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </span>
              <input 
                type="text" name="nombre" 
                className={`form-control auth-input ${errores.nombre ? 'is-invalid' : ''}`} 
                value={formData.nombre} onChange={handleChange} 
                placeholder="Tu nombre"
              />
            </div>
            {errores.nombre && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.nombre}</div>}
          </div>

          {/* Correo */}
          <div className="mb-3">
            <label className="auth-label">Correo Electrónico</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </span>
              <input 
                type="email" name="correo" 
                className={`form-control auth-input ${errores.correo ? 'is-invalid' : ''}`} 
                value={formData.correo} onChange={handleChange} 
                placeholder="ejemplo@correo.cl"
              />
            </div>
            {errores.correo && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.correo}</div>}
          </div>
          
          {/* Contraseña */}
          <div className="mb-3">
            <label className="auth-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
              </span>
              <input 
                type="password" name="password" 
                className={`form-control auth-input ${errores.password ? 'is-invalid' : ''}`} 
                value={formData.password} onChange={handleChange} 
                placeholder="Crea una contraseña" // <-- PLACEHOLDER ÚNICO
              />
            </div>
            {errores.password && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.password}</div>}
          </div>

          {/* Confirmar Contraseña */}
          <div className="mb-4">
            <label className="auth-label">Confirmar Contraseña</label>
            <div className="input-group">
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
              </span>
              <input 
                type="password" name="confirmPassword" 
                className={`form-control auth-input ${errores.confirmPassword ? 'is-invalid' : ''}`} 
                value={formData.confirmPassword} onChange={handleChange} 
                placeholder="Repite la contraseña" // <-- PLACEHOLDER ÚNICO
              />
            </div>
            {errores.confirmPassword && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.confirmPassword}</div>}
          </div>

          <button type="submit" className="auth-btn">
            Registrarme
          </button>
          
          <div className="text-center mt-4">
            <span style={{ color: '#a1a1aa', fontSize: '14px' }}>¿Ya tienes cuenta? </span>
            <Link to="/login" className="auth-link" style={{ fontSize: '14px' }}>Inicia sesión aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;