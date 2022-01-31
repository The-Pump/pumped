const UserLog = require('../db/models/userLog');
const User = require('../db/models/user');

const addToUserLog = (req, res) => User.findOrCreate({
  where: {
    username: req.body.username,
  },
}).then((data) => {
  const { _id } = data[0].dataValues;
  const newLog = {
    text: req.body.text,
    UserId: _id,
  };
  return UserLog.create(newLog);
})
  .then(() => UserLog.findAll()).then((data) => {
    res.status(201).send(data);
  })
  .catch((err) => {
    console.warn(err);
  });
module.exports = {
  addToUserLog,
};
