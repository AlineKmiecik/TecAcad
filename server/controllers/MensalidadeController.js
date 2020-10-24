const mensalidade = require("../models/MensalidadeSchema");

class MensalidadeController {

    async store(req, res) {
        try {
            let result = await mensalidade.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        let result = await mensalidade.
        find().
        populate('student');
        res.status(200).json(result);
    }

    async getById(req, res) {
        let result = await mensalidade.
        findById(req.params.id).
        populate('student');
        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await mensalidade.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        let result = await mensalidade.findOneAndRemove({ _id: req.params.id });
        res.status(200).json(result);
    }

}
module.exports = new MensalidadeController();