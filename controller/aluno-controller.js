const db = require('../config/db.config.js');
const Aluno = db.alunos;

exports.create = (req, res) => {

    Aluno.create({
        primeiro_nome: req.body.primeiro_nome,
        ultimo_nome: req.body.ultimo_nome,
        email: req.body.email
    }).then(aluno => {
        res.send(aluno);
    });
};

exports.findAll = (req, res) => {
    Aluno.findAll().then(alunos => {
        res.send(alunos);
    });
};

exports.findById = (req, res) => {
    Aluno.findByPk(req.params.alunoId, { attributes: { exclude: ["createdAt", "updatedAt"] } })
        .then(aluno => {
            if (!aluno) {
                return res.status(404).json({ message: "Aluno não encontrado" })
            }
            return res.status(200).json(aluno)
        })
        .catch(error => res.status(400).send(error));
};

exports.update = (req, res) => {
    return Aluno.findByPk(req.params.alunoId)
        .then(
            aluno => {
                if (!aluno) {
                    return res.status(404).json({
                        message: 'Aluno não encontrado',
                    });
                }
                return aluno.update({
                        primeiro_nome: req.body.primeiro_nome,
                        ultimo_nome: req.body.ultimo_nome,
                        email: req.body.email
                    })
                    .then(() => res.status(200).json(aluno))
                    .catch((error) => res.status(400).send(error));
            }
        )
        .catch((error) => res.status(400).send(error));
};

exports.delete = (req, res) => {
    const id = req.params.alunoId;
    Aluno.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('Aluno com o id = ' + id + ' removido com sucesso!');
    });
};