import React, { useState, useEffect } from "react";
import { EditTaskForm } from "./EditTaskForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCheck,
  faCancel,
  faRotateBack,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, setIsDeleted, setTaskUpdated }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const handleDelete = async () => {
    try {
      const url = "http://localhost:3000/task";
      const response = await fetch(`${url}/delete/${task._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const taskDeleted = await response.json();
        setIsDeleted(taskDeleted._id);
      } else {
        console.error("Ajout d'une tâche échouée");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateTaskStatus = async () => {
    try {
      const url = "http://localhost:3000";
      const response = await fetch(`${url}/task/update-status/${task._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: isDone }),
      });

      if (response.ok) {
        // La tâche a été mise à jour avec succès
        const updatedTask = await response.json();
        console.log("Tâche mise à jour :", updatedTask);
      } else {
        // Gérer les erreurs ici
        console.error("Échec de la mise à jour de la tâche");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche :", error);
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
      <p>{task.title}</p>
      <p>{task.description}</p>
      <div className="icons">
        {!isDone ? (
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => {
              setIsDone(!isDone);
              updateTaskStatus();
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faRotateBack}
            onClick={() => {
              setIsDone(!isDone);
              updateTaskStatus();
            }}
          />
        )}

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
