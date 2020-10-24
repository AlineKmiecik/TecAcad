const mongoose = require("mongoose");
const atividadeSchema = require("./AtividadeSchema.js");

const treino = new mongoose.Schema({
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

    activities: [atividadeSchema],

    concluded: {
        type: Boolean,
        default: false
    },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Treino', treino);