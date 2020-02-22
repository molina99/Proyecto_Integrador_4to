const Question = require("../models/Questions");

async function getQuestion(req, res) {
  try {
    const questions = await Question.Questions.findAll();
    res.json({
      data: questions
    });
  } catch (error) {
    console.log(error);
  }
}

async function getQuestionId(req, res) {
  const { id } = req.params;
  const question = await Question.Questions.findOne({
    where: {
      id
    }
  });
  res.json({
    data: question
  });
}

async function createQuestion(req, res) {
  const { question, true_answer, false_answer, imagen } = req.body;
  try {
    let newQuestion = await Question.Questions.create(
      {
        question,
        true_answer,
        false_answer,
        imagen
      },
      {
        fields: ["question", "true_answer", "false_answer", "imagen"]
      }
    );
    if (newQuestion) {
      res.json({
        message: "Question created successfully",
        data: newQuestion
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
}

async function deleteQuestion(req, res) {
  const { id } = req.params;
  const deleteQuestion = await Question.Questions.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "Question deleted succesfully",
    count: deleteQuestion
  });
}

async function updateQuestion(req, res) {
  const { id } = req.params;
  const { question, true_answer, false_answer, imagen } = req.body;
  const questions = await Question.Questions.findAll({
    attributes: ["id", "question", "true_answer", "false_answer", "imagen"],
    where: {
      id
    }
  });

  if (questions.length > 0) {
    questions.forEach(async user => {
      await user.update({
        question,
        true_answer,
        false_answer,
        imagen
      });
    });
  }

  return res.json({
    message: "Question updated succesfully",
    data: users
  });
}

module.exports = {
  getQuestion,
  getQuestionId,
  createQuestion,
  deleteQuestion,
  updateQuestion
};
