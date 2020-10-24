const atividade = require("../models/AtividadeSchema");

class AtividadeController {

    async store(req, res) {
        try {
            var result = await atividade.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        var result = await atividade.find({});
        res.status(200).json(result);

    }

    async getById(req, res) {
        var result = await atividade.findById(req.params.id);
        res.status(200).json(result);
    }

    async update(req, res) {
        var result = await atividade.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await atividade.findOneAndRemove({ _id: req.params.id });
        res.status(200).json(result);
    }


}
module.exports = new AtividadeController();