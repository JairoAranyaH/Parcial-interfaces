import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; 

function Header({ onNavigateToHome }) {
  return (
    <header className="header">
      <div className="header-content">

        <div className="header-logo" onClick={onNavigateToHome} title="Volver al Inicio">
          <img src={logo} alt="Fuego y Brasa" className="logo-img" />
          <div className="logo-text">
            <h1>FUEGO Y BRASA</h1>
            <p>RESTAURANTE</p>
          </div>
        </div>

        <div className="header-title">
          <h2>Sistema de Reservas</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
