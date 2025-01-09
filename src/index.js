require("dotenv").config();
const express = require("express");
const sequelize = require("./models"); // Ruta corregida para importar sequelize
const app = express();

const { PORT } = require("./config/db.config"); // Ruta corregida para importar la configuración


//dep
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importa los modelos y sincroniza la base de datos
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Fallo al conectar a la db: " + err.message);
  });

require("./routers/horario.routes")(app);

// Establece el puerto y escucha las solicitudes
app.listen(PORT || 8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});