
import './App.css'
import Button from './components/Button/Button'
import Parrafo from './components/Parrafo/Parrafo'

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <Parrafo />
      <Button titulo={"Enviar"} background={"bg-color-morado"} />
      <Button titulo={"Borrar"} background={"bg-color-blue"} />
    </>
  )
}

export default App
