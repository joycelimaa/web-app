import Header from "./components/Header/Header"
import Notes from "./components/Notes/Notes"
import Pomodoro from "./components/Pomodoro/Pomodoro"
import Sidebar from "./components/Sidebar/Sidebar"
import Themes from "./components/Themes/Themes"
import { useState } from "react"

function App() {
  
  const [isThemesVisible, setIsThemesVisible] = useState(false)
  const [isPomodoroVisible, setIsPomodoroVisible] = useState(false)
  const [isNotesVisible, setIsNotesVisible] = useState(false)

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

  return (
    <div className="menu">
      <Sidebar 
        toggleThemes={toggleThemes} 
        togglePomodoro = {togglePomodoro} 
        toggleNotes = {toggleNotes}
      />
      <div>
        <Header />
        
        {isThemesVisible && <Themes toggleThemes={toggleThemes} />}
        {isPomodoroVisible && <Pomodoro togglePomodoro = {togglePomodoro} />}
        {isNotesVisible && <Notes toggleNotes = {toggleNotes} />}
        
      </div>
    </div>
    
  );
}

export default App
