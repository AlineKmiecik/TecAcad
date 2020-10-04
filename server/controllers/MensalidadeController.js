const Mensalidade = require("../models/Mensalidade.js");
const MensalidadeSchema = require("../models/Mensalidade.js");

class MensalidadeController {
    async store(req, res) {
        try{
            var result = await Mensalidade.create(req.body);
            console.log(req.body);
            res.status(201).json(result);
        }catch(error) {
            res.status(500).json(error)
        }
    }
    async get(req, res){
        var result = await Mensalidade.find({});
        res.status(200).json(result);
    
    }
    async getById(req, res){
        var result = await Mensalidade.findById(req.params.ID) ;
        res.status(200).json(result);
    }

    async Alter(req, res){
        var result = await Mensalidade.updateOne(req.params.id, req.body);
        console.log(req.body);
        res.status(200).json(result);
    }

    async delete(req, res){   
        var result = await Mensalidade.findOneAndRemove({_id: req.params.ID});
        //(req.params.ID);
        res.status(200).json(result); 
    }   

    
}
module.exports = new MensalidadeController();