
//useState ---> manejar estado en un componente

import {useState} from 'react'



function Contador() {
    //código javascript 
    const [contador, setContador] = useState(0)
    //      estado   fn update el estado     valor inicial del estado

    // presionar el botón incrementar contador = 1
    // presionar el botón incrementar contador = 2

    // función para llevar limitar el minimo valor del contador a 0

    if (contador < 0) {
        setContador(0)
    }

    
  return (
    // código UI
    <div>
        <h1>Contador: {contador}</h1>
        <button onClick={ () => setContador(contador + 1)} >Incrementar</button>
        <button onClick={ () => setContador(contador - 1)}>Decrementar</button>
        <button onClick={ () => setContador(0)}>Reset</button>
    </div>
  )

}

export default Contador