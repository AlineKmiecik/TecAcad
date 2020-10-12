class LoginController {

    authenticate(req, res) {
        console.log("Entr");
        const { username, password } = body;
        const user = users.find(x => x.username === username && x.password === password);
        if (!user) res.error('Os dados informados não estão corretos');
        res({
            ...basicDetails(user),
            token: 'fake-jwt-token'
        })
    }

    async get(req, res) {
        var result = await user.find({});
        res.status(200).json(result);

    }
}
module.exports = new LoginController();