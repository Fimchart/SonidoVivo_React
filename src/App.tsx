// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer'; // <-- Importar Footer
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Admin from './pages/Admin';

function App() {
  return (
    // min-vh-100 y flex-column hacen que el footer siempre quede abajo
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar />

      <div className="flex-grow-1"> {/* Este div empuja el footer hacia abajo */}
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/producto/:id' element={<ProductoDetalle />} />
          <Route path='/quienessomos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App;