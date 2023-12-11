const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Affiche toutes les tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajoute une task
router.post("/add", async (req, res) => {
  // Destructuring de data
  const { description } = req.body;
  try {
    const newTask = new Task({
      description,
      done: false,
    });
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Modifie la task
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Supprime une task
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
