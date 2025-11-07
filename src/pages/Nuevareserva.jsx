// src/pages/Nuevareserva.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nuevareserva.css";

const Nuevareserva = () => {
  return (
    <div className="container mt-4 nueva-reserva">
      <h2 className="text-center mb-4">Registrar Nueva Reserva</h2>
      <div className="card p-4 shadow-sm">
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nombre del Cliente</label>
              <input type="text" className="form-control" placeholder="Ej. Juan Pérez" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input type="tel" className="form-control" placeholder="Ej. 987654321" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Fecha</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Hora</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Número de Personas</label>
            <input type="number" className="form-control" min="1" max="20" />
          </div>

          <div className="mb-3">
            <label className="form-label">Observaciones</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Ej. Mesa cerca de la ventana..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Guardar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nuevareserva;
