const User = require('../Models/user_model')
const bcrypt = require('bcryptjs');

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
