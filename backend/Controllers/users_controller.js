const User = require('../Models/user_model')
const bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {

    const { login, password } = req.body;
    const user = await User.findOne({ login });
    console.log("login", login, "pass", password);
    if (user && bcrypt.compareSync(password, user.hash)) {
        console.log("user", user, "LOGGED");

        return res.json(user)
    } else {
        console.log("user not EXISDTT")
        return res.status(400).json({ message: 'Username or password is incorrect' });
    }


}




exports.register = async (req, res, next) => {
    const user = req.body;
    console.log("userobj", user);

    if (await User.findOne({ login: user.login })) {
        throw 'Username "' + user.login + '" is already taken';
    }

    const newUser = new User(user);
    newUser.hash = bcrypt.hashSync(user.password, 10);
    await newUser.save();
}
