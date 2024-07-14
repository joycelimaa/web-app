import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faClock, faNoteSticky, faListCheck, faMusic, faGear } from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import './Sidebar.css'

export default function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className="sidebar-title">
            <p>My<br></br>menu</p>
        </div>
    <ul className="sidebar-menu">
        <li className='item-menu' >
            <span className='tooltiptext'>Themes</span>
            <FontAwesomeIcon icon={faPaintRoller} />
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>Pomodoro</span>
            <FontAwesomeIcon icon={faClock} />
        </li>
        <li className='item-menu'>
        <span className='tooltiptext'>Notes</span>
            <FontAwesomeIcon icon={faNoteSticky} />
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>To-do list</span>
            <FontAwesomeIcon icon={faListCheck} />
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>Music</span>
            <FontAwesomeIcon icon={faSpotify} />
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>Sounds</span>
            <FontAwesomeIcon icon={faMusic} />
        </li>
        <li className='item-menu'>
            <span className='tooltiptext'>Settings</span>
            <FontAwesomeIcon icon={faGear} />
        </li>
    </ul>

    </div>
   
  )
}
