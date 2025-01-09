require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

module.exports = {
  MYSQLHOST: process.env.MYSQLHOST || "localhost",
  MYSQLUSER: process.env.MYSQLUSER || "root",
  MYSQLPASSWORD: process.env.MYSQLPASSWORD || "root",
  MYSQLDATABASE: process.env.MYSQLDATABASE || "Clinica",
  MYSQLPORT: process.env.MYSQLPORT || 3306, // El puerto predeterminado de MySQL es 3306
  dialect: "mysql2", // Cambiar el dialecto de mssql a mysql
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
};