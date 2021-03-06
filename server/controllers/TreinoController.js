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

    async getByIdAndType(req, res) {
        let result;

        if (req.params.type == "Aluno") {
            result = await treino.
            find({ student: req.params.id }).
            populate('student').
            populate('teacher');
        } else if (req.params.type == "Professor") {
            result = await treino.
            find({ teacher: req.params.id }).
            populate('student').
            populate('teacher');
        } else {
            result = await treino.
            find().
            populate('student').
            populate('teacher');
        }

        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await treino.updateOne({ _id: req.body._id }, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        res.status(200).json(await treino.findByIdAndDelete(
            req.params.id
        ));
    }

    async listPriceByTrainingId(req, res) {
        let result = await treino.findById(req.params.id);

        let totalPrice = Number(0);
        let activities = [];
        activities = result.activities;

        activities.forEach(activitie => {
            totalPrice += activitie.price;
        });

        res.status(200).json(totalPrice);
    }

}
module.exports = new TreinoController();