import React, { useState } from "react";

export const TodoForm = ({ setIsAdded }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check si l'input est pas vide
    if (task) {
      try {
        const url = "http://localhost:3000/task";
        const response = await fetch(`${url}/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: task }),
        });

        if (response.ok) {
          const task = await response.json();
          setIsAdded(task._id);
          setTask(""); // On vide l'input une fois la tâche envoyée
        } else {
          console.error("Ajout d'une tâche échouée");
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="Insérez une tâche"
      />
      <button type="submit" className="todo-btn">
        Ajoutez une tâche
      </button>
    </form>
  );
};
