const Professor = require("../models/Professor.js");
const ProfessorSchema = require("../models/Professor.js");

class ProfessorController {
    async store(req, res) {
        try{
            var result = await Professor.create(req.body);
            console.log(req.body);
            res.status(201).json(result);
        }catch(error) {
            res.status(500).json(error)
        }
    }
    async get(req, res){
        var result = await Professor.find({});
        res.status(200).json(result);
    
    }
    async getByCpf(req, res){
        var result = await Professor.findOne({Cpf : req.params.Cpf}) ;
        res.status(200).json(result);
    }

    async Alter(req, res){
        var result = await Professor.updateOne(req.params.id, req.body);
        console.log(req.body);
        res.status(200).json(result);
    }

    async delete(req, res){   
        var result = await Professor.deleteOne({Cpf: req.params.Cpf});
        res.status(200).json(result);
    }   

    
}
module.exports = new ProfessorController();