import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Cambia según tu servidor
});

// Interceptor para añadir el token a las solicitudes protegidas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
