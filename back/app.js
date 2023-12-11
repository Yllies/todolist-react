// app.js
require("dotenv").config();
require("./models/connection");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const tasksRouter = require("./routes/tasks");

app.use("/task", tasksRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
