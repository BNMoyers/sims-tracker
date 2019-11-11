//imports and dependencies
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('./user-model');
const requiresAuth = require('./requires-auth-middleware');

//test
router.get('/', (req, res) => {
    res.json({ api: "It's Working!" })
});

//was authRouter
router.post('/register', (req, res) => {
    let userInfo = req.body;

    bcrypt.hash(userInfo.password, 14, (err, hashedPassword) => {
        userInfo.password = hashedPassword;

        Users.add(userInfo)
             .then(saved => {
                 res.status(201).json(saved);
             })
             .catch(error => {
                 res.status(500).json(error);
             });
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
         .first()
         .then(user => {
             user && bcrypt.compareSync(password, user.password)
             ? res.status(200).json({ message: `Welcome, ${user.username}!`})
             : res.status(401).json({ message: 'Invalid Credentials' })
         })
         .catch(err => {
             res.status(500).json(err);
         });
});

//was user-router
router.get('/users', requiresAuth, (req, res) =>{
    Users.find()
         .then(users => {
             res.json(users);
         }) 
         .catch(err => res.send(err));
})

//exports
module.exports = router;