import Header from "./components/Header/Header"
import Notes from "./components/Notes/Notes"
import Pomodoro from "./components/Pomodoro/Pomodoro"
import Sidebar from "./components/Sidebar/Sidebar"
import Themes from "./components/Themes/Themes"
import Sounds from "./components/Sounds/Sounds"
import Configuration from "./components/Configuration/Configuration"
import { useState } from "react"
import Todo from "./components/Todo/Todo"

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
    <div className="menu">
      <Sidebar 
        toggleThemes={toggleThemes} 
        togglePomodoro = {togglePomodoro} 
        toggleNotes = {toggleNotes}
        toggleTodo = {toggleTodo}
        toggleSounds = {toggleSounds}
        toggleConfig = {toggleConfig}
      />
      <div>
        <Header />
        
        {isThemesVisible && <Themes toggleThemes={toggleThemes} />}
        {isPomodoroVisible && <Pomodoro togglePomodoro = {togglePomodoro} />}
        {isNotesVisible && <Notes toggleNotes = {toggleNotes} />}
        {isTodoVisible && <Todo toggleTodo = {toggleTodo} />}
        {isSoundsVisible && <Sounds toggleSounds = {toggleSounds} />}
        {isConfigVisible && <Configuration toggleConfig = {toggleConfig} />}
        
      </div>
    </div>
    
  );
}

export default App
