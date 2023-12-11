import React, { useState, useEffect } from "react";
import { EditTaskForm } from "./EditTaskForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, setIsDeleted, setTaskUpdated }) => {
  const [isUpdated, setIsUpdated] = useState(false);

  const handleDelete = async () => {
    try {
      const url = "http://localhost:3000/task";
      const response = await fetch(`${url}/delete/${task._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const taskDeleted = await response.json();
        setIsDeleted(taskDeleted._id);
        setTask(""); // On vide l'input une fois la tâche envoyée
      } else {
        console.error("Ajout d'une tâche échouée");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Lorsqu'on clique sur le bouton de modif, le state passe à true, alors on affiche le composant d'édition
  return isUpdated ? (
    <EditTaskForm
      task={task}
      setIsUpdated={setIsUpdated}
      setTaskUpdated={setTaskUpdated}
    />
  ) : (
    <div className="Todo">
      <p>{task.description}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            setIsUpdated(!isUpdated);
          }}
        />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      </div>
    </div>
  );
};
