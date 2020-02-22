const Sequelize = require("sequelize");
const db = require("../database/db");

const Users = db.sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: Sequelize.STRING
    },
    user_lastname: {
      type: Sequelize.STRING
    },
    user_email: {
      type: Sequelize.STRING
    },
    user_pass: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  Users
};
