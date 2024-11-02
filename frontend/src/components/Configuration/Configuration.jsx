import React, { useState, useEffect } from 'react'
import './Configuration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'


export default function Configuration({toggleConfig}) {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
      })
      const [isEditable, setIsEditable] = useState(false)
    
      useEffect(() => {
        // Simulação de uma chamada ao banco de dados para buscar dados do usuário
        const fetchUserData = async () => {
          // Simulando dados trazidos do banco
          const dataFromDB = {
            username: 'john_doe',
            email: 'johndoe@example.com',
            password: 'password123', 
          }
          setUserData(dataFromDB)
        }
    
        fetchUserData()
      }, [])
    
      const handleEdit = () => {
        setIsEditable((prevEditable) => !prevEditable)
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }))
      }

  return (
    <Draggable handle=".config-title">
    <div className='config'>
        <div className="config-minus" onClick={toggleConfig}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="config-title">
            <p>Configuration</p>
        </div>
        <div className='config-div'>
            <div className="config-input-group">
                <label htmlFor="username">Username</label>
                <input type="text" 
                id="username" 
                name="username" 
                value={userData.username} 
                disabled={!isEditable} 
                onChange={handleChange} />
            </div>
            <div className="config-input-group">
                <label htmlFor="email">Email</label>
                <input type="email" 
                id="email" 
                name="email" 
                value={userData.email} 
                disabled={!isEditable} 
                onChange={handleChange}/>
            </div>
            <div className="config-input-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                name="password" 
                value={userData.password} 
                disabled={!isEditable} 
                onChange={handleChange}/>
            </div>
            <div className='edit-button'>
                <button onClick={handleEdit}>
                {isEditable ? 'Save' : 'Edit'}
            </button>
            </div>
        </div>
      </div>
      </Draggable>
  )
}
