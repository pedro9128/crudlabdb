module.exports = (sequelize, Sequelize) => {
    const Aluno = sequelize.define('aluno', {
        primeiro_nome: {
            type: Sequelize.STRING(64)
        },
        ultimo_nome: {
            type: Sequelize.STRING(64)
        },
        email: {
            type: Sequelize.STRING(64)
        }

    });

    return Aluno;
}