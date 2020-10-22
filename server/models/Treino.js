const mongoose = require("mongoose");
const atividade = require("./Atividade");
const user = require("./User");


const Treino = new mongoose.Schema({

    date: {
        type: Date,
        required: [true, "O campo Data do Treino é obrigatório"],
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    activities: [atividade],

    concluded: {
        type: Boolean,
        default: false
    },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Treino", Treino);