const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser
} = require("../controllers/user.controller");

router.post("/login", loginUser);
router.get("/getUser", getUser);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
