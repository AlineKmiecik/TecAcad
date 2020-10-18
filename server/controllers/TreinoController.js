const Treino = require("../models/Treino.js");

class TreinoController {
    async store(req, res) {
        try {
            var result = await Treino.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req, res) {
        var result = await Treino.find({});
        res.status(200).json(result);

    }
    async getById(req, res) {
        var result = await Treino.findById(req.params.ID);
        res.status(200).json(result);
    }

    async Alter(req, res) {
        var result = await Treino.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await Treino.findOneAndRemove({ _id: req.params.ID });
        //(req.params.ID);
        res.status(200).json(result);
    }


}
module.exports = new TreinoController();