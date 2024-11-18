import React, { useState, useEffect } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faCirclePlus, faXmark, faExpand } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Todo({ toggleTodo }) {

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)
    const [currentTab, setCurrentTab] = useState('tasks') 
    const [isNewTask, setIsNewTask] = useState(false) // Para identificar se estamos criando uma nova tarefa

    const [ id ] = useState(localStorage.getItem('userId') || '');
    const [token] = useState(localStorage.getItem('token') || '');
    const { register, handleSubmit, formState: { errors } } = useForm();

  
    const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      
      console.log('FormData contents:');
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

      try {
        const response = await axios.post(`http://localhost:8000/task/create`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(token)}`
          }
        });
        closeTask()
        console.log('task registered successfully:', response.data);
      } catch (error) {
        console.error('Error registering task:', error);
      }

    };

    useEffect(() => {
      const fetchTaskData = async (data) => {

      try {
        const response = await axios.get(`http://localhost:8000/task/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(token)}`
          }
        });
        
        setTasks(response.data)
        console.log('task registered successfully:', response.data);
      } catch (error) {
        console.error('Error registering task:', error);
      }

    };
    fetchTaskData()
  }, [id, setTasks, token])


  const getOneTask = async (taskId) => {

    try {
      const response = await axios.get(`http://localhost:8000/task/${id}/${taskId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      });
      
      //setTasks(response.data)
      console.log('task got successfully:', response.data);
    } catch (error) {
      console.error('Error getting task:', error);
    }

  };

    // Adicionar uma nova tarefa
    const addTask = () => {
      const newTask = { id: tasks.length + 1, text: '', completed: false };
      setSelectedTask(newTask); // Define a nova tarefa como a tarefa selecionada
      setIsNewTask(true); // Marca que é uma nova tarefa
      setCurrentTab('details'); // Abre a aba de detalhes
    }

    // Remover uma tarefa pelo ID
    const removeTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Abrir detalhes de uma tarefa existente
    const openTaskDetails = (task) => {
      console.log(task)
      getOneTask(task.id_task)
      setSelectedTask({ ...task }); // Copia a tarefa para edição
      setIsNewTask(false); // Marca que estamos editando uma tarefa existente
      setCurrentTab('details');
    }

    // Cancelar a criação ou edição de uma tarefa
    const closeTask = () => {
      setSelectedTask(null); // Limpa a tarefa selecionada
      setCurrentTab('tasks'); // Retorna à aba de tarefas
      setIsNewTask(false); // Reseta o estado de nova tarefa
    }

    // Salvar a tarefa (nova ou editada)
    const saveTask = () => {
      if (isNewTask) {
        setTasks([...tasks, selectedTask]); // Adiciona a nova tarefa à lista
      } else {
        setTasks(tasks.map(task => 
          task.id === selectedTask.id ? selectedTask : task // Atualiza a tarefa existente
        ));
      }
      setSelectedTask(null); // Limpa a tarefa selecionada
      setCurrentTab('tasks'); // Retorna à aba de tarefas
      setIsNewTask(false); // Reseta o estado de nova tarefa
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
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <input
                className='task-checkbox'
                type='checkbox'
                checked={task.completed}
                onChange={() => {
                  const updatedTasks = tasks.map(t =>
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  );
                  setTasks(updatedTasks);
                }}
              />
              <input
                placeholder={task.name}
                onChange={(e) => {
                  const updatedTasks = tasks.map(t =>
                    t.id === task.id ? { ...t, text: e.target.value } : t
                  );
                  setTasks(updatedTasks);
                }}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="task-details-tab">
              <div className='task-details-title'>
                <textarea
                  placeholder='Add task...'
                  id="name" 
                  value={selectedTask.name}
                  onChange={(e) => 
                    setSelectedTask({ ...selectedTask, text: e.target.value })
                  }
                  {...register('name', { required: true })} 
                />
              </div>

              <div className='task-details-description'>
                <textarea  id="description" type='text' value={selectedTask.description} {...register('description', { required: true })} ></textarea>
              </div>
              
              <div className='buttonsSaveDelete'>
                <button onClick={closeTask} className="back-button">
                  Cancel
                </button>
                <button type='submit' className="back-button">
                  Save
                </button>
              </div>
            </div>
            </form>
        )}
    </div>
    </Draggable>
  )
}
