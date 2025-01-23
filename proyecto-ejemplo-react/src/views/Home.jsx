
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate()

    useEffect(() => {

        // verificar si el usuario esta autenticado --> false

    navigate("/login")

    }, [])

  return (
    <div>Home</div>
  )
}

export default Home