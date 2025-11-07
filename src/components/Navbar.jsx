import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X, Calendar, PlusCircle, LogIn } from 'lucide-react';

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (view) => {
    onNavigate(view);
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-brand">
          <img 
            src={require('../assets/logo.png')} 
            alt="Fuego y Brasa" 
            className="navbar-logo"
          />
          <div className="navbar-text">
            <h1>FUEGO Y BRASA</h1>
            <p>LIMA SAN ISIDRO</p>
          </div>
        </div>


        <div className="navbar-info">
          <span className="info-icon">📍</span>
          <span>Av. Javier Prado Oeste 2479, San Isidro</span>
        </div>


        <div className="navbar-actions">
          <button className="btn-reservar" onClick={() => handleNavigation('nueva-reserva')}>
            RESERVAR
          </button>
          
          <button className="btn-idioma">ES ▼</button>

          <button className="btn-menu" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`navbar-dropdown ${menuOpen ? 'open' : ''}`}>
        <button className="dropdown-item" onClick={() => handleNavigation('nueva-reserva')}>
          <PlusCircle size={20} />
          <span>Nueva Reserva</span>
        </button>
        
        <button className="dropdown-item" onClick={() => handleNavigation('calendario')}>
          <Calendar size={20} />
          <span>Calendario</span>
        </button>
        
        <button className="dropdown-item" onClick={() => handleNavigation('login')}>
          <LogIn size={20} />
          <span>Iniciar Sesión</span>
        </button>
      </div>

      {menuOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;