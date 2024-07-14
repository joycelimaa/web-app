import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <>

      <div className="menu">
        <div>
          <Sidebar/>
        </div>
        <div >
          <Header/>
        </div>
      </div>
     
    </>
  )
}

export default App
