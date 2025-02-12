import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password)
    } catch (err) {
      console.log(err)
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Correo" value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Contraseña" value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
