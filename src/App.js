import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Inicio from './pages/Inicio';
import Paneladm from './pages/Paneladm';
import Nuevareserva from './pages/Nuevareserva';
import Listarreservas from './pages/ListarReservas';
import Calendario from './pages/Calendario';
import Login from './pages/Login'; // <-- AGREGA ESTO

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  
  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Si está en la pantalla de inicio
  if (currentPage === 'inicio') {
    return (
      <Inicio 
        onEnterSystem={() => handleNavigation('login')} // <-- CAMBIADO A LOGIN
        onNavigate={handleNavigation} 
      />
    );
  }

  // Renderiza las demás páginas
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case 'panel-admin':
        return <Paneladm />;
      case 'calendario':
        return <Calendario />;
      case 'nueva-reserva':
        return <Nuevareserva onNavigate={handleNavigation} />;
      case 'lista-reservas':
        return <Listarreservas onNavigate={handleNavigation} />;
      case 'login':
        return <Login onNavigate={handleNavigation} />; // <-- NUEVO
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <Layout currentPage={currentPage} onPageChange={handleNavigation}>
      {renderPage()}
    </Layout>
  );
}

export default App;
