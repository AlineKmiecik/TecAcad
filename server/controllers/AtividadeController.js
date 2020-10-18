const Atividade = require("../models/Atividade");

class AtividadeController {

    async store(req, res) {
        try {
            var result = await Atividade.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        var result = await Atividade.find({});
        res.status(200).json(result);

    }

    async getById(req, res) {
        var result = await Atividade.findById(req.params.ID);
        res.status(200).json(result);
    }

    async Alter(req, res) {
        var result = await Atividade.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await Atividade.findOneAndRemove({ _id: req.params.ID });
        //(req.params.ID);
        res.status(200).json(result);
    }


}
module.exports = new AtividadeController();