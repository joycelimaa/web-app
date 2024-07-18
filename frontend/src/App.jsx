import Header from "./components/Header/Header"
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Sidebar from "./components/Sidebar/Sidebar"
import Themes from "./components/Themes/Themes"
import { useState } from "react";

function App() {
  
  const [isThemesVisible, setIsThemesVisible] = useState(false);

  // Alterna o valor de isThemesVisible entre true e false
  const toggleThemes = () => {
    setIsThemesVisible(!isThemesVisible);
  };

  return (
    <div className="menu">
      <Sidebar toggleThemes={toggleThemes} />
      <div>
        <Header />
        {isThemesVisible && <Themes toggleThemes={toggleThemes} />}
        <Pomodoro/>
      </div>
      
        
      
    </div>
    
  );
}

export default App
