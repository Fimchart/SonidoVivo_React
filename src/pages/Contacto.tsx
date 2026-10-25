// src/pages/Contacto.tsx
import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: '' });
    }
    setEnviado(false);
  };

  const validarFormulario = () => {
    const nuevosErrores: { [key: string]: string } = {};
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!regexCorreo.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido.';
    }
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio.';

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      // Simulamos el envío
      setEnviado(true);
      setFormData({ nombre: '', correo: '', mensaje: '' }); // Limpiamos el form
    }
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row g-4">
        
        {/* Información de Contacto */}
        <div className="col-md-5 text-light d-flex flex-column justify-content-center">
          <span className="about-subtitle mb-2">Estamos para ayudarte</span>
          <h1 className="mb-4" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
            Hablemos de Música
          </h1>
          <p className="text-muted mb-4">
            ¿Tienes dudas sobre algún instrumento? ¿Necesitas asesoría para armar tu estudio? 
            Déjanos un mensaje y nuestro equipo técnico te responderá a la brevedad.
          </p>

          <div className="d-flex align-items-start gap-3 mb-3">
            <span className="contact-icon">📍</span>
            <div>
              <h6 className="mb-1 text-white">Ubicación</h6>
              <p className="text-muted small mb-0">Av. Providencia 1234, Santiago, Chile</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3 mb-3">
            <span className="contact-icon">📞</span>
            <div>
              <h6 className="mb-1 text-white">Teléfono</h6>
              <p className="text-muted small mb-0">+56 9 1234 5678</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <span className="contact-icon">📧</span>
            <div>
              <h6 className="mb-1 text-white">Correo</h6>
              <p className="text-muted small mb-0">contacto@sonidovivo.cl</p>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="col-md-7">
          <div className="contact-card">
            <h3 className="text-white mb-4">Envíanos un mensaje</h3>
            
            {enviado && (
              <div className="alert alert-success py-2" role="alert">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="auth-label mb-2" style={{color: '#a1a1aa'}}>Nombre Completo</label>
                <input 
                  type="text" name="nombre" 
                  className={`form-control contact-input ${errores.nombre ? 'is-invalid' : ''}`}
                  value={formData.nombre} onChange={handleChange} 
                  placeholder="Tu nombre"
                />
                {errores.nombre && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.nombre}</div>}
              </div>

              <div className="mb-3">
                <label className="auth-label mb-2" style={{color: '#a1a1aa'}}>Correo Electrónico</label>
                <input 
                  type="email" name="correo" 
                  className={`form-control contact-input ${errores.correo ? 'is-invalid' : ''}`}
                  value={formData.correo} onChange={handleChange} 
                  placeholder="ejemplo@correo.cl"
                />
                {errores.correo && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.correo}</div>}
              </div>

              <div className="mb-4">
                <label className="auth-label mb-2" style={{color: '#a1a1aa'}}>Mensaje</label>
                <textarea 
                  name="mensaje" rows={4} 
                  className={`form-control contact-input ${errores.mensaje ? 'is-invalid' : ''}`}
                  value={formData.mensaje} onChange={handleChange} 
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
                {errores.mensaje && <div className="text-danger mt-1" style={{ fontSize: '12px' }}>{errores.mensaje}</div>}
              </div>

              <button type="submit" className="auth-btn w-100">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;