const Sequelize = require("sequelize");
const db = require("../database/db");

const Questions = db.sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: Sequelize.STRING
    },
    true_answer: {
      type: Sequelize.STRING
    },
    false_answer: {
      type: Sequelize.STRING
    },
    imagen: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  Questions
};
