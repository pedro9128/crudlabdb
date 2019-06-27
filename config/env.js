const env = {
    database: 'alunos',
    username: 'root',
    password: '9a1b3m',
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