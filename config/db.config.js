const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    },
    define: {
        charset: 'utf8mb4',
        timestamps: false
    },
    dialectOptions: {
        collate: 'utf8mb4_general_ci',
        useUTC: true,
        timezone: process.env.db_timezone
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;

//Models/tables
db.alunos = require('../model/aluno-model.js')(sequelize, Sequelize);


module.exports = db;