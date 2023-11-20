import axios from "axios";
const tasksApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/backend/urls-v1/task/'
})

export const getAllTasks = () => tasksApi.get("/");
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTask = (id) => tasksApi.delete("/"+id);
export const getTask = (id) => tasksApi.get("/"+id+"/"); // Obtener tarea x id
export const updateTask = (id, task) => tasksApi.put("/"+id+"/",task); // Actualizar tarea x id
