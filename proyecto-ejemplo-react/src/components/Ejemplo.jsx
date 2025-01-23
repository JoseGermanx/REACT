import Button from "./Button/Button";
import Parrafo from "./Parrafo/Parrafo";




export default function Ejemplo() {
  return (
    <>
    <h1>Hola mundo</h1>
    <Parrafo />
    <Button titulo={"Enviar"} background={"bg-color-morado"} />
    <Button titulo={"Borrar"} background={"bg-color-blue"} />
  </>
  )
}
