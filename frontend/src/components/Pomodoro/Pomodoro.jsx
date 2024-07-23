import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faGear, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Pomodoro.css'
import { useState } from 'react'
import Draggable from 'react-draggable'


export default function Pomodoro() {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleSize = () => {
    setIsExpanded(!isExpanded)
    }

    return (

    <Draggable handle=".pomodoro-title">
    <div className={`pomodoro ${isExpanded ? 'expanded' : ''}`}>
        <div className="pomodoro-minus">
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="pomodoro-title">
            <p>Pomodoro</p>
        </div>
        <div className='timer-types '>
            <div className='types'>
                <button>Short break</button>
            </div>
            <div className='types'>
                <button>Focus</button>
            </div>
            <div className='types'>
                <button>Long break</button>
            </div>
        </div>
        <div className="timer">
            <p>XX:XX</p>
        </div>
        <div className="start-restart">
            <button className='start'>Start</button>
            <div className="restart">
                <button><FontAwesomeIcon icon={faArrowRotateRight} /></button>
            </div>
        </div>
        <div className="settings">
            <button onClick={toggleSize}><FontAwesomeIcon icon={faGear} /></button> 
        </div>

        {isExpanded && (
        <div className="settings-expanded">
            <hr/>
            <div className='timer-inputs'>
            <div className='timer-input'>
                <p>Short break</p>
                <input/>
            </div>
            <div className='timer-input'>
                <p>Focus</p>
                <input/>
            </div>
            <div className='timer-input'>
                <p>Long break</p>
                <input/>
            </div>
        </div>
            <div className="save-button">
                <button>Save</button>
            </div>
        </div>
      )}

    </div>
    </Draggable>
    )
}
