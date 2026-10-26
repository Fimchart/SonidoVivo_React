// src/pages/PreguntasFrecuentes.tsx
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function PreguntasFrecuentes() {
  const [searchParams] = useSearchParams();
  const [abierta, setAbierta] = useState<number | null>(0);

  const preguntas = [
    {
      key: 'pagos',
      pregunta: '¿Cuáles son los métodos de pago disponibles?',
      respuesta: 'Aceptamos tarjetas de crédito y débito mediante Webpay Plus, transferencias bancarias directas y pago en cuotas sin interés con bancos asociados.'
    },
    {
      key: 'envios',
      pregunta: '¿Hacen envíos a todo Chile?',
      respuesta: 'Sí, realizamos despachos a todas las regiones de Chile a través de Starken, Chilexpress y Blue Express. Los tiempos de entrega varían entre 24 y 72 horas hábiles según la región.'
    },
    {
      key: 'devoluciones',
      pregunta: '¿Cómo funciona la política de cambios y devoluciones?',
      respuesta: 'Tienes 10 días desde que recibes tu producto para solicitar el cambio o reembolso completo. El instrumento o accesorio debe estar sin uso, con sus etiquetas y en el empaque original.'
    },
    {
      key: 'garantia',
      pregunta: '¿Los instrumentos cuentan con garantía?',
      respuesta: 'Todos nuestros productos cuentan con garantía legal de 6 meses por fallas de fábrica. Además, ofrecemos calibración gratuita durante el primer año en instrumentos de cuerda.'
    },
    {
      key: 'showroom',
      pregunta: '¿Puedo probar un instrumento antes de comprarlo?',
      respuesta: '¡Por supuesto! Puedes agendar una cita para probar cualquier equipo en nuestro showroom ubicado en Av. Providencia 1234, Santiago.'
    },
    {
      key: 'seguimiento',
      pregunta: '¿Cómo puedo hacer el seguimiento de mi pedido?',
      respuesta: 'Una vez despachado tu paquete, recibirás un correo electrónico con el número de seguimiento y el enlace directo de la empresa de transporte.'
    }
  ];

  // Si entra con un parámetro (ej: ?cat=garantia), busca el índice y la despliega automáticamente
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      const index = preguntas.findIndex(p => p.key === cat);
      if (index !== -1) {
        setAbierta(index);
      }
    }
  }, [searchParams]);

  const togglePregunta = (index: number) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <main style={{ backgroundColor: '#181b20', minHeight: '80vh' }} className="py-5 text-white">
      <div className="container py-4" style={{ maxWidth: '800px' }}>
        
        {/* Encabezado */}
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark fw-bold px-3 py-2 mb-2 rounded-pill text-uppercase">
            Centro de Ayuda
          </span>
          <h1 className="display-5 fw-bold mb-3">Preguntas Frecuentes</h1>
          <p className="text-secondary fs-5">
            Resuelve tus dudas sobre compras, envíos, garantías y nuestros productos.
          </p>
        </div>

        {/* Acordeón manual con React State */}
        <div className="d-flex flex-column gap-3">
          {preguntas.map((item, index) => {
            const isAbierta = abierta === index;
            return (
              <div 
                key={item.key} 
                className="rounded-3 overflow-hidden border border-secondary shadow-sm"
                style={{ backgroundColor: '#1e2229' }}
              >
                {/* Botón de la Pregunta */}
                <button
                  onClick={() => togglePregunta(index)}
                  className="w-100 p-3 text-start d-flex justify-content-between align-items-center bg-transparent border-0 text-white fw-bold fs-6"
                  style={{ cursor: 'pointer' }}
                >
                  <span>{item.pregunta}</span>
                  <span 
                    className="text-warning fs-6" 
                    style={{ 
                      transform: isAbierta ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease' 
                    }}
                  >
                    ▼
                  </span>
                </button>

                {/* Contenido de la Respuesta */}
                {isAbierta && (
                  <div 
                    className="p-3 border-top border-secondary"
                    style={{ backgroundColor: '#181b20', color: '#d1d5db', lineHeight: '1.6' }}
                  >
                    {item.respuesta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloque de Contacto al final */}
        <div 
          className="mt-5 p-4 rounded-4 text-center border border-warning shadow"
          style={{ backgroundColor: '#1e2229' }}
        >
          <h5 className="fw-bold text-white mb-2">¿Aún tienes preguntas?</h5>
          <p className="text-secondary mb-3">
            Si no encontraste lo que buscabas, escríbenos directamente a nuestro equipo de soporte.
          </p>
          <Link to="/contacto" className="btn btn-warning fw-bold text-dark px-4 shadow-sm">
            Contactar a Soporte →
          </Link>
        </div>

      </div>
    </main>
  );
}

export default PreguntasFrecuentes;