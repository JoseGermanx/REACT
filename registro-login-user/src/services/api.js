import axios from "axios";

const api = axios.create({
  baseURL: "https://literate-tribble-w4x46vvgq2g9r4-8080.app.github.dev", // Cambia según tu servidor
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
