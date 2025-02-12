import { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", formData);
      alert("Usuario registrado exitosamente");
    } catch (err) {
      alert("Error al registrar: " + err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Correo" value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Contraseña" value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
