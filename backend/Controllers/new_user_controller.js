const User = require('../Models/new_user_model');
/* const jwt = require('jsonwebtoken');
 */
const bcrypt = require('bcryptjs');

//myreg
exports.register = async (req, res, next) => {
    const user = req.body;
    if (await User.findOne({ login: user.login })) {
        throw 'Username "' + user.login + '" is already taken';
    }
    const newUser = new User(user);
    newUser.hash = bcrypt.hashSync(user.password, 10);
    console.log("New user hash", newUser.hash);
    await newUser.save();
    return res.status(200)
        .json({ newUser });
}
exports.login = async (req, res, next) => {

    const { login, password } = req.body;
    console.log("LOGIN", login, "PASSWORD", password);
    const user = await User.findOne({ login });
    console.log("login", login, "pass", password);
    if (user && bcrypt.compareSync(password, user.hash)) {
        console.log("user", user, "LOGGED");

        return res.json(user)
    } else {
        console.log("user not EXIST")
        return res.status(400).json({ message: 'Username or password is incorrect' });
    }


}