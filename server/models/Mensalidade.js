const mongoose = require("mongoose");
const user = require("./User");

const Mensalidade = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "O campo Data é obrigatório"]
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },

    price: {
        type: Number,
        require: [true, "Campo Valor é obrigatório"],
        min: [0, "Valor mínimo da mensalidade é de 0 reais"]
    },

    payed: {
        type: Boolean,
        default: false
    },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mensalidade", Mensalidade);