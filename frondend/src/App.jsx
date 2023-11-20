import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Taskspage } from "./pages/Taskspage";
import { Navigation } from "./components/Navigation";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/pages" />} />
        <Route path="/pages" element={ <Taskspage />} />
        <Route path="/pages-form" element={ <TaskFormPage /> } />
        <Route path="/pages/:id" element={ <TaskFormPage/> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
