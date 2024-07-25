import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function todo() {
  return (
    <div className='todo'>
        <div className="todo-minus">
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="todo-title">
            <p>To-do</p>
        </div>
        <div className="todo-add-button">
            <button><FontAwesomeIcon icon={faPlus} />Add</button>
        </div>
        <div className="tasks">
            <div className="task">
                <input className='task-checkbox' type='checkbox'/>
                <input placeholder='Add task...'></input>
            </div>
            
            
        </div>
    </div>
  )
}
