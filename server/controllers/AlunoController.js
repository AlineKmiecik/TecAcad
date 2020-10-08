const Aluno = require("../models/Aluno.js");
const AlunoSchema = require("../models/Aluno.js");

class AlunoController {
    async store(req, res) {
        try {
            var result = await Aluno.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req, res) {
        var result = await Aluno.find({});
        res.status(200).json(result);

    }
    async getByCpf(req, res) {
        var result = await Aluno.findOne({ Cpf: req.params.Cpf });
        res.status(200).json(result);
    }

    async Alter(req, res) {
        var result = await Aluno.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await Aluno.deleteOne({ Cpf: req.params.Cpf });
        res.status(200).json(result);
    }


}
module.exports = new AlunoController();