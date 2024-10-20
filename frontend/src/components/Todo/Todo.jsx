import React, { useState } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'

export default function Todo({ toggleTodo }) {

    const [tasks, setTasks] = useState([]); // Estado inicial sem tarefas

    // Função para adicionar uma nova tarefa
    const addTask = () => {
      setTasks([...tasks, { id: tasks.length + 1, text: '' }]);
    };

    // Função para remover uma tarefa pelo ID
    const removeTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  return (
    <Draggable handle=".todo-title">
    <div className='todo'>
        <div className="todo-minus" onClick={toggleTodo}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="todo-title">
            <p>To-do</p>
        </div>
        
        {tasks.length > 0 && (
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
              <button onClick={() => removeTask(task.id)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
            </div>
        )}

        <div className="todo-add-button">
        <button onClick={addTask}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        </div>
    </div>
    </Draggable>
  )
}
