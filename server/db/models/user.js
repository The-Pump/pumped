const { DataTypes } = require('sequelize');
const db = require('../index');

// define a table.

const User = db.define(
  'User',
  {
    // Model attributes are defined here.
    // Primary key

    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  },
);

// // Sync all models that are not
// // already in the database.
/* if table needs to be updated, add a options object to sync { force: true}
or { alter: true } which will not drop the table before updating it. These
options are not limited to individual tables and can be applied to an entire
sequelize instance. */
// User.sync({ alter: true })
//   .then(() => {
//     console.log('User table synced');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = User;
