import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const resp = await getAllTasks();
      setTareas(resp.data)
      console.log(resp);
    }
    loadTasks();
  }, []);

  return <div><br />
    {tareas.map(tareas => (
      <TaskCard tareas={tareas}/>
    ))}
    </div>
}