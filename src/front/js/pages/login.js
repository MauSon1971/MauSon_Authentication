import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext"; // Importar el contexto global
import { Register } from "../component/Register.jsx";
import "../../styles/login.css";


export const Login = () => {
  const { store, actions } = useContext(Context);

  const handleLogin = async (formData) => {
    const success = await actions.login(formData.email, formData.password);
    if (!success) {
      alert("Login failed!");
    }
  };

  const handleRegister = async (formData) => {
    const success = await actions.register(formData.email, formData.password);
    if (!success) {
      alert("Registration failed!");
    }
  };

  // Redirige al usuario si ya está autenticado
  if (store.token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page-container">
      <div className="login-box">
        {/* Usa Register para Login */}
        <Register
          type={store.token ? "register" : "login"}
          onSubmit={store.token ? handleRegister : handleLogin}
        />
      </div>
    </div>
  );
};