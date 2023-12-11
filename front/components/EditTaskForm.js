import React, { useState } from "react";

export const EditTaskForm = ({ task, setIsUpdated, setTaskUpdated }) => {
  const [description, setDescription] = useState(task.description);
  const [title, setTitle] = useState(task.title);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3000";
      const response = await fetch(`${url}/task/update/${task._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok && title && description) {
        const taskUpdated = await response.json();
        // setTaskUpdated permet à chaque mise à jour de relancer le useEffect du composant parent
        setTaskUpdated(taskUpdated);
        // setIsUpdated me permet de gérer le rendu conditionnel de l'input de modification
        setIsUpdated(false);
      } else {
        console.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
        placeholder="Modifiez le titre"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input"
        placeholder="Modifiez la tâche"
      />
      <button type="submit" className="todo-btn">
        Modifiez la tâche
      </button>
    </form>
  );
};
