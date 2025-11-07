import React from 'react';
import './BackToHome.css';

function BackToHome({ onNavigateToHome }) {
  return (
    <button 
      className="back-to-home-btn" 
      onClick={onNavigateToHome}
      title="Volver al Inicio"
    >
      🏠
    </button>
  );
}

export default BackToHome;