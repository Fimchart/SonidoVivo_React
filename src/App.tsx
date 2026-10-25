import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Admin from './pages/Admin';
import Login from './pages/Login'; // <-- Asegúrate de importar Login

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/producto/:id' element={<ProductoDetalle />} />
          <Route path='/quienessomos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} /> {/* <-- Asegúrate de tener esta ruta */}
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App;