import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/organismos/Navbar';
import Footer from './componentes/moleculas/Footer';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import QuienesSomos from './paginas/QuienesSomos';
import Contacto from './paginas/Contacto';
import DetalleProducto from './paginas/DetalleProducto';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route 
            path='/'
            element={<Inicio />}
          />

          <Route 
            path='/productos'
            element={<Productos />}
          />

          <Route 
            path='/quienessomos'
            element={<QuienesSomos />}
          />

          <Route 
            path='/contacto'
            element={<Contacto />}
          />

          <Route
          path="/producto/:id"
          element={<DetalleProducto/>}
        />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;