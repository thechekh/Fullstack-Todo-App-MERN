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
    console.log("New user hash",newUser.hash);
    await newUser.save();
    return res.status(200)
    .json({ newUser });
}
exports.login = async (req, res, next) => {

    const { login, password } = req.body;
    console.log("LOGIN",login,"PASSWORD",password);
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
//webtokenreg
/* exports.register = (req, res, next) => {
	const { username, password } = req.body;
	const newUser = new User({ username, password })

	if(!username|| !password){
		return res.status(422).send({ error: 'You must provide Username and Password' });
	}

	User.findOne({ username })
		.then((existingUser) => {
			if(existingUser){
				return res.status(422).send({ error: 'Username already in use' });
			}
		})
		.catch(err => next(err));

		newUser.save()
			.then((savedUser) => {
				res.status(200);
				res.json({
					message: `Your account was registered!`
				});
				return true;
			})
			.catch((error) => {
				console.log(error);
				console.log(`Internal Error, User.save(${JSON.stringify(newUser)})`);
				res.status(500).send({ error: 'Username already in use' });
				return false;
			});
} */

/* exports.login = (req, res, next) => {
	const { username, password } = req.body;
	User.findOne({ username })
		.then((user) => {
			if(!user)
				res.status(404).json({ error: 'Incorrect Username or Password. Please try again.' });
			else {
				user.isProperPassword(password)
					.then((isMatch) => {
						if(isMatch){
							const token = tokenForUser(user);

							res.json({
								message: 'Authenticated',
								token
							});
						} else {
							res.status(401);
							res.json({
								error: 'No matching records were found. Please try again.'
							});
						}
					})
					.catch((error) => {
						console.log(error);
						console.log(`Internal Error, User.isProperPassword(${password})`);
						res.status(500);
						res.json({ error });
					});
			}
		})
		.catch((findError) => {
			console.log(findError);
			console.log(`Internal Error, User.findOne(${username})`);
			res.status(500);
			res.json({ findError });
		});
} */