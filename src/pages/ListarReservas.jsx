import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListarReservas.css";

const ListarReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [editando, setEditando] = useState(null);

  // Estado para el formulario (adaptado a los nombres de la BD)
  const [formData, setFormData] = useState({
    id: "",
    nombre_cliente: "",
    fecha_reserva: "",
    hora_reserva: "",
    cantidad_personas: "",
  });

  // 🔄 FUNCIÓN: Obtener reservas de la BD
  const obtenerReservas = () => {
    Axios.get("http://localhost:3001/reservas").then((response) => {
      setReservas(response.data);
    });
  };

  // Se ejecuta al cargar la página
  useEffect(() => {
    obtenerReservas();
  }, []);

  // 🗑️ ELIMINAR (Conectado a BD)
  const eliminarReserva = (id) => {
    const confirmacion = window.confirm("¿Seguro que deseas eliminar esta reserva?");
    if (confirmacion) {
      Axios.delete(`http://localhost:3001/eliminar/${id}`).then(() => {
        alert("Reserva eliminada");
        obtenerReservas(); // Refrescamos la lista
      });
    }
  };

  // Preparar edición
  const editarReserva = (reserva) => {
    setEditando(reserva.id);
    setFormData(reserva);
  };

  // 💾 GUARDAR CAMBIOS (Conectado a BD)
  const guardarCambios = () => {
    Axios.put("http://localhost:3001/actualizar", {
      id: formData.id,
      nombre_cliente: formData.nombre_cliente,
      fecha_reserva: formData.fecha_reserva,
      hora_reserva: formData.hora_reserva,
      cantidad_personas: formData.cantidad_personas,
    }).then(() => {
      alert("Reserva actualizada correctamente");
      setEditando(null);
      obtenerReservas(); // Refrescamos la lista para ver los cambios
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formatear fecha para que se vea bonita (opcional)
  const formatearFecha = (fechaString) => {
     // A veces MySQL devuelve la fecha en formato largo, cortamos los primeros 10 caracteres
     return fechaString ? String(fechaString).substring(0, 10) : "";
  };

  return (
    <div className="container mt-4 listar-reservas">
      <h2 className="text-center mb-4">Lista de Reservas (Base de Datos)</h2>

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

                {editando === r.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="nombre_cliente" // Debe coincidir con formData
                        value={formData.nombre_cliente}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="fecha_reserva"
                        value={formatearFecha(formData.fecha_reserva)}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="hora_reserva"
                        value={formData.hora_reserva}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="cantidad_personas"
                        value={formData.cantidad_personas}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td>
                      <button className="btn btn-sm btn-success me-2" onClick={guardarCambios}>
                        Guardar
                      </button>
                      <button className="btn btn-sm btn-secondary" onClick={() => setEditando(null)}>
                        Cancelar
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {/* Aquí usamos los nombres de columnas de tu BD MySQL */}
                    <td>{r.nombre_cliente}</td>
                    <td>{formatearFecha(r.fecha_reserva)}</td>
                    <td>{r.hora_reserva}</td>
                    <td>{r.cantidad_personas}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => editarReserva(r)}>
                        Editar
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => eliminarReserva(r.id)}>
                        Eliminar
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {reservas.length === 0 && (
          <p className="text-center text-muted mt-3">
            No hay reservas registradas o no hay conexión con el servidor.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListarReservas;