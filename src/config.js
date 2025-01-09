const { config } = require('dotenv');

config()

module.exports = {
    MYSQLHOST: process.env.MYSQLHOST || "localhost",
    MYSQLUSER: process.env.MYSQLUSER || "root",
    MYSQLPASSWORD: process.env.MYSQLPASSWORD || "root",
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
