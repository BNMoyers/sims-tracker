//imports and dependencies
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const Users = require("../helpers/user-model");
const requiresAuth = require("../middleware/requires-auth-middleware");

//test
router.get("/", (req, res) => {
  res.json({ api: "It's Working!" });
});

//user onboarding
router.post("/register", (req, res) => {
  let userInfo = req.body;

  bcrypt.hash(userInfo.password, 14, (err, hashedPassword) => {
    userInfo.password = hashedPassword;

    Users.add(userInfo)
      .then(saved => {
        req.session.username = saved.username;
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        res.status(200).json({ message: `Welcome, ${user.username}!` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/logout', (req, res) => {
    req.session
        ? req.session.destroy(err =>{
            err
            ? res.status(500).json({message: 'Nope! You are not logged out'})
            : res.status(200).json({ message: 'successfully logged out' })
        })
        : res.status(200).json({ message: "you are already logged out! "})
    });

//was user-router
router.get("/users", requiresAuth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//exports
module.exports = router;
