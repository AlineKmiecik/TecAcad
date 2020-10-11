const mongoose = require("mongoose");

const Aluno = new mongoose.Schema({
    nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"]
    },

    cpf: {
        type: String,
        require: [true, "O campo Cpf é obrigatório"]
    },

    status: {
        type: String,
        require: [true, "O campo Status é obrigatório"],
        enum: ["Ativo", "Inativo"]
    },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Aluno", Aluno);