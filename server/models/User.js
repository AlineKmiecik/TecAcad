const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "O campo Primeiro Nome é obrigatório"]
    },

    lastname: {
        type: String,
        require: [true, "O campo Último Nome é obrigatório"]
    },

    document: {
        type: String,
        require: [true, "O campo Cpf é obrigatório"]
    },

    type: {
        type: String,
        require: [true, "O campo Tipo é obrigatório"],
        enum: ["Aluno", "Professor", "Staff"]
    },

    username: {
        type: String,
        require: [true, "O campo Nome de Usuario é obrigatório"]
    },

    password: {
        type: String,
        require: [true, "O campo Senha é obrigatório"]
    },

    status: {
        type: String,
        require: [true, "O campo Status é obrigatório"],
        enum: ["Ativo", "Inativo"]
    },

    token: {
        type: String
    },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);