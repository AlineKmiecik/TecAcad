const users = require("../models/User");

class LoginController {

    async authenticate(req, res) {
        const user = await users.find({ username: req.body.username, password: req.body.password }).exec();
        if (!user) res = "Nao encontrado";
        else res.status(200).json(user);
    }

}
module.exports = new LoginController();