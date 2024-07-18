import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faGear, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Pomodoro.css'

export default function Pomodoro() {
  return (
    <div className='pomodoro'>
        <div className="pomodoro-minus">
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="pomodoro-title">
            <p>Pomodoro</p>
        </div>
        <div className='timer-types '>
            <div className=''>
                <p>Focus</p>
            </div>
            <div className=''>
                <p>Short <br></br>break</p>
            </div>
            <div className=''>
                <p>Long<br></br> break</p>
            </div>
        </div>
        <div className="timer">
            <p>XX:XX</p>
        </div>
        <div className="start-restart">
            <p>Start</p>
            <div className="restart">
                <FontAwesomeIcon icon={faArrowRotateRight} />
            </div>
        </div>
        <div className="settings">
            <FontAwesomeIcon icon={faGear} />
        </div>

    </div>
  )
}
