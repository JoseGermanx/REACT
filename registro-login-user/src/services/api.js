import axios from "axios";

const api = axios.create({
  baseURL: "https://literate-tribble-w4x46vvgq2g9r4-8080.app.github.dev", // Dominio del backend
  withCredentials: true, // Habilita las cookies
});

export default api;

