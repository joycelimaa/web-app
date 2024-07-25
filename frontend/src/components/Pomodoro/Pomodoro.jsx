import { useState, React} from 'react'
import './Pomodoro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faGear, faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'


export default function Pomodoro({ togglePomodoro }) {

    //--> Settings expand useState
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleSize = () => {
    setIsExpanded(!isExpanded)
    }

    //--> Timer input configuration useStates
    const [shortBreak, setShortBreak] = useState(5) // Default value in minutes
    const [focus, setFocus] = useState(25) // Default value in minutes
    const [longBreak, setLongBreak] = useState(15) // Default value in minutes

const validateInput = (value) => {
        const intValue = parseInt(value, 10)
        if ( intValue < 1) return 1
        if (intValue > 60) return 60
        return intValue
    }

    const handleShortBreakChange = (e) => {
        setShortBreak(validateInput(e.target.value))
    }

    const handleFocusChange = (e) => {
        setFocus(validateInput(e.target.value))
    }

    const handleLongBreakChange = (e) => {
        setLongBreak(validateInput(e.target.value))
    }


    //--> Timer configuration useStates
    const [currentTimer, setCurrentTimer] = useState(shortBreak * 60) // Current timer in seconds
    const [isRunning, setIsRunning] = useState(false) // To track if the timer is running
    const [intervalId, setIntervalId] = useState(null) // To store the interval ID
    const [currentTimerType, setCurrentTimerType] = useState('Focus') 

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    const handleSetTimer = (time) => {
        setCurrentTimer(time * 60)
        setCurrentTimerType(time === shortBreak ? 'Short break' : time === focus ? 'Focus' : 'Long break')
        if (isRunning) {
            clearInterval(intervalId)
            setIsRunning(false)
        }
    }

    // Start timer
    const startTimer = () => {
        if (isRunning) {
            clearInterval(intervalId)
            setIsRunning(false)
        } else {
            const id = setInterval(() => {
            setCurrentTimer((prev) => {
                if (prev > 0) {
                return prev - 1
                } else {
                clearInterval(id)
                setIsRunning(false)
                return 0
                }
            })
            }, 1000)
            setIntervalId(id)
            setIsRunning(true)
        }
    }

    // Restart timer
    const handleRestart = () => {
        if (currentTimerType === 'Short break') {
            setCurrentTimer(shortBreak * 60)
        } else if (currentTimerType === 'Focus') {
            setCurrentTimer(focus * 60)
        } else if (currentTimerType === 'Long break') {
            setCurrentTimer(longBreak * 60)
        }
        if (isRunning) {
            clearInterval(intervalId)
            setIsRunning(false)
        }
    }

    return (

    <Draggable handle=".pomodoro-title">
    <div className={`pomodoro ${isExpanded ? 'expanded' : ''}`}>
        <div className="pomodoro-minus" onClick={togglePomodoro}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="pomodoro-title">
            <p>Pomodoro</p>
        </div>
        <div className='timer-types '>
            <div className='types'>
                <button onClick={() => handleSetTimer(shortBreak)} >Short break</button>
            </div>
            <div className='types'>
                <button onClick={() => handleSetTimer(focus)} >Focus</button>
            </div>
            <div className='types'>
                <button onClick={() => handleSetTimer(longBreak)} >Long break</button>
            </div>
        </div>
        <div className="timer">
            <p>{formatTime(currentTimer)}</p>
        </div>
        <div className="start-restart">
            <button className='start'  onClick={startTimer}>{isRunning ? 'Pause' : 'Start'}</button>
            <div className="restart">
                <button onClick={handleRestart} ><FontAwesomeIcon icon={faArrowRotateRight} /></button>
            </div>
        </div>
        <div className="settings">
            <button onClick={toggleSize} ><FontAwesomeIcon icon={faGear} /></button> 
        </div>

        {isExpanded && (
        <div className="settings-expanded">
            <hr/>
            <div className='timer-inputs'>
                <div className='timer-input'>
                    <p>Short break</p>
                    <input 
                        type="number" 
                        min="1" 
                        max="60" 
                        value={shortBreak} 
                        onChange={handleShortBreakChange} 
                        onBlur={handleShortBreakChange}
                    />
                </div>
                <div className='timer-input'>
                    <p>Focus</p>
                    <input 
                        type="number" 
                        min="1" 
                        max="60" 
                        value={focus} 
                        onChange={handleFocusChange} 
                        onBlur={handleFocusChange} 
                    />
                </div>
                <div className='timer-input'>
                    <p>Long break</p>
                    <input  
                        type="number" 
                        min="1" 
                        max="60" 
                        value={longBreak} 
                        onChange={handleLongBreakChange} 
                        onBlur={handleLongBreakChange} 
                    />
                </div>
            </div>
            <div className="save-button">
                <button onClick={toggleSize}>Save</button>
            </div>
        </div>
        )}

    </div>
    </Draggable>
    
    )
}
