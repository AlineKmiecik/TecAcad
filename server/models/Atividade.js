const mongoose  = require("mongoose");

const Atividade = new mongoose.Schema({
    Nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"],

    },

    Descricao: {
        type: String,
    },

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Atividade", Atividade);