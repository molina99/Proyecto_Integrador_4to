const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./src/routes/user.route"));
app.use(require("./src/routes/question.route"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
