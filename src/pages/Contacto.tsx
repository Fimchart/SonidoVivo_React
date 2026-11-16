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
  const [enviando, setEnviando] = useState(false);
  const [errorServidor, setErrorServidor] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: '' });
    }
    setEnviado(false);
    setErrorServidor('');
  };

  const validarFormulario = () => {
    const nuevosErrores: { [key: string]: string } = {};
    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    } else if (!regexSoloLetras.test(formData.nombre.trim())) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras';
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!regexCorreo.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido.';
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    if (!validarFormulario()) return;

    setEnviando(true);
    setErrorServidor('');

    try {
      // Verifica que esta URL coincida con el @RequestMapping de tu MensajeriaController
      const respuesta = await fetch('http://localhost:8082/api/mensajes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreCompleto: formData.nombre.trim(),
          correo: formData.correo.trim(),
          mensaje: formData.mensaje.trim(),
        }),
      });

      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
      }

      setEnviado(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setErrorServidor('No se pudo conectar con el servidor. Intenta nuevamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container mt-5 pb-5 pt-4">
      <div className="row g-5">
        
        {/* Información de Contacto */}
        <div className="col-md-5 d-flex flex-column justify-content-center">
          <span className="about-subtitle mb-2">Estamos para ayudarte</span>
          <h1 className="mb-4 text-white" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
            Hablemos de Música
          </h1>
          
          <p style={{ color: '#b0b0b5', lineHeight: '1.8', marginBottom: '2rem' }}>
            ¿Tienes dudas sobre algún instrumento? ¿Necesitas asesoría para armar tu estudio? 
            Déjanos un mensaje y nuestro equipo técnico te responderá a la brevedad.
          </p>

          <div className="d-flex align-items-start gap-3 mb-4">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
            </div>
            <div>
              <h6 className="mb-1 text-white">Ubicación</h6>
              <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>Av. Providencia 1234, Santiago, Chile</p>
            </div>
          </div>
          
          <div className="d-flex align-items-start gap-3 mb-4">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
              </svg>
            </div>
            <div>
              <h6 className="mb-1 text-white">Teléfono</h6>
              <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>+56 9 1234 5678</p>
            </div>
          </div>
          
          <div className="d-flex align-items-start gap-3">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
            </div>
            <div>
              <h6 className="mb-1 text-white">Correo</h6>
              <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>contacto@sonidovivo.cl</p>
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

            {errorServidor && (
              <div className="alert alert-danger py-2" role="alert">
                {errorServidor}
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

              <button type="submit" className="auth-btn w-100" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;