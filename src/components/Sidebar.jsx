import React from 'react';
import './Sidebar.css';

function Sidebar({ currentPage, onPageChange }) {
  const menuItems = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'panel-admin', label: 'Panel Admin', icon: '⚙️' }, // NUEVO
  { id: 'calendario', label: 'Calendario', icon: '📅' },
  { id: 'nueva-reserva', label: 'Nueva reserva', icon: '➕' },
  { id: 'lista-reservas', label: 'Lista de reservas', icon: '📋' }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`sidebar-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;