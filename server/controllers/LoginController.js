const userSchema = require("../models/UserSchema");

class LoginController {

    async authenticate(req, res) {
        try {
            const user = await userSchema.findOne({ username: req.body.username, password: req.body.password }).exec();
            if (!user) {
                throw { erro: "Usuário não encontrado!" }
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = new LoginController();