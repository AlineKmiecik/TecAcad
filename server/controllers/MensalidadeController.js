const mensalidade = require("../models/MensalidadeSchema");
const treino = require("../models/TreinoSchema");
const students = require("../models/UserSchema");
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

class MensalidadeController {

    async store(req, res) {
        try {
            let result = await mensalidade.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async generate(req, res) {
        try {

            let trainings = await treino.find().populate('student').populate('teacher');
            let billingMap = new Map();

            trainings.forEach(training => {
                let student = training.student;
                let month = training.date.getMonth();
                let year = training.date.getFullYear();
                let trainingPrice = 0;

                training.activities.forEach(activitie => {
                    trainingPrice += activitie.price;
                })

                if (billingMap.has(student)) {
                    let studentBilling = billingMap.get(student)
                    let alreadyExists = false;

                    studentBilling.billings.forEach(billing => {
                        if (billing.year == year && billing.month) {
                            trainingPrice += billing.price;
                            alreadyExists = true;
                        }
                    })
                    if (alreadyExists) {
                        billingMap.set(student, { billings: [{ year: year, month: month, price: trainingPrice }] })
                    } else {
                        let newBilling = { year: year, month: month, price: trainingPrice };
                        billingMap.set(student, { billings: [...studentBilling.billings, newBilling] });
                    }
                } else {
                    billingMap.set(student, { billings: [{ year: year, month: month, price: trainingPrice }] })
                }
            })


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