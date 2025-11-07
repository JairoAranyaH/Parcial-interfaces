import React from 'react';
import './Inicio.css';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

function Inicio({ onEnterSystem, onNavigate }) {
  return (
    <div className="inicio-container">
      <Navbar onNavigate={onNavigate} />

      <section className="inicio-hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Fuego y Brasa" />
          </div>

          <h1>SABOR EN CADA CORTE</h1>
          
          <p className="hero-description">
            Te invitamos a encender tus sentidos. Aquí, el aroma de la leña y el sabor 
            de cortes selectos se fusionan para crear momentos únicos, acompañados de 
            las mejores guarniciones y un servicio excepcional.
          </p>

          <button className="btn-primary" onClick={onEnterSystem}>
            ACCEDER AL SISTEMA
          </button>
        </div>

        <div className="hero-image">
          <img src={require('../assets/fondooscuro.png')} alt="Corte de carne premium" />
        </div>
      </section>

      <section className="food-showcase">
        <div className="food-images">
          <div className="food-card">
            <img src={require('../assets/piernes.png')} alt="Plato especial" />
          </div>
          <div className="food-card">
            <img src={require('../assets/carne.png')} alt="Corte jugoso" />
          </div>
        </div>
      </section>


      <section className="horarios-section">
        <h2>HORARIOS</h2>
        <div className="divider"></div>
        <div className="horarios-content">
          <div><strong>Lunes - Viernes:</strong> 12:00 PM - 11:00 PM</div>
          <div><strong>Sábados:</strong> 1:00 PM - 12:00 AM</div>
          <div><strong>Domingos:</strong> 1:00 PM - 10:00 PM</div>
        </div>
      </section>


      <section className="location-section">
        <h2>UBICACIÓN</h2>
        <div className="divider"></div>
        <p>Av. Javier Prado Oeste 2479, San Isidro, Lima, Perú</p>
        <button className="btn-secondary">Ver en Google Maps</button>
      </section>


      <footer className="inicio-footer">
        <p>© 2025 Restaurante Fuego y Brasa - Hotel Dazzler San Isidro</p>
        <p>Sistema de Reservas • Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Inicio;
