import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const resp = await getAllTasks();
      setTareas(resp.data)
      console.log("Aquí abajo mi lista de arrays => [ {},{},...]");
      console.log(resp);
      console.log("Aquí abajo mis datos a mostrar (TaskCard)");
      console.log(resp.data);
    }
    loadTasks();
  }, []);

  return <div><br />
    {tareas.map(tarea => (
      <TaskCard key={tarea.id} tarea={tarea}/>
    ))}
    </div>
}