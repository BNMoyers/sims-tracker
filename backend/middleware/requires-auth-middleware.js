//imports and dependencies
const bcrypt = require('bcryptjs');
const Users = require('../helpers/user-model');

//middleware as export
module.exports = (req, res, next) => {
    let { username, password } = req.headers;

    username && password
        ? Users.findBy({ username })
           .first()
           .then(user => {
               user && bcrypt.compareSync(password, user.password)
                ? next()
                : res.status(401).json({ message: 'Invalid Credentials. You shall not pass!' })
           })
            .catch(err => {
                res.status(500).json({ message: 'database error, please try again later' })
            })
        : res.status(400).json({ message: 'please provide credentials' })
};