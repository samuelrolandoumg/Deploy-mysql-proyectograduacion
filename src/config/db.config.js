require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  MYSQLHOST: process.env.MYSQLHOST || "localhost",
  MYSQLUSER: process.env.MYSQLUSER || "root",
  MYSQLPASSWORD: process.env.MYSQLPASSWORD || "1234",
  MYSQLDATABASE: process.env.MYSQLDATABASE || "Clinica",
  MYSQLPORT: process.env.MYSQLPORT || 3306,
  dialect: "mysql2", // Agrega esta líneasa
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
