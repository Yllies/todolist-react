const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
