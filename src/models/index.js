const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, // Nombre de la base de datos
    process.env.MYSQL_USER,     // Usuario
    process.env.MYSQL_PASSWORD, // Contraseña
    {
      host: process.env.MYSQL_HOST, // Dirección del host (mysql.railway.internal)
      port: process.env.MYSQL_PORT || 3306, // Puerto (3306)
      dialect: "mysql", // Dialecto que usas (MySQL)
    }
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.horarios = require("./horario.model.js")(sequelize, Sequelize);

module.exports = db;