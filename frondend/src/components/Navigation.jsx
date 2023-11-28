import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3" >
      <Link to="/pages">
      <h1 className="font-bold text3x1 mb-4" >Tareas App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg" >
        <Link to="/pages-form">Create tareas</Link>
      </button>
    </div>
  )
}