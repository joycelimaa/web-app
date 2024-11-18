import React, { useState, useEffect } from 'react'
import './Configuration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Draggable from 'react-draggable'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Configuration({toggleConfig}) {
    
    
    const [isEditable, setIsEditable] = useState(false)
  
    
    const handleEdit = () => {
      setIsEditable((prevEditable) => !prevEditable)
    }

    const [ id ] = useState(localStorage.getItem('userId') || '');
    const [token] = useState(localStorage.getItem('token') || '');
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {}
    });

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/user/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(token)}`
                    }
                });
                
                setValue('name', response.data.user.name);
                setValue('password', response.data.user.password)
                setValue('email', response.data.user.email);
            } catch (error) {
                console.error('Error fetching client data:', error);
            }
        };

        fetchClientData();
    }, [id, setValue, token]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8000/user/${id}`, {
                name: data.name,
                password: data.password,
                email: data.email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(token)}`
                }
            });
            console.log('Client updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

  return (
    <Draggable handle=".config-title">
    <div className='config'>
        <div className="config-minus" onClick={toggleConfig}>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div className="config-title">
            <p>Configuration</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='config-div'>
            <div className="config-input-group">
                <label htmlFor="username">Name</label>
                <input type="text"  
                name="name" 
                id="name" {...register('name', { required: true })}
                disabled={!isEditable} 
                 />
            </div>
            <div className="config-input-group">
                <label htmlFor="email">Email</label>
                <input type="email" 
                name="email" 
                id="email" {...register('email', { required: true })}
                disabled={!isEditable} 
                />
            </div>
            <div className="config-input-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                name="password" 
                id="password" {...register('password', { required: true })}
                disabled={!isEditable} 
                />
            </div>
            <div className='edit-button'>
                <button type="submit" onClick={handleEdit}>
                {isEditable ? 'Save' : 'Edit'}
            </button>
            </div>
        </div>
        </form>
      </div>
      </Draggable>
  )
}
