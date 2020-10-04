const mongoose  = require("mongoose");

const Aluno = new mongoose.Schema({
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

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Aluno", Aluno);