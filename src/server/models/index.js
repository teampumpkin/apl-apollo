'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
// const config = {
//   // "username": process.env.RDS_USER,
//   // "password": process.env.RDS_PASS,
//   // "database": process.env.RDS_DB,
//   // // "host": process.env.RDS_HOST,
//   // // "port": process.env.RDS_PORT,
//   // "dialect": "mysql"
//   dialect: "mysql",
//   seederStorage: "sequelize",
//   url: process.env.DB_URI
// };


let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

const dbURI = process.env.DB_URI;
sequelize = new Sequelize(dbURI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false
});
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && file !== 'index.js' && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.assets.belongsTo(db.products);
db.products.hasMany(db.assets);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
