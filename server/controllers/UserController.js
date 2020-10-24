const user = require("../models/UserSchema");

class UserController {

    async store(req, res) {
        try {
            var exists = await user.exists({
                document: req.body.document
            })
            if (!exists) {
                var result = await user.create(req.body);
                res.status(201).json(result);
            } else {
                throw { erro: "Usuário já cadastrado!" }
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        var result = await user.find({});
        res.status(200).json(result);

    }

    async getByType(req, res) {
        console.log("entr: " + req.params.type);
        var result = await user.find({ type: req.params.type }).exec();
        res.status(200).json(result);
    }

    async getById(req, res) {
        console.log("entr: " + req.params.id);
        var result = await user.findOne({ _id: req.params.id });
        console.log("mas: " + result);
        res.status(200).json(result);
    }

    async update(req, res) {
        var result = await user.updateOne(req.params.document, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await user.deleteOne({ document: req.params.document });
        res.status(200).json(result);
    }


}
module.exports = new UserController();