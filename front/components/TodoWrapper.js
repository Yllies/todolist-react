import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  const [allTasks, setAllTasks] = useState([]);

  const [isAdded, setIsAdded] = useState("");
  const [isDeleted, setIsDeleted] = useState("");
  const [taskUpdated, setTaskUpdated] = useState("");

  useEffect(() => {
    fetchAllTasks();
  }, [isAdded, isDeleted, taskUpdated]);
  const fetchAllTasks = async () => {
    try {
      const url = "http://localhost:3000/task/";
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Erreur lors de la récupération des tâches");
      }

      const tasks = await response.json();

      setAllTasks(tasks);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des tâches:",
        error.message
      );
    }
  };

  return (
    <>
      <div className="TodoWrapper">
        <h1>
          To-do list <span className="copyright">par Yllies</span>
        </h1>
        <TodoForm setIsAdded={setIsAdded} />
        {/* On affiche la liste des tâches */}
        {allTasks.map((task, index) => (
          <Todo
            key={index}
            task={task}
            setIsDeleted={setIsDeleted}
            setTaskUpdated={setTaskUpdated}
          />
        ))}
      </div>
    </>
  );
};
