import { useState, useEffect } from 'react'
// listar usuarios desde una api externa

// estado interno --> useState -> array

// useEffect para traer los datos externos


function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [cargar, setCargar] = useState(false)

    // useEffect para ejecutar código después de que el componente se renderiza

    useEffect(()=>{
        if(cargar == true){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsuarios(data))
        }
        console.log("ejecutando useEffect")

    },[cargar])

    // useEffect indicando dependencias vacias [] - se ejecuta una sola vez cuando se carga el componente

    // useEffect sin dependencias - se ejecuta cada vez que se renderiza el componente

    // useEffect con alguna dependencia, este se ejecuta cuando cambia el valor de esa dependencia

    const handleCargar = () => {
        setCargar(true)
    }

  return (
    <div>
        <h1>Lista usuarios</h1>
        <button onClick={handleCargar}>Cargar datos</button>
        <ul>
       {usuarios.map((usuario) => (
         <li key={usuario.id}>{usuario.username}</li>
       ))
        }
        </ul>

    </div>
  )

}

export default ListaUsuarios