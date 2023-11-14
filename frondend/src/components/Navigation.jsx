import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
      <Link to="/pages">
      <h1>Tareas App</h1>
      </Link>

      <Link to="/pages-form">Create tareas</Link>
    </div>
  )
}