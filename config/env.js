const env = {
    database: 'alunos',
    username: 'root',
    password: '23456',
    host: 'localhost',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
