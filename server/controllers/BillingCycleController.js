const billingCycle = require("../models/BillingCycleSchema.js");
//lodash

//npm install @angular/cli -g
//ng -v
//ng -help

class BillingCycleController {
  async store(req, res) {
    try {
      var result = await billingCycle.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    var result = await billingCycle.find({});
    res.status(200).json(result);
  }

  async getById(req, res) {
    var result = await billingCycle.findById(req.params.cycleId);
    res.status(200).json(result);
  }
}

module.exports = new BillingCycleController();
