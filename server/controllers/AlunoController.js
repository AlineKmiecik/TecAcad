const aluno = require("../models/Aluno.js");

class AlunoController {
    async store(req, res) {
        try {
            var exists = await aluno.exists({
                status: req.body.cpf
            })
            if (!exists) {
                var result = await aluno.create(req.body);
                res.status(201).json(result);
            } else {
                throw { erro: "Aluno já cadastrado!" }
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req, res) {
        var result = await aluno.find({});
        res.status(200).json(result);

    }
    async getByCpf(req, res) {
        var result = await aluno.findOne({ Cpf: req.params.Cpf });
        res.status(200).json(result);
    }

    async Alter(req, res) {
        var result = await aluno.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await aluno.deleteOne({ Cpf: req.params.Cpf });
        res.status(200).json(result);
    }


}
module.exports = new AlunoController();