
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import Contador from './components/Contador'
import Formulario from './components/Formulario'
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Bienvenidos</h1>} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/usuarios" element={<ListaUsuarios />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
