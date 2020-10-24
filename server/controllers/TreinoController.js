const treino = require("../models/TreinoSchema");

class TreinoController {

    async store(req, res) {
        try {
            let result = await treino.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        let result = await treino.
        find().
        populate('student').
        populate('teacher');
        res.status(200).json(result);
    }

    async getById(req, res) {
        let result = await treino.
        findById(req.params.id).
        populate('student').
        populate('teacher');
        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await treino.updateOne(req.params.id, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        res.status(200).json(await treino.findByIdAndDelete(
            req.params.id
        ));
    }


}
module.exports = new TreinoController();