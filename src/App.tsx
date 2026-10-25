import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organism/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';


function App() {
  return (
    <>
      <Navbar />

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
      </Routes>
    </>
  )
}

export default App