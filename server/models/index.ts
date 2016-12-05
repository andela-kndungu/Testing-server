'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {
  sequelize: '',
  Sequelize: ''
};

if (process.env['DATABASE_URL']) {
  console.log(process.env);
  var sequelize = new Sequelize('postgres://vbzwoyoibdvsne:1yx263bW80dtNA4X9HWU9RKvBK@ec2-54-235-120-39.compute-1.amazonaws.com:5432/df84qg1558nrt9', {
    dialect: 'postres'
  });
} else {
  var config    = require('../config/config.js')[env];
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
