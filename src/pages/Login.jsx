import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Completa todos los campos");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password
      });

      if (res.data.success) {
        onNavigate("dashboard");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error en el servidor");
    }
  };

  return (
    <div className="login-bg" style={{ pointerEvents: "auto" }}>
      <div className="login-card animate-pop" onClick={(e) => e.stopPropagation()}>
        <h2 className="login-title">Bienvenido</h2>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        {error && <p className="login-error">{error}</p>}

        <input
          className="login-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Iniciar Sesión
        </button>

        <p className="login-register" onClick={() => onNavigate("register")}>
          ¿No tienes cuenta? Regístrate
        </p>
      </div>
    </div>
  );
}
