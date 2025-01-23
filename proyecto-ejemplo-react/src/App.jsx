
import './App.css'
import ListaUsuarios from './components/ListaUsuarios'
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './views/About'
import Home from './views/Home'
import Contact from './views/Contact'
import Login from './views/Login'


function App() {

  return (
    <BrowserRouter>
     <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/usuarios" element={<ListaUsuarios />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
