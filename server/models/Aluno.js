const mongoose  = require("mongoose");
const Treino = require("./Treino");
const Mensalidade = require("./Mensalidade");

const Professor = new mongoose.Schema({
    Nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"],

    },

    Cpf: {
        type: String,
        require: [true, "O campo Cpf é obrigatório"],
    },

    Status_Matricula: {
        type: String,
        require: [true, "O campo Status_Matricula é obrigatório"],
        uppercase: true, 
        enum: ["PENDENTE", "VALIDO"],
    },

    Treino: [Treino],
    Mensalidade: [Mensalidade],

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Aluno", Aluno);