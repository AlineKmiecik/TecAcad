const mongoose = require("mongoose");
const creditSchema = require("./CreditSchema.js");
const debitSchema = require("./DebitSchema.js");

const billingCycleSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "O campo data do ciclo de pagamento é obrigatório"],
    min: ["2015-01-01", "A data não pode ser menor do que 01/01/2015"],
    max: ["2050-01-01", "A data não pode ser maior do que 01/01/2050"],
  },
  credits: [creditSchema],
  debits: [debitSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cycles", billingCycleSchema);
