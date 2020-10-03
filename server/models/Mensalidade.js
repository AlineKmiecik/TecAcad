const mongoose  = require("mongoose");
const Aluno = require("./Aluno");
const Atividade = require("./Atividade");

const Professor = new mongoose.Schema({
    Data_Mensalidade : {
        type: Date, 
        required: [true, "O campo data_mensalidade é obrigatório"],
    },

    Aluno: Aluno,
    Atividades: [Atividade],

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Mensalidade", Mensalidade);