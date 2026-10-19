import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/organismos/Navbar';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import QuienesSomos from './paginas/QuienesSomos';
import Contacto from './paginas/Contacto';


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