import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Inicio from './pages/Inicio';
import Paneladm from './pages/Paneladm';
import Nuevareserva from './pages/Nuevareserva';
import Listarreservas from './pages/ListarReservas';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'inicio') {
    return (
      <Inicio 
        onEnterSystem={() => handleNavigation('dashboard')} 
        onNavigate={handleNavigation} 
      />
    );
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'panel-admin':
        return <Paneladm />;
      case 'calendario':
        return (
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '20px' }}>
              Calendario
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Vista del calendario en construcción...
            </p>
          </div>
        );
      case 'nueva-reserva':
        return <Nuevareserva />;
      case 'lista-reservas':
        return <Listarreservas />;
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
