import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const resp = await getAllTasks();
      setTareas(resp.data);
    }
    loadTasks();
  }, []);

  return (
    <div  className="grid grid-cols-3 gap-3"><br />
      {tareas.map(tarea => (
        <TaskCard key={tarea.id} tarea={tarea}/>
      ))}
    </div>
  );
}