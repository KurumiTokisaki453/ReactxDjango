import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Taskspage } from "./pages/Taskspage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import './App.css';
import { Nier,Personaliza } from "./imagenes/img";
// import Personaliza from "./imagenes/PERSONALIZA_1.avif"
// import Personaliza from "./imagenes/Nier-Automata-Background.jpg"

function App() {

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation/>
        <Nier/>
        /imagenes/Nier-Automata-Background.jpg
        {/* <img src="./imagenes/Nier-Automata-Background.jpg" alt="other img" /> */}
        <Personaliza/>
        <Routes>
          <Route path="/" element={<Navigate to="/pages" />} />
          <Route path="/pages" element={ <Taskspage />} />
          <Route path="/pages-form" element={ <TaskFormPage /> } />
          <Route path="/pages/:id" element={ <TaskFormPage/> } />     
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App
