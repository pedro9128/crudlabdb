module.exports = function(app) {

    const alunos = require('../controller/aluno-controller.js');

    app.post('/api/alunos/criar', alunos.create);

    app.get('/api/alunos', alunos.findAll);

    app.get('/api/alunos/:alunoId', alunos.findById);

    app.put('/api/alunos/:alunoId', alunos.update);

    app.delete('/api/alunos/:alunoId', alunos.delete);
}