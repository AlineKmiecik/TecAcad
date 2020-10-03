const mongoose  = require("mongoose");
const Atividade = require("./Atividade");
const Professor = require("./Professor");
const Aluno = require("./Aluno");

const Treino = new mongoose.Schema({
    
    Data_Treino : {
        type: Date, 
        required: [true, "O campo data treino é obrigatório"],
    },

    Aluno: Aluno,
    Professor: Professor,

    Atividade:[Atividade],

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Treino", Treino);