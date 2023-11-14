export function TaskCard({ tarea }) {
  return (
    <div key={tarea.id}>
      <h1>{tarea.title}</h1>
      <p>{tarea.descripcion}</p>
    </div>
  )
}