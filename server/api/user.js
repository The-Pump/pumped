const User = require('../db/models/user');
const { hasher } = require('./argon2hashFuncs');

// creates a user
const signup = (req, res) => {
  // console.log(req.body, 5555555555);
  const { username, password } = req.body;
  // const { password } = req.body;
  // console.log(password);
  hasher(password)
    .then((hash) => {
    // create a new user with the hash value
      const newUser = {
        username,
        password: hash,
      };
      return User.create(newUser);
    }).then((data) => {
      res.status(201).send(data);
    }).catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

// const signup = (req, res) => {
//   User.create(req.body)
//     .then((data) => {
//       res.send(data);
//     }).catch((err) => {
//       console.warn(err);
//       res.sendStatus(500);
//     });
// };

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
    console.warn(err);
  });
};

const deleteUser = (req, res) => {
  const { username } = req.params;

  User.destroy({
    where: {
      username,
    },
  }).then((data) => {
    res.send(data);
  }).catch((err) => {
    console.warn(err);
  });
};

module.exports = {
  signup, login, deleteUser,
};
