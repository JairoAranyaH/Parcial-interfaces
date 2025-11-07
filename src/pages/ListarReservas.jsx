// src/pages/Listarreservas.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListarReservas.css";

const Listarreservas = () => {
  const reservas = [
    { id: 1, cliente: "Juan Pérez", fecha: "2025-11-10", hora: "19:00", personas: 4 },
    { id: 2, cliente: "Ana Torres", fecha: "2025-11-11", hora: "20:30", personas: 2 },
    { id: 3, cliente: "Carlos Rivas", fecha: "2025-11-12", hora: "18:00", personas: 6 },
  ];

  return (
    <div className="container mt-4 listar-reservas">
      <h2 className="text-center mb-4">Lista de Reservas</h2>
      <div className="card shadow-sm p-3">
        <table className="table table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Personas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.cliente}</td>
                <td>{r.fecha}</td>
                <td>{r.hora}</td>
                <td>{r.personas}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Editar</button>
                  <button className="btn btn-sm btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listarreservas;
