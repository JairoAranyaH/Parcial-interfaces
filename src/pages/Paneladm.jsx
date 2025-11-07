import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import './Paneladm.css';

function PanelAdmin() {
  const [reservasHoy] = useState([
    { id: 1, hora: '12:00', cliente: 'Juan Pérez', personas: 4, pendiente: false, estado: 'Confirmada' },
    { id: 2, hora: '13:30', cliente: 'María López', personas: 2, pendiente: true, estado: 'Pendiente' },
    { id: 3, hora: '14:00', cliente: 'Carlos Ruiz', personas: 6, pendiente: false, estado: 'Confirmada' },
    { id: 4, hora: '15:30', cliente: 'Ana Torres', personas: 3, pendiente: false, estado: 'Confirmada' },
    { id: 5, hora: '19:00', cliente: 'Pedro Sánchez', personas: 8, pendiente: false, estado: 'Confirmada' },
    { id: 6, hora: '20:00', cliente: 'Laura Gómez', personas: 5, pendiente: false, estado: 'Cancelada' }
  ]);

  // Datos de las mesas (simulando un restaurante)
  const mesas = [
    { id: 1, numero: 1, capacidad: 2, estado: 'libre' },
    { id: 2, numero: 2, capacidad: 4, estado: 'ocupada' },
    { id: 3, numero: 3, capacidad: 4, estado: 'reservada' },
    { id: 4, numero: 4, capacidad: 2, estado: 'libre' },
    { id: 5, numero: 5, capacidad: 6, estado: 'ocupada' },
    { id: 6, numero: 6, capacidad: 4, estado: 'reservada' },
    { id: 7, numero: 7, capacidad: 4, estado: 'libre' },
    { id: 8, numero: 8, capacidad: 8, estado: 'ocupada' },
    { id: 9, numero: 9, capacidad: 4, estado: 'mantenimiento' },
    { id: 10, numero: 10, capacidad: 2, estado: 'libre' },
    { id: 11, numero: 11, capacidad: 6, estado: 'reservada' },
    { id: 12, numero: 12, capacidad: 4, estado: 'ocupada' }
  ];

  // Estadísticas para el gráfico
  const estadisticasSemana = [
    { dia: 'Lun', reservas: 12 },
    { dia: 'Mar', reservas: 15 },
    { dia: 'Mié', reservas: 18 },
    { dia: 'Jue', reservas: 22 },
    { dia: 'Vie', reservas: 28 },
    { dia: 'Sáb', reservas: 32 },
    { dia: 'Dom', reservas: 25 }
  ];

  const getEstadoBadge = (estado) => {
    switch(estado) {
      case 'Confirmada':
        return <Badge bg="success"><FaCheckCircle /> {estado}</Badge>;
      case 'Pendiente':
        return <Badge bg="warning"><FaClock /> {estado}</Badge>;
      case 'Cancelada':
        return <Badge bg="danger"><FaTimesCircle /> {estado}</Badge>;
      default:
        return <Badge bg="secondary">{estado}</Badge>;
    }
  };

  const getMesaClass = (estado) => {
    switch(estado) {
      case 'libre': return 'mesa-libre';
      case 'ocupada': return 'mesa-ocupada';
      case 'reservada': return 'mesa-reservada';
      case 'mantenimiento': return 'mesa-mantenimiento';
      default: return '';
    }
  };

  const getMesaIcon = (estado) => {
    switch(estado) {
      case 'libre': return '✓';
      case 'ocupada': return '●';
      case 'reservada': return '◐';
      case 'mantenimiento': return '⚠';
      default: return '';
    }
  };

  return (
    <div className="panel-admin">
      <Container fluid>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h2 className="panel-title">Panel de Administración</h2>
            <p className="text-muted">Gestión de reservas y mesas - Restaurante Zani</p>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col lg={12}>
            <Card className="shadow-sm animate-fade-in">
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">📅 Reservas del Día</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Hora</th>
                        <th>Cliente</th>
                        <th>Personas</th>
                        <th>Pendiente</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservasHoy.map((reserva, index) => (
                        <tr 
                          key={reserva.id} 
                          className="animate-slide-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="fw-bold">{reserva.hora}</td>
                          <td>{reserva.cliente}</td>
                          <td>{reserva.personas}</td>
                          <td>
                            {reserva.pendiente ? 
                              <Badge bg="warning">Pendiente</Badge> : 
                              <Badge bg="success">Confirmada</Badge>
                            }
                          </td>
                          <td>{getEstadoBadge(reserva.estado)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={6}>
            <Card className="shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">🪑 Ocupación Actual - Zona Principal</h5>
              </Card.Header>
              <Card.Body>
                <div className="mesas-grid">
                  {mesas.slice(0, 6).map((mesa) => (
                    <div 
                      key={mesa.id} 
                      className={`mesa-card ${getMesaClass(mesa.estado)}`}
                      data-tooltip={`Mesa ${mesa.numero} - ${mesa.capacidad} personas`}
                    >
                      <div className="mesa-numero">{mesa.numero}</div>
                      <div className="mesa-icon">{getMesaIcon(mesa.estado)}</div>
                      <div className="mesa-capacidad">{mesa.capacidad}p</div>
                    </div>
                  ))}
                </div>

                {/* Leyenda */}
                <div className="leyenda mt-3">
                  <div className="leyenda-item">
                    <span className="leyenda-color libre"></span> Libre
                  </div>
                  <div className="leyenda-item">
                    <span className="leyenda-color ocupada"></span> Ocupada
                  </div>
                  <div className="leyenda-item">
                    <span className="leyenda-color reservada"></span> Reservada
                  </div>
                  <div className="leyenda-item">
                    <span className="leyenda-color mantenimiento"></span> Mantenimiento
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">🪑 Ocupación Actual - Zona VIP</h5>
              </Card.Header>
              <Card.Body>
                <div className="mesas-grid">
                  {mesas.slice(6).map((mesa) => (
                    <div 
                      key={mesa.id} 
                      className={`mesa-card ${getMesaClass(mesa.estado)}`}
                      data-tooltip={`Mesa ${mesa.numero} - ${mesa.capacidad} personas`}
                    >
                      <div className="mesa-numero">{mesa.numero}</div>
                      <div className="mesa-icon">{getMesaIcon(mesa.estado)}</div>
                      <div className="mesa-capacidad">{mesa.capacidad}p</div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card className="shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">📊 Estadísticas Rápidas</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4} className="text-center mb-3">
                    <h3 className="text-primary mb-2">24</h3>
                    <p className="text-muted mb-0">Total Reservas (Semana)</p>
                  </Col>
                  <Col md={4} className="text-center mb-3">
                    <h3 className="text-success mb-2">85%</h3>
                    <p className="text-muted mb-0">Ingresos Estimados</p>
                  </Col>
                  <Col md={4} className="text-center mb-3">
                    <h3 className="text-warning mb-2">3</h3>
                    <p className="text-muted mb-0">Ingresos Estimados (HOY)</p>
                  </Col>
                </Row>

                <div className="grafico-barras mt-4">
                  {estadisticasSemana.map((dia, index) => (
                    <div key={index} className="barra-container">
                      <div 
                        className="barra"
                        style={{ 
                          height: `${(dia.reservas / 35) * 100}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <span className="barra-valor">{dia.reservas}</span>
                      </div>
                      <div className="barra-label">{dia.dia}</div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PanelAdmin;