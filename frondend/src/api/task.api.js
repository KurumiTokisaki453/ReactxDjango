import axios from 'axios'

export const getAllTasks = () => {
  // axios.get('http://127.0.0.1:8000/backend/urls-v1/task/')
  // axios.get('http://localhost:8000/backend/urls-v2/cliente/');
  return axios.get('http://127.0.0.1:8000/backend/urls-v1/task/')
}