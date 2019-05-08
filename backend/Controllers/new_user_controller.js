const User = require('../Models/new_user_model');
const bcrypt = require('bcryptjs');
exports.register = async (req, res, next) => {
    const user = req.body;
    if (await User.findOne({ login: user.login })) {
        throw 'Username "' + user.login + '" is already taken';
    }
    const newUser = new User(user);
    newUser.hash = bcrypt.hashSync(user.password, 10);
    await newUser.save();
    return res.status(200)
        .json({ newUser });
}
exports.login = async (req, res, next) => {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (user && bcrypt.compareSync(password, user.hash)) {
        return res.json(user)
    } else {
        return res.status(400).json({ message: 'Username or password is incorrect' });
    }


}