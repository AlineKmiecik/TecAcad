const users = require("../models/User");

class LoginController {

    /*
    async authenticate(req, res) {
        console.log("Entr");
        const { username, password } = body;
        const user = users.find(x => x.username === username && x.password === password);
        if (!user) res.error('Os dados informados não estão corretos');
        res({
            ...basicDetails(user),
            token: 'fake-jwt-token'
        })
    } */

    /*
    async authenticate(req, res) {
        var result = await user.find({ username: req.params.username, password: req.params.password }).exec();
        res.status(200).json(result);
    }  */

    async authenticate(req, res) {
        console.log("loginController.in")
        const { usernameDG, passwordDG } = { usernameDG: req.body.username, passwordDG: req.body.password };
        console.log("username: " + usernameDG)
        console.log("password: " + passwordDG)
        const user = await users.find({ username: usernameDG, password: passwordDG }).exec();
        console.log("User: " + user)
        if (!user) res.error('Os dados informados não estão corretos');
        else res.status(200).json(user);
    }
}
module.exports = new LoginController();