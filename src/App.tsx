// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/organism/Navbar';
import Footer from './assets/components/organism/Footer';
import RutaProtegida from './context/RutaProtegida';

// Importación de páginas
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/Admin';
import Carrito from './pages/Carrito';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'; // Tu archivo exacto

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          {/* Rutas Públicas */}
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/producto/:id' element={<ProductoDetalle />} />
          <Route path='/quienessomos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          {/* Ruta del Carrito */}
          <Route path='/carrito' element={<Carrito />} />

          {/* Ruta Protegida (Solo Admin) */}
          <Route 
            path='/admin' 
            element={
              <RutaProtegida rolRequerido="admin">
                <Admin />
              </RutaProtegida>
            } 
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;