import { useNavigate } from "react-router-dom"

export function TaskCard({ tarea }) {

  const navigate = useNavigate()

  return (
    <div style={{background: "black"}}
      key={tarea.id}
      onClick={() => {
        navigate('/pages/' + tarea.id)
      }}
    >
      <h1>{tarea.title}</h1>
      <p>{tarea.descripcion}</p>
    </div>
  )
}