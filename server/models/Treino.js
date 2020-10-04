const mongoose  = require("mongoose");
const Atividade_Treino = require("./Atividade_Treino");


const Treino = new mongoose.Schema({
    
    Data_Treino : {
        type: Date, 
        required: [true, "O campo data treino é obrigatório"],
    },

    Cpf_Aluno:{
        type: String,
        require: [ true, "Campo cpf aluno é obrigatório"],
    },

    Cpf_Professor:{
        type: String,
        require: [ true, "Campo cpf Professor é obrigatório"],
    },

    Atividade:[Atividade_Treino],

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Treino", Treino);