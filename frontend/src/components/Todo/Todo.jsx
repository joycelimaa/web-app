import React, { useState } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faCirclePlus, faXmark, faExpand, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'

export default function Todo({ toggleTodo }) {

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)
    const [currentTab, setCurrentTab] = useState('tasks') 

    //adicionar uma nova tarefa
    const addTask = () => {
      setTasks([...tasks, { id: tasks.length + 1, text: '' }])
    }

    //remover uma tarefa pelo ID
    const removeTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //abrir detalhes da tarefa
    const openTaskDetails = (task) => {
      setSelectedTask(task)
      setCurrentTab('details')
    }

    
    const goBackToTasks = () => {
      setCurrentTab('tasks') // Troca para a aba de lista de tarefas
      setSelectedTask(null)
    }

  return (
    <Draggable handle=".todo-title">
    <div className='todo'>
        <div className="todo-minus" onClick={toggleTodo}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="todo-title">
            <p>To-do</p>
        </div>
        
        {currentTab === 'tasks' && tasks.length > 0 && (
        <div className="tasks">
          {tasks.map((task, index) => (
            <div key={task.id} className="task">
              <input className='task-checkbox' type='checkbox' />
              <input
                placeholder='Add task...'
                value={task.text}
                onChange={(e) => {
                  const newTasks = [...tasks];
                  newTasks[index].text = e.target.value;
                  setTasks(newTasks);
                }}
              />
              
              <FontAwesomeIcon className='buttonExpand' icon={faExpand} onClick={() => openTaskDetails(task)} />
            
              <button onClick={() => removeTask(task.id)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
            </div>
        )}

        {currentTab === 'tasks' && (
        <div className="todo-add-button">
          <button onClick={addTask}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
        )}

        {/* Aba de detalhes da tarefa */}
        {currentTab === 'details' && selectedTask && (
            <div className="task-details-tab">

              <div className='task-details-title'>
                <p>{selectedTask.text}</p>
              </div>

              <div className='task-details-description'>
                <input type='text'></input>
              </div>
              
              <div className='buttonsSaveDelete'>
                <button onClick={goBackToTasks} className="back-button">
                  Cancel
                </button>
                <button onClick={goBackToTasks} className="back-button">
                  Save
                </button>
              </div>
              
            </div>
          )}


    </div>
    </Draggable>
  )
}
