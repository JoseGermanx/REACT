import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Cargar usuario desde localStorage
  useEffect(() => {
    api.get("/user-data")
      .then((response) => {
        console.log("response user data: ", response.data.data)
        if (response.status === 200) setUser(response.data.data)
      })
  }, []);
  

  const login = async (email, password) => {
    try {
      await api.post("/login", { email, password });
    } catch (error) {
      alert("Hubo un error")
    }
    const profile = await api.get("/user-data");
    setUser(profile.data.data);
    navigate("/profile");
  };
  
  const logout = async () => {
    await api.get("/logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
