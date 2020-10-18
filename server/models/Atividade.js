const mongoose = require("mongoose");

const Atividade = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "O campo Nome é obrigatório"]
    },

    description: {
        type: String
    },

    concluded: {
        type: Boolean,
        default: false
    },

    price: {
        type: Number,
        default: 0
    },

    createdAt: { type: Date, default: Date.now },
});

module.exports = Atividade;