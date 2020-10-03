const mongoose  = require("mongoose");
const Atividade = require("./Atividade");

const Professor = new mongoose.Schema({
    Nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"],

    },

    Cpf: {
        type: String,
        require: [true, "O campo Cpf é obrigatório"],
    },

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Professor", Professor);