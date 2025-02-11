const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.MYSQLDATABASE,
  dbConfig.MYSQLUSER,
  dbConfig.MYSQLPASSWORD,
  {
    host: dbConfig.MYSQLHOST,
    port: dbConfig.MYSQLPORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.horarios = require("./horario.model.js")(sequelize, Sequelize);

module.exports = db;