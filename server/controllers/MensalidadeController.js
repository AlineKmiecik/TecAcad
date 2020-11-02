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

            let currentDate = new Date;
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();

            let trainings = await treino.find().populate('student').populate('teacher');
            let billingMap = new Map();

            trainings.forEach(training => {
                let student = training.student.id;
                let trainingMonth = training.date.getMonth();
                let trainingYear = training.date.getFullYear();
                let trainingPrice = 0;


                if (trainingYear == currentYear && trainingMonth == currentMonth) {
                    training.activities.forEach(activitie => {
                        trainingPrice += activitie.price;
                    })

                    if (billingMap.has(student)) {
                        let studentBilling = billingMap.get(student)
                        let alreadyExists = false;

                        studentBilling.billings.forEach(billing => {
                            if (billing.year == trainingYear && billing.month == trainingMonth) {
                                trainingPrice += billing.price;
                                alreadyExists = true;
                            }
                        })

                        if (alreadyExists) {
                            billingMap.set(student, { billings: [{ year: trainingYear, month: trainingMonth, price: trainingPrice }] })
                        } else {
                            let newBilling = { year: trainingYear, month: trainingMonth, price: trainingPrice };
                            billingMap.set(student, { billings: [...studentBilling.billings, newBilling] });
                        }

                    } else {
                        billingMap.set(student, { billings: [{ year: trainingYear, month: trainingMonth, price: trainingPrice }] })
                    }
                }
            })

            let dueDate = new Date;
            if (currentMonth < 11) {
                dueDate = new Date(currentYear, currentMonth + 1, 10, 23, 59, 59);
            } else {
                dueDate = new Date(currentYear + 1, 0, 10, 23, 59, 59);
            }

            billingMap.forEach(student => {

                let studentToBill = [...billingMap.entries()]
                    .filter(({ 1: v }) => v === student)
                    .map(([k]) => k);

                student.billings.forEach(bill => {
                    mensalidade.create({ //TODO Validar se o documento já não existe ANTES de gravar no banco. Do jeito que está permite multiplicidade
                        "dueDate": dueDate,
                        "student": studentToBill,
                        "price": bill.price
                    });
                })

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

    async deleteAll(req, res) {
        let result = await mensalidade.remove({});
        res.status(200).json(result);
    }

}
module.exports = new MensalidadeController();