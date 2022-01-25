const User = require('../db/models/user');

// creates a user
const signup = (req, res) => {
  User.create(req.body)
    .then((data) => {
      res.json(data).sendStatus(201);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// logs user in by way of returning the user object when a match is found for username provided.
const login = (req, res) => {
  const { username } = res.json(req.body);
  User.findOne({
    where: {
      username,
    },
  }).then((data) => {
    res.send(data);
  }).catch((err) => {
    console.error(err);
  });
};

module.exports = {
  signup, login,
};