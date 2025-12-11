const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// 1. CONEXIÓN A LA BASE DE DATOS
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurante_bd"
});

db.connect((err) => {
    if (err) {
        console.error("❌ Error conectando a la BD: " + err.stack);
        return;
    }
    console.log("✅ ¡Conectado a la base de datos MySQL con éxito!");
});

app.get("/reservas", (req, res) => {
  db.query("SELECT * FROM reservas", (err, result) => {
    if (err) { console.log(err); } else { res.send(result); }
  });
});
// ----------------------
// REGISTRO DE USUARIO
// ----------------------
app.post("/register", (req, res) => {
  const { nombre, email, password, rol } = req.body;

  db.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, password, rol],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error en el registro");
      } else {
        res.send("Usuario registrado correctamente");
      }
    }
  );
});

// ----------------------
// LOGIN DE USUARIO
// ----------------------
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(500).send("Error en el servidor");
      }

      if (result.length > 0) {
        res.send({ status: "ok", user: result[0] });
      } else {
        res.send({ status: "error", message: "Usuario o contraseña incorrectos" });
      }
    }
  );
});

app.post("/crear", (req, res) => {
  // Recibimos los 4 datos del formulario
  const nombre = req.body.nombre_cliente;
  const fecha = req.body.fecha_reserva;
  const hora = req.body.hora_reserva;
  const personas = req.body.cantidad_personas;

  db.query(
    "INSERT INTO reservas (nombre_cliente, fecha_reserva, hora_reserva, cantidad_personas) VALUES (?,?,?,?)",
    [nombre, fecha, hora, personas],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Reserva registrada con éxito");
      }
    }
  );
});

// 4. RUTA PARA ACTUALIZAR (PUT)
app.put("/actualizar", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre_cliente;
  const fecha = req.body.fecha_reserva;
  const hora = req.body.hora_reserva;
  const personas = req.body.cantidad_personas;

  db.query(
    "UPDATE reservas SET nombre_cliente = ?, fecha_reserva = ?, hora_reserva = ?, cantidad_personas = ? WHERE id = ?",
    [nombre, fecha, hora, personas, id],
    (err, result) => {
      if (err) { console.log(err); } else { res.send(result); }
    }
  );
});

// 5. RUTA PARA ELIMINAR (DELETE)
app.delete("/eliminar/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM reservas WHERE id = ?", id, (err, result) => {
    if (err) { console.log(err); } else { res.send(result); }
  });
});

// 6. INICIAR EL SERVIDOR (Siempre al final)
app.listen(3001, () => {
  console.log("🚀 Servidor corriendo en el puerto 3001");
});

// REGISTRO DE USUARIOS
app.post("/register", (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;

  db.query(
    "INSERT INTO usuarios (usuario, password) VALUES (?, ?)",
    [usuario, password],
    (err, result) => {
      if (err) { 
        console.error(err); 
        res.status(500).send("Error registrando usuario");
      } else {
        res.send("Usuario registrado correctamente");
      }
    }
  );
});

// LOGIN DE USUARIOS
app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
    [usuario, password],
    (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.length > 0) {
        res.send({ success: true, message: "Acceso permitido" });
      } else {
        res.send({ success: false, message: "Usuario o contraseña incorrectos" });
      }
    }
  );
});

