const mongoose  = require("mongoose");

const Atividade_Treino = new mongoose.Schema({
    Nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"],

    },

    Descricao: {
        type: String,
    },

    Status_Atividade: {
        type: String,
        require: [true, "O campo Status_Atividade é obrigatório"],
        uppercase: true, 
        enum: ["EM ANDAMENTO", "REALIZADO"],
    },

    Valor_Atividade:{
        type: Number
    },

    createdAt: {type: Date, default:Date.now},
});

module.exports = Atividade_Treino;