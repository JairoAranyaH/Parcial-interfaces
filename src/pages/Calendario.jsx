import React, { useState } from "react";
import "./Calendario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hora, setHora] = useState("21:00 - 22:00");
  const [personas, setPersonas] = useState("2 Personas");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [acepta, setAcepta] = useState(false);

  const diasMes = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleConfirmar = () => {
    if (!selectedDate) {
      alert("Por favor selecciona una fecha.");
      return;
    }
    if (!acepta) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    alert(`Reserva confirmada para ${selectedDate.toLocaleDateString("es-ES")} a las ${hora}`);
  };

  return (
    <div className="calendario-container">
      <div className="overlay"></div>

      <div className="calendario-content container d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">

          <div className="col-md-5 calendario-card p-4 text-white rounded">
            <div className="d-flex align-items-center mb-4">
              
            <img src={logo} alt="Logo" className="logo me-3" />
              <h2 className="titulo">FUEGO Y BRASA</h2>
            </div>

            <h3 className="text-center mb-3">NOVIEMBRE 2025</h3>

            <div className="dias-semana d-flex justify-content-between text-secondary mb-2">
              <span>DO</span><span>LU</span><span>MA</span><span>MI</span><span>JU</span><span>VI</span><span>SA</span>
            </div>

            <div className="dias-grid d-flex flex-wrap">
              {diasMes.map((dia) => {
                const fecha = new Date(2025, 10, dia);
                const seleccionado =
                  selectedDate && selectedDate.getDate() === dia;
                return (
                  <button
                    key={dia}
                    className={`dia-btn ${seleccionado ? "activo" : ""}`}
                    onClick={() => setSelectedDate(fecha)}
                  >
                    {dia}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 d-flex justify-content-center gap-2">
              <span className="badge bg-warning text-dark">9:00 - 10:00</span>
              <span className="badge bg-secondary">Reservado temporalmente</span>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-md-5 formulario-card p-4 text-white rounded">
            <h4 className="text-center mb-4">Confirma tu Reserva</h4>

            <p><strong>Fecha seleccionada:</strong>{" "}
              {selectedDate
                ? selectedDate.toLocaleDateString("es-ES", {
                    weekday: "short",
                    day: "numeric",
                    month: "long",
                  })
                : "Ninguna"}
            </p>

            <div className="mb-3">
              <label className="form-label">Hora:</label>
              <select
                className="form-select"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              >
                <option>21:00 - 22:00</option>
                <option>22:00 - 23:00</option>
                <option>23:00 - 00:00</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Número de personas:</label>
              <select
                className="form-select"
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
              >
                <option>2 Personas</option>
                <option>3 Personas</option>
                <option>4 Personas</option>
                <option>5 Personas</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo:</label>
              <input
                type="email"
                className="form-control"
                placeholder="tu@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono:</label>
              <input
                type="tel"
                className="form-control"
                placeholder="999 999 999"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={acepta}
                onChange={(e) => setAcepta(e.target.checked)}
              />
              <label className="form-check-label">
                Acepto términos y condiciones
              </label>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-warning text-dark fw-bold"
                onClick={handleConfirmar}
              >
                Confirmar
              </button>
              <button className="btn btn-secondary">Cancelar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calendario;
