import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const estadisticas = [
    { titulo: 'Reservas de Hoy', valor: 12, color: 'var(--color-primary)' },
    { titulo: 'Mesas Ocupadas', valor: 8, color: 'var(--color-primary-dark)' },
    { titulo: 'Mesas Disponibles', valor: 4, color: '#b8975a' }
  ];

  const proximasReservas = [
    { hora: '18:00', nombre: 'Jairo Aranya', mesa: 'Mesa 5', personas: 4, estado: 'Confirmada' },
    { hora: '19:30', nombre: 'César Mendoza', mesa: 'Mesa 3', personas: 3, estado: 'Confirmada' },
    { hora: '20:30', nombre: 'Kianna Muñoz', mesa: 'Mesa 8', personas: 8, estado: 'Confirmada' }
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      
      {/* Tarjetas de estadísticas */}
      <div className="stats-grid">
        {estadisticas.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-label">{stat.titulo}</div>
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.valor}
            </div>
          </div>
        ))}
      </div>

      <div className="reservas-header">
        <h3>Próximas Reservas</h3>
        <button className="btn-nueva-reserva">+ Nueva Reserva</button>
      </div>

      <div className="reservas-list">
        {proximasReservas.map((reserva, index) => (
          <div key={index} className="reserva-item">
            <span className="reserva-hora">{reserva.hora}</span>
            <span className="reserva-nombre">{reserva.nombre}</span>
            <span className="reserva-mesa">{reserva.mesa}</span>
            <span className="reserva-personas">{reserva.personas} personas</span>
            <span className="reserva-estado">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;