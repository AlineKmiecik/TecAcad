const userSchema = require("../models/UserSchema");

class LoginController {

    async authenticate(req, res) {
        const user = await userSchema.find({ username: req.body.username, password: req.body.password }).exec();
        if (!user) res = "Usuário não encontrado";
        else res.status(200).json(user);
    }

}
module.exports = new LoginController();