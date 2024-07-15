import Header from "./components/Header/Header"
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
      </div>
    </div>
  );
}

export default App
