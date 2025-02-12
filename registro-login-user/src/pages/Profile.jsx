import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido, {user?.data.name}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
