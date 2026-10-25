// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organism/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import ProductoDetalle from './pages/ProductoDetalle'; // <-- Nuevo
import Admin from './pages/Admin'; // <-- Nuevo

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/producto/:id' element={<ProductoDetalle />} /> {/* <-- Ruta con parámetro */}
        <Route path='/quienessomos' element={<QuienesSomos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/admin' element={<Admin />} /> {/* <-- Ruta del Admin */}
      </Routes>
    </>
  )
}

export default App;