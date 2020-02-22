const express = require("express");
const router = express.Router();

const {
  getQuestion,
  getQuestionId,
  createQuestion,
  deleteQuestion,
  updateQuestion
} = require("../controllers/question.controller");

router.get("/getQuestion", getQuestion);
router.get("/getQuestion/:id", getQuestionId);
router.post("/createQuestion", createQuestion);
router.delete("/deleteQuestion/:id", deleteQuestion);
router.put("/updateQuestion/:id", updateQuestion);

module.exports = router;
