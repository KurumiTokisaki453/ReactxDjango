export function TaskCard({ tareas }) {
  return (
    <div key={tareas.id}>
      <h1>{tareas.title}</h1>
      <p>{tareas.descripcion}</p>
    </div>
  )
}