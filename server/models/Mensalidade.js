const mongoose  = require("mongoose");

const Mensalidade = new mongoose.Schema({
    Data_Mensalidade : {
        type: Date, 
        required: [true, "O campo data_mensalidade é obrigatório"],
    },

    Cpf_Aluno:{
        type: String,
        require: [ true, "Campo cpf aluno é obrigatório"],
    },
    
    Valor_Mensalidade:{
        type: Number,
        require: [true, "Campo valor mensalidade é obrigatório"],
        min: [0, "Valor mínimo da mensalidade é de 0 reais"],
    },

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Mensalidade", Mensalidade);