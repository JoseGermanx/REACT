
import { useState } from 'react'



function Formulario() {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
   
    const handleSubmit = (event) => {
        event.preventDefault();
        //lógica para utilizar esos datos del estado
        console.log("Nombre: ", nombre)
        console.log("Email: ", email)
        setNombre("")
        setEmail("")
    }


  return (

    <div style={{textAlign: "center"}}>
        <h1>Formulario de registro</h1>
        <form onSubmit={handleSubmit} >
            <label>
                Nombre:
                <input
                    type="text"
                    placeholder="Indica tu nombre"
                    onChange={(event) => setNombre(event.target.value) }
                    value={nombre}
                />
            </label>
            <label>
                Email:
                <input
                type="email"
                placeholder="Indica tu correo"
                onChange={(event) => setEmail(event.target.value) }
                value={email}
                
                />
            </label>

            <button type='submit'>Enviar</button>

        </form>

    </div>

  )

}

export default Formulario