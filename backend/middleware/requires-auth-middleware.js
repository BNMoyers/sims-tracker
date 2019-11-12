
//middleware as export
module.exports = (req, res, next) => {
    req.session && req.session.username
        ? next()
        : res.status(401).json({ message: 'Invalid Credentials. You shall not pass!' })
};