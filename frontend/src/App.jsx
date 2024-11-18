import Header from "./components/Header/Header"
import Notes from "./components/Notes/Notes"
import Pomodoro from "./components/Pomodoro/Pomodoro"
import Sidebar from "./components/Sidebar/Sidebar"
import Themes from "./components/Themes/Themes"
import Sounds from "./components/Sounds/Sounds"
import Configuration from "./components/Configuration/Configuration"
import { useState } from "react"
import Todo from "./components/Todo/Todo"
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register/Register"
import { UserProvider } from "./components/context/UserContext"

function App() {
  
  const [isThemesVisible, setIsThemesVisible] = useState(false)
  const [isPomodoroVisible, setIsPomodoroVisible] = useState(false)
  const [isNotesVisible, setIsNotesVisible] = useState(false)
  const [isTodoVisible, setIsTodoVisible] = useState(false)
  const [isSoundsVisible, setIsSoundsVisible] = useState(false)
  const [isConfigVisible, setIsConfigVisible] = useState(false)

  // Alterna o valor de isThemesVisible entre true e false
  const toggleThemes = () => {
    setIsThemesVisible(!isThemesVisible)
  }

  const togglePomodoro = () => {
    setIsPomodoroVisible(!isPomodoroVisible)
  }

  const toggleNotes = () => {
    setIsNotesVisible(!isNotesVisible)
  }

  const toggleTodo = () => {
    setIsTodoVisible(!isTodoVisible)
  }

  const toggleSounds = () => {
    setIsSoundsVisible(!isSoundsVisible)
  }

  const toggleConfig = () => {
    setIsConfigVisible(!isConfigVisible)
  }

  return (
    <Router>
      <UserProvider>
      <Routes>
       
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Página de Registro */}
        <Route path="/register" element={<Register />} />
        
        {/* Layout principal do aplicativo */}
        <Route
          path="/"
          element={
            <div className="menu">
              <Sidebar
                toggleThemes={toggleThemes}
                togglePomodoro={togglePomodoro}
                toggleNotes={toggleNotes}
                toggleTodo={toggleTodo}
                toggleSounds={toggleSounds}
                toggleConfig={toggleConfig}
              />
              <div>
                <Header />
                {/* Componentes renderizados de acordo com o estado */}
                {isThemesVisible && <Themes toggleThemes={toggleThemes} />}
                {isPomodoroVisible && <Pomodoro togglePomodoro={togglePomodoro} />}
                {isNotesVisible && <Notes toggleNotes={toggleNotes} />}
                {isTodoVisible && <Todo toggleTodo={toggleTodo} />}
                {isSoundsVisible && <Sounds toggleSounds={toggleSounds} />}
                {isConfigVisible && <Configuration toggleConfig={toggleConfig} />}
              </div>
            </div>
          }
        />
       
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App
