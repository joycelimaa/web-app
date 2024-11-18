import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faClock, faNoteSticky, faListCheck, faMusic, faGear, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css' 
import { Context } from '../context/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar({ toggleThemes, togglePomodoro, toggleNotes, toggleTodo, toggleSounds, toggleConfig }) {
    const {  logout } = useContext(Context)
    
  return (
    
    <div className="sidebar">
        <div className="sidebar-title">
            <p>My<br></br>menu</p>
        </div>
    <ul className="sidebar-menu">
        <li className='item-menu' onClick={toggleThemes}>
            <span className='tooltiptext'>Themes</span>
            <FontAwesomeIcon icon={faPaintRoller} />
        </li>
        <li className='item-menu' onClick={togglePomodoro}>
            <span className='tooltiptext' >Pomodoro</span>
            <FontAwesomeIcon icon={faClock}  />
        </li>
        <li className='item-menu' onClick={toggleNotes}>
        <span className='tooltiptext'>Notes</span>
            <FontAwesomeIcon icon={faNoteSticky} />
        </li>
        <li className='item-menu'  onClick={toggleTodo}>
            <span className='tooltiptext'>To-do list</span>
            <FontAwesomeIcon icon={faListCheck} />
        </li>
        <li className='item-menu' onClick={toggleSounds}>
            <span className='tooltiptext'>Sounds</span>
            <FontAwesomeIcon icon={faMusic} />
        </li>
        <li className='item-menu' onClick={toggleConfig}>
            <span className='tooltiptext'>Settings</span>
            <FontAwesomeIcon icon={faGear} />
            {/*<Link to={'/:id'}><FontAwesomeIcon icon={faGear} /></Link>*/}
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>Logout</span>
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} onClick={logout} />
        </li>
    </ul>

    </div>
   
  )
}
