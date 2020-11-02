const mongoose = require("mongoose");

const mensalidade = new mongoose.Schema({
    dueDate: {
        type: Date,
        required: [true, "O campo Data de Vencimento é obrigatório"]
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: [true, "Campo Aluno é obrigatório"]
    },

    price: {
        type: Number,
        require: [true, "Campo Valor é obrigatório"],
        min: [0, "Valor mínimo da mensalidade é de 0 reais"]
    },

    datePaid: {
        type: Date
    },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensalidade', mensalidade);